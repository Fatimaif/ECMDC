export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden -mt-20 pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
          alt="Healthcare Industry"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Healthcare Industry Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              Transform healthcare delivery with innovative solutions that improve patient outcomes,
              enhance operational efficiency, and accelerate the shift to value-based care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
