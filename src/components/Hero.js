import React from 'react'
import Header from './Header'
import WeText from './WeText'

function Hero() {
    return (
        <div>
            <Header />
            <div className="bg-hero">

                <div className=' flex flex-col justify-center  items-center py-40'>

                    <p className='text-6xl tracking-tight font-semibold leading-snug text-indigo-100 text-center uppercase '>Connecting African producers <br /> with the world</p>
                </div>
            </div>


            <div className="w-full flex justify-center bg-gray-50">
                <div className="pb-24 px-24 gap-20  container flex flex-col items-center justify-center ">
                    <div className="flex flex-row items-center justify-center -mt-16">
                        <WeText text="give Chinese manufacturers a reliable supply of various agricultural commodities" />
                    </div>

                    <div className="flex flex-row items-center container justify-between px-24 ">
                        <WeText text="directly connect African agricultural producers to Chinese buyers" />
                        <WeText text="manage the hassle of importing agricultural produce" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
