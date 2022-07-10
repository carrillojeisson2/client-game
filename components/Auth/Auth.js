import { useState } from "react"
import LoginForm from "./LoginForm/LoginForm"
import RegisterForm from "./RegisterForm/RegisterForm"



export default function Auth(props) {

    const {onCloseModal, setTitleModal } = props;
    const [showLogin, setShowLogin] = useState(true)

    const showLoginForm = () => {
        setTitleModal("Iniciar Sesión")
        setShowLogin(true)
    }
    const showRegisterForm = () => {
        setTitleModal("Registrarse")
        setShowLogin(false)
    }

    return showLogin ? 
        <LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal}/> 
        : 
        <RegisterForm showLoginForm={showLoginForm}/>
    
}