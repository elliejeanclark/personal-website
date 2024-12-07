import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Hobbies } from './Hobbies/Hobbies';
import { Schooling } from './Schooling/Schooling';
import { VolunteeringService } from './VolunteeringService/VolunteeringService';
import { WorkExperience } from './WorkExperience/WorkExperience';
import './app.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Hello World! :D</h1>
            </div>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Hobbies' element={<Hobbies />}/>
                <Route path='/Schooling' element={<Schooling />}/>
                <Route path='/VolunteeringandService' element={<VolunteeringService />}/>
                <Route path='/WorkExperience' element={<WorkExperience />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;