import React from 'react';
import { Carousel } from 'react-bootstrap';

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my personal website!</p>
            <div id="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/headshot1.jpg"
                            alt="Headshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/headshot2.jpg"
                            alt="Headshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/headshot3.jpg"
                            alt="Headshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/headshot4.jpg"
                            alt="Headshot"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/choir1.jpg"
                            alt="picture of Ellie in choir"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/choir2.jpg"
                            alt="picture of Ellie in choir"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/choir3.jpg"
                            alt="picture of Ellie in choir"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/choir4.jpg"
                            alt="picture of Ellie in choir"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/family1.png"
                            alt="picture of family"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/family2.jpg"
                            alt="picture of family"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/utahcapitol.png"
                            alt="picture of family"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/graduation1.jpg"
                            alt="picture of Ellie at HS graduation"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/graduation2.jpg"
                            alt="picture of Ellie at HS graduation"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/roommate1.jpg"
                            alt="picture of Ellie with her roommates"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/roommate2.jpg"
                            alt="picture of Ellie with her roommates"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/soccer1.jpg"
                            alt="picture of Ellie with her soccer team"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./homePage/soccer2.jpg"
                            alt="picture of Ellie at soccer game"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}