import { ArrowRight, Users, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1733] via-[#0d1733] to-[#121e42] text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#274193]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-8">
          <Sparkles size={14} className="text-blue-400" />
          <span>Nigeria Association of Computing Students &bull; Nile Chapter</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none mb-6">
          Empowering the Next Generation of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Tech Innovators
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 mb-10">
          The central hub for computing students at Nile University of Nigeria.
          Connecting aspiring software engineers, cybersecurity specialists, data
          scientists, and tech visionaries.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#community"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#274193] hover:bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/40"
          >
            <Users size={18} />
            Join the Community
          </a>
          <a
            href="#disciplines"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-gray-200 px-7 py-3.5 rounded-xl font-semibold border border-white/10 transition-all"
          >
            Explore Disciplines
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}