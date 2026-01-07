import React from 'react'

const Subscribebar = () => {
  return (
       <section className="w-full mt-16 px-6">
      <div className="w-full bg-[#BDCDC4] rounded-[32px] py-10 px-10 flex flex-col md:flex-row items-center justify-between shadow-lg gap-8">
        <h2 className="text-2xl font-light text-gray-800">
          Get the latest industry insights delivered to you
        </h2>
        <div className="flex items-center w-full md:w-[50%] bg-white rounded-xl p-1 shadow">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 rounded-xl outline-none text-gray-800"
          />

          <button className="bg-[#1B3662] hover:brightness-90 transition text-white font-semibold px-6 py-6 rounded-lg flex items-center gap-2">
            SUBSCRIBE <span>→</span>
          </button>
        </div>
      </div>
    </section>

  )
}

export default Subscribebar