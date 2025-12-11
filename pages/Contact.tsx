import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Send, Map as MapIcon } from 'lucide-react';
import CardPattern from '../components/CardPattern';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', inquiryType: 'General Inquiry', message: '' });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-sand-50 font-sans relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-olive-900 mb-4">Hubungi Kami untuk Perjalanan Rohani Anda</h1>
          <p className="text-olive-600 text-lg font-light">
            Kami di sini untuk membantu Anda dengan rencana perjalanan Anda untuk Umrah dan Hajj.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">

          {/* LEFT COLUMN: Inquiry Form */}
          <div className="w-full lg:w-7/12 relative">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 relative overflow-hidden border border-sand-200">
              {/* Card Pattern */}
              <CardPattern />

              <h2 className="text-3xl font-serif text-gold-500 mb-8 relative z-10">Borang Pertanyaan
              </h2>

              {isSubmitted ? (
                <div className="bg-mint-100 border border-mint-200 text-olive-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="bg-white p-4 rounded-full text-green-600 shadow-sm mb-4"><Send size={32} /></div>
                  <p className="font-serif font-bold text-2xl mb-2">Pertanyaan Diterima</p>
                  <p className="opacity-80">Jazakallah Khair. Kami akan menghubungi anda semula.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-olive-900">Nama Penuh</label>
                      <input
                        type="text" id="name" name="name" required
                        value={formData.name} onChange={handleChange}
                        className="w-full px-5 py-3 rounded-full border border-olive-200 bg-white focus:border-olive-600 focus:ring-1 focus:ring-olive-600 outline-none transition-all placeholder-gray-400"
                        placeholder=""
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-olive-900">Alamat Email</label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full px-5 py-3 rounded-full border border-olive-200 bg-white focus:border-olive-600 focus:ring-1 focus:ring-olive-600 outline-none transition-all placeholder-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-500">Nombor Telefon <span className="font-normal text-xs">(optional)</span></label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={handleChange}
                        className="w-full px-5 py-3 rounded-full border border-olive-200 bg-white focus:border-olive-600 focus:ring-1 focus:ring-olive-600 outline-none transition-all placeholder-gray-400"
                        placeholder=""
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <label htmlFor="inquiryType" className="block text-sm font-bold text-olive-900">Jenis Pertanyaan</label>
                      <div className="relative">
                        <select
                          id="inquiryType" name="inquiryType"
                          value={formData.inquiryType} onChange={handleChange}
                          className="w-full px-5 py-3 rounded-full border border-olive-600 bg-white focus:border-olive-800 outline-none transition-all text-gray-700 appearance-none"
                        >
                          <option>Pertanyaan Umum</option>
                          <option>Umrah Pakej</option>
                          <option>Hajj Pakej</option>
                          <option>Lawatan Khas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-olive-900">Mesej / Permintaan Khas</label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={formData.message} onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-olive-200 bg-white focus:border-olive-600 focus:ring-1 focus:ring-olive-600 outline-none transition-all placeholder-gray-400 resize-none"
                      placeholder="Terangkan lebih lanjut tentang pertanyaan anda..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-olive-700 hover:bg-olive-800 text-white font-medium text-lg rounded-full shadow-lg transition-colors duration-300"
                    >
                      Hantar Permintaan
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Get in Touch */}
          <div className="w-full lg:w-4/12 relative">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 relative overflow-hidden h-full flex flex-col border border-sand-200">
              {/* Card Pattern */}
              <CardPattern />

              <h2 className="text-3xl font-serif text-gold-500 mb-8 relative z-10">Hubungi Kami</h2>

              <div className="space-y-6 relative z-10 mb-8">
                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-olive-700 flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Phone size={18} fill="currentColor" className="text-white" />
                  </div>
                  <span className="text-olive-900 font-medium">+60 4 594207</span>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-olive-700 flex items-center justify-center shrink-0 text-white shadow-sm">
                    <div className="scale-110">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    </div>
                  </div>
                  <span className="text-olive-900 font-medium">+60 4 594207</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-olive-700 flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Mail size={18} />
                  </div>
                  <span className="text-olive-900 font-medium break-all">info@alaminhaji.com</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-olive-700 flex items-center justify-center shrink-0 text-white shadow-sm mt-1">
                    <MapPin size={18} fill="currentColor" />
                  </div>
                  <span className="text-olive-900 font-medium leading-tight">A8,(Tingkat Atas) Jalan Semeling Maju 1,Taman Semeling Setia, 08100 Bedong, Kedah Darul Aman, Malaysia</span>
                </div>
              </div>

              {/* Social Media Row */}
              <div className="flex gap-6 mb-8 relative z-10 pl-2">
                <a href="#" className="text-olive-700 hover:text-gold-500 transition-colors transform hover:scale-110"><Facebook size={28} fill="currentColor" className="border-none" /></a>
                <a href="#" className="text-olive-700 hover:text-gold-500 transition-colors transform hover:scale-110"><Twitter size={28} fill="currentColor" className="border-none" /></a>
                <a href="#" className="text-olive-700 hover:text-gold-500 transition-colors transform hover:scale-110"><Instagram size={28} /></a>
                <a href="#" className="text-olive-700 hover:text-gold-500 transition-colors transform hover:scale-110"><Youtube size={28} fill="currentColor" /></a>
              </div>

              {/* Map Card */}
              <div className="mt-auto relative z-10">
                <div className="h-48 rounded-xl overflow-hidden border border-gold-400/50 shadow-md relative group">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.042663813387!2d100.47069757581477!3d5.706976332111344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b29cf1966531d%3A0x11f47a1d86270429!2sHIJRAH%20AL%20HARAMAIN%20TRAVEL%20%26%20TOURS%20SDN.%20BHD.!5e0!3m2!1sen!2sus!4v1765308447269!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter opacity-90 group-hover:opacity-100 transition-opacity"
                  ></iframe>

                  {/* View Map Overlay Button */}
                  <a
                    href="https://maps.app.goo.gl/oDmD1pXCNvsdHAfW6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 left-2 bg-white px-3 py-1.5 rounded shadow-sm text-xs font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    View map <span className="text-blue-500">etipa</span>
                  </a>

                  {/* Fake Zoom Controls */}
                  <div className="absolute bottom-2 right-2 flex flex-col gap-1 bg-white rounded shadow-sm p-0.5">
                    <button className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-bold">+</button>
                    <div className="h-[1px] bg-gray-200 w-full"></div>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-bold">-</button>
                  </div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 px-1">
                  <span className="text-blue-500 font-bold"><span className="text-blue-600">G</span>oogle</span>
                  <span>Map data ©2024 Google</span>
                  <span>Terms of Use</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;