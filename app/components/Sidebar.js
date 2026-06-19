"use client";

import { useEffect, useState } from "react";
import { navItems, personal } from "../data/portfolio";

const activeColors = {
  violet: "bg-violet-500/15 text-violet-200 border border-violet-500/25",
  cyan: "bg-cyan-500/15 text-cyan-200 border border-cyan-500/25",
  amber: "bg-amber-500/15 text-amber-200 border border-amber-500/25",
  rose: "bg-rose-500/15 text-rose-200 border border-rose-500/25",
  emerald: "bg-emerald-500/15 text-emerald-200 border border-emerald-500/25",
  fuchsia: "bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/25",
  sky: "bg-sky-500/15 text-sky-200 border border-sky-500/25",
};

const iconColors = {
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
  emerald: "text-emerald-400",
  fuchsia: "text-fuchsia-400",
  sky: "text-sky-400",
};

const icons = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
    </svg>
  ),
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.096 7.096 0 0 0-13.074 0Z" />
    </svg>
  ),
  briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path fillRule="evenodd" d="M6 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v3.57A22.952 22.952 0 0 0 13 15a2.001 2.001 0 0 0 1.99 1.716 2 2 0 0 0 .502-.064l3.093-.465a2 2 0 0 0 1.685-1.985V8a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v1H5a2 2 0 0 0-2 2v7.57a22.952 22.952 0 0 0 5.657 4.364 2.001 2.001 0 0 0 1.99-1.716A22.952 22.952 0 0 0 13 15V8H6v8Z" clipRule="evenodd" />
    </svg>
  ),
  folder: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2h-1.382a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 14.382 2h-2.764a1 1 0 0 0-.894.553l-.448.894A1 1 0 0 1 8.382 4H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.382a1 1 0 0 0-.553-.894l-.448-.894A1 1 0 0 0 13.618 14h-2.236a1 1 0 0 0-.894.553l-.448.894A1 1 0 0 1 9.382 16H7a2 2 0 0 1-2-2V4Z" />
    </svg>
  ),
  layers: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm4.026 1.086a.75.75 0 0 0-.752 0L3.697 7.605a.75.75 0 0 0 0 1.078l1.377 1.377a.75.75 0 0 0 1.078 0l.007-.007 2.374-2.374a.75.75 0 0 0 0-1.06l-1.605-1.605Zm6.948 0a.75.75 0 0 0-.752 0l-1.605 1.605a.75.75 0 0 0 0 1.06l2.374 2.374a.75.75 0 0 0 1.078 0l1.377-1.377a.75.75 0 0 0-.002-1.078l-1.377-1.377Z" clipRule="evenodd" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.382a1 1 0 0 0-.553-.894l-.448-.894A1 1 0 0 0 13.618 14H5a2 2 0 0 1-2-2V4Z" />
    </svg>
  ),
};

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    setActiveSection(id);
  };

  const sidebarContent = (
    <>
      <div className="flex items-center gap-3 px-2">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 text-sm font-bold text-white ring-2 ring-violet-500/30">
          SS
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{personal.name}</p>
          <p className="truncate text-xs text-cyan-400/80">{personal.title}</p>
        </div>
      </div>

      <nav className="mt-8 flex flex-col gap-0.5">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => handleNavClick(item.id)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
              activeSection === item.id
                ? activeColors[item.color]
                : "text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200"
            }`}
          >
            <span className={activeSection === item.id ? iconColors[item.color] : "text-zinc-500"}>
              {icons[item.icon]}
            </span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-6">
        <p className="mb-2 px-3 text-[10px] font-semibold tracking-widest text-violet-400/60">
          FOLLOW
        </p>
        <div className="flex flex-col gap-0.5">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-sky-500/10 hover:text-sky-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-sky-500">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-rose-500/10 hover:text-rose-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-rose-500">
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.382a1 1 0 0 0-.553-.894l-.448-.894A1 1 0 0 0 13.618 14H5a2 2 0 0 1-2-2V4Z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-violet-500/10 bg-zinc-950/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-xs font-bold text-white">
            SS
          </div>
          <span className="text-sm font-semibold">{personal.name}</span>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-zinc-400 hover:bg-violet-500/10 hover:text-violet-300"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75Zm0 5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-violet-500/10 bg-zinc-950/95 px-5 py-7 backdrop-blur-sm transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } max-lg:top-14 max-lg:pt-5`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
