import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/auth-operations";
// import useAuth from "../../hooks/useAuth";
import { UserMenuContainer, UserMenuLogOutBtn } from "./UserMenu.styled";

const UserMenu = () => {
    const dispatch = useDispatch();
    // const { user } = useAuth();

    return (
        <UserMenuContainer>
            {/* <p>Welcome {user.name }</p> */}
            <UserMenuLogOutBtn type="button" onClick={()=> dispatch(logOut())}>Logout</UserMenuLogOutBtn>
        </UserMenuContainer>
    )
}

export default UserMenu;