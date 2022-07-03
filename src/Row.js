import axios from './Axios';
import React,{useState,useEffect} from 'react'
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl}) {
    
    const[movies,setMovies] = useState([]);

    useEffect(()=> {

        //This will be called whenever the component is called for the first time

        async function fetchData(){

            const request = await axios.get(fetchUrl);

            console.log(request.data);
            setMovies(request.data.results); 
        }
        fetchData();

    },[fetchUrl]);



    
    return (
        <div className="row">
        <h2>{title}</h2>
        
        <div className = "row_posters">

            {movies.map(movie => {

                return <img 
                    className = 'row_poster'
                    key = {movie.id}
                    src = {`${base_url}${movie.poster_path}`}
                    alt = {movie.name}
                />
            }
            )}

        </div>

        </div>
    );
}

export default Row;
