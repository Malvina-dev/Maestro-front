import "./Preview.scss";
import { useState } from "react";

function Preview({title, genres}) {

    // const audio = document.getElementById("audio");
    const play = document.querySelector('.button__play');
    const pause = document.querySelector('.button__pause');

    const [playIsHidden, setPlayIsHidden] = useState(false);
    const [pauseIsHidden, setPauseIsHidden] = useState(true);

    function toggleHidden() {
        setPlayIsHidden(!playIsHidden);
        setPauseIsHidden(!pauseIsHidden);
    }

    function handlePlay() {
        // audio.play();
        toggleHidden();
    }

    function handlePause() {
        // audio.pause();
        toggleHidden();
    }

    return (
        <>
        <article className="preview">
            <div className="preview__container">
                <figure className="preview__title__container">
                    <figcaption className="preview__title">{title}</figcaption>
                    <audio id="audio">
                        {/* à mettre la source dynamiquement, et le type */}
                        <source src="null"/>
                    </audio>
                    <div className="buttons">
                        <div className={playIsHidden ? "button button__play hidden" : "button button__play"} onClick={handlePlay} id="play">
                            <img id="play__icon" src="/src/assets/play-svgrepo-com.svg" alt="play button" />
                        </div>
                        <div className={pauseIsHidden ? "button button__pause hidden" : "button button__pause"} onClick={handlePause} id="pause">
                            <img src="/src/assets/pause-svgrepo-com.svg" alt="pause button" />
                        </div>
                    </div>
                </figure>
            </div>
            <div className="preview__genre__container">
                {
                    // on va chercher dans genres pour afficher dynamiquement (pour le moment avec les données en dur)
                    genres.map((genre, index) => (
                        <span key={index} className="preview__genre">{genre}</span>
                    ))
                }
                {/* <span className="preview__genre">Rock</span>
                <span className="preview__genre">Pop</span>
                <span className="preview__genre">Classique</span> */}
            </div>
        </article>
        </>
    )

};

export default Preview;