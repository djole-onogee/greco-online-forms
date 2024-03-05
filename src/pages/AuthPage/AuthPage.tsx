"use client";
import React, { useEffect, useState } from "react";
import {
  AnimatedIcon,
  BackgroundWrap,
  LogoIconWrap,
  PhoneNumberWrap,
  StyledPaper,
} from "./AuthPageStyle";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import Image from "next/image";

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
