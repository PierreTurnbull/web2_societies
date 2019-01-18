import React from 'react'
import Title from 'components/atomes/title/Title';

import Quote from '../../atomes/Quote/Quote';
import VoteContainer from '../vote/VoteContainer';
import ImageContainer from '../../atomes/image/ImageContainer';

import img1 from 'images/monks/1.png';
import img2 from 'images/monks/2.png';
import img3 from 'images/monks/3.png';

import "./societyContent.css";

export default function MonksContent(props) {
    // console.log(props.scrollValue);
    
    return (
        <div className="societyContent"  style={{transform: `skewY(${props.scrollValue}deg)`}}>
            <Title h="h3" text="Qui son les moines du Mont Athos" />
            <ImageContainer
                src={img1}
                imageVariant="fullWidth"
                // gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                alt="eve"
                // style={{transform: `skewY(${props.scrollValue}deg)`}}
            />
            <p className="p">Perferenda dierum <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
            <p className="p">Ad amicorum se Quod iam neutris dixisse <b>reverteris dixisse ceciderunt dumtaxat amicos habuisset</b> ceciderunt metuat tum habuisset fuerint iam quos diligat.</p>
            <Title h="h3" text="Qui sont les moines du Mont Athos?" />
            <ImageContainer
                src={img2}
                imageVariant="right"
                imageAdornment="ATHOS MOUNT"
                adornmentVariant="horizontal"
                adornmentReverse
                gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                alt="eve"
            />
            <Quote variant="simple" text="Qui son les moines du Mont Athos" />
            <ImageContainer
                src={img3}
                imageVariant="left"
                imageAdornment="Religion"
                adornmentVariant="vertical"
                gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                alt="eve"
            />
            <p className="p">Perferenda dierum <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
            <VoteContainer />
            <Quote variant="icon" text="Res si suo conservanda silvestribus nemo quidem enim autem cum in impediat etiam illae tamquam." />
            <p className="p">Perferenda dierum <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
            <p className="p">Multa exoptatus summatem honestus coactusque aliquem exoptatus aliquem  <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
            <hr />
        </div>
    )
}
