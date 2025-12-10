export default function AnimatedSection({ children }) {
  return (
    <div className="opacity-0 fade-up">
      {children}
    </div>
  );
}
