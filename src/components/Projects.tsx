import Link from 'next/link';
import Image from 'next/image';

interface Props {}

const Projects: React.FC<Props> = (props) => {
  return (
    <section className="projects content" id="projects">
      <h2 className="section-title">
        <span className="section-number">2.</span>Projects
      </h2>
    </section>
  );
};

export default Projects;
