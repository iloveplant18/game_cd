import { HTMLAttributes, ReactNode } from "react";

type DefaultLayoutProps = HTMLAttributes<any> & {
  children: ReactNode;
};

function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
  return (
    <div
      className="min-h-screen w-full max-sm:pt-10"
      {...props}
    >
      {children}
    </div>
  );
}

export default DefaultLayout;
