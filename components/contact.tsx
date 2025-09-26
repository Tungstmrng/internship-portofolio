import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-pretty">
                If you have an opportunity that matches my skills and interests,
                or if you'd just like to say hello, I'd love to hear from you!
              </p>

              {/* <div className="grid sm:grid-cols-2 gap-4">
                <Button asChild size="lg" className="w-full">
                  <a href="mailto:your.email@example.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>

              <div className="flex justify-center gap-6 pt-4">
                <Button variant="ghost" size="lg" asChild>
                  <a
                    href="https://github.com/Tungstmrng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/aldo-antonio-ab1868302/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
              </div> */}
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <Button asChild size="lg">
                  <a href="mailto:antonio.aldo1005@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild aria-label="GitHub">
                  <a
                    href="https://github.com/Tungstmrng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild aria-label="LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/aldo-antonio-ab1868302/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
