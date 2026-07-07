export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-semibold text-white ${className}`}>
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white ring-2 ring-white/60 shadow-md flex-shrink-0">
        <img
          src="/Small_logo_smaller.png"
          alt="Encountive logo"
          className="w-7 h-7 object-contain"
        />
      </span>
      <span>Encountive</span>
    </span>
  );
}
