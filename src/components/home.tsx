import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Book, Code } from "lucide-react";

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
}

const DemoSection = ({
  title = "Demo Section",
  children,
}: DemoSectionProps) => {
  return (
    <div className="p-4 border rounded-lg bg-white mb-4">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Enhanced Tooltip Examples</h1>

      <DemoSection title="Basic Tooltip">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Hover me
            </TooltipTrigger>
            <TooltipContent
              title="Welcome!"
              description="This is a basic tooltip example with default styling."
              icon={<Info className="h-4 w-4" />}
            />
          </Tooltip>
        </TooltipProvider>
      </DemoSection>

      <DemoSection title="Rich Content Tooltip">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Documentation
            </TooltipTrigger>
            <TooltipContent
              title="Documentation Resources"
              description="Access comprehensive guides and API references."
              icon={<Book className="h-4 w-4" />}
              links={[
                { text: "View Docs", href: "#" },
                { text: "API Reference", href: "#" },
                { text: "Examples", href: "#" },
              ]}
            />
          </Tooltip>
        </TooltipProvider>
      </DemoSection>

      <DemoSection title="Technical Tooltip">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
              API Details
            </TooltipTrigger>
            <TooltipContent
              title="API Configuration"
              description="Configure your API endpoints and authentication settings."
              icon={<Code className="h-4 w-4" />}
              links={[
                { text: "Setup Guide", href: "#" },
                { text: "API Keys", href: "#" },
              ]}
            />
          </Tooltip>
        </TooltipProvider>
      </DemoSection>

      <DemoSection title="Inline Text Example">
        <p className="text-gray-700">
          This is a paragraph with an
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="mx-1 text-blue-500 border-b border-dashed border-blue-500 cursor-help">
                enhanced tooltip
              </TooltipTrigger>
              <TooltipContent
                title="Enhanced Features"
                description="Our tooltips support rich content, smart positioning, and smooth animations."
                icon={<Info className="h-4 w-4" />}
              />
            </Tooltip>
          </TooltipProvider>
          embedded within text.
        </p>
      </DemoSection>
    </div>
  );
}
