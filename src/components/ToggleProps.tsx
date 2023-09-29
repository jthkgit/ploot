import React, { useState } from 'react'

interface ToggleProps {
  isTrue: boolean
}

export default function Toggle({ isTrue }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(isTrue)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className="relative inline-flex items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={isChecked}
        onChange={handleToggle}
        disabled
      />
      <div
        className={`peer h-10 w-20 rounded-full ring-4 ring-gray-500 after:absolute after:left-[5px] after:top-1/2 after:-translate-y-1/2 after:content-[''] peer-checked:after:translate-x-full ${
          isChecked
            ? 'after:h-9 after:w-9 after:rounded-full after:border-2 after:border-solid after:border-gray-300 after:bg-[#16B7B3] after:transition-all peer-checked:bg-white dark:border-gray-600'
            : 'after:border-red-400 after:h-9 after:w-9 after:rounded-full after:border-2 after:border-solid after:border-gray-300 after:bg-[#B71616] after:transition-all peer-checked:bg-white dark:border-gray-600'
        }`}
      ></div>
    </label>
  )
}
