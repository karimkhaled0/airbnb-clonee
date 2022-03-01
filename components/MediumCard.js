import React from 'react'
import Image from 'next/image'

function MediumCard({ img, title }) {
  return (
    <div
      className="transform rounded-xl
    transition duration-300 ease-out hover:scale-105"
    >
      <div className="relative h-80 w-80">
        <Image className="cursor-pointer rounded-lg" src={img} layout="fill" />
      </div>
      <h3 className="mt-3 text-xl font-semibold text-gray-600">{title}</h3>
    </div>
  )
}

export default MediumCard
