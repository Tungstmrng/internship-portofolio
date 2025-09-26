import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "React",
  "Python",
  "Java",
  "C Programming",
  "HTML/CSS",
  "Git",
  "SQL",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm a Computer Science - Software Engineering student at
                Binus Bekasi. My journey in programming started in Binus
                University and since then, I've been fascinated by the endless
                possibilities of technology.
              </p>

              <p>
                I enjoy working on both frontend and backend development, with a
                particular interest in creating intuitive user experiences and
                efficient, scalable systems. I'm always eager to learn new
                technologies and tackle challenging problems.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
