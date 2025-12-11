import React from "react";
import {
  Check,
  MapPin,
  Plane,
  Gift,
  CalendarDays,
  Clock,
  Users,
} from "lucide-react";

type RoomOption = {
  key: "quad" | "triple" | "double";
  label: string;
  price: string;
  highlight?: boolean;
};

type StayInfo = {
  city: string;
  nights: string;
  hotel: string;
  distance: string;
};

type Campaign = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  ribbon?: string;
  highlightColor: "ramadhan" | "tahun";
  durationLabel: string;
  dateLabel: string;
  durationTag: string;
  mainCaption?: string;
  mealInfo?: {
    label: string;
    color: string;
  };
  roomOptions: RoomOption[];
  stays: StayInfo[];
  specials: string[];
  gifts: string[];
  closingNote: string;
};

const campaigns: Campaign[] = [
  {
    id: "ramadhan-35",
    slug: "ramadhan-35",
    title: "Pakej Umrah Iktikaf Ramadhan",
    subtitle: "35 Hari • 28 Malam Mekah • 5 Malam Madinah",
    ribbon: "Hotel Dekat • 12 minit jalan kaki ke Masjidil Haram*",
    highlightColor: "ramadhan",
    durationLabel: "16 Feb 2026 – 22 Mac 2026",
    dateLabel: "(28 Syaaban – 2 Syawal 1447H)",
    durationTag: "35H 30M",
    mainCaption: "Harga tertakluk kepada kenaikan tiket & hotel",
    mealInfo: {
      label: "Pakej ini tidak termasuk makan – Makanan mudah didapati sekitar hotel",
      color: "yellow",
    },
    roomOptions: [
      {
        key: "quad",
        label: "Bilik Berempat",
        price: "RM 15,950",
        highlight: true,
      },
      {
        key: "triple",
        label: "Bilik Bertiga",
        price: "RM 17,950",
      },
      {
        key: "double",
        label: "Bilik Berdua",
        price: "RM 20,950",
      },
    ],
    stays: [
      {
        city: "Mekah",
        nights: "28 Malam",
        hotel: "Jada Ajyad @ setaraf",
        distance: "±600m ke Masjidil Haram",
      },
      {
        city: "Madinah",
        nights: "5 Malam",
        hotel: "Hotel Sky View @ setaraf",
        distance: "±250m ke Masjid Nabawi",
      },
    ],
    specials: [
      "Berpeluang Umrah berulang kali",
      "Iktikaf 10 malam terakhir",
      "Berbuka di Masjid",
      "Pengisian Tadarus & Khatam Al-Quran",
      "Bimbingan Mutawwif A–Z",
      "Visa Umrah & pengurusan asas disediakan",
    ],
    gifts: [
      "Beg 4 dalam 1 (trolley + bag tangan)",
      "Tasbih Tawaf",
      "Buku panduan ringkas",
      "Botol spray wuduk",
      "Free Insuran Kesihatan & Perjalanan*",
    ],
    closingNote:
      "Tarikh tutup pendaftaran: 31 Disember 2025 • Daftar awal untuk jimat & tempat terhad.",
  },
  {
    id: "tahun-2026",
    slug: "tahun-2026",
    title: "Pakej Umrah Tahun 2026",
    subtitle: "12 Hari 10 Malam • Makan Fullboard",
    ribbon: "Penerbangan Direct @ setaraf*",
    highlightColor: "tahun",
    durationLabel: "25 Mac – 5 Apr 2026 & 17 Jun – 28 Jun 2026",
    dateLabel: "Beberapa tarikh pilihan bergantung kekosongan",
    durationTag: "12H 10M",
    mainCaption: "Pakej sesuai untuk jemaah keluarga & rombongan kecil.",
    mealInfo: {
      label: "MAKAN FULLBOARD",
      color: "red",
    },
    roomOptions: [
      {
        key: "quad",
        label: "Bilik Berempat",
        price: "RM 7,950",
        highlight: true,
      },
      {
        key: "triple",
        label: "Bilik Bertiga",
        price: "RM 8,550",
      },
      {
        key: "double",
        label: "Bilik Berdua",
        price: "RM 9,250",
      },
    ],
    stays: [
      {
        city: "Mekah",
        nights: "5 Hari",
        hotel: "Sawa’ed Al Khair @ setaraf",
        distance: "±350m ke Masjidil Haram",
      },
      {
        city: "Taif",
        nights: "1 Hari",
        hotel: "Ghasqul Lail @ setaraf",
        distance: "Program ziarah Taif",
      },
      {
        city: "Madinah",
        nights: "4 Hari",
        hotel: "Qosru Ansar Golden Tulib @ setaraf",
        distance: "±200m ke Masjid Nabawi",
      },
    ],
    specials: [
      "Flight direct @ setaraf",
      "Visa Umrah & urusan dokumentasi",
      "Umrah 3 kali (mengikut keadaan)",
      "Masuk Raudhah 1 kali*",
      "Mutawwif Malaysia A–Z",
      "Ziarah Mekah, Madinah & Taif",
      "Insurans / takaful asas",
      "Solat Jumaat (jika tarikh berkenaan)",
      "Bimbingan mutawwif sepanjang di Tanah Suci",
    ],
    gifts: [
      "Beg 4 dalam 1",
      "Tasbih Tawaf",
      "Buku panduan",
      "Botol spray wuduk",
    ],
    closingNote:
      "Tarikh tutup pendaftaran: 60 hari sebelum berlepas • Tempat terhad, keutamaan kepada pendaftaran awal.",
  },
];

const getHeaderClasses = (type: Campaign["highlightColor"]) => {
  if (type === "ramadhan") {
    return "from-emerald-700 via-emerald-800 to-olive-900";
  }
  return "from-rose-600 via-rose-700 to-olive-900";
};

const Packages: React.FC = () => {
  return (
    <div id="packages" className="pt-28 pb-24 min-h-screen bg-sand-50 relative">
      {/* Decorative corner pattern */}

      {/* Top background band */}
      <div className="absolute top-0 inset-x-0 h-[320px] bg-olive-900 -z-10">
        <div className="absolute inset-0 bg-pattern-islamic opacity-10" />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-sand-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 text-white">
          <span className="inline-block text-sm md:text-base tracking-[0.25em] uppercase font-bold text-gold-500 mb-4">
            Pilih Pakej Umrah Anda
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight text-olive-700 mb-4">
            Pakej Jelas, Harga Jelas, Ibadah Tenang
          </h1>
          <p className="text-sm md:text-lg text-olive-700 font-light">
            Dua kempen utama kami untuk tahun akan datang. Semua maklumat utama
            disusun jelas dan mudah dibaca oleh semua peringkat umur.
          </p>
        </div>

        {/* Campaign blocks */}
        <div className="space-y-12 lg:space-y-16">
          {campaigns.map((c) => (
            <section
              key={c.id}
              aria-labelledby={c.slug}
              className="bg-white rounded-3xl shadow-2xl border border-sand-200 overflow-hidden"
            >
              {/* Poster-style header */}
              <div
                className={`relative px-5 sm:px-8 py-6 sm:py-8 md:py-10 text-white bg-gradient-to-r ${getHeaderClasses(
                  c.highlightColor
                )}`}
              >
                <div className="absolute inset-0 bg-pattern-islamic opacity-15 mix-blend-soft-light pointer-events-none" />
                <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center">
                  <div className="flex-1 space-y-2">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-xs md:text-sm tracking-[0.25em] uppercase">
                      <Plane className="w-4 h-4" />
                      Pakej Umrah
                    </p>
                    <h2
                      id={c.slug}
                      className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold leading-tight"
                    >
                      {c.title}
                    </h2>
                    <p className="text-base md:text-lg font-medium text-gold-200">
                      {c.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 text-xs md:text-sm font-medium">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30">
                        <CalendarDays className="w-4 h-4" />
                        {c.durationLabel}
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20">
                        <Clock className="w-4 h-4" />
                        {c.durationTag}
                      </span>
                      {c.dateLabel && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/10 border border-white/20 text-[11px] md:text-xs">
                          {c.dateLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right side big main price (quad) */}
                  <div className="w-full sm:w-auto lg:w-72">
                    <div className="bg-white/10 rounded-2xl border border-gold-300/60 px-5 py-4 sm:px-6 sm:py-5 text-center shadow-lg">
                      <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-gold-200">
                        Harga Dari
                      </p>
                      <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gold-100">
                        {
                          c.roomOptions.find((r) => r.highlight)?.price ??
                          c.roomOptions[0].price
                        }
                      </p>
                      <p className="mt-1 text-sm md:text-base font-semibold">
                        {
                          c.roomOptions.find((r) => r.highlight)?.label ??
                          c.roomOptions[0].label
                        }
                      </p>
                      {c.mainCaption && (
                        <p className="mt-2 text-[11px] md:text-xs opacity-90 leading-snug">
                          {c.mainCaption}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {c.ribbon && (
                  <div className="relative mt-4">
                    <div className="inline-flex items-center gap-2 bg-gold-500 text-kaabah px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                      <Users className="w-4 h-4" />
                      <span>{c.ribbon}</span>
                    </div>
                  </div>
                )}
              </div>
              {c.mealInfo && (
                <div
                  className={`w-full text-center py-2 text-xm font-bold uppercase tracking-wider ${c.mealInfo.color === "red"
                    ? "bg-red-600 text-white"
                    : "bg-gold-400 text-black"
                    }`}
                >
                  {c.mealInfo.label}
                </div>
              )}

              {/* Main content: mobile-first, stacked */}
              <div className="px-5 sm:px-8 py-8 sm:py-10 space-y-8">
                {/* Room prices row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {c.roomOptions.map((room) => (
                    <div
                      key={room.key}
                      className={`relative rounded-2xl px-5 py-5 md:px-6 md:py-6 text-center shadow-md border-2 transition-transform ${room.highlight
                        ? "bg-gradient-to-b from-gold-500 to-gold-600 border-gold-700 text-white scale-[1.03]"
                        : "bg-sand-50 border-sand-300 text-olive-900"
                        }`}
                    >
                      {room.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-olive-900 text-[11px] md:text-xs tracking-[0.18em] text-white px-3 py-1 rounded-full shadow-lg uppercase">
                          Paling JIMAT
                        </div>
                      )}
                      <p className="text-sm md:text-base font-bold uppercase">
                        {room.label}
                      </p>
                      <p className="mt-2 text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
                        {room.price}
                      </p>
                      <p className="mt-2 text-[11px] md:text-xs opacity-80">
                        Harga seorang • Berkongsi bilik
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stays & benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10">
                  {/* Left: Stay info & features */}
                  <div className="space-y-6">
                    {/* Stays - horizontally scrollable on mobile */}
                    <div className="bg-mint-100 rounded-2xl border border-mint-300/70 p-5 sm:p-6">
                      <p className="text-base md:text-lg font-bold text-olive-900 mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gold-600" />
                        Penginapan
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 overflow-x-auto scrollbar-thin pb-1">
                        {c.stays.map((stay) => (
                          <div
                            key={stay.city}
                            className="min-w-[220px] sm:min-w-0 flex-1 bg-white rounded-2xl border border-sand-200 px-4 py-4"
                          >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-olive-700">
                              {stay.city} • {stay.nights}
                            </p>
                            <p className="mt-2 text-base font-semibold text-olive-900">
                              {stay.hotel}
                            </p>
                            <p className="mt-1 text-sm text-olive-800">
                              {stay.distance}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specials & gifts in two columns on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl border border-sand-200 shadow-sm p-6 sm:p-7">
                        <p className="text-base md:text-lg font-bold text-olive-900 mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-gold-600" />
                          Istimewa
                        </p>
                        <ul className="space-y-3">
                          {c.specials.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-base text-olive-900"
                            >
                              <span className="mt-1">
                                <Check className="w-4 h-4 text-gold-600" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-2xl border border-sand-200 shadow-sm p-6 sm:p-7">
                        <p className="text-base md:text-lg font-bold text-olive-900 mb-4 flex items-center gap-2">
                          <Gift className="w-5 h-5 text-gold-600" />
                          Cenderahati
                        </p>
                        <ul className="space-y-3">
                          {c.gifts.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-base text-olive-900"
                            >
                              <span className="mt-1">
                                <Gift className="w-4 h-4 text-gold-600" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA and notes */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-olive-900 text-sand-50 rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
                      <p className="text-lg md:text-xl font-serif font-semibold">
                        Berminat dengan pakej ini?
                      </p>
                      <p className="text-sm md:text-base text-sand-100">
                        Tekan butang di bawah, isi maklumat ringkas, dan team
                        Hijrah HQ akan hubungi anda untuk penerangan penuh.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 mt-1">
                        <a
                          href="#contact"
                          className="w-full inline-flex items-center justify-center rounded-full bg-gold-500 hover:bg-gold-600 text-kaabah font-bold text-base md:text-lg py-3.5 sm:py-4 px-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                        >
                          Daftar Minat Sekarang
                        </a>
                        <a
                          href="https://wa.me/6044594207"
                          className="w-full inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-gold-400 text-sand-50 font-semibold text-base md:text-lg py-3.5 sm:py-4 px-4 gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                        >
                          <Users className="w-5 h-5" />
                          Panggilan Pantas
                        </a>
                      </div>

                      <p className="text-[11px] md:text-xs text-sand-200 leading-relaxed mt-1">
                        *Tertakluk kepada terma & syarat. Sila rujuk pihak
                        pejabat Hijrah al Haramain HQ untuk maklumat rasmi dan
                        terkini.
                      </p>
                    </div>

                    <div className="bg-sand-50 border border-gold-200 rounded-2xl p-5 sm:p-6 text-sm md:text-base text-olive-900">
                      <p className="font-semibold mb-2">Maklumat Penting</p>
                      <p className="leading-relaxed">{c.closingNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Group / custom section */}
        <div className="mt-14 md:mt-16 bg-white border border-gold-200 rounded-3xl p-7 md:p-10 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-islamic-card opacity-10 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-olive-900">
              Rombongan Khas & Pakej Keluarga
            </h2>
            <p className="text-sm md:text-base text-olive-900 max-w-2xl mx-auto">
              Untuk rombongan keluarga besar, group masjid, organisasi atau
              syarikat, kami boleh susun tarikh & aturcara khas mengikut
              keperluan anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-olive-900 hover:bg-olive-800 text-white font-bold text-base md:text-lg py-3.5 px-8 shadow-lg"
              >
                Mohon Sebut Harga Khas
              </a>
              <a
                href="https://wa.me/6044594207"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sand-100 hover:bg-gold-500 text-olive-900 hover:text-kaabah font-semibold text-base md:text-lg py-3.5 px-8 border border-gold-400"
              >
                WhatsApp Terus Hijrah HQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
