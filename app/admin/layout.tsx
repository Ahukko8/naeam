export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="bg-white shadow-sm p-4 mb-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </nav>
        {children}
      </div>
    );
  }