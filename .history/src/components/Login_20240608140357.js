import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const authenticateUser = async () => {
    const loginData = {
      email: loginState.email,
      password: loginState.password,
    };

    console.log("Sending login data:", loginData);

    try {
      const response = await fetch("http://localhost:80/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Redirect based on the server response
      if (data.redirect === "#") {
        window.location.replace("#");
      } else {
        navigate("/" + data.redirect.replace(".php", ""));
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <FormExtra openModal={openModal} />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
      <ForgotPasswordModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
}
