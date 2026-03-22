"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "Что такое 1С:WMS?",
    answer:
      "1С:WMS Логистика — это профессиональная система управления складом от компании СИТЕК. Она позволяет управлять приёмкой, размещением, хранением, отбором и отгрузкой товара в режиме реального времени с помощью ТСД.",
  },
  {
    question: "Как ИИ помогает снизить стоимость?",
    answer:
      "ИИ автоматизирует самые трудоёмкие этапы внедрения: аудит склада, проектирование топологии, генерацию настроек и обучение персонала. Это сокращает человеко-часы в 3–5 раз — экономия передаётся вам.",
  },
  {
    question: "У нас уже есть 1С. Будет ли интеграция?",
    answer:
      "Да. 1С:WMS штатно интегрируется с 1С:ERP, Управлением торговлей (УТ), Комплексной автоматизацией (КА) и 1С:TMS. Мы настроим обмен данными под ваши процессы.",
  },
  {
    question: "Какое оборудование нужно?",
    answer:
      "Минимально: сервер (или облако) для 1С:WMS, терминалы сбора данных (ТСД), принтер этикеток. Мы поможем подобрать оборудование под бюджет.",
  },
  {
    question: "Можно ли запустить WMS на часть склада?",
    answer:
      "Да, это частая практика. Можно начать с одной зоны или одного процесса (например, отгрузка) и постепенно масштабировать.",
  },
  {
    question: "Что будет после запуска?",
    answer:
      "Все тарифы включают 3 месяца поддержки. Далее — опциональный договор SLA. Плюс ИИ-чатбот для персонала работает 24/7 бессрочно.",
  },
  {
    question: "Вы работаете по всей России?",
    answer:
      "Да. Аудит и настройка проводятся удалённо (ИИ-инструменты позволяют). При необходимости — выезд на объект.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-woomus-gray px-6 lg:px-20 xl:px-[120px] py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-heading text-3xl lg:text-[40px] font-semibold text-woomus-dark tracking-tight text-center">
          Частые вопросы
        </h2>

        <div className="w-full max-w-[800px] flex flex-col">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-[#CBCCC9]">
              <button
                className="w-full flex items-center justify-between py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-heading text-base font-medium text-woomus-dark leading-[1.5] pr-4">
                  {item.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="w-4 h-4 text-[#666666] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#666666] shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="pb-4">
                  <p className="font-body text-sm text-[#666666] leading-[1.5]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
