import { ReactNode, ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  children: ReactNode
}

const Container = ({children, className, ...props}: Props) => (
  <div className={`container mx-auto ${className}`}>
    {children}
  </div>
);

export default Container;