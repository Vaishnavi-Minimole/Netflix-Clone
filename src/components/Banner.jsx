import React, { useEffect, useState } from 'react'
import instance from '../instance';
import "./Banner.css"

function Banner({ fetchurl }) {    //data destructing
  console.log(fetchurl);
  const image_base_url = "https://image.tmdb.org/t/p/original"
  const [movies, setMovies] = useState({})
  const fetchData = async () => {
    const { data } = await instance.get(fetchurl)    //asynchronous call
    // console.log("API result");
    // console.log("result length");
    // console.log(data.results.length);
    // console.log(data.results[0]);
    const res = data.results[Math.floor(data.results.length * Math.random())]  // randomly binds the image while refreshing
    // console.log("1");
    // console.log(res.backdrop_path);
    setMovies(res)
  }
  // useEffect()
  useEffect(() => {
    setInterval(() => {
      fetchData()
    }, 5000)
    fetchData()
  }, [])
  // console.log(movies);

  return (
    <>
      {/* <h2 style={{ color: "red" }}>Banner</h2> */}
      <div style={{ backgroundImage: `url(${image_base_url}${movies?.backdrop_path})`, height: "550px", backgroundSize: "100% 100%", backgroundAttachment: "fixed" }}>
        <div className='banner_content'>
          <h2 style={{color: "white"}}>{movies?.name}</h2>
          <button className='btn btn-danger'>PLAY  <i className="fa-solid fa-play ms-2"></i></button>
          <button className='btn btn-outline-light ms-3'>MORE INFO <i className="ms-2 fa-solid fa-caret-down"></i></button>
          <h6 className='mt-3 text-light'>{movies?.overview?.slice(0,200)}...</h6>
          
        </div>
      </div>
    </>
  )
}

export default Banner