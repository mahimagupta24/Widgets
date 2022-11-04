import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favourite javascript libraray among engineers",
  },
  {
    title: "How do you use React?",
    content: "We use React by creating components",
  },
];
const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The shadow Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );

  // return <div><Accordion items={items}/></div>
}; //after accordian items is prop which is passed in accordion and in curly braces is array mentioned above
export default App;
