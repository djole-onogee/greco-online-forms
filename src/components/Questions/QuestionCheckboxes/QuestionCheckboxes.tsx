"use client";
import React from "react";
import {
  ButtonFormWrap,
  CardPadding,
  FormText,
  QuestionWrap,
} from "./QuestionCheckboxesStyle";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

type Props = { value: any; onChange: any; label: string };

function QuestionCheckboxes({ value, onChange, label }: Props) {
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText></FormText>
      </QuestionWrap>
      <FormControlLabel
        control={<Checkbox onChange={onChange} value={value} />}
        label={<Typography fontWeight={800}>{label}</Typography>}
      />
    </CardPadding>
  );
}

export default QuestionCheckboxes;
