
import { Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ExperienceCard from '@components/cards/ExperienceCard';

export const ExperienceSection = ({ experience }) => {
  return (
    <section className="space-y-6">
      <SectionHeader icon={<Briefcase className="w-6 h-6 mr-2 text-blue-600" />}
        title="Experience"
      />
      {experience.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </section>
  );
};
