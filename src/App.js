import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
      <Search />
    </div>
  );
};
