import "./styles.css";
import React, { Component } from "react";

const Greetings = ({ firstName, lastName }) => (
  <div>
    Hey you! {firstName} {lastName}!
  </div>
);
export default Greetings;
