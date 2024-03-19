import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  orangeText: {
    margin: 0,
    fontSize: 14,
    textAlign: "justify",
    color: "#e67d22",
  },
  orangeTextSmall: {
    margin: 0,
    fontSize: 9,
    textAlign: "justify",
    color: "#e67d22",
  },

  mainHeader: {
    display: "flex",
    flex: 1,
    flexDirecion: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  page: {
    fontSize: 9,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  centeredSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  emptySection: {
    margin: 20,
  },
  emptySectionS: {
    margin: 7,
  },
  emptySectionXS: {
    margin: 3,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cell: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  cellSecondTable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    width: "50%",
  },
  tableOld: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableRowLeft: {
    width: "50%",
    justifyContent: "flex-start",
  },
  tableRowRight: {
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
  },
  boldedText: {
    margin: 0,
    fontSize: 10,
    fontWeight: 300,
    textAlign: "left",
  },
  tableHeader: {
    margin: 0,
    fontSize: 12,
    fontWeight: 300,
    textAlign: "left",
  },
  text: {
    margin: 0,
    fontSize: 10,
    textAlign: "justify",
  },
  smallText: {
    margin: 0,
    fontSize: 8,
    textAlign: "justify",
  },
  extraSmallText: {
    margin: 0,
    fontSize: 6,
    textAlign: "justify",
  },
  textUnderlinedNormalSize: {
    margin: 0,
    fontSize: 10,
    textAlign: "justify",
    textDecoration: "underline",
  },
  textUnderlinedSmallSize: {
    margin: 0,
    fontSize: 8,
    textAlign: "justify",
    textDecoration: "underline",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    padding: "100px",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  tableColHeader: {
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderRightStyle: "solid",
  },
  tableCol: {
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderRightStyle: "solid",
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  signaturesWrap: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  signature: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    fontSize: 10,
  },
});
