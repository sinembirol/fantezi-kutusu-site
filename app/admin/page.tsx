'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin123') {
      sessionStorage.setItem('auth', 'true');
      router.push('/admin/dashboard');
    } else {
      alert('Hatalı şifre');
    }
  };

  return (
    <div>
      <h3>Yönetici Girişi</h3>
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş</button>
    </div>
  );
}
