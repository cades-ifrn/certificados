import React, { Component } from "react";
import styled from "styled-components";
import hashids from "../hashids";
import events from "../data/events";

import { Input } from "reactstrap";
import Event from "../components/Event";

import logo from "../assets/logo.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
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

const Events = styled.div`
  margin-top: 1rem;
  display: flex;
  overflow-x: auto;
  padding: 1rem;
`;

const P = styled.p`
  color: #fff;
  margin-top: 1rem;
`;

export default class Home extends Component {
  state = { email: "" };

  validateEmail = email =>
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  handleChange = key => event => {
    const { value } = event.target;
    this.setState(() => ({
      [key]: value
    }));
  };

  findParticipations = () => {
    const { email } = this.state;

    if (email === "" || !this.validateEmail(email)) {
      return [];
    }

    const lowerCaseEmail = email.toLowerCase();

    return Object.keys(events)
      .map(eventId => {
        const participantId = events[eventId].participants.findIndex(
          p => p.email.toLowerCase() === lowerCaseEmail
        );

        if (participantId > -1) {
          return { eventId, participantId };
        }

        return null;
      })
      .filter(Boolean);
  };

  render() {
    const { email } = this.state;
    const participations = this.findParticipations();

    return (
      <Container>
        <Wrapper>
          <Logo src={logo} />
          <Segment>
            <Input
              value={email}
              onChange={this.handleChange("email")}
              placeholder="Informe seu email"
            />
          </Segment>
          {participations.length > 0 ? (
            <Events>
              {participations.map(({ eventId, participantId }, index) => {
                const event = events[eventId];

                return (
                  <Event
                    key={index}
                    type={event.meta.type}
                    name={event.meta.name}
                    date={event.date}
                    location={event.meta.location}
                    hours={event.hours}
                    url={`/view/${hashids.encode(eventId, participantId)}`}
                  />
                );
              })}
            </Events>
          ) : (
            this.validateEmail(email) && <P>Nenhuma participação encontrada.</P>
          )}
        </Wrapper>
      </Container>
    );
  }
}
