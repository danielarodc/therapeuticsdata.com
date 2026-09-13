import { LandingPage } from "@/components/landing/LandingPage";
import { content } from "@/lib/content";

export default function Home() {
  return <LandingPage content={content.en} />;
}
