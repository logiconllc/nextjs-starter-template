// This file will be used to imlpement the actual UI for child component
import ChildComponent from '@/components/child/child-main-component';
import './index.css';
import { ReactNode } from 'react';

// route for this page would be "/parent/child"
const Child = (): ReactNode => <ChildComponent />;

export default Child;
