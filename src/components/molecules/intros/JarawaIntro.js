import React, { Component } from 'react'
import Cta from '../../atomes/Cta';

import Title from '../../atomes/title/Title';
import JarawaIntroImage from "images/intro_jarawa.png";
import JarawaPaternIntroImage from "images/patern_jarawa.png";
import "./intro.css";
export default class JarawaIntro extends Component {
    render() {
        return (
            <div className='intro wrap JarawaGradient'>
                <div>
                    <Title h="h2" text="Les Jarawas des Andaman" />
                    <p className="p">Découvrez ce peuple autochtone vivant depuis des années coupé du monde moderne et du progrès technologique.</p>
                </div>
                <img className="intro_image" src={JarawaIntroImage} alt="" />
                <img className="intro_patern_image" src={JarawaPaternIntroImage} alt="" />
                <Cta white text="Découvrir le web-documentaire" onClick={() => console.log('fe')} />
            </div>
        )
    }
}
