import React, { useState } from 'react'
import faq from '~/components/Lib/faq'

export default function Faq() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  return (
    <div>
      {faq.map((item, index) => (
        <div key={index} className="relative mb-4">
          <div
            onClick={() => toggleDropdown(index)}
            className={`w-full rounded-xl bg-neutral-500 px-4 py-4 text-left text-sm font-medium text-primary-500 hover:bg-neutral-600  lg:text-lg${
              openDropdown === index ? 'bg-neutral-500' : ''
            }`}
          >
            <div className="flex cursor-pointer items-center justify-between space-x-5 transition">
              <h4 className="font-medium">{item.title}</h4>
              <svg
                className={`ml-2 h-3 w-3 transform transition-transform ${
                  openDropdown === index ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
            {openDropdown === index && (
              <div className="my-2 pr-20 pt-0 lg:my-4">
                <p className="text-justify leading-6 text-primary-400">{item.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
