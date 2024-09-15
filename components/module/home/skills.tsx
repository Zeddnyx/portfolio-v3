import { SKILLS } from "@/constant";

export default function Skills() {
  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <h4 className="text-center">{"Languages & Tools I've Used"}</h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {SKILLS.map((item, id) => {
          return (
            <p key={id} className="tag">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
