import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Camera,
  CheckCircle2,
  Clapperboard,
  Globe,
  Megaphone,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { toast } from "sonner";

const logoMain = "/lovable-uploads/36df7d5d-ba74-43e8-bf70-182d3d53630d.png";
const brandLogos = [
  { src: "/lovable-uploads/0476cf2a-bec3-4071-b26a-f2c75d767225.png", name: "Cezar Production" },
  { src: "/lovable-uploads/33f03dc4-1923-433b-ba20-e024f2c80d42.png", name: "Centurion Films" },
  { src: "/lovable-uploads/f532d826-ecd1-40c3-b671-b2d82de1da7e.png", name: "Dostyk TV" },
  { src: "/lovable-uploads/6d13e479-1e62-49a8-ab8c-acf495bf9a95.png", name: "Centurion Sound" },
  { src: "/lovable-uploads/8de13c79-ffcd-4fd1-8559-a9d022b4b924.png", name: "Лига кинематографистов Казахстана" },
];

const capabilities = [
  {
    Icon: Clapperboard,
    title: "Production под ключ",
    text: "Полный цикл: стратегия, сценарий, продакшн, пост и запуск кампании.",
  },
  {
    Icon: Camera,
    title: "Премиум техбаза",
    text: "Кинопавильоны, техника Hollywood-level и собственный аудио-продакшн.",
  },
  {
    Icon: Megaphone,
    title: "Маркетинг 360°",
    text: "От бренд-позиционирования до мультиканальной дистрибуции и performance.",
  },
  {
    Icon: Globe,
    title: "Международный фокус",
    text: "Кампании для локального и глобального рынка с адаптацией под аудитории.",
  },
  {
    Icon: Users,
    title: "Кросс-функциональная команда",
    text: "Креатив, аналитика и продакшн работают как единая проектная система.",
  },
  {
    Icon: Shield,
    title: "Корпоративная надёжность",
    text: "Прозрачные процессы, SLA по срокам и контроль качества на каждом этапе.",
  },
];

const projectCases = [
  {
    title: "Национальная медиа-кампания",
    subtitle: "TV + Digital + OOH",
    result: "+42% узнаваемости бренда за 3 месяца",
  },
  {
    title: "Запуск документального сериала",
    subtitle: "От концепта до дистрибуции",
    result: "5 стран показа и 2 отраслевые награды",
  },
  {
    title: "Имиджевый фильм для крупного бизнеса",
    subtitle: "C-level коммуникация",
    result: "Сокращение цикла продаж на 18%",
  },
];

const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
  "https://kazinvestadviser.com/"
)}`;

const Index = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-enter");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Спасибо! Мы свяжемся с вами в ближайшее время.");
    formRef.current?.reset();
  };

  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
        <nav className="container flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-3" aria-label="KazInvest Adviser">
            <img src={logoMain} alt="KazInvest Adviser логотип" className="h-12 w-auto md:h-14" loading="eager" />
          </a>

          <div className="hidden lg:flex items-center gap-7 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#capabilities" className="hover:text-primary transition-colors">Экспертиза</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>

          <Button asChild variant="hero" size="sm">
            <a href="#contact">Обсудить проект</a>
          </Button>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-aurora animate-aurora" aria-hidden />
          <div className="container relative py-20 md:py-28 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div data-reveal>
                <p className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs tracking-wide text-primary">
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Медиа-холдинг полного цикла
                </p>

                <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  Солидный визуал, сильная стратегия и measurable-результат
                </h1>

                <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-xl">
                  Мы помогаем брендам и институциям говорить на языке современного медиа: от идеи и продакшна
                  до дистрибуции и бизнес-эффекта.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#contact">
                      Запросить консультацию
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" asChild>
                    <a href="#cases">Смотреть кейсы</a>
                  </Button>
                </div>
              </div>

              <aside className="grid gap-4" data-reveal aria-label="Ключевые показатели">
                {["15+ лет в медиа", "70+ реализованных проектов", "5 брендов в экосистеме"].map((stat) => (
                  <div key={stat} className="glass-card p-5">
                    <p className="text-lg font-semibold">{stat}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Подтверждённый опыт и системный подход</p>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        <section id="about" className="container py-20 md:py-24">
          <div className="mx-auto max-w-4xl text-center" data-reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">О компании</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              KazInvest объединяет Cezar Production, Centurion Films, Dostyk TV, Centurion Sound и Лигу
              Кинематографистов Казахстана в единую медиаплатформу. Мы проектируем коммуникации с фокусом на
              имидж, эффективность и долгосрочную ценность.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-5" aria-label="Бренды холдинга">
            {brandLogos.map((brand) => (
              <figure key={brand.name} className="glass-card hover-glow p-4 flex items-center justify-center" data-reveal>
                <img src={brand.src} alt={`Логотип ${brand.name}`} className="max-h-16 w-auto object-contain" loading="lazy" />
                <figcaption className="sr-only">{brand.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="capabilities" className="bg-secondary/35 py-20 md:py-24">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
              <div>
                <h2 className="font-display text-3xl font-bold md:text-5xl">Экспертиза</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Сочетаем эстетику, технологичность и бизнес-логику, чтобы делать контент, который работает.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ Icon, title, text }) => (
                <article key={title} className="glass-card hover-glow p-6" data-reveal>
                  <Icon className="text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="container py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <h2 className="font-display text-3xl font-bold md:text-5xl">Выборочные кейсы</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Примеры того, как креатив и продюсирование трансформируются в измеримый эффект.
              </p>
            </div>
            <div className="rounded-full border border-white/15 px-4 py-2 text-sm text-muted-foreground">NDA-friendly презентации по запросу</div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectCases.map((item) => (
              <article key={item.title} className="glass-card hover-glow p-6" data-reveal>
                <p className="text-sm text-primary">{item.subtitle}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm text-primary">
                  <Award className="h-4 w-4" />
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary/35 py-14">
          <div className="container">
            <div className="glass-card p-7 md:p-9 flex flex-col gap-6 md:flex-row md:items-center md:justify-between" data-reveal>
              <div>
                <h3 className="text-2xl font-semibold">Готовы обсудить ваш следующий медиа-проект?</h3>
                <p className="mt-2 text-muted-foreground">Подготовим концепт, roadmap и реалистичный план запуска за 5 рабочих дней.</p>
              </div>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Получить предложение</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-24">
          <div className="container grid items-start gap-10 lg:grid-cols-2">
            <div data-reveal>
              <h2 className="font-display text-3xl font-bold md:text-5xl">Контакты</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">Свяжитесь с нами любым удобным способом — команда ответит в течение рабочего дня.</p>

              <div className="mt-6 glass-card p-6 space-y-3">
                <p><span className="text-muted-foreground">Телефон:</span> <a href="tel:+77077185858" className="story-link">+7 (707) 718-58-58</a></p>
                <p><span className="text-muted-foreground">Email:</span> <a href="mailto:info@kazinvestadviser.com" className="story-link">info@kazinvestadviser.com</a></p>
                <p className="flex items-start gap-2 text-muted-foreground text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Конфиденциально работаем с коммерчески чувствительными брифами.
                </p>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="glass-card p-6 flex items-center justify-center" aria-label="QR на сайт">
                  <img src={qrSrc} alt="QR-код на сайт KazInvest Adviser" width={180} height={180} loading="lazy" />
                </div>
                <div className="glass-card overflow-hidden">
                  <iframe
                    title="Карта проектов"
                    className="w-full h-48 md:h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10943662.173479935!2d54.61!3d47.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245816b37cfe2a7%3A0x29c2a0e12c42194e!2z0JrQvtC80LXQvdGC0YAg0JrQvtC80LXQvdGC0YDQsNC90YHRjNC60LjQuSDQmtC40LvQuNC90L7QvNC10L3Rgi!5e0!3m2!1sru!2skz!4v1716400000000"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={onSubmit} className="glass-card p-6 md:p-8 space-y-4" data-reveal aria-label="Форма обратной связи">
              <h3 className="text-2xl font-semibold">Обсудить задачу</h3>
              <p className="text-sm text-muted-foreground">Оставьте контакты и короткий бриф — вернёмся с предложением и следующими шагами.</p>

              <div>
                <label htmlFor="name" className="mb-1 block text-sm">Имя</label>
                <input id="name" name="name" required className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm">Email</label>
                <input id="email" type="email" name="email" required className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm">Сообщение</label>
                <textarea id="message" name="message" rows={5} required className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full md:w-auto">Отправить запрос</Button>
              <p className="text-xs text-muted-foreground">Нажимая «Отправить запрос», вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} KazInvest Adviser</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#capabilities" className="hover:text-primary transition-colors">Экспертиза</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
