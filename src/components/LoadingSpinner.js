// src/components/LoadingSpinner.js
export default function LoadingSpinner() {
  return (
    <div className="spinner" aria-label="Memuat konten">
      <div className="animate-pulseDot1"></div>
      <div className="animate-pulseDot2"></div>
      <div className="animate-pulseDot3"></div>
    </div>
  );
}