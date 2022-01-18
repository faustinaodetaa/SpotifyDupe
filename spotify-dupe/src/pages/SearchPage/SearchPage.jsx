import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import { gql, useQuery } from '@apollo/client'
import './SearchPage.css'

function SearchPage(){

    const [word, setWord] = useState('')

    const ARTIST_QUERY = gql`
            query GetArtist($n: String!){
                artist(name:$n){
                    albums{
                        id
                        name
                        image
                    }
                }
            }
        `

    const searchBtn = () => {
        setWord(document.getElementById('name').value)
    }

    const {loading, data} = useQuery(ARTIST_QUERY, {
        variables: {
            n: word
        }
    })

    if(loading){
        return <div>Loading...</div>
    } 

    if(data != null){
        var albumList = data.artist.albums
    }

    return(
        <div>
            <div className="search-bar">
                <input type="text" name="name" id="name" placeholder="Search Your Favorite Artist Here"/>
                <button class="btn btn-secondary" onClick={searchBtn}>Search</button>
            </div>
            <div className="album-container">
                {albumList?.map(album=>{
                    return(
                        <AlbumCard album={album} artist={word} key={album.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchPage