import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fontAspenExtralight } from '../fonts'

interface ButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Buttons = ({ onPrevClick, onNextClick }: ButtonsProps) => {
  return (
<div className={`w-full flex justify-start mt-10 px-4 md:px-10 lg:px-20 overflow-hidden ${fontAspenExtralight}`}>

  <div className="flex gap-3">
    <button
      onClick={onPrevClick}
      className="p-3 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200"
    >
      <ChevronLeft size={18} className="text-gray-700" />
    </button>
    <button
      onClick={onNextClick}
      className="p-3 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200"
    >
      <ChevronRight size={18} className="text-gray-700" />
    </button>
  </div>

</div>
  )
}

export default Buttons