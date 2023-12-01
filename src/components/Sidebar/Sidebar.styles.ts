import styled from '@emotion/styled'

export const Sidebar = styled.aside<SidebarProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? '18.75rem' : '2rem')};
  height: 100vh;
  background-color: ${(props) => props.theme.colors.neutral.white_000};
`

export const Logo = styled.div<SidebarProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  padding: 3.5rem 4.125rem 0rem 3.5rem;
  cursor: pointer;
`

export const Items = styled.ul<SidebarProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  gap: 3.125rem;
  padding: 5.4375rem 5.8125rem 0rem 3.75rem;
  cursor: pointer;
`
