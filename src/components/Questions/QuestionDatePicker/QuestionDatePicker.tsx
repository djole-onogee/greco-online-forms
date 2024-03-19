"use client";
import React from "react";
import {
  ButtonFormWrap,
  CardPadding,
  FormText,
  QuestionWrap,
} from "./QuestionDatePickerStyle";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

type Props = { value: any; onChange: any; label: string };

function QuestionCheckboxes({ value, onChange, label }: Props) {
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText>{label}</FormText>
      </QuestionWrap>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(newValue: any) => {
            const formattedDate = dayjs(newValue).format("YYYY-MM-DD");
            onChange(formattedDate);
          }}
          value={value}
        />
      </LocalizationProvider>
    </CardPadding>
  );
}

export default QuestionCheckboxes;
