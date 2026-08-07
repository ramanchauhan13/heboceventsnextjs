// 'use client';

// import { useRouter } from 'next/navigation';
// import { ArrowRight } from 'lucide-react';
// import { services } from '@/data';

// export default function ServicesPage() {
//   const router = useRouter();

//   const handleServiceSelect = (serviceId) => {
//     router.push(`/services/${serviceId}`);
//   };

//   return (
//     <section className="relative min-h-screen py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Our Services
//             </span>
//           </h2>
//           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//             Professional solutions crafted to perfection for your special moments
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className={`group relative bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 border border-slate-700/50 backdrop-blur-xl cursor-pointer`}
//               onClick={() => handleServiceSelect(service.id)}
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
//                 <service.icon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
//               <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
//               <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <ArrowRight className="w-6 h-6 text-slate-700" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { services } from "@/data";

export default function ServicesPage() {
  const router = useRouter();

  const handleServiceSelect = (serviceId) => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional solutions crafted to perfection for your special
            moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className={`group relative bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 border border-slate-700/50 backdrop-blur-xl cursor-pointer`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
              />

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-slate-700" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
