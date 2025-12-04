import React, { useRef, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { albumsData } from '../assets/assets'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {

  const DisplayRef = useRef();
  const location = useLocation();
  
  const isAlbum = location.pathname.includes('album');

  const albumId = isAlbum ? location.pathname.split("/").pop() : '';
  const bgColor = isAlbum ? albumsData[Number(albumId)].bgColor : null;

  useEffect(() => {
    if (isAlbum) {
      DisplayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      DisplayRef.current.style.background = '#121212';
    }
  }, [location.pathname]); // обновлять при изменении URL

  return (
    <div
      ref={DisplayRef}
      className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
