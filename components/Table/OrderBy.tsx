'use client'

const OrderBy = (props: {orderByFunc: Function, orderBy: Object}) => {
  return (
    <div>
        <select onChange={(e) => props.orderByFunc(e.target.value)} name="order" id="order" className="text-black dark:text-white px-2 py-2 w-full h-8 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-700">
          {
            Object.entries(props.orderBy).map((data, key) => <option key={key} value={data[0]} className='font-sans font-semibold'>{data[1]}</option>)
          }
        </select>
    </div>
  )
}

export default OrderBy