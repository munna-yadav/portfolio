import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FolderGit2, Globe, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Blogger",
        description: "This is a simple blog website made with Django. Users can sign up, write blogs with images, and read what others post. Each blog shows the author, date, and how long it takes to read. The design is clean and easy to use, making it great for sharing thoughts online.",
        technologies: ["Python", "Django", "Sqlite3"],
        demo: "https://devmunna.pythonanywhere.com",
        github: "https://github.com/munna-yadav/blogger"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates",
        technologies: ["React", "Express", "Socket.io"],
        demo: "https://taskmanager-demo.example.com",
        github: "https://github.com/username/taskmanager"
    },
    {
        title: "Weather Dashboard",
        description: "A weather forecasting application with interactive maps",
        technologies: ["React", "OpenWeather API", "Mapbox"],
        demo: "https://weather-demo.example.com",
        github: "https://github.com/username/weather"
    }
];

export default function Projects() {
    return (
        <section>
            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <FolderGit2 className="h-8 w-8" />
                    <h2 className="text-3xl font-bold">Projects</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1 bg-blue-900" asChild>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <Globe className="h-4 w-4 mr-2" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1 bg-amber-50 text-black" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4 mr-2" />
                                            GitHub
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}