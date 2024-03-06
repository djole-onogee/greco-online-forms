"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import { Controller, useFormContext } from "react-hook-form";
import QuestionYesNo from "@/components/Questions/QuestionYesNo/QuestionYesNo";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

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

type Props = {};

function FormPage({}: Props) {
  const { control, register, watch } = useFormContext();

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
