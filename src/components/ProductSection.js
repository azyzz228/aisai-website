import React from 'react'
import ProductCard from './ProductCard'

import castor from '../img/castor.jpg'
import flax from '../img/flax.jpg'
import greenmung from '../img/greenmung.jpg'
import redkidney from '../img/redkidney.jpg'
import soya from '../img/soya.jpg'
import DotsSvg from './DotsSvg'

function ProductSection() {
    return (
        <section className='bg-indigo-900 p-24  flex flex-col justify-center items-center relative'>
            <div className="absolute bottom-8 left-8"><DotsSvg color="#818CF8" /></div>

            <h1 className='mb-12 text-4xl  tracking-tight text-gray-300 uppercase font-natosansdisplay'>Our products</h1>
            <div className=' container flex flex-row items-center justify-center  space-x-6 '>

                <div className='flex flex-col items-center justify-center bg-white rounded-md shadow-lg py-16 px-8 w-[280px]'>
                    <img src="https://img2.tradewheel.com/uploads/images/products/5/7/0783119001601907092-humera-sesame-seed.png.webp" alt="" title='' className='w-40 h-40 rounded-full shadow-inner ' />
                    <h3 className='mt-10 text-lg text-gray-900'>Sesame</h3>
                    <div className="w-1/4 mt-2 bg-indigo-200 h-1 rounded-full"></div>
                </div>

                <div className='flex flex-col items-center justify-center bg-white rounded-md shadow-lg py-16 px-8 w-[280px]'>
                    <img src={castor} alt="" title='' className='w-40 h-40 rounded-full shadow-inner ' />
                    <h3 className='mt-10 text-lg text-gray-900'>Castor seeds</h3>
                    <div className="w-1/4 mt-2 bg-indigo-200 h-1 rounded-full"></div>
                </div>

                <div className='flex flex-col items-center justify-center bg-white rounded-md shadow-lg py-16 px-8 w-[280px]'>
                    <img src={flax} alt="" title='' className='w-40 h-40 rounded-full shadow-inner ' />
                    <h3 className='mt-10 text-lg text-gray-900'>Flaxseed</h3>
                    <div className="w-1/4 mt-2 bg-indigo-200 h-1 rounded-full"></div>
                </div>


                <div className='flex flex-col items-center justify-center bg-white rounded-md shadow-lg py-16 px-8 w-[280px]'>
                    <img src={greenmung} alt="" title='' className='w-40 h-40 rounded-full shadow-inner ' />
                    <h3 className='mt-10 text-lg text-gray-900'>Green Mung Beans</h3>
                    <div className="w-1/4 mt-2 bg-indigo-200 h-1 rounded-xl"></div>
                </div>
            </div>

            <div className=' container mt-6 flex flex-row items-center justify-center  space-x-6 '>
                <div className='flex flex-col items-center justify-center bg-white rounded-md shadow-lg py-16 px-8 w-[280px]'>
                    <img src={soya} alt="" title='' className='w-40 h-40 rounded-full shadow-inner ' />
                    <h3 className='mt-10 text-lg text-gray-900'>Soya Beans</h3>
                    <div className="w-1/4 mt-2 bg-indigo-200 h-1 rounded-xl"></div>
                </div>

                <div className='flex flex-col items-center justify-center bg-white rounded-md shadow-lg py-16 px-8 w-[280px]'>
                    <img src={redkidney} alt="" title='' className='w-40 h-40 rounded-full shadow-inner ' />
                    <h3 className='mt-10 text-lg text-gray-900'>Red Kidney Beans</h3>
                    <div className="w-1/4 mt-2 bg-indigo-200 h-1 rounded-xl"></div>
                </div>

            </div>
        </section>
    )
}

export default ProductSection
