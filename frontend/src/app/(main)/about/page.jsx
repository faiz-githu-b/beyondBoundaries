import React from 'react'

const About = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
    <div className="container max-w-7xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center px-2 py-24">
      {/* Left Column: About Us Information */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <div className="group w-full h-full relative">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-indoor-office-png-image_2215291.jpg"
            alt="About Us"
            className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
          />
          <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
            About Us
          </h1>
          <div className="absolute bottom-0 w-full lg:p-11 p-5">
            <div className="bg-white rounded-lg p-6 block">
              <p className="text-black text-base font-normal leading-6">
                We are a team of passionate professionals committed to delivering excellence in every project. 
                With a vision to innovate and a mission to create value, we focus on making a positive impact 
                on the world through our work.
              </p>
              <div className="mt-6">
                <a href="javascript:;" className="text-indigo-700 font-semibold">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Our Values */}
      <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl w-full lg:w-1/2">
        <h2 className="text-indigo-700 font-manrope text-4xl font-semibold leading-10 mb-11">
          Our Values
        </h2>
        <ul className="list-disc pl-6">
          <li className="text-gray-600 text-lg mb-3">Innovation: We thrive on creativity and embrace new ideas.</li>
          <li className="text-gray-600 text-lg mb-3">Integrity: We believe in doing the right thing, even when no one is watching.</li>
          <li className="text-gray-600 text-lg mb-3">Collaboration: We work together to achieve common goals.</li>
          <li className="text-gray-600 text-lg mb-3">Customer Satisfaction: We prioritize the needs and happiness of our clients.</li>
        </ul>
        <h2 className="text-indigo-700 font-manrope text-4xl font-semibold leading-10 mt-10 mb-11">
          Our Mission
        </h2>
        <p className="text-gray-600 text-lg">
          Our mission is to lead with purpose, foster creativity, and drive results that exceed expectations. We aim to build strong relationships with our clients and partners while delivering solutions that matter.
        </p>
      </div>
    </div>
</div>

  )
}

export default About;