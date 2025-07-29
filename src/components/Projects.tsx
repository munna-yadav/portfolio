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
        title: "Cricket Scorer",
        description: "A simple on the go cricket scoring app that allows users to keep track of runs, overs, and wickets. It provides a user-friendly interface for easy navigation and quick updates.",
        technologies: ["React", "supabase",],
        demo: "https://scorer.devmunna.xyz",
        github: "https://github.com/munna-yadav/cricket-scorer"
    },
    {
        title: "Cloud IDE",
        description: "A realtime collaborative IDE that allows users to write and run code in various programming languages. It supports multiple users working on the same project simultaneously, making it ideal for team projects and learning.",
        technologies: ["React","Express.js", "Node.js", "Socket.io"],
        demo: "https://ide.devmunna.xyz",

        github: "https://github.com/munna-yadav/cloud-ide"
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
                        <Card 
                            key={index} 
                            className="hover:shadow-lg transition-all group overflow-hidden"
                        >
                            <CardHeader>
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4 h-20 overflow-hidden">
                                    <p className="text-sm text-muted-foreground line-clamp-3 group-hover:line-clamp-none">
                                        {project.description}
                                    </p>
                                </div>
                                
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