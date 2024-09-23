# Next Starter Template

This is a starter project using Next.js, Typescript, Yarn, Shadcn/UI, Prettier, and the Prettier Tailwind plugin.

## ⚠️ Important Notes

- 📝 **Type Safety**: Always write types where needed for your components and API calls.
- 🧩 **Separation of Concerns**: Keep your code modular and organized by separating different concerns.
- 🔧 **Utility Functions**: Create reusable utility functions to avoid code duplication.
- 🎨 **Styling**: Use TailwindCSS for consistent and efficient styling.
- 🖌️ **UI Components**: Utilize Shadcn/UI for building user interface components.


## 📋 Table of Contents

- [📥 Installation](#📥-installation)
- [🚀 Usage](#🚀-usage)
- [🖼️ Icons](#🖼️-icons)
- [📝 Forms and Validation](#📝-forms-and-validation)
  - [📦 Installation](#📦-installation)
  - [🛠️ Usage](#🛠️-usage)
- [📊 Tables](#📊-tables)
  - [📦 Installation](#📦-installation-1)
  - [🛠️ Usage](#🛠️-usage-1)
- [🔧 Development](#🔧-development)
  - [🎨 Prettier](#🎨-prettier)
  - [🖌️ Shadcn/UI](#🖌️-shadcnui)

## 📥 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/logiconllc/nextjs-starter-template
   cd nextjs-starter-template
   ```

2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

## 🚀 Usage

To start the development server:

```bash
yarn dev
```

To build the project for production:

```bash
yarn build
```

To start the production server:

```bash
yarn start
```

## 🖼️ Icons

This project uses `react-icons` for icons. You can easily include any icon from popular icon libraries.

To use an icon in your component:

```tsx
import { FaBeer } from 'react-icons/fa';

const MyComponent = () => {
  return <FaBeer />;
};
```

Refer to the [react-icons documentation](https://react-icons.github.io/react-icons/) for more details on available icons and usage.

## 📝 Forms and Validation

To handle forms, this project uses `react-hook-form`. For form validations, `zod` is used.

### 📦 Installation

Install the required libraries:

```bash
yarn add react-hook-form zod
```

### 🛠️ Usage

Here's an example of how to create a form with validation:

```tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function ProfileForm() {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
```

Refer to the [react-hook-form documentation](https://react-hook-form.com/get-started) and [zod documentation](https://zod.dev/) for more details.

## 📊 Tables

This project uses `@tanstack/react-table` for creating and managing tables.

### 📦 Installation

Install the required library:

```bash
yarn add @tanstack/react-table
```

### 🛠️ Usage

Here's an example of how to create a table:

## Prerequisites

We are going to build a table to show recent payments. Here's what our data looks like:

```tsx showLineNumbers
type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
];
```

## Project Structure

Start by creating the following file structure:

```txt
app
└── payments
    ├── columns.tsx
    ├── data-table.tsx
    └── page.tsx
```

I'm using a Next.js example here but this works for any other React framework.

- `columns.tsx` (client component) will contain our column definitions.
- `data-table.tsx` (client component) will contain our `<DataTable />` component.
- `page.tsx` (server component) is where we'll fetch data and render our table.

## Basic Table

Let's start by building a basic table.

### Column Definitions

First, we'll define our columns.

```tsx showLineNumbers title="app/payments/columns.tsx" {3,14-27}
'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];
```

**Note:** Columns are where you define the core of what your table
will look like. They define the data that will be displayed, how it will be
formatted, sorted and filtered.

### `<DataTable />` component

Next, we'll create a `<DataTable />` component to render our table.

```tsx showLineNumbers title="app/payments/data-table.tsx"
'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
```

**Tip**: If you find yourself using `<DataTable />` in multiple places, this is the component you could make reusable by extracting it to `components/ui/data-table.tsx`.

`<DataTable columns={columns} data={data} />`

### Render the table

Finally, we'll render our table in our page component.

```tsx showLineNumbers title="app/payments/page.tsx" {22}
import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
```

Refer to the [TanStack Table documentation](https://tanstack.com/table/v8/docs/guide/introduction) for more details on available features and usage.

## 🔧 Development

### 🎨 Prettier

This project uses Prettier for code formatting. The Prettier Tailwind plugin is also included to ensure Tailwind classes are ordered correctly.

To format your code, run:

```bash
yarn prettier
```

### 🖌️ Shadcn/UI

Shadcn/UI is used for the UI components. Refer to the [Shadcn/UI documentation](https://ui.shadcn.com/docs) for more details on how to use the components.
