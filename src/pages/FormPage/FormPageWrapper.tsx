"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormPage from "./FormPage";

interface Props {}

function FormPageWrapper({}: Props) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <FormPage />
    </FormProvider>
  );
}

export default FormPageWrapper;
