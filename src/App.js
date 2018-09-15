import React, { Component } from "react";
import { Document, Text, Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import LogoPng from "./cor-horizontal.png";
import SignaturePng from "./minora-assinatura.png";

const Certificate = styled.Page`
  flex-direction: row;
  background: #fff;
`;

const MainContainer = styled.View`
  padding: 50px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: 10px #070742 solid;
  color: #0c0c0c;
  font-family: "Lato";
`;

const Heading = styled.Text`
  margin-bottom: 30px;
  font-size: 32px;
  text-transform: uppercase;
  color: #070742;
  font-family: "Lato-Bold";
`;

const Name = styled.Text`
  font-size: 36px;
  margin-bottom: 20px;
  font-family: "Lato-Bold";
`;

const Logo = styled.Image`
  width: 250px;
  margin-bottom: 30px;
`;

const Signature = styled.Image`
  width: 150px;
  margin-top: 30px;
`;

const SignatureSubject = styled.Text`
  width: 200px;
  border-top: 1px #fff solid;
  text-align: center;
  font-size: 12px;
  color: #070742;
  font-family: "Lato-Bold";
`;

const SignatureRole = styled.Text`
  font-size: 12px;
`;

const SinglelineText = styled.Text`
  margin-bottom: 20px;
`;

const MultilineText = styled.Text`
  margin-bottom: 20px;
  text-align: center;
`;

const FooterText = styled.Text`
  font-size: 10px;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Document height="100vh" width="100vw">
        <Certificate size="A4" orientation="landscape">
          <MainContainer>
            <Logo src={LogoPng} />
            <Heading>Certificado de Participação</Heading>
            <SinglelineText>Certificamos que</SinglelineText>
            <Name>Felipe Mateus Freire Pontes</Name>
            <MultilineText>
              participou do Minicurso de Introdução à GIT realizado no dia 25 de
              agosto de 2018 no CADESDAY #1 realizado no IFRN Campus
              Natal-Central com carga horária total de 3 horas.
            </MultilineText>
            <Signature src={SignaturePng} />
            <SignatureSubject>Leonardo Ataide Minora</SignatureSubject>
            <SignatureRole>Professor Titular, IFRN</SignatureRole>
            <FooterText>
              Para verificar a autencidade deste documento acesse{" "}
              <Link src="https://certificados.cades.natal/88d48172d0dc2b862e0c6312c14f675c4328d03a">
                https://certificados.cades.natal/88d48172d0dc2b862e0c6312c14f675c4328d03a
              </Link>
            </FooterText>
          </MainContainer>
        </Certificate>
      </Document>
    );
  }
}

export default App;
