export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h2>Admin Panel</h2>
          <hr />
          {children}
        </div>
      </body>
    </html>
  );
}
