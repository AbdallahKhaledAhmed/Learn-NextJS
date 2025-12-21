import { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
  id: ReactNode;
}

export default function ProductLayout(props: ProductLayoutProps) {
  return (
    <div>
      {props.children}
      {props.id}
    </div>
  );
}
