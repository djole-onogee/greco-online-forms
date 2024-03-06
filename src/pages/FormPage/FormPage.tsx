"use client";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import Question from "@/components/Questions/QuestionYesNo/QuestionYesNo";
import { Controller, useFormContext } from "react-hook-form";
import QuestionYesNo from "@/components/Questions/QuestionYesNo/QuestionYesNo";
import { motion } from "framer-motion";
import Image from "next/image";
import { Paper } from "@mui/material";
import styled from "styled-components";
import { keyframes } from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ringAnimation = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(15deg); }
  20% { transform: rotate(-10deg); }
  30% { transform: rotate(10deg); }
  40% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  60% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;

const AnimatedIcon = styled(LocalPhoneIcon)`
  animation: ${ringAnimation} 2s ease-in-out infinite;
  margin-right: 3px;
`;

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

const StyledPaper = styled(Paper)`
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000026;
  min-height: 30dvh;
  min-width: 30dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhoneNumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px 20px 10px 20px;
`;

type Props = {};

function FormPage({}: Props) {
  const router = useRouter();

  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext() ?? {};

  if (!control) return null;

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
      </BackgroundWrap>
    </PageTransition>
  );
}

export default FormPage;
