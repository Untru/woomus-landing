import { Check } from "lucide-react";

const plans = [
  {
    badge: "СТАРТ",
    price: "от 500 000 ₽",
    period: "Срок: от 2 недель",
    features: [
      "Площадь: до 1 000 м²",
      "До 3 000 SKU",
      "1–5 кладовщиков",
      "Базовая топология",
      "Интеграция с 1С",
      "ТСД + этикетки",
    ],
    cta: "Выбрать",
    highlighted: false,
  },
  {
    badge: "БИЗНЕС",
    price: "от 1 200 000 ₽",
    period: "Срок: от 4 недель",
    popular: true,
    features: [
      "Площадь: 1 000 — 5 000 м²",
      "До 30 000 SKU",
      "5–20 кладовщиков",
      "Расширенная топология",
      "Голосовой отбор",
      "Маркировка (Честный Знак)",
      "ИИ-тренажёр для персонала",
    ],
    cta: "Выбрать",
    highlighted: true,
  },
  {
    badge: "КОРПОРАЦИЯ",
    price: "Индивидуально",
    period: "Обсудим ваш проект",
    features: [
      "Площадь: от 5 000 м²",
      "Без ограничений SKU",
      "Неограниченно пользователей",
      "Мультисклад",
      "Биллинг 3PL",
      "Кастомные интеграции",
      "Выделенный менеджер",
    ],
    cta: "Обсудить проект",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-woomus-white px-6 lg:px-20 xl:px-[120px] py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-heading text-3xl lg:text-[40px] font-semibold text-woomus-dark tracking-tight text-center">
            Выберите масштаб вашего склада
          </h2>
          <p className="text-[#666666] font-body text-base text-center max-w-[700px]">
            Все тарифы включают: лицензию 1С:WMS, настройку, обучение, 3 месяца
            поддержки
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {plans.map((plan) => (
            <div
              key={plan.badge}
              className={`flex flex-col gap-6 p-8 ${
                plan.highlighted
                  ? "bg-woomus-navy border-2 border-woomus-teal"
                  : "bg-woomus-white border border-[#E0E0E0]"
              }`}
            >
              {/* Badge row */}
              <div className="flex items-center gap-3">
                <span
                  className={`font-heading text-[13px] font-semibold tracking-[1px] px-4 py-1.5 rounded-full ${
                    plan.highlighted
                      ? "bg-woomus-teal text-woomus-dark"
                      : "bg-woomus-gray text-woomus-navy"
                  }`}
                >
                  {plan.badge}
                </span>
                {plan.popular && (
                  <span className="bg-white/20 text-white/90 font-body text-[11px] font-medium px-2.5 py-1 rounded-full">
                    Популярный
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex flex-col gap-1">
                <span
                  className={`font-heading text-[32px] font-semibold tracking-tight ${
                    plan.highlighted ? "text-woomus-white" : "text-woomus-dark"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-body text-sm ${
                    plan.highlighted ? "text-white/65" : "text-[#666666]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`h-px w-full ${
                  plan.highlighted ? "bg-white/20" : "bg-[#E0E0E0]"
                }`}
              />

              {/* Features */}
              <div className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check
                      className={`w-4 h-4 shrink-0 ${
                        plan.highlighted
                          ? "text-woomus-teal"
                          : "text-woomus-teal"
                      }`}
                    />
                    <span
                      className={`font-body text-sm ${
                        plan.highlighted ? "text-white/80" : "text-[#666666]"
                      }`}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`h-12 flex items-center justify-center font-heading text-sm px-6 transition-all hover:brightness-110 ${
                  plan.highlighted
                    ? "bg-woomus-teal text-woomus-dark font-semibold"
                    : "bg-woomus-navy text-woomus-white font-medium"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
