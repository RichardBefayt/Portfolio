import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

import GameCard from "./GameCard";

import './games.css';

const Games = () => {
    const games = useSelector((state) => state.projects.gamesData);

    return (
        <div className='games'>
            <h2 className="games-title">Jeux</h2>
            <div className='games-container'>
                {
                    games.map(
                        (game) => <GameCard key={game.id} {...game} />
                    )
                }
            </div>

            <Footer />
        </div>
    );
};

export default Games;