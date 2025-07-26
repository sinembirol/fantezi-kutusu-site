'use client';

export default function AdminLoginPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Admin Giriş</h1>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label>
          Kullanıcı Adı:
          <input type="text" name="username" />
        </label>
        <label>
          Şifre:
          <input type="password" name="password" />
        </label>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Giriş Yap
        </button>
      </form>
    </main>
  );
}


