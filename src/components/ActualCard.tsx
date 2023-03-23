import { FC } from "react";
import { useDataContext } from "../context/dataContext";
import '../styles/actualCard.css'


const ActualCard: FC = () => {
    const { actualSong } = useDataContext()
    // console.log(actualSong);

    const playSong = () => {
        window.DZ.init({
            appId: '590384',
            channelUrl: 'http://fox-bel.vercel.app/channel.html',
            player: {
                container: 'player',
                width: 300,
                height: 300,
                format: 'square',
                onload: function () {
                    window.DZ.player.playTracks([actualSong?.id]);
                }
            }
        });

    }
    return (
        <div className="actual-card row">
            <div className="fox-card-2 row">
                <div className="card-image-2 back-image" style={{ backgroundImage: `url("${actualSong?.album?.cover_big}")` }} >
                    {/* <img src={`${song?.album?.cover}`} alt={`${song.title}`} /> */}
                    {/* <i className="fa fa-ellipsis-v" aria-hidden="true"></i> */}
                    <i className="fa fa-play" aria-hidden="true" onClick={playSong}></i>
                </div>
            </div>
            <div className="wrapper back-image" style={{ backgroundImage: `url("${actualSong?.artist?.picture_big}")` }} >
                <div className="text">
                    <div className="title">{`${actualSong?.artist.name} ${actualSong?.album.title}`}  </div>
                    <div className="sub-title">Lo mejor de {actualSong?.artist.name} <b> 321, 123 seguidores</b></div>
                    <div className="description"></div>
                </div>
            </div>
        </div>
    );
}

export default ActualCard;