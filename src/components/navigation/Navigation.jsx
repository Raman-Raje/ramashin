const NavButton = ({ section, activeSection, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-2 border-b-2 transition-colors duration-300 ${activeSection === section
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </button>
  );
};

const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = ['experience', 'ventures', 'blog','skills'];

  return (
    <div className="sticky top-0 bg-white shadow-sm z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex space-x-8">
          {sections.map((section) => (
            <NavButton
              key={section}
              section={section}
              activeSection={activeSection}
              onClick={() => setActiveSection(section)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation