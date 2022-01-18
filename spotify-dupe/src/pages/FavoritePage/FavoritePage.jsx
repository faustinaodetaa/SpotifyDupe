import './FavoritePage.css'
import { gql, useQuery } from '@apollo/client';

function FavoritePage(){

	var trackList = []
    var favid = 0
    do{
        var favKey = favid

        if(localStorage.getItem(favKey) != null){
            var track = localStorage.getItem(favKey)
            var tracks = {
                trackid: track
            }
            trackList.push(tracks)
            favid++
        }
        else{
            break
        }
    }while(true);

	function unFav(trackId){
		var favid = 0
		do{
			let favKey = favid
			if(localStorage.getItem(favKey) === trackId){
				localStorage.removeItem(favKey)
				favid = 0
				break
			}
			else{
				favid++
			}
		}while (true);
	}

	function Track(props){
		const ALBUM_QUERY = gql`
			query GetTrack($id: String!){
				track(id: $id){
					name
				}
			}
		`
		var id = props.trackid
	
		const {loading, data} = useQuery(ALBUM_QUERY, {
			variables: {
				id: id
			}
		})
	
		if(loading){
			return <div>Loading...</div>
		} 
		var track = data.track
		return(
			<div className="track-container">
				<div className="card track-card">
					<div className="card-body">
						<h6 className="card-title">{track.name}</h6>
						<audio src={track.preview_url} controls/> 
						<button type="button" class="btn btn-danger" onClick={()=>unFav(id)}>
							UnFavorite						
						</button>
					</div>
				</div>
			</div>
		)
	}

    return(
        <div className="album-page-container">
            <div className="track-container">
                {trackList?.map((track) => (
                    <Track trackid={track['trackid']} />
                ))
                }
            </div>
        </div>
    )
}

export default FavoritePage;
