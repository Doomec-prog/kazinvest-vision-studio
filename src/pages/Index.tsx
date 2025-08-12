import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Film, Camera, Globe, Cpu, Users, Megaphone, Sparkles, Shield } from "lucide-react";
import { toast } from "sonner";

const logoMain = "/lovable-uploads/36df7d5d-ba74-43e8-bf70-182d3d53630d.png";
const brandLogos = [
  { src: "/lovable-uploads/0476cf2a-bec3-4071-b26a-f2c75d767225.png", name: "Cezar Production" },
  { src: "/lovable-uploads/33f03dc4-1923-433b-ba20-e024f2c80d42.png", name: "Centurion Films" },
  { src: "/lovable-uploads/f532d826-ecd1-40c3-b671-b2d82de1da7e.png", name: "Dostyk TV" },
  { src: "/lovable-uploads/26be8b76-4fc9-4b30-b291-50218ed437e2.png", name: "Eurasia24" },
  { src: "/lovable-uploads/8de13c79-ffcd-4fd1-8559-a9d022b4b924.png", name: "Лига кинематографистов Казахстана" },
];

const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
  "http://kazinvestadviser.com/"
)}`;

const Index = () => {
  // Reveal on scroll
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
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-background/60">
        <nav className="container flex items-center justify-between py-3">
          <a href="#hero" className="flex items-center gap-3" aria-label="KazInvest Adviser">
            <img src={logoMain} alt="KazInvest Adviser логотип" className="h-8 w-auto" loading="eager" />
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#capabilities" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="sm">
              <a href="#contact">Связаться</a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-aurora animate-aurora" aria-hidden />
          <div className="container relative py-24 md:py-36">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <div className="flex justify-center mb-8">
                <img
                  src={logoMain}
                  alt="KazInvest Adviser логотип"
                  className="h-16 md:h-20 w-auto drop-shadow"
                  width={200}
                  height={80}
                />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Вдохновляем, создаём, меняем будущее медиа
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Современный медиахолдинг, соединяющий кино, технологии и масштабные проекты.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact" aria-label="Связаться с нами">Связаться</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="#about">О компании</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About & brands */}
        <section id="about" className="container py-20 md:py-28">
          <article className="mx-auto max-w-4xl text-center space-y-6" data-reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold">О компании</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              KazInvest — ведущий медиахолдинг Казахстана, объединяющий бренды Cezar Production,
              Centurion Films, Dostyk TV, Eurasia24 и Лигу Кинематографистов Казахстана. Мы создаём
              контент мирового уровня: от идеи и съёмки до продвижения.
            </p>
          </article>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6" aria-label="Бренды холдинга">
            {brandLogos.map((b) => (
              <figure key={b.name} className="glass-card hover-glow p-4 flex items-center justify-center" data-reveal>
                <img src={b.src} alt={`Логотип ${b.name}`} className="max-h-16 w-auto object-contain" loading="lazy" />
                <figcaption className="sr-only">{b.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="bg-secondary/40 py-20 md:py-28">
          <div className="container">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center" data-reveal>Наши возможности</h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { Icon: Film, title: "Полный цикл производства", text: "От сценария до кассовых сборов." },
                { Icon: Camera, title: "Современная техбаза", text: "Голливудское оборудование, павильоны, звук." },
                { Icon: Globe, title: "Организация съёмок", text: "По всему Казахстану и за его пределами." },
                { Icon: Cpu, title: "Внедрение AI", text: "Технологии на страже контента." },
                { Icon: Users, title: "Креативная команда", text: "Режиссёры, сценаристы, операторы топ-уровня." },
                { Icon: Megaphone, title: "Маркетинг и дистрибуция", text: "От TikTok до стримингов и ТВ." },
              ].map(({ Icon, title, text }) => (
                <article key={title} className="glass-card hover-glow p-6" data-reveal>
                  <Icon className="text-primary" />
                  <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="container py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center" data-reveal>Почему мы</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Sparkles, title: "Инновации + Творчество" },
              { Icon: Users, title: "Команда профессионалов" },
              { Icon: Film, title: "Гибкость и масштаб" },
              { Icon: Shield, title: "Надёжность" },
            ].map(({ Icon, title }) => (
              <article key={title} className="glass-card hover-glow p-6" data-reveal>
                <Icon className="text-primary" />
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">Создаём заметный результат с любовью к деталям и ответственностью за срок.</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contacts */}
        <section id="contact" className="bg-secondary/40 py-20 md:py-28">
          <div className="container grid lg:grid-cols-2 gap-10 items-start">
            <div data-reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold">Контакты</h2>
              <div className="mt-6 glass-card p-6 space-y-2">
                <p><span className="text-muted-foreground">Телефон:</span> <a href="tel:+7" className="story-link">+7</a></p>
                <p><span className="text-muted-foreground">Email:</span> <a href="mailto:info@kazinvestadviser.com" className="story-link">info@kazinvestadviser.com</a></p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
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

            <form ref={formRef} onSubmit={onSubmit} className="glass-card p-6 space-y-4" data-reveal aria-label="Форма обратной связи">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Имя</label>
                <input id="name" name="name" required className="w-full bg-background border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <input id="email" type="email" name="email" required className="w-full bg-background border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-1">Сообщение</label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-background border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <Button variant="hero" size="lg" type="submit">Отправить</Button>
              <p className="text-xs text-muted-foreground">Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} KazInvest Adviser</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-primary">О компании</a>
            <a href="#capabilities" className="hover:text-primary">Возможности</a>
            <a href="#contact" className="hover:text-primary">Контакты</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
