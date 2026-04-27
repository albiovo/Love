import { ProjectCard } from '../types';

interface Props {
  cards: ProjectCard[];
  onEdit: (card: ProjectCard) => void;
  onDelete: (id: string) => void;
}

function Tag({ icon, value }: { icon: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
      <span>{icon}</span>
      {value}
    </span>
  );
}

export function ProjectCards({ cards, onEdit, onDelete }: Props) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Project Cards</h2>
        <span className="text-sm text-slate-500">{cards.length} projects</span>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {cards.map((card) => (
          <article key={card.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-slate-800">{card.title}</h3>
              <div className="flex gap-2">
                <button className="text-xs text-indigo-600" onClick={() => onEdit(card)}>
                  Edit
                </button>
                <button className="text-xs text-rose-600" onClick={() => onDelete(card.id)}>
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag icon="🧭" value={card.route} />
              <Tag icon="🧩" value={card.functionalArea} />
              <Tag icon="🧱" value={card.material} />
              <Tag icon="⚙️" value={card.process} />
              <Tag icon="🔩" value={card.hardware} />
            </div>
            <dl className="mt-3 space-y-2 text-sm text-slate-600">
              <div>
                <dt className="font-medium text-slate-700">Archetype</dt>
                <dd>{card.archetype}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">Expected benefit</dt>
                <dd>{card.expectedBenefit}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">Design constraints</dt>
                <dd>{card.designConstraints}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">Cost/volume assumptions</dt>
                <dd>{card.costVolumeAssumptions}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
