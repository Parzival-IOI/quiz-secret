'use client'
import React from 'react'

const Search = (props: {searchPage: Function}) => {
  return (
    <div>
        <input onChange={(e) => {props.searchPage(e.target.value);}} type="text" name="search" id="search" placeholder="Search" className="text-black min-w-20 w-full dark:text-white px-2 py-2 h-8 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-700" />
    </div>
  )
}

export default Search