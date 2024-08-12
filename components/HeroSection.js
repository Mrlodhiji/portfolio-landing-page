import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Hi, I'm Hariom Lodhi</h1>
        <p className={styles.subtitle}>
          A Passionate Web Developer Creating Beautiful and Functional Websites
        </p>
        <a href="#projects" className={styles.ctaButton}>View My Work</a>
      </div>
    </section>
  );
}