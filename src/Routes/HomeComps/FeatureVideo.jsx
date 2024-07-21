import React from 'react'

const FeatureVideo = () => {
  return (
    <>
    <section>
      <div className='mt-20 bg-white ' >
        <div className="main">
          <div className="text-center">
            <p className='text-slate-700 font-semibold' >  GLOBAL TOP 200</p>
            <h1 className='lg:text-4xl text-2xl font-bold' >Top songs being discoverd around the world right now </h1>
           <p className='text-slate-600 mt-4 ' >
            See who made it on the list of the most Shazamed songs worldwide
            </p> 
          </div>
          <div className="video h-[100vh] w-[80%] mx-auto mt-10  ">
          <iframe 
          className="w-full h-64 rounded-xl md:h-96" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          >
        </iframe>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FeatureVideo