import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-blue-600 text-white p-4">Admin Header</header>
      <main className="p-4">{children}</main>
    </div>
  );
}
