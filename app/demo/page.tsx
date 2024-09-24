import { H1, H2, H5 } from "@/components/ui/typeface";
import ButtonsDemo from "./components/buttons-demo";
import InputsDemo from "./components/inputs-demo";
import { SelectDemo } from "./components/select-demo";
import { TableDemo } from "./components/table-demo";

function DemoPage() {
  return (
    <div className="container py-16">
      <H1>UI Demo</H1>
      <H5 className="mt-4 text-muted-foreground">
        {" "}
        This is the demo page for the UI components. To customize the UI
        components, modify the files in the components/ui directory. To add more
        components, see the{" "}
        <a
          href="https://ui.shadcn.com/docs/components"
          target="_blank"
          className="underline"
        >
          Shadcn UI components documentation
        </a>
        . <br />
        Refer to the README.MD file for more information.
      </H5>
      <section className="my-16 space-y-4 border-t">
        <H2 className="mt-4">Buttons</H2>
        <span className="text-sm text-muted-foreground">
          This is the default varients of the button provided to make your own
          ui library customize the{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            components/ui/button.tsx
          </span>{" "}
          file accordingly.
        </span>
        <ButtonsDemo />
      </section>
      <section className="my-16 space-y-4 border-t">
        <H2 className="mt-4">Input field</H2>
        <span className="text-sm text-muted-foreground">
          This is the default Input field provided to make your own ui library
          customize the{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            components/ui/input.tsx
          </span>{" "}
          file accordingly.
        </span>
        <InputsDemo />
      </section>
      <section className="my-16 space-y-4 border-t">
        <H2 className="mt-4">Select dropdown</H2>
        <span className="text-sm text-muted-foreground">
          This is the default Select field provided to make your own ui library
          customize the{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            components/ui/select.tsx
          </span>{" "}
          file accordingly.
        </span>
        <SelectDemo />
      </section>
      <section className="my-16 space-y-4 border-t">
        <H2 className="mt-4">Table</H2>
        <span className="text-sm leading-6 text-muted-foreground">
          This is the default Table provided to make your own ui library
          customize the{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            components/ui/table.tsx
          </span>{" "}
          file accordingly. You can use the{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            {"<Table />"}
          </span>{" "}
          component to build more complex data tables. Combine it with{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            <a
              href="https://tanstack.com/table/v8"
              target="_blank"
              className="underline"
            >
              @tanstack/react-table
            </a>
          </span>{" "}
          to create tables with sorting, filtering and pagination. See the{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            <a
              href="https://ui.shadcn.com/docs/components/data-table"
              target="_blank"
              className="underline"
            >
              Data Table
            </a>
          </span>{" "}
          documentation for more information.
        </span>
        <TableDemo />
      </section>
      <section className="my-16 space-y-4 border-t">
        <H2 className="mt-4">Forms</H2>
        <span className="text-sm text-muted-foreground">
          If any forms are required, you can use the default Input field in
          combination with{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            <a
              href="https://react-hook-form.com/"
              target="_blank"
              className="underline"
            >
              react-hook-form
            </a>
          </span>{" "}
          and{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            <a href="https://zod.dev/" target="_blank" className="underline">
              zod
            </a>
          </span>{" "}
          to validate the form. You can also use the default Select field to
          create dropdowns. For more information, see the{" "}
          <span className="rounded-sm bg-slate-100 px-2 py-1">
            <a
              href="https://ui.shadcn.com/docs/components/form"
              target="_blank"
              className="underline"
            >
              Forms documentation
            </a>
          </span>
        </span>
        <InputsDemo />
        <SelectDemo />
      </section>
    </div>
  );
}

export default DemoPage;
