
import { useSelector } from "react-redux";

import GameCard from "./GameCard";

import './games.css';

import backgroundGames from "../../assets/images/jeux.jpg";

const Games = () => {
    const games = useSelector((state) => state.projects.gamesData);

    return (
        <div className='games'>
            <h2 className="games-title">Jeux</h2>
            
            <div className='games-img__container'>
                <img className="games-img" src={backgroundGames} alt="Fond d'écran" />
            </div>

            <div className='games-container'>
                {
                    games.map(
                        (game) => <GameCard key={game.id} {...game} />
                    )
                }
            </div>
        </div>
    );
};

export default Games;