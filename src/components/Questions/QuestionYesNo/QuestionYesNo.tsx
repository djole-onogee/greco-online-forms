"use client";
import React from "react";
import {
  ButtonFormWrap,
  CardPadding,
  FormText,
  QuestionWrap,
} from "./QuestionYesNoStyle";
import { Button } from "@mui/material";

type Props = { value: any; onChange: any; label: string };

function QuestionYesNo({ value, onChange, label }: Props) {
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText>{label}</FormText>

        <ButtonFormWrap>
          <Button
            variant={value === "0" ? "contained" : "outlined"}
            onClick={() => {
              onChange("0");
            }}
            style={{ textTransform: "none" }}
          >
            Ja
          </Button>
          <Button
            variant={value === "1" ? "contained" : "outlined"}
            onClick={() => {
              onChange("1");
            }}
            style={{ textTransform: "none" }}
          >
            Nein
          </Button>
        </ButtonFormWrap>
      </QuestionWrap>
    </CardPadding>
  );
}

export default QuestionYesNo;
