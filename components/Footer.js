import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.navLinks}>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
        <div className={styles.socialLinks}>
          {/* <a href="https://twitter.com/yourusername" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-icon.svg" alt="Twitter" className={styles.icon} />
          </a> */}
          <a href="https://www.linkedin.com/in/hariom-lodhi-4b0045239/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className={styles.icon} />
          </a>
          <a href="https://github.com/Mrlodhiji" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" className={styles.icon} />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Hariom Lodhi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}