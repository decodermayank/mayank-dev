import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Heart, Target, Globe, Zap, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import StatsCard from "../StatsCard";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

const NSSIntroduction = ({ nssData }) => {
  const missionText = nssData?.overview || `The National Service Scheme (NSS) at Gautam Buddha University is a Government-sponsored public service program under the Ministry of Youth Affairs & Sports, Govt. of India. Guided by the motto "NOT ME BUT YOU", NSS provides an open platform for students to participate in community service, foster civic responsibility, and develop essential leadership skills while actively contributing to nation-building.`;
  const registerUrl = "https://nss-dash.onlinegbu.com/register";
  const loginUrl = "https://nss-dash.onlinegbu.com/login";

  const statsData = [
    {
      icon: Users,
      numberText: "500+",
      title: "Active Volunteers",
      subtitle: "Dedicated Students",
      iconColor: "#2563eb",
    },
    {
      icon: CheckCircle,
      numberText: "10+",
      title: "Projects Completed",
      subtitle: "High Impact Drives",
      iconColor: "#16a34a",
    },
    {
      icon: Globe,
      numberText: "8",
      title: "University Schools",
      subtitle: "Campus-wide Reach",
      iconColor: "#9333ea",
    },
    {
      icon: Award,
      numberText: "10+",
      title: "Years of Service",
      subtitle: "Nation Building",
      iconColor: "#f97316",
    },
  ];

  const whyJoinPillars = [
    {
      icon: Users,
      title: "Community Service",
      description: "Engage in meaningful community service projects that create positive impact in society and help build a better nation.",
      bgColor: "bg-blue-50 text-blue-600"
    },
    {
      icon: Zap,
      title: "Leadership Development",
      description: "Develop leadership skills and gain valuable experience in organizing and managing real-world projects that benefit local communities.",
      bgColor: "bg-amber-50 text-amber-600"
    },
    {
      icon: Award,
      title: "Official Recognition",
      description: "Receive official certificates and national recognition for your service to the nation from university and government authorities.",
      bgColor: "bg-purple-50 text-purple-600"
    }
  ];

  const objectives = [
    {
      icon: Target,
      title: "Community Development",
      description: "Engage in literacy, environmental protection, blood donation, and health awareness drives in adopted villages."
    },
    {
      icon: Users,
      title: "Social Consciousness",
      description: "Develop empathy, civic responsibility, and a deep understanding of societal challenges among student youth."
    },
    {
      icon: Globe,
      title: "National Integration",
      description: "Foster unity, cultural harmony, and inclusive development across diverse communities and academic schools."
    },
    {
      icon: Heart,
      title: "Character & Leadership",
      description: "Cultivate selfless service, crisis response preparedness, and ethical leadership through hands-on service learning."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.4
      }
    })
  };

  return (
    <SearchableWrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
      >
        {/* Plain Simple Light Theme Hero Card */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-4">
                  Official NSS GBU Cell
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight text-slate-900">
                  National Service Scheme <span className="text-blue-600">(NSS GBU)</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-medium mb-4">
                  राष्ट्रीय सेवा योजना - गौतम बुद्ध विश्वविद्यालय
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {missionText}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow"
                  >
                    Start Volunteer Registration <ArrowRight size={16} />
                  </a>
                  <a
                    href={loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    Volunteer Login <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Official NSS Logo */}
              <div className="shrink-0 self-center md:self-auto">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQskMRga2F9mYN9FclMItZ1uhC-XCXkCDM6NuH1ryD_EGqplR1XrarhOZpafQ2V-WPvBs&usqp=CAU"
                  alt="Official NSS Logo"
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain bg-white rounded-full p-2.5 shadow-md border-2 border-slate-200"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics Card Component */}
        <motion.div variants={fadeInUp}>
          <StatsCard stats={statsData} fadeInUp={fadeInUp} />
        </motion.div>

        {/* Why Join NSS Section */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Why Join NSS GBU?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyJoinPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-4`}>
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Objectives Section */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900">Key Objectives & Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center space-x-4">
                  <div className="bg-blue-50 p-2.5 rounded-xl shrink-0">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{objective.title}</h3>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Light Theme Call to Action Card */}
        <motion.div variants={fadeInUp}>
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 text-slate-900 shadow-sm border border-slate-200 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight text-slate-900">Ready to Serve the Nation?</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
              Join thousands of GBU students who are making a positive difference through the National Service Scheme. Start your volunteer journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 relative z-10">
              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold text-sm transition-all shadow-sm inline-flex items-center gap-2"
              >
                Register Now <ArrowRight size={16} />
              </a>
              <a
                href={loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-7 py-3 rounded-xl font-semibold text-sm transition-all inline-flex items-center gap-2 shadow-sm"
              >
                Volunteer Portal <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SearchableWrapper>
  );
};

export default NSSIntroduction;
