import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Volunteers" onClick={toggle}>Volunteers</SidebarLink>
          <SidebarLink to="LiveFeed" onClick={toggle}>Live Feed</SidebarLink>
          <SidebarLink to="GiveBlood" onClick={toggle}>Give Blood</SidebarLink>
          <SidebarLink to="Donate" onClick={toggle}>Donate</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" onClick={toggle}>Dashboard</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
