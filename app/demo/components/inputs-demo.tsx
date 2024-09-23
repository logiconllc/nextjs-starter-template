import { Input } from "@/components/ui/input";
import React from "react";

function InputsDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <Input id="name" placeholder="John Doe" className="max-w-[300px]" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="placeholder@example.com"
          className="max-w-[300px]"
        />
      </div>
    </div>
  );
}

export default InputsDemo;
