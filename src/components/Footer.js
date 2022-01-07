import React from 'react'
import { OfficeBuildingIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'

function Footer() {
    return (
        <footer class="text-gray-600 body-font  flex flex-col justify-center">


            <div className="container grid grid-cols-5 place-items-start p-20 self-center">

                <p>© 2016 Kolberg Group All rights reserved</p>

                <div className="flex flex-col items-center px-10">
                    <OfficeBuildingIcon className='w-10 h-10 p-2 text-blue-900 bg-blue-300 rounded-full' />
                    <p className='max-w-sm text-center mt-2'>SA  Building, Office No. 903, Addis Ababa, Ethiopia</p>
                </div>


                <div className="flex flex-col items-center px-10">
                    <MailIcon className='w-10 h-10 p-2 text-blue-900 bg-blue-300 rounded-full' />
                    <p className='max-w-sm mt-2'>1zzeekk@gmail.com</p>
                </div>

                <div className="flex flex-col items-center px-10">
                    <PhoneIcon className='w-10 h-10 p-2 text-blue-900 bg-blue-300 rounded-full' />
                    <p className='max-w-sm mt-2'>+998998035663</p>
                </div>



                <div className="flex flex-row items-center space-x-4">
                    <i class="fab fa-telegram text-4xl text-blue-900"></i>
                    <i class="fab fa-whatsapp-square text-4xl text-blue-900"></i>
                </div>


            </div>

            <div class="bg-gray-100">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
