import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "vi" | "en";

const dict = {
  vi: {
    "nav.features": "Tính năng",
    "nav.dashboard": "Bảng điều khiển",
    "nav.lost": "Thú cưng thất lạc",
    "nav.app": "Ứng dụng",
    "nav.signin": "Đăng nhập",
    "nav.register": "Đăng ký thú cưng",

    "hero.badge": "Được 12.000+ gia đình Việt Nam tin dùng",
    "hero.title.1": "Thẻ",
    "hero.title.2": "Định danh",
    "hero.title.3": "Số",
    "hero.title.4": "cho bé cưng",
    "hero.desc":
      "Bảo vệ bé cưng với hồ sơ số, thẻ QR định danh, sổ sức khỏe và tìm kiếm khi thất lạc — tất cả trong một ứng dụng siêu đáng yêu.",
    "hero.cta1": "Đăng ký bé cưng",
    "hero.cta2": "Xem cách hoạt động",
    "hero.rating": "4.9 · được sen yêu thích",
    "hero.health": "Điểm sức khỏe",
    "hero.healthVal": "Tuyệt vời · 98",
    "hero.qr": "Thẻ QR định danh",

    "features.badge": "Tất cả trong một",
    "features.title.1": "Trọn yêu thương. Trọn dữ liệu.",
    "features.title.2": "Trọn chăm sóc.",
    "features.desc": "Sáu tính năng đáng yêu biến việc nuôi thú cưng thành niềm vui.",
    "features.more": "Tìm hiểu thêm",
    "f1.title": "Hồ sơ thú cưng",
    "f1.desc": "Trang xinh xắn kể câu chuyện, giống, tuổi và tính cách của bé.",
    "f2.title": "Thẻ QR định danh",
    "f2.desc": "Thẻ quét được, hiện ngay thông tin liên hệ của bạn.",
    "f3.title": "Sổ tiêm chủng",
    "f3.desc": "Không bỏ lỡ mũi nào — hồ sơ xác thực bởi bác sĩ thú y.",
    "f4.title": "Tìm bé thất lạc",
    "f4.desc": "Cảnh báo cộng đồng và bản đồ dễ thương đưa bé về nhà.",
    "f5.title": "Hộ chiếu thú cưng",
    "f5.desc": "Giấy tờ du lịch, mã microchip và hồ sơ chủ sở hữu.",
    "f6.title": "Kết nối bác sĩ thú y",
    "f6.desc": "Đặt lịch phòng khám gần bạn và chia sẻ hồ sơ chỉ một chạm.",

    "dash.badge": "Bảng điều khiển",
    "dash.title.1": "Ngôi nhà ấm áp cho mọi thứ",
    "dash.title.2": "bé cưng cần",
    "dash.desc":
      "Tiêm chủng, cân nặng, thẻ QR và nhắc nhở — gói gọn trong những thẻ bo tròn mềm mại.",
    "dash.li1": "Nhắc lịch tiêm và khám thú y thông minh",
    "dash.li2": "Theo dõi cân nặng với biểu đồ đáng yêu",
    "dash.li3": "Dữ liệu mã hóa, bạn hoàn toàn sở hữu",
    "dash.welcome": "Chào mừng trở lại, Linh 👋",
    "dash.weight": "Cân nặng",
    "dash.health": "Sức khỏe",
    "dash.rabies": "Nhắc lại vắc-xin dại",
    "dash.in5": "còn 5 ngày",
    "dash.qrShare": "Chạm để chia sẻ với bác sĩ",
    "dash.treat": "Nhận thưởng!",
    "dash.breed": "· Shiba · 2 tuổi",

    "lost.badge": "Cộng đồng tìm thú cưng",
    "lost.title.1": "Khi bé đi lạc,",
    "lost.title.2": "chúng tôi đưa bé về nhà",
    "lost.desc": "Cảnh báo tức thì, hàng xóm thân thiện và bản đồ dấu chân dễ thương.",
    "lost.mapTitle": "3 bé đang được tìm gần đây",
    "lost.mapDesc": "Cùng cộng đồng đưa các bé về nhà 💕",
    "lost.join": "Tham gia",
    "lost.missing": "THẤT LẠC",
    "lost.reward": "TIỀN THƯỞNG",
    "lost.min": "2 phút trước",
    "lost.spotted": "Đã thấy!",
    "pet.bunny": "Thỏ",
    "pet.cat": "Mèo mướp",
    "pet.dog": "Shiba con",
    "area.1": "Quận 1, TP.HCM",
    "area.2": "Tây Hồ, Hà Nội",
    "area.3": "Biển Đà Nẵng",

    "app.badge": "Ứng dụng di động",
    "app.title.1": "Chăm sóc bỏ túi,",
    "app.title.2": "vui hết nấc.",
    "app.desc":
      "Quét thẻ QR, quản lý tiêm chủng và trò chuyện với bác sĩ — ngay trên ứng dụng thú cưng dễ thương nhất Việt Nam.",
    "app.dl": "Tải về trên",
    "app.get": "Tải trên",
    "phone.scan": "Quét thẻ QR",
    "phone.scanning": "Đang quét…",
    "phone.years": "Shiba · 2 tuổi",
    "phone.weight": "Cân nặng",
    "phone.health": "Sức khỏe",
    "phone.age": "Tuổi",
    "phone.photos": "12 ảnh mới tuần này 📸",
    "phone.records": "Hồ sơ sức khỏe",
    "phone.rabies": "Bệnh dại",
    "phone.uptodate": "Đã cập nhật",
    "phone.deworm": "Tẩy giun",
    "phone.due5": "Còn 5 ngày",
    "phone.checkup": "Khám tổng quát",
    "phone.lastweek": "Tuần trước",
    "phone.trend": "Xu hướng cân nặng",
    "phone.reminder": "Nhắc: Tiêm nhắc lại thứ Ba",

    "cta.title": "Trao cho bé cưng một danh tính trọn đời 🐾",
    "cta.desc":
      "Cùng 12.000+ gia đình Việt Nam giữ bé cưng an toàn, khỏe mạnh và đầy yêu thương.",
    "cta.btn1": "Đăng ký miễn phí",
    "cta.btn2": "Liên hệ với chúng tôi",

    "footer.made": "Làm bằng 💖 tại Việt Nam · © 2026 PetID Vietnam",
    "footer.privacy": "Bảo mật",
    "footer.terms": "Điều khoản",
    "footer.contact": "Liên hệ",
  },
  en: {
    "nav.features": "Features",
    "nav.dashboard": "Dashboard",
    "nav.lost": "Lost & Found",
    "nav.app": "Mobile App",
    "nav.signin": "Sign in",
    "nav.register": "Register Pet",

    "hero.badge": "Trusted by 12,000+ pet families in Vietnam",
    "hero.title.1": "Your Pet's",
    "hero.title.2": "Digital",
    "hero.title.3": "Identity",
    "hero.title.4": "Card",
    "hero.desc":
      "Keep your furry friend safe with a digital profile, QR ID tag, health records, and instant lost-pet recovery — all in one adorable app.",
    "hero.cta1": "Register My Pet",
    "hero.cta2": "See How It Works",
    "hero.rating": "4.9 · loved by pet parents",
    "hero.health": "Health score",
    "hero.healthVal": "Excellent · 98",
    "hero.qr": "QR ID Tag",

    "features.badge": "Everything in one place",
    "features.title.1": "All the love. All the data.",
    "features.title.2": "All cared for.",
    "features.desc": "Six adorable features that turn pet parenting into a delight.",
    "features.more": "Learn more",
    "f1.title": "Pet Profile",
    "f1.desc": "A beautiful page for your pet's story, breed, age, and personality.",
    "f2.title": "QR ID Card",
    "f2.desc": "A scannable tag that reveals your contact instantly when scanned.",
    "f3.title": "Vaccination Records",
    "f3.desc": "Never miss a shot — vet-verified records and smart reminders.",
    "f4.title": "Lost Pet Recovery",
    "f4.desc": "Community alerts and a cute map to bring your friend home fast.",
    "f5.title": "Pet Passport",
    "f5.desc": "Travel-ready documents, microchip ID, and ownership records.",
    "f6.title": "Vet Connection",
    "f6.desc": "Book trusted vets nearby and share health info in one tap.",

    "dash.badge": "Pet Dashboard",
    "dash.title.1": "A cozy home for everything",
    "dash.title.2": "your pet needs",
    "dash.desc":
      "Vaccinations, weight, QR ID, and reminders — all wrapped in soft, rounded cards that make care feel joyful.",
    "dash.li1": "Smart reminders for vaccines & vet visits",
    "dash.li2": "Weight tracker with adorable growth charts",
    "dash.li3": "Encrypted records you fully own",
    "dash.welcome": "Welcome back, Linh 👋",
    "dash.weight": "Weight",
    "dash.health": "Health",
    "dash.rabies": "Rabies booster",
    "dash.in5": "in 5 days",
    "dash.qrShare": "Tap to share with vet",
    "dash.treat": "Treat earned!",
    "dash.breed": "· Shiba · 2y",

    "lost.badge": "Community Lost & Found",
    "lost.title.1": "When they wander,",
    "lost.title.2": "we bring them home",
    "lost.desc": "Real-time alerts, friendly neighbors, and a cute map that tracks paw prints.",
    "lost.mapTitle": "3 pets being searched nearby",
    "lost.mapDesc": "Help your community bring them home 💕",
    "lost.join": "Join",
    "lost.missing": "MISSING",
    "lost.reward": "REWARD",
    "lost.min": "2 min ago",
    "lost.spotted": "Spotted!",
    "pet.bunny": "Bunny",
    "pet.cat": "Tabby Cat",
    "pet.dog": "Shiba Pup",
    "area.1": "District 1, HCMC",
    "area.2": "Tay Ho, Hanoi",
    "area.3": "Da Nang Beach",

    "app.badge": "Mobile App",
    "app.title.1": "Pocket-sized care,",
    "app.title.2": "paw-sized fun.",
    "app.desc":
      "Scan QR tags, manage vaccines, and chat with vets — all from the cutest pet app in Vietnam.",
    "app.dl": "Download on the",
    "app.get": "Get it on",
    "phone.scan": "Scan QR Tag",
    "phone.scanning": "Scanning…",
    "phone.years": "Shiba · 2 years",
    "phone.weight": "Weight",
    "phone.health": "Health",
    "phone.age": "Age",
    "phone.photos": "12 new photos this week 📸",
    "phone.records": "Health Records",
    "phone.rabies": "Rabies",
    "phone.uptodate": "Up to date",
    "phone.deworm": "Deworming",
    "phone.due5": "Due in 5d",
    "phone.checkup": "Checkup",
    "phone.lastweek": "Last week",
    "phone.trend": "Weight trend",
    "phone.reminder": "Reminder: Booster shot Tue",

    "cta.title": "Give your pet a forever ID 🐾",
    "cta.desc":
      "Join 12,000+ families across Vietnam keeping their furry ones safe, healthy, and loved.",
    "cta.btn1": "Register My Pet — Free",
    "cta.btn2": "Talk to us",

    "footer.made": "Made with 💖 in Vietnam · © 2026 PetID Vietnam",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact": "Contact",
  },
} as const;

export type TKey = keyof (typeof dict)["vi"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };

const I18nContext = createContext<Ctx>({ lang: "vi", setLang: () => {}, t: (k) => dict.vi[k] });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("petid-lang");
    if (saved === "vi" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("petid-lang", l);
  };

  const t = (k: TKey) => dict[lang][k] ?? dict.vi[k];

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center rounded-full bg-white/70 border border-pink-soft p-0.5 shadow-soft">
      {(["vi", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={l === "vi" ? "Tiếng Việt" : "English"}
          className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
            lang === l ? "bg-primary text-white shadow-soft" : "text-foreground/60 hover:text-primary"
          }`}
        >
          {l === "vi" ? "🇻🇳 VI" : "🇬🇧 EN"}
        </button>
      ))}
    </div>
  );
}
