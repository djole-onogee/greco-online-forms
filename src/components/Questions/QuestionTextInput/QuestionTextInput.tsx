"use client";
import React from "react";
import {
  ButtonFormWrap,
  CardPadding,
  FormText,
  QuestionWrap,
} from "./QuestionTextInputStyle";
import { Button, TextField } from "@mui/material";

type Props = { value: any; onChange: any; label: string; disabled: boolean };

function QuestionTextInput({ value, onChange, label, disabled }: Props) {
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
          disabled={disabled}
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
