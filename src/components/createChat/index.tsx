import { FC, HTMLAttributes } from "react"
import { Column } from "../atoms/layout"
import { cn } from "@/lib/utils"

const CreateChat: FC<HTMLAttributes<HTMLDivElement>> = ({...props}) => {
      return (
            <Column {...props} className={cn("flex gap-4", props.className)}>
                  {props.children}
            </Column>
      )
}


export {
      CreateChat
}