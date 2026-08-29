import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  PawPrint, QrCode, Syringe, MapPin, Ticket, Stethoscope,
  Heart, Shield, Bell, Scale, Camera, Sparkles, ArrowRight, Play, Star,
} from "lucide-react";
import { I18nProvider, LanguageToggle, useI18n } from "@/lib/i18n";
import heroPets from "@/assets/hero-pets.png";
import petDog from "@/assets/pet-dog.png";
import petCat from "@/assets/pet-cat.png";
import petBunny from "@/assets/pet-bunny.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PetID Vietnam — Your Pet's Digital Identity Card" },
      { name: "description", content: "Keep your furry friend safe with a digital profile, QR ID tag, health records, and instant lost-pet recovery." },
      { property: "og:title", content: "PetID Vietnam — Digital Identity for Pets" },
      { property: "og:description", content: "QR pet ID, vaccination records, and lost-pet recovery — all in one cute app." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap" },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Landing() {
  return (
    <I18nProvider>
      <LandingInner />
    </I18nProvider>
  );
}

function LandingInner() {
  const { lang } = useI18n();
  return (
    <div key={lang} className="min-h-screen overflow-x-hidden text-foreground">
      <Nav />
      <Hero />
      <Features />
      <Dashboard />
      <LostPet />
      <AppPreview />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const { t } = useI18n();
  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 w-[min(1200px,94%)] rounded-full glass-card px-5 py-3 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <div className="size-9 rounded-2xl bg-primary grid place-items-center shadow-soft">
          <PawPrint className="size-5 text-white" />
        </div>
        <span className="font-display text-lg font-bold">PetID<span className="text-primary">.vn</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-foreground/80">
        <a href="#features" className="hover:text-primary transition">{t("nav.features")}</a>
        <a href="#dashboard" className="hover:text-primary transition">{t("nav.dashboard")}</a>
        <a href="#lost-pet" className="hover:text-primary transition">{t("nav.lost")}</a>
        <a href="#app" className="hover:text-primary transition">{t("nav.app")}</a>
      </nav>
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <button className="hidden sm:inline-flex btn-ghost rounded-full px-4 py-2 text-sm font-bold">{t("nav.signin")}</button>
        <button className="btn-primary rounded-full px-5 py-2.5 text-sm font-bold inline-flex items-center gap-1.5">
          {t("nav.register")} <ArrowRight className="size-4" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative mx-auto mt-10 sm:mt-16 w-[min(1200px,94%)] grid lg:grid-cols-2 gap-10 items-center pb-16">
      <motion.div {...fadeUp} className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-1.5 text-xs font-bold text-primary shadow-soft border border-pink-soft">
          <Sparkles className="size-3.5" /> {t("hero.badge")}
        </div>
        <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold">
          {t("hero.title.1")} <span className="relative inline-block">
            <span className="relative z-10">{t("hero.title.2")}</span>
            <span className="absolute inset-x-0 bottom-1 h-4 bg-peach/70 -rotate-1 rounded-full -z-0" />
          </span><br/>
          {t("hero.title.3")} <span className="text-primary">{t("hero.title.4")}</span> 🐾
        </h1>
        <p className="mt-5 text-lg text-foreground/70 max-w-xl">
          {t("hero.desc")}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="btn-primary rounded-full px-7 py-4 font-bold inline-flex items-center gap-2">
            <PawPrint className="size-5" /> {t("hero.cta1")}
          </button>
          <button className="btn-ghost rounded-full px-7 py-4 font-bold inline-flex items-center gap-2">
            <Play className="size-4" /> {t("hero.cta2")}
          </button>
        </div>
        <div className="mt-8 flex items-center gap-5">
          <div className="flex -space-x-3">
            {[petDog, petCat, petBunny].map((src, i) => (
              <div key={i} className="size-11 rounded-full ring-4 ring-background overflow-hidden bg-white shadow-soft">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" width={64} height={64} />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 text-secondary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <p className="text-sm font-semibold text-foreground/70">{t("hero.rating")}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[480px] sm:h-[560px]"
      >
        {/* blob */}
        <div className="absolute inset-6 rounded-[40%] bg-gradient-to-br from-pink-soft via-peach-soft to-mint-soft blur-2xl opacity-80" />
        <div className="absolute inset-10 rounded-[42%] bg-gradient-to-tr from-primary/30 to-accent/30" />

        <img
          src={heroPets}
          alt="Happy dog and cat with floating PetID card"
          className="relative z-10 w-full h-full object-contain animate-float-slow"
          width={1024} height={1024}
        />

        {/* floating chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="absolute top-6 left-0 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 animate-float"
        >
          <div className="size-10 rounded-xl bg-mint grid place-items-center"><Heart className="size-5 text-white" /></div>
          <div>
            <p className="text-xs text-foreground/60 font-semibold">{t("hero.health")}</p>
            <p className="font-bold text-foreground">{t("hero.healthVal")}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="absolute bottom-10 right-0 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 animate-float-slow"
        >
          <div className="size-10 rounded-xl bg-primary grid place-items-center"><QrCode className="size-5 text-white" /></div>
          <div>
            <p className="text-xs text-foreground/60 font-semibold">{t("hero.qr")}</p>
            <p className="font-bold text-foreground">#PET-2891</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
          className="absolute top-32 right-4 size-14 rounded-2xl bg-secondary grid place-items-center shadow-pop animate-wiggle"
        >
          <PawPrint className="size-7 text-ink" />
        </motion.div>
      </motion.div>
    </section>
  );
}

const FEATURES = [
  { icon: PawPrint, emoji: "🐶", title: "f1.title", desc: "f1.desc", tint: "bg-pink-soft", iconBg: "bg-primary" },
  { icon: QrCode, emoji: "🐱", title: "f2.title", desc: "f2.desc", tint: "bg-peach-soft", iconBg: "bg-secondary" },
  { icon: Syringe, emoji: "💉", title: "f3.title", desc: "f3.desc", tint: "bg-mint-soft", iconBg: "bg-accent" },
  { icon: MapPin, emoji: "📍", title: "f4.title", desc: "f4.desc", tint: "bg-pink-soft", iconBg: "bg-primary" },
  { icon: Ticket, emoji: "🎫", title: "f5.title", desc: "f5.desc", tint: "bg-peach-soft", iconBg: "bg-secondary" },
  { icon: Stethoscope, emoji: "🏥", title: "f6.title", desc: "f6.desc", tint: "bg-mint-soft", iconBg: "bg-accent" },
] as const;

function Features() {
  const { t } = useI18n();
  return (
    <section id="features" className="mx-auto w-[min(1200px,94%)] py-20">
      <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
        <span className="inline-block rounded-full bg-mint-soft text-accent-foreground px-4 py-1.5 text-xs font-bold">{t("features.badge")}</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">{t("features.title.1")} <span className="text-primary">{t("features.title.2")}</span></h2>
        <p className="mt-3 text-foreground/70">{t("features.desc")}</p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className={`group relative rounded-[2rem] p-7 ${f.tint} overflow-hidden`}
          >
            <div className="absolute -right-4 -top-4 text-7xl opacity-20 group-hover:scale-110 transition">{f.emoji}</div>
            <div className={`${f.iconBg} size-14 rounded-2xl grid place-items-center shadow-soft text-white`}>
              <f.icon className="size-7" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{t(f.title)}</h3>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{t(f.desc)}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-foreground/80 group-hover:text-primary transition">
              {t("features.more")} <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  const { t } = useI18n();
  return (
    <section id="dashboard" className="mx-auto w-[min(1200px,94%)] py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <span className="inline-block rounded-full bg-pink-soft text-primary px-4 py-1.5 text-xs font-bold">{t("dash.badge")}</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">{t("dash.title.1")} <span className="text-primary">{t("dash.title.2")}</span>.</h2>
          <p className="mt-4 text-foreground/70 text-lg">{t("dash.desc")}</p>
          <ul className="mt-6 space-y-3">
            {[
              { icon: Bell, text: "dash.li1" as const },
              { icon: Scale, text: "dash.li2" as const },
              { icon: Shield, text: "dash.li3" as const },
            ].map((it) => (
              <li key={it.text} className="flex items-center gap-3">
                <div className="size-9 rounded-xl bg-accent/30 grid place-items-center text-accent-foreground">
                  <it.icon className="size-4" />
                </div>
                <span className="font-semibold">{t(it.text)}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp} className="relative">
          {/* Dashboard card */}
          <div className="glass-card rounded-[2.5rem] p-6 shadow-pop relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-14 rounded-2xl overflow-hidden bg-pink-soft">
                  <img src={petDog} alt="Mochi" className="w-full h-full object-cover" loading="lazy" width={64} height={64}/>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground/60">{t("dash.welcome")}</p>
                  <p className="font-bold text-lg">Mochi <span className="text-foreground/50 font-semibold text-sm">{t("dash.breed")}</span></p>
                </div>
              </div>
              <div className="size-10 rounded-xl bg-mint-soft grid place-items-center"><Bell className="size-4 text-accent-foreground" /></div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-pink-soft p-4">
                <div className="flex items-center justify-between">
                  <Scale className="size-4 text-primary" />
                  <span className="text-[10px] font-bold text-mint-foreground bg-mint/40 px-2 py-0.5 rounded-full text-accent-foreground">+0.4kg</span>
                </div>
                <p className="mt-3 text-2xl font-bold">8.2<span className="text-sm font-semibold text-foreground/60">kg</span></p>
                <p className="text-xs font-semibold text-foreground/60">{t("dash.weight")}</p>
              </div>
              <div className="rounded-2xl bg-mint-soft p-4">
                <Heart className="size-4 text-accent-foreground" />
                <p className="mt-3 text-2xl font-bold">98<span className="text-sm font-semibold text-foreground/60">/100</span></p>
                <p className="text-xs font-semibold text-foreground/60">{t("dash.health")}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-peach-soft p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Syringe className="size-4 text-ink" />
                  <p className="text-sm font-bold">{t("dash.rabies")}</p>
                </div>
                <span className="text-xs font-bold text-primary">{t("dash.in5")}</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/60 overflow-hidden">
                <div className="h-full w-[78%] bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white p-4 flex items-center gap-4">
              <div className="size-16 rounded-xl bg-ink grid place-items-center text-white">
                <QrCode className="size-10" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground/60">QR ID</p>
                <p className="font-bold">#PET-2891-VN</p>
                <p className="text-xs text-foreground/60">{t("dash.qrShare")}</p>
              </div>
            </div>
          </div>

          {/* floating badges */}
          <motion.div initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
            className="absolute -top-6 -right-4 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 animate-float">
            <span className="text-2xl">🦴</span>
            <span className="text-sm font-bold">{t("dash.treat")}</span>
          </motion.div>
          <motion.div initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}
            className="absolute -bottom-4 -left-4 size-16 rounded-2xl bg-primary grid place-items-center shadow-pop animate-wiggle">
            <PawPrint className="size-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const LOST_PETS = [
  { name: "Bun Bun", type: "pet.bunny", reward: "₫500K", area: "area.1", img: petBunny, color: "bg-mint-soft" },
  { name: "Mango", type: "pet.cat", reward: "₫1M", area: "area.2", img: petCat, color: "bg-peach-soft" },
  { name: "Biscuit", type: "pet.dog", reward: "₫750K", area: "area.3", img: petDog, color: "bg-pink-soft" },
] as const;

function LostPet() {
  const { t } = useI18n();
  return (
    <section id="lost-pet" className="mx-auto w-[min(1200px,94%)] py-20">
      <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
        <span className="inline-block rounded-full bg-peach-soft text-ink px-4 py-1.5 text-xs font-bold">{t("lost.badge")}</span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">{t("lost.title.1")} <span className="text-primary">{t("lost.title.2")}</span>.</h2>
        <p className="mt-3 text-foreground/70">{t("lost.desc")}</p>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <motion.div {...fadeUp} className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden glass-card p-2 min-h-[460px]">
          <div className="absolute inset-2 rounded-[2.2rem] bg-gradient-to-br from-mint-soft via-peach-soft/60 to-pink-soft overflow-hidden">
            {/* cute map */}
            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 600 460" fill="none">
              <path d="M0,120 Q150,80 300,140 T600,120" stroke="white" strokeWidth="3" strokeDasharray="6 8" />
              <path d="M0,260 Q200,220 400,280 T600,250" stroke="white" strokeWidth="3" strokeDasharray="6 8" />
              <path d="M120,0 Q160,200 100,460" stroke="white" strokeWidth="3" strokeDasharray="6 8" />
              <path d="M420,0 Q380,220 460,460" stroke="white" strokeWidth="3" strokeDasharray="6 8" />
              <circle cx="180" cy="160" r="48" fill="white" opacity="0.4" />
              <circle cx="440" cy="300" r="62" fill="white" opacity="0.4" />
              <circle cx="320" cy="220" r="36" fill="white" opacity="0.4" />
            </svg>

            {/* paw trail */}
            {[[80,340],[140,300],[200,330],[260,290],[320,310]].map(([x,y],i)=>(
              <div key={i} className="absolute text-primary/70" style={{ left:x, top:y, transform:`rotate(${i*15}deg)` }}>
                <PawPrint className="size-6" />
              </div>
            ))}

            {/* pins */}
            <div className="absolute top-[28%] left-[28%] flex flex-col items-center">
              <div className="glass-card rounded-2xl p-2 flex items-center gap-2 shadow-pop">
                <div className="size-10 rounded-xl overflow-hidden bg-white"><img src={petDog} className="w-full h-full object-cover" alt=""/></div>
                <div className="pr-2">
                  <p className="text-xs font-bold">Biscuit</p>
                  <p className="text-[10px] text-foreground/60">{t("lost.min")}</p>
                </div>
              </div>
              <div className="size-4 rounded-full bg-primary shadow-pop ring-4 ring-white/70 -mt-1 animate-pulse" />
            </div>

            <div className="absolute top-[58%] left-[62%] flex flex-col items-center">
              <div className="glass-card rounded-2xl p-2 flex items-center gap-2 shadow-pop">
                <div className="size-10 rounded-xl overflow-hidden bg-white"><img src={petCat} className="w-full h-full object-cover" alt=""/></div>
                <div className="pr-2">
                  <p className="text-xs font-bold">Mango</p>
                  <p className="text-[10px] text-foreground/60">{t("lost.spotted")}</p>
                </div>
              </div>
              <div className="size-4 rounded-full bg-accent shadow-pop ring-4 ring-white/70 -mt-1 animate-pulse" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4 flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary grid place-items-center text-white"><MapPin className="size-5" /></div>
              <div className="flex-1">
                <p className="font-bold text-sm">{t("lost.mapTitle")}</p>
                <p className="text-xs text-foreground/60">{t("lost.mapDesc")}</p>
              </div>
              <button className="btn-primary rounded-full px-4 py-2 text-sm font-bold">{t("lost.join")}</button>
            </div>
          </div>
        </motion.div>

        {/* Missing cards */}
        <div className="space-y-4">
          {LOST_PETS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl ${p.color} p-4 flex items-center gap-4 shadow-soft`}
            >
              <div className="size-16 rounded-2xl bg-white overflow-hidden shrink-0">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={80} height={80}/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{p.name}</p>
                  <span className="text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">{t("lost.missing")}</span>
                </div>
                <p className="text-xs font-semibold text-foreground/70">{t(p.type)}</p>
                <p className="text-xs text-foreground/60 flex items-center gap-1 mt-0.5"><MapPin className="size-3" />{t(p.area)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-foreground/60">{t("lost.reward")}</p>
                <p className="font-bold text-primary">{p.reward}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppPreview() {
  const { t } = useI18n();
  return (
    <section id="app" className="mx-auto w-[min(1200px,94%)] py-20">
      <div className="rounded-[3rem] bg-gradient-to-br from-pink-soft via-peach-soft to-mint-soft p-8 sm:p-14 relative overflow-hidden">
        <div className="absolute top-6 right-6 size-16 rounded-2xl bg-white/50 grid place-items-center animate-wiggle">
          <PawPrint className="size-8 text-primary" />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <span className="inline-block rounded-full bg-white/80 text-primary px-4 py-1.5 text-xs font-bold">{t("app.badge")}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">{t("app.title.1")} <span className="text-primary">{t("app.title.2")}</span></h2>
            <p className="mt-4 text-foreground/70 text-lg max-w-md">{t("app.desc")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-ink text-white rounded-2xl px-5 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition">
                <span className="text-2xl"></span>
                <div className="text-left leading-tight"><span className="text-[10px] font-semibold opacity-70">{t("app.dl")}</span><br/><span className="text-base">App Store</span></div>
              </button>
              <button className="bg-ink text-white rounded-2xl px-5 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition">
                <Play className="size-6" />
                <div className="text-left leading-tight"><span className="text-[10px] font-semibold opacity-70">{t("app.get")}</span><br/><span className="text-base">Google Play</span></div>
              </button>
            </div>
          </motion.div>

          <div className="relative h-[560px] flex items-center justify-center">
            <Phone className="absolute left-0 top-6 -rotate-6 animate-float-slow" variant="scan" />
            <Phone className="relative z-10 animate-float" variant="profile" />
            <Phone className="absolute right-0 top-6 rotate-6 animate-float-slow" variant="health" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ className = "", variant }: { className?: string; variant: "scan" | "profile" | "health" }) {
  const { t } = useI18n();
  return (
    <div className={`w-[220px] h-[460px] rounded-[2.5rem] bg-ink p-2 shadow-pop ${className}`}>
      <div className="w-full h-full rounded-[2.1rem] bg-cream overflow-hidden relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-ink rounded-full z-20" />
        {variant === "scan" && (
          <div className="p-5 pt-10 h-full flex flex-col">
            <p className="text-xs font-bold text-foreground/60">{t("phone.scan")}</p>
            <div className="mt-4 flex-1 rounded-2xl bg-gradient-to-br from-pink-soft to-peach-soft grid place-items-center relative overflow-hidden">
              <div className="size-32 rounded-2xl bg-white grid place-items-center">
                <QrCode className="size-24 text-ink" />
              </div>
              <div className="absolute inset-x-6 h-0.5 bg-primary shadow-[0_0_20px_rgba(255,143,171,0.8)] animate-pulse" />
            </div>
            <button className="mt-3 btn-primary rounded-2xl py-3 text-sm font-bold">{t("phone.scanning")}</button>
          </div>
        )}
        {variant === "profile" && (
          <div className="p-4 pt-10 h-full flex flex-col">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="size-12 rounded-xl bg-white/30 overflow-hidden"><img src={petDog} alt="" className="w-full h-full object-cover" /></div>
                <div>
                  <p className="font-bold text-sm">Mochi</p>
                  <p className="text-[10px] opacity-80">{t("phone.years")}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] font-semibold">
                <div><p className="opacity-70">{t("phone.weight")}</p><p className="text-base font-bold">8.2kg</p></div>
                <div><p className="opacity-70">{t("phone.health")}</p><p className="text-base font-bold">98</p></div>
                <div><p className="opacity-70">{t("phone.age")}</p><p className="text-base font-bold">2y</p></div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[QrCode, Syringe, MapPin].map((Icon, i)=>(
                <div key={i} className="rounded-xl bg-white p-3 grid place-items-center shadow-soft">
                  <Icon className="size-5 text-primary" />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl bg-mint-soft p-3 flex items-center gap-2">
              <Camera className="size-4 text-accent-foreground" />
              <p className="text-[10px] font-bold">{t("phone.photos")}</p>
            </div>
          </div>
        )}
        {variant === "health" && (
          <div className="p-4 pt-10 h-full flex flex-col">
            <p className="text-xs font-bold">{t("phone.records")}</p>
            <div className="mt-3 space-y-2">
              {[
                { t: "phone.rabies" as const, d: "phone.uptodate" as const, c: "bg-mint-soft" },
                { t: "phone.deworm" as const, d: "phone.due5" as const, c: "bg-peach-soft" },
                { t: "phone.checkup" as const, d: "phone.lastweek" as const, c: "bg-pink-soft" },
              ].map((r) => (
                <div key={r.t} className={`rounded-xl ${r.c} p-3 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <Syringe className="size-4" />
                    <p className="text-xs font-bold">{t(r.t)}</p>
                  </div>
                  <p className="text-[10px] font-semibold text-foreground/60">{t(r.d)}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl bg-white p-3 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-foreground/60">{t("phone.trend")}</p>
                <span className="text-[10px] font-bold text-accent-foreground">+5%</span>
              </div>
              <svg viewBox="0 0 160 50" className="mt-2 w-full">
                <path d="M0,40 Q40,30 70,32 T160,12" stroke="#FF8FAB" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M0,40 Q40,30 70,32 T160,12 L160,50 L0,50 Z" fill="url(#g)" opacity="0.3" />
                <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#FF8FAB"/><stop offset="1" stopColor="#FF8FAB" stopOpacity="0"/></linearGradient></defs>
              </svg>
            </div>
            <div className="mt-auto rounded-2xl bg-primary text-white p-3 flex items-center gap-2">
              <Bell className="size-4" />
              <p className="text-[10px] font-bold">{t("phone.reminder")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CTA() {
  const { t } = useI18n();
  return (
    <section className="mx-auto w-[min(1200px,94%)] py-20">
      <motion.div {...fadeUp} className="relative rounded-[3rem] overflow-hidden p-10 sm:p-16 text-center bg-gradient-to-br from-primary via-pink-soft to-secondary">
        <div className="absolute -top-8 -left-6 text-9xl opacity-20">🐾</div>
        <div className="absolute -bottom-10 -right-6 text-9xl opacity-20">🐾</div>
        <PawPrint className="absolute top-8 right-16 size-8 text-white/40 animate-float" />
        <PawPrint className="absolute bottom-12 left-20 size-10 text-white/40 animate-float-slow" />

        <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight">{t("cta.title")}</h2>
        <p className="mt-4 text-white/90 max-w-xl mx-auto text-lg">{t("cta.desc")}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button className="bg-white text-primary rounded-full px-7 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition shadow-pop">
            <PawPrint className="size-5" /> {t("cta.btn1")}
          </button>
          <button className="bg-ink text-white rounded-full px-7 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition">
            {t("cta.btn2")}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mx-auto w-[min(1200px,94%)] py-12 border-t border-pink-soft">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-2xl bg-primary grid place-items-center shadow-soft">
            <PawPrint className="size-5 text-white" />
          </div>
          <span className="font-display text-lg font-bold">PetID<span className="text-primary">.vn</span></span>
        </div>
        <p className="text-sm text-foreground/60">{t("footer.made")}</p>
        <div className="flex gap-5 text-sm font-semibold text-foreground/70">
          <a href="#" className="hover:text-primary">{t("footer.privacy")}</a>
          <a href="#" className="hover:text-primary">{t("footer.terms")}</a>
          <a href="#" className="hover:text-primary">{t("footer.contact")}</a>
        </div>
      </div>
    </footer>
  );
}
