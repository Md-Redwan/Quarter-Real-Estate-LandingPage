import React from 'react'
import VideoSectionImg from '../assets/VideoSectionImg.png'
import { FaPlay } from "react-icons/fa6";


const VideoSection = () => {
  return (
    <div className='relative mb-29.5'>
      <img src={VideoSectionImg} alt="" />
      <div className='absolute top-[40%] left-[50%] right-[50%] w-32.5 h-32.5 bg-white rounded-full flex justify-center items-center cursor-pointer'>
        <FaPlay className='text-3xl text-primary'/>
      </div>
    </div>
    
  )
}

export default VideoSection
