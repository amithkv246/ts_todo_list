import { FC } from 'react';

interface Heading1Props {
  value:string
  className:string
}

const Heading1: FC<Heading1Props> = ({value, ...props}) => {
  return (
    <>
      <h1 {...props}>{value}</h1>
    </>
  );
};

export default Heading1;