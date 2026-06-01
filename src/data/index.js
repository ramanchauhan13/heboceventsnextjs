import { Volume2, Lightbulb, Building2, Palette, Camera, Users, Award, Star, Trophy, Shield, Heart, Clock, Zap, Gift } from 'lucide-react';

import harshit from '../assets/harshit.jpg';
import ayush from '../assets/ayush.jpg';

import jbl from '../assets/equipments/jbl.png';
import yamaha from '../assets/equipments/yamaha.png';
import shure from '../assets/equipments/shure.png';
import rcf from '../assets/equipments/rcf.png';
import soundcraft from '../assets/equipments/soundcraft.png';
import senheizer from '../assets/equipments/scheniser.png';
import akg from '../assets/equipments/akg.png';
import pioneer from '../assets/equipments/pioneer.png';

import jblLogo from '../assets/logos/jbl.png';
import shureLogo from '../assets/logos/shure.png';
import yamahaLogo from '../assets/logos/yamaha.png';
import rcfLogo from '../assets/logos/rcf.png';
import soundcraftLogo from '../assets/logos/soundcraft.png';
import scheniserLogo from '../assets/logos/scheniser.png';
import akgLogo from '../assets/logos/akg.png';
import pioneerLogo from '../assets/logos/pioneer.png';


import led from '../assets/lightningEquipments/led.jpg';
import head from '../assets/lightningEquipments/head.png';
import laser from '../assets/lightningEquipments/laser.png';
import smoke from '../assets/lightningEquipments/smoke1.png';
import strobe from '../assets/lightningEquipments/strobe.png';
import controller from '../assets/lightningEquipments/controller.png';
import blinder from '../assets/lightningEquipments/blinder.png';
import truss from '../assets/lightningEquipments/truss.jpg';

// import strobe1 from '../assets/lightningEquipments/strobe1.png';

import chauvetLogo from '../assets/logos/chauvet.png';
import martinLogo from '../assets/logos/martin.png';
import americanLogo from '../assets/logos/american.jpeg';
import antariLogo from '../assets/logos/antari.jpeg';
import avolitesLogo from '../assets/logos/avolites.png';
import elationLogo from '../assets/logos/elation.png';


import floral from '../assets/decorationEquipments/floral.jpeg';
import backdrop from '../assets/decorationEquipments/backdrop.jpeg';
import center from '../assets/decorationEquipments/center.jpeg';


export const services = [
  {
    id: 'sound',
    icon: Volume2,
    title: "Heboc Sound",
    shortDesc: "Crystal-clear audio systems",
    animateStyle: "fade-right",
    description: "Crystal-clear audio systems with state-of-the-art equipment. Perfect acoustics for every venue size and event type.",
    gradient: "from-pink-500 via-purple-500 to-indigo-600",
    bgGradient: "from-pink-50 to-purple-50",
    features: [
      "4K Audio Quality", 
      "Wireless Systems", 
      "Live Mixing",
      "Multi-Zone Audio Control",
      "Acoustic Analysis & Tuning",
      "Real-time Audio Processing",
      "Professional DJ Setup",
      "Backup System Redundancy",
      "Ambient Sound Control",
      "Voice Enhancement Technology",
      "Live Streaming Audio Feed",
      "Custom EQ Presets",
      "Noise Cancellation Systems",
      "Remote Audio Monitoring",
      "Professional Microphone Arrays",
      "Subwoofer Integration",
      "Delay Tower Setup",
      "Audio Recording Services",
      "Technical Support Team"
    ],
    fullDescription: "Transform your event with our premium audio solutions. Our professional sound systems deliver crystal-clear audio that ensures every word, note, and moment is heard perfectly by every guest. We use cutting-edge technology and have years of experience in various event types.",
    
    equipmentImages: [
      {
        name: "JBL Speakers",
        image: jbl,
        description: "Professional portable PA speakers with exceptional clarity and power",
        brand: "JBL",
        brandLogo: jblLogo
      },
      {
        name: "Shure Microphones",
        image: shure,
        description: "Industry-standard dynamic vocal microphones",
        brand: "Shure",
        brandLogo:  shureLogo
      },
      {
  name: "RCF Speakers",
  image: rcf,
  description: "High-performance professional speakers for live sound",
  brand: "RCF",
  brandLogo: rcfLogo,
},
{
  name: "Soundcraft Signature Mixer",
  image: soundcraft,
  description: "Versatile analog mixer with Ghost preamps",
  brand: "Soundcraft",
  brandLogo: soundcraftLogo
},
{
  name: "AKG Microphones",
  image: akg,
  description: "High-output dynamic mics for vocal clarity",
  brand: "AKG",
  brandLogo: akgLogo
},
      {
        name: "Sennheiser Wireless System",
        image: senheizer,
        description: "Professional wireless microphone system",
        brand: "Sennheiser",
        brandLogo: scheniserLogo
      },
      {
        name: "Yamaha Mixer",
        image: yamaha,
        description: "Professional analog mixing console with premium preamps",
        brand: "Yamaha",
        brandLogo: yamahaLogo
      },
      {
  name: "Pioneer DJ Mixer",
  image: pioneer,
  description: "Industry-standard DJ mixer with exceptional effects and sound quality",
  brand: "Pioneer",
  brandLogo: pioneerLogo
}
    ],

    venues: [
      "Wedding Ceremonies & Receptions",
      "Corporate Conferences",
      "Concert Halls & Auditoriums",
      "Outdoor Festivals",
      "Birthday & Anniversary Parties",
      "Religious Gatherings",
      "Product Launches",
      "Award Ceremonies",
      "Cultural Events",
      "Sports Events",
      "Fashion Shows",
      "Trade Shows & Exhibitions",
      "School & College Functions",
      "Charity Events",
      "Club & Restaurant Events"
    ],

    brands: [
  { name: 'JBL', logo: jblLogo },
  { name: 'RCF', logo: rcfLogo },
  { name: 'Yamaha', logo: yamahaLogo },
  { name: 'Soundcraft', logo: soundcraftLogo },
  { name: 'Shure', logo: shureLogo },
  { name: 'Sennheiser', logo: scheniserLogo },
  { name: 'AKG', logo: akgLogo },
  { name: 'Pinoeer', logo: pioneerLogo },
],
  },

  {
    id: 'lighting',
    icon: Lightbulb,
    title: "Heboc Lighting",
    shortDesc: "Immersive lighting experiences",
    animateStyle: "fade-up",
    description: "Immersive lighting experiences that transform spaces. Smart LED systems with synchronized color palettes.",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    bgGradient: "from-amber-50 to-orange-50",
    features: [
  "Smart LED Systems",
  "Color Synchronization",
  "Mood Lighting",
  "Wireless DMX Control",
  "RGB & RGBA Color Mixing",
  "Moving Head Automation",
  "Gobo Pattern Projection",
  "Laser Light Shows",
  "Strobe Flash Effects",
  "Fog & Smoke Integration",
  "Sound-to-Light Response",
  "DMX Scene Programming",
  "Custom Ambience Themes",
  "Stage Wash Lighting",
  "Beam & Spot Effects"
],
    fullDescription: "Create magical atmospheres with our cutting-edge lighting solutions. From subtle ambient lighting to spectacular light shows, we illuminate your vision with precision and artistry.",

    equipmentImages: [
      {
        name: "Chauvet LED Par Lights",
        image: led,
        description: "RGBA LED par lights with wireless DMX control",
        // brand: "Chauvet",
        // brandLogo: led,
      },
      {
        name: "Martin Moving Head Lights",
        image: head,
        description: "Professional moving head spotlights with gobo projection",
        // brand: "Martin",
      },
      {
        name: "ADJ Laser Projector",
        image: laser,
        description: "RGB laser projector for stunning light effects",
        // brand: "American DJ",
      },
       {
    name: "Fog/Smoke Machine",
    image: smoke,
    description: "High-output fog machine for immersive light and stage effects",
    // brand: "Antari",
  },
  {
    name: "Strobe Light",
    image: strobe,
    description: "Intense burst lighting for high-energy visual moments",
    // brand: "Blizzard",
  },
  {
    name: "Lighting Controller Console",
    image: controller,
    description: "Professional DMX lighting controller for synchronized light shows",
    // brand: "Avolites",
  },
  {
  name: "Premium Truss",
  image: truss, // make sure to define `truss` image
  description: "Heavy-duty truss system for safe and flexible light rigging",
  // brand: "Global Truss",
},
{
  name: "Blinder Light",
  image: blinder, // make sure to define `blinder` image
  description: "Powerful stage blinder lights for crowd-pumping effects",
  // brand: "Showtec",
}
    ],

    venues: [
      "Wedding Ceremonies & Receptions",
      "Corporate Conferences",
      "Concert Halls & Auditoriums",
      "Outdoor Festivals",
      "Birthday & Anniversary Parties",
      "Religious Gatherings",
      "Product Launches",
      "Award Ceremonies",
      "Cultural Events",
      "Sports Events",
      "Fashion Shows",
      "Trade Shows & Exhibitions",
      "School & College Functions",
      "Charity Events",
      "Club & Restaurant Events"
    ],

    brands: [
      { name: 'Chauvet', logo: chauvetLogo },
      { name: 'Martin', logo: martinLogo },
      { name: 'American DJ', logo: americanLogo },
      { name: 'Antari', logo: antariLogo },
      { name: 'Avolites', logo: avolitesLogo },
      { name: 'Elation', logo: elationLogo }
    ],
  },

  {
    id: 'decoration',
    icon: Palette,
    title: "Heboc Decoration",
    shortDesc: "Artistic vision brought to life",
    animateStyle: "fade-left",
    description: "Artistic vision brought to life through innovative design. From minimalist elegance to grand spectacles.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bgGradient: "from-emerald-50 to-teal-50",
    features: [
  "Custom Themes",
  "Floral Arrangements",
  "Venue Transformation",
  "Ambient Lighting",
  "Stage Setup & Backdrops",
  "LED & Neon Decorations",
  "Entrance Decor",
  "Centerpieces & Table Settings",
  "Photo Booth Setup",
  "Thematic Props",
  "Luxury Draping",
  "Balloon Decoration",
  "Customized Signages",
  "3D Welcome Boards"
],

    fullDescription: "Transform any space into a breathtaking venue with our creative decoration services. Our expert designers craft unique experiences tailored to your vision and theme.",

    equipmentImages: [
      {
        name: "Premium Floral Arrangements",
        image: floral,
        description: "Fresh seasonal flowers arranged by expert florists",
        // brand: "Fresh Flowers",
        // brandLogo: "/images/brands/design-logo.png"
      },
      {
        name: "Custom Backdrop Designs",
        image: backdrop,
        description: "Personalized backdrops for photo opportunities",
        // brand: "Custom Design",
        // brandLogo: "/images/brands/design-logo.png"
      },
      {
        name: "Decorative Centerpieces",
        image: center,
        description: "Elegant centerpieces for dining tables",
        // brand: "Custom Decor",
        // brandLogo: "/images/brands/centerpiece-logo.png"
      }
    ],

  //  brands: [
  // { name: 'Florist Partner', logo: '/images/brands/floral-logo.png' },
  // { name: 'Design Studio', logo: '/images/brands/design-logo.png' },
  // { name: 'Luxury Rentals', logo: '/images/brands/furniture-logo.png' },
  // { name: 'LED Decor', logo: '/images/brands/led-decor-logo.png' },
  // { name: 'Premium Linens', logo: '/images/brands/linen-logo.png' },
  // { name: 'Custom Crafts', logo: '/images/brands/centerpiece-logo.png' } // ✅ Corrected this line
// ],

 venues: [
      "Wedding Ceremonies & Receptions",
      "Corporate Conferences",
      "Concert Halls & Auditoriums",
      "Outdoor Festivals",
      "Birthday & Anniversary Parties",
      "Religious Gatherings",
      "Product Launches",
      "Award Ceremonies",
      "Cultural Events",
      "Sports Events",
      "Fashion Shows",
      "School & College Functions",
      "Charity Events",
      "Club & Restaurant Events"
    ],

  }
];


export const portfolioItems = [
  {
    id: 1,
    title: "Royal Wedding Celebration",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    description: "A grand 3-day wedding celebration with over 1000 guests",
    details: "Complete transformation of a heritage venue with custom lighting, professional sound systems, and elaborate decorations. Featured traditional Indian elements with modern aesthetics.",
    // services: ["Sound", "Lighting", "Decoration", "Photography"],
    client: "Sharma Family",
    location: "Delhi",
    date: "April 2025",
    // budget: "₹15,00,000"
  },
  {
    id: 2,
    title: "Corporate Annual Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    description: "High-profile corporate event for 500+ executives",
    details: "Modern corporate setup with state-of-the-art AV equipment, dynamic lighting displays, and professional staging for presentations and entertainment.",
    // services: ["Sound", "Lighting", "Photography"],
    client: "Tech Solutions Ltd",
    location: "Ramnagar",
    date: "November 2024",
    // budget: "₹8,50,000"
  },
  {
    id: 3,
    title: "Music Festival Spectacular",
    category: "Concert",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    description: "3-day music festival with multiple stages",
    details: "Multi-stage setup with concert-grade sound systems, spectacular light shows, and comprehensive crowd management solutions.",
    // services: ["Sound", "Lighting"],
    client: "Music Fest Organizers",
    location: "Nanital",
    date: "January 2024",
    // budget: "₹25,00,000"
  },
  {
    id: 4,
    title: "Luxury Birthday Celebration",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    description: "Elegant 50th birthday party with custom themes",
    details: "Sophisticated venue transformation with personalized decorations, ambient lighting, and premium entertainment setup.",
    // services: ["Decoration", "Lighting", "Photography"],
    client: "Gupta Family",
    location: "Jaipur",
    date: "October 2024",
    // budget: "₹4,50,000"
  },
  {
    id: 5,
    title: "Cultural Festival",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
    description: "Traditional cultural festival with modern production",
    details: "Blend of traditional and contemporary elements with cultural performances, traditional decorations, and modern sound and lighting systems.",
    // services: ["Sound", "Lighting", "Decoration"],
    client: "Cultural Society",
    location: "Lucknow",
    date: "September 2024",
    // budget: "₹6,75,000"
  },
  {
    id: 6,
    title: "Product Launch Event",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
    description: "High-tech product launch with interactive displays",
    details: "Cutting-edge event production with interactive technology, dynamic presentations, and immersive brand experiences.",
    // services: ["Sound", "Lighting", "Photography"],
    client: "Innovation Corp",
    location: "Bareilly",
    date: "August 2024",
    // budget: "₹12,00,000"
  }
];

// data.js
export const teamMembers = [
  {
    name: "Ayush Gaur",
    role: "Founder & CEO",
    experience: "10+ Years", 
    specialization: "Event Styling",
    image: ayush,
    description: "With an eye for detail and creative flair, Sarah transforms venues into stunning spaces that perfectly match your event's theme and vision.",
    expertise: ["Event Planner", "Venue Styling", "Theme Development", "Color Coordination"]
  },
  {
    name: "Harshit",
    role: "Managing Director",
    experience: "5+ Years",
    specialization: "Technical Production",
    image: harshit,
    description: "Expert in professional lighting design and sound engineering, Alex ensures every event has the perfect ambiance and crystal-clear audio quality.",
    expertise: ["Team Manager", "LED Lighting", "Sound Mixing", "Stage Design", "Technical Setup"]
  },
];


export const testimonials = [
  { name: "Ananya Mehta", role: "Wedding Planner", rating: 5, text: "Absolutely phenomenal work! The lighting transformed our venue into a fairy tale.", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100" },
  { name: "Rohit Malhotra", role: "Corporate Events Head", rating: 5, text: "Professional, reliable, and incredibly creative. Our clients were amazed!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" },
  { name: "Priya Sharma", role: "Festival Organizer", rating: 5, text: "The sound quality was pristine. Every guest could hear perfectly from any location.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
  { name: "Arjun Verma", role: "Birthday Planner", rating: 5, text: "They made my daughter's birthday absolutely magical. Exceeded all expectations!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" },
  { name: "Neha Joshi", role: "Corporate Manager", rating: 5, text: "Outstanding service and attention to detail. Our product launch was a huge success.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" }
];


export const achievements = [
  { icon: Trophy, number: "500", label: "Events Completed", color: "from-purple-400 to-pink-400" },
   {
    icon: Users,
    number: 3000,
    label: "Clients Served",
    color: "from-emerald-400 to-cyan-400"
  },
  {
    icon: Building2,
    number: 100,
    label: "Venues Transformed",
    color: "from-amber-400 to-orange-400"
  },
  { icon: Star, number: "99", label: "Client Satisfaction (%)", color: "from-violet-400 to-purple-400" }
];

export const whyChooseUs = [
  {
    icon: Shield,
    title: "Reliable & Professional",
    description: "10+ years of experience with a proven track record of successful events."
  },
  {
    icon: Zap,
    title: "Modern & Innovative",
    description: "We use the latest event tech, lighting, and sound systems to create unforgettable experiences."
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "Every event is crafted with care, passion, and full customization to match your unique vision."
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "We ensure on-time setup and smooth coordination—no delays, no surprises."
  }
];


export const eventTypes = [
  { name: "Weddings", icon: Heart, count: "50+", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300" },
  { name: "Corporate Events", icon: Users, count: "150+", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300" },
  { name: "Concerts", icon: Volume2, count: "200+", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
  { name: "Parties", icon: Gift, count: "100+", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300" },
];



