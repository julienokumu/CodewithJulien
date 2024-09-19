import Image from 'next/image';
import styles from '../styles/About.module.css';
import julien from '../public/julien.jpg';
import styling from "../styles/Home.module.css";
// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faWordpress,
  faJs,
  faRust,
  faNode,
  faPython,
  faCss3,
  faJava,
  faGithub,
  faHtml5,
  faReacteurope,
} from "@fortawesome/free-brands-svg-icons";


export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={julien}
              alt="About Me"
              width={150}
              height={160}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>Full Stack Developer</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>Name: </strong>
                  Julien Charles Okumu
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Availability: </strong>
                  Freelance, Remote, & Hybrid
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.paragraph}>
          As a software developer with a passion for crafting intuitive and
          scalable solutions, I thrive on turning complex challenges into
          streamlined user experiences. With expertise in Python, JavaScript,
          and a love for clean code architecture, I’m always excited to explore
          new technologies and optimize systems. My projects, from web apps to
          data-driven platforms, reflect my commitment to continuous learning
          and innovation, pushing the boundaries of what's possible in every
          line of code.{" "}
        </div>
        <br />
        <br />
        <div>
          <p>My Skills :</p>
        </div>

        {/* Skill Icons Section */}
        <div className={styling.skillsContainer}>
          {/* Skill item for React */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faReact}
              size="1x"
              className={`${styling.icon} ${styling.reactIcon}`}
            />
            <div className={styling.skillText}>React</div>
          </div>
          {/* Skill item for JavaScript */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faJs}
              size="1x"
              className={`${styling.icon} ${styling.jsIcon}`}
            />
            <div className={styling.skillText}>JavaScript</div>
          </div>
          {/* Skill item for Python */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faPython}
              size="1x"
              className={`${styling.icon} ${styling.pythonIcon}`}
            />
            <div className={styling.skillText}>Python</div>
          </div>
          {/* Skill item for Java */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faJava}
              size="1x"
              className={`${styling.icon} ${styling.rustIcon}`}
            />
            <div className={styling.skillText}>Java</div>
          </div>
          {/* Skill item for Express.js */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faNode}
              size="1x"
              className={`${styling.icon} ${styling.nodeIcon}`}
            />
            <div className={styling.skillText}>Express.js</div>
          </div>
          {/* Skill item for Github */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              className={`${styling.icon} ${styling.githubIcon}`}
            />
            <div className={styling.skillText}>Github</div>
          </div>
          {/* Skill item for CSS */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faCss3}
              size="1x"
              className={`${styling.icon} ${styling.cssIcon}`}
            />
            <div className={styling.skillText}>CSS</div>
          </div>
          {/* Skill item for HTML */}
          <div className={styling.skillItem}>
            <FontAwesomeIcon
              icon={faHtml5}
              size="1x"
              className={`${styling.icon} ${styling.htmlIcon}`}
            />
            <div className={styling.skillText}>HTML5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}
