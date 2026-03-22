import { Search, PenTool, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Аудит и анализ",
    description:
      "ИИ анализирует данные склада, выявляет узкие места и формирует план оптимизации",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Проектирование",
    description:
      "Создаём топологию склада, настраиваем зоны хранения и маршруты движения товаров",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Настройка и запуск",
    description:
      "Разворачиваем систему, настраиваем бизнес-процессы и интегрируем с вашей 1С",
  },
  {
    num: "04",
    icon: Headphones,
    title: "Обучение и поддержка",
    description:
      "Обучаем команду с помощью ИИ-тренажёра и обеспечиваем поддержку 24/7",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-woomus-gray px-6 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-heading text-3xl lg:text-[40px] font-bold text-woomus-dark tracking-tight">
            4 шага к автоматизированному складу
          </h2>
          <p className="text-[#7A7A7A] font-body text-base leading-[1.5]">
            От первого звонка до полностью работающего склада
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center gap-4 px-5"
            >
              <div className="w-12 h-12 bg-woomus-teal flex items-center justify-center">
                <span className="font-heading text-lg font-bold text-woomus-dark">
                  {step.num}
                </span>
              </div>
              <step.icon className="w-7 h-7 text-woomus-navy" />
              <h3 className="font-heading text-lg font-semibold text-woomus-dark text-center">
                {step.title}
              </h3>
              <p className="text-[#7A7A7A] font-body text-sm leading-[1.5] text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
