
import {AuthList, AuthNavLink} from './AuthNav.styled'

const AuthNav = () => {
    return (
        <AuthList>
            <AuthNavLink to="/register">Register</AuthNavLink>
            <AuthNavLink to="/login">Log In</AuthNavLink>
        </AuthList>
    )
}

export default AuthNav;