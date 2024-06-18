import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ForgotPasswordModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
    setEmail(""); // Reset the email
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Forgot Password"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="text-2xl mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-white"
        >
          Change Password
        </button>
      </form>
    </Modal>
  );
};

export default ForgotPasswordModal;
