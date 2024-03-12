"use client";
import React from "react";
import {
  ButtonFormWrap,
  CardPadding,
  FormText,
  QuestionWrap,
} from "./QuestionTextInputStyle";
import { Button, TextField } from "@mui/material";

type Props = { value: any; onChange: any; label: string };

function QuestionTextInput({ value, onChange, label }: Props) {
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText>{label}</FormText>
        <TextField
          style={{
            width: "67%",
            marginBottom: "12px",
          }}
          id="standard-basic"
          variant="standard"
          label="Answer"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </QuestionWrap>
    </CardPadding>
  );
}

export default QuestionTextInput;
