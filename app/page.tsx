import About from "@/components/module/home/about";
import Card from "@/components/module/home/card";
import ImageCenter from "@/components/module/home/image-center";
import Me from "@/components/module/home/me";
import Project from "@/components/module/home/project";
import ProjectCard from "@/components/module/home/project-card";
import SocialMedia from "@/components/module/home/social-media";
import Work from "@/components/module/home/work";
import WorkCard from "@/components/module/home/work-card";
import DotBounce from "@/components/module/home/dot-bounce";
import Skills from "@/components/module/home/skills";

export default function Home() {
  return (
    <div className="h-dvh grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 bg-background relative">
      <Card end={"topLeft"} delay={1.7} className="order-1">
        <Me />
      </Card>
      <Card end="top" delay={2} className="order-3 md:order-2">
        <About />
      </Card>
      <Card
        end={"topRight"}
        delay={2.3}
        className="order-4 md:order-5 lg:order-4"
        id="project"
      >
        <Project />
      </Card>
      <Card
        end="centerLeft"
        delay={3.8}
        className="order-7 md:order-4 lg:order-5"
      >
        <Work />
      </Card>
      <DotBounce />
      <ImageCenter className={`order-2 md:order-3 lg:order-5`} />
      <Card
        end="centerRight"
        delay={2.6}
        className="order-5 md:order-7 lg:order-7"
        id="project"
      >
        <ProjectCard />
      </Card>
      <Card
        end="bottomLeft"
        delay={3.5}
        className="order-7 md:order-6 lg:order-7"
      >
        <WorkCard />
      </Card>
      <Card end="bottomCenter" delay={3.2} className="order-9 md:order-8">
        <SocialMedia />
      </Card>
      <Card
        end="bottomRight"
        delay={2.9}
        className="order-8 md:order-9"
        id="project"
      >
        <Skills />
      </Card>
    </div>
  );
}
