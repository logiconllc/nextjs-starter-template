'use client';

import { useRouter } from 'next/navigation';
import Button from '../shared-components/button';

const ChildComponent = () => {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[90vh] flex flex-col gap-4 justify-center items-center bg-blue-300">
      <p>Child Component</p>
      <Button onClick={() => router.push('/parent')}> Go Back to parent </Button>
    </div>
  );
};
export default ChildComponent;
