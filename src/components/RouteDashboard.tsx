import { Route } from '../types';

const routeStyles: Record<Route, string> = {
  'Elevated Value Perception': 'bg-indigo-50 border-indigo-200 text-indigo-700',
  'Engaging Interaction & Functions': 'bg-emerald-50 border-emerald-200 text-emerald-700',
  'Empowered Performance & Sustainability': 'bg-amber-50 border-amber-200 text-amber-700',
};

interface Props {
  routes: Route[];
  projectCounts: Record<Route, number>;
}

export function RouteDashboard({ routes, projectCounts }: Props) {
  return (
    <section>
      <h2 className="text-lg font-semibold">Routes Dashboard</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <article key={route} className={`rounded-xl border p-4 ${routeStyles[route]}`}>
            <div className="text-xs uppercase tracking-wide">Route</div>
            <h3 className="mt-1 font-semibold">{route}</h3>
            <p className="mt-3 text-sm">{projectCounts[route] ?? 0} active concepts</p>
          </article>
        ))}
      </div>
    </section>
  );
}
