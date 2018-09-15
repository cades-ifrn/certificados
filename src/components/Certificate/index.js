import React from "react";

import { Redirect } from "react-router-dom";

import TemplateSimple from "./TemplateSimple";

const TEMPLATE_SIMPLE = 1;
// more templates

export default ({ id, eventData, participantData }) => {
  let Template = null;

  switch (eventData.template) {
    case TEMPLATE_SIMPLE:
      Template = TemplateSimple;
      break;
    default:
      return <Redirect to={"/404"} />;
  }

  return (
    <Template
      id={id}
      {...TemplateSimple.selector(eventData, participantData)}
    />
  );
};
