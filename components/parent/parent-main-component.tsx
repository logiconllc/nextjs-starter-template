'use client';

import { useRouter } from 'next/navigation';
import Button from '../shared-components/button';

const ParentMainComponent = () => {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[90vh] flex flex-col gap-4 justify-center items-center bg-blue-700">
      <p>Parent Component</p>
      <Button onClick={() => router.push('/parent/child')}> Go To Child </Button>
    </div>
  );
};

export default ParentMainComponent;
