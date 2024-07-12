"use client";
import React from "react";
import { CardPadding, FormText, QuestionWrap } from "./QuestionDatePickerStyle";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

type Props = { value: any; onChange: any; label: string; disabled: boolean };

function QuestionCheckboxes({ value, onChange, label, disabled }: Props) {
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText>{label}</FormText>
      </QuestionWrap>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={disabled}
          onChange={(newValue: any) => {
            const formattedDate = dayjs(newValue).toISOString();
            onChange(formattedDate);
          }}
          value={value}
        />
      </LocalizationProvider>
    </CardPadding>
  );
}

export default QuestionCheckboxes;
