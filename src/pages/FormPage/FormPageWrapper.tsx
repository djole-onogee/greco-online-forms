"use client";
import React from "react";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";

interface FormPageWrapperProps {
  children: React.ReactNode;
}

function FormPageWrapper({ children }: FormPageWrapperProps) {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default FormPageWrapper;
