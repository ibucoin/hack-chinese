
"use client";

import { useState } from "react";
import Cards from "./cards";
import FormComponent from "./form";

const WordsForm = () => {

  const [text,setText] = useState("")
  
  return (
    <div>
      <FormComponent setText={setText} />
      <div className="max-w-3xl mx-auto">
      {text && <Cards words={text}/>}
      </div>
    </div>
  );
};

export default WordsForm;
