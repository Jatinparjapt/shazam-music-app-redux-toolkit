import React from 'react'
// Importing various components used on the Home page
import Download from '../HomeComps/Download'
import Banner from '../HomeComps/Banner'
import FeatureVideo from '../HomeComps/FeatureVideo'
import TopSongs from '../HomeComps/TopSongs'
import TopArtist from '../HomeComps/TopArtist'
// Importing Helmet for managing the document head
import { Helmet } from 'react-helmet'

// Functional component for the Home page
const Home = () => {
  return (
    <>
      {/* Setting the document title and meta description using Helmet */}
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page includes top-songs top-artists radio-top shazam applemusic" />
      </Helmet>
      
      {/* Rendering the Download component */}
      <Download/>
      
      {/* Rendering the Banner component */}
      <Banner/>
      
      {/* Rendering the FeatureVideo component */}
      <FeatureVideo/>
      
      {/* Rendering the TopSongs component */}
      <TopSongs/>
      
      {/* Rendering the TopArtist component */}
      <TopArtist/>
    </>
  )
}

export default Home
