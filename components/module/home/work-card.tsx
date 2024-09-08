import Embla from "@/components/shared/embla";
import { EXPERIENCE } from "@/constant";

export default function WorkCard() {
  return (
    <Embla>
      {EXPERIENCE.map((item, id) => {
        return (
          <div key={id} className="card-embla">
            <p>{item.date}</p>
            <h3>{item.title}</h3>
            <div className="pt-2 flex gap-2 items-center flex-wrap">
              {item.tags.map((item, id) => {
                return (
                  <p
                    className="text-sm md:text-base bg-background text-primary p-1 px-2 rounded-full"
                    key={id}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </Embla>
  );
}
