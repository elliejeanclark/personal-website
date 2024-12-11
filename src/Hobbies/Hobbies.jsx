import React, { useState } from 'react';
import './Hobbies.css';

const hobbies = [
    { id: 'music', image: './pictures/choir2.jpg', text: 'I have been playing the piano since 2011, and have continued to love the piano more and more as I increase my talents and abilities. I also love to sing, I joined choir in Junior High, and eventulaly became the student director of the choir program at Orem High school. I conducted the mens chorus at Orem high as well as accompianied the majority of the choirs.' },
    { id: 'reading', image: './pictures/book.jpg', text: 'I have been an avid reader ever since I read the book "The False Prince" by Jennifer A. Nielson. I love fiction books, and I have read a wide range of fiction from historical and realistic, to fantasy and science fiction. I love exploring the world through books.' },
    { id: 'writing', image: './pictures/writing/jpg', text: 'Writing has been a fun pastime for me. I\'ve been writing stories since I was a little girl. I most recently have been writing some fan fiction in my spare time for the star wars universe. Writing helps me to focus my mind and find new ways to express my creativity.' },
    { id: 'liveTheater', image: './pictures/shakespearefestival.JPG', text: 'The Live Theater has always thrilled me, in particular works by Shakespeare. I visit the Shakespeare Festival in Cedar City with my family every year. I have also loved attending the local theater with my friends and family.' },
    { id: 'walking', image: './pictures/hiking/JPG', text: 'My Father has a very strong love of the outdoors, and has been taking me to the beautiful places of Utah since before I could walk and truley appreciate them myself. I love to go walking in these places that have such wonderful memories tied to them.' },
    { id: 'soccer', image: './pictures/soccerteam.jpg', text: 'I saw my first soccer game with my cousins on a small computer in my grandparent\'s basement, and it was love at first sight. I went on to play for all of junior high and my freshman year of High School. My team took second state-wide in our division.' },
    { id: 'crochet', image: './pictures/crochet.JPG', text: 'Though crochet is a relatively new hobby of mine, I love the feeling of creating something with my hands, and the repetitiveness of crocheting blankets is especially soothing to me.' },
    { id: 'boardGames', image: './pictures/boardgames.jpg', text: 'Board Games are a family tradition that I have been participating in ever since I could. My love for board games, both simple card games and complex strategy games has grown through my life. My current favorite is Star Wars: Shatterpoint.' },
    { id: 'puzzles', image: './pictures/puzzle.JPG', text: 'My mind has always love solving puzzles, and jigsaw puzzles has always been a particular favorite of mine. My personal favorites are puzzles designed by Thomas Kinkade as well as dowdle. I love to solve these puzzles while listening to music watching a favorite TV show.' },
    { id: 'entertainment', image: './pictures/starwars.jpg', text: 'I love everything nerdy. My personal favorite franchise is Star Wars. I also love watching tv with my family, especially shows like Brooklyn 99, Parks and Recreation, The Good Place, and many others. I also love playing the Legend of Zelda Breath of the Wild and Tears of the Kingdom.' }
]

export function Hobbies() {
    const [selectedHobby, setSelectedHobby] = useState(null);

    function loadHobby(id) {
        const hobby = hobbies.find(hobby => hobby.id === id);
        setSelectedHobby(hobby);
    }
    
    return(
        <div>
            <div id="hobbie-selection">
                <div className="hobbie-container" onClick={() => loadHobby('music')}>
                    <i className="fa-solid fa-music"></i>
                    <p>Music</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('reading')}>
                    <i className="fa-solid fa-book-bookmark"></i>
                    <p>Reading</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('writing')}>
                    <i className="fa-solid fa-pen-clip"></i>
                    <p>Writing</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('liveTheater')}>
                    <i className="fa-solid fa-masks-theater"></i>
                    <p>Live theater</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('walking')}>
                    <i className="fa-solid fa-person-hiking"></i>
                    <p>Walking</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('soccer')}>
                    <i className="fa-solid fa-futbol"></i>
                    <p>Soccer</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('crochet')}>
                    <i className="fa-solid fa-mitten"></i>
                    <p>Crochet</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('boardGames')}>
                    <i className="fa-solid fa-dice"></i>
                    <p>Board Games</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('puzzles')}>
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <p>Jigsaw Puzzles</p>
                </div>
                <div className="hobbie-container" onClick={() => loadHobby('entertainment')}>
                    <i className="fa-solid fa-tv"></i>
                    <p>Entertainment</p>
                </div>
            </div>

            <div id="specific-hobby">
                {selectedHobby && (
                    <div>
                        <div id="hobbie-image">
                            <img src={selectedHobby.image} alt={selectedHobby.id} />
                        </div>
                        <div id="hobbie-text">
                            <p>{selectedHobby.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}