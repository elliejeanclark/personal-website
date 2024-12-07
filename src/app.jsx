import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Hobbies } from './Hobbies/Hobbies';
import { Schooling } from './Schooling/Schooling';
import { VolunteeringService } from './VolunteeringService/VolunteeringService';
import { WorkExperience } from './WorkExperience/WorkExperience';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    return (
        <BrowserRouter>
            <div className="body">
                <header>
                    <nav className="navbar navbar-expand-lg" id="head-nav">
                        <menu className="navbar-nav">
                            <div>
                                Elinor Jean Clark
                                {/* eventually a logo here hopefully */}
                            </div>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink className="nav-link" to="/Hobbies">Hobbies</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Schooling">Schooling</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/VolunteeringandService">Volunteering and Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/WorkExperience">Work Experience</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>
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