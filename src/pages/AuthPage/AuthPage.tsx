"use client";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import Image from "next/image";
import { Paper } from "@mui/material";
import styled from "styled-components";
import { keyframes } from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ringAnimation = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(15deg); }
  20% { transform: rotate(-10deg); }
  30% { transform: rotate(10deg); }
  40% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  60% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;

const AnimatedIcon = styled(LocalPhoneIcon)`
  animation: ${ringAnimation} 2s ease-in-out infinite;
  margin-right: 3px;
`;

const BackgroundWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: #fff;
`;

const StyledPaper = styled(Paper)`
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000026;
  min-height: 30dvh;
  min-width: 30dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const PhoneNumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px 20px 5px 20px;
`;

type Props = {};

function AuthPage({}: Props) {
  const [lastDigits, setLastDigits] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log("lastDigits", lastDigits.length);
    if (lastDigits?.length === 3) {
      console.log("confirm");
      router.push("/form");
    }
  }, [lastDigits]);

  return (
    <PageTransition>
      <BackgroundWrap>
        <StyledPaper>
          <LogoIconWrap>
            {" "}
            <Image
              alt="asd"
              src="./assets/greco-logo.svg"
              height={70}
              width={70}
            />
          </LogoIconWrap>
          <PhoneNumberWrap>
            <AnimatedIcon />
            <p>+381 64 1235XXX</p>
          </PhoneNumberWrap>
          <TextField
            id="standard-basic"
            variant="standard"
            label="Enter last three digits"
            value={lastDigits}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^\d]/g, "");
              if (newValue.length <= 3) {
                setLastDigits(newValue);
              }
            }}
          />
        </StyledPaper>
      </BackgroundWrap>
    </PageTransition>
  );
}

export default AuthPage;
