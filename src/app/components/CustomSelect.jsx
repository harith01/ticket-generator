"use client";
import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const options = ["1", "2", "3"]

const CustomSelect = () => {
    const [selected, setSelected] = React.useState(options[0])
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className=''>
        <button 
            className='w-full p-4 flex justify-between border border-[#07373F] rounded-xl'
            onClick={() => setIsOpen(!isOpen)}>
            {selected}
            <ChevronDownIcon className="w-6 h-6" />
        </button>
        {isOpen && (
            <ul className='w-full flex flex-col gap-0'>
                {options.map( (option, index) => (
                    <li
                     className='px-4 py-2 cursor-pointer hover:bg-[#07373F]'
                     key={index}
                     onClick={() => {
                        setSelected(option)
                        setIsOpen(false)
                     }}
                     >{option}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default CustomSelect