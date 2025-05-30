import { useState } from "react";
import "./App.css";

import Editor from "./components/Editor.jsx";

function App() {
  return (
    <>
      <header>
        <h1>CIVILIAN</h1>
      </header>
      <main>
        <Editor />
      </main>
    </>
  );
}

export default App;
