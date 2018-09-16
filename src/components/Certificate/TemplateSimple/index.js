import React, { PureComponent } from "react";
import { Link } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { DateTime } from "luxon";

import LogoPng from "./assets/logo.png";
import SignaturePng from "./assets/minora-sign.png";

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
  position: fixed;
  bottom: -20px;
  /* margin: 0 auto; */
`;

class Template extends PureComponent {
  render() {
    const { id, name, eventName, date, location, hours } = this.props;
    const url = `https://certificados.cades.natal.br/view/${id}`;
    const datetime = DateTime.fromISO(date);

    return (
      <Certificate size="A4" orientation="landscape">
        <MainContainer>
          <Logo src={LogoPng} />
          <Heading>Certificado de Participação</Heading>
          <SinglelineText>Certificamos que</SinglelineText>
          <Name>{name}</Name>
          <MultilineText>
            participou do {eventName} realizado no dia{" "}
            {datetime.setLocale("pt-BR").toLocaleString(DateTime.DATE_FULL)} no{" "}
            {location} com carga horária total de {hours} horas.
          </MultilineText>
          <Signature src={SignaturePng} />
          <SignatureSubject>Leonardo Ataide Minora</SignatureSubject>
          <SignatureRole>Professor Titular, IFRN</SignatureRole>
          <FooterText>
            Para verificar a autencidade deste documento acesse{" "}
            <Link src={url}>{url}</Link>
          </FooterText>
        </MainContainer>
      </Certificate>
    );
  }
}

Template.selector = (eventData, participantData) => ({
  ...eventData,
  ...participantData
});

export default Template;
