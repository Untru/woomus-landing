export default function ClientLogos() {
  return (
    <section className="bg-woomus-gray px-6 lg:px-20 py-12">
      <div className="flex flex-col items-center gap-6">
        <p className="font-heading text-sm font-medium text-[#7A7A7A] tracking-[1px]">
          Нам доверяют компании по всей России
        </p>
        <div className="flex items-center justify-between w-full gap-8 overflow-x-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-[120px] h-[40px] bg-[#D0D0D0] rounded shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
