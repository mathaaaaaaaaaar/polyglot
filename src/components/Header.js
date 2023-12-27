import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const Header = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Polyglot</NavbarBrand>
        </Navbar>
    );
};

export default Header;
