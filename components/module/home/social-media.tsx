import { SOCIAL_MEDIA } from "@/constant";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="h-full flex justify-center items-center gap-5">
      {SOCIAL_MEDIA.map((item, id) => {
        return (
          <Link href={item.href} rel="noreferrer" key={id}>
            <item.icon size={30} className="text-background" />
          </Link>
        );
      })}
    </div>
  );
}
