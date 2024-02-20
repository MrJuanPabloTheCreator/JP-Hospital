import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div className='flex w-full h-full items-center justify-center bg-slate-100'>
    <h1>Welcome, {firstName}!</h1>
  </div>
);