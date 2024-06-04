import React from 'react'
import CounterCard from '../components/CounterCard.jsx'

function HomePageCard() {
    return (
        <div>
            <div class="m-4 p-3 flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl hover:bg-blue-200 hover:border-gray-700 hover:border-t-blue-500 h-300">
                <div class="p-4 md:p-5">
                    <h3 class="text-lg font-bold text-gray-800">
                        Dissertation
                    </h3>
                    <p class="mt-2 text-gray-600 hover:text-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque itaque maiores inventore necessitatibus cumque dolorum, quisquam qui ipsam eligendi accusamus delectus tempore libero nesciunt pariatur magnam ex expedita, incidunt possimus!
                    </p>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 disabled:opacity-50 disabled:pointer-events-none hover:text-blue-500 hover:hover:text-blue-400 hover:focus:outline-none hover:focus:ring-1 hover:focus:ring-gray-600" href="#">
                        Card link
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                   
                </div>
            </div>
        </div>

    )
}

export default HomePageCard