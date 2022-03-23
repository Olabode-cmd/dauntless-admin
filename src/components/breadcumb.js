import React from 'react'

export default function Breadcumb({title}) {
  return (
    <div className="flex justify-between dark:text-gray-100 text-black  items-center mb-8">
        <p className="text-2xl font-bold">{title}</p>
        <p className="dark:text-gray-100 text-black">December, 2020</p>
      </div>
  )
}
