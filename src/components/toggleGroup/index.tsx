"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toggleVariants = cva(
      "inline-flex items-center justify-center text-gray-400 rounded-3xl text-sm ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-lime-500 data-[state=on]:text-accent-foreground",
      {
        variants: {
          variant: {
            default: "bg-transparent",
            outline:
              "border border-stone-900 bg-transparent hover:bg-lime-500 hover:text-accent-foreground",
          },
          size: {
            default: "h-9 px-4",
            sm: "h-[22px] w-[22px] rounded-full",
            lg: "h-11 px-5",
          },
        },
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      }
    )
    
    const Toggle = React.forwardRef<
      React.ElementRef<typeof TogglePrimitive.Root>,
      React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
        VariantProps<typeof toggleVariants>
    >(({ className, variant, size, ...props }, ref) => (
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        {...props}
      />
    ))
    
    Toggle.displayName = TogglePrimitive.Root.displayName

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-2", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
