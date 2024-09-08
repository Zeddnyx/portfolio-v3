import Embla from "@/components/shared/embla";
import { PROJECT } from "@/constant";

export default function ProjectCard() {
  return (
    <Embla>
      {PROJECT.map((item, id) => {
        return (
          <div key={id} className="card-embla">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </Embla>
  );
}
