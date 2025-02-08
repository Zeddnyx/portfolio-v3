import { FaLink } from "react-icons/fa";
import Embla from "@/components/shared/embla";
import { PROJECT } from "@/constant";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <Embla>
      {PROJECT.map((item, id) => {
        return (
          <Link
            href={item.website || ""}
            target="_blank"
            rel="noreferrer"
            key={id}
            className="card-embla group "
          >
            <p>{item.client}</p>
            <div>
              <h3>{item.title}</h3>
              <FaLink className="group-hover:opacity-100" />
            </div>
          </Link>
        );
      })}
    </Embla>
  );
}
