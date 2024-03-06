"use client";
import React, { useEffect, useState } from "react";
import {
  AnimatedIcon,
  BackgroundWrap,
  LogoIconWrap,
  PhoneNumberWrap,
  StyledPaper,
} from "./FormStyle";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import Question from "@/components/Questions/QuestionYesNo/QuestionYesNo";
import { Controller, useFormContext } from "react-hook-form";
import QuestionYesNo from "@/components/Questions/QuestionYesNo/QuestionYesNo";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function FormPage({}: Props) {
  const router = useRouter();
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext();

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
