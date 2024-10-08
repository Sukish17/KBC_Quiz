import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './sign.css'

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false);
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    };
    return (
        <button type="button" className="logob" onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Logout;
