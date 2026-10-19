import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full bg-page relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(at 50% 0%, var(--page-wash-top) 0%, transparent 50%), radial-gradient(at 50% 100%, var(--page-wash-bottom) 0%, transparent 50%), radial-gradient(circle at 1px 1px, var(--page-dot) 1px, transparent 0px), repeating-linear-gradient(0deg, transparent, transparent 2px, var(--page-grain) 2px, var(--page-grain) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, var(--page-grain) 2px, var(--page-grain) 4px), repeating-linear-gradient(45deg, transparent, transparent 40px, var(--page-grain) 40px, var(--page-grain) 41px)",
          backgroundSize:
            "8px 8px, 8px 8px, 8px 8px, 32px 32px, 32px 32px, 60px 60px",
        }}
      />
      <div className="relative z-10">
        <div className="max-w-350 w-full mx-auto px-4 md:px-6 lg:px-8 relative">
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
