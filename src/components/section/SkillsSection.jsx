import { Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import SkillsCard from '@components/cards/SkillsCard';

export const SkillsSection = ({ skills }) => {
    console.log("Skills Data:", skills);
  return (
    <section>
      <SectionHeader 
        icon={<Award className="w-6 h-6 mr-2 text-blue-600" />} 
        title="Skills" 
      />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};
