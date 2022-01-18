import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './AlbumPage.css'
import { gql, useQuery } from '@apollo/client';

function AlbumPage(){

    let {id} = useParams();

    const ALBUM_QUERY = gql`
        query GetAlbum($id: String!){
            album(id: $id){
                name
                image
                tracks{
                    id
                    name
                }
            }
        }
    `
    const {loading, error, data} = useQuery(ALBUM_QUERY, {
        variables:{
            id: id
        }
    })

    if(loading){
        return <div>Loading...</div>
    } 

    const trackList = data.album.tracks

    var favid = 0
    const fav = (trackId)=>{
        do{
            let favKey = favid
            if(localStorage.getItem(favKey) == null){
                favid = 0
                localStorage.setItem(favKey, trackId)
                break
            }else{
                favid++
            }
        }while(true);
    }

    return(
        <div className="track-container">
            {trackList?.map(track=>{
                return(
                    <div className="card track-card">
                        <div className="card-body">
                            <h3 className="card-title">{track.name}</h3>
                            <audio src={track.preview_url} controls/> 
                            <button type="button" class="btn btn-success" onClick={()=>fav(track.id)}>
                                Favorite
                            </button>
                        </div>    			
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumPage