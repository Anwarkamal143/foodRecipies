import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface ICardFooterProps {
  className?: string;
  footerCalss?: string;
  children?: string | ReactElement | ReactNode | HTMLElement;
}

const CardFooter: React.FunctionComponent<ICardFooterProps> = ({
  className,
  footerCalss,
  children,
}) => {
  return (
    <div className={`card-Footer ${className} ${footerCalss}`}>{children}</div>
  );
};

export default styled(CardFooter)``;
