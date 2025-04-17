// src/components/Page.tsx
import React from 'react';


const Page = ({id, children }) => {
  return (
    <>
      <div id={`${id}-page`} className={`page ${id}-page`}>
         {children}
      </div>
    </>
  );
};

export default Page;