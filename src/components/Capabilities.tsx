import {
  MapPin,
  Smartphone,
  Tag,
  Mic,
  Truck,
  Receipt,
  Link,
  BarChart3,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Адресное хранение",
    description: "Каждый товар имеет точный адрес на складе",
  },
  {
    icon: Smartphone,
    title: "Мобильные ТСД",
    description: "Работа с терминалами сбора данных в реальном времени",
  },
  {
    icon: Tag,
    title: "Маркировка",
    description: "Поддержка всех видов маркировки и штрихкодирования",
  },
  {
    icon: Mic,
    title: "Голосовой отбор",
    description: "Сборка заказов голосом без рук — максимальная скорость",
  },
  {
    icon: Truck,
    title: "Управление транспортом",
    description: "Планирование маршрутов и управление доставкой",
  },
  {
    icon: Receipt,
    title: "Биллинг 3PL",
    description: "Автоматический расчёт стоимости услуг для клиентов",
  },
  {
    icon: Link,
    title: "Интеграция с 1С",
    description: "Бесшовная интеграция с любой конфигурацией 1С",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Дашборды и отчёты по всем складским операциям",
  },
  {
    icon: Bell,
    title: "Оповещения",
    description: "Мгновенные уведомления о критических событиях на складе",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-woomus-white px-6 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-heading text-3xl lg:text-[40px] font-bold text-woomus-dark tracking-tight">
            Что умеет ваш новый склад
          </h2>
          <p className="text-[#7A7A7A] font-body text-base leading-[1.5]">
            Полный набор инструментов для управления складом
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-6 w-full">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {features.slice(row * 3, row * 3 + 3).map((f) => (
                <div
                  key={f.title}
                  className="border border-[#E8E8E8] p-7 flex flex-col gap-3"
                >
                  <f.icon className="w-7 h-7 text-woomus-teal" />
                  <h3 className="font-heading text-base font-semibold text-woomus-dark">
                    {f.title}
                  </h3>
                  <p className="text-[#7A7A7A] font-body text-sm leading-[1.5]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
