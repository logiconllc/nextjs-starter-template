import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ButtonsDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button size="lg">Large</Button>
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size={"icon"}>
          <ArrowRight />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg" variant={"secondary"}>
          Large
        </Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"secondary"} size="sm">
          Small
        </Button>
        <Button variant={"secondary"} size={"icon"}>
          <ArrowRight />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg" variant={"destructive"}>
          Large
        </Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"destructive"} size="sm">
          Small
        </Button>
        <Button variant={"destructive"} size={"icon"}>
          <ArrowRight />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg" variant={"outline"}>
          Large
        </Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"outline"} size="sm">
          Small
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <ArrowRight />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg" variant={"ghost"}>
          Large
        </Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"ghost"} size="sm">
          Small
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <ArrowRight />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="lg" variant={"link"}>
          Large
        </Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"link"} size="sm">
          Small
        </Button>
        <Button variant={"link"} size={"icon"}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default ButtonsDemo;
