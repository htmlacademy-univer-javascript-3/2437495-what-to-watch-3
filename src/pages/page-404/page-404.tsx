import * as React from 'react';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => (
  <div className={'page-404-container'}>
    <h1>404. Page not found</h1>
    <Link to='/'>
      Go to main page
    </Link>
  </div>
);

export default Page404;
