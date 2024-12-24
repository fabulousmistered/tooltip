import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Link, ExternalLink, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface TooltipContentProps {
  title?: string;
  description?: string;
  links?: Array<{ text: string; href: string }>;
  icon?: React.ReactNode;
  className?: string;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
    TooltipContentProps
>(
  (
    {
      className,
      sideOffset = 4,
      title = "Tooltip Title",
      description = "This is a helpful description that provides more context about the item.",
      links = [
        { text: "Learn More", href: "#" },
        { text: "Documentation", href: "#" },
      ],
      icon = <Info className="h-4 w-4" />,
      ...props
    },
    ref,
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-[260px] rounded-lg bg-white p-4 shadow-lg",
        "border border-gray-200",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1 text-gray-500">{icon}</div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{description}</p>
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-3 w-3" />
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <TooltipPrimitive.Arrow className="fill-white" />
    </TooltipPrimitive.Content>
  ),
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { TooltipContent };
export type { TooltipContentProps };
