const Hero = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* LEFT FORM */}
        <div className="w-full lg:w-3/5 lg:pl-20">
          <p className="text-lg text-gray-700 mb-4">
            Thank you for your interest in ECMDC. Please fill out the form
            below to ask a question or report a technical problem.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Please note: while we appreciate your questions, we are unable to
            respond to all inquiries.
          </p>

          <p className="text-lg text-gray-600 mb-6">Required fields are marked with an asterisk (*).</p>

          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-900 mb-3">I have a question about:*</p>

            <div className="grid grid-cols-3 gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="topic" defaultChecked className="w-4 h-4" />
                <span className="text-sm text-gray-700">My member account</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="topic" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Consulting services</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="topic" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Engineering Services</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="topic" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Careers at ECMDC</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="topic" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Other business inquiries</span>
              </label>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-1">Name*</label>
              <input type="text" className="border border-gray-300 rounded-2xl px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-1">Email*</label>
              <input type="email" className="border border-gray-300 rounded-2xl px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-1">Company or School</label>
              <input type="text" className="border border-gray-300 rounded-2xl px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-1">Title</label>
              <input type="text" className="border border-gray-300 rounded-2xl px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-1">Subject*</label>
              <input type="text" className="border border-gray-300 rounded-2xl px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-900 mb-1">Message*</label>
              <textarea rows={5} className="border border-gray-300 rounded-2xl px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"></textarea>
            </div>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          <div>
            <div className="border-t border-gray-300 mr-4 mb-6"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wider">CONTACT INFORMATION</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Phone:</p>
                <p className="text-lg">+92 300 5557859</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email:</p>
                <p className="text-lg">info@ecmdc.co</p>
              </div>
            </div>
            <div className="border-b border-gray-300 mr-4 mt-6"></div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wider">HEAD OFFICE</h3>
            <p className="text-lg text-gray-700">
              Office No. 36, The Pearl Continental,<br/>
              Mall Road, Lahore
            </p>
            <div className="border-b border-gray-300 mr-4 mt-6"></div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wider">REGIONAL OFFICES</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Islamabad Office:</p>
                <p className="text-base">Suite No. 202, One Constitution Avenue, Islamabad</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Karachi Office:</p>
                <p className="text-base">House No 67, Khayban-e-Badban, Phase V, Karachi</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Peshawar Office:</p>
                <p className="text-base">C2, 2nd Floor, New Park View Apartments, Peshawar</p>
              </div>
            </div>
            <div className="border-b border-gray-300 mr-4 mt-6"></div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-wider">REPORT SECURITY VULNERABILITIES</h3>
            <p className="text-base text-gray-700 tracking-wider">
              If you see a technical security or privacy vulnerability on any of
              our websites, please report it responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;