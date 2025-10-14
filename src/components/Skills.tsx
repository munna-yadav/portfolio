import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const skills = {
  "Frontend": ["React","Next.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Spring Boot", "Express", "Django", "REST APIs"],
  "Tools": ["Git", "Docker", "Linux", "AWS",]
};

export default function Skills() {
  return (
    <section className="py-12 ">
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <Wrench className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Skills</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} >
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md border border-muted bg-muted text-muted-foreground dark:bg-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
