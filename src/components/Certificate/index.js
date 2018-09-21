import React from "react";

import { Redirect } from "react-router-dom";

import TemplateSimple from "./TemplateSimple";
import TemplateCommittee from "./TemplateCommittee";

const TEMPLATE = {
  1: TemplateSimple,
  2: TemplateCommittee
  // more templates
};

export default ({ id, eventData, participantData }) => {
  if (!!TEMPLATE[eventData.template]) {
    const Template = TEMPLATE[eventData.template];

    return (
      <Template
        id={id}
        {...TemplateSimple.selector(eventData, participantData)}
      />
    );
  }

  return <Redirect to={"/404"} />;
};
