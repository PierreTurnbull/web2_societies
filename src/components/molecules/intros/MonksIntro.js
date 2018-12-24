import React, { Component } from 'react'
import Cta from '../../atomes/Cta';

import MonksIntroImage from "images/intro_moines.png";
import "./monksIntro.css";
import Title from '../../atomes/title/Title';
import CandleContainer from '../../atomes/Candle/CandleContainer';
export default class MonksIntro extends Component {
    render() {
        return (
            <div className='monksIntro wrap'>
                <div>
                    <Title h="h2" text="Les moines du Mont Athos" />
                    <p className="p">Découvrez cette communauté de chrétiens orthodoxes vivant en autarcie afin de pouvoir dédier leur vie à la religion, loin de tout péchés.</p>
                </div>
                <img className="monks_center" src={MonksIntroImage} alt="" />
                <CandleContainer />
                <Cta white text="Découvrir le web-documentaire" onClick={() => console.log('fe')} />
            </div>
        )
    }
}
