import { HomeLoadingScreen } from "@/components/HomeLoadingScreen";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <HomeLoadingScreen />
      <main>
        <Hero />
      </main>
    </>
  );
}
