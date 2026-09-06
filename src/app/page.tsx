import Image from "next/image";
import { excos } from "@/data/excos";
import { disciplines } from "@/data/disciplines";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      {/* Sticky Header with Smooth Scrolling Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="NACOS Nile Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
              priority
            />
            <span className="font-bold text-lg tracking-tight text-[#274193] dark:text-blue-400">
              NACOS Nile
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <a href="#about" className="hover:text-[#274193] dark:hover:text-blue-400 transition">
              About
            </a>
            <a href="#excos" className="hover:text-[#274193] dark:hover:text-blue-400 transition">
              Excos
            </a>
            <a href="#community" className="hover:text-[#274193] dark:hover:text-blue-400 transition">
              Community
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#community"
              className="px-4 py-2 rounded-full bg-[#274193] text-white text-xs sm:text-sm font-semibold hover:bg-[#1e3478] transition shadow-sm"
            >
              Join Community
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section id="about" className="scroll-mt-20 py-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-[#274193] dark:bg-blue-900/40 dark:text-blue-300 mb-6">
            <span>🏆 Official Landing Page Competition Starter</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white max-w-3xl leading-tight">
            Empowering the Future of Computing at Nile University
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Welcome to the Nigeria Association of Computing Students (NACOS), Nile Chapter. 
            Connect with peers across Computer Science, Software Engineering, Cyber Security, Information Technology, Information Systems, and Data Science.
          </p>

          {/* Core Disciplines Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-2xl">
            {disciplines.map((d) => (
              <span
                key={d.shortCode}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300/60 dark:border-zinc-700/60"
              >
                {d.name}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#community"
              className="px-6 py-3 rounded-xl bg-[#274193] text-white font-semibold hover:bg-[#1e3478] transition shadow-md"
            >
              Join Community
            </a>
            <a
              href="#excos"
              className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Meet the Excos
            </a>
          </div>
        </section>

        {/* Excos Section */}
        <section id="excos" className="scroll-mt-24 py-16 px-6 max-w-6xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Executive Council</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm">
              Meet the student leaders driving innovation and community for NACOS Nile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {excos.map((exco) => (
              <div
                key={exco.name}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-blue-500/20">
                  <Image
                    src={exco.image}
                    alt={exco.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base truncate">{exco.name}</h3>
                  <p className="text-xs font-medium text-[#274193] dark:text-blue-400">{exco.role}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 italic line-clamp-2">
                    &ldquo;{exco.bio}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Community Section */}
        <section id="community" className="scroll-mt-24 py-16 px-6 max-w-5xl mx-auto w-full">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 sm:flex sm:items-center sm:justify-between shadow-sm">
            <div className="max-w-xl">
              <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#274193] dark:text-blue-400 mb-2">
                Get Involved
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                Join the Computing Community
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Connect with fellow computing students, stay informed on upcoming hackathons, tech workshops, and student initiatives.
              </p>
            </div>
            <div className="mt-6 sm:mt-0 sm:shrink-0 sm:ml-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#274193] text-white font-semibold text-center hover:bg-[#1e3478] transition shadow-md"
              >
                Join WhatsApp Group &rarr;
              </a>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-center font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                Join Discord
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 px-6 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} NACOS Nile University of Nigeria Chapter. All rights reserved.</p>
        <p className="mt-1">
          Review the competition instructions in{" "}
          <span className="font-mono font-medium text-zinc-800 dark:text-zinc-200">
            COMPETITION_GUIDELINES.md
          </span>
        </p>
      </footer>
    </div>
  );
}
