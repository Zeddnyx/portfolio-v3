import { FaLink } from "react-icons/fa";
import Embla from "@/components/shared/embla";
import { PROJECT } from "@/constant";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <Embla>
      {PROJECT.map((item, id) => {
        return (
          <div key={id} className="card-embla flex flex-col gap-2">
            <p className="tag">
              {item.client}
            </p>
            <Link
              href={item.website || ""}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <h3>{item.title}</h3>
              <FaLink className="opacity-0 group-hover:opacity-100 c_transitions text-background" />
            </Link>
            <p>{item.description}</p>
          </div>
        );
      })}
    </Embla>
  );
}
