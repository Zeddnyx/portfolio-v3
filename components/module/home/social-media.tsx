import { SOCIAL_MEDIA } from "@/constant";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <div className="h-full flex justify-center items-center gap-10">
        {SOCIAL_MEDIA.map((item, id) => {
          return (
            <Link href={item.href} rel="noreferrer" key={id} title={item.title}>
              <item.icon size={30} className="text-background" />
            </Link>
          );
        })}
      </div>
      <p className="text-center font-mono font-semibold text-sm">
        © {new Date().getFullYear()} Jaenudin. All Rights Reserved.
      </p>
    </div>
  );
}
