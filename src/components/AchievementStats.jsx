'use client'
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../data';

const AchievementStats = () => {
  const [countKey, setCountKey] = useState(0); // Used to re-trigger CountUp
  const { ref, inView } = useInView({
    threshold: 0.3,
    onChange: (visible) => {
      if (visible) {
        // Every time it comes into view, increment the key
        setCountKey(prev => prev + 1);
      }
    },
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;

        return (
          <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
              <Icon className="w-8 h-8 text-purple-400 group-hover:text-white" />
            </div>
            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
              <CountUp key={countKey + '-' + index} end={achievement.number} duration={2} />
              {index === achievements.length - 1 ? '%' : '+'}
            </div>
            <div className="text-slate-400 text-sm font-medium">{achievement.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AchievementStats;
