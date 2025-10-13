import React from 'react';

type DevOnlyProps = {
  children: React.ReactNode;
};

const DevOnly = ({ children }: DevOnlyProps) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
    return <>{children}</>;
  }
  return null;
};

export default DevOnly;
