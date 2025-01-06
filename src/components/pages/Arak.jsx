import React, { createRef, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';

import { Link } from "react-router-dom";
import { HeadSection, Section } from "../Sections";
import { serviceIcons } from "../../data/service-icons";

import { motion as m } from 'framer-motion';
import { animations } from '../../data/framer-animations';

// Data Imports
import config from '../../config.json';

export default function Arak() {
    const [categories, setCategories] = useState([]);
    const [activeServices, setactiveServices] = useState([]);

    const URL = config.settings.isLocalServer ? config.urls.local + '/prices-data' : config.urls.heroku + '/prices-data';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();

                const serviceCategories = [...new Set(jsonData.map(service => service.category))];

                setCategories(serviceCategories);

                setactiveServices(jsonData.filter(service => service.isActive));

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                return;
                //console.error('Fetching finished.');
            }
        };

        fetchData();
    }, []);

    const refs = [];
    const scrolls = [];

    activeServices.forEach((element, index) => {
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
        <m.div className="page arak" {...animations.pageTransition}>
            <Helmet>
                <title>Árak - BEMER, Safe Laser, Lábápolás, SPA, Masszázsok, Kinesio Tape és Csomagajánlatok</title>
            </Helmet>

            <HeadSection
                content={
                    <m.div className="box" {...animations.page.box}>
                        <m.h1 {...animations.page.h1}>
                            Árak
                        </m.h1>
                        <m.p {...animations.page.p}>
                            Ha további részleteket szeretnél megtudni
                            az egyes szolgáltatásokról vagy konkrét árajánlatot kérni,
                            kérlek, vedd fel a kapcsolatot velem.
                        </m.p>
                    </m.div>
                }
            />

            {<Section
                top
                color
                content={
                    <div className="box">
                        <nav className="scroll-links">
                            {
                                categories
                                    .map((category, index) =>
                                        <Link
                                            key={index}
                                            onClick={scrolls[index]} >
                                            <img src={serviceIcons[index].icon.src} alt={serviceIcons[index].icon.alt} />
                                            <h3>
                                                {category}
                                            </h3>
                                        </Link>
                                    )
                            }
                        </nav>
                    </div>
                }
            />}

            {
                categories.map((category, index) =>
                    <Section
                        key={index}
                        color={index % 2 !== 0}
                        top={true}
                        /*bottom={index === activeServices.length - 1 ? true : false}*/
                        scrollRef={refs[index]}
                        content={
                            <div className="box">
                                <table>
                                    <caption>
                                        <h2>{category}</h2>
                                    </caption>



                                    {activeServices.length ? (<tbody>
                                        {
                                            activeServices.filter(service => service.category === category)
                                                .map((service, index) =>
                                                    <tr key={index}>
                                                        <td>
                                                            <h3>{service.name}</h3>
                                                            <p>{service.description}</p>
                                                        </td>
                                                        <td className='price'>
                                                            {service.price.toLocaleString('hu-HU')} Ft
                                                        </td>
                                                    </tr>
                                                )
                                        }
                                    </tbody>) : (
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h3>Egy pillanat, az ár töltődik...</h3>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                        }
                    />
                )
            }
        </m.div >
    )
}


