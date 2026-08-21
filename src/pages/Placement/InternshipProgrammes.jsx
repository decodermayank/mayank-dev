import {
  Users,
  Clock,
  Briefcase,
  ExternalLink,
  CheckCircle2,
  Building2,
} from "lucide-react";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
import { crcInfo } from "../../Data/placementData";

const InternshipProgrammes = () => {
  const programs = [
    {
      title: "Summer Internships",
      desc: "8-12 week programs for 2nd and 3rd year students across top corporate partners.",
    },
    {
      title: "Industrial Training",
      desc: "6-month hands-on experience with DRDO, IBM, and leading PSUs for final year students.",
    },
    {
      title: "Research Internships",
      desc: "3-6 month academic research opportunities in cutting-edge technology domains.",
    },
    {
      title: "International Programs",
      desc: "Global exposure through MoUs and academic exchange programs for top performers.",
    },
  ];

  const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "DRDO",
    "ISRO",
    "BHEL",
    "L&T",
    "IITs",
    "IISc",
    "CSIR Labs",
    "Partner Universities",
  ];

  return (
    <SearchableWrapper>
      <div className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
              Internship Opportunities
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0">
                  <Briefcase className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    GBU Internship & Training Programs
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Empowering students with industry and research experience
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100">
                  <Clock className="w-3.5 h-3.5" />
                  2 - 6 Months
                </span>
                <span className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full border border-purple-100">
                  <Users className="w-3.5 h-3.5" />
                  2nd, 3rd & Final Year
                </span>
              </div>
            </div>

            <div className="py-4 border-b border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Available Internship Tracks
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((prog, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">
                        {prog.title}
                      </h5>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        {prog.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-gray-400" />
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Partner Organizations & Recruiters
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-lg text-xs hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-center">
              <a
                href={crcInfo.forms.studentPlacementForm}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                Register Interest
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default InternshipProgrammes;
