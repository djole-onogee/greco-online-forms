"use client";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./SignatureStyle.css";
import { Button, styled } from "@mui/material";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  padding: 10,
}));

const StyledButton = styled(Button)`
  color: #fff;
  border-color: #0a60a8;
  background-color: #0a60a8;
  text-transform: none;
  margin-top: 5px;
  margin-left: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(10, 96, 168, 0.8);
  }
`;

const SignatureComponent = ({ onSignatureSave }: any) => {
  const sigCanvas = useRef<any>(null);

  const saveSignature = () => {
    if (!sigCanvas.current) return;
    const imageURI = sigCanvas.current.toDataURL("image/png");

    if (sigCanvas.current.isEmpty()) {
      console.log("The canvas is blank");
    } else {
      onSignatureSave(imageURI);
    }
  };

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      onSignatureSave(null);
    }
  };

  return (
    <MainContainer>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="#104F84"
        canvasProps={{ className: "sigCanvas" }}
        velocityFilterWeight={1}
      />
      <ButtonContainer style={{ justifyContent: "initial" }}>
        <StyledButton variant="outlined" onClick={saveSignature}>
          {"Apply signature"}
        </StyledButton>
        <StyledButton variant="outlined" onClick={clearSignature}>
          {"Clear signature"}
        </StyledButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default SignatureComponent;
