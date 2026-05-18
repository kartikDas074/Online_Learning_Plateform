// components/SessionButton.jsx

"use client";

import { toast } from "react-toastify";

const ButtonSession = ({ name }) => {
  return (
    <button
      onClick={() => {
        toast.success(`You booked a session with ${name}`);
      }}
      className="btn btn-primary w-full rounded-xl text-white font-semibold shadow-md shadow-primary/10 normal-case"
    >
      Start 1-1 Session
    </button>
  );
};

export default ButtonSession;