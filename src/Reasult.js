import React, { useEffect, useState } from 'react';
import './Reasult.css'
import VideoCard from './VideoCard'
import axios from './axios';
import FlipMove from 'react-flip-move'

function Reasult({option}){
    const [movies, setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
        const req = await axios.get(option)
        console.log(req.data.results)
        setMovies(req.data.results);
        return req
        }
        fetchData()
    },[option])

    return (
        <div className="reasult">
           <FlipMove>
           {movies.map((movie)=>{
              return  <VideoCard key={movie.id} movie={movie} />
           })}
           </FlipMove>
        </div>
    );
};

export default Reasult;