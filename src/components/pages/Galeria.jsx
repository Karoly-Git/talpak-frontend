import React, { createRef } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { galleries } from '../../data/galleries';

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { HeadSection, Section } from '../Sections';

export default function Galeria() {
    const activeGalleries = galleries.filter(gallery => gallery.isActive);

    const refs = [];
    const scrolls = [];

    activeGalleries.forEach((element, index) => {
        const scrollRef = createRef();
        refs.push(scrollRef);

        function scrollToElement() {
            refs[index].current.scrollIntoView({
                behavior: 'smooth'
            });
        };

        scrolls.push(scrollToElement);
    });

    return (
        <m.div className='page galeria' {...animations.pageTransition}>
            <Helmet>
                <title>Fénykép Galéria - Elkapott Pillanatok a Relaxáció Világából</title>
            </Helmet>
            <HeadSection content={
                <m.div className='box' {...animations.page.box}>
                    <m.h1 {...animations.page.h1}>Elkapott pillanatok</m.h1>
                    <m.p {...animations.page.p}>
                        Üdvözöllek a Masszázs Galériában, ahol bepillantást nyerhetsz a relaxáció világába.
                        Az illatos aromaterápia, a nyugtató gyertyafény stresszt enyhítenek, feszültséget
                        csökkentenek és elősegítik a jó közérzetet.
                    </m.p>
                </m.div>
            }
            />

            <Section
                top
                content={
                    <div className="box">
                        <nav id="scroll-links">
                            {
                                activeGalleries.map((gallery, index) =>
                                    <Link
                                        key={index}
                                        onClick={scrolls[index]}
                                    >
                                        {activeGalleries[index].name}
                                    </Link>
                                )
                            }
                        </nav>
                    </div>
                }
            />

            {
                activeGalleries.map((gallery, index) =>
                    <Section
                        key={index}
                        color={index % 2 === 0}
                        top={true}
                        scrollRef={refs[index]}
                        content={
                            <div className="box">
                                <h2>{activeGalleries[index].name}</h2>
                                <Carousel
                                    className='carousel'
                                    images={activeGalleries[index].imgs}
                                />
                            </div>
                        }
                    />
                )
            }
        </m.div>
    )
}
