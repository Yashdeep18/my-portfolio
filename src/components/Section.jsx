export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-20 px-6 md:px-20 scroll-mt-20 ${className}`.trim()}>
      {children}
    </section>
  );
}
