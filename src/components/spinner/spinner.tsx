import { FC } from 'react';

interface SpinnerProps {
  fullDisplay?: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ fullDisplay = false }) => (
  <div className={fullDisplay ? 'spinner-display' : 'spinner-container'}>
    <div className="spinner" />
  </div>
);
