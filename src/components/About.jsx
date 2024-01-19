import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { logo, resume } from "../assets";
import "./about.css";
import data from "./aboutdata";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </div>
        <div className="container header__container">
          <div className="profile_image">
            <img src={logo} alt=" Profile Image" />
          </div>
          <div className="header_socials">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="black"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div>
            <p>
              <span className="text-[#915eff]">
                <b>Hi, I'm Sahil Gupta,</b>
              </span>{" "}
              Currently pursuing Bachelor in Technology
              <br />
              From Bhagwan Parshuram Institute of Technology which Affilated
              from GGSIPU.
              <br />
              In Specialisation Electrical & Electronics Engineering.
            </p>
            <br />
            <p>
              Motivated and hardworking individual with a passion for software
              <br />
              development seeks hands-on experience with a team of
              <br />
              professionals. Strong understanding of software development
              <br />
              concepts and eagerness to learn new technologies.
            </p>
            <br />
            <p>
              Thank you for taking the time to visit my website, and <br />I
              look forward to connecting with you.
            </p>
          </div>
        </div>
      </motion.div>
      <br />
      <br />

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        <a
          href={resume}
          download
          className="btn primary"
          target="black"
          rel="noopener noreferrer"
        >
          Download cv <HiDownload />
        </a>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
