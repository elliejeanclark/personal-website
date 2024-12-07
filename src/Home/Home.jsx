import React from 'react';
import { Carousel } from 'react-bootstrap';

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my personal website!</p>
            <Carousel id="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./public/homePage/headshot.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}