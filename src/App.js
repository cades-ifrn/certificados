import React, { Component } from 'react';
import { Document, Text, Link } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';

import LogoPng from './cor-horizontal.png'
import WaterMarkPng from './preta-horizontal.png'

const Certificate = styled.Page`
  flex-direction: row;
  background: #f5f5f5;
`

const MainContainer = styled.View`
  padding: 10px;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  border: 10px #070742 solid;
`

const Heading = styled.Text`
  margin-bottom: 30px;
  font-size: 48px;
`

            
const Name = styled.Text`
  font-weight: bold;
  font-size: 36px;
`

const WaterMark = styled.Image`
  top: 10;
  left: -287.5;
  position: absolute;
  z-index: -1; 
`

const Logo = styled.Image`
  width: 250px;
  position: absolute;
  top: 10;
  left: 10;
`

const Paragraph = styled.Text`
  padding: 30px;
`

const FooterText = styled.Text`
  font-size: 10px;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
`


class App extends Component {
  render() {
    return (
      <Document height="100vh" width="100vw">
        <Certificate size="A4" orientation="landscape">
          <MainContainer>
            <Logo src={LogoPng} />
            <WaterMark src={WaterMarkPng} />
            <Heading>Certificado de Participação</Heading>
            <Name>Felipe Mateus Freire Pontes</Name>
            <Text>PARTICIPANTE</Text>
            <Paragraph>Certificamos que o participante compareceu ao Minicurso Introdução à GIT realizado no dia 25 de agosto de 2018, no CADESDAY #1, em Natal, Rio Grande do Norte, Brasil.</Paragraph>
            <Text>Carga-horária: 3 horas</Text>
            <FooterText>Para verificar a autencidade deste documento acesse <Link src="https://certificados.cades.natal/88d48172d0dc2b862e0c6312c14f675c4328d03a">https://certificados.cades.natal/88d48172d0dc2b862e0c6312c14f675c4328d03a</Link>.</FooterText>
          </MainContainer>
        </Certificate>
      </Document>
    );
  }
}

export default App;
