"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import { Controller, useFormContext } from "react-hook-form";
import QuestionYesNo from "@/components/Questions/QuestionYesNo/QuestionYesNo";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import QuestionTextInput from "@/components/Questions/QuestionTextInput/QuestionTextInput";
import { Button, Paper } from "@mui/material";
import QuestionCheckboxes from "@/components/Questions/QuestionCheckboxes/QuestionCheckboxes";
import { FormContext } from "@/contexts/FormContext";
import QuestionDatePicker from "@/components/Questions/QuestionDatePicker/QuestionDatePicker";
import { all } from "axios";
import dayjs from "dayjs";

const BackgroundWrap = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const LogoIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 50px;
`;

const StyledButton = styled(Button)`
  color: #fff;
  border-color: #0a60a8;
  background-color: #0a60a8;
  text-transform: none;
  margin: 30px auto;
  paddingbottom: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(10, 96, 168, 0.8);
  }
`;

const StyledPaper = styled(Paper)`
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000026;
  min-height: 30dvh;
  min-width: 30dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

const QuestionWrap = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  & > div {
    flex: 1;
    min-width: ${(props) =>
      props.content === "0" ? `calc(30% - 20px)` : "calc(50% - 20px)"};
  }
`;

const SectionWrap = styled(Paper)`
  display: flex;
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000026;
  flex-direction: row;
  padding: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
`;

type Props = {};

function FormPage({}: Props) {
  const {
    control,
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext() ?? {};
  const { questions, setAnswers } = useContext(FormContext);

  const router = useRouter();
  const all = watch();

  useEffect(() => {
    questions?.sections?.map((section: any, index: number) => {
      section?.fields?.map((question: any, index: number) => {
        if (question?.defaultValue === null) return;
        if (question?.id === "Schadendatum") {
          setValue(`${question?.id}`, dayjs(question?.defaultValue));
        } else {
          setValue(`${question?.id}`, question?.defaultValue);
        }
      });
    });
  }, [questions]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const validateQuestion = (value: any) => {
    if (value === null || value === "" || value === undefined) {
      return "please-answer-qestion";
    }
    return true;
  };

  const renderSections = (questions: any) => {
    return questions?.sections?.map((section: any, index: number) => {
      return (
        <>
          <p
            style={{
              color: "black",
              width: "88%",
              marginBottom: 10,
              marginLeft: "50px",
            }}
          >
            {" "}
            {section.title}
          </p>
          <SectionWrap>
            <QuestionWrap content={index === 0 ? "0" : "1"}>
              {section?.fields?.map((question: any, index: number) => {
                if (question?.type === 2) {
                  return (
                    <Controller
                      key={index}
                      {...register(`${question?.id}`, {
                        validate: validateQuestion,
                      })}
                      defaultValue={question?.defaultValue}
                      name={`${question?.id}`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={fadeInVariants}
                        >
                          <QuestionCheckboxes
                            value={value}
                            onChange={onChange}
                            label={question?.label}
                          />
                        </motion.div>
                      )}
                    />
                  );
                } else if (question?.type === 0) {
                  return (
                    <Controller
                      key={index}
                      {...register(`${question?.id}`, {
                        validate: validateQuestion,
                      })}
                      defaultValue={question?.defaultValue}
                      name={`${question?.id}`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={fadeInVariants}
                        >
                          <QuestionTextInput
                            value={value}
                            onChange={onChange}
                            label={question?.label}
                          />
                        </motion.div>
                      )}
                    />
                  );
                } else if (question?.type === 3) {
                  return (
                    <Controller
                      key={index}
                      {...register(`${question?.id}`, {
                        validate: validateQuestion,
                      })}
                      defaultValue={question?.defaultValue}
                      name={`${question?.id}`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={fadeInVariants}
                        >
                          <QuestionYesNo
                            value={value}
                            onChange={onChange}
                            label={question?.label}
                          />
                        </motion.div>
                      )}
                    />
                  );
                } else if (question?.type === 5) {
                  return (
                    <Controller
                      key={index}
                      {...register(`${question?.id}`, {
                        validate: validateQuestion,
                      })}
                      defaultValue={dayjs(question?.defaultValue)}
                      name={`${question?.id}`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={fadeInVariants}
                        >
                          <QuestionDatePicker
                            value={value}
                            onChange={onChange}
                            label={question?.label}
                          />
                        </motion.div>
                      )}
                    />
                  );
                } else return "aaa";
              })}
            </QuestionWrap>
          </SectionWrap>
        </>
      );
    });
  };

  return (
    <PageTransition>
      <BackgroundWrap>
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
        <form>{renderSections(questions)}</form>
        <StyledButton
          variant="outlined"
          onClick={() => {
            trigger();
            const allAnswers = watch();
            setAnswers(allAnswers);
            router.push("form-preview");
          }}
        >
          Confirm Answers
        </StyledButton>
      </BackgroundWrap>
    </PageTransition>
  );
}

export default FormPage;
