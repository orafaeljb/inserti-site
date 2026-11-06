import React from "react";
import { ArrowUpRight, ArrowDown, Server, Cloud, MonitorCheck, RefreshCw, MessageCircle, BrainCircuit, Database, Plug, Workflow, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceTechBannerProps {
  banner: NonNullable<ServiceItem["techBanner"]>;
}

function RecoveryDiagram({
  diagram,
}: {
  diagram: NonNullable<NonNullable<ServiceItem["techBanner"]>["diagram"]>;
}) {
  const icons = { server: Server, cloud: Cloud };
  return (
    <div className="rounded-3xl bg-black/40 border border-white/15 p-5 sm:p-6">
      <h3 className="font-heading font-bold text-lg sm:text-xl mb-4">{diagram.title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {diagram.sources.map((src) => {
          const Icon = icons[src.icon];
          return (
            <div key={src.title} className="rounded-2xl bg-white/5 p-4 text-center">
              <Icon className="w-7 h-7 mx-auto text-blue-400 mb-2" />
              <div className="font-heading font-bold text-base">{src.title}</div>
              <div className="text-xs text-white/70 mt-1">{src.description}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-2 my-3">
        <ArrowDown className="w-4 h-4 text-white/70" />
        <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold">
          {diagram.condition}
        </span>
        <ArrowDown className="w-4 h-4 text-white/70" />
      </div>

      <div className="rounded-2xl bg-emerald-500/10 p-4 text-center">
        <MonitorCheck className="w-7 h-7 mx-auto text-emerald-400 mb-2" />
        <div className="font-heading font-bold text-base">{diagram.failover.title}</div>
        <div className="text-xs text-white/70 mt-1">{diagram.failover.description}</div>
      </div>

      <div className="flex flex-col items-center gap-2 my-3 text-center">
        <ArrowDown className="w-4 h-4 text-white/70" />
        <span className="text-xs text-white/70">{diagram.afterText}</span>
      </div>

      <div className="text-center">
        <RefreshCw className="w-7 h-7 mx-auto text-white mb-2" />
        <div className="font-heading font-bold text-base">{diagram.failback.title}</div>
        <div className="text-xs text-white/70 mt-1">{diagram.failback.description}</div>
      </div>
    </div>
  );
}

function AgentFlowDiagram({
  flow,
}: {
  flow: NonNullable<NonNullable<ServiceItem["techBanner"]>["flowDiagram"]>;
}) {
  const icons = { data: Database, systems: Plug, processes: Workflow };
  return (
    <div className="rounded-3xl bg-black/40 border border-white/15 p-5 sm:p-6">
      <h3 className="font-heading font-bold text-lg sm:text-xl mb-5">{flow.title}</h3>

      <div className="text-center">
        <MessageCircle className="w-6 h-6 mx-auto text-white mb-2" />
        <div className="font-heading font-bold text-base">{flow.input.title}</div>
        <div className="text-xs text-white/70 mt-1">{flow.input.description}</div>
      </div>

      <div className="flex justify-center my-3">
        <ArrowDown className="w-4 h-4 text-white/70" />
      </div>

      <div className="rounded-2xl bg-blue-400/15 border border-blue-300/20 p-4 text-center">
        <BrainCircuit className="w-7 h-7 mx-auto text-blue-300 mb-2" />
        <div className="font-heading font-bold text-base">{flow.center.title}</div>
        <div className="text-xs text-white/70 mt-1">{flow.center.description}</div>
      </div>

      <div className="flex justify-center my-3">
        <ArrowDown className="w-4 h-4 text-white/70" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {flow.branches.map((b) => {
          const Icon = icons[b.icon];
          return (
            <div key={b.title} className="text-center rounded-2xl bg-white/5 p-3">
              <Icon className="w-5 h-5 mx-auto text-white mb-2" />
              <div className="font-heading font-bold text-base">{b.title}</div>
              <div className="text-xs text-white/70 mt-1">{b.description}</div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-3">
        <ArrowDown className="w-4 h-4 text-white/70" />
      </div>

      <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/20 p-4 text-center">
        <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400 mb-2" />
        <div className="font-heading font-bold text-base">{flow.result.title}</div>
        <div className="text-xs text-white/70 mt-1">{flow.result.description}</div>
      </div>
    </div>
  );
}

export function ServiceTechBanner({ banner }: ServiceTechBannerProps) {
  return (
    <section
      className="relative w-full overflow-hidden text-white py-16 lg:py-20"
      style={{ background: "linear-gradient(135deg, #061d60 0%, #0c2a96 100%)" }}
    >
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-white/70">
              {banner.eyebrow}
            </span>

            {banner.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={banner.logo} alt={banner.brand} className="h-10 w-auto object-contain" />
            ) : (
              <div className="font-heading font-black text-4xl tracking-tight">{banner.brand}</div>
            )}
            <div className="text-xs font-bold uppercase tracking-wider text-white/70">{banner.tag}</div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
              {banner.title}
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">{banner.text}</p>
          </div>

          {banner.flowDiagram ? (
            <div className="lg:col-span-7">
              <AgentFlowDiagram flow={banner.flowDiagram} />
            </div>
          ) : banner.diagram ? (
            <div className="lg:col-span-7">
              <RecoveryDiagram diagram={banner.diagram} />
            </div>
          ) : (
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {banner.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-5 bg-white/10 border border-white/15 backdrop-blur-sm"
                >
                  <h3 className="font-heading font-bold text-base mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {(banner.diagram || banner.flowDiagram) && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 ${banner.flowDiagram ? "lg:grid-cols-3" : "lg:grid-cols-5"}`}>
            {banner.items.map((item) => (
              <div key={item.title} className="rounded-2xl p-5 bg-white/10 border border-white/15 backdrop-blur-sm">
                <h3 className="font-heading font-bold text-base mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {banner.footnote && (
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-3xl">{banner.footnote}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-x-8 gap-y-3 lg:ml-auto">
            {[...(banner.linkLabel && banner.linkHref ? [{ label: banner.linkLabel, href: banner.linkHref }] : []), ...(banner.extraLinks ?? [])].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
              >
                <span>{l.label}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
