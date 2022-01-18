import React, {useState, useEffect} from "react"
import AlbumCard from "../../components/AlbumCard/AlbumCard"
import './ArtistPage.css'
import {gql, useQuery} from '@apollo/client'

function ArtistPage(){
    const name = "Why Don't We"

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

    const {loading, error, data} = useQuery(ARTIST_QUERY, {
        variables:{
            n: name
        }
    })

    if(loading) return <div>Loading...</div>


    const albums = data.artist.albums

    return(
        
            
        <div className="album-container">
            
            {albums?.map(album=>{
                return(
                    <AlbumCard album={album} artist={name} key={album.id}/>
                ) 
            })} 
        </div>
        
    )
}

export default ArtistPage 