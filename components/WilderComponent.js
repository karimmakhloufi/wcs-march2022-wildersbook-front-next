import Image from "next/image";
import blank_profile from "../public/blank_profile_picture.png";
import Skill from "./SkillComponent";

const Wilder = ({ firstname, skills }) => {
  return (
    <article className="card">
      <Image src={blank_profile} alt="Jane Doe Profile" />
      <h3>{firstname}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => {
          return <Skill title={skill.title} votes={skill.votes} />;
        })}
      </ul>
    </article>
  );
};

export default Wilder;
