export default function Calendar({ onBook }) {
  const start = new Date().toISOString();
  return (
    <div>
      <button onClick={() => onBook("translator-id-123", start, 30)}>Réserver 30 min</button>
    </div>
  );
}
