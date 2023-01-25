import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/auth-operations";
import { FormStyled, Lable, FieldStyled, RegisterBtn } from "./RegisterForm.styled";


const RegisterForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset()
    }
    return (
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
            <Lable htmlFor="name">Username 
                <FieldStyled type="name" name="name" placeholder="Enter your name" />
            </Lable>
            <Lable htmlFor="name">Email 
                <FieldStyled type="email" name="email" placeholder="Enter your email" />
            </Lable>
            <Lable htmlFor="name">Password 
                <FieldStyled type="password" name="password" placeholder="Enter your password"/>
            </Lable>
            <RegisterBtn type="submit">Register</RegisterBtn>
        </FormStyled>
    )
}
export default RegisterForm;

