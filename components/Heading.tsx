import { FC } from 'react';
import { headingType } from '../types';

type Tag = any | undefined;

const Heading: FC<headingType> = ({ tag, text }) => {
  const Tag: Tag = tag || 'h1';
  return <Tag>{text}</Tag>;
};
export default Heading;
