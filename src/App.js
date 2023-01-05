import React from 'react';
import './index.scss';
import {useState} from "react";
import {Counter, Modal} from './components';

function App() {
    return (
        <div className="App">
           <Counter/>
           <Modal/>
        </div>
    );
}

export default App;
