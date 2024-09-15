import React, { useContext, useEffect } from 'react';

import { twMerge } from 'tailwind-merge';

import { MainLayoutProps } from '../../@types';
import MainLayoutContext from '../../context/LayoutContext';
import Sidebar from '@/modules/Sidebar';
import TopBar from '@/modules/TopBar';

function MainLayout({
  children,
  className,
  showDashboardSidebar = true,
  activePage,
  fixedTopbar = false,
  includeMarginTop = true,
  topBarText = 'Chat with AI',
  topBarIcon = 'chatlogo'
}: MainLayoutProps) {
  const { setActivePage, toggled, setToggled } = useContext(MainLayoutContext);

  useEffect(() => {
    setActivePage(activePage as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={twMerge('w-full relative bg-[#fafafa] z-20')}>
      <TopBar setToggled={setToggled} className={fixedTopbar ? 'fixed' : ''} topBarText={topBarText} topBarIcon={topBarIcon} />

      {showDashboardSidebar && <Sidebar toggled={toggled} setToggled={setToggled} />}
      <div className={twMerge(`${toggled ? "" : "md:ml-[100px]"} min-h-screen gap-5 flex flex-col px-5 `, className)}>
        <div className={twMerge(`w-full ${includeMarginTop ? 'mt-24 flex flex-col' : ''}` )}>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
