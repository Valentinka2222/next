import Heading from './Heading';
import { FC } from 'react';
import { contactType } from '../types';

type contactInfoProps = {
  contact: contactType;
};

const ContactInfo: FC<contactInfoProps> = ({ contact }) => {
  console.log(contact);
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  if (!contact) {
    return <Heading tag="h3" text="Empty contact"></Heading>;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <strong>Address:</strong>
        {`${street},${suite},${city},${zipcode}`}
      </div>
    </>
  );
};
export default ContactInfo;
