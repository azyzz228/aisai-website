import React from 'react'

function Header() {
    return (

        <header className=' px-16 py-5 bg-white flex flex-row justify-between w-full z-50 border-b-2 border-gray-300'>

            <div>
                <h1 className='text-3xl'>AISAI</h1>
            </div>

            <div className='flex flex-row items-center'>
                <div className="flex flex-row items-center space-x-6">
                    <p className='cursor-pointer border-b border-black'>ENG</p>
                    <p className='text-gray-500 cursor-pointer'>中文</p>
                </div>

                <button className='py-2 px-4 text-white bg-indigo-500 rounded-md ml-12'>Contact Us</button>
            </div>

        </header>

    )
}

export default Header
