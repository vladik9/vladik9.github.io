import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { RequestQuote } from "@/components/request-quote";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ChatModal } from "@/components/chat-modal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      {/* TODO: check if future if we still need this */}
      {/* Hide for moment */}
      {/* <Contact /> */}
      <RequestQuote />
      <Footer />
      <ScrollToTop />
      <ChatModal />
    </main>
  );
}
