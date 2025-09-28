"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-mono">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Aldo
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-muted-foreground text-balance">
              Software Engineering student at Binus University
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I'm a passionate software developer studying Computer Science,
              with experience in full-stack development and a love for creating
              innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToProjects} size="lg" className="font-mono">
              View My Work
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/Tungstmrng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/aldo-antonio-ab1868302/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=antonio.aldo1005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-4 w-4 mr-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
