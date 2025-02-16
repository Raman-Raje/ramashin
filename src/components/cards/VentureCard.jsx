import {
    TrendingUp,
    Users,
    DollarSign,
    CheckCircle,
    Calendar,
    ArrowRight
} from 'lucide-react';

// Helper component for metrics
const MetricBox = ({ icon, value, label }) => (
    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
        {icon}
        <div>
            <div className="text-lg font-semibold">{value}</div>
            <div className="text-sm text-gray-500">{label}</div>
        </div>
    </div>
);

const VentureCard = ({ venture }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="border-b border-gray-100  px-8 py-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">{venture.name}</h3>
                    <span
                        className={`px-4 py-1 rounded-full text-sm font-medium ${venture.status === 'Active'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-purple-100 text-purple-600'
                            }`}
                    >
                        {venture.status}
                    </span>
                </div>
                <p className="text-gray-600 mt-1">{venture.tagline}</p>
            </div>

            <div className="p-8">

                <div className="grid grid-cols-3 gap-4 mb-8">
                    <MetricBox
                        icon={<Users className="w-5 h-5 text-gray-500 mr-3" />}
                        value={venture.keyMetrics.users}
                        label="Users"
                    />
                    <MetricBox
                        icon={<DollarSign className="w-5 h-5 text-gray-500 mr-3" />}
                        value={venture.keyMetrics.revenue}
                        label="Revenue"
                    />
                    <MetricBox
                        icon={<TrendingUp className="w-5 h-5 text-gray-500 mr-3" />}
                        value={venture.keyMetrics.growth}
                        label="Growth"
                    />
                </div>

                <div className="space-y-3 mb-8">
                    {venture.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                            <span className="text-gray-600">{highlight}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{venture.duration}</span>
                    </div>
                    <div className="flex gap-3">
                        {venture.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-md"
                            >
                                {link.label}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VentureCard;