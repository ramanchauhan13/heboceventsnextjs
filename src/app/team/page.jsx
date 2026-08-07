// import React from 'react';
// import { Mail, Phone, Linkedin, Heart, Users, Zap, Lightbulb, Volume2, Palette } from 'lucide-react';
// import { teamMembers } from '../../data';

// const Team = () => {
//   return (
//     <section className="relative min-h-screen py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               Meet Our Team
//             </span>
//           </h1>
//           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//             The creative professionals behind Heboc's extraordinary lighting, sound, and decoration services
//           </p>
//         </div>

//         {/* Team Members - Enhanced 2-Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-3xl p-8 backdrop-blur-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
//             >
//               {/* Member Photo */}
//               <div className="text-center mb-6">
//                 <div className="w-42 h-42 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-purple-500/30">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
//                 <p className="text-purple-400 font-semibold text-lg mb-3">{member.role}</p>
//               </div>

//               {/* Experience & Specialization */}
//               <div className="flex justify-center gap-6 text-sm text-slate-300 mb-4">
//                 <span className="flex items-center gap-2">
//                   <Zap className="w-4 h-4 text-cyan-400" />
//                   {member.experience}
//                 </span>
//                 <span className="flex items-center gap-2">
//                   <Palette className="w-4 h-4 text-pink-400" />
//                   {member.specialization}
//                 </span>
//               </div>

//               {/* Description */}
//               <p className="text-slate-300 leading-relaxed mb-6 text-center">{member.description}</p>
              
//               {/* Expertise Tags */}
//               <div className="flex flex-wrap justify-center gap-2 mb-6">
//                 {member.expertise?.map((skill, skillIndex) => (
//                   <span
//                     key={skillIndex}
//                     className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               {/* Contact Buttons
//               <div className="flex justify-center gap-3">
//                 <button className="px-4 py-2 bg-slate-700 rounded-xl flex items-center gap-2 hover:bg-purple-600 transition-colors text-sm">
//                   <Mail className="w-4 h-4" />
//                   <span>Email</span>
//                 </button>
//                 <button className="px-4 py-2 bg-slate-700 rounded-xl flex items-center gap-2 hover:bg-purple-600 transition-colors text-sm">
//                   <Phone className="w-4 h-4" />
//                   <span>Call</span>
//                 </button>
//                 <button className="px-4 py-2 bg-slate-700 rounded-xl flex items-center gap-2 hover:bg-purple-600 transition-colors text-sm">
//                   <Linkedin className="w-4 h-4" />
//                   <span>Connect</span>
//                 </button>
//               </div> */}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Team;



import React from "react";
import { Zap, Palette } from "lucide-react";
import { teamMembers } from "../../data";

const Team = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The creative professionals behind Heboc's extraordinary lighting,
            sound, and decoration services.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-3xl p-8 backdrop-blur-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
            >

              {/* Member Photo */}
              <div className="text-center mb-6">
                <div className="w-42 h-42 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-purple-500/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                <p className="text-purple-400 font-semibold text-lg mb-3">
                  {member.role}
                </p>
              </div>

              {/* Experience & Specialization */}
              <div className="flex justify-center gap-6 text-sm text-slate-300 mb-4">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  {member.experience}
                </span>

                <span className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-pink-400" />
                  {member.specialization}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6 text-center">
                {member.description}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.expertise?.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
