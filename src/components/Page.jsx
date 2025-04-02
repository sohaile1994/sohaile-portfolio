// src/components/Page.tsx
import React from 'react';


const Page = ({name, children }) => {
  return (
    <>
      <div id={`${name}-page`} className={`page ${name}-page`}>
         {children}
      </div>
    </>
  );
};

export default Page;