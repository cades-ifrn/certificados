import React from "react";
import styled from "styled-components";
import { PDFViewer, Document } from "@react-pdf/renderer";
import { Redirect } from "react-router-dom";
import hashids from "../hashids";
import registerFonts from "../registerFonts";

import { events } from "../data/events";

import Certificate from "../components/Certificate";

const Viewer = styled(PDFViewer)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 0px;
`;

export default class ViewPage extends React.Component {
  componentWillMount = () => {
    registerFonts();
  };

  render = () => {
    const {
      match: {
        params: { certificateId }
      }
    } = this.props;

    const [eventId, participantId] = hashids.decode(certificateId);
    const eventData = events[eventId];

    if (!eventData) {
      return <Redirect to={"/404"} />;
    }

    const participantData = eventData.participants[participantId];
    if (!participantData) {
      return <Redirect to={"/404"} />;
    }

    return (
      <Viewer>
        <Document>
          <Certificate
            id={certificateId}
            eventData={eventData}
            participantData={participantData}
          />
        </Document>
      </Viewer>
    );
  };
}
