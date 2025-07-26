'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = sessionStorage.getItem('auth');
    if (!isAuth) {
      router.push('/admin');
    }
  }, []);

  return (
    <div>
      <h3>Admin Dashboard</h3>
      <p>Buraya ürün girişi, siparişler, bayiler vs. gelecek</p>
    </div>
  );
}
