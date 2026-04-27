import { useMemo, useState } from 'react';
import { FiltersPanel } from './components/FiltersPanel';
import { IdeaGenerator } from './components/IdeaGenerator';
import { MatrixTable } from './components/MatrixTable';
import { ProjectCards } from './components/ProjectCards';
import { ProjectDraft, ProjectForm } from './components/ProjectForm';
import { RouteDashboard } from './components/RouteDashboard';
import {
  anatomyLevels,
  archetypes,
  functionalAreas,
  hardwareOptions,
  initialProjects,
  materials,
  processes,
  routes,
} from './data/seedData';
import { FilterState, ProjectCard, Route } from './types';

const STORAGE_KEY = 'eyewear-case-innovation-matrix-projects';

function loadProjects(): ProjectCard[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return initialProjects;
  }

  try {
    return JSON.parse(raw) as ProjectCard[];
  } catch {
    return initialProjects;
  }
}

const defaultFilters: FilterState = {
  archetype: 'All',
  material: 'All',
  process: 'All',
  hardware: 'All',
  functionalArea: 'All',
};

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function toDraft(card?: ProjectCard): ProjectDraft {
  return {
    title: card?.title ?? '',
    route: card?.route ?? routes[0],
    functionalArea: card?.functionalArea ?? functionalAreas[0],
    archetype: card?.archetype ?? archetypes[0],
    material: card?.material ?? materials[0],
    process: card?.process ?? processes[0],
    hardware: card?.hardware ?? hardwareOptions[0],
    expectedBenefit: card?.expectedBenefit ?? '',
    designConstraints: card?.designConstraints ?? '',
    costVolumeAssumptions: card?.costVolumeAssumptions ?? '',
  };
}

function App() {
  // Main in-browser state for projects.
  const [projects, setProjects] = useState<ProjectCard[]>(() => loadProjects());
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [draft, setDraft] = useState<ProjectDraft>(toDraft());
  const [editingId, setEditingId] = useState<string | null>(null);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        if (filters.archetype !== 'All' && project.archetype !== filters.archetype) return false;
        if (filters.material !== 'All' && project.material !== filters.material) return false;
        if (filters.process !== 'All' && project.process !== filters.process) return false;
        if (filters.hardware !== 'All' && project.hardware !== filters.hardware) return false;
        if (filters.functionalArea !== 'All' && project.functionalArea !== filters.functionalArea) return false;
        return true;
      }),
    [projects, filters],
  );

  const projectCountsByRoute = useMemo(
    () =>
      routes.reduce(
        (acc, route) => {
          acc[route] = projects.filter((project) => project.route === route).length;
          return acc;
        },
        {} as Record<Route, number>,
      ),
    [projects],
  );

  const saveProjects = (next: ProjectCard[]) => {
    setProjects(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const handleSubmit = () => {
    if (!draft.title.trim()) return;

    if (editingId) {
      const updated = projects.map((project) =>
        project.id === editingId ? { ...project, ...draft, title: draft.title.trim() } : project,
      );
      saveProjects(updated);
      setEditingId(null);
      setDraft(toDraft());
      return;
    }

    const newProject: ProjectCard = {
      id: crypto.randomUUID(),
      ...draft,
      title: draft.title.trim(),
    };

    saveProjects([newProject, ...projects]);
    setDraft(toDraft());
  };

  const handleDelete = (id: string) => {
    saveProjects(projects.filter((project) => project.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setDraft(toDraft());
    }
  };

  const handleEdit = (project: ProjectCard) => {
    setEditingId(project.id);
    setDraft(toDraft(project));
  };

  const handleGenerateIdea = () => {
    const route = randomFrom(routes);
    const functionalArea = randomFrom(functionalAreas);
    const material = randomFrom(materials);
    const process = randomFrom(processes);
    const hardware = randomFrom(hardwareOptions);
    const archetype = randomFrom(archetypes);

    setDraft({
      title: `${functionalArea} concept for ${route}`,
      route,
      functionalArea,
      material,
      process,
      hardware,
      archetype,
      expectedBenefit: `Improve ${functionalArea.toLowerCase()} and reinforce ${route.toLowerCase()}.`,
      designConstraints: 'Validate component compatibility and durability targets.',
      costVolumeAssumptions: 'Estimate based on 100k-250k annual units.',
    });
    setEditingId(null);
  };

  const exportCsv = () => {
    const headers = [
      'title',
      'route',
      'functionalArea',
      'archetype',
      'material',
      'process',
      'hardware',
      'expectedBenefit',
      'designConstraints',
      'costVolumeAssumptions',
    ];

    const rows = filteredProjects.map((project) =>
      headers
        .map((header) => {
          const raw = String(project[header as keyof ProjectCard] ?? '');
          return `"${raw.replace(/"/g, '""')}"`;
        })
        .join(','),
    );

    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'eyewear-case-projects.csv');
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto grid max-w-7xl gap-5 p-4 md:p-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Eyewear Case Innovation Matrix</h1>
        <p className="mt-1 text-sm text-slate-600">
          Internal R&D workspace for mapping routes, anatomy levels, and execution building blocks.
        </p>
      </header>

      <RouteDashboard routes={routes} projectCounts={projectCountsByRoute} />
      <MatrixTable anatomyLevels={anatomyLevels} routes={routes} />

      <FiltersPanel
        filters={filters}
        onChange={setFilters}
        options={{ archetypes, materials, processes, hardware: hardwareOptions, functionalAreas }}
      />

      <IdeaGenerator
        route={draft.route}
        functionalArea={draft.functionalArea}
        material={draft.material}
        process={draft.process}
        onGenerate={handleGenerateIdea}
      />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={exportCsv}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Export filtered projects as CSV
        </button>
      </div>

      <ProjectForm
        value={draft}
        onChange={setDraft}
        onSubmit={handleSubmit}
        isEditing={Boolean(editingId)}
        options={{ routes, functionalAreas, archetypes, materials, processes, hardware: hardwareOptions }}
      />

      <ProjectCards cards={filteredProjects} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
}

export default App;
