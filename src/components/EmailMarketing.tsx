
import React from 'react';
import EmailHeader from './email/EmailHeader';
import EmailAbout from './email/EmailAbout';
import EmailPersonalInsurance from './email/EmailPersonalInsurance';
import EmailBusinessInsurance from './email/EmailBusinessInsurance';
import EmailContact from './email/EmailContact';
import EmailFooter from './email/EmailFooter';

const EmailMarketing: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <EmailHeader />
      <EmailAbout />
      <EmailPersonalInsurance />
      <EmailBusinessInsurance />
      <EmailContact />
      <EmailFooter />
    </div>
  );
};

export default EmailMarketing;
