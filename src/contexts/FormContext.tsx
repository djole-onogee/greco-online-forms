"use client";
import { createContext, useState, ReactNode, useEffect } from "react";

const defaultProvider: any = {};

const FormContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const FormProvider = ({ children }: Props) => {
  const [questions, setQuestions] = useState(null);
  const values = { questions, setQuestions };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
