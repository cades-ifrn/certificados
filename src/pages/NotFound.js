import React, { Component } from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #56ccf2,
    #2d9cdb
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #56ccf2,
    #2d9cdb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Logo = styled.img`
  margin-bottom: 2rem;
  width: 80%;
`;

const Wrapper = styled.div`
  margin-top: 5rem;
  max-width: 350px;
  text-align: center;
`;

const Segment = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 0.2rem;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Logo src={logo} />
          <Segment>
            <h3>Vish! Isso não tá certo</h3>
            <Link to={"/"}>Voltar para o começo</Link>
          </Segment>
        </Wrapper>
      </Container>
    );
  }
}
