export default function Hero() {
  return (
    <section className="bg-woomus-navy px-6 lg:px-20 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[60px]">
        {/* Left text */}
        <div className="flex flex-col gap-8 flex-1 justify-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-3xl lg:text-[48px] font-bold text-woomus-white leading-[1.1] tracking-tight">
              Запускаем WMS-склады на 1С в 3 раза быстрее и дешевле
            </h1>
            <p className="text-white/65 font-body text-base lg:text-lg leading-[1.6]">
              Внедряем 1С:WMS с помощью ИИ-инструментов. Автоматизация складских
              процессов под ключ — от аудита до запуска.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-woomus-teal text-woomus-dark font-heading text-sm font-semibold px-8 py-4 text-center hover:brightness-110 transition-all"
            >
              Получить коммерческое предложение
            </a>
            <a
              href="#how-it-works"
              className="border border-woomus-white text-woomus-white font-heading text-sm font-medium px-8 py-4 text-center hover:bg-white/10 transition-all"
            >
              Смотреть демо
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 lg:gap-10">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-3xl lg:text-4xl font-bold text-woomus-teal">
                50+
              </span>
              <span className="text-white/60 font-body text-[13px]">
                складов запущено
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-3xl lg:text-4xl font-bold text-woomus-teal">
                от 2 нед.
              </span>
              <span className="text-white/60 font-body text-[13px]">
                до запуска
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-3xl lg:text-4xl font-bold text-woomus-teal">
                до 70%
              </span>
              <span className="text-white/60 font-body text-[13px]">
                экономия на внедрении
              </span>
            </div>
          </div>
        </div>

        {/* Right - Conveyor illustration */}
        <div className="w-full lg:w-[500px] h-[300px] lg:h-[400px] bg-woomus-navy/80 rounded-lg relative overflow-hidden shrink-0">
          {/* Conveyor belt */}
          <div className="absolute bottom-[100px] left-10 right-10 h-4 bg-woomus-blue rounded" />
          {/* Legs */}
          <div className="absolute bottom-[40px] left-[35px] w-3 h-[60px] bg-woomus-blue/50" />
          <div className="absolute bottom-[40px] right-[47px] w-3 h-[60px] bg-woomus-blue/50" />

          {/* Boxes */}
          <div className="absolute bottom-[116px] left-[60px] w-[60px] h-[60px] bg-woomus-teal animate-pulse" />
          <div className="absolute bottom-[116px] left-[140px] w-[50px] h-[50px] bg-woomus-teal/60" />
          <div className="absolute bottom-[116px] left-[220px] w-[70px] h-[70px] bg-woomus-teal" />
          <div className="absolute bottom-[116px] left-[310px] w-[45px] h-[45px] bg-woomus-teal/45" />
          <div className="absolute bottom-[116px] right-[65px] w-[55px] h-[60px] bg-woomus-teal" />

          {/* Robot arms */}
          <div className="absolute top-[120px] left-[100px] w-2 h-[100px] bg-woomus-blue" />
          <div className="absolute top-[110px] left-[85px] w-[38px] h-3 bg-woomus-blue" />
          <div className="absolute top-[100px] left-[260px] w-2 h-[110px] bg-woomus-blue" />
          <div className="absolute top-[90px] left-[245px] w-[38px] h-3 bg-woomus-blue" />

          {/* AI label */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-woomus-teal px-4 py-2 font-heading text-xs font-semibold text-woomus-dark">
            AI-Powered
          </div>
        </div>
      </div>
    </section>
  );
}
