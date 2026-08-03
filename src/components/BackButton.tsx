import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-cyan transition-colors py-2 min-h-[44px]"
      aria-label="Go back"
    >
      <ArrowLeft size={16} />
      Back
    </button>
  );
}
