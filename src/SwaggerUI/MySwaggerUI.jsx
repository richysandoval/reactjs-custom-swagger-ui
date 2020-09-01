import React from "react";
import PropTypes from "prop-types";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

class MySwaggerUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    SwaggerUI({
      dom_id: "#swaggerUIApp",
      url: this.state.doc
    });
  }

  render() {
    return <div className="my-swagger-ui-container" id="swaggerUIApp" />;
  }
}

MySwaggerUI.propTypes = {
  doc: PropTypes.string.isRequired
};

export default MySwaggerUI;
