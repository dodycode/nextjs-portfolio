"use client";

import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import Link from 'next/link';

import { toggleHover } from '../(store)/global';

const buttonStyles = cva("", {
  variants: {
    customClass: {
      primary: "cursor-pointer",
      link: "text-gray-900 dark:text-gray-100 cursor-pointer"
    }
  },
  defaultVariants: {
    customClass: "primary"
  }
})

type ButtonOrLinkProps = ComponentProps<'button'> 
  & ComponentProps<'a'> & VariantProps<typeof buttonStyles>;

interface Props extends ButtonOrLinkProps {};

const Button = ({href, children, customClass, onMouseEnter, onMouseLeave, ...props}: Props) => {
  const isLink = typeof href !== 'undefined';

  if(isLink){
    return <Link className={buttonStyles({customClass})} href={href}>
      <span onMouseEnter={toggleHover} onMouseLeave={toggleHover}>{children}</span>
    </Link>;
  }

  return <button className={buttonStyles({customClass})} {...props}>{children}</button>;
}

export default Button;