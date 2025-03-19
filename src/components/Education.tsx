import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech",
    school: "SET, Jain University",
    location: "Bengaluru, India",
    year: "2022-2026",
    CGPA: "8.7",
    description: "Specialized in Cloud Computing and Mobile Application Development",
  },
];

export default function Education() {
  return (
    <section>
      <div className="space-y-2 ">
        <div className="flex items-center gap-4">
          <GraduationCap className="h-8 w-8" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-1">
              <CardHeader>
                <div className="flex justify-between">
                    <h3 className="  text-xl font-semibold">{edu.school}</h3>
                    <div className="flex items-center gap-1 rounded-md border border-muted px-2 py-1 bg-muted dark:bg-zinc-700">
                    <CalendarDays className="h-4 w-4 " />
                    <span>{edu.year}</span>
              </div>
              </div>
                </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span className="font-semibold">{edu.degree}</span>
                
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                 
                </div>
                <div>
                  <span className="font-semibold">CGPA: {edu.CGPA}</span>
                  </div>
                <p className="pt-1">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
