import React from 'react'
import styled from 'styled-components'
import { CheckIcon } from '@heroicons/react/outline'
import DotsSvg from './DotsSvg'


const QualificationData = styled.div`
display: grid;
grid-template-columns: 1fr max-content 1fr;
column-gap: 1.5rem;;
`

const Rounder = styled.span`
display: inline-block;
width: 13px;
height: 13px;
background-color: #9CA3AF;
border-radius: 50%;
`
const Line = styled.span`
display: block;
width: 1px;
height: 100%;
background-color: #9CA3AF;
transform: translate(6px, -7px);
`
function WhyUsSection() {
    return (
        <div className=" pb-24 px-24 border-t border-indigo-300 relative">

            <div className="absolute top-6 right-6"><DotsSvg /></div>
            <div className="absolute bottom-8 right-8"><DotsSvg /></div>

            <div className="flex flex-col items-center justify-center w-full my-24">
                <h1 className=' text-4xl font-semibold tracking-tight text-gray-800 uppercase font-natosansdisplay '>Why to choose us</h1>
                <p className='max-w-sm text-center mt-4 text-gray-600'>Selling commodities' never been easier.</p>
            </div>


            <div className=" container mx-auto mt-20 px-16 ">

                {/* WHY US : SECTION 1 */}
                <QualificationData>
                    <div className=" px-8 pb-16">
                        <h1 className='why--us--section--title'>Local presence</h1>

                        <div className='flex flex-row items-start mb-4 mt-8 '>
                            <CheckIcon className='why--us--check--icon' />
                            <p className="why--us--text">We have a local presence in Ethiopia, Sudan, and China</p>
                        </div>

                        <div className='flex flex-row items-start mb-4 mt-4 '>
                            <CheckIcon className='why--us--check--icon' />
                            <p className="why--us--text">Great understanding of major commodity producing countries</p>
                        </div>


                        <div className='flex flex-row items-start mb-4 mt-4 '>
                            <CheckIcon className='why--us--check--icon' />
                            <p className="why--us--text">Great understanding of a major buying country (China)</p>
                        </div>




                    </div>

                    <div className="">
                        <Rounder />
                        <Line />
                    </div>
                </QualificationData>

                {/* WHY US : SECTION 2 */}
                <QualificationData>
                    <div className=""></div>

                    <div className="">
                        <Rounder />
                        <Line />
                    </div>

                    <div className="  px-12 pb-16">
                        <h1 className='why--us--section--title'>Direct Link</h1>


                        <div className='flex flex-row items-start mb-4 mt-8 '>
                            <CheckIcon className='why--us--check--icon' />
                            <p className="why--us--text">Direct link to producers ensures the best quality products at the best prices
                            </p>                        </div>

                        <div className='flex flex-row items-start mb-4 mt-4 '>
                            <CheckIcon className='why--us--check--icon' />
                            <p className="why--us--text">We eliminate unnecessary transaction costs
                            </p>                        </div>


                        <div className='flex flex-row items-start mb-4 mt-4 '>
                            <CheckIcon className='why--us--check--icon' />
                            <p className="why--us--text">We give African producers access to the Chinese market
                            </p>                        </div>




                    </div>

                </QualificationData>


                {/* WHY US : SECTION 3 */}
                <QualificationData>
                    <div className="  px-12 pb-16">
                        <h1 className='why--us--section--title'>Efficiency & Reliability
                        </h1>


                        <div className='flex flex-row items-start mb-4 mt-8 '>
                            <CheckIcon className='why--us--check--icon' />

                            <p className="why--us--text">We expedite the export process in producing countries
                            </p>                        </div>

                        <div className='flex flex-row items-start mb-4 mt-4 '>
                            <CheckIcon className='why--us--check--icon' />

                            <p className="why--us--text">We vet every producer and inspect container
                            </p>                        </div>




                    </div>

                    <div className="">
                        <Rounder />

                    </div>
                </QualificationData>



            </div>
        </div>
    )
}

export default WhyUsSection
