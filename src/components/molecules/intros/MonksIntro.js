import React, { Component } from 'react'
import Cta from '../../atomes/Cta';

import Title from '../../atomes/title/Title';
import CandleContainer from '../../atomes/Candle/CandleContainer';

import MonksIntroImage from "images/intro_moines.png";
import "./intro.css";
export default class MonksIntro extends Component {
    render() {
        return (
            <div className='intro wrap MonksGradient'>
                <div>
                    <Title h="h2" text="Les moines du Mont Athos" />
                    <p className="p">Découvrez cette communauté de chrétiens orthodoxes vivant en autarcie afin de pouvoir dédier leur vie à la religion, loin de tout péchés.</p>
                </div>
                <img className="intro_image" src={MonksIntroImage} alt="" />
                <CandleContainer />
                <Cta white text="Découvrir le web-documentaire" onClick={() => console.log('fe')} />
            </div>
        )
    }
}
