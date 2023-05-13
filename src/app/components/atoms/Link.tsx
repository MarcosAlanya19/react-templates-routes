import { forwardRef } from 'react';
import { Link as LinkRouter } from "react-router-dom";


interface MyProps {
  to: string;
  children: JSX.Element | React.ReactNode;
  className?: string;
}
// FIX: con forwardRef segun documentacion
const Link = forwardRef(({ to, className, children }: MyProps, innerRef) => {
  return <LinkRouter ref={innerRef as any} to={to} className={className}>{children}</LinkRouter>;
});

export default Link;
