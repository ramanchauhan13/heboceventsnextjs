// 'use client';

// import { useParams } from 'next/navigation';
// import { ArrowRight } from 'lucide-react';
// import { services } from '@/data';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function ServiceDetailPage() {
//   const { serviceId } = useParams();
//   const [service, setService] = useState(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     eventDate: '',
//     venue: '',
//     guestCount: '',
//     budget: '',
//     requirements: ''
//   });

//   useEffect(() => {
//     if (serviceId) {
//       const selected = services.find((s) => s.id === serviceId);
//       setService(selected);
//     }
//   }, [serviceId]);

//   const handleFormChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmitEnquiry = () => {
//     alert(`Thank you ${formData.name}! Your enquiry for ${service?.title} has been submitted.`);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       eventType: '',
//       eventDate: '',
//       venue: '',
//       guestCount: '',
//       budget: '',
//       requirements: ''
//     });
//   };

//   if (!service) {
//     return <div className="text-center py-20 text-white text-xl">Loading service details...</div>;
//   }

//   return (
//     <section className="relative min-h-screen py-6 px-4">
//       <div className="max-w-6xl mx-auto">
//         <Link
//           href="/services"
//           className="mb-8 flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
//         >
//           <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
//           Back to Services
//         </Link>

//         {/* Header */}
//         <div className="text-center mb-6">
//           <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
//             <service.icon className="w-10 h-10 text-white" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
//               {service.title}
//             </span>
//           </h1>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-tight">
//             {service.fullDescription}
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 mb-16">
//           {/* LEFT SECTION */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Equipment */}
//             <div>
//               <h2 className="text-3xl font-bold text-white mb-6">Professional Equipment We Use</h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {service.equipmentImages?.map((equipment, index) => (
//                   <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
//                     <div className="relative mb-4 overflow-hidden rounded-xl">
//                       <img
//                         src={equipment.image}
//                         alt={equipment.name}
//                         loading="lazy"
//                         className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>
//                     <h3 className="text-lg font-bold text-white mb-2">{equipment.name}</h3>
//                     <p className="text-sm text-slate-300 mb-3">{equipment.description}</p>
//                     {equipment.brand && (
//                       <div className="flex items-center gap-2">
//                         {equipment.brandLogo ? (
//                           <img src={equipment.brandLogo} alt={equipment.brand} className="w-6 h-6" />
//                         ) : (
//                           <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`} />
//                         )}
//                         <span className="text-xs text-slate-400 font-medium">{equipment.brand}</span>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Brands */}
//             {service.brands?.length > 0 && (
//               <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
//                 <h3 className="text-2xl font-bold text-white mb-6">Trusted Brands We Work With</h3>
//                 <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//                   {service.brands.map((brand, idx) => (
//                     <div key={idx} className="bg-slate-700/30 rounded-xl p-4 flex items-center justify-center hover:bg-slate-700/50 transition-colors">
//                       {brand.logo ? (
//                         <img src={brand.logo} alt={brand.name} loading="lazy" className="w-14 h-14 object-contain" />
//                       ) : (
//                         <span className="text-slate-300 text-sm font-medium">{brand.name}</span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Features and Venues */}
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
//                 <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
//                 <div className="space-y-3">
//                   {service.features?.map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-3 text-slate-300">
//                       <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2`} />
//                       <span className="text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
//                 <h3 className="text-2xl font-bold text-white mb-4">Perfect For</h3>
//                 <div className="space-y-3">
//                   {service.venues?.map((venue, idx) => (
//                     <div key={idx} className="flex items-start gap-3 text-slate-300">
//                       <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2`} />
//                       <span className="text-sm">{venue}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SECTION - FORM */}
//           <div className="bg-slate-800/50 rounded-3xl p-8 h-fit sticky top-6 border border-slate-700/50">
//             <h3 className="text-2xl font-bold text-white mb-6">Get Quote</h3>
//             <div className="space-y-4">
//               {[
//                 { key: 'name', placeholder: 'Full Name *' },
//                 { key: 'email', placeholder: 'Email Address *', type: 'email' },
//                 { key: 'phone', placeholder: 'Phone Number *', type: 'tel' }
//               ].map(({ key, placeholder, type = 'text' }) => (
//                 <input
//                   key={key}
//                   type={type}
//                   placeholder={placeholder}
//                   value={formData[key]}
//                   onChange={(e) => handleFormChange(key, e.target.value)}
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400"
//                 />
//               ))}

//               <select
//                 value={formData.eventType}
//                 onChange={(e) => handleFormChange('eventType', e.target.value)}
//                 className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
//               >
//                 <option value="">Select Event Type</option>
//                 <option value="wedding">Wedding</option>
//                 <option value="corporate">Corporate Event</option>
//                 <option value="birthday">Birthday Party</option>
//                 <option value="concert">Concert</option>
//                 <option value="conference">Conference</option>
//                 <option value="other">Other</option>
//               </select>

//               <button
//                 onClick={handleSubmitEnquiry}
//                 disabled={!formData.name || !formData.email || !formData.phone}
//                 className={`w-full py-4 bg-gradient-to-r ${service.gradient} rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white disabled:opacity-50`}
//               >
//                 Submit Enquiry
//               </button>

//               <div className="text-center text-slate-400 text-sm">
//                 Or call us directly:
//                 <div className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-semibold`}>
//                   <a href="tel:+919319428835">+91 9319428835</a><br />
//                   <a href="tel:+919193380604">+91 9193380604</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { services } from "@/data";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ServiceDetailPage() {
  const { serviceId } = useParams();

  const [service, setService] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    venue: "",
    guestCount: "",
    budget: "",
    requirements: "",
  });

  // Find selected service
  useEffect(() => {
    if (serviceId) {
      const selected = services.find(
        (s) => s.id === serviceId
      );

      setService(selected);
    }
  }, [serviceId]);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmitEnquiry = () => {
    alert(
      `Thank you ${formData.name}! Your enquiry for ${service?.title} has been submitted.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      venue: "",
      guestCount: "",
      budget: "",
      requirements: "",
    });
  };

  // Loading state
  if (!service) {
    return (
      <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-xl text-slate-300">
          Loading service details...
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back to Services */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Services
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">

          {/* Service Icon */}
          <div
            className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6`}
          >
            <service.icon className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span
              className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
            >
              {service.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-8">

            {/* Equipment */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Professional Equipment We Use
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.equipmentImages?.map(
                  (equipment, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      {/* Equipment Image */}
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img
                          src={equipment.image}
                          alt={equipment.name}
                          loading="lazy"
                          className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Equipment Name */}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {equipment.name}
                      </h3>

                      {/* Equipment Description */}
                      <p className="text-sm text-slate-300 mb-3">
                        {equipment.description}
                      </p>

                      {/* Brand */}
                      {equipment.brand && (
                        <div className="flex items-center gap-2">
                          {equipment.brandLogo ? (
                            <img
                              src={equipment.brandLogo}
                              alt={equipment.brand}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                            />
                          )}

                          <span className="text-xs text-slate-400 font-medium">
                            {equipment.brand}
                          </span>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Brands */}
            {service.brands?.length > 0 && (
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Trusted Brands We Work With
                </h3>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {service.brands.map((brand, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/30 rounded-xl p-4 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
                    >
                      {brand.logo ? (
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          loading="lazy"
                          className="w-14 h-14 object-contain"
                        />
                      ) : (
                        <span className="text-slate-300 text-sm font-medium">
                          {brand.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features & Venues */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* What's Included */}
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">
                  What's Included
                </h3>

                <div className="space-y-3">
                  {service.features?.map(
                    (feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}
                        />

                        <span className="text-sm">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Perfect For */}
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Perfect For
                </h3>

                <div className="space-y-3">
                  {service.venues?.map(
                    (venue, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}
                        />

                        <span className="text-sm">
                          {venue}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION - FORM */}
          <div className="bg-slate-800/50 rounded-3xl p-8 h-fit sticky top-6 border border-slate-700/50">

            <h3 className="text-2xl font-bold text-white mb-6">
              Get Quote
            </h3>

            <div className="space-y-4">

              {/* Basic Inputs */}
              {[
                {
                  key: "name",
                  placeholder: "Full Name *",
                },
                {
                  key: "email",
                  placeholder: "Email Address *",
                  type: "email",
                },
                {
                  key: "phone",
                  placeholder: "Phone Number *",
                  type: "tel",
                },
              ].map(
                ({
                  key,
                  placeholder,
                  type = "text",
                }) => (
                  <input
                    key={key}
                    type={type}
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={(e) =>
                      handleFormChange(
                        key,
                        e.target.value
                      )
                    }
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400"
                  />
                )
              )}

              {/* Event Type */}
              <select
                value={formData.eventType}
                onChange={(e) =>
                  handleFormChange(
                    "eventType",
                    e.target.value
                  )
                }
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
              >
                <option value="">
                  Select Event Type
                </option>
                <option value="wedding">
                  Wedding
                </option>
                <option value="corporate">
                  Corporate Event
                </option>
                <option value="birthday">
                  Birthday Party
                </option>
                <option value="concert">
                  Concert
                </option>
                <option value="conference">
                  Conference
                </option>
                <option value="other">
                  Other
                </option>
              </select>

              {/* Submit */}
              <button
                onClick={handleSubmitEnquiry}
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.phone
                }
                className={`w-full py-4 bg-gradient-to-r ${service.gradient} rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Submit Enquiry
              </button>

              {/* Direct Contact */}
              <div className="text-center text-slate-400 text-sm">
                Or call us directly:

                <div
                  className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-semibold mt-2`}
                >
                  <a href="tel:+919319428835">
                    +91 9319428835
                  </a>

                  <br />

                  <a href="tel:+919193380604">
                    +91 9193380604
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

