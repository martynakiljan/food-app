/** @format */

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Help.scss";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="help-wrapper">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Is my data secured?
          </AccordionSummary>
          <AccordionDetails>
            Yes. To ensure our customer's data are secure, we use end-to-end
            encryption.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How do I make payment?
          </AccordionSummary>
          <AccordionDetails>
            You can make payments through several means all supported by the
            app. Paypal and the rest.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            what services do you provide?
          </AccordionSummary>
          <AccordionDetails>
            We will deliver your order as quickly as possible to the address
            provided at no additional cost. A place where you can eat there will
            also be opened soon.
          </AccordionDetails>
        </Accordion>

        <h2 className="help__question">Still have questions?</h2>
        <p className="help__text">
          <span>
            {" "}
            Can't find the answer you're looking for? Kindly fill the{" "}
          </span>
          <Link to="/Contact" className="form__link">
            form
          </Link>
          <span>
            {" "}
            below Want to file a complaint? Fill the form to get answers ASAP
          </span>
        </p>
      </div>
    </>
  );
};

export default Help;
