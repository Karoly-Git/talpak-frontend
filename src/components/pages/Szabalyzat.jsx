import React from 'react';
import { Helmet } from 'react-helmet';

import { Section } from '../Sections';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

import szab_01 from "../../img/szabalyzat/szab_01.jfif";
import szab_02 from "../../img/szabalyzat/szab_02.jfif";
import szab_03 from "../../img/szabalyzat/szab_03.jfif";

export default function Hazirend() {

    return (
        <m.div className="page szabalyzat" {...animations.pageTransition}>
            <Helmet>
                <title>Szabályzat</title>
            </Helmet>
            <Section
                bottom
                top
                content={
                    <div className='box'>
                        <img src={szab_01} alt="szab-1" />
                        <img src={szab_02} alt="szab-2" />
                        <img src={szab_03} alt="szab-3" />
                    </div>
                }
            />
        </m.div>
    )
}
