'use client'
import { order } from '@/utils/data'
import { forwardRef } from 'react'
import React from 'react'

const Order = forwardRef(function Order (props: {loadData: Function}, ref: any) {
  return (
    <div>
        <select onChange={() => props.loadData()} ref={ref} name="order" id="order" className="text-black px-2 py-2 w-full h-8 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          {
            Object.entries(order).map((data,key) => <option key={key} value={data[0]} className='font-sans font-semibold'>{data[1]}</option>)
          }
        </select>
    </div>
  )
})

export default Order