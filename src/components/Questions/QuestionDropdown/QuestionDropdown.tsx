"use client";
import React from "react";

import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { CardPadding, FormText, QuestionWrap } from "./QuestionDropdownStyle";

type Props = { value: any; onChange: any; label: string; options: any };

function QuestionCheckboxes({ value, onChange, label, options }: Props) {
  const handleValueChange = (_: any, newValue: any) => {
    onChange(newValue);
  };
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText>{label}</FormText>
      </QuestionWrap>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        // value={value}
        onChange={handleValueChange}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </CardPadding>
  );
}

export default QuestionCheckboxes;
