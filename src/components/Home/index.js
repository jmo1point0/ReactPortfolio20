import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <h1><span id="Jordan">Jordan</span> Mossing</h1>
                    <h4 className="subtitle">Technology Professional</h4>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/assets/images/Profilepicture.jpg`}
                    alt="Me"
                />
            </div>
        </div>
    )
}

export default Home;