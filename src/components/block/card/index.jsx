import "./styles.scss";
export default function Card({ children }) {
  return (
    <div className="card">
      <span>{children}</span>
      <button>Select this</button>
    </div>
  );
}
