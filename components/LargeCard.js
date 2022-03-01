import React from 'react'
import Image from 'next/image'

function LargeCard({ img, title, desctiption, buttonText }) {
  return (
    <section className="relative cursor-pointer py-16">
      <div className="relative  h-96  min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12 ml-8 w-full">
        <h1 className="mb-3 w-64 text-4xl font-semibold">{title}</h1>
        <p className="text-gray-800">{desctiption}</p>
        <button
          className="mt-5 transform rounded-full bg-gray-900 px-4 py-2 font-bold text-white shadow-md
        transition duration-150 hover:shadow-2xl active:scale-90 "
        >
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
