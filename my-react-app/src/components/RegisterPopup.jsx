import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPopup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative">

        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-2xl text-gray-500"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-[#1d2355] mb-3">
          Join Skill Revolution
        </h2>

        <p className="text-gray-600 mb-6">
          Enroll now and start building your career with industry-focused training programs.
        </p>

        <button
          onClick={() => {
            setShow(false);
            navigate("/contact");
          }}
          className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Register Now
        </button>

      </div>
    </div>
  );
}