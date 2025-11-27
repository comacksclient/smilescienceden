"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ImageWithFallback } from '../figma/imagewirtfallback';

const TeamMember = ({ 
  name, 
  role, 
  image 
}: { 
  name: string; 
  role: string; 
  image: string;
}) => (
  <div className="text-center">
    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
      <ImageWithFallback
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">{name}</h3>
    <p className="text-gray-600 text-sm">{role}</p>
  </div>
);

export const AboutTeam = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces&q=80"
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces&q=80"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Periodontist",
      image: "https://images.unsplash.com/photo-1594824476966-48cb8a862cbc?w=400&h=400&fit=crop&crop=faces&q=80"
    },
    {
      name: "Dr. James Wilson",
      role: "Oral Surgeon",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=faces&q=80"
    }
  ];

  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Experienced professionals dedicated to your dental health
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {team.map((member, index) => (
          <ScrollAnimation key={member.name} delay={index * 0.1}>
            <TeamMember {...member} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

