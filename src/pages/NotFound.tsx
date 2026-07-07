import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="hero-glow min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <p className="eyebrow">404</p>
        <h1 className="text-5xl font-bold text-white">Page not found</h1>
        <p className="text-brand-muted text-lg max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
