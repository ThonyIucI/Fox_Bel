import { FC } from 'react';
import { useDataContext } from '../context/dataContext';
import '../styles/card.css'
import { Song } from '../vite-env';
interface prop{
    song:Song
}

const Card: FC<prop> = ({song}) => {
    const{showSong}=useDataContext()
    const playSong=()=>{
        window.DZ.init({
            appId: '590384',
            channelUrl: 'http://fox-bel.vercel.app/channel.html',
            player: {
                container: 'player',
                width: 300,
                height: 300,
                format: 'square',
                onload: function () {
                    window.DZ.player.playTracks([song.id]);
                 }
            }
        });
       
    }
    return (
        <div className="fox-card" onClick={() => showSong(song)}>
            <div className="card-image" style={{backgroundImage: `url("${song?.album?.cover_medium}")`}} >
                {/* <img src={`${song?.album?.cover}`} alt={`${song.title}`} /> */}
                {/* <i className="fa fa-ellipsis-v" aria-hidden="true"></i> */}
                <i className="fa fa-play" aria-hidden="true" onClick={playSong}></i>
            </div>
                <div className='album'>{song?.album?.title}</div>
            <div className='c-title'>{song?.title}</div>
        </div>
        
    );
}

export default Card;