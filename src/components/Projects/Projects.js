import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import styles from '../../styles/projects.module.css';
import Link from '../link';
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);


    return (
        <>
            {projectsData.length > 0 && (
                <div className={styles.projects} id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className={styles.projectsHeader}>
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className={styles.projectsBody}>
                        <div className={styles.projectsBodyContainer}>
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
