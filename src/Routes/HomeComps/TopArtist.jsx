import React, { useEffect } from 'react';
import {getArtists , getArtistById} from "../../Redux-toolkit/Artists"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Loading from '../../Components/Loading';

const TopArtist = () => {
// Get the dispatch function to trigger Redux actions
const dispatch = useDispatch();

// Select the artists data from the Redux store
const artists = useSelector((state) => state.artists.artists);

// Fetch artists when the component mounts
useEffect(() => {
  dispatch(getArtists());
}, [dispatch]);

// Function to dispatch an action to get artist details by ID
const getArtist = (id) => {
  dispatch(getArtistById(id));
};

// Show loading component if artists data is not yet available
if (!artists) {
  return (
    <>
      <Loading />
    </>
  );
}

// Extract artists' names from the artists data
let artistsName = artists.artists;
  return (
    <>
      
    <section className='w-[80%] mx-auto mt-10' >
      <div className="main">
        <div className='grid' >
          <div className="heading">
            <div><h1 className='text-2xl font-medium' >Featured Top Artists</h1></div>
          </div>
          <hr className='pt-[1px]' />
         
          <div className='flex overflow-x-auto snap-x ' >
            {artistsName.map((items)=>(
              <Link onClick={()=>(getArtist(items.id))} key={items.id} to={`/artists/${items.name}`} >
  <div  className="snap-start my-5 min-w-40 max-w-52  mx-2">
  <div className='' >
  <div className="">
    <img className=' h-[200px] rounded-lg' src={items.images[1].url}  alt="loading..." />
  </div>
  <div><h3 className='font-medium text-xl ' >{items.name}</h3></div>
  </div>
 
</div></Link>
            ))}
        
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TopArtist