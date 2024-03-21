"use client";
import React from "react";

import {
  Container,
  Button,
  Card,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import PageTransition from "@/components/PageTransition/PageTransition";

const StyledPaper = styled(Paper)`
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000026;
  min-width: 30dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

const PaddingFull = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const TextTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "21px",
  textAlign: "center",
  paddingBottom: theme.spacing(1),
  color: "#2870ED",
}));

const TextTitleSecond = styled("h3")(({ theme }) => ({
  fontFamily: "Segoe UI",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "37px",
  letterSpacing: "0px",
  textAlign: "center",
}));

const TextSubTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontSize: "20px",
  fontWeight: "400",
  textAlign: "center",
  color: "#2D2D2D",
}));

const MarginTopBottom = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const TextCenter = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(2),
}));

const LogoIconWrap = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

function FinishedProcess() {
  return (
    <PageTransition>
      <MarginTopBottom>
        <Container>
          <StyledPaper>
            <LogoIconWrap>
              {" "}
              <Image
                alt="asd"
                src="./assets/greco-logo.svg"
                height={75}
                width={75}
              />
            </LogoIconWrap>
            <TextCenter>
              {/* <img src={"/assets/endprocess/finish-process.svg"} alt="end" /> */}
            </TextCenter>
            <PaddingFull>
              <TextTitleSecond style={{ paddingTop: 5, marginTop: 0 }}>
                {"Das Formular wurde erfolgreich an den Makler weitergeleitet"}
              </TextTitleSecond>
              {/* <TextSubTitle>{"Lorem Ipsum"}</TextSubTitle> */}
            </PaddingFull>
          </StyledPaper>
        </Container>
      </MarginTopBottom>
    </PageTransition>
  );
}

export default FinishedProcess;
