import { ReactNode } from "react";

export default function AuthLayout({ children }: {
  children: ReactNode
}) {
  return (
    <div>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  )
}
