import { Link } from 'react-router-dom'
import './AlbumCard.css'

function AlbumCard(props){
    const album = props.album
    const name = props.name

    return( 
        <Link to={`/album/${album.id}`} className="card album-card" key={album.id}>
            <img className="class-img-top" src={album.image} alt="" />
            <div className="card-body"> 
                <h4 className="card-title">{album.name}</h4>
                <p className="card-subtitle">{name}</p>
            </div>
        </Link>
    )
}

export default AlbumCard