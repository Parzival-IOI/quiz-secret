
'use client'

import { First, Last, Next, Previous } from "../Icon"

const Pagination = (props: {nextPage: Function, previousPage: Function, firstPage: Function, lastPage: Function, page: number}) => {
  return (
    <div className="py-1 flex gap-3">
      <button onClick={() => props.firstPage()} className="px-2 py-1 dark:bg-slate-500 bg-slate-200  rounded-md" >
        <First/>
      </button>
      <button onClick={() => props.previousPage()} className="px-2 py-1 dark:bg-slate-500 bg-slate-200 rounded-md" >
        <Previous/>
      </button>
      <span className="px-2 py-1 dark:bg-slate-500 bg-slate-200 rounded-md" >
        Page{' '}
        <strong>
          {props.page + 1}
        </strong>{' '}
      </span>
      <button onClick={() => props.nextPage()} className="px-2 py-1 dark:bg-slate-500 bg-slate-200 rounded-md" >
        <Next/>
      </button>
      <button onClick={() => props.lastPage()} className="px-2 py-1 dark:bg-slate-500 bg-slate-200 rounded-md" >
        <Last/>
      </button>
    </div>
  )
}

export default Pagination