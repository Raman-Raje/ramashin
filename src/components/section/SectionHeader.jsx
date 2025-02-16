const SectionHeader = ({ icon, title }) => {
  return (
    <div className="flex items-center mb-8">
      {icon}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

export default SectionHeader;