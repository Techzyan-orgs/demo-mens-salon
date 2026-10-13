import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Calendar, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

interface VisitAndBookingProps {
  onOpenBooking: () => void;
}

export const VisitAndBooking: React.FC<VisitAndBookingProps> = ({ onOpenBooking }) => {
  const {
    eyebrow,
    heading,
    description,
    locationName,
    addressLine1,
    addressLine2,
    landmark,
    cityPin,
    phone,
    email,
    googleMapsEmbedUrl,
    googleMapsDirectionsUrl,
    valetNote
  } = siteConfig.visit;

  // Days of week helper for creative interactive schedule
  const weekDays = [
    { key: 'mon', short: 'MON', label: 'Monday', hours: 'Closed', note: 'Master Barber Training', open: false },
    { key: 'tue', short: 'TUE', label: 'Tuesday', hours: '10:30 AM — 8:30 PM', note: 'Full Service Appointments', open: true },
    { key: 'wed', short: 'WED', label: 'Wednesday', hours: '10:30 AM — 8:30 PM', note: 'Full Service Appointments', open: true },
    { key: 'thu', short: 'THU', label: 'Thursday', hours: '10:30 AM — 8:30 PM', note: 'Full Service Appointments', open: true },
    { key: 'fri', short: 'FRI', label: 'Friday', hours: '10:30 AM — 8:30 PM', note: 'Full Service Appointments', open: true },
    { key: 'sat', short: 'SAT', label: 'Saturday', hours: '10:30 AM — 8:30 PM', note: 'Full Service Appointments', open: true },
    { key: 'sun', short: 'SUN', label: 'Sunday', hours: '11:00 AM — 7:00 PM', note: 'Private Suite Appointments', open: true },
  ];

  // Calculate live open/closed status based on local time
  const currentStatus = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday, 2-6 is Tue-Sat
    const hours = now.getHours() + now.getMinutes() / 60;

    if (day === 1) {
      return { isOpen: false, text: 'Closed Today • Reopens Tuesday 10:30 AM' };
    } else if (day >= 2 && day <= 6) {
      if (hours >= 10.5 && hours < 20.5) {
        return { isOpen: true, text: 'Open Now • Closes at 8:30 PM' };
      } else if (hours < 10.5) {
        return { isOpen: false, text: 'Opens Today at 10:30 AM' };
      } else {
        return { isOpen: false, text: 'Closed for the Night • Opens Tomorrow 10:30 AM' };
      }
    } else { // Sunday (day === 0)
      if (hours >= 11 && hours < 19) {
        return { isOpen: true, text: 'Open Now • Closes at 7:00 PM' };
      } else {
        return { isOpen: false, text: 'Closed • Reopens Tuesday 10:30 AM' };
      }
    }
  }, []);

  // Today's index in weekDays array (Mon is index 0, Sun is index 6)
  const todayDayIdx = useMemo(() => {
    const day = new Date().getDay();
    return day === 0 ? 6 : day - 1;
  }, []);

  const [activeDayIdx, setActiveDayIdx] = useState<number>(todayDayIdx);

  return (
    <section id="visit" className="py-24 md:py-36 bg-[#101010] text-[#F4F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-xs font-sans tracking-ultra uppercase text-[#D6B477] font-medium mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F4F0E8] uppercase leading-[1.1]">
            {heading}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#8E8A85] font-sans leading-relaxed">
            {description}
          </p>
          <div className="w-16 h-[1px] bg-[#D6B477] mt-6" />
        </div>

        {/* Visit Information & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address Card */}
            <div className="bg-[#141414] border border-[#242220] p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[#D6B477] mb-4">
                <MapPin size={20} />
                <span className="font-cinzel text-sm uppercase tracking-wider text-[#F4F0E8]">
                  {locationName}
                </span>
              </div>
              <div className="text-sm text-[#C5C1B8] font-sans space-y-1 pl-8">
                <p>{addressLine1}</p>
                <p>{addressLine2}</p>
                <p className="text-xs text-[#8E8A85]">{landmark}</p>
                <p className="text-[#D6B477] pt-1">{cityPin}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222] pl-8 flex items-center gap-2 text-xs text-[#8E8A85]">
                <Car size={14} className="text-[#D6B477]" />
                <span>{valetNote}</span>
              </div>

              <div className="mt-6 pl-8">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#D6B477] hover:text-[#E8CE9E] transition-colors"
                >
                  <Navigation size={13} />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* CREATIVE OPERATING HOURS EXPERIENCE */}
            <div className="bg-[#141414] border border-[#242220] p-6 sm:p-8 relative overflow-hidden">
              {/* Subtle top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6B477]/60 to-transparent" />

              {/* Header with Live Status Indicator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <Clock size={18} className="text-[#D6B477]" />
                  <span className="font-cinzel text-sm uppercase tracking-wider text-[#F4F0E8]">
                    SALON SCHEDULE
                  </span>
                </div>

                {/* Live Status Pill */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-wider uppercase font-sans border ${
                  currentStatus.isOpen
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-[#1c1a17] border-[#D6B477]/30 text-[#D6B477]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    currentStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-[#D6B477]'
                  }`} />
                  <span>{currentStatus.text}</span>
                </div>
              </div>

              {/* Weekly Day Selector Strip */}
              <div className="mb-6">
                <div className="flex justify-between items-center bg-[#101010] p-1.5 border border-[#222]">
                  {weekDays.map((d, idx) => {
                    const isSelected = activeDayIdx === idx;
                    const isToday = todayDayIdx === idx;
                    return (
                      <button
                        key={d.key}
                        type="button"
                        onClick={() => setActiveDayIdx(idx)}
                        className={`flex-1 py-2 text-center text-[10px] font-sans font-medium transition-all relative cursor-pointer ${
                          isSelected
                            ? 'bg-[#1e1c18] text-[#D6B477] border border-[#D6B477]/60 shadow-[0_0_10px_rgba(214,180,119,0.15)]'
                            : 'text-[#8E8A85] hover:text-[#F4F0E8]'
                        }`}
                        aria-label={`View hours for ${d.label}`}
                      >
                        <span className="block">{d.short}</span>
                        {isToday && (
                          <span className="absolute -top-1 right-1 w-1 h-1 bg-[#D6B477] rounded-full" title="Today" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {/* Active day callout */}
                <div className="flex justify-between items-center text-[11px] font-sans text-[#8E8A85] mt-2 px-1">
                  <span>Viewing: <strong className="text-[#F4F0E8]">{weekDays[activeDayIdx].label}</strong></span>
                  {todayDayIdx === activeDayIdx && (
                    <span className="text-[#D6B477] text-[10px] tracking-widest uppercase flex items-center gap-1">
                      <Sparkles size={10} />
                      Today
                    </span>
                  )}
                </div>
              </div>

              {/* Selected Day Feature Box */}
              <div className="p-4 bg-[#181818] border border-[#262422] mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-[#F4F0E8] font-cinzel">
                    {weekDays[activeDayIdx].label}
                  </span>
                  <span className={`font-mono text-xs font-semibold ${
                    weekDays[activeDayIdx].open ? 'text-[#D6B477]' : 'text-[#8E8A85]'
                  }`}>
                    {weekDays[activeDayIdx].hours}
                  </span>
                </div>
                <p className="text-[11px] text-[#8E8A85] font-sans">
                  {weekDays[activeDayIdx].note}
                </p>

                {/* Creative Visual Time Tracker Bar */}
                {weekDays[activeDayIdx].open ? (
                  <div className="mt-4 pt-3 border-t border-[#222]">
                    <div className="flex justify-between text-[9px] font-mono text-[#666] mb-1">
                      <span>10:30 AM</span>
                      <span>AFTERNOON</span>
                      <span>8:30 PM</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#101010] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#B39151] via-[#D6B477] to-[#E8CE9E] w-full" />
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 pt-3 border-t border-[#222] text-[10px] text-[#8E8A85] italic">
                    Reserved for private training sessions and suite deep cleaning.
                  </div>
                )}
              </div>

              {/* Condensed Overview Strip */}
              <div className="space-y-2 text-xs border-t border-[#222] pt-4 text-[#8E8A85] font-sans">
                <div className="flex justify-between">
                  <span>Tuesday — Saturday:</span>
                  <span className="text-[#C5C1B8] font-mono">10:30 AM — 8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-[#C5C1B8] font-mono">11:00 AM — 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday:</span>
                  <span className="text-[#8E8A85]">Closed</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202020] text-[10px] text-[#8E8A85] font-sans">
                Appointments recommended. Walk-ins accommodated based on suite availability.
              </div>
            </div>

            {/* Direct Concierge Contact */}
            <div className="bg-[#141414] border border-[#242220] p-6 sm:p-8">
              <span className="text-[10px] tracking-ultra uppercase text-[#D6B477] block mb-4">
                DIRECT CONCIERGE DESK
              </span>
              <div className="space-y-3 text-sm font-sans pl-1">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#D6B477]" />
                  <a href={`tel:${phone}`} className="text-[#F4F0E8] hover:text-[#D6B477] transition-colors font-mono">
                    {phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#D6B477]" />
                  <a href={`mailto:${email}`} className="text-[#C5C1B8] hover:text-[#D6B477] transition-colors text-xs">
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map & Reservation Box */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Embedded Google Maps Container */}
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] bg-[#161616] border border-[#282624] overflow-hidden relative shadow-2xl">
              <iframe
                title="Stoic Men's Salon Ballygunge Kolkata Location"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-[#101010]/90 backdrop-blur-md border border-[#D6B477]/40 px-3.5 py-1.5 text-[10px] tracking-widest uppercase text-[#D6B477] font-medium pointer-events-none">
                Ballygunge Circular Road • Kolkata
              </div>
            </div>

            {/* Prominent Appointment Callout Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 bg-gradient-to-r from-[#181818] to-[#141414] border border-[#D6B477]/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6B477]/10 blur-[80px] pointer-events-none rounded-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] tracking-ultra text-[#D6B477] uppercase block mb-1">
                    PRIVATE SUITE RESERVATIONS
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F4F0E8] uppercase tracking-wide">
                    SECURE YOUR PRIVATE SUITE
                  </h3>
                  <p className="text-xs text-[#8E8A85] font-sans mt-2 max-w-md">
                    Private suite appointments, tailored for unhurried precision and composure.
                  </p>
                </div>

                <div className="shrink-0">
                  <MagneticButton
                    onClick={onOpenBooking}
                    variant="primary"
                    className="py-4 px-8 text-xs tracking-widestExtra w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>Reserve Now</span>
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
