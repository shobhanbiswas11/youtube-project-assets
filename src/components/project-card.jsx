import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlusIcon } from "lucide-react";
import ColorForm from "./color-form";
import { Button } from "./ui/button";

export default function ProjectCard({ name, description, colors }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div key={color} className="bg-white p-2 rounded-sm">
              <div
                className="w-full h-12 rounded-sm"
                style={{
                  backgroundColor: color,
                }}
              />

              <div className="text-neutral-500 mt-2">{color}</div>
            </div>
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="h-auto">
                <PlusIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <ColorForm />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
}
