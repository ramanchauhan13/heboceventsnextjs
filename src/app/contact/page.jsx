// 'use client';
// import React, { useState } from "react";
// import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const { name, email, phone, message } = formData;

//   if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
//     alert("❌ Please fill all fields before submitting.");
//     return;
//   }

//   try {

//     const formBody = new FormData();
// formBody.append("name", name);
// formBody.append("email", email);
// formBody.append("phone", phone);
// formBody.append("message", message);

//     const response = await fetch("https://formsubmit.co/a33783d29c80203e2e4834f0acb6e567", {
//       method: "POST",
//       body: formBody,
//     });

//     if (response.ok) {
//       alert(`Thank you ${formData.name}! Your message has been sent. We'll contact you within 24 hours.`);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//     } else {
//       alert("❌ Failed to send.");
//     }
//   } catch (err) {
//     console.error("Error:", err);
//     alert("❌ Something went wrong.");
//   }
// };


//   const faqs = [
//     {
//       question: "How far in advance should I book?",
//       answer:
//         "We recommend booking at least 2-3 months in advance for optimal planning and equipment availability.",
//     },
//     {
//       question: "Do you provide equipment for outdoor events?",
//       answer:
//         "Yes, we have weather-resistant equipment suitable for all outdoor venues and conditions.",
//     },
//     {
//       question: "What's included in your packages?",
//       answer:
//         "Our packages include equipment, setup, technical support, and breakdown. Custom packages available.",
//     },
//     {
//       question: "Do you offer payment plans?",
//       answer:
//         "Yes, we offer flexible payment plans with 30% advance and remaining amount before the event.",
//     },
//   ];

//   return (
//     <section className="relative min-h-screen py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               Let's Create Magic
//             </span>
//           </h1>
//           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//             Ready to transform your event into an unforgettable experience? Get
//             in touch with our team today.
//           </p>
//         </div>

//         {/* Contact Form and Info */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-8">
//           {/* Contact Form */}
//           <div className="lg:col-span-3 bg-slate-800/50 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50">
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <MessageCircle className="w-6 h-6 text-purple-400" />
//               Send us a message
//             </h2>
//             <form onSubmit={handleSubmit}  className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Your Name *"
//                   value={formData.name}
//                   onChange={(e) => handleChange("name", e.target.value)}
//                   required
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address *"
//                   value={formData.email}
//                   onChange={(e) => handleChange("email", e.target.value)}
//                   required
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400"
//                 />
//               </div>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="tel"
//                   placeholder="Phone Number *"
//                   value={formData.phone}
//                   onChange={(e) => handleChange("phone", e.target.value)}
//                   required
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400"
//                 />
//                 <select
//                   value={formData.eventType}
//                   onChange={(e) => handleChange("eventType", e.target.value)}
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 >
//                   <option value="">Select Event Type</option>
//                   <option value="wedding">Wedding</option>
//                   <option value="corporate">Corporate Event</option>
//                   <option value="birthday">Birthday Party</option>
//                   <option value="anniversary">Anniversary</option>
//                   <option value="concert">Concert/Festival</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
//               >
//                 <Send className="w-5 h-5" />
//                 Send Message
//               </button>
//             </form>
//           </div>

         
//         </div>

//          {/* Contact Info Cards */}
//           <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-6 backdrop-blur-xl border border-slate-700/50">
//               <Phone className="w-8 h-8 text-purple-400 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Call Us</h3>
//               <a
//                 href="tel:+919319428835"
//                 className="text-slate-300 font-semibold hover:underline"
//               >
//                 +91 9319428835
//               </a>
//               {`${"   |  "}`}  
//               <a
//                 href="tel:+919193380604"
//                 className="text-slate-300 font-semibold hover:underline"
//               >
//                 +91 9193380604
//               </a>
//               <p className="text-slate-400 text-sm mt-1">
//                 24/7 Support Available
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-3xl p-6 backdrop-blur-xl border border-slate-700/50">
//               <Mail className="w-8 h-8 text-emerald-400 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Email Us</h3>
//               <a
//                 href="mailto:hebocofficial@gmail.com"
//                 className="text-slate-300 hover:underline"
//               >
//                 hebocofficial@gmail.com
//               </a>
//               <p className="text-slate-400 text-sm mt-1">
//                 Quick Response Guaranteed
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-3xl p-6 backdrop-blur-xl border border-slate-700/50">
//               <MapPin className="w-8 h-8 text-amber-400 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
//               <p className="text-slate-300 hover:underline">
//                 <a
//                   href="https://maps.app.goo.gl/JNR2H6enwMb6rXaX8?g_st=aw"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Deen Dayal Nagar-II, Moradabad, UP
//                 </a>
//               </p>
//               <p className="text-slate-400 text-sm mt-1">India</p>
//             </div>

//           </div>

//         {/* FAQ Section */}
//         <div className="bg-slate-800/30 rounded-3xl p-12 backdrop-blur-xl border border-slate-700/50">
//           <h3 className="text-3xl font-bold text-center mb-8">
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Frequently Asked Questions
//             </span>
//           </h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             {faqs.map((faq, index) => (
//               <div key={index} className="space-y-2">
//                 <h4 className="text-lg font-semibold text-white">
//                   {faq.question}
//                 </h4>
//                 <p className="text-slate-300 text-sm leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



// "use client";

// import React, { useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Send,
//   MessageCircle,
// } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     eventType: "",
//     message: "",
//   });

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, phone, eventType, message } = formData;

//     if (
//       !name.trim() ||
//       !email.trim() ||
//       !phone.trim() ||
//       !message.trim()
//     ) {
//       alert("❌ Please fill all fields before submitting.");
//       return;
//     }

//     try {
//       const formBody = new FormData();

//       formBody.append("name", name);
//       formBody.append("email", email);
//       formBody.append("phone", phone);
//       formBody.append("eventType", eventType);
//       formBody.append("message", message);

//       const response = await fetch(
//         "https://formsubmit.co/a33783d29c80203e2e4834f0acb6e567",
//         {
//           method: "POST",
//           body: formBody,
//         }
//       );

//       if (response.ok) {
//         alert(
//           `Thank you ${formData.name}! Your message has been sent. We'll contact you within 24 hours.`
//         );

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           eventType: "",
//           message: "",
//         });
//       } else {
//         alert("❌ Failed to send.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       alert("❌ Something went wrong.");
//     }
//   };

//   const faqs = [
//     {
//       question: "How far in advance should I book?",
//       answer:
//         "We recommend booking at least 2-3 months in advance for optimal planning and equipment availability.",
//     },
//     {
//       question: "Do you provide equipment for outdoor events?",
//       answer:
//         "Yes, we have weather-resistant equipment suitable for all outdoor venues and conditions.",
//     },
//     {
//       question: "What's included in your packages?",
//       answer:
//         "Our packages include equipment, setup, technical support, and breakdown. Custom packages available.",
//     },
//     {
//       question: "Do you offer payment plans?",
//       answer:
//         "Yes, we offer flexible payment plans with 30% advance and remaining amount before the event.",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-slate-950 text-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Let's Create Magic
//             </span>
//           </h1>

//           <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
//             Ready to transform your event into an unforgettable experience?
//             Get in touch with our team today.
//           </p>
//         </div>

//         {/* Contact Form */}
//         <div className="mb-8">
//           <div className="bg-slate-800/50 rounded-3xl p-8 backdrop-blur-xl border border-slate-700/50">
            
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <MessageCircle className="w-6 h-6 text-purple-400" />
//               Send us a message
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">

//               {/* Name & Email */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Your Name *"
//                   value={formData.name}
//                   onChange={(e) =>
//                     handleChange("name", e.target.value)
//                   }
//                   required
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address *"
//                   value={formData.email}
//                   onChange={(e) =>
//                     handleChange("email", e.target.value)
//                   }
//                   required
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400"
//                 />
//               </div>

//               {/* Phone & Event Type */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="tel"
//                   placeholder="Phone Number *"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     handleChange("phone", e.target.value)
//                   }
//                   required
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400"
//                 />

//                 <select
//                   value={formData.eventType}
//                   onChange={(e) =>
//                     handleChange("eventType", e.target.value)
//                   }
//                   className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 >
//                   <option value="">Select Event Type</option>
//                   <option value="wedding">Wedding</option>
//                   <option value="corporate">Corporate Event</option>
//                   <option value="birthday">Birthday Party</option>
//                   <option value="anniversary">Anniversary</option>
//                   <option value="concert">
//                     Concert / Festival
//                   </option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               {/* Message */}
//               <textarea
//                 placeholder="Tell us about your event *"
//                 value={formData.message}
//                 onChange={(e) =>
//                   handleChange("message", e.target.value)
//                 }
//                 required
//                 rows={6}
//                 className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400 resize-none"
//               />

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
//               >
//                 <Send className="w-5 h-5" />
//                 Send Message
//               </button>

//             </form>
//           </div>
//         </div>

//         {/* Contact Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

//           {/* Phone */}
//           <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-6 backdrop-blur-xl border border-slate-700/50">
//             <Phone className="w-8 h-8 text-purple-400 mb-4" />

//             <h3 className="text-xl font-semibold mb-2">
//               Call Us
//             </h3>

//             <div className="flex flex-wrap gap-2">
//               <a
//                 href="tel:+919319428835"
//                 className="text-slate-300 font-semibold hover:underline"
//               >
//                 +91 9319428835
//               </a>

//               <span className="text-slate-500">|</span>

//               <a
//                 href="tel:+919193380604"
//                 className="text-slate-300 font-semibold hover:underline"
//               >
//                 +91 9193380604
//               </a>
//             </div>

//             <p className="text-slate-400 text-sm mt-2">
//               24/7 Support Available
//             </p>
//           </div>

//           {/* Email */}
//           <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-3xl p-6 backdrop-blur-xl border border-slate-700/50">
//             <Mail className="w-8 h-8 text-emerald-400 mb-4" />

//             <h3 className="text-xl font-semibold mb-2">
//               Email Us
//             </h3>

//             <a
//               href="mailto:hebocofficial@gmail.com"
//               className="text-slate-300 hover:underline"
//             >
//               hebocofficial@gmail.com
//             </a>

//             <p className="text-slate-400 text-sm mt-1">
//               Quick Response Guaranteed
//             </p>
//           </div>

//           {/* Location */}
//           <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-3xl p-6 backdrop-blur-xl border border-slate-700/50">
//             <MapPin className="w-8 h-8 text-amber-400 mb-4" />

//             <h3 className="text-xl font-semibold mb-2">
//               Visit Us
//             </h3>

//             <a
//               href="https://maps.app.goo.gl/JNR2H6enwMb6rXaX8?g_st=aw"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-slate-300 hover:underline"
//             >
//               Deen Dayal Nagar-II, Moradabad, UP
//             </a>

//             <p className="text-slate-400 text-sm mt-1">
//               India
//             </p>
//           </div>

//         </div>

//         {/* FAQ Section */}
//         <div className="bg-slate-800/30 rounded-3xl p-12 backdrop-blur-xl border border-slate-700/50">

//           <h3 className="text-3xl font-bold text-center mb-8">
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Frequently Asked Questions
//             </span>
//           </h3>

//           <div className="grid md:grid-cols-2 gap-8">
//             {faqs.map((faq, index) => (
//               <div key={index} className="space-y-2">
//                 <h4 className="text-lg font-semibold text-white">
//                   {faq.question}
//                 </h4>

//                 <p className="text-slate-300 text-sm leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, eventType, message } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      alert("❌ Please fill all fields before submitting.");
      return;
    }

    try {
      const formBody = new FormData();

      formBody.append("name", name);
      formBody.append("email", email);
      formBody.append("phone", phone);
      formBody.append("eventType", eventType);
      formBody.append("message", message);

      const response = await fetch(
        "https://formsubmit.co/a33783d29c80203e2e4834f0acb6e567",
        {
          method: "POST",
          body: formBody,
        }
      );

      if (response.ok) {
        alert(
          `Thank you ${formData.name}! Your message has been sent. We'll contact you within 24 hours.`
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Something went wrong.");
    }
  };

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 months in advance for optimal planning and equipment availability.",
    },
    {
      question: "Do you provide equipment for outdoor events?",
      answer:
        "Yes, we have weather-resistant equipment suitable for all outdoor venues and conditions.",
    },
    {
      question: "What's included in your packages?",
      answer:
        "Our packages include equipment, setup, technical support, and breakdown. Custom packages available.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment plans with 30% advance and remaining amount before the event.",
    },
  ];

  return (
    <section className="min-h-screen bg-brand-background text-brand-text py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Let's Create Magic
            </span>
          </h1>

          <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your event into an unforgettable experience?
            Get in touch with our team today.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-8">
          <div className="bg-brand-surface/50 rounded-3xl p-8 backdrop-blur-xl border border-brand-border">

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-brand-primary" />
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                  required
                  className="
                    w-full px-4 py-3
                    bg-brand-card/50
                    border border-brand-border
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-brand-primary
                    focus:border-transparent
                    transition-all
                    text-brand-text
                    placeholder:text-brand-muted
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                  required
                  className="
                    w-full px-4 py-3
                    bg-brand-card/50
                    border border-brand-border
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-brand-primary
                    focus:border-transparent
                    transition-all
                    text-brand-text
                    placeholder:text-brand-muted
                  "
                />

              </div>

              {/* Phone & Event Type */}
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                  required
                  className="
                    w-full px-4 py-3
                    bg-brand-card/50
                    border border-brand-border
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-brand-primary
                    focus:border-transparent
                    transition-all
                    text-brand-text
                    placeholder:text-brand-muted
                  "
                />

                <select
                  value={formData.eventType}
                  onChange={(e) =>
                    handleChange("eventType", e.target.value)
                  }
                  className="
                    w-full px-4 py-3
                    bg-brand-card/50
                    border border-brand-border
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-brand-primary
                    text-brand-text
                  "
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="concert">
                    Concert / Festival
                  </option>
                  <option value="other">Other</option>
                </select>

              </div>

              {/* Message */}
              <textarea
                placeholder="Tell us about your event *"
                value={formData.message}
                onChange={(e) =>
                  handleChange("message", e.target.value)
                }
                required
                rows={6}
                className="
                  w-full px-4 py-3
                  bg-brand-card/50
                  border border-brand-border
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand-primary
                  focus:border-transparent
                  transition-all
                  text-brand-text
                  placeholder:text-brand-muted
                  resize-none
                "
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full py-4
                  bg-gradient-to-r
                  from-brand-primary
                  to-brand-secondary
                  rounded-xl
                  font-semibold
                  hover:opacity-90
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-2xl
                  hover:shadow-brand-primary/25
                  flex items-center
                  justify-center
                  gap-2
                "
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {/* Phone */}
          <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl p-6 backdrop-blur-xl border border-brand-border">

            <Phone className="w-8 h-8 text-brand-primary mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Call Us
            </h3>

            <div className="flex flex-wrap gap-2">

              <a
                href="tel:+919319428835"
                className="text-brand-muted font-semibold hover:text-brand-text hover:underline"
              >
                +91 9319428835
              </a>

              <span className="text-brand-muted">|</span>

              <a
                href="tel:+919193380604"
                className="text-brand-muted font-semibold hover:text-brand-text hover:underline"
              >
                +91 9193380604
              </a>

            </div>

            <p className="text-brand-muted text-sm mt-2">
              24/7 Support Available
            </p>

          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl p-6 backdrop-blur-xl border border-brand-border">

            <Mail className="w-8 h-8 text-brand-secondary mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Email Us
            </h3>

            <a
              href="mailto:hebocofficial@gmail.com"
              className="text-brand-muted hover:text-brand-text hover:underline"
            >
              hebocofficial@gmail.com
            </a>

            <p className="text-brand-muted text-sm mt-1">
              Quick Response Guaranteed
            </p>

          </div>

          {/* Location */}
          <div className="bg-gradient-to-br from-brand-accent/20 to-brand-secondary/20 rounded-3xl p-6 backdrop-blur-xl border border-brand-border">

            <MapPin className="w-8 h-8 text-brand-accent mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Visit Us
            </h3>

            <a
              href="https://maps.app.goo.gl/JNR2H6enwMb6rXaX8?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-text hover:underline"
            >
              Deen Dayal Nagar-II, Moradabad, UP
            </a>

            <p className="text-brand-muted text-sm mt-1">
              India
            </p>

          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-brand-surface/30 rounded-3xl p-12 backdrop-blur-xl border border-brand-border">

          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">

                <h4 className="text-lg font-semibold text-brand-text">
                  {faq.question}
                </h4>

                <p className="text-brand-muted text-sm leading-relaxed">
                  {faq.answer}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;