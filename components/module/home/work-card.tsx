import { FaLink } from "react-icons/fa";
import Link from "next/link";
import Embla from "@/components/shared/embla";
import { EXPERIENCE } from "@/constant";

export default function WorkCard() {
  return (
    <Embla>
      {EXPERIENCE.map((item, id) => {
        return (
          <Link
            href={item.website || ""}
            target="_blank"
            rel="noreferrer"
            key={id}
            className="card-embla group "
          >
            <span className="flex items-center gap-3">
              <p>{item.date}</p>
              <p>{item.type}</p>
            </span>
            <div>
              <h3>{item.company}</h3>
              <FaLink className="group-hover:opacity-100" />
            </div>
          </Link>
        );
      })}
    </Embla>
  );
}
