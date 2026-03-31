import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Highlights } from "@/components/highlights";
import { Architecture } from "@/components/architecture";
import { Installation } from "@/components/installation";
import { DownloadSection } from "@/components/download";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-[0.07] blur-3xl"
          style={{
            background: "radial-gradient(circle, #0891b2, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[40%] right-0 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-3xl"
          style={{
            background: "radial-gradient(circle, #22d3ee, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[70%] left-0 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-3xl"
          style={{
            background: "radial-gradient(circle, #14b8a6, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[20%] right-1/3 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          }}
        />
      </div>

      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Highlights />
        <Architecture />
        <Installation />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
