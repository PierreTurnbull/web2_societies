import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Title from 'components/atomes/title/Title';
import Quote from '../../atomes/Quote/Quote';
import Text from '../../atomes/text/Text';
import VoteContainer from '../vote/VoteContainer';
import ImageContainer from '../../atomes/image/ImageContainer';
import ComparePopUpContainer from '../../atomes/comparePopUp/ComparePopUpContainer';

import img1 from 'images/jarawa/1.jpg';
import img2 from 'images/jarawa/2.jpg';
import img3 from 'images/jarawa/3.jpg';
import img4 from 'images/jarawa/4.jpg';
import img5 from 'images/jarawa/5.jpg';
import img6 from 'images/jarawa/6.jpeg';
import img7 from 'images/jarawa/7.jpeg';
import img8 from 'images/jarawa/8.jpg';

import '@material/react-material-icon/dist/material-icon.css';
import "./societyContent.css";

class JarawaContent extends Component {

    constructor(props) {
        super(props);
        this.societyContentRef = React.createRef();
    }

    render() {
        const { scrollValue } = this.props;
        return (
            <div className="societyContent" style={{ transform: `skewY(${scrollValue}deg)` }} ref={this.societyContentRef}>
                <div className="header">
                    <Title h="h2" text="Un peuple menacé par la mondialisation" />
                    <i
                        className="material-icons"
                        onClick={() => this.props.history.push('/')}
                        style={{color: "black", background: "rgb(146, 146, 146)", borderRadius: "50%", padding: 2}}
                    >
                        close
                    </i>
                </div>
                <ImageContainer
                    src={img1}
                    imageVariant="fullWidth"
                    // gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                    disabledVisible
                />
                <Text text="Les îles Andaman sont un <b>archipel situé entre le Golf du Bengal et la Mer d’Andaman </b>où habite la tribu des Jarawas, un peuple autochtone vivant depuis des millénaires coupés du monde et du progrès technologique." />
                <Text text="Ils sont les derniers autochtones survivants de la grande île du sud et sont aujourd’hui menacés par le monde extérieur, notamment à cause du tourisme, du braconnage et de la déforestation." />
                <ImageContainer
                    src={img2}
                    imageVariant="right"
                    imageAdornment="CHASSE"
                    adornmentVariant="horizontal"
                    adornmentReverse
                    gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                />
                <Text text="Les Jarawas sont <b>environ 400</b> et étaient, avec d’autres tribus, les seuls habitants de l’archipel, avant l’arrivée des britanniques puis des indiens." />
                <Text text="Vraisemblablement, <b>leurs ancêtres firent partie de la première vague de migration venue d’Afrique de l’est</b>, il y a 70 000 ans et en sont les plus dignes descendants car ils sont restés comme eux, sans religion." />
                <Text text="Cette tribu millénaire est aujourd’hui menacée par la mondialisation et de différentes façons." />
                <Quote variant="simple" text="Braconnage et déforestation" />
                <ImageContainer
                    src={img3}
                    imageVariant="left"
                    imageAdornment="pêche"
                    adornmentVariant="vertical"
                    gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                />
                <VoteContainer question="Pensez-vous que les Jarawas ont une alimentation adaptée à leur organisme ?" />
                <ComparePopUpContainer 
                    text="La tribu des Jarawas a un lien spécial avec la nature et conserve depuis maintenant longtemps une forte connaissance de la faune et de la flore… Qu’en est-il des moines du Mont Athos et des rastas de Jamaïque ? </br>
                    Les moines, étant très pratiquants, organisent leurs repas selon leur religion. Ils mangent toujours à la même heure et juste assez pour ne plus avoir faim. De plus, ils respectent particulièrement les aliments qu’il consomment (pour les animaux par exemple).</br>
                    Les rastas quant à eux, cultivent tout ce qu’ils mangent tout en prenant soin de la terre : chaque plantation est nourrie en respectant celles qui grandiront à sa place plus tard. Ils sont aussi réputés pour fumer beaucoup de cannabis (qu’ils font pousser eux-mêmes) dans le cadre de leur religion : la ganja leur permet de vivre pleinement avec Dieu."
                />
                <Text text="Et non ! Bien qu’en 2000, une étude a conclu que leur régime alimentaire était optimal, qu’ils allaient chercher directement leurs besoins à la source et étaient autosuffisants au niveau des vivres." />
                <Text text="Les aliments qu’ils consommaient n’étaient pas transformés, de plus, ils avaient une connaissance approfondie de plus de 150 plantes et 350 espèces animales. Mais aujourd’hui... les cochons sauvages sont en petit nombre et cela contraint les Jarawas à adapter leur alimentation et à se rabattre vers les autres espèces qui ne sont pas chassées par les braconniers." />
                <ImageContainer
                    src={img4}
                    imageVariant="right"
                    imageAdornment="ALIMENTATION"
                    adornmentVariant="horizontal"
                    adornmentReverse
                    gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                />
                <Text text="Les fruits, racines et tubercules qu’ils avaient pour habitude de trouver en abondance dans les forêts de l’archipelle se font de plus en rares. La mousse et les grandes branches qu’ils ont pour habitudes d’utiliser pour la construction de leurs modestes habitations (chaddhas) deviennent de plus en plus difficiles à trouver à cause de la déforestation causé par les investisseurs internationaux qui voient dans ce peuple un frein à l’exploitation de la forêt." />
                <ImageContainer
                    src={img5}
                    imageVariant="left"
                    imageAdornment="fruits"
                    adornmentVariant="vertical"
                    gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                />
                <Text text="De plus, le choc des cultures ne s'arrête pas seulement à l’alimentation ou à l’environnement, comme les chasseurs-cueilleurs, la tribue des Jarawas a son propre artisanat, largement différent de celui des touristes et braconniers venus sur l’archipelle." />
                <Text text="Par exemple, les bougies en cire végétale avec lesquelles ils éclairaient l'intérieur de leurs chaddhas sont remplacées par des lampes torches. Et leurs vêtements fabriqués à base de végétaux sont remplacés par des t-shirts synthétiques." />
                <Text text="Ces objets qui font tâche sur le mode de vie classique des Jarawas, sont fournis par les touristes prenants part aux safaris humains organisés dans les îles Andamans." />
                <Quote variant="simple" text="Les safaris humains" />
                <Text text="Ayant toujours vécu en autarcie, les Jarawas n’ont commencé à sortir de la forêt où ils vivent qu’en 1998 en commençant par arrêter les voitures et les cars qui passaient par les routes de l’archipel pour demander de la nourriture." />
                <ImageContainer
                    src={img6}
                    imageVariant="right"
                    imageAdornment="tourisme"
                    adornmentVariant="horizontal"
                    adornmentReverse
                    gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                />
                <Text text="Des voitures leurs ont proposé de les emmener avec eux en voiture à travers l’île, certains Jarawas ont même pris le ferry pour se rendre dans des ports Indiens. Il a été rapporté que quelque enfants ont mêmes étés scolarisés dans les écoles des villes Indiennes côtières." />
                <Text text="Voyant cette volonté de certains individus autochtones de rejoindre la civilisation, l’état Indien a tenté de sédentariser les Jarawas en les intégrant dans une société proche de la nôtre. Cependant, cette expérience ayant déjà coûté la disparition de plusieurs tribus à cause des maladies de la civilisation, a été abandonnée." />
                <Text text="L’état Indien n’a pas été le seul à y voir ici une opportunité, la compagnie de voyage Barefoot India a gagné un procès l’autorisant à construire un Hôtel à Collipur, au sud des îles Andaman et ceci concluant à la construction d’autres hôtels un peu partout dans l’archipel." />
                <ImageContainer
                    src={img7}
                    imageVariant="left"
                    imageAdornment="Menaces"
                    adornmentVariant="vertical"
                    gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                />
                <Text text="Les touristes venus du monde entier pour profiter des paysages idylliques des îles Andaman peuvent désormais, grâce aux compagnies de tourisme, partir en safari à travers l’archipel pour découvrir les tribus autochtones vivant là-bas." />
                <Text text="Des centaines de voitures et de bus remplis de touristes sont affrétés pour sillonner les cols montagneux de la région et trouver sur ces routes des jarawas curieux qui pourrait s’approcher de leur véhicule. Ces touristes se permettent donc de filmer ou prendre en photo les autochtones contre de la nourriture ou des objets, comme des radios ou des vêtements." />
                <Quote variant="simple" text="Quel avenir pour les Jarawas ?" />
                <Text text="Malgré le fait qu’en 2004 il a été déterminée grâce à une campagne du mouvement Survival International que les Jarawas pouvaient déterminer leur propre avenir et décider que la civilisation ne devait intervenir dans leur vie qu’au minimum possible, l’étaux se resserre petit à petit autour d’eux." />
                <ImageContainer
                    src={img8}
                    imageVariant="fullWidth"
                    gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                    alt="eve"
                />
                <VoteContainer question="Quelle est l’option que vous privilégierez en tant que Jarawa ?" />
                <Text text="C’est la solution qui semble la plus logique. En effet, on a vu que les Jarawas réagissent mal aux maladies extérieures. De plus, comment les intégrer dans nos sociétés modernes ? Cela demanderait une organisation très complexe. On peut donc imaginer un scénario comparable à celui des sentinelles, un peuple du même archipel que les Jarawas, qui eux prônent l'isolation et attaque quiconque s’approchant de leur territoire. Cette solution bien que radicale est efficace, cependant, les Jarawas n’étant pas les seuls sur leur île et ne pouvant chasser les hôtels déjà enracinés dans la mangrove andamane, ils doivent envisager d’autres options moins violentes." />
            </div>
        )
    }
}

export default withRouter(JarawaContent)