import React from "react";

import { Redirect } from "react-router-dom";

const TEMPLATE_SIMPLE = 1;
import TemplateSimple from "./TemplateSimple";

// more templates

export default ({ data }) => {
  if (data.template == TEMPLATE_SIMPLE) {
    return <TemplateSimple {...data} />;
  }

  return <Redirect to={"/404"} />;
};
