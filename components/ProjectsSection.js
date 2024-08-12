import styles from '../styles/ProjectsSection.module.css';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application that does amazing things.',
      imageUrl: '/images/logo.svg',
    //   liveLink: 'https://yourproject1.com',
      githubLink: 'https://github.com/Mrlodhiji/netflex'
    }

  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectLinks}>
              {/* <a href={project.liveLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View Live</a> */}
              <a href={project.githubLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}