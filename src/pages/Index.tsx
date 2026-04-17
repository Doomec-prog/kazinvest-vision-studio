import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Clapperboard,
  Cpu,
  Film,
  Globe,
  Megaphone,
  Shield,
  Sparkles,
  Target,
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

const highlights = [
  { value: "120+", label: "реализованных медиапроектов" },
  { value: "30+", label: "брендов и продюсерских команд в экосистеме" },
  { value: "10", label: "регионов Казахстана с локальными съёмками" },
  { value: "24/7", label: "операционная поддержка проектов" },
];

const capabilities = [
  {
    Icon: Clapperboard,
    title: "Full-cycle продакшн",
    text: "От идеи, сценария и кастинга до монтажа, VFX и релиза.",
  },
  {
    Icon: Camera,
    title: "Премиальная техбаза",
    text: "Кинооптика, павильоны, звук, LED-экраны и мобильные студии.",
  },
  {
    Icon: Globe,
    title: "Съёмки под ключ",
    text: "Локации, логистика, разрешения и продюсерский контроль в одной команде.",
  },
  {
    Icon: Cpu,
    title: "AI + data-подход",
    text: "Контент-аналитика, прогноз охватов и автоматизация креативных процессов.",
  },
  {
    Icon: Users,
    title: "Команда A-level",
    text: "Режиссёры, шоураннеры, операторы и креативные продюсеры с сильным портфолио.",
  },
  {
    Icon: Megaphone,
    title: "Маркетинг и дистрибуция",
    text: "Запуск 360°: digital, ТВ, стриминги, PR и performance-каналы.",
  },
];

const process = [
  {
    step: "01",
    title: "Стратегическая сессия",
    text: "Фиксируем цели бренда, аудиторию и KPI кампании.",
  },
  {
    step: "02",
    title: "Креатив + продакшн",
    text: "Разрабатываем идеи, сценарии и визуальный язык проекта.",
  },
  {
    step: "03",
    title: "Запуск и масштабирование",
    text: "Выводим продукт на рынок и масштабируем результат через аналитику.",
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-enter");
        });
      },
      { threshold: 0.1 }
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
        <nav className="container flex items-center justify-between py-3">
          <a href="#hero" className="flex items-center gap-3" aria-label="KazInvest Adviser">
            <img src={logoMain} alt="KazInvest Adviser логотип" className="h-14 w-auto md:h-16" loading="eager" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-foreground">О холдинге</a>
            <a href="#capabilities" className="transition-colors hover:text-foreground">Экспертиза</a>
            <a href="#process" className="transition-colors hover:text-foreground">Процесс</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Контакты</a>
          </div>

          <Button asChild variant="hero" size="sm">
            <a href="#contact">Обсудить проект</a>
          </Button>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-aurora animate-aurora" aria-hidden />
          <div className="container relative py-20 md:py-32">
            <div className="mx-auto max-w-5xl text-center" data-reveal>
              <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Креативный медиахолдинг нового поколения
              </p>

              <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Делаем медиа, которые
                <span className="text-primary"> двигают бизнес</span> и культуру вперёд
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                KazInvest Adviser объединяет продакшн, технологии и маркетинг в единую систему:
                вы получаете сильную идею, безупречную реализацию и измеримый результат.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Получить предложение</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="#capabilities">Посмотреть экспертизу</a>
                </Button>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Ключевые показатели" data-reveal>
              {highlights.map((item) => (
                <article key={item.label} className="glass-card p-5 text-left hover-glow">
                  <p className="text-3xl font-bold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center" data-reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">О холдинге</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              KazInvest — ведущий медиахолдинг Казахстана, объединяющий Cezar Production,
              Centurion Films, Dostyk TV, Centurion Sound и Лигу кинематографистов. Мы ведём
              проекты от концепции до дистрибуции и строим долгосрочную ценность для брендов.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5" aria-label="Бренды холдинга">
            {brandLogos.map((brand) => (
              <figure key={brand.name} className="glass-card flex items-center justify-center p-4 hover-glow" data-reveal>
                <img
                  src={brand.src}
                  alt={`Логотип ${brand.name}`}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
                <figcaption className="sr-only">{brand.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="capabilities" className="bg-secondary/40 py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center" data-reveal>
              <h2 className="font-display text-3xl font-bold md:text-5xl">Экспертиза</h2>
              <p className="mt-4 text-muted-foreground">
                Собрали продакшн, контент-стратегию и performance-маркетинг в одном окне —
                чтобы вы получали не просто красивый ролик, а бизнес-результат.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ Icon, title, text }) => (
                <article key={title} className="glass-card p-6 hover-glow" data-reveal>
                  <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="container py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center" data-reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">Как мы работаем</h2>
            <p className="mt-4 text-muted-foreground">
              Прозрачный процесс, фиксированные этапы и контроль качества на каждом шаге.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="glass-card p-6 hover-glow" data-reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Этап {item.step}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="glass-card p-6" data-reveal>
              <h3 className="text-2xl font-semibold">Почему нам доверяют</h3>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {[
                  "Фокус на KPI и окупаемости медиаактивностей",
                  "Сильная продюсерская дисциплина и управление рисками",
                  "Глубокая локальная экспертиза + международные стандарты",
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-card p-6" data-reveal>
              <h3 className="text-2xl font-semibold">Ключевые принципы</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  { Icon: Target, text: "Точность стратегии" },
                  { Icon: Film, text: "Сильная режиссура" },
                  { Icon: Shield, text: "Надёжное исполнение" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <Icon className="mx-auto h-5 w-5 text-primary" />
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="bg-secondary/40 py-20 md:py-28">
          <div className="container grid items-start gap-10 lg:grid-cols-2">
            <div data-reveal>
              <h2 className="font-display text-3xl font-bold md:text-5xl">Обсудим ваш проект</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Расскажите о задаче — подготовим структуру работ, бюджетные рамки и план запуска.
              </p>

              <div className="mt-6 glass-card space-y-2 p-6">
                <p>
                  <span className="text-muted-foreground">Телефон:</span>{" "}
                  <a href="tel:+77077185858" className="story-link">
                    +7 (707) 718-58-58
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <a href="mailto:info@kazinvestadviser.com" className="story-link">
                    info@kazinvestadviser.com
                  </a>
                </p>
                <a
                  href="https://kazinvestadviser.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                >
                  Перейти на основной сайт
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="glass-card flex items-center justify-center p-6" aria-label="QR на сайт">
                  <img src={qrSrc} alt="QR-код на сайт KazInvest Adviser" width={180} height={180} loading="lazy" />
                </div>
                <div className="glass-card overflow-hidden">
                  <iframe
                    title="Карта проектов"
                    className="h-48 w-full md:h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10943662.173479935!2d54.61!3d47.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245816b37cfe2a7%3A0x29c2a0e12c42194e!2z0JrQvtC80LXQvdGC0YAg0JrQvtC80LXQvdGC0YDQsNC90YHRjNC60LjQuSDQmtC40LvQuNC90L7QvNC10L3Rgi!5e0!3m2!1sru!2skz!4v1716400000000"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="glass-card space-y-4 p-6"
              data-reveal
              aria-label="Форма обратной связи"
            >
              <div>
                <label htmlFor="name" className="mb-1 block text-sm">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="hero" size="lg" type="submit">
                Отправить запрос
              </Button>
              <p className="text-xs text-muted-foreground">
                Нажимая «Отправить запрос», вы соглашаетесь с обработкой персональных данных.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} KazInvest Adviser</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-primary">
              О холдинге
            </a>
            <a href="#capabilities" className="hover:text-primary">
              Экспертиза
            </a>
            <a href="#contact" className="hover:text-primary">
              Контакты
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
