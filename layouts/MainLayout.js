import React from 'react';
import TopBar from "./TopBar/index";
import SideBar from "./SideBar/index"


const MainLayout = ( props ) => {
    const { children } = props;

    return (
        <div>
            <TopBar/>
            <div>                
                <SideBar/>
                <main>
                    {children}
                </main>
                             
            </div>
        </div>
    )
}

export default MainLayout;