type EssayCardProps = {
  essay: {
    title: string;
    description: string;
    category: string;
  };
};

export default function EssayCard({ essay }: EssayCardProps) {
  return (
    <article className="essay-card">
      <div className="essay-card-top">
        <p className="card-meta">{essay.category}</p>
        <span>Coming Soon</span>
      </div>
      <h3>{essay.title}</h3>
      <p>{essay.description}</p>
    </article>
  );
}
