const SkillsCard = ({ skill }) => {
    return (
      <span
        className="px-4 py-2 text-white font-semibold rounded-lg shadow-md 
                   transition-all duration-300 transform cursor-pointer
                   bg-gradient-to-r from-blue-500 to-indigo-500 
                   hover:scale-105 hover:from-indigo-500 hover:to-purple-500
                   border border-transparent hover:border-white/30"
      >
        {skill}
      </span>
    );
  };
  
  export default SkillsCard;
  
  
