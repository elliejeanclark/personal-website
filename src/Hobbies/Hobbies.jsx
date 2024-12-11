import React from 'react';
import './Hobbies.css';

export function Hobbies() {
    return(
        <div id="hobbies">
            <div id="hobbie-selection">
                <div className="hobbie-container">
                    <i className="fa-solid fa-music"></i>
                    <p>Music</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-book-bookmark"></i>
                    <p>Reading</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-pen-clip"></i>
                    <p>Writing</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-masks-theater"></i>
                    <p>Live theater</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-person-hiking"></i>
                    <p>Walking</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-futbol"></i>
                    <p>Soccer</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-mitten"></i>
                    <p>Crochet</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-dice"></i>
                    <p>Board Games</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <p>Jigsaw Puzzles</p>
                </div>
                <div className="hobbie-container">
                    <i className="fa-solid fa-tv"></i>
                    <p>Entertainment</p>
                </div>
            </div>
        </div>
    );
}