import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          Hi, I'm Hariom lodhi, a passionate web developer with a focus on creating beautiful and functional web applications. I have experience working with modern technologies like React, Next.js, and Node.js. My goal is to build applications that provide excellent user experiences while maintaining clean and maintainable code.
        </p>
        <div className={styles.imageContainer}>
          <img
            src="/images/profile.jpg"
            alt="Hariom lodhi"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}