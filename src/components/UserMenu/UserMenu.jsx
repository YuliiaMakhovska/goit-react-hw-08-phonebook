import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/auth-operations";
import useAuth from "../../hooks/useAuth";
import { UserMenuContainer, UserMenuLogOutBtn, UserMenuName } from "./UserMenu.styled";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
 const handleLogOut = () => dispatch(logOut())
    return (
        <UserMenuContainer>
            <UserMenuName>Welcome, {user}</UserMenuName>
            <UserMenuLogOutBtn type="button" onClick={handleLogOut}>Logout</UserMenuLogOutBtn>
        </UserMenuContainer>
    )
}

export default UserMenu;