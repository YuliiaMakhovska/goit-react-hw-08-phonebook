import { useDispatch, useSelector } from "react-redux"
import { logIn } from "../../redux/Auth/auth-operations";
import { LogInForm, LogInLabel, LogInFormBtn, LoginField } from "./LoginForm.styled";
import { Report } from 'notiflix/build/notiflix-report-aio';
import authSelectors from "redux/Auth/auth-selectors";

const LoginForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(authSelectors.selectError)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const emailValue = form.elements.email.value;
        const passValue = form.elements.password.value;
            if (emailValue === '' || passValue === '') {
      Report.failure('Please, fill in all fields');
      return;
    }
        dispatch(logIn({
            email: emailValue,
            password: passValue,
        })) && !error &&
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