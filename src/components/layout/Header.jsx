import SocialLinks from './SocialLinks';

const Header = ({ name, title, summary }) => {
  return (
    <header className="bg-white">
      <div className="max-w-4xl mx-auto py-20 px-4">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-lg"></div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 relative">{name}</h1>
        </div>
        <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-6">
          {title}
        </p>
        <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">{summary}</p>
        
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;