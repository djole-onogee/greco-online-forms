"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import { Controller, useFormContext } from "react-hook-form";
import QuestionYesNo from "@/components/Questions/QuestionYesNo/QuestionYesNo";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import QuestionTextInput from "@/components/Questions/QuestionTextInput.tsx/QuestionTextInput";
import { Button, Paper } from "@mui/material";

const BackgroundWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  background-color: #fff;
  padding-top: 40px;
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
    min-width: calc(50% - 20px);
  }
`;
type Props = {};

function FormPage({}: Props) {
  const { control, register, watch } = useFormContext() ?? {};
  const router = useRouter();

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

  return (
    <PageTransition>
      <StyledPaper>
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

          <QuestionWrap>
            <Controller
              key={1}
              {...register(`firstQuestioText`, {
                validate: validateQuestion,
              })}
              name={`firstQuestionText`}
              control={control}
              render={({ field: { value, onChange } }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <QuestionTextInput value={value} onChange={onChange} />
                </motion.div>
              )}
            />

            <Controller
              key={1}
              {...register(`firstQuestion`, {
                validate: validateQuestion,
              })}
              name={`firstQuestion`}
              control={control}
              render={({ field: { value, onChange } }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <QuestionYesNo value={value} onChange={onChange} />
                </motion.div>
              )}
            />

            <Controller
              key={1}
              {...register(`secondQuestion`, {
                validate: validateQuestion,
              })}
              name={`secondQuestion`}
              control={control}
              render={({ field: { value, onChange } }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <QuestionYesNo value={value} onChange={onChange} />
                </motion.div>
              )}
            />
            <Controller
              key={1}
              {...register(`thirdQuestion`, {
                validate: validateQuestion,
              })}
              name={`thirdQuestion`}
              control={control}
              render={({ field: { value, onChange } }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <QuestionYesNo value={value} onChange={onChange} />
                </motion.div>
              )}
            />
            <Controller
              key={1}
              {...register(`fourthQuestion`, {
                validate: validateQuestion,
              })}
              name={`fourthQuestion`}
              control={control}
              render={({ field: { value, onChange } }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <QuestionYesNo value={value} onChange={onChange} />
                </motion.div>
              )}
            />
            <Controller
              key={1}
              {...register(`fifthQuestion`, {
                validate: validateQuestion,
              })}
              name={`fifthhQuestion`}
              control={control}
              render={({ field: { value, onChange } }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <QuestionYesNo value={value} onChange={onChange} />
                </motion.div>
              )}
            />
          </QuestionWrap>
          <StyledButton
            variant="outlined"
            onClick={() => router.push("form-preview")}
          >
            Confirm Answers
          </StyledButton>
        </BackgroundWrap>
      </StyledPaper>
    </PageTransition>
  );
}

export default FormPage;
