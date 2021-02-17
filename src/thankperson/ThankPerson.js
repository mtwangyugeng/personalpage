import React from 'react';
import './ThankPerson.css';

import NameCard from '../namecard/NameCard'
import Badges from './badges/Badges'

export default class ThankPerson extends React.Component{
    render() {
        return ( 
            <>
            <div className = 'ThankPerson-container'>
                <Badges ba = {['ThankPerson-badges-adviser', 'ThankPerson-badges-react']}/>
                <NameCard login = "JDong3"/>
            </div>

            <div className = 'ThankPerson-container'>
                <Badges ba = {['ThankPerson-badges-adviser']}/>
                <NameCard login = "epicsteve2"/>
            </div>
             </>
        );
    }
}

