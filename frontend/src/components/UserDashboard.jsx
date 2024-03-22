import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const UserDashboard = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register");
    }

    return (
        // <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <>
            <LoginForm />
            <button className="btn btn-primary btn-lg mt-3" onClick={() => handleRegister()}>Register</button>
            </>
        //     {/* <button className="btn btn-secondary btn-lg mt-3" onClick={() => handleLogin()}>Login</button> */}
        // {/* </div> */}
    );
};

export default UserDashboard;