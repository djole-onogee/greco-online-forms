"use client";
import {
  Button,
  CircularProgress,
  Container,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  styled,
} from "@mui/material";
import ReactPDF, { pdf } from "@react-pdf/renderer";
import React, { useCallback, useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SignatureComponent from "./SignatureComponent";
import PageTransition from "@/components/PageTransition/PageTransition";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DemoTemplate from "./Templates/DemoTemplate";
import { FormContext } from "@/contexts/FormContext";
import { appService } from "@/utils/gofService";
import { useFormContext } from "react-hook-form";
import { render } from "react-dom";

const DynamicPDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const StyledButton = styled(Button)`
  color: #fff;
  border-color: #0a60a8;
  background-color: #0a60a8;
  text-transform: none;
  min-width: 300px;
  margin: 30px auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(10, 96, 168, 0.8);
  }
`;
const StyledPaper = styled(Paper)`
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000026;
  min-width: 30dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const LogoIconWrap = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
}));

const Signing = () => {
  const [signatureImageURI, setSignatureImageURI] = useState(null);
  const [signatureUploadImage, setSignatureUploadImage] = useState(null);
  const [url, setUrl] = useState<string | null>(null);
  const [payloadFinal, setPayloadFinal] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { answers, id, questions } = useContext(FormContext);

  const router = useRouter();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    renderSections(questions);
  }, [answers]);

  const renderSections = (questions: any) => {
    const payload = questions?.sections?.map((section: any, index: number) => {
      return section?.fields?.map((question: any, index: number) => {
        let value = answers[question.id];
        console.log("value", value);
        if (
          typeof value === "object" &&
          value !== null &&
          question.type !== 4
        ) {
          value = JSON.stringify(value);
        }
        if (question.type === 4) {
          return {
            id: question.id,
            value: value?.value,
            type: question.type,
          };
        } else if (question?.type === 0) {
          return {
            id: question.id,
            value: value === undefined ? null : value,
            type: question.type,
          };
        } else if (question?.type === 3) {
          return {
            id: question.id,
            value: value === "0" ? true : false,
            type: question.type,
          };
        } else if (question?.type === 5) {
          return {
            id: question.id,
            value: value.replace(/\"/g, ""),
            type: question.type,
          };
        }
        return {
          id: question.id,
          value: value,
          type: question.type,
        };
      });
    });

    setPayloadFinal(payload?.flat()?.filter((e: any) => e.value !== undefined));
  };

  const getPDFURL = async () => {
    const template = (
      <DemoTemplate
        signature={signatureImageURI}
        signatureUploadImage={signatureUploadImage}
        answers={answers}
      />
    );
    const instance = pdf(template);
    const blob = await instance.toBlob();

    const url = URL.createObjectURL(blob);
    setUrl(url);
  };

  useEffect(() => {
    getPDFURL();
  }, [signatureImageURI]);

  const handleFinishProcess = async () => {
    const template = (
      <DemoTemplate
        signature={signatureImageURI}
        signatureUploadImage={signatureUploadImage}
        answers={answers}
      />
    );
    const instance = pdf(template);
    let blobPayload;
    try {
      blobPayload = await instance.toBlob();
      const formData = new FormData();
      formData.append("file", blobPayload, "document.pdf");

      const payloadAnswers = { answers: [...payloadFinal] };

      formData.append("formData", JSON.stringify(payloadAnswers));
      setIsLoading(true);
      await appService
        .uploadPdf(id, formData)
        .then(() => {
          setIsLoading(false);
          router.push("/finish");
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("err", err);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <PageTransition>
      <StyledPaper>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <LogoIconWrap>
            {" "}
            <Image
              alt="asd"
              src="./assets/greco-logo.svg"
              height={75}
              width={75}
            />
          </LogoIconWrap>
        </motion.div>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <DynamicPDFViewer
                width={"100%"}
                height={500}
                style={{ borderRadius: "12px", marginTop: 20 }}
                showToolbar={true}
              >
                <DemoTemplate
                  signature={signatureImageURI}
                  signatureUploadImage={signatureUploadImage}
                  answers={answers}
                />
              </DynamicPDFViewer>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <SignatureComponent onSignatureSave={setSignatureImageURI} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <ButtonWrap>
          <StyledButton
            variant="contained"
            disabled={!signatureImageURI || isLoading}
            onClick={() => {
              handleFinishProcess();
            }}
          >
            {isLoading ? <CircularProgress size={24} /> : "Create Document"}
          </StyledButton>
        </ButtonWrap>
      </StyledPaper>
    </PageTransition>
  );
};

export default Signing;
