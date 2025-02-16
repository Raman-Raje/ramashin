import { Code } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProjectCard from '@components/cards/ProjectCard';

export const ProjectsSection = ({ projects }) => {
  return (
    <section>
      <SectionHeader icon={<Code className="w-6 h-6 mr-2 text-blue-600" />}
        title="Projects"
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
