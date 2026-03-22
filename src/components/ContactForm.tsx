"use client";

import { Phone, Mail, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-woomus-navy px-6 lg:px-20 xl:px-[120px] py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Form */}
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="font-heading text-2xl lg:text-4xl font-semibold text-woomus-white tracking-tight">
            Рассчитаем стоимость за 30 минут
          </h2>
          <p className="text-white/75 font-body text-base leading-[1.6]">
            Оставьте заявку — мы свяжемся и подготовим индивидуальное предложение
          </p>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {/* Name + Phone row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Имя *"
                required
                className="flex-1 bg-white/8 border border-white/20 px-4 py-3 text-woomus-white placeholder-white/40 font-body text-sm outline-none focus:border-woomus-teal transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон *"
                required
                className="flex-1 bg-white/8 border border-white/20 px-4 py-3 text-woomus-white placeholder-white/40 font-body text-sm outline-none focus:border-woomus-teal transition-colors"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/8 border border-white/20 px-4 py-3 text-woomus-white placeholder-white/40 font-body text-sm outline-none focus:border-woomus-teal transition-colors"
            />

            {/* Selects row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="flex-1 bg-white/8 border border-white/20 px-4 py-3 text-white/40 font-body text-sm outline-none focus:border-woomus-teal transition-colors appearance-none">
                <option value="">Площадь склада</option>
                <option>до 500 м²</option>
                <option>500 – 1 000 м²</option>
                <option>1 000 – 3 000 м²</option>
                <option>3 000 – 5 000 м²</option>
                <option>более 5 000 м²</option>
              </select>
              <select className="flex-1 bg-white/8 border border-white/20 px-4 py-3 text-white/40 font-body text-sm outline-none focus:border-woomus-teal transition-colors appearance-none">
                <option value="">Количество SKU</option>
                <option>до 1 000</option>
                <option>1 000 – 5 000</option>
                <option>5 000 – 20 000</option>
                <option>более 20 000</option>
              </select>
            </div>

            {/* Comment */}
            <textarea
              placeholder="Комментарий"
              rows={3}
              className="w-full bg-white/8 border border-white/20 px-4 py-3 text-woomus-white placeholder-white/40 font-body text-sm outline-none focus:border-woomus-teal transition-colors resize-none"
            />

            {/* Checkbox */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-0.5 w-4 h-4 accent-woomus-teal"
              />
              <span className="text-white/55 font-body text-xs leading-[1.5]">
                Согласен на обработку персональных данных
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-woomus-teal text-woomus-dark font-heading text-sm font-semibold h-[52px] flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            >
              Отправить заявку
            </button>
          </form>
        </div>

        {/* Contacts */}
        <div className="lg:w-[320px] flex flex-col gap-8 shrink-0">
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-xl font-semibold text-woomus-white">
              Контакты
            </h3>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-woomus-teal shrink-0" />
              <span className="text-white/80 font-body text-sm">
                +7 (XXX) XXX-XX-XX
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-woomus-teal shrink-0" />
              <span className="text-white/80 font-body text-sm">
                info@woomus.ru
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Send className="w-5 h-5 text-woomus-teal shrink-0" />
              <span className="text-white/80 font-body text-sm">
                Telegram: @woomus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
