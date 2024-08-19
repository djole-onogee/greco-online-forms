import React, { useContext, useEffect, useState } from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";

import { styles } from "./DemoTemplateStyles";
import { FormContext } from "@/contexts/FormContext";
import dayjs from "dayjs";

function DemoTemplate({ signature, signatureUploadImage, answers }: any) {
  console.log("answers", answers);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.tableOld}>
            <View>
              <Image
                src={"./assets/greco-logo.png"}
                style={{ height: "60px", width: "60px" }}
              />
              <View style={styles.emptySectionS}></View>
              <Text style={styles.orangeText}>Schadenmeldung Kfz</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: "10px",
              }}
            >
              <Text style={styles.orangeTextSmall}>greco.services</Text>
            </View>
          </View>

          <View style={styles.emptySection}></View>
          <View style={styles.row}>
            <Text style={styles.tableHeader}>Art des Schadens</Text>
            <Text style={styles.text}></Text>
          </View>
          <View style={styles.emptySectionS}></View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.boldedText}>Kfz Haftpflicht </Text>
              {answers?.Kfz_Haftpflicht === true ? (
                <Image
                  src={"./assets/check.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              ) : (
                <Image
                  src={"./assets/redx.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              )}
            </View>
            <View style={styles.cell}>
              <Text style={styles.boldedText}>Kfz Kasko </Text>
              {answers?.Kfz_Kasko === true ? (
                <Image
                  src={"./assets/check.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              ) : (
                <Image
                  src={"./assets/redx.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              )}
            </View>
            <View style={styles.cell}>
              <Text style={styles.boldedText}>Kfz Rechtsschutz </Text>
              {answers?.Kfz_Rechtsschutz === true ? (
                <Image
                  src={"./assets/check.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              ) : (
                <Image
                  src={"./assets/redx.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              )}
            </View>
          </View>

          <View style={styles.emptySection}></View>

          <View style={styles.row}>
            <Text style={styles.tableHeader}>Allgemeine Daten</Text>
            <Text style={styles.text}></Text>
          </View>

          <View style={styles.emptySectionS}></View>
          <View style={styles.row}>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Polizzennummer:</Text>
              <Text style={styles.boldedText}>{answers?.Polizzennummer}</Text>
            </View>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Versicherer: </Text>
              <Text style={styles.boldedText}>{answers?.Versicherer}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Schadendatum: </Text>
              <Text style={styles.boldedText}>
                {dayjs(answers?.Schadendatum).format("DD-MM-YYYY")}
              </Text>
            </View>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Zeit: </Text>
              <Text style={styles.boldedText}>{answers?.Zeit}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Schadenort:</Text>
              <Text style={styles.boldedText}>{answers?.Schadenort}</Text>
            </View>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Schaden-Nr. Intern: </Text>
              <Text style={styles.boldedText}>
                {answers?.Schaden_Nr_Intern}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Behörd. Aufnahme: </Text>
              {answers?.Behord_Aufnahme === "0" ? (
                <Image
                  src={"./assets/check.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              ) : (
                <Image
                  src={"./assets/redx.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              )}
            </View>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Aktenzahl/Behörde: </Text>
              <Text style={styles.boldedText}>
                {answers?.Aktenzahl_Behorde}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Verletzte: </Text>
              {answers?.Verletzte === "0" ? (
                <Image
                  src={"./assets/check.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              ) : (
                <Image
                  src={"./assets/redx.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              )}
            </View>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Name Verletzte: </Text>
              <Text style={styles.boldedText}>{answers?.Name_Verletzte}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Zeugen: </Text>
              {answers?.Zeugen === "0" ? (
                <Image
                  src={"./assets/check.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              ) : (
                <Image
                  src={"./assets/redx.png"}
                  style={{ height: "10px", width: "10px" }}
                />
              )}
            </View>

            <View style={styles.cellSecondTable}>
              <Text style={styles.boldedText}>Name Zeugen: </Text>
              <Text style={styles.boldedText}>{answers?.Name_Zeugen}</Text>
            </View>
          </View>
          <View style={styles.cellSecondTable}>
            <Text style={styles.boldedText}>Fault: </Text>
            <Text style={styles.boldedText}>{answers?.Fault?.label}</Text>
          </View>
          <View style={styles.signaturesWrap}>
            <View style={styles.signature}></View>
            <View style={styles.signature}></View>
            <View style={styles.signature}>
              {signature ? (
                <Image source={signature} style={{ height: 110 }}></Image>
              ) : signatureUploadImage ? (
                <Image source={signatureUploadImage}></Image>
              ) : null}
              <Text>Signature</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default DemoTemplate;
