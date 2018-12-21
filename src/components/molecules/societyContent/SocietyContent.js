import React from 'react'
import Title from 'components/atomes/title/Title';

import "./societyContent.css";
import Image from '../../atomes/image/Image';
import Quote from '../../atomes/Quote/Quote';
import VoteContainer from '../vote/VoteContainer';
export default function SocietyContent() {
    return (
        <div className="societyContent">
            <Title h="h2" text="Qui son les moines du Mont Athos" />
            <Image src="https://images.unsplash.com/photo-1545271428-47057449c00c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
                style="fullWidth"
                gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                alt="eve"
            />
            <p className="p">Perferenda dierum <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
            <p className="p">Ad amicorum se Quod iam neutris dixisse <b>reverteris dixisse ceciderunt dumtaxat amicos habuisset</b> ceciderunt metuat tum habuisset fuerint iam quos diligat.</p>
            <Title h="h2" text="Qui sont les moines du Mont Athos?" />
            <Image src="https://images.unsplash.com/photo-1545308400-759f679db82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80"
                style="right"
                gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                alt="eve"
            />
            <Quote style="simple" text="Qui son les moines du Mont Athos" />
            <Image src="https://images.unsplash.com/photo-1545229555-f8e4c81ac0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)"
                alt="eve"
            />
            <p className="p">Perferenda dierum <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
            <VoteContainer />
            <Quote style="icon" text="Res si suo conservanda silvestribus nemo quidem enim autem cum in impediat etiam illae tamquam." />
            <p className="p">Perferenda dierum <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
            <p className="p">Multa exoptatus summatem honestus coactusque aliquem exoptatus aliquem  <b>reverteris tandem omnem</b> amicitiam cum ad postridie tot in agnitus vel aetatem frustra discesseris adsiduitati ad agnitus unde.</p>
        </div>
    )
}
