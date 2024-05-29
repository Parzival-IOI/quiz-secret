'use client'
import { forwardRef } from 'react'
import React from 'react'

const Search = forwardRef(function Search (props: {loadData: Function}, ref: any) {
  return (
    <div>
        <input onChange={() => props.loadData()} ref={ref} type="text" name="search" id="search" placeholder="Search" className="text-black px-2 py-2 w-full h-8 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    </div>
  )
})

export default Search