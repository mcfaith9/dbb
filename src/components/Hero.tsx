import React from 'react';
import { 
  Zap, 
  Calculator, 
  FileCheck2, 
  PhoneCall, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface HeroProps {
  onQuickAction: (targetId: string) => void;
  onOpenGitHubModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickAction, onOpenGitHubModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50 border-b border-slate-200/70">
      {/* Background Subtle Geometry Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-950 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Dedicated Customer Assistance for Metro Cebu & VECO Consumers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-black tracking-tight text-slate-900 leading-[1.15]">
              Seamless Electric <br className="hidden sm:inline" />
              Customer Services for{' '}
              <span className="text-amber-600 underline decoration-amber-300 decoration-wavy decoration-2">
                Cebu City
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              <strong>DBB Customer Services</strong> simplifies your utility transactions with Visayan Electric (VECO). From fast-tracking new meter applications and OBO CFEI clearances to analyzing high power bills and reporting emergency outages.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onQuickAction('calculator')}
                className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-xl shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Electricity Bill</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onQuickAction('requirements')}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-amber-600" />
                <span>New Connection Checklist</span>
              </button>

              <button
                onClick={() => onQuickAction('hotlines')}
                className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-rose-500" />
                <span>Emergency Hotlines</span>
              </button>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All 80 Cebu City Barangays</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CFEI & OBO Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free GitHub Hostable</span>
              </div>
            </div>
          </div>

          {/* Quick Interactive Utility Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5 fill-amber-500 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Cebu Power Quick Desk</h3>
                    <p className="text-xs text-slate-500">Fast assistance routing</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Desk
                </span>
              </div>

              {/* Quick Service Action Grid */}
              <div className="mt-4 space-y-2.5">
                <button
                  onClick={() => onQuickAction('services')}
                  className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">New VECO Meter Connection</p>
                      <p className="text-[11px] text-slate-500">Residential & Commercial line energization</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={() => onQuickAction('calculator')}
                  className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Electric Bill Rate Estimator</p>
                      <p className="text-[11px] text-slate-500">Calculate kWh vs Philippine Pesos (₱)</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={() => onQuickAction('hotlines')}
                  className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rose-50 text-rose-600 group-hover:bg-rose-100 transition-colors">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Outage & Brownout Hotline</p>
                      <p className="text-[11px] text-slate-500">Official VECO 24/7 hotline (032) 230-8326</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>

              {/* Quick Info Box */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-800">Need urgent help?</span> Send your inquiry below or contact the DBB customer liaison desk directly for assistance.
                </div>
              </div>

              {/* GitHub Hosting Badge Callout */}
              <div className="mt-3 text-center">
                <button
                  onClick={onOpenGitHubModal}
                  className="text-xs text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  <span>Ready to deploy free on GitHub Pages? View guide</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
