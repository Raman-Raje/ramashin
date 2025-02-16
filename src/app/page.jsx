'use client';

import { useState } from 'react';

import Header from '@components/layout/Header'
import Navigation from '@components/navigation/Navigation';
import { SkillsSection } from '@components/section/SkillsSection';
import { ExperienceSection } from '@components/section/ExperienceSection';
import { BlogSection } from '@components/section/BlogSection';
import { profile, experience, blogs, projects, ventures } from 'data/profileData';
import { ProjectsSection } from '@components/section/ProjectsSection';
import { VentureSection } from '@components/section/VentureSection';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header
        name={profile.name}
        title={profile.title}
        summary={profile.summary}
      />

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="max-w-4xl mx-auto py-12 px-4">
        {activeSection === 'experience' && <ExperienceSection experience={experience} />}
        {activeSection === 'projects' && <ProjectsSection projects={projects} />}
        {activeSection === 'blog' && <BlogSection blogs={blogs} />}
        {activeSection === 'skills' && <SkillsSection skills={profile.skills} />}
        {activeSection === 'ventures' && <VentureSection ventures={ventures} />}
      </main>
    </div>
  );
}