import { AnatomyLevel, Route } from '../types';

interface Props {
  anatomyLevels: AnatomyLevel[];
  routes: Route[];
}

const matrixHints: Record<AnatomyLevel, Record<Route, string>> = {
  Benefits: {
    'Elevated Value Perception': 'Luxury cues, storytelling, giftability.',
    'Engaging Interaction & Functions': 'Intuitive handling and delightful rituals.',
    'Empowered Performance & Sustainability': 'Durability + lower footprint over lifecycle.',
  },
  Features: {
    'Elevated Value Perception': 'Premium finishes, refined closure behaviors.',
    'Engaging Interaction & Functions': 'One-hand opening, modular inserts.',
    'Empowered Performance & Sustainability': 'Repairable parts and mono-material paths.',
  },
  Attributes: {
    'Elevated Value Perception': 'Soft touch, precise seams, visual balance.',
    'Engaging Interaction & Functions': 'Tactility, grip confidence, audible feedback.',
    'Empowered Performance & Sustainability': 'Lightweight, recycled content, low VOC.',
  },
  Components: {
    'Elevated Value Perception': 'Badges, trims, lining materials.',
    'Engaging Interaction & Functions': 'Hinges, magnets, pullers, spring assists.',
    'Empowered Performance & Sustainability': 'Recyclable shell, replaceable inserts.',
  },
};

export function MatrixTable({ anatomyLevels, routes }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Innovation Matrix</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-100 p-2 text-left">Product Anatomy</th>
              {routes.map((route) => (
                <th key={route} className="border border-slate-200 bg-slate-100 p-2 text-left">
                  {route}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {anatomyLevels.map((level) => (
              <tr key={level}>
                <th className="border border-slate-200 bg-slate-50 p-2 text-left font-medium">{level}</th>
                {routes.map((route) => (
                  <td key={`${level}-${route}`} className="border border-slate-200 p-2 text-slate-600">
                    {matrixHints[level][route]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
