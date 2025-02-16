import SectionHeader from './SectionHeader';
import { Route } from 'lucide-react';
import VentureCard from '@components/cards/VentureCard';

export const VentureSection = ({ ventures }) => {
    return (
        <section>
            <SectionHeader icon={<Route className="w-6 h-6 mr-2 text-blue-600" />}
                title="Soloprenuer Journey"
            />
            <div className="space-y-8">
                {ventures.map((venture, index) => (
                    <VentureCard key={index} venture={venture} />
                ))}
            </div>
        </section>
    );
};
