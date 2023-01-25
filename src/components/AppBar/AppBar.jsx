import { useSelector } from "react-redux"
import authSelectors from "../../redux/Auth/auth-selectors";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { Header } from "./AppBar.styled";


export const AppBar = () => {
   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}