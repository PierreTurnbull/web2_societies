import React, { Component } from 'react'
import { TweenMax, TweenLite, Expo } from "gsap/TweenMax";

import Title from 'components/atomes/title/Title';
import Quote from '../../atomes/Quote/Quote';
import VoteContainer from '../vote/VoteContainer';
import ImageContainer from '../../atomes/image/ImageContainer';

import img1 from 'images/jarawa/1.jpg';
import img2 from 'images/jarawa/2.jpg';
import img3 from 'images/jarawa/3.jpg';
import img4 from 'images/jarawa/4.jpg';
import img6 from 'images/jarawa/6.jpg';

import "./societyContent.css";
import TrackVisibility from 'react-on-screen';
export default class JarawaContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { scrollValue } = this.props;
        return (
            <div className="societyContent" style={{ transform: `skewY(${scrollValue}deg)` }}>
                <p onClick={() => this.props.goBack()} style={{ color: "white" }}>Close</p>
                <Title h="h1" text="Jarawa" />
                <p className="p">Peuple autochtone vivant depuis des millénaires coupé du monde et du progrès technologique. Ils sont aujourd’hui menacés par le monde extérieur, notamment à cause du tourisme.</p>
                <Title h="h3" text="Qui sont-ils ?" />
                <p className="p">Les îles Andaman sont un archipel situé entre le Golf du Bengal et le Mer d’Andaman où vie la tribu des Jarawas.</p>
                <TrackVisibility>
                    <ImageContainer
                        src={img1}
                        imageVariant="fullWidth"
                        // gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                        alt="eve"
                    // style={{transform: `skewY(${props.scrollValue}deg)`}}
                    />
                </TrackVisibility>
                <p className="p">Ils étaient environ 400 et étaient, avec d’autres tribus, les seuls habitants de l’archipel, avant l’arrivée des britanniques puis des indiens. Vraisemblablement, leurs ancêtres firent partie de la première vague de migration venue d’Afrique de l’est, il y a 70000 ans.</p>
                <Title h="h3" text="Mode de vie" />
                <p className="p">Vivant en petit groupes d’une cinquentaine de personnes les Jarawas sont comparables aux chasseurs cueilleurs du paléolithique.</p>
                <Quote variant="simple" text="Ils chassent le cochon sauvage, les tortues, et sont aussi des pêcheurs coralliens aguerries." />
                <TrackVisibility>
                    <ImageContainer
                        src={img2}
                        imageVariant="right"
                        imageAdornment="CHASSE"
                        adornmentVariant="horizontal"
                        adornmentReverse
                        gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                        alt="eve"
                    />
                </TrackVisibility>
                <p className="p">Ils mangent aussi des fruits, des racines, des tubercules et du miel pour équilibrer leur alimentation et vivent dans des huttes végétales appelées chaddhas.</p>
                <TrackVisibility>
                    <ImageContainer
                        src={img3}
                        imageVariant="left"
                        imageAdornment="pêche"
                        adornmentVariant="vertical"
                        gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                        alt="eve"
                    />
                </TrackVisibility>
                <p className="p">En 2000, une étude a conclu que leur régime alimentaire était optimal, ils vont chercher directement leur besoins à la source et sont autosuffisant au niveau des vivres. Les aliments qu’ils consomment ne sont pas transformés de plus ils ont une connaissance approfondie de plus 150 plantes et 350 espèces animales.</p>
                <TrackVisibility>
                    <ImageContainer
                        src={img4}
                        imageVariant="right"
                        imageAdornment="chaddhas"
                        adornmentVariant="horizontal"
                        adornmentReverse
                        gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                        alt="eve"
                    />
                </TrackVisibility>
                <Title h="h3" text="Menaces" />
                <p className="p">Ayant toujours vécu en autarcie les Jarawas n’ont commencé à sortir de la forêt où ils vivent qu’en 1998 en commençant par arrêter les voitures et les cars qui passaient par les route de l’archipel pour demander de la nourriture. Des voitures leurs ont proposé de les emmener avec eux voiture à travers l’île, certains Jarawas ont même pris le ferry pour se rendre dans des ports Indiens. Il a été rapporté que quelque enfants ont mêmes étés scolarisés dans les écoles des villes Indiennes côtières.</p>
                <p className="p">Voyant cette volonté de certains individus autochtones de rejoindre la civilisation, l’état Indien a tenté de sédentariser les Jarawas en les intégrant dans une société proche de la notre. Cependant, cette expérience ayant déjà coûté la disparition de plusieurs tribus à cause des maladies de la civilisation, elle a été abandonnée.</p>
                <p className="p">L’état Indien n’a pas été le seul à voir ici une opportunité, la compagnie de voyage Barefoot India a gagné un procès l’autorisant à construire un Hôtel à Collipur au sud des îles Andamane et d’autres hôtels vont aussi êtres construit un peu partout dans l’archipel.</p>
                <p className="p">Malgré le fait qu’en 2004 il a été déterminée grâce à une campagne du mouvement Survival International que les Jarawas pouvaient déterminer leur propre avenir et décider que la civilisation ne devait intervenir dans leur vie qu’au minimum possible, l’étaux se resserre petit à petit autour d’eux. Des safaris humain sont organisés à travers leur territoire, du braconnage de gibiers dont il dépendent pour survivre subsiste et les investisseurs internationaux voient dans ce peuple un frein à l’exploitation de la forêt.</p>
                <TrackVisibility>
                    <ImageContainer
                        src={img6}
                        imageVariant="fullWidth"
                        gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                        alt="eve"
                    // style={{transform: `skewY(${props.scrollValue}deg)`}}
                    />
                </TrackVisibility>

                <p className="p">Aujourd’hui les Jarawas sont estimés au nombre 250 individus et risque encore de diminuer, les maladies apportés par le contacte avec les touristes de plus en plus nombreux, du peut de vivre leur restant les forçants à demander les aides de l’état indien déséquilibre en entier leur mode de vie et leur santé. Pourront-t-ils s’adapter au mode de vie de la civilisation qui semble pour eux inévitable ?...</p>
                {/* <Quote variant="icon" text="Res si suo conservanda silvestribus nemo quidem enim autem cum in impediat etiam illae tamquam." /> */}
                <VoteContainer />
                <hr />
            </div>
        )
    }
}

