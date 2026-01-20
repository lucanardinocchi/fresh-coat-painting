export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        {/* Logo pulse */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-navy/20 animate-ping" />
          <div className="relative w-16 h-16 rounded-full bg-navy flex items-center justify-center">
            <span className="text-white font-semibold text-xl">FC</span>
          </div>
        </div>
        
        {/* Loading text */}
        <p className="text-sm text-charcoal-light">Loading...</p>
      </div>
    </div>
  );
}
