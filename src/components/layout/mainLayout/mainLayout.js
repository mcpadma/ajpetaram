import React from 'react';

import Header from '../header/header';

const contentStyle={
    'color':'white',
    'border':'1px solid #fff'
}
function MainLayout({children}) {
    return (
        <>
        <Header/>
        <div style={contentStyle}>
        {children}
        </div>
        
        </>
    )
}

export default MainLayout;