import React from "react";
import { Briefcase, Calendar, Star, Zap, Globe, Link, Linkedin, Github, Twitter } from "lucide-react";

export default function MentorCard({ 
  name, 
  role, 
  company, 
  sessions, 
  reviews, 
  image,
  experience,
  attendance, 
  isTopRated = false,
  isAvailableASAP = false,
  flag = "🇺🇸", 
  // --- NEW PROPS ---
  skills = [],
  languages = [],
  socials = {},
  availability = {}
}) {
    // Helper component for social icons
    const SocialIcon = ({ Icon, href }) => {
        if (!href) return null;
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
                <Icon size={18} />
            </a>
        );
    };

    return (
        <div className="p-3 border border-gray-200 rounded-xl bg-white w-72 shadow-sm transition hover:shadow-lg flex flex-col">
            {/* Image Container with Badges (omitted for brevity, assume structure from previous response) */}
            <div className="relative w-full h-56 mb-3">
                <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
                {isTopRated && (<div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"><Star size={12} fill="white" className="text-yellow-400" />Top rated</div>)}
                {isAvailableASAP && (<div className="absolute bottom-2 left-2 bg-green-700 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"><Zap size={14} className="text-white" />Available ASAP</div>)}
            </div>

            {/* Mentor Info */}
            <h3 className="font-semibold text-lg flex items-center gap-1">
                {name} <span className="text-xl">{flag}</span>
            </h3>
            
            {/* Role and Company */}
            <div className="text-gray-600 text-sm mt-1 space-y-1 mb-3">
                <p className="flex items-center gap-2"><Briefcase size={16} className="text-gray-400" />{role} {company && `at ${company}`}</p>
                <p className="flex items-center gap-2"><Calendar size={16} className="text-gray-400" />{sessions} sessions ({reviews} reviews)</p>
            </div>

            {/* Skills (New Section) */}
            <div className="mb-3">
                <h4 className="font-medium text-xs text-gray-500 mb-1">Top Skills:</h4>
                <div className="flex flex-wrap gap-1">
                    {skills.slice(0, 3).map((skill, i) => ( // Show top 3 skills
                        <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{skill}</span>
                    ))}
                    {languages.length > 0 && <span className="text-xs text-gray-500 ml-1">({languages.join(', ')})</span>}
                </div>
            </div>

            {/* Social Links and Schedule Link (New Section) */}
            <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
                <div className="flex gap-3">
                    <SocialIcon Icon={Linkedin} href={socials.linkedin} />
                    <SocialIcon Icon={Github} href={socials.github} />
                    <SocialIcon Icon={Twitter} href={socials.twitter} />
                </div>
                
                {/* Booking/Availability Link */}
                {availability.calendlyLink && (
                    <a 
                        href={availability.calendlyLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-medium text-teal-600 hover:text-teal-800 flex items-center gap-1"
                    >
                        <Globe size={14} /> Book Session
                    </a>
                )}
            </div>

            {/* Stats Section (Experience & Attendance) - Keeping the original stats below the separator for now */}
            {/* ... (Previous Experience/Attendance stats can be moved or kept here) ... */}

        </div>
    );
}