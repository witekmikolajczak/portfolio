export const CloseMenu = ({ children, setMenuOpen }) => {
  return <li onClick={() => setMenuOpen(false)}>{children}</li>;
};
