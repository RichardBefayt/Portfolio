import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import './games.css';
import { FaAngleDoubleLeft } from "react-icons/fa";

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

            <Link to="/">
                <button className='games-back btn'>
                    <FaAngleDoubleLeft /> Retour
                </button>
            </Link>
            

        </div>
    );
};

export default Games;