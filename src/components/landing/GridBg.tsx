import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    children: React.ReactNode
}

export function GridBg({children}:Props) {
  return (
    <div className="relative w-full items-center justify-center bg-[#476260] dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "opacity-10",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {children}

    </div>
  );
}