import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  Clock3,
  Cpu,
  Film,
  Globe,
  Megaphone,
  Shield,
  Sparkles,
  TrendingUp,
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
    Icon: Film,
    title: "Full-cycle production",
    text: "Строим медийный продукт от креативной концепции и съёмок до релиза и монетизации.",
  },
  {
    Icon: Camera,
    title: "Технологичный продакшн",
    text: "Кинематографическая техника, павильоны, цветокор и саунд-дизайн международного уровня.",
  },
  {
    Icon: Globe,
    title: "Локально и международно",
    text: "Организуем съёмки по Казахстану, СНГ и на международных площадках под задачу бренда.",
  },
  {
    Icon: Cpu,
    title: "AI и автоматизация",
    text: "Ускоряем препродакшн, анализируем аудиторию и повышаем точность контент-стратегии.",
  },
  {
    Icon: Megaphone,
    title: "Дистрибуция и PR",
    text: "Запускаем продукты в digital, ТВ, кинотеатры и стриминги с прозрачной воронкой продаж.",
  },
  {
    Icon: Shield,
    title: "Репутация и контроль",
    text: "Соблюдаем сроки, бюджеты и юридические стандарты на каждом этапе проекта.",
  },
];

const metrics = [
  { value: "12+", label: "лет на рынке" },
  { value: "150+", label: "реализованных проектов" },
  { value: "5", label: "брендов в экосистеме" },
  { value: "24/7", label: "операционный менеджмент" },
];

const workflow = [
  {
    step: "01",
    title: "Стратегическая сессия",
    text: "Формируем цели, KPI и карту контента под бизнес-задачи клиента.",
  },
  {
    step: "02",
    title: "Креатив и продакшн",
    text: "Запускаем сценарии, кастинг, съёмочный план и производство в нужном формате.",
  },
  {
    step: "03",
    title: "Продвижение и рост",
    text: "Выводим проект в каналы дистрибуции, усиливаем охваты и управляем результатом.",
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
        <nav className="container flex items-center justify-between py-3">
          <a href="#hero" className="flex items-center gap-3" aria-label="KazInvest Adviser">
            <img src={logoMain} alt="KazInvest Adviser логотип" className="h-14 w-auto" loading="eager" />
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="transition-colors hover:text-primary">О холдинге</a>
            <a href="#capabilities" className="transition-colors hover:text-primary">Экспертиза</a>
            <a href="#workflow" className="transition-colors hover:text-primary">Процесс</a>
            <a href="#contact" className="transition-colors hover:text-primary">Контакты</a>
          </div>

          <Button asChild variant="hero" size="sm">
            <a href="#contact">Обсудить проект</a>
          </Button>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-aurora animate-aurora" aria-hidden />
          <div className="container relative py-24 md:py-32">
            <div className="mx-auto max-w-5xl text-center" data-reveal>
              <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Premium media partner in Kazakhstan
              </p>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                KazInvest Adviser — медиахолдинг для брендов,
                <span className="text-primary"> которым нужен ощутимый результат</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                Перепроектировали сайт в формате «корпоративного бутика»: чёткое позиционирование,
                демонстрация экспертизы, понятная структура услуг и удобный путь от первого касания до заявки.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Запросить консультацию</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="#capabilities" className="inline-flex items-center gap-2">
                    Посмотреть экспертизу
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
              {metrics.map((item) => (
                <article key={item.label} className="glass-card p-6 text-left">
                  <p className="text-3xl font-bold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container py-20 md:py-28">
          <article className="mx-auto max-w-4xl space-y-6 text-center" data-reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">Архитектура сильного бренда</h2>
            <p className="text-base text-muted-foreground md:text-lg">
              KazInvest объединяет Cezar Production, Centurion Films, Dostyk TV, Centurion Sound и Лигу
              кинематографистов Казахстана. Вместо «витрины услуг» сайт теперь работает как продающая экосистема:
              показывает масштаб, доверие и конкретную ценность для клиента.
            </p>
          </article>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5" aria-label="Бренды холдинга">
            {brandLogos.map((b) => (
              <figure key={b.name} className="glass-card hover-glow flex items-center justify-center p-4" data-reveal>
                <img src={b.src} alt={`Логотип ${b.name}`} className="max-h-16 w-auto object-contain" loading="lazy" />
                <figcaption className="sr-only">{b.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="capabilities" className="bg-secondary/40 py-20 md:py-28">
          <div className="container">
            <h2 className="text-center font-display text-3xl font-bold md:text-5xl" data-reveal>
              Экспертиза, которая масштабирует бизнес
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ Icon, title, text }) => (
                <article key={title} className="glass-card hover-glow p-6" data-reveal>
                  <Icon className="text-primary" />
                  <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="container py-20 md:py-28">
          <h2 className="text-center font-display text-3xl font-bold md:text-5xl" data-reveal>
            Как мы работаем
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workflow.map((item) => (
              <article key={item.step} className="glass-card p-6" data-reveal>
                <p className="text-sm uppercase tracking-widest text-primary">Этап {item.step}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:grid-cols-3" data-reveal>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4 text-primary" /> Быстрый старт: kickoff до 72 часов
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-primary" /> Прозрачная аналитика и отчётность
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <BadgeCheck className="h-4 w-4 text-primary" /> Персональный продюсер проекта
            </p>
          </div>
        </section>

        <section id="why" className="bg-secondary/40 py-20 md:py-28">
          <div className="container">
            <h2 className="text-center font-display text-3xl font-bold md:text-5xl" data-reveal>
              Почему клиенты выбирают нас
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Инновации + творческий подход",
                "Сильная команда продюсеров",
                "Гибкость под задачи бренда",
                "Надёжность и управляемость",
              ].map((point) => (
                <article key={point} className="glass-card hover-glow p-6" data-reveal>
                  <CheckCircle2 className="text-primary" />
                  <p className="mt-3 font-medium">{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="container grid items-start gap-10 lg:grid-cols-2">
            <div data-reveal>
              <h2 className="font-display text-3xl font-bold md:text-5xl">Контакты и запуск проекта</h2>
              <p className="mt-4 text-muted-foreground">
                Оставьте заявку, и мы предложим структуру проекта, каналы дистрибуции и медиаплан под ваши цели.
              </p>

              <div className="mt-6 space-y-3 glass-card p-6">
                <p>
                  <span className="text-muted-foreground">Телефон:</span>{" "}
                  <a href="tel:+77077185858" className="story-link">+7 (707) 718-58-58</a>
                </p>
                <p>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <a href="mailto:info@kazinvestadviser.com" className="story-link">info@kazinvestadviser.com</a>
                </p>
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
                <label htmlFor="name" className="mb-1 block text-sm">Имя</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="hero" size="lg" type="submit">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground">
                Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} KazInvest Adviser</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-primary">О холдинге</a>
            <a href="#capabilities" className="hover:text-primary">Экспертиза</a>
            <a href="#contact" className="hover:text-primary">Контакты</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
