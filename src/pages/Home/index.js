import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";

import './home.css';

const Home = () => (
    <div className='home'>
        <Header />
        <Navbar />
        <Presentation />
    </div>
);

export default Home;