import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export const Row: FC<HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => <div {...rest} className={cn("flex gap-4", rest.className)} />;
export const Column: FC<HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => <div {...rest} className={cn("flex flex-col gap-4", rest.className)} />;