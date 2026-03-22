export default function Footer() {
  return (
    <footer className="bg-woomus-dark px-6 lg:px-20 xl:px-[120px] py-12 lg:py-[60px]">
      <div className="flex flex-col gap-10">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:w-[300px] shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-woomus-teal rounded-sm flex items-center justify-center font-heading font-bold text-woomus-dark text-lg">
                W
              </div>
              <span className="text-woomus-white font-body font-bold text-xl tracking-[2px]">
                WOOMUS
              </span>
            </div>
            <p className="text-white/55 font-body text-sm max-w-[260px]">
              Автоматизируй свой склад
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 flex-1">
            <div className="flex flex-col gap-4">
              <span className="font-heading text-sm font-semibold text-woomus-white">
                Навигация
              </span>
              <a
                href="#problems"
                className="text-white/55 font-body text-sm hover:text-white transition-colors"
              >
                Преимущества
              </a>
              <a
                href="#how-it-works"
                className="text-white/55 font-body text-sm hover:text-white transition-colors"
              >
                Как работает
              </a>
              <a
                href="#pricing"
                className="text-white/55 font-body text-sm hover:text-white transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#about"
                className="text-white/55 font-body text-sm hover:text-white transition-colors"
              >
                О нас
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-heading text-sm font-semibold text-woomus-white">
                Контакты
              </span>
              <span className="text-white/55 font-body text-sm">
                +7 (XXX) XXX-XX-XX
              </span>
              <span className="text-white/55 font-body text-sm">
                info@woomus.ru
              </span>
              <span className="text-white/55 font-body text-sm">
                Telegram: @woomus
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-heading text-sm font-semibold text-woomus-white">
                Документы
              </span>
              <a
                href="#"
                className="text-white/55 font-body text-sm hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <span className="text-white/55 font-body text-sm">
                ИНН / ОГРН
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/12" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/40 font-body text-[13px]">
            © 2025 WOOMUS. Все права защищены.
          </span>
          <span className="text-white/25 font-body text-[13px]">
            Запускаем склады на 1С:WMS с ИИ
          </span>
        </div>
      </div>
    </footer>
  );
}
