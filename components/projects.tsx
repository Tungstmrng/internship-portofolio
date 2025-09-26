import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cristian Wijaya",
    description:
      "A full-stack e-commerce application with a modern user interface.",
    image: "/CWhero.png",
    technologies: ["HTML/CSS", "Javascript"],
    github: "https://github.com/Tungstmrng/Christian-Wijaya",
    demo: "https://your-ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    title: "Emotion Detection",
    description:
      "An emotion detection app using machine learning to analyze facial expressions in real-time.",
    image: "/MLp.png",
    technologies: ["Python", "Flask"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    title: "Kopi Tikungan",
    description:
      "A self project website for a local coffee shop, showcasing their menu and ambiance.",
    image: "/kopipj.png",
    technologies: ["HTML", "Javascript", "CSS"],
    github: "https://github.com/Tungstmrng/kopi-tikungan-website",
    demo: "https://your-weather-demo.vercel.app",
    featured: true,
  },
  {
    title: "Eco AI",
    description:
      "An AI-powered platform that provides mental health support and resources.",
    image: "/eco ai.png",
    technologies: ["React", "HTML/CSS", "JavaScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
    featured: true,
  },
];

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one taught me
              something new and helped me grow as a developer.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      {project.title}
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
