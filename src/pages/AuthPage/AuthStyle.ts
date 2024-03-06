import { Paper } from "@mui/material";
import styled from "styled-components";
import { keyframes } from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const ringAnimation = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(15deg); }
  20% { transform: rotate(-10deg); }
  30% { transform: rotate(10deg); }
  40% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  60% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;

export const AnimatedIcon = styled(LocalPhoneIcon)`
  animation: ${ringAnimation} 2s ease-in-out infinite;
  margin-right: 3px;
`;

export const BackgroundWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: #fff;
`;

export const StyledPaper = styled(Paper)`
  border-radius: 12px;
  box-shadow: 0px 0px 12px 0px #00000026;
  min-height: 30dvh;
  min-width: 30dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PhoneNumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px 20px 5px 20px;
`;
