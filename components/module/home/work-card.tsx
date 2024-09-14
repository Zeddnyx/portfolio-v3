import { FaLink } from "react-icons/fa";
import Link from "next/link";
import Embla from "@/components/shared/embla";
import { EXPERIENCE } from "@/constant";

export default function WorkCard() {
  return (
    <Embla>
      {EXPERIENCE.map((item, id) => {
        return (
          <div key={id} className="card-embla flex flex-col gap-2">
            <p className="tag">{item.date}</p>
            <Link
              href={item.website || ""}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <h3>{item.company}</h3>
              <FaLink className="opacity-0 group-hover:opacity-100 c_transitions text-background" />
            </Link>
          </div>
        );
      })}
    </Embla>
  );
}
