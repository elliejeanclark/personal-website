import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

export function Home() {
    return (
        <div id="main-page">
            <div id="name">Elinor Jean Clark</div>
            <div id="carousel">
                <div id="image-carousel">
                    <Carousel interval={8000}>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="./pictures/headshot1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="./pictures/headshot2.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="./pictures/headshot3.JPG"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="./pictures/headshot4.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="./pictures/headshot5.JPG"
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div id="text-carousel">
                    <Carousel interval={8000}>
                        <Carousel.Item>
                            <p className="home-text" id="intro">
                                Hello! My name is Elinor Jean Clark, and I am a computer scientist passionate about developing software that enhances people's lives. 
                                I graduated high school at Orem High in 2021, and am currently pursuing a Bachelor's Degree in Computer Science at Brigham Young University.
                                I currently work at the Christa McAullife Space center as a Flight Director.
                            </p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p className="home-text" id="hobbies">
                                I am the oldest daughter of 3 children, and I love my family and friends. I love to read, write, crochet, play the piano, complete jigsaw puzzles, hike, attend live theater, 
                                play board games, and spend time with friends and family. I am passionate about being an active member of my community and working with others to better our community 
                                and the world. 
                            </p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p className="home-text" id="schooling">
                                I graduated Orem High School in 2021, graduating with honors and the student director of the Orem High Choir. On graduating I was awarded several scholarships,
                                most notably I recieved the Daniels Fund Scholarship. I am currently pursuing a Bachelor's Degree in Computer Science at Brigham Young University, where I have
                                made the Deans list and been offered positions at the college by multiple professors.
                            </p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p className="home-text" id="work">
                                I currently work at the Christa McAullife Space Center. I have been working at the center since 2021 as a Supervisor, Set Director, and 
                                currently as a Flight Director. I have worked with hundreds of children and adults, helping educate them and helping them have fun discovering the wonders of the universe
                                and their own potential. As a Flight Director, I have had a lot of experience troubleshooting and problem solving.
                            </p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p className="home-text" id="volunteering-service">
                                As a member of the Church of Jesus Christ of Latter-Day Saints I have a strong faith in Jesus Christ and his mission of service. I have served in several 
                                capacities in my church. I have been a teacher, youth leader, and musical accompianist. I also served as a volunteer for 3 years at the Christa McAullife Space before 
                                I was offered a position, and have volunteered in phone banks during elections.
                            </p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}