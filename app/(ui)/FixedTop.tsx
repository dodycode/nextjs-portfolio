import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const FixedTop = ({children}: Props) => (
  <div className="fixed top-0 left-0 right-0 h-2 z-50">
    {children}
  </div>
);

export default FixedTop;
