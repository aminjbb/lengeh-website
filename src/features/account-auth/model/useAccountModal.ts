'use client';

import { useEffect, useState } from 'react';

type AccountModalModelOptions = {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (phone: string) => void;
};

export function useAccountModal({ isOpen, onClose, onLoginSuccess }: AccountModalModelOptions) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [otpCode, setOtpCode] = useState('');
  const [countdown, setCountdown] = useState(120);
  const [isAgreedNews, setIsAgreedNews] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setStep('phone');
      setOtpCode('');
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (step !== 'otp' || countdown <= 0) return;
    const timer = window.setInterval(() => setCountdown((value) => Math.max(value - 1, 0)), 1000);
    return () => window.clearInterval(timer);
  }, [step, countdown]);

  const verify = (code: string) => {
    if (code.length < 4) return;
    const validPhone = phoneNumber.trim() || 'Û°Û¹Û±Û²Û³Û´ÛµÛ¶Û·Û¸Û¹';
    onLoginSuccess(validPhone);
  };

  const sendOtp = (event: React.FormEvent) => {
    event.preventDefault();
    if (phoneNumber.trim().replace(/\s+/g, '').length >= 10) {
      setStep('otp');
      setCountdown(120);
    }
  };

  const changeOtp = (value: string) => {
    const next = value.replace(/\D/g, '').slice(0, 4);
    setOtpCode(next);
    if (next.length === 4) window.setTimeout(() => verify(next), 150);
  };

  return {
    phoneNumber, setPhoneNumber, step, setStep, otpCode, countdown,
    isAgreedNews, setIsAgreedNews, sendOtp, changeOtp,
    verifySubmit: (event: React.FormEvent) => { event.preventDefault(); verify(otpCode); },
    formatTimer: (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`,
  };
}

