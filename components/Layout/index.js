import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/index';

export const Layout = ({title, children}) => {
    return (
        <div>
            <Head>
               <title>{title}</title>
        </Head>
      <Navbar>

                </Navbar>
        </div>
    )
}