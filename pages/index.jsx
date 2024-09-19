import Link from "next/link";
// import Illustration from '../components/Illustration';
import styles from "../styles/HomePage.module.css";
import styling from "../styles/Home.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

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
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>ANYTHING!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Julien Okumu</h1>
            <h6 className={styles.bio}>
              Full Stack
              <span className={styles.react}> Developer &#128187;</span>
            </h6>

            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>
              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faReact}
                  size="3x"
                  className={`${styling.icon} ${styling.reactIcon}`}
                />
                <div className={styling.skillText}>React</div>
              </div>

              {/* Skill item for JavaScript */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faJs}
                  size="3x"
                  className={`${styling.icon} ${styling.jsIcon}`}
                />
                <div className={styling.skillText}>JavaScript</div>
              </div>

              {/* Skill item for Python */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faPython}
                  size="3x"
                  className={`${styling.icon} ${styling.pythonIcon}`}
                />
                <div className={styling.skillText}>Python</div>
              </div>

              {/* Skill item for Solana Rust */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faJava}
                  size="3x"
                  className={`${styling.icon} ${styling.rustIcon}`}
                />
                <div className={styling.skillText}>Java</div>
              </div>

              {/* Skill item for Express.js */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faNode}
                  size="3x"
                  className={`${styling.icon} ${styling.nodeIcon}`}
                />
                <div className={styling.skillText}>Express.js</div>
              </div>

              {/* Skill item for Express.js */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  className={`${styling.icon} ${styling.githubIcon}`}
                />
                <div className={styling.skillText}>Github</div>
              </div>
            </div>

            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.button} ${styling.workBtn}`}>
                  View Work
                </button>
              </Link>
              <Link href="/resume">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>
                  My Resume
                </button>
              </Link>
            </div>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          {/* Logo image */}
          <div className={styling.imageWrapper}>
            <Image src={logo} alt="Julien Logo" className={styling.myImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
