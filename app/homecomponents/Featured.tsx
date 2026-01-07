import { MdArrowOutward } from "react-icons/md";

const Featured = () => {
  return (
    <section className="w-full flex flex-col md:flex-row mt-20 relative overflow-hidden">
      <div
        className="w-full md:w-1/2 h-[500px] md:h-[700px] flex flex-col justify-center items-start px-10 pb-32"
        style={{ backgroundColor: "#1B3662" }}
      >
        <h1 className="text-xl font-light text-white leading-tight">
          Featured Insights
        </h1>

        <p className="text-3xl text-white mt-5">
          ECMDC's most inspiring thought leadership on issues shaping the future of
          business and society
        </p>
      </div>
      <div className="w-full md:w-1/2 h-[500px] md:h-[700px]">
        <img
          src="/pictures/building.jpg"
          alt="building"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-8 left-0 right-0 px-4 md:px-6 z-10">
        <div className="w-full max-w-full bg-white/30 backdrop-blur-md rounded-[32px] py-6 md:py-10 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4 md:gap-8 border border-white/40">
          <h2 className="text-2xl font-light text-white">
            Get the latest industry insights delivered to you
          </h2>
          <div className="flex items-center w-full md:w-[50%] bg-white rounded-2xl p-1 shadow">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 rounded-2xl outline-none text-gray-800"
            />

            <button className="bg-[#1B3662] hover:brightness-90 transition text-white font-semibold px-4 py-2 rounded-2xl flex items-center gap-1 whitespace-nowrap">
              SUBSCRIBE <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
