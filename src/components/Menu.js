import React from 'react'
import Search20 from '@carbon/icons-react/lib/search/20'
import Notification20 from '@carbon/icons-react/lib/notification/20'
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderContainer
} from 'carbon-components-react/lib/components/UIShell'

export const Menu = () => {
  return (
    <HeaderContainer
      render={() =>
        <>
          <Header aria-label="IBM Platform Name">
            <HeaderName href="#" prefix="HELLO VOTER"></HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search" onClick={() => {
              }}>
                <Search20/>
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications" onClick={() => {
              }}>
                <Notification20/>
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" onClick={() => {
              }}>
                <AppSwitcher20/>
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        </>
      }
      />
  )
}