import { ScrollSection } from "@/components/ScrollSection";
import { SectionDivider } from "@/components/SectionDivider";
import { ChapterLabel } from "@/components/ChapterLabel";
import { ArenaCard } from "@/components/ArenaCard";
import { WedgeIssueCard } from "@/components/WedgeIssueCard";
import { SiteNav } from "@/components/SiteNav";
import { ParallaxImage } from "@/components/ParallaxImage";

import heroGlobe from "@/assets/hero-globe.jpg";
import breachedFirewall from "@/assets/breached-firewall.jpg";
import driversMovement from "@/assets/drivers-movement.jpg";
import threeArenas from "@/assets/three-arenas.jpg";
import resiliencePath from "@/assets/resilience-path.jpg";

const Index = () => {
  return (
    <main className="relative overflow-x-hidden">
      <SiteNav />

      {/* HERO — The Global Shift */}
      <ScrollSection id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage
            src={heroGlobe}
            alt="Golden wireframe globe on dark background representing a world in flux"
            className="opacity-60"
            speed={0.2}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="scroll-fade-up font-sans text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            LSE IDEAS Research Project
          </p>
          <h1 className="scroll-fade-up mt-8 text-5xl leading-tight text-foreground md:text-7xl lg:text-8xl" style={{ transitionDelay: "150ms" }}>
            A World Turned{" "}
            <span className="gradient-gold italic">Upside Down</span>
          </h1>
          <p className="scroll-fade-up mt-8 max-w-2xl mx-auto font-sans text-lg leading-relaxed text-cream-muted md:text-xl" style={{ transitionDelay: "300ms" }}>
            Populism, the Harrowing of the West and the Fate of Liberal Internationalism
          </p>
          <div className="scroll-fade-up mt-12" style={{ transitionDelay: "450ms" }}>
            <a
              href="#firewall"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-6 py-3 font-sans text-sm font-medium text-gold transition-all duration-300 hover:border-gold hover:bg-primary/10"
            >
              Begin the story
              <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollSection>

      <SectionDivider />

      {/* SECTION 2 — The Breached Firewall */}
      <ScrollSection id="firewall" className="relative min-h-screen py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <ChapterLabel number="II" label="The Breached Firewall" />
              <h2 className="scroll-fade-up text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl" style={{ transitionDelay: "100ms" }}>
                The Wall That{" "}
                <span className="gradient-gold italic">Crumbled</span>
              </h2>
              <p className="scroll-fade-up mt-8 font-sans text-base leading-relaxed text-muted-foreground md:text-lg" style={{ transitionDelay: "200ms" }}>
                In mature democracies, populist forces were once politically marginal actors — penned into the periphery by a{" "}
                <em className="text-gold">cordon sanitaire</em>, a firewall erected by centrist parties who agreed never to cooperate with them. They were, in a word, toxic.
              </p>
              <p className="scroll-fade-up mt-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg" style={{ transitionDelay: "300ms" }}>
                In the last decade and a half, that firewall has been decisively breached. Populist parties now sit in coalition governments or provide essential support at the national level. They have created their own media ecosystems of extraordinary potency — and many of their leaders are themselves pre-creations of popular media.
              </p>
            </div>
            <div className="scroll-scale relative" style={{ transitionDelay: "200ms" }}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={breachedFirewall}
                  alt="A crumbling wall with golden light breaking through, symbolising the collapse of political firewalls"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-lg border border-gold/10 -z-10" />
            </div>
          </div>
        </div>
      </ScrollSection>

      <SectionDivider />

      {/* SECTION 3 — Drivers of the Movement */}
      <ScrollSection id="drivers" className="relative py-32">
        <div className="absolute inset-0">
          <ParallaxImage
            src={driversMovement}
            alt="Protest movements and social unrest across the world"
            className="opacity-20"
            speed={0.35}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <ChapterLabel number="III" label="Drivers of the Movement" />
          <h2 className="scroll-fade-up text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl" style={{ transitionDelay: "100ms" }}>
            The Wedge{" "}
            <span className="gradient-gold italic">Issues</span>
          </h2>
          <p className="scroll-fade-up mt-8 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg" style={{ transitionDelay: "200ms" }}>
            Charismatic politicians, adept at employing social media to spread their message and acting in concert with movement politics steeped in nationalist rhetoric, use the electoral process to mobilise a disgruntled public. Three issues, above all, provide the kindling.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-1 lg:max-w-3xl">
            <WedgeIssueCard
              icon="⚙️"
              title="Economic Neglect of the Working Class"
              description="The systematic neglect of middle and working-class economic interests through globalisation and the offshoring of supply chains has left communities feeling abandoned by liberal elites and their globalisation project."
              delay="100ms"
            />
            <WedgeIssueCard
              icon="🌱"
              title="The Cost of Green Transitions"
              description="The enormous cost of green transitions has emerged as a potent wedge issue. Who wants to pay more for a heat pump, an electric vehicle, or home insulation? Eco-taxes have triggered counter-reactions seized upon by opportunistic populists."
              delay="200ms"
            />
            <WedgeIssueCard
              icon="🚧"
              title="Migration Policy Frustrations"
              description="Discontent over the ineffectuality of western migration policies fuels populist appeal. From Polish borders to the English Channel, the issue has become a lightning rod for broader anxieties about national identity and sovereignty."
              delay="300ms"
            />
          </div>
        </div>
      </ScrollSection>

      <SectionDivider />

      {/* SECTION 4 — The Three Arenas */}
      <ScrollSection id="arenas" className="relative py-32">
        <div className="absolute inset-0">
          <ParallaxImage
            src={threeArenas}
            alt="Geopolitical map showing interconnected regions"
            className="opacity-25"
            speed={0.4}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center">
            <ChapterLabel number="IV" label="The Three Arenas" />
            <h2 className="scroll-fade-up mx-auto text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl" style={{ transitionDelay: "100ms" }}>
              Three Worlds,{" "}
              <span className="gradient-gold italic">One Crisis</span>
            </h2>
            <p className="scroll-fade-up mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg" style={{ transitionDelay: "200ms" }}>
              The project examines three categories of regime where populism is reshaping the political landscape, with profound implications for the continuation of the western-led liberal international system.
            </p>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <ArenaCard
              number="1"
              title="Mature Democracies"
              countries="EU · Germany · France · UK"
              description="The European Union and its periphery, where populist parties have breached the cordon sanitaire to join coalition governments or shape national policy from within. The EU accession process — the key mechanism for locking in democracy — is itself under pressure."
              delay="0ms"
            />
            <ArenaCard
              number="2"
              title="Fragile Democracies"
              countries="India · Brazil · South Africa"
              description="Leading nations once seen as bastions of liberal values and crucial pillars of the post–Cold War order. Their ambivalence towards Russia's invasion of Ukraine reveals how far they have departed from that guiding assumption."
              delay="150ms"
            />
            <ArenaCard
              number="3"
              title="Authoritarian Architects"
              countries="Russia · China"
              description="Authoritarian states attempting to lure the global south into an alternative international order, most obviously through the expansion of the BRICS bloc as a rival to the G7 and G20 structures of western-led governance."
              delay="300ms"
            />
          </div>
        </div>
      </ScrollSection>

      <SectionDivider />

      {/* SECTION 5 — The Path to Resilience */}
      <ScrollSection id="resilience" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="scroll-scale relative order-2 lg:order-1" style={{ transitionDelay: "200ms" }}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={resiliencePath}
                  alt="Research dashboard and policy documents representing the resilience toolkit"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border border-gold/10 -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <ChapterLabel number="V" label="The Path to Resilience" />
              <h2 className="scroll-fade-up text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl" style={{ transitionDelay: "100ms" }}>
                Building the{" "}
                <span className="gradient-gold italic">Toolkit</span>
              </h2>
              <p className="scroll-fade-up mt-8 font-sans text-base leading-relaxed text-muted-foreground md:text-lg" style={{ transitionDelay: "200ms" }}>
                This three-year study, led by Professor Michael Burleigh at LSE IDEAS, brings together fifteen commissioned researchers to map the global populist landscape and its impact on the liberal international order.
              </p>
              <p className="scroll-fade-up mt-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg" style={{ transitionDelay: "300ms" }}>
                The ultimate goal is the creation of a comprehensive policy toolkit — designed to bolster the long-term resilience of democratic societies against the forces of demagoguery and authoritarian co-optation.
              </p>
              <div className="scroll-fade-up mt-10 flex flex-wrap gap-4" style={{ transitionDelay: "400ms" }}>
                <div className="rounded-full border border-gold/20 bg-primary/5 px-5 py-2 font-sans text-xs font-medium uppercase tracking-wider text-gold">
                  15 Researchers
                </div>
                <div className="rounded-full border border-gold/20 bg-primary/5 px-5 py-2 font-sans text-xs font-medium uppercase tracking-wider text-gold">
                  3 Year Study
                </div>
                <div className="rounded-full border border-gold/20 bg-primary/5 px-5 py-2 font-sans text-xs font-medium uppercase tracking-wider text-gold">
                  Policy Toolkit
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-2xl text-foreground">LSE IDEAS</p>
          <p className="mt-3 font-sans text-sm text-muted-foreground">
            9th Floor, Pankhurst House, Clement's Inn, London WC2A 2AZ
          </p>
          <p className="mt-1 font-sans text-sm text-muted-foreground">
            lse.ac.uk/ideas
          </p>
          <p className="mt-6 font-sans text-xs text-muted-foreground/50">
            © 2024 LSE IDEAS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
