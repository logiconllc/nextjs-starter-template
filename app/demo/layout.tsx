import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }): ReactNode => (
  <div className="px-5">
    <h1 className="bg-gray-200 font-bold py-3">Demo Layout</h1>
    {children}
  </div>
);

export default Layout;
