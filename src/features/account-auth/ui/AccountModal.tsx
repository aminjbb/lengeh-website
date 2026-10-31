import React from 'react';
import { useAccountModal } from '../model/useAccountModal';
import { X, ArrowLeft, LogOut, User } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  userPhone?: string | null;
  onLoginSuccess: (phone: string) => void;
  onLogout?: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  userPhone,
  onLoginSuccess,
  onLogout,
}) => {
  const {
    phoneNumber, setPhoneNumber, step, setStep, otpCode, countdown,
    isAgreedNews, setIsAgreedNews, sendOtp, changeOtp, verifySubmit, formatTimer,
  } = useAccountModal({ isOpen, onClose, onLoginSuccess });
  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 overflow-hidden font-tommy"
      style={{ height: '100dvh' }}
    >
      {/* 1. Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Bottom Sheet Container: Anchored directly to bottom: 0, completely fixed and visible */}
      <div className="fixed inset-x-0 bottom-0 z-10 flex justify-center pointer-events-none pb-[env(safe-area-inset-bottom,0)]">
        <div
          className="pointer-events-auto w-full max-w-[460px] bg-white rounded-none border-t border-neutral-300 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] p-5 sm:p-6 animate-in slide-in-from-bottom duration-250 select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header: Title and Close button */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
            <h2
              className="text-[15px] sm:text-[16px] font-semibold text-[#171717] tracking-tight"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              {userPhone ? 'حساب کاربری' : 'ورود یا ثبت‌نام'}
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer rounded-none hover:bg-neutral-100"
              aria-label="بستن"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* VIEW: Already logged in user */}
          {userPhone ? (
            <div className="space-y-4 text-right">
              <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-black text-white flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 block">شما وارد شده‌اید</span>
                    <span className="text-[13px] font-mono font-medium text-black" dir="ltr">
                      {userPhone}
                    </span>
                  </div>
                </div>
              </div>

              {onLogout && (
                <button
                  type="button"
                  onClick={onLogout}
                  className="w-full h-11 border border-neutral-300 hover:border-black text-neutral-800 text-[12.5px] font-medium rounded-none transition-colors cursor-pointer flex items-center justify-center gap-2"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  <LogOut className="w-3.5 h-3.5 text-neutral-500" />
                  <span>خروج از حساب کاربری</span>
                </button>
              )}
            </div>
          ) : step === 'phone' ? (
            /* STEP 1: Phone number entry */
            <form onSubmit={sendOtp} className="space-y-3.5">
              
              {/* Phone Number Field */}
              <div className="space-y-1.5 text-right">
                <label
                  htmlFor="phone-input"
                  className="block text-[11.5px] font-medium text-neutral-600"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  شماره موبایل
                </label>
                <div className="relative">
                  <input
                    id="phone-input"
                    type="tel"
                    inputMode="numeric"
                    dir="ltr"
                    placeholder="۰۹۱۲ ۳۴۵ ۶۷۸۹"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full h-11 px-4 border border-neutral-300 focus:border-black rounded-none text-[14px] text-neutral-900 placeholder:text-neutral-400 font-mono text-center tracking-wider outline-hidden transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Submit Button: ارسال کد یکبار مصرف */}
              <button
                type="submit"
                disabled={!phoneNumber.trim()}
                className="w-full h-11 bg-[#171717] hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed text-white text-[13px] font-medium rounded-none transition-colors cursor-pointer flex items-center justify-center gap-2"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                <span>ارسال کد یکبار مصرف</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>

              {/* Checkbox: News & Offers */}
              <label className="flex items-center gap-2.5 pt-0.5 cursor-pointer select-none text-right">
                <input
                  type="checkbox"
                  checked={isAgreedNews}
                  onChange={(e) => setIsAgreedNews(e.target.checked)}
                  className="w-3.5 h-3.5 rounded-none border-neutral-300 text-black focus:ring-0 cursor-pointer accent-black"
                />
                <span
                  className="text-[11px] text-neutral-600 font-normal"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  اطلاع‌رسانی رونمایی کالکشن‌های جدید و پیشنهادهای ویژه
                </span>
              </label>
            </form>
          ) : (
            /* STEP 2: OTP Code Verification (entering 4 digits logs in and shows toast) */
            <form onSubmit={verifySubmit} className="space-y-3.5 text-right">
              <div className="text-right">
                <p className="text-[12px] text-neutral-600" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                  کد تایید ۴ رقمی پیامک‌شده به شماره <span className="font-mono font-medium text-black" dir="ltr">{phoneNumber}</span> را وارد کنید:
                </p>
              </div>

              <div>
                <input
                  type="text"
                  inputMode="numeric"
                  dir="ltr"
                  maxLength={4}
                  placeholder="• • • •"
                  value={otpCode}
                  onChange={(event) => changeOtp(event.target.value)}
                  className="w-full h-11 px-4 border border-neutral-300 focus:border-black rounded-none text-[18px] text-center font-mono tracking-[0.5em] outline-hidden transition-colors"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  className="text-neutral-500 hover:text-black underline cursor-pointer"
                >
                  ویرایش شماره
                </button>
                <span>{formatTimer(countdown)} مانده تا ارسال مجدد</span>
              </div>

              <button
                type="submit"
                disabled={otpCode.trim().length < 4}
                className="w-full h-11 bg-[#171717] hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed text-white text-[13px] font-medium rounded-none transition-colors cursor-pointer flex items-center justify-center gap-2"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                <span>تایید و ورود</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};




