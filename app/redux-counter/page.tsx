import { ReactNode } from 'react';
import Counter from './components/counter';

const Page = (): ReactNode => (
  <div>
    <h1 className="bg-gray-400 font-bold py-3 text-center rounded">Redux Toolkit Counter</h1>
    <Counter />
  </div>
);

export default Page;
