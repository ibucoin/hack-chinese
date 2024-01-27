import { CardProps } from "@/types";
import { useEffect, useRef } from "react";
import cnchar from "cnchar";
import draw from "cnchar-draw";

const Card = ({ word, spell, stroke }: CardProps) => {
  console.log("card");
  const drawRef = useRef<HTMLDivElement>(null);
  cnchar.use(draw);

  useEffect(() => {
    if (drawRef.current) {
      cnchar.draw(word, {
        el: drawRef.current,
        type: cnchar.draw.TYPE.ANIMATION,
        animation: {
          loopAnimate: true,
        },
        style: {
          length: 60,
        },
      });
    }
  }, [word]);
  return (
    <>
      <div className="border p-2 flex flex-col">
        <div className="mx-auto" ref={drawRef}></div>
        <div className={"flex flex-col mt-2 px-2 flex-wrap"}>
          <div
            className={
              "flex flex-col justify-between text-sm font-semibold text-zinc-900 space-y-2 mx-auto"
            }
          >
            <div>
              Spell: <span className="text-red-600">{spell}</span>
            </div>
            {/* <div>部首:{word.radical.radical},笔画:{word.radical.radicalCount} 结构:{word.radical.struct}</div> */}
            <div>Stroke: {stroke}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
