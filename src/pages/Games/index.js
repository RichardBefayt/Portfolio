import { useSelector } from "react-redux";

import GameCard from "./GameCard";

import './games.css';

const Games = () => {
    const games = useSelector((state) => state.projects.gamesData);

    return (
        <div className='games'>
            <div className='games-img-container'></div>
            <h2 className="games-title">Jeux</h2>
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