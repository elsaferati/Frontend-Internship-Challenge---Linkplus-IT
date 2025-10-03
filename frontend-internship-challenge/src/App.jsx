import React from 'react';
import 
{Roues, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';

function App() {
    return (
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path='/user/:id' element = {<UserDetails />}/>
        </Routes>
    );
}