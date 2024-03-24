import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const UserDashboard = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register");
    }

    return (
            <>
            <LoginForm />
            <button className="btn btn-primary btn-lg mt-3" onClick={() => handleRegister()}>Register</button>
            </>
    );
};

export default UserDashboard;