export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ background: '#eee', padding: '1rem' }}>Admin Paneli</header>
      <main>{children}</main>
    </div>
  );
}
