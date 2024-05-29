'use client'
import { pageSize } from '@/utils/data'
import { forwardRef } from 'react'
import React from 'react'

const PageSize = forwardRef(function PageSize (props: {loadData: Function}, ref: any) {
  return (
    <div className='mr-auto'>
        <select onChange={() => props.loadData()} ref={ref}  name="size" id="size" className="text-black px-2 py-2 w-full h-8 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option value={pageSize.TEN}>{pageSize.TEN}</option>
          <option value={pageSize.FIFTEEN}>{pageSize.FIFTEEN}</option>
          <option value={pageSize.TWENTY}>{pageSize.TWENTY}</option>
        </select>
    </div>
  )
})

export default PageSize