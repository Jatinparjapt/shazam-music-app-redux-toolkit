import React from 'react'
import { SiShazam } from "react-icons/si"; // Import Shazam icon
import { FaFacebookF, FaInstagram, FaSnapchat } from "react-icons/fa"; // Import Facebook, Instagram, Snapchat icons
import { IoLogoGithub } from "react-icons/io5"; // Import GitHub icon
import apple from "../Images/apple.png"; // Import Apple Store image
import google from "../Images/google.png"; // Import Google Play Store image
import extension from "../Images/extension.webp"; // Import Chrome Extension image
import galaxy from "../Images/galaxy.webp"; // Import Galaxy Store image
import snapchat from "../Images/snapchat.png"; // Import Snapchat image
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation

const Footer = () => {
  return (
    <>
      {/* Footer section with dark background and white text */}
      <section className='bg-slate-800 text-white py-3'>
        <div className="font-semibold">
          <div>
            {/* Flex container to arrange content evenly */}
            <div className="flex flex-col md:flex-row place-content-evenly">
              
              {/* Left section: Shazam logo and app store links */}
              <div className='order-last flex justify-center md:ml-5 my-5 md:my-0 md:order-none'>
                <div className='flex flex-col justify-center'>
                  {/* Shazam logo with link to homepage */}
                  <div>
                    <Link to={"/"} className='flex items-center justify-center md:justify-start mr-12 my-3'>
                      <SiShazam className='text-4xl' /> Shazam
                    </Link>
                  </div>
                  
                  {/* App store links */}
                  <div className="flex flex-wrap justify-center md:justify-start">
                    <div className="w-2/5">
                      <Link to={"https://play.google.com/store/apps/details?id=com.shazam.android"}>
                        <img src={google} className='h-[50px] my-2' alt="Play Store" title='play store' />
                      </Link>
                    </div>
                    <div className="w-2/5">
                      <Link to={"https://apps.apple.com/us/app/shazam-find-music-concerts"}>
                        <img src={apple} className='h-[50px] my-2' alt="Apple Store" title='apple store' />
                      </Link>
                    </div>
                    <div className="w-2/5">
                      <Link to={"https://chromewebstore.google.com/detail/shazam-find-song-names-fr"}>
                        <img src={extension} className='h-[50px] my-2' alt="Chrome Extension" title='chrome extension' />
                      </Link>
                    </div>
                    <div className="w-2/5">
                      <Link to={"https://support.apple.com/en-us/118557"}>
                        <img src={galaxy} className='h-[43px] my-2' alt="Galaxy Store" title='Galaxy Store' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle section: Company and Legal links */}
              <div className='flex md:order-none order-first place-content-around md:gap-8 my-4 md:text-xl md:mr-10'>
                <div className='flex flex-col'>
                  <h3 className='text-2xl text-slate-500'>Company</h3>
                  <Link to={'https://www.shazam.com/company'}>About Us</Link>
                  <Link to={'/download'}>Apps</Link>
                  <Link to={"https://jobs.apple.com/en-us/search?sort=relevance&search=shazam"}>Careers</Link>
                  <Link to={"https://support.apple.com/en-in/guide/shazam/welcome/web"}>Help for Apple Devices</Link>
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-2xl text-slate-500'>Legal</h3>
                  <Link to={"https://www.shazam.com/terms"}>Terms</Link>
                  <Link to={"https://www.apple.com/privacy"}>Privacy Policy</Link>
                  <Link to={"https://www.shazam.com/privacy"}>Manage Your Data</Link>
                  <Link to={"https://www.shazam.com/myshazam"}>My Library</Link>
                </div>
              </div>
            </div>

            {/* Right section: Social media links */}
            <div className="flex my-5 flex-row justify-center">
              <div>
                <div className="flex justify-center">
                  <h3>Follow Us</h3>
                </div>
                <div className="flex justify-center gap-3">
                  <Link title='facebook' to={"https://www.facebook.com/jatinparjapte.parjapte/"} className='flex text-3xl mx-4 my-4'><FaFacebookF /></Link>
                  <Link title='github' to={"https://github.com/Jatinparjapt"} className='flex text-3xl mx-4 my-4'><IoLogoGithub /></Link>
                  <Link title='Instagram' to={"https://www.instagram.com/jatin_prajapat_ji/"} className='flex text-3xl mx-4 my-4'><FaInstagram /></Link>
                  <Link to={snapchat} title='snapchat' download={"snapchat.png"} className='flex text-3xl mx-4 my-4'><FaSnapchat /></Link>
                </div>
                <div className="flex text-center justify-center">
                  <p>Copyright 2024 Apple Inc. and its affiliates <span>Supplier Responsibility</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
