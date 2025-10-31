import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const teamMembers = [
    {
      name: "Alex Quantum",
      role: "Lead Developer",
      bio: "Pioneering the future of quantum computing and AI integration.",
      projects: 24,
      experience: "5+",
      skills: 20,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alex@pragyaa.com"
    },
    {
      name: "Sarah Nexus",
      role: "Creative Director",
      bio: "Crafting immersive digital experiences that push boundaries.",
      projects: 18,
      experience: "4+",
      skills: 16,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "sarah@pragyaa.com"
    },
    {
      name: "Max Cyber",
      role: "Tech Architect",
      bio: "Building scalable systems for tomorrow's challenges today.",
      projects: 30,
      experience: "6+",
      skills: 22,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "max@pragyaa.com"
    }
  ];

  return (
    <section className="min-h-screen bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs tracking-[3px] text-cyan-400 mb-3 uppercase animate-pulse">
            Meet The Innovators
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase">
            Our Team
          </h2>
        </div>
        
        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 animate-pulse"></div>
              
              {/* Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-cyan-500/50">
                
                {/* Animated background particles */}
                {hoveredIndex === index && [...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `particleFloat ${2 + Math.random() * 3}s infinite ease-in-out`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: 0.6
                    }}
                  />
                ))}

                {/* Profile Image Container */}
                <div className="relative mb-6 mx-auto w-32 h-32">
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                  
                  {/* Image */}
                  <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-800">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-cyan-400 text-center text-sm tracking-wider uppercase mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-300 text-center text-sm leading-relaxed mb-6 min-h-[60px]">
                  {member.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-cyan-500/20">
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold text-xl">{member.projects}</div>
                    <div className="text-gray-500 text-xs uppercase">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-xl">{member.experience}</div>
                    <div className="text-gray-500 text-xs uppercase">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-pink-400 font-bold text-xl">{member.skills}</div>
                    <div className="text-gray-500 text-xs uppercase">Skills</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.github && (
                    <a 
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-gray-800 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                    >
                      <Github className="w-5 h-5 text-cyan-400 group-hover/icon:text-cyan-300" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-gray-800 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 hover:scale-110 transition-all duration-300 group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-purple-400 group-hover/icon:text-purple-300" />
                    </a>
                  )}
                  {member.twitter && (
                    <a 
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-gray-800 border border-pink-500/30 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500 hover:scale-110 transition-all duration-300 group/icon"
                    >
                      <Twitter className="w-5 h-5 text-pink-400 group-hover/icon:text-pink-300" />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-gray-800 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-110 transition-all duration-300 group/icon"
                    >
                      <Mail className="w-5 h-5 text-cyan-400 group-hover/icon:text-cyan-300" />
                    </a>
                  )}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translate(20px, -20px) scale(1.5);
            opacity: 0.3;
          }
          90% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}