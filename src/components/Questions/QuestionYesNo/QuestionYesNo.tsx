"use client";
import React from "react";
import {
  ButtonFormWrap,
  CardPadding,
  FormText,
  QuestionWrap,
} from "./QuestionYesNoStyle";
import { Button } from "@mui/material";

type Props = { value: any; onChange: any };

function QuestionYesNo({ value, onChange }: Props) {
  return (
    <CardPadding>
      <QuestionWrap>
        <FormText>
          This is the question asdsdasdsada ssdasdsadasdsadsadsfass sdadsadasds
          adasdasdasdas asd sadasdasdsdasdsadasdasdasdsadsdasddasdsadas
          dsdsadsadasds dasdsdadsadasds dasdasdas dasdasdsa adsdasd sadasds
          dasdasdas
        </FormText>

        <ButtonFormWrap>
          <Button
            variant={value === "0" ? "contained" : "outlined"}
            onClick={() => {
              onChange("0");
            }}
            style={{ textTransform: "none" }}
          >
            Yes
          </Button>
          <Button
            variant={value === "1" ? "contained" : "outlined"}
            onClick={() => {
              onChange("1");
            }}
            style={{ textTransform: "none" }}
          >
            No
          </Button>
        </ButtonFormWrap>
      </QuestionWrap>
    </CardPadding>
  );
}

export default QuestionYesNo;
