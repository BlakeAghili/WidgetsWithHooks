import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";

const items = [
  { title: "What is Life", content: "I do not know" },
  {
    title: "What time is it",
    content: "Ask Siri!",
  },
  {
    title: "You got money honey",
    content: "Honey Boo Boo !",
  },
];

const options = [
  { label: "The Red Color", value: "red" },
  { label: "The Green Color", value: "green" },
  { label: "A Blue Color", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Translate />
    </div>
  );
};
