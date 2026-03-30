"use client";

import { Fragment, type ReactNode } from "react";

type LicenseRequiredProps = {
  as?: keyof JSX.IntrinsicElements | "";
  className?: string;
  role?: string;
  children: ReactNode;
};

const LicenseRequired = ({ children, as = "", ...rest }: LicenseRequiredProps) => {
  const Component = as || Fragment;
  return <Component {...rest}>{children}</Component>;
};

export const withLicenseRequired =
  <T extends JSX.IntrinsicAttributes>(Component: React.ComponentType<T>) =>
  // eslint-disable-next-line react/display-name
  (hocProps: T) => (
    <div>
      <LicenseRequired>
        <Component {...hocProps} />
      </LicenseRequired>
    </div>
  );

export default LicenseRequired;
