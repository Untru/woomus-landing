const cases = [
  {
    tag: "E-commerce",
    tagColor: "bg-[#E8F5E9] text-[#2E7D32]",
    title: "Интернет-магазин одежды",
    stats: [
      { label: "Было", value: "500 заказов/день, 12% ошибок" },
      { label: "Стало", value: "1 200 заказов/день, 0.3% ошибок" },
    ],
    bottom: [
      { text: "3 недели внедрение", highlight: false },
      { text: "Экономия 2.5 млн ₽", highlight: true },
    ],
  },
  {
    tag: "Дистрибуция",
    tagColor: "bg-[#E3F2FD] text-[#1565C0]",
    title: "Дистрибьютор продуктов питания",
    stats: [
      { label: "Было", value: "Ручной учёт, потери 8% товара" },
      { label: "Стало", value: "Адресное хранение, потери < 0.1%" },
    ],
    bottom: [{ text: "5 недель внедрение", highlight: false }],
  },
  {
    tag: "3PL-оператор",
    tagColor: "bg-[#FFF3E0] text-[#E65100]",
    title: "3PL-оператор ответственного хранения",
    stats: [
      { label: "Было", value: "Excel + бумага, 3 владельца товара" },
      { label: "Стало", value: "Биллинг по 12 владельцам, прозрачно" },
    ],
    bottom: [{ text: "6 недель внедрение", highlight: false }],
  },
];

export default function Cases() {
  return (
    <section className="bg-woomus-gray px-6 lg:px-20 xl:px-[120px] py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-heading text-3xl lg:text-[40px] font-semibold text-woomus-dark tracking-tight text-center">
          Результаты наших клиентов
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-woomus-white border border-[#E0E0E0] p-8 flex flex-col gap-5"
            >
              <span
                className={`inline-block w-fit font-body text-xs font-medium px-3 py-1 rounded-full ${c.tagColor}`}
              >
                {c.tag}
              </span>
              <h3 className="font-heading text-lg font-semibold text-woomus-dark">
                {c.title}
              </h3>
              <div className="flex flex-col gap-3">
                {c.stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="font-body text-xs font-medium text-[#999999] uppercase tracking-wide">
                      {s.label}
                    </span>
                    <span className="font-body text-sm text-woomus-dark">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                {c.bottom.map((b) => (
                  <span
                    key={b.text}
                    className={`font-body text-[13px] ${
                      b.highlight
                        ? "text-woomus-teal font-semibold"
                        : "text-[#666666]"
                    }`}
                  >
                    {b.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
