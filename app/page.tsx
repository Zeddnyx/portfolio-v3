import About from "@/components/module/home/about";
import Card from "@/components/module/home/card";
import ImageCenter from "@/components/module/home/image-center";
import Me from "@/components/module/home/me";
import Project from "@/components/module/home/project";
import ProjectCard from "@/components/module/home/project-card";
import ViewMore from "@/components/module/home/view-more";
import Work from "@/components/module/home/work";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-row-3 gap-2 p-2 bg-background relative">
      <Card end="topLeft" delay={1}>
        <Me />
      </Card>
      <ImageCenter className="md:hidden" />
      <Card end="top" delay={1.3}>
        <About />
      </Card>
      <Card end="topRight" delay={1.6}>
        <Project />
      </Card>
      <Card end="centerLeft" delay={3}>
        <Work />
      </Card>
      <div className="absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="bg-primary animate-bounce-scale size-20 rounded-full" />
      </div>
      <ImageCenter className="hidden md:block md:col-span-2 lg:col-span-1" />
      <Card end="centerRight" delay={1.9}>
        <ProjectCard />
      </Card>
      <Card end="bottomLeft" delay={2.8} />
      <Card end="bottomCenter" delay={2.5}>
        <Me />
      </Card>
      <Card end="bottomRight" delay={2.2} className="fixed z-20">
        <ViewMore />
      </Card>
    </div>
  );
}
