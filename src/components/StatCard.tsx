interface StatCardProps {
  label: string;
  value: string;
  detail: string;
}

export default function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <article className="stat-card">
      <h3>{label}</h3>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  );
}
