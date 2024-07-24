"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormPage from "./FormPage";
import { Toaster } from "react-hot-toast";

interface Props {}

function FormPageWrapper({}: Props) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Toaster
        containerStyle={{
          position: "fixed",
          top: "10px",
          right: "-86vw",
          zIndex: 9999,
        }}
      />

      <FormPage />
    </FormProvider>
  );
}

export default FormPageWrapper;
