import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.Footer}>
        <h2 className={styles.footer__title}>My Movie</h2>
        <p className={styles.footer__author}>Created by Hapis</p>
      </footer>
    </div>
  );
};

export default Footer;
