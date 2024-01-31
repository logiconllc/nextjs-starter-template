import { ReactNode } from 'react';
import './index.css';

// This layout will render all child modules at the place of childrens in body tag
const ParentLayout = ({ children }: { children: ReactNode }): ReactNode => (
  <body>
    <div className="w-[100vw] h-[10vh] flex justify-center items-center bg-green-900">Parent Layout</div>
    {children}
  </body>
);

export default ParentLayout;
