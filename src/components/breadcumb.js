import React from 'react'

export default function Breadcumb({title}) {
  return (
    <div className="flex justify-between dark:text-white  items-center mb-8">
        <p className="text-2xl font-bold">{title}</p>
        <p className="">December, 12</p>
      </div>
  )
}
