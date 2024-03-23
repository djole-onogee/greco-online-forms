"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition/PageTransition";
import Image from "next/image";
import { Paper } from "@mui/material";
import styled from "styled-components";
import { keyframes } from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { appService } from "@/utils/gofService";
import { motion } from "framer-motion";
import { FormContext } from "@/contexts/FormContext";
import { useSearchParams } from "next/navigation";

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

const shakeAnimation = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { type: "linear", duration: 0.4 },
  },
};

type Props = {};

function AuthPage({}: Props) {
  const [lastDigits, setLastDigits] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setQuestions, setId } = useContext(FormContext);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      setId(id);
    }
  }, [id]);

  const fetchInitialData = async () => {
    try {
      const response = await appService.initialRequest(id);
      setPhoneNumber(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, [id]);

  useEffect(() => {
    setError(false);

    const checkPhoneNumber = async () => {
      if (lastDigits?.length === 4) {
        try {
          setLoading(true);
          const response = await appService.checkPhoneNumber(id, {
            phoneNumber: lastDigits,
          });
          if (response) {
            setLoading(false);
            setQuestions(response?.data);
            router.push("/form");
          }
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }
    };

    checkPhoneNumber();
  }, [lastDigits]);

  return (
    <PageTransition>
      <BackgroundWrap>
        <motion.div animate={error ? "shake" : ""} variants={shakeAnimation}>
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
            {phoneNumber ? (
              <PhoneNumberWrap>
                <AnimatedIcon />
                <p>{phoneNumber}</p>{" "}
              </PhoneNumberWrap>
            ) : (
              <Stack
                sx={{
                  width: "60%",
                  color: "grey.500",
                  marginTop: "15px",
                  marginBottom: "15 px",
                }}
                spacing={2}
              >
                <LinearProgress color="primary" />
              </Stack>
            )}

            {loading ? (
              <CircularProgress size={25} style={{ marginTop: 15 }} />
            ) : (
              <TextField
                id="standard-basic"
                variant="standard"
                label="Enter last four digits"
                value={lastDigits}
                color={error ? "warning" : "primary"}
                onChange={(e) => {
                  const newValue = e.target.value.replace(/[^\d]/g, "");
                  if (newValue.length <= 4) {
                    setLastDigits(newValue);
                  }
                }}
              />
            )}
          </StyledPaper>
        </motion.div>
      </BackgroundWrap>
    </PageTransition>
  );
}

export default AuthPage;
