import { Card, CardContent } from "./ui/card"

export default function About(){
    return(
        <section>
            <div className="space-y-2">
            <div className="flex items-center gap-4 ps-5">
          <h2 className="text-3xl font-bold">About</h2>
        </div>
            <Card className="">
                <CardContent className="pt-6 ">
                    <p className="text-lg leading-relaxed">
                    I'm a passionate full-stack developer with a focus on clean, scalable code. Skilled in React, Spring Boot, and cloud technologies, I love building intuitive web applications. With a strong foundation in software engineering, I continuously learn and innovate to craft seamless digital experiences across the frontend and backend.
                    </p>
                </CardContent>
            </Card>
        </div>
        </section>
    )
}