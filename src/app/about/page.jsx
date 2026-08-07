// import React from 'react';
// import Image from 'next/image';
// import { Star, Heart, Users, Zap } from 'lucide-react';
// import { achievements, testimonials } from '../../data';
// import heboc from '../../assets/hebocBg.png';

// const About = () => {
//   return (
//     <section className="relative min-h-screen py-6 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Hero Section */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-8">
//               <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                 About Heboc
//               </span>
//             </h1>
//             <p className="text-xl text-slate-300 mb-8 leading-relaxed">
//               With over a decade of experience in creating magical moments, Heboc Events has become synonymous with excellence in event management across India.
//             </p>
//             <p className="text-lg text-slate-400 mb-8 leading-relaxed">
//               Our passionate team of creative professionals specializes in transforming ordinary spaces into extraordinary experiences through innovative sound design, breathtaking lighting solutions, and artistic decorations that tell your unique story.
//             </p>
            
//             {/* Mini Stats */}
//             <div className="grid grid-cols-2 gap-8">
//               {achievements.slice(0, 2).map((achievement, index) => (
//                 <div key={index} className="text-center">
//                   <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
//                     {achievement.number}+
//                   </div>
//                   <div className="text-slate-400">{achievement.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Testimonials Sidebar */}
//           <div className="">
//            <Image
//   src={heboc}
//   alt="Heboc Events"
//   className="w-full h-full object-cover rounded-3xl shadow-lg"
//   placeholder="blur"
//   loading="lazy"
// />
//           </div>
//         </div>

//         {/* Company Journey */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//               Our Journey
//             </span>
//           </h2>
//           <div className="space-y-8 max-w-4xl mx-auto">
//             <div className="flex items-start gap-6">
//               <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2">2015 - The Beginning</h3>
//                 <p className="text-slate-300">Started as a small sound rental service in Moradabad with just 2 team members and basic equipment.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-6">
//               <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2">2018 - Expansion</h3>
//                 <p className="text-slate-300">Added lighting and decoration services, completed our first major wedding with 500+ guests.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-6">
//               <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2">2020 - Innovation</h3>
//                 <p className="text-slate-300">Introduced virtual and hybrid event solutions during the pandemic, helping clients adapt to new norms.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-6">
//               <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2">2025 - Present</h3>
//                 <p className="text-slate-300">Now serving clients across India with a team of 25+ professionals and cutting-edge technology.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mission & Vision */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50">
//             <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
//             <p className="text-slate-300 leading-relaxed">
//               To create unforgettable experiences that bring people together, celebrate life's precious moments, and turn visions into spectacular realities through innovative technology and passionate service.
//             </p>
//           </div>
//           <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50">
//             <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
//             <p className="text-slate-300 leading-relaxed">
//               To be India's most trusted and innovative event production company, setting new standards in creativity, technology, and customer satisfaction while building lasting relationships with our clients.
//             </p>
//           </div>
//         </div>

//         {/* Company Values */}
//         <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-12 backdrop-blur-xl border border-slate-700/50">
//           <h3 className="text-3xl font-bold text-center mb-8">
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               Our Core Values
//             </span>
//           </h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Heart className="w-8 h-8 text-white" />
//               </div>
//               <h4 className="text-xl font-bold text-white mb-2">Passion</h4>
//               <p className="text-slate-300">We love what we do and it shows in every event we create</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h4 className="text-xl font-bold text-white mb-2">Collaboration</h4>
//               <p className="text-slate-300">Teamwork and communication are at the heart of our success</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Zap className="w-8 h-8 text-white" />
//               </div>
//               <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
//               <p className="text-slate-300">We constantly push boundaries to deliver cutting-edge solutions</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import Image from "next/image";
import { Heart, Users, Zap } from "lucide-react";
import { achievements, testimonials } from "../../data";
import heboc from "../../assets/hebocBg.png";

const About = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* About Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                About Heboc
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              With over a decade of experience in creating magical moments,
              Heboc Events has become synonymous with excellence in event
              management across India.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Our passionate team of creative professionals specializes in
              transforming ordinary spaces into extraordinary experiences
              through innovative sound design, breathtaking lighting
              solutions, and artistic decorations that tell your unique story.
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-8">
              {achievements.slice(0, 2).map((achievement, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                  >
                    {achievement.number}+
                  </div>

                  <div className="text-slate-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <Image
              src={heboc}
              alt="Heboc Events"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Company Journey */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">

            {/* 2015 */}
            <div className="flex items-start gap-6">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  2015 - The Beginning
                </h3>

                <p className="text-slate-300">
                  Started as a small sound rental service in Moradabad with
                  just 2 team members and basic equipment.
                </p>
              </div>
            </div>

            {/* 2018 */}
            <div className="flex items-start gap-6">
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  2018 - Expansion
                </h3>

                <p className="text-slate-300">
                  Added lighting and decoration services, completed our first
                  major wedding with 500+ guests.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="flex items-start gap-6">
              <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  2020 - Innovation
                </h3>

                <p className="text-slate-300">
                  Introduced virtual and hybrid event solutions during the
                  pandemic, helping clients adapt to new norms.
                </p>
              </div>
            </div>

            {/* 2025 */}
            <div className="flex items-start gap-6">
              <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  2025 - Present
                </h3>

                <p className="text-slate-300">
                  Now serving clients across India with a team of 25+
                  professionals and cutting-edge technology.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Mission */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>

            <p className="text-slate-300 leading-relaxed">
              To create unforgettable experiences that bring people together,
              celebrate life's precious moments, and turn visions into
              spectacular realities through innovative technology and
              passionate service.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Vision
            </h3>

            <p className="text-slate-300 leading-relaxed">
              To be India's most trusted and innovative event production
              company, setting new standards in creativity, technology, and
              customer satisfaction while building lasting relationships with
              our clients.
            </p>
          </div>

        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-12 backdrop-blur-xl border border-slate-700/50">

          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Passion */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Passion
              </h4>

              <p className="text-slate-300">
                We love what we do and it shows in every event we create.
              </p>
            </div>

            {/* Collaboration */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Collaboration
              </h4>

              <p className="text-slate-300">
                Teamwork and communication are at the heart of our success.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Innovation
              </h4>

              <p className="text-slate-300">
                We constantly push boundaries to deliver cutting-edge
                solutions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
