"use client";

import Card from "./card";

import cnchar from "cnchar";
import draw from "cnchar-draw";
import { CardProps } from "@/types";
import { useMemo, useState } from "react";

const Cards = ({ words }: { words: string }) => {
  const [cardsArr, setCardsArr] = useState<CardProps[]>([]);
  
  useMemo(() => {
    const spellArr: string | any[] = cnchar.spell(
      words,
      "array",
      "tone",
      "poly"
    );
    const strokeArr = cnchar.stroke(words, "array");
    let wordsArr: CardProps[] = [];
    for (let i = 0; i < words.length; i++) {
      let tmp: CardProps = {
        word: words[i],
        spell: spellArr[i],
        stroke: typeof strokeArr === "number" ? strokeArr : strokeArr[i],
      };
      wordsArr.push(tmp);
      setCardsArr(wordsArr)
    }
  }, [words]);
  return (
    <>
      <div className="gap-4 mt-10 grid grid-cols-4">
      {cardsArr.length >0 && cardsArr.map((card,index)=>{
                return <Card key={index} {...card} />
      })}
      </div>
      
    </>
  );
};
export default Cards;
