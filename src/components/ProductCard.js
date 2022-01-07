import React from 'react'
import sesame from '../img/sesame.jpg'

function ProductCard() {
    return (
        <div className='flex flex-col items-center justify-center bg-white rounded-md shadow-lg py-16 px-8 w-[280px]'>
            <img src="https://img2.tradewheel.com/uploads/images/products/5/7/0783119001601907092-humera-sesame-seed.png.webp" alt="" className='w-40 h-40 rounded-full shadow-inner ' />
            <h3 className='mt-10 text-lg text-gray-900'>Sesame</h3>
            <div className="w-1/4 mt-2 bg-indigo-200 h-1 rounded-full"></div>
        </div>
    )
}

export default ProductCard
