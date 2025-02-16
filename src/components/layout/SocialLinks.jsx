import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

const SocialLink = ({ icon, href }) => {
  return (
    <a href={href} className="transform hover:scale-110 transition-transform duration-200">
      <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
        {icon}
      </div>
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-6 mt-8">
      <SocialLink icon={<Github className="w-6 h-6 text-gray-700" />} href="https://github.com/Raman-Raje" />
      <SocialLink icon={<Linkedin className="w-6 h-6 text-gray-700" />} href="https://www.linkedin.com/in/raman-shinde-562950b2/" />
      <SocialLink icon={<Mail className="w-6 h-6 text-gray-700" />} href="mailto:raman.shinde15@gmail.com" />
      {/* Resume Download Button */}
      <a
        href="https://github.com/Raman-Raje/Resume/raw/master/raman_shinde_qaul.pdf"  // Update this with the correct path to your resume
        download
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2
                   rounded-full font-medium transition-all duration-300 
                   hover:bg-blue-600 hover:scale-105 shadow-md"
      >
        <FileDown className="w-5 h-5" />
        Download Resume
      </a>
    </div>
  );
};

export default SocialLinks