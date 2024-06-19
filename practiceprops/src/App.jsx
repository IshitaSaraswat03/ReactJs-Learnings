import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold p-4">Tailwind Test</h1>
      <Card username="Ishita" btntext="Click me"/>
      <Card username="Anshika" />
    </>
  );
}
export default App;
