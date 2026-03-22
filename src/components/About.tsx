import { Award, Handshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-woomus-white px-6 lg:px-20 xl:px-[120px] py-16 lg:py-20">
      <div className="flex flex-col gap-12">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left - text */}
          <div className="flex flex-col gap-5 flex-1">
            <h2 className="font-heading text-3xl lg:text-[40px] font-semibold text-woomus-dark tracking-tight">
              Команда WOOMUS
            </h2>
            <p className="text-[#666666] font-body text-base leading-[1.6]">
              Мы — команда инженеров и складских экспертов, которые совмещают
              глубокое знание логистики с современными ИИ-технологиями. Наша
              миссия — сделать профессиональную WMS-систему доступной для бизнеса
              любого масштаба.
            </p>
          </div>

          {/* Right - stats */}
          <div className="flex flex-col sm:flex-row gap-6 flex-1">
            <div className="flex-1 border-l-[3px] border-woomus-teal pl-4 py-6">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-bold text-woomus-dark">
                  50+
                </span>
                <span className="text-[#666666] font-body text-sm">
                  реализованных проектов
                </span>
              </div>
            </div>
            <div className="flex-1 border-l-[3px] border-woomus-teal pl-4 py-6">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-bold text-woomus-dark">
                  5+
                </span>
                <span className="text-[#666666] font-body text-sm">
                  лет в складской автоматизации
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex items-center gap-3 bg-woomus-gray px-6 py-5 flex-1">
            <Award className="w-6 h-6 text-woomus-teal shrink-0" />
            <span className="font-body text-sm text-woomus-dark">
              Сертифицированные специалисты по 1С:WMS
            </span>
          </div>
          <div className="flex items-center gap-3 bg-woomus-gray px-6 py-5 flex-1">
            <Handshake className="w-6 h-6 text-woomus-teal shrink-0" />
            <span className="font-body text-sm text-woomus-dark">
              Официальный партнёр СИТЕК (разработчик 1С:WMS)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
