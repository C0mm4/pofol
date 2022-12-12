import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import codings from '../../assets/lottie/doomsayer.json';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import styles from '../../styles/about.module.css';
import landstyles from '../../styles/landing.module.css';
import {
    FaFacebook, FaGithub, FaLinkedin, FaTwitter
} from 'react-icons/fa';

import { socialsData } from '../../data/socialsData';

import AnimationLottie from '../Animation';


function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className={styles.about} id="about">
                <div className={styles.lineStyling}>
                    <div className={styles.styleCircle} style={{ backgroundColor: theme.primary }}></div>
                    <div className={styles.styleCircle} style={{ backgroundColor: theme.primary }}></div>
                    <div className={styles.styleLine} style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className={styles.aboutBody}>
                    <div className={styles.aboutDescription}>
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{aboutData.description1}<br /><br />{aboutData.description2}<br/> <br/>{aboutData.description3}</p>
                    </div>
                    <div className={styles.aboutAnimation}>
                        <div>
                            <img class = {styles.radius_img} src = "/doomsayer.jpg" width={500}/>
                        </div>
                        
                    </div>
                    <div className={landstyles.lclContent}>
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className={landstyles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className={landstyles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default About
