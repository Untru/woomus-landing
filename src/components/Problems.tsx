import {
  PackageX,
  Timer,
  Banknote,
  Shuffle,
  TrendingUp,
  Users,
} from "lucide-react";

const problems = [
  {
    icon: PackageX,
    title: "Потери на складе",
    description:
      "Товары теряются, пересорт растёт, инвентаризация — стресс для всей команды.",
  },
  {
    icon: Timer,
    title: "Медленная сборка",
    description:
      "Сборщики тратят время на поиск товаров и ошибаются в комплектации заказов.",
  },
  {
    icon: Banknote,
    title: "Дорогое внедрение",
    description:
      "Классические интеграторы берут миллионы и месяцы на внедрение WMS-системы.",
  },
  {
    icon: Shuffle,
    title: "Хаос в процессах",
    description:
      "Нет единых стандартов: каждый сотрудник работает по-своему, контроль невозможен.",
  },
  {
    icon: TrendingUp,
    title: "Масштабирование",
    description:
      "При росте бизнеса склад становится узким горлышком: процессы не масштабируются.",
  },
  {
    icon: Users,
    title: "Зависимость от людей",
    description:
      "Ключевые знания в головах сотрудников. Уходит человек — уходит экспертиза.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-woomus-dark-gray px-6 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-heading text-3xl lg:text-[40px] font-bold text-woomus-white tracking-tight">
            Знакомо?
          </h2>
          <p className="text-white/55 font-body text-base leading-[1.5]">
            Проблемы, с которыми сталкивается каждый склад
          </p>
        </div>

        {/* Cards grid */}
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.slice(0, 3).map((p) => (
              <ProblemCard key={p.title} {...p} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.slice(3, 6).map((p) => (
              <ProblemCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1A1A1A] border border-white/8 p-7 flex flex-col gap-4">
      <Icon className="w-7 h-7 text-[#E42313]" />
      <h3 className="font-heading text-lg font-semibold text-woomus-white">
        {title}
      </h3>
      <p className="text-white/55 font-body text-sm leading-[1.5]">
        {description}
      </p>
    </div>
  );
}
