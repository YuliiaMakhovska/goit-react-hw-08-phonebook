import { useDispatch } from "react-redux"
import { logIn } from "../../redux/Auth/auth-operations";
import { LogInForm, LogInLabel, LogInFormBtn, LoginField } from "./LoginForm.styled";


const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset()
    }


    return(
        <LogInForm onSubmit={handleSubmit} autoComplete='off'>
            <LogInLabel>Email 
                <LoginField type="email" name = "email" placeholder="Enter your email"/>
            </LogInLabel>
            <LogInLabel>Password 
                <LoginField type="password" name="password" placeholder="Enter your password" />
            </LogInLabel>
            <LogInFormBtn type="submit">Log In</LogInFormBtn>
        </LogInForm>
    )
}
export default LoginForm;