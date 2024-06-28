"use client";
import { useState } from "react";
import { Circle, Next, Previous } from "../Icon";

const Carousel = ({ children, length}: Readonly<{children: React.ReactNode, length: number | undefined}>) => {

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(cur => (cur === (length ?? 0) - 1 ? cur : cur + 1 ))
  }
  const previous = () => {
    setCurrent(cur => (cur === 0 ? cur : cur - 1 ))
  }
  const gotoSlide = (i: number) => {
    if(i>=0 && i< (length ?? 0)) {
      setCurrent(i)
    }
  }

  return (
    <div className="overflow-hidden relative font-sans">
      <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${current * 100}%)`}}>
        {children}
      </div>
      <div className="flex items-center text-white p-4">
        { (current > 0) &&
          <button type="button" onClick={previous} className="dark:bg-white/30 bg-slate-400 rounded-full p-2 hover:bg-slate-500 absolute left-4 sm:left-12 top-1/2 z-20" >
            <Previous/>
          </button>
        }
        { (current < (length ?? 0) - 1) &&
          <button type="button" onClick={next} className="dark:bg-white/30 bg-slate-400 rounded-full p-2 hover:bg-slate-500 absolute right-4 sm:right-12 top-1/2 z-20" >
            <Next/>
          </button>
        }
      </div>
      <div className="absolute bottom-0 h-16 w-full flex items-center justify-center gap-1 z-20 dark:text-white text-slate-700 px-4 sm:px-8 ">
        {
          [...Array(length)].map((x, i) => {
              return (
                <button key={i} type="button" onClick={() => gotoSlide(i)} className={`${i == current ? `scale-125` : ``} `}>
                  <Circle/>
                </button>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Carousel