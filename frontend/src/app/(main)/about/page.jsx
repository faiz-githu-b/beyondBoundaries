import React from 'react'

const About = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
    <div className="container max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-gray-200 px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center">About Us</h1>
        
        <p className="mb-4 text-lg text-center text-grey-dark">
          We are a passionate team dedicated to building innovative solutions that improve people's lives. Our mission is to create products that make everyday tasks easier and more enjoyable for our users.
        </p>
  
        <p className="mb-4 text-lg text-center text-grey-dark">
          Founded in [Year], we started with the goal of bridging the gap between technology and human needs. We believe in simplicity, creativity, and inclusivity, and our products are built with these values in mind.
        </p>
  
        <p className="mb-4 text-lg text-center text-grey-dark">
          Our team consists of talented individuals with diverse backgrounds, and we work together to push the boundaries of what's possible. We are committed to continuous improvement and delivering the best experience for our users.
        </p>
  
        <div className="text-center mt-8">
          <a
            className="no-underline border-b border-blue text-blue"
            href="../contact/"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default About;