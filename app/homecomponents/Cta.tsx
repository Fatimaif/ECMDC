"use client";
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from 'next/navigation';

const Cta = () => {
  const router = useRouter();

  return (
  <section className="w-full bg-white py-2 px-4 md:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 overflow-hidden max-w-full">

      {/* LEFT TEXT */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-light text-gray-900 leading-tight">
          Unlocking the<br />
          Potential of Those<br />
          Who Advance the<br />
          World
        </h1>
      </div>

      {/* RIGHT CONTACT CARD */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-light text-gray-900 mb-4 text-right">
          How can we assist you?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 text-right">
          We value the opportunity to connect with you. Please submit your inquiries and
          feedback, and our experienced professionals are ready to assist you.
        </p>

        <div className="flex justify-end">
          <button
            className="bg-[#1B3662] hover:brightness-90 transition-all text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2"
            onClick={() => router.push('/contact')}
          >
            CONTACT US <MdArrowOutward size={22} />
          </button>
        </div>
      </div>

    </section>
  )
}

export default Cta