import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Computer Science Student",
    company: "Binus University @Bekasi",
    period: "2023 - Present",
    description:
      "Pursuing Bachelor's degree in Computer Science - software engineering.",
    technologies: [],
  },
  {
    title: "Data Entry staff",
    company: "PT. Multi Jaya Mandiri",
    period: "2023 - 2024",
    description:
      "Responsible for accurate data entry and management using Microsoft Excel and Accurate.",
    technologies: ["Excel", "Accurate"],
  },
  {
    title: "Programming Tutor",
    company: "Personal Initiative",
    period: "2024 - Present",
    description:
      "Help students understand programming concepts and complete coursework in C and Python.",
    technologies: ["C", "Python", "Teaching", "Problem Solving"],
  },
  {
    title: "Frontend Developer",
    company: "Personal Initiative",
    period: "2023 - Present",
    description: "Developed multiple web applications for practices.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <Badge variant="outline" className="font-mono w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
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
    </section>
  );
}
