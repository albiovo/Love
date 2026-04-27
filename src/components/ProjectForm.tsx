import { ProjectCard, Route } from '../types';

export type ProjectDraft = Omit<ProjectCard, 'id'>;

interface Props {
  value: ProjectDraft;
  onChange: (value: ProjectDraft) => void;
  onSubmit: () => void;
  isEditing: boolean;
  options: {
    routes: Route[];
    functionalAreas: string[];
    archetypes: string[];
    materials: string[];
    processes: string[];
    hardware: string[];
  };
}

function SelectInput({
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
        className="rounded-md border border-slate-300 px-2 py-1.5"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      <textarea
        value={value}
        rows={2}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-md border border-slate-300 px-2 py-1.5"
      />
    </label>
  );
}

export function ProjectForm({ value, onChange, onSubmit, isEditing, options }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">{isEditing ? 'Edit project card' : 'Create project card'}</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <label className="flex flex-col gap-1 text-sm md:col-span-2">
          <span className="font-medium text-slate-700">Project title</span>
          <input
            value={value.title}
            onChange={(event) => onChange({ ...value, title: event.target.value })}
            className="rounded-md border border-slate-300 px-2 py-1.5"
          />
        </label>
        <SelectInput
          label="Route"
          value={value.route}
          options={options.routes}
          onChange={(route) => onChange({ ...value, route: route as Route })}
        />
        <SelectInput
          label="Functional area"
          value={value.functionalArea}
          options={options.functionalAreas}
          onChange={(functionalArea) => onChange({ ...value, functionalArea })}
        />
        <SelectInput
          label="Archetype"
          value={value.archetype}
          options={options.archetypes}
          onChange={(archetype) => onChange({ ...value, archetype })}
        />
        <SelectInput
          label="Material"
          value={value.material}
          options={options.materials}
          onChange={(material) => onChange({ ...value, material })}
        />
        <SelectInput
          label="Process"
          value={value.process}
          options={options.processes}
          onChange={(process) => onChange({ ...value, process })}
        />
        <SelectInput
          label="Hardware"
          value={value.hardware}
          options={options.hardware}
          onChange={(hardware) => onChange({ ...value, hardware })}
        />
        <TextArea
          label="Expected benefit"
          value={value.expectedBenefit}
          onChange={(expectedBenefit) => onChange({ ...value, expectedBenefit })}
        />
        <TextArea
          label="Design constraints"
          value={value.designConstraints}
          onChange={(designConstraints) => onChange({ ...value, designConstraints })}
        />
        <TextArea
          label="Cost/volume assumptions"
          value={value.costVolumeAssumptions}
          onChange={(costVolumeAssumptions) => onChange({ ...value, costVolumeAssumptions })}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
        className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500"
      >
        {isEditing ? 'Save changes' : 'Add project card'}
      </button>
    </section>
  );
}
