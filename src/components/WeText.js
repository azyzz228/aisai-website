import React from 'react'

function WeText({ text }) {
    return (
        <div className='flex flex-row items-start justify-start relative max-w-sm  border-b-2 border-indigo-300 py-8  px-8 bg-white rounded-md shadow-xl'>
            <p className='text-4xl text-indigo-300 top-2 absolute z-10'>WE</p>
            <p className='pl-8 bg-transparent z-20 relative text-gray-800'>{text}
            </p>
        </div>
    )
}

export default WeText
