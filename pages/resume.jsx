import styles from '../styles/ContactPage.module.css';


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["education-section"]}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>
            FULL STACK WEB DEVELOPMENT WITH REACT JS, ANGULAR AND NODEJS
          </h4>
          <div>Udemy INC.</div>
          <div>2022 - 2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>INFORMATION TECHNOLOGY</h4>
          <div>CATHOLIC UNIVERSITY OF EAST AFRICA</div>
          <div>2023 - Present</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
