import styled from '@emotion/styled';

export const Sidebar = styled.aside<StyledSidebar>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.isSidebarOpen ? '18.75rem' : '2rem')};
  height: 100vh;
  background-color: ${(props) => props.theme.colors.neutral.white_000};
  transition: width 0.3s ease-in-out;
  box-shadow: 4px 0 30px 10px rgba(0, 0, 0, 0.05);
  z-index: +20;
`;

export const Logo = styled.div<StyledSidebar>`
  display: ${(props) => (props.isSidebarOpen ? 'flex' : 'none')};
  justify-content: center;
  padding-top: 3.5rem;
`;

export const Items = styled.ul<StyledSidebar>`
  display: ${(props) => (props.isSidebarOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  gap: 3.125rem;
  margin-top: 5.4375rem;
  padding: 0 5.8125rem 0rem 3.75rem;
  cursor: pointer;
`;

export const ArrowContainer = styled.div<StyledSidebar>`
  position: absolute;
  bottom: 2rem;
  left: ${(props) => (props.isSidebarOpen ? '17.75rem' : '0.8rem')};
  width: ${(props) => (props.isSidebarOpen ? 'calc(100% - 17.75rem)' : 'calc(100% - 0.8rem)')};
  transition:
    left 0.3s ease-in-out,
    width 0.3s ease-in-out;
  cursor: pointer;
`;
