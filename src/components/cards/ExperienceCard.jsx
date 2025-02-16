import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const HighlightItem = ({ highlight }) => {
    return (
        <li className="flex items-start">
            <BulletPoint />
            <span className="text-gray-600">{highlight}</span>
        </li>
    );
};

const BulletPoint = () => (
    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
);

const ExperienceHeader = ({ title, company, duration }) => {
    return (
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 mb-4">
                    {company} • {duration}
                </p>
            </div>
        </div>
    );
};

const ExperienceHighlights = ({ highlights }) => {
    return (
        <ul className="space-y-3">
            {highlights.map((highlight, index) => (
                <HighlightItem key={index} highlight={highlight} />
            ))}
        </ul>
    );
};

const ExperienceCard = ({ experience }) => {
    return (
        <div className="mb-8 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <ExperienceHeader
                title={experience.title}
                company={experience.company}
                duration={experience.duration}
            />
            <ExperienceHighlights highlights={experience.highlights} />
        </div>
    );
};


export default ExperienceCard