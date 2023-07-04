"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Server } from "lucide-react";
import { toast } from "react-hot-toast";

interface Props {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<Props["variant"], string> = {
  public: "Public",
  admin: "Admin",
};
const variantMap: Record<Props["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export default function ApiAlert({
  title,
  description,
  variant = "public",
}: Props) {
  const onCopy = () => {
    navigator.clipboard
      .writeText(description)
      .then(() => {
        toast.success("API Route Copied to clipboard.");
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };

  return (
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="icon" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}
