export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav style={{ background: '#f2f2f2', padding: '1rem' }}>Admin Navigation</nav>
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}
