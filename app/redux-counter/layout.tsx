import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }): ReactNode => (
  <div className="p-5 bg-gray-200 max-w-lg mx-auto mt-5">{children}</div>
);

export default Layout;
