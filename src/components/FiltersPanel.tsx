import { FilterState } from '../types';

interface Props {
  filters: FilterState;
  onChange: (next: FilterState) => void;
  options: {
    archetypes: string[];
    materials: string[];
    processes: string[];
    hardware: string[];
    functionalAreas: string[];
  };
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-md border border-slate-300 bg-white px-2 py-1.5"
      >
        <option value="All">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function FiltersPanel({ filters, onChange, options }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <SelectField
          label="Archetype"
          value={filters.archetype}
          options={options.archetypes}
          onChange={(value) => onChange({ ...filters, archetype: value })}
        />
        <SelectField
          label="Material"
          value={filters.material}
          options={options.materials}
          onChange={(value) => onChange({ ...filters, material: value })}
        />
        <SelectField
          label="Process"
          value={filters.process}
          options={options.processes}
          onChange={(value) => onChange({ ...filters, process: value })}
        />
        <SelectField
          label="Hardware"
          value={filters.hardware}
          options={options.hardware}
          onChange={(value) => onChange({ ...filters, hardware: value })}
        />
        <SelectField
          label="Functional area"
          value={filters.functionalArea}
          options={options.functionalAreas}
          onChange={(value) => onChange({ ...filters, functionalArea: value })}
        />
      </div>
    </section>
  );
}
