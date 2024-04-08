import { Card, styled } from "@mui/material";

export const QuestionWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const PaddingFull = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const FormWrap = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: theme.spacing(2),
}));

export const ButtonFormWrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "flex-end",
}));

export const HorizontalLine = styled("hr")(({ theme }) => ({
  borderColor: "rgba(0, 0, 0, 0.2)",
  width: "97%",
}));

export const RedText = styled("span")(({ theme }) => ({
  color: "#FF2D2D",
  fontSize: 14,
  marginLeft: 15,
}));

export const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

export const CardPadding = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

export const RedCardPadding = styled(Card)(({ theme }) => ({
  border: "1px solid #FF2D2D",
  fontSize: 14,
  padding: theme.spacing(2),
  background: "#FF2D2D26",
}));

export const TitleText = styled("h3")(({ theme }) => ({
  margin: 0,
  color: "#2870ED",
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "center",
  padding: theme.spacing(2),
}));

export const FormText = styled("p")(({ theme }) => ({
  margin: 0,
  padding: 0,
  fontSize: "16px",
  lineHeight: "26px",
  fontWeight: "800",
}));
