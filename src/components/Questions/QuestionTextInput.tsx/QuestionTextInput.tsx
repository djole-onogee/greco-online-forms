"use client";
import React from "react";
import {
  ButtonFormWrap,
  CardPadding,
  FormText,
  QuestionWrap,
} from "./QuestionTextInputStyle";
import { Button, TextField } from "@mui/material";

type Props = { value: any; onChange: any };

function QuestionTextInput({ value, onChange }: Props) {
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText>
          This is the question asdsdasdsada ssdasdsadasdsadsadsfass sdadsadasds
          adasdasdasdas asd sadasdasdsdasdsadasdasdasdsadsdasddasdsadas
          dsdsadsadasds dasdsdadsadasds dasdasdas dasdasdsa adsdasd
          sadasdsdfsdfdsfdsfsdfdsfsdfsd dasdasdas
        </FormText>
      </QuestionWrap>
      <TextField
        style={{ width: "83%", marginTop: 7 }}
        id="standard-basic"
        variant="standard"
        label="Answer"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </CardPadding>
  );
}

export default QuestionTextInput;
