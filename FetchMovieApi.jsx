import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FetchMovieApi() {
  
    let [movies,setMovies] = useState([])

    let [movieName, setMovieName] = useState("")

    let changeMovieName = (event)=>
    {
        setMovieName(event.target.value);
    }

    useEffect(()=>
    {
        axios.get(`https://www.omdbapi.com/?s=${movieName}%202&apikey=ec701631`).then((response)=>
        {
            setMovies(response.data.Search)
        })
    },[movieName])
    
    return (
    <div>

        <div>
            <input type="text" placeholder='Enter Movie Name' value={movieName} onChange={changeMovieName}  />
        </div>

        <hr />

        {
            movies?.map((movie)=>
            {
                return (
                    <div key={movie.imdbID}>

                        <h1>{movie.Title}</h1>
                        <img src={movie.Poster} height={200} width={200} alt="" />
                        <h1> {movie.Year} </h1>

                    </div>
                )
            })
        }

    </div>
  )
}

export default FetchMovieApi