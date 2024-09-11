import { PROJECT } from "@/constant";
import Image from "next/image";

export default function AllProject() {
  return (
    <div className="container mx-auto p-5 overflow-y-scroll h-full no-scrollbar bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECT.map((item, id) => {
          return (
            <div
              key={id}
              className="border border-background bg-background rounded-xl"
            >
              <div className="w-full min-h-72 relative">
                <Image
                  src="/sunset.jpg"
                  alt="jaenudin portfolio"
                  title="jaenudin portfolio"
                  className="object-cover size-full rounded-t-xl"
                  fill
                />
              </div>
              <h2 className="p-1 pt-5">{item.title}</h2>
              <div className="flex gap-2 flex-wrap border-t border-background">
                <div className="bg-primary p-1 px-2 rounded-bl-xl rounded-tr-xl">
                  <p className="text-background font-semibold">
                    {item.client} :
                  </p>
                </div>
                <div className="p-1 flex gap-2 flex-wrap">
                  {item.stack.map((item, id) => {
                    return (
                      <div key={id}>
                        <p className="text-primary font-semibold">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
