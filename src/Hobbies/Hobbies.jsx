import React from 'react';
import './Hobbies.css';

const hobbies = [
    { image: './pictures/choir2.jpg', text: 'Music' },
    { image: './pictures/book.jpg', text: 'Reading' },
    { image: './pictures/writing/jpg', text: 'Writing' },
    { image: './pictures/shakespearefestival.JPG', text: 'Live theater' },
    { image: './pictures/hiking/JPG', text: 'Walking' },
    { image: './pictures/soccerteam.jpg', text: 'Soccer' },
    { image: './pictures/crochet.JPG', text: 'Crochet' },
    { image: './pictures/boardgames.jpg', text: 'Board Games' },
    { image: './pictures/puzzle.JPG', text: 'Jigsaw Puzzles' },
    { image: './pictures/starwars.jpg', text: 'Entertainment' }
]

export function Hobbies() {
    return(
        <div>
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