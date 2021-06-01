import React from "react";
import Accordion from "./components/Accordion";

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
