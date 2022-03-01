import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg 
        active:scale-95 transition transform ease-out duration-100 pr-4 mt-2 first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image
                    className='rounded-2xl p-5'
                    src={img}
                    layout="fill"
                    objectFit='cover'
                />
            </div>


            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p className='text-gray-500'>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>


                <h4>{title}</h4>
                <div className='border-b w-10 pt-2' />
                <p className='text-sm pt-2 text-gray-500 flex-grow'>{description}</p>


                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center text-gray-600 cursor-pointer'>
                        <StarIcon className='h-5 cursor-pointer text-red-400' />
                        {star}
                    </p>

                    <div className='flex flex-col'>
                        <p className='text-lg font-semibold pb-1 lg:text-xl'>{price}</p>
                        <p className='text-right font-extralight'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard