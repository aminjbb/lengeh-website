'use client';

import { useEffect, useState } from 'react';

export function useAppSession() {
  const [userPhone, setUserPhone] = useState<string | null>(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserPhone(window.localStorage.getItem('lengeh_user_phone'));
    setUserName(window.localStorage.getItem('lengeh_user_name') || '');
  }, []);

  const updateName = (name: string) => { setUserName(name); try { window.localStorage.setItem('lengeh_user_name', name); } catch {} };
  const login = (phone: string) => { setUserPhone(phone); try { window.localStorage.setItem('lengeh_user_phone', phone); } catch {} };
  const logout = () => { setUserPhone(null); try { window.localStorage.removeItem('lengeh_user_phone'); } catch {} };

  return { userPhone, userName, updateName, login, logout };
}


