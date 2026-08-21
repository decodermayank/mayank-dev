// Minimal Card components for local use, styled for responsiveness
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, Star, Flag, ArrowRight, ExternalLink } from 'lucide-react';
import SearchableWrapper from "../Searchbar/SearchableWrapper";

const Card = ({ className = "", children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`rounded-2xl shadow-sm bg-white border border-slate-200 ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-bold text-xl md:text-2xl ${className}`}>{children}</h2>
);

const CardContent = ({ className = "", children }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

const NCCIntroduction = ({ nccData }) => {
  const visionText = nccData?.overview || `Gautam Buddha University (GBU) in Greater Noida has active National Cadet Corps (NCC) wings for both male and female students, operating under the 31 UP Girls Battalion and 37 UP Battalion NCC (Ghaziabad) to train youth in discipline, leadership, and national service.`;
  const registerUrl = nccData?.content?.email || "#";
  const mainUrl = nccData?.content?.websiteUrl || "#";

  const objectives = [
    {
      icon: Shield,
      title: 'Character Development',
      description: 'Develop qualities of character, courage, comradeship, discipline, leadership, and patriotism.'
    },
    {
      icon: Target,
      title: 'Military Training',
      description: 'Provide basic military training to create a pool of organized, trained, and motivated youth.'
    },
    {
      icon: Flag,
      title: 'National Unity',
      description: 'Foster unity and brotherhood among youth of different backgrounds and regions.'
    },
    {
      icon: Users,
      title: 'Social Service',
      description: 'Encourage youth to actively participate in community development and social service.'
    }
  ];

  return (
    <SearchableWrapper>
      <div className="space-y-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Plain Simple Light Theme Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-4">
                  Official NCC GBU Cell
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight text-slate-900">
                  National Cadet Corps <span className="text-blue-600">(NCC GBU)</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-medium mb-4">
                  राष्ट्रीय कैडेट कोर - गौतम बुद्ध विश्वविद्यालय
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {visionText}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={registerUrl}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow"
                  >
                    Start Cadet Registration <ArrowRight size={16} />
                  </a>
                  <a
                    href={mainUrl}
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    Cadet Login <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Official NCC Emblem Logo */}
              <div className="shrink-0 self-center md:self-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_National_Cadet_Corps_%28India%29.png"
                  alt="Official NCC Logo"
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain bg-white rounded-full p-2.5 shadow-md border-2 border-slate-200"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://panducollege.ac.in/images/ncc-new-logo.png";
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Unit Information */}
        <div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-6 flex items-center justify-center gap-2">
            <Shield className="w-6 h-6 text-blue-600" />
            Unit Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Associate NCC Officer (31 UP Girls Bn)</div>
              <div className="text-lg font-extrabold text-slate-900">Lt. Bhawna Joshi</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">ANO / CTO - GBU Girls Wing</div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">NCC Caretaker (37 UP Battalion)</div>
              <div className="text-lg font-extrabold text-slate-900">Dr. Nitesh Singh Bhati</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">CTO - 37 UP BN NCC Ghaziabad</div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Affiliated Wing</div>
              <div className="text-xl font-bold text-slate-800">Army</div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">NCC Unit Battalions</div>
              <div className="text-base font-bold text-slate-800 leading-snug">
                <div>37 UP BN NCC (GZB)</div>
                <div className="text-xs font-medium text-slate-600">31 UP BN (Girl) NCC</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Intake Capacity</div>
              <div className="text-xl font-bold text-slate-800">200 Cadets</div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Certificates Offered</div>
              <div className="text-xl font-bold text-slate-800">B & C</div>
            </div>
          </div>
        </div>

        {/* Battalion Structure & Training Camps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Unit Structure & Strength</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span><strong className="text-slate-900">31 UP Girls Battalion:</strong> Authorized strength of 50 girl cadets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span><strong className="text-slate-900">37 UP Battalion (Ghaziabad):</strong> Comprises platoons totaling 104 cadets covering both boys and girls.</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Training & Camps</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cadets regularly participate in Combined Annual Training Camps (CATC), weapon handling drills, social awareness campaigns, and competitive events like the Thal Sainik Competition (TSC).
            </p>
          </Card>
        </div>

        {/* Objectives */}
        <div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">NCC Objectives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-full shrink-0">
                      <objective.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{objective.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{objective.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* NCC Pledge */}
        <Card className="bg-slate-50 border border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-center text-slate-900">NCC Pledge</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-sm sm:text-base leading-relaxed text-slate-700 italic max-w-3xl mx-auto">
              "We, the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold 
              the unity of India. We resolve to be disciplined and responsible citizens of our nation. 
              We shall undertake positive community service in the spirit of selflessness and concern for 
              our fellow beings."
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-slate-50 border border-slate-200 text-slate-900">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-slate-900">Join the Corps</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
              Be part of a disciplined force that builds character, leadership, and patriotism.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href={registerUrl}
                className="bg-blue-600 text-white hover:bg-blue-700 px-7 py-3 rounded-xl font-bold text-sm transition-all shadow-sm inline-flex items-center gap-2"
              >
                Apply Now <ArrowRight size={16} />
              </a>
              <a
                href={mainUrl}
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-7 py-3 rounded-xl font-semibold text-sm transition-all inline-flex items-center gap-2 shadow-sm"
              >
                Learn More <ExternalLink size={15} />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </SearchableWrapper>
  );
};

export default NCCIntroduction;
