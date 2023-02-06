import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <div className="App-foooter">
      Copyright {getFullYear()} - {getFooterCopy()}
    </div>
  );
}

export default Footer;
