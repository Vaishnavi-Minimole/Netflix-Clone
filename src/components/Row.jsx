import React, { useEffect, useState } from 'react'
import instance from '../instance';
import "./Row.css"

function Row({ title, fetchurl }) {
  console.log("title");
  console.log(title);
  console.log(fetchurl);
  const image_base_url = "https://image.tmdb.org/t/p/original"
  const [allmovies, setAllMovies] = useState()
  const fetchData = async () => {
    const response = await instance.get(fetchurl);
    console.log("api result");
    console.log(response);
    setAllMovies(response.data.results)

  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log("all movies", allmovies);

  return (
    <>
      {/* <h2 style={{color: "red"}}>Row</h2> */}
      <div className='row mt-3'>
        <h4>{title}</h4>
        <div className='movie_row'>
         {
          allmovies?.map(item=>(

            <img className='movies' src={`${image_base_url}${item?.poster_path}`} alt="" />
          ))
         }
        </div>
      </div>
    </>
  )
}

export default Row