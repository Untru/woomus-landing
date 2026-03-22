import { ArrowRight } from "lucide-react";

const rows = [
  {
    param: "Аудит склада",
    classic: "2–4 недели, выезд команды",
    woomus: "3–5 дней, ИИ-анализ данных",
  },
  {
    param: "Проектирование топологии",
    classic: "Ручное, дорогие консультанты",
    woomus: "ИИ-моделирование за 1 день",
  },
  {
    param: "Настройка системы",
    classic: "3–6 месяцев разработки",
    woomus: "2–4 недели, шаблоны + ИИ",
  },
  {
    param: "Обучение персонала",
    classic: "Очные тренинги, 2–3 недели",
    woomus: "Онлайн с ИИ-помощником, 3 дня",
  },
];

export default function Solution() {
  return (
    <section className="bg-woomus-white px-6 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-heading text-3xl lg:text-[40px] font-bold text-woomus-dark tracking-tight">
            WOOMUS — ваш склад на автопилоте
          </h2>
          <p className="text-[#7A7A7A] font-body text-base leading-[1.5]">
            1С:WMS + ИИ-инструменты = быстрое и доступное внедрение
          </p>
        </div>

        {/* Table */}
        <div className="w-full border border-[#E8E8E8] overflow-hidden">
          {/* Header */}
          <div className="flex bg-woomus-navy">
            <div className="flex-1 px-6 py-4">
              <span className="font-heading text-sm font-semibold text-woomus-white">
                Параметр
              </span>
            </div>
            <div className="flex-1 px-6 py-4">
              <span className="font-heading text-sm font-semibold text-woomus-white">
                Классический подход
              </span>
            </div>
            <div className="flex-1 px-6 py-4 bg-woomus-teal">
              <span className="font-heading text-sm font-semibold text-woomus-dark">
                WOOMUS + AI
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row) => (
            <div
              key={row.param}
              className="flex border-b border-[#E8E8E8] last:border-b-0"
            >
              <div className="flex-1 px-6 py-4 flex items-center">
                <span className="font-body text-sm font-medium text-woomus-dark">
                  {row.param}
                </span>
              </div>
              <div className="flex-1 px-6 py-4 flex items-center">
                <span className="font-body text-sm text-[#7A7A7A]">
                  {row.classic}
                </span>
              </div>
              <div className="flex-1 px-6 py-4 flex items-center">
                <span className="font-body text-sm font-medium text-woomus-navy">
                  {row.woomus}
                </span>
              </div>
            </div>
          ))}

          {/* Cost row */}
          <div className="flex bg-[#FAFAFA]">
            <div className="flex-1 px-6 py-4 flex items-center">
              <span className="font-body text-sm font-semibold text-woomus-dark">
                Стоимость
              </span>
            </div>
            <div className="flex-1 px-6 py-4 flex items-center">
              <span className="font-body text-sm font-semibold text-[#E42313]">
                от 5 000 000 ₽
              </span>
            </div>
            <div className="flex-1 px-6 py-4 flex items-center bg-[#00D4AA22]">
              <span className="font-body text-sm font-semibold text-woomus-navy">
                от 1 500 000 ₽
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-woomus-teal text-woomus-dark font-heading text-sm font-semibold px-10 py-4 flex items-center gap-2 hover:brightness-110 transition-all"
        >
          Рассчитать стоимость для вашего склада
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
