import * as React from 'react';

interface  HeaderProps {
}

const Header: React.FunctionComponent< HeaderProps> = () => {
  return (
    <div className='bg-slate-900'>
        <div className='container p-2 mx-auto'>
            <nav className='py-5'>
                <div className='text-white text-base'>URL-Shortener</div>
            </nav>
        </div>
    </div>
  );
};

export default Header;
