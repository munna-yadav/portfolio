import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Mail, Linkedin, Instagram, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import resume from '../assets/resume.pdf'

export default function Introduction() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center ">
      <div className="flex flex-col items-center gap-6 bg-muted dark:bg-zinc-750 ">
        <Avatar className="w-64 h-64">
          <AvatarImage src="profile.jpg" alt="Profile" className="object-cover w-full h-full"/>
          <AvatarFallback>MY</AvatarFallback>
        </Avatar>
        <div className="flex gap-3">
          <Button size="icon" variant="ghost" asChild className="rounded-md border border-muted">
            <a href="mailto:mail.munna50@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild className=" rounded-md border border-muted ">
            <a href="https://github.com/munna-yadav" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild className="rounded-md border border-muted">
            <a href="https://www.linkedin.com/in/muna-yadav-24b87a250" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild className="rounded-md border border-muted">
            <a href="https://instagram.com/munnayadav378" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
          <Button size="icon" variant='ghost' asChild className="rounded-md border border-muted">
            <a href={resume} download="resume.pdf">
              <FileText className="h-5 w-5" />
              </a>
          </Button>
        </div>
      </div>
      <div className="space-y-2">
  <h1 className="text-4xl font-bold ">Muna Yadav</h1>
  <p className="text-muted font-mono text-s">
    A student and full stack developer with a passion for developing quality products.
  </p>
  <p className="text-xl">🌐 Bengaluru,India</p>
</div>

    </section>
  );
}