import React from "react";
import Link from "next/link";
// import { Alegreya,  Montserrat} from 'next/font/google'
import cls from "classnames"


// const alegreya = Alegreya({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

const Card = (props) => {

  
  const connectedTitleUrl = (title, id) => {
    return title.split(" ").join("_") + "-" + id;
  };

  return (
    <>
      <Link href={"blogs/" + connectedTitleUrl(props.title, props.id)}>
        <div className="bg-[#705721] text-[#FFFEF2] p-4 rounded-xl mb-[1em] min-w-[16em]">
          <div
            className={cls(
              // montserrat.className,
              "bg-brown-500 text-slate-300 uppercase text-center text-xl font-extrabold"
            )}
          >
          </div>
          <div className={cls(
            // alegreya.className, 
            "text-[#ddddda]")}>
            <div className={"text-[#ddddda] text-sm p-2"}>{props.subtitle}</div>

            <div className={" font-bold text-base p-1 min-w-[3em]"}>
              {props.author}
            </div>

            <div className={" font-bold text-base p-1 min-w-[3em]"}>
              {props.date}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
