import useAuth from "../../hooks/useAuth";
import { NavContainer, Link } from './Navigation.styled';

const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <NavContainer>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </NavContainer>
    )

}
export default Navigation;