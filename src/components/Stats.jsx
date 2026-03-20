
import { Users, Clock, Award, Settings } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      value: "150+",
      label: "Satisfied Clients",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Clock size={32} />,
      value: "24/7",
      label: "Service Support",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Award size={32} />,
      value: "ISO",
      label: "Quality Certified",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: <Settings size={32} />,
      value: "1000+",
      label: "Rollers Restored",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Our Achievements in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="fancy-card text-center flex flex-col items-center justify-center p-6 min-h-[200px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
              <div className="fancy-card-icon mb-4 w-12 h-12 flex items-center justify-center bg-red-50 rounded-xl group-hover:bg-[#f44336] transition-colors duration-500 text-[#f44336]">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold fancy-card-title mb-2">{stat.value}</h3>
              <p className="fancy-card-desc font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;