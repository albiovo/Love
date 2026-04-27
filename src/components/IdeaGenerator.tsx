import { Route } from '../types';

interface Props {
  functionalArea: string;
  material: string;
  process: string;
  route: Route;
  onGenerate: () => void;
}

export function IdeaGenerator({ functionalArea, material, process, route, onGenerate }: Props) {
  const statement = `Improve ${functionalArea} by combining ${material} with ${process} to support ${route}.`;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Project Idea Generator</h2>
          <p className="mt-1 text-sm text-slate-600">{statement}</p>
        </div>
        <button
          type="button"
          onClick={onGenerate}
          className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Generate idea
        </button>
      </div>
    </section>
  );
}
