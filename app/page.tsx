import About from "@/components/module/home/about";
import Card, { ICard } from "@/components/module/home/card";
import ImageCenter from "@/components/module/home/image-center";
import Me from "@/components/module/home/me";
import Project from "@/components/module/home/project";
import ProjectCard from "@/components/module/home/project-card";
import SocialMedia from "@/components/module/home/social-media";
import Work from "@/components/module/home/work";
import WorkCard from "@/components/module/home/work-card";
import DotBounce from "@/components/module/home/dot-bounce";
import Skills from "@/components/module/home/skills";

const cardData = [
  { component: <Me />, end: "topLeft", delay: 1.7, order: "order-1" },
  { component: <About />, end: "top", delay: 2, order: "order-3 md:order-2" },
  {
    component: <Project />,
    end: "topRight",
    delay: 2.3,
    order: "order-4 md:order-5 lg:order-4",
  },
  {
    component: <Work />,
    end: "centerLeft",
    delay: 3.8,
    order: "order-7 md:order-4 lg:order-5",
  },
  {
    component: <ProjectCard />,
    end: "centerRight",
    delay: 2.6,
    order: "order-5 md:order-7 lg:order-7",
  },
  {
    component: <WorkCard />,
    end: "bottomLeft",
    delay: 3.5,
    order: "order-7 md:order-6 lg:order-7",
  },
  {
    component: <SocialMedia />,
    end: "bottomCenter",
    delay: 3.2,
    order: "order-9 md:order-8",
  },
  {
    component: <Skills />,
    end: "bottomRight",
    delay: 2.9,
    order: "order-8 md:order-9",
  },
];

export default function Page() {
  return (
    <div className="parent">
      {cardData.map(({ component, end, delay, order }, index) => (
        <Card
          key={index}
          end={end as ICard["end"]}
          delay={delay}
          className={order}
        >
          {component}
        </Card>
      ))}
      <DotBounce />
      <ImageCenter className="order-2 md:order-3 lg:order-5" />
    </div>
  );
}
