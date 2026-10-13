import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const { title, subtitle, submitLabel, whatsappBookingLabel, successTitle, successMessage, timeSlots, barbers } =
    siteConfig.bookingModal;
  const services = siteConfig.services.items;

  // Form state
  const [selectedService, setSelectedService] = useState<string>(
    preselectedServiceId || services[0]?.id || ''
  );
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0] || '11:45 AM');
  const [selectedBarber, setSelectedBarber] = useState<string>(barbers[0]?.id || 'any');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Update selected service if preselectedServiceId changes
  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  // Set default date to tomorrow in YYYY-MM-DD
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const activeServiceObj = services.find(s => s.id === selectedService) || services[0];
  const activeBarberObj = barbers.find(b => b.id === selectedBarber) || barbers[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `${siteConfig.brand.monogram}-` + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `*${siteConfig.brand.name} RESERVATION REQUEST*\n` +
      `--------------------------------\n` +
      `• *Ritual:* ${activeServiceObj?.name} (₹${activeServiceObj?.priceINR})\n` +
      `• *Date:* ${selectedDate}\n` +
      `• *Time:* ${selectedTime}\n` +
      `• *Craftsman:* ${activeBarberObj?.name}\n` +
      `• *Guest:* ${guestName || 'Distinguished Patron'}\n` +
      `• *Contact:* ${guestPhone || 'Provided on confirmation'}\n` +
      (specialNotes ? `• *Notes:* ${specialNotes}\n` : '') +
      `--------------------------------\n` +
      `Kindly confirm my private suite availability.`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp.phoneNumberDigits}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#141414] border border-[#D6B477]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden my-8 z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#242220] bg-[#111]">
            <div>
              <span className="text-[10px] tracking-ultra text-[#D6B477] uppercase block mb-1">
                {siteConfig.brand.name} • BALLYGUNGE
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl text-[#F4F0E8] uppercase tracking-wide">
                {isSubmitted ? successTitle : title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#8E8A85] hover:text-[#D6B477] transition-colors focus:outline-none"
              aria-label="Close booking modal"
            >
              <X size={22} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-xs text-[#8E8A85] font-sans">
                  {subtitle}
                </p>

                {/* 1. Ritual Selection */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-[#D6B477] mb-2 font-medium">
                    1. Select Grooming Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s) => {
                      const isSelected = selectedService === s.id;
                      return (
                        <div
                          key={s.id}
                          onClick={() => setSelectedService(s.id)}
                          className={`p-3.5 border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#1e1c18] border-[#D6B477] shadow-[0_0_15px_rgba(214,180,119,0.15)]'
                              : 'bg-[#181818] border-[#282624] hover:border-[#444]'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-cinzel text-xs text-[#F4F0E8] uppercase font-semibold">
                              {s.name}
                            </span>
                            <span className="font-mono text-xs text-[#D6B477]">
                              ₹{s.priceINR.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#8E8A85] block mt-1 font-sans">
                            {s.duration} • {s.subtitle}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-[#D6B477] mb-2 font-medium">
                      2. Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-[#181818] border border-[#282624] text-[#F4F0E8] text-xs px-3.5 py-3 focus:outline-none focus:border-[#D6B477]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-[#D6B477] mb-2 font-medium">
                      3. Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-[#181818] border border-[#282624] text-[#F4F0E8] text-xs px-3.5 py-3 focus:outline-none focus:border-[#D6B477]"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-[#181818] text-[#F4F0E8]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Master Craftsman Preference */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-[#D6B477] mb-2 font-medium">
                    4. Master Craftsman
                  </label>
                  <select
                    value={selectedBarber}
                    onChange={(e) => setSelectedBarber(e.target.value)}
                    className="w-full bg-[#181818] border border-[#282624] text-[#F4F0E8] text-xs px-3.5 py-3 focus:outline-none focus:border-[#D6B477]"
                  >
                    {barbers.map((b) => (
                      <option key={b.id} value={b.id} className="bg-[#181818] text-[#F4F0E8]">
                        {b.name} — {b.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Guest Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-[#D6B477] mb-2 font-medium">
                      Guest Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samarjit Ray"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-[#181818] border border-[#282624] text-[#F4F0E8] text-xs px-3.5 py-3 focus:outline-none focus:border-[#D6B477] placeholder-[#555]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-[#D6B477] mb-2 font-medium">
                      Contact Phone (Mobile)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 74393 00000"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-[#181818] border border-[#282624] text-[#F4F0E8] text-xs px-3.5 py-3 focus:outline-none focus:border-[#D6B477] placeholder-[#555]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-[#D6B477] mb-2 font-medium">
                    Beverage & Suite Preferences (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Single malt scotch, quiet suite preference"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full bg-[#181818] border border-[#282624] text-[#F4F0E8] text-xs px-3.5 py-3 focus:outline-none focus:border-[#D6B477] placeholder-[#555]"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#242220] flex flex-col sm:flex-row items-center gap-3">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="w-full sm:flex-1 py-4 text-xs tracking-widest"
                  >
                    {submitLabel}
                  </MagneticButton>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1b261d] hover:bg-[#233527] border border-[#3b5c40] text-[#78d689] px-6 py-3.5 text-xs font-sans uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    <span>{whatsappBookingLabel}</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success Voucher State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full border border-[#D6B477] bg-[#1a1814] flex items-center justify-center mx-auto text-[#D6B477]">
                  <CheckCircle size={32} />
                </div>

                <div>
                  <span className="font-mono text-xs text-[#8E8A85] tracking-widest block mb-1">
                    RESERVATION REFERENCE
                  </span>
                  <span className="font-cinzel text-2xl text-[#D6B477] font-bold tracking-wider">
                    {confirmationCode}
                  </span>
                </div>

                {/* Summary voucher card */}
                <div className="bg-[#181818] border border-[#282624] p-6 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between border-b border-[#222] pb-2">
                    <span className="text-[#8E8A85]">Service:</span>
                    <span className="text-[#F4F0E8] font-cinzel">{activeServiceObj?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#222] pb-2">
                    <span className="text-[#8E8A85]">Date & Time:</span>
                    <span className="text-[#F4F0E8] font-mono">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#222] pb-2">
                    <span className="text-[#8E8A85]">Master Craftsman:</span>
                    <span className="text-[#F4F0E8]">{activeBarberObj?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#222] pb-2">
                    <span className="text-[#8E8A85]">Reserved For:</span>
                    <span className="text-[#F4F0E8]">{guestName} ({guestPhone})</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#8E8A85]">Tariff:</span>
                    <span className="text-[#D6B477] font-semibold">₹{activeServiceObj?.priceINR.toLocaleString('en-IN')} (Inclusive)</span>
                  </div>
                </div>

                <p className="text-xs text-[#C5C1B8] font-sans max-w-md mx-auto leading-relaxed">
                  {successMessage}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="inline-flex items-center gap-2 bg-[#1b261d] hover:bg-[#233527] border border-[#3b5c40] text-[#78d689] px-6 py-3 text-xs font-sans uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <MessageSquare size={14} />
                    <span>Forward to WhatsApp Concierge</span>
                  </button>

                  <MagneticButton
                    onClick={onClose}
                    variant="secondary"
                    className="py-3 px-8 text-xs tracking-widest"
                  >
                    Done
                  </MagneticButton>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
