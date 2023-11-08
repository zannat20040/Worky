import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const Progessbar = ({parcentage}) => {
    return (
        <div className='col-span-2'>
           <ProgressBar percent={parcentage} filledBackground="green"></ProgressBar>
        </div>
    );
};

export default Progessbar;