import React, { Component } from 'react'
import SocietyContent from './SocietyContent';

import "./societyContentContainer.css";
import MonksIntro from '../intros/MonksIntro';
export default class SocietyContentContainer extends Component {
    render() {
        return (
            <div className="societyContentContainer">
                <a href='#'>Retour à l'acceuil</a>
                <MonksIntro />
                <SocietyContent />
            </div>
        )
    }
}
