// 'use client';

// import { useParams, useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { portfolioItems } from '@/data';

// const PortfolioDetail = () => {
//   const params = useParams();
//   const router = useRouter();
//   const portfolioId = params?.portfolioId;
//   const selectedPortfolioItem = portfolioItems.find(
//     (p) => p.id === parseInt(portfolioId)
//   );

//   if (!selectedPortfolioItem) {
//     return (
//       <div className="relative min-h-screen py-20 px-4 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-white mb-4">
//             Portfolio item not found
//           </h2>
//           <Link href="/portfolio" className="text-purple-400 hover:text-purple-300">
//             ← Back to Portfolio
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen py-6 px-4">
//       <div className="max-w-6xl mx-auto">
//         <Link
//           href="/portfolio"
//           className="mb-8 flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
//         >
//           <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
//           Back to Portfolio
//         </Link>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <div>
//             <img
//               src={selectedPortfolioItem.image}
//               alt={selectedPortfolioItem.title}
//               className="w-full rounded-3xl shadow-2xl"
//             />
//           </div>

//           <div className="space-y-6">
//             <div>
//               <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">
//                 {selectedPortfolioItem.category}
//               </span>
//               <h1 className="text-4xl md:text-4xl font-bold mt-4 mb-4 text-white">
//                 {selectedPortfolioItem.title}
//               </h1>
//               <p className="text-xl text-slate-300 leading-tight">
//                 {selectedPortfolioItem.details}
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-xl border border-slate-700/50">
//                 <h4 className="font-semibold text-purple-400 mb-2">Client</h4>
//                 <p className="text-slate-300">{selectedPortfolioItem.client}</p>
//               </div>
//               <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-xl border border-slate-700/50">
//                 <h4 className="font-semibold text-purple-400 mb-2">Location</h4>
//                 <p className="text-slate-300">{selectedPortfolioItem.location}</p>
//               </div>
//               <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-xl border border-slate-700/50">
//                 <h4 className="font-semibold text-purple-400 mb-2">Date</h4>
//                 <p className="text-slate-300">{selectedPortfolioItem.date}</p>
//               </div>
//             </div>

//             <button
//               onClick={() => router.push('/contact')}
//               className="cursor-pointer w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white"
//             >
//               Start Your Project
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioDetail;



"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/data";

const PortfolioDetail = () => {
  const params = useParams();
  const router = useRouter();

  const portfolioId = params?.portfolioId;

  const selectedPortfolioItem = portfolioItems.find(
    (p) => p.id === parseInt(portfolioId)
  );

  // Portfolio item not found
  if (!selectedPortfolioItem) {
    return (
      <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">
            Portfolio item not found
          </h1>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back to Portfolio */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Portfolio
          </Link>
        </div>

        {/* Portfolio Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Portfolio Image */}
          <div>
            <img
              src={selectedPortfolioItem.image}
              alt={selectedPortfolioItem.title}
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Portfolio Information */}
          <div className="space-y-6">

            <div>
              <span className="inline-block px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                {selectedPortfolioItem.category}
              </span>

              <h1 className="text-4xl md:text-4xl font-bold mt-4 mb-4 text-white">
                {selectedPortfolioItem.title}
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                {selectedPortfolioItem.details}
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4">

              {/* Client */}
              <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-xl border border-slate-700/50">
                <h4 className="font-semibold text-purple-400 mb-2">
                  Client
                </h4>

                <p className="text-slate-300">
                  {selectedPortfolioItem.client}
                </p>
              </div>

              {/* Location */}
              <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-xl border border-slate-700/50">
                <h4 className="font-semibold text-purple-400 mb-2">
                  Location
                </h4>

                <p className="text-slate-300">
                  {selectedPortfolioItem.location}
                </p>
              </div>

              {/* Date */}
              <div className="bg-slate-800/50 rounded-2xl p-4 backdrop-blur-xl border border-slate-700/50">
                <h4 className="font-semibold text-purple-400 mb-2">
                  Date
                </h4>

                <p className="text-slate-300">
                  {selectedPortfolioItem.date}
                </p>
              </div>

            </div>

            {/* Start Project Button */}
            <button
              onClick={() => router.push("/contact")}
              className="cursor-pointer w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;

