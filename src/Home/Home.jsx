import React from 'react';
import './Home.css';

export function Home() {
    return (
        <div>
            <div id="name">Elinor Jean Clark</div>
            <div id="card1">
                <img src="./pictures/headshot1.jpg" alt="headshot" id="headshot1"/>
                <p id="intro">
                    Hello! My name is Elinor Jean Clark, and I am a computer scientist passionate about developing software that enhances people's lives. 
                    I graduated high school at Orem High in 2021, and am currently pursuing a Bachelor's Degree in Computer Science at Brigham Young University.
                    I currently work at the Christa McAullife Space center as a Flight Director.
                </p>
            </div>
            <div id="card2">
                <img src="./pictures/headshot2.jpg" alt="headshot" id="headshot2" />
                <p id="personal-info">
                    I am the oldest daughter of 3 children, and I love my family and friends. As a member of the Church of Jesus Christ of Latter-Day Saints
                    I have a strong faith in Jesus Christ and His teachings. I love to read, write, crochet, play the piano, complete jigsaw puzzles, attend live theater, 
                    play board games, and watch fun movies and tv shows with my friends. I am passionate about working with others to better our community and the world. 
                </p>
            </div>
            <div id="card3">
                <img src="./pictures/headshot3.JPG" alt="headshot" id="headshot3" />
                <p id="schooling">
                    I graduated Orem High School in 2021, graduating with honors and the student director of the Orem High Choir. On graduating I was awarded several scholarships,
                    most notably I recieved the Daniels Fund Scholarship. I am currently pursuing a Bachelor's Degree in Computer Science at Brigham Young University, where I have
                    made the Deans list and been offered positions at the college by multiple professors.
                </p>
            </div>
            <div id="card4">
                <img src="./pictures/headshot4.jpg" alt="headshot" id="headshot4" />
                <p id="work">
                    I currently work at the Christa McAullife Space Center. I have been working at the center since 2021 as a Supervisor, Set Director, and 
                    currently as a Flight Director. I have worked with hundreds of children and adults, helping educate them and helping them have fun discovering the wonders of the universe
                    and their own potential. As a Flight Director, I have had a lot of experience troubleshooting and problem solving.
                </p>
            </div>
        </div>
    );
}