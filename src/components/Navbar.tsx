import React, { useState } from 'react';
import { 
  Zap, 
  PhoneCall, 
  FileText, 
  Calculator, 
  HelpCircle, 
  Menu, 
  X, 
  Github, 
  Flame,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenGitHubModal: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGitHubModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services', icon: Zap },
    { name: 'Bill Estimator', href: '#calculator', icon: Calculator },
    { name: 'Connection Guide', href: '#requirements', icon: FileText },
    { name: 'Outage Hotlines', href: '#hotlines', icon: PhoneCall },
    { name: 'FAQs', href: '#faqs', icon: HelpCircle },
    { name: 'Inquire', href: '#contact', icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500 text-slate-950">
              CEBU CITY
            </span>
            <span className="hidden sm:inline text-slate-400">
              Customer Support & Advisory for VECO & Metro Cebu Electric Consumers
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:0322308326" 
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              title="Official 24/7 Visayan Electric Emergency Line"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>VECO 24/7: <strong>(032) 230-8326</strong></span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <button
              onClick={onOpenGitHubModal}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-3 h-3 text-emerald-400" />
              <span>Deploy on GitHub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6 fill-slate-950 stroke-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 font-['Outfit']">
                DBB
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">
                Cebu
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight font-medium">
              Electric Customer Services
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenGitHubModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Step-by-step guide to launch this website free on GitHub Pages"
          >
            <Github className="w-3.5 h-3.5 text-slate-800" />
            <span>Launch on GitHub</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 shadow-sm shadow-amber-500/20 rounded-lg transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>Get Assistance</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-900 rounded-lg border border-slate-100"
                >
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
            >
              <Github className="w-4 h-4" />
              <span>How to Host Free on GitHub</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-semibold text-slate-950 bg-amber-500 rounded-lg shadow-xs"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Request Customer Support</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
