'use client';

import { MinusIcon, PlusIcon } from '@/icons';
import { decrement, increment, incrementByAmount } from '@/redux/features/counter/counterSlice';
import { RootState } from '@/redux/store';
import Button from '@/ui/button';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main>
      <h4 className="py-2 bg-green-300 my-3 text-center font-bold">{count}</h4>
      <div>
        <Button intent="primary" onClick={() => dispatch(increment())}>
          <span className="flex">
            <span className="mr-2 flex items-center">Increment</span>
            <span className="flex items-center">
              <PlusIcon className="w-6 h-6" />
            </span>
          </span>
        </Button>

        <Button intent="primary" onClick={() => dispatch(decrement())}>
          <span className="flex">
            <span className="mr-2 flex items-center">Decrement</span>
            <span className="flex items-center">
              <MinusIcon className="w-6 h-6" />
            </span>
          </span>
        </Button>

        <Button intent="primary" onClick={() => dispatch(incrementByAmount(2))}>
          <span className="flex">
            <span className="mr-2 flex items-center">Increment By 2</span>
            <span className="flex items-center">
              <PlusIcon className="w-6 h-6" />
            </span>
          </span>
        </Button>
      </div>
    </main>
  );
};

export default Counter;
