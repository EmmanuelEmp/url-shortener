import * as React from 'react';

interface IAppProps {
}

const Footer: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className='bg-slate-900 text-base text-white text-center'>
        Copyright &#169; URL-Shortener | Eminet Tech
    </div>
  );
};

export default Footer;
