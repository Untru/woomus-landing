import { Bot, BarChart3, GraduationCap } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "ИИ заменяет рутину",
    description:
      "Автоматический аудит, генерация топологий и настройка бизнес-правил без ручного труда консультантов",
  },
  {
    icon: BarChart3,
    title: "Данные вместо догадок",
    description:
      "ИИ анализирует реальные данные вашего склада и принимает оптимальные решения с первого раза",
  },
  {
    icon: GraduationCap,
    title: "Обучение без простоев",
    description:
      "ИИ-тренажёр обучает персонал в процессе работы, без остановки складских операций",
  },
];

const stats = [
  { value: "до 70%", label: "экономия" },
  { value: "в 3 раза", label: "быстрее" },
  { value: "от 2 нед.", label: "до запуска" },
  { value: "24/7", label: "поддержка" },
];

export default function AISavings() {
  return (
    <section className="bg-woomus-navy px-6 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-heading text-3xl lg:text-[40px] font-bold text-woomus-white tracking-tight text-center">
            Почему с нами дешевле — и это не демпинг
          </h2>
          <p className="text-white/65 font-body text-base leading-[1.5]">
            ИИ-инструменты позволяют делать больше за меньшее время
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white/5 border border-white/8 p-8 flex flex-col gap-4"
            >
              <b.icon className="w-8 h-8 text-woomus-teal" />
              <h3 className="font-heading text-lg font-semibold text-woomus-white">
                {b.title}
              </h3>
              <p className="text-white/65 font-body text-sm leading-[1.5]">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row w-full bg-white/4 border border-white/8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 flex flex-col items-center gap-1 py-8 px-6 ${
                i < stats.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-white/6"
                  : ""
              }`}
            >
              <span className="font-heading text-3xl lg:text-[40px] font-bold text-woomus-teal tracking-tight">
                {s.value}
              </span>
              <span className="text-white/65 font-body text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
