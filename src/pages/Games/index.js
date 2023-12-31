import { useSelector } from "react-redux";
import GameCard from "./GameCard";
import './games.css';

const Games = () => {
    const games = useSelector((state) => state.games.gamesData);

    return (
        <div className='games'>
            <h2 className='games-title'>{games.title}</h2>
            
            <div className='games-container'>
                {
                    games.composition.map(
                        (game) => <GameCard key={game.id} {...game} />
                    )
                }
            </div>

        </div>
    );
};

export default Games;