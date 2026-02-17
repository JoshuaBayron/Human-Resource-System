import { FiscalRecord, ProcessItem } from './types';

export const processItems: ProcessItem[] = [
  {
    id: 'PROC-001',
    employee: 'Jasmine Ford',
    type: 'Onboarding',
    status: 'In Progress',
    owner: 'Talent Team',
    dueDate: '2026-03-01'
  },
  {
    id: 'PROC-002',
    employee: 'Daniel Park',
    type: 'Promotion',
    status: 'Needs Review',
    owner: 'HRBP',
    dueDate: '2026-02-28'
  },
  {
    id: 'PROC-003',
    employee: 'Lina Santos',
    type: 'Department Transfer',
    status: 'In Progress',
    owner: 'People Ops',
    dueDate: '2026-03-05'
  },
  {
    id: 'PROC-004',
    employee: 'Mateo Collins',
    type: 'Offboarding',
    status: 'Completed',
    owner: 'IT & HR',
    dueDate: '2026-02-20'
  },
  {
    id: 'PROC-005',
    employee: 'Corporate Plan',
    type: 'Fiscal Year Planning',
    status: 'In Progress',
    owner: 'Finance + HR',
    dueDate: '2026-04-01'
  }
];

export const fiscalRecords: FiscalRecord[] = [
  {
    year: 'FY 2026',
    budget: 2450000,
    headcountTarget: 420,
    recruitmentPlan: 84,
    attritionForecast: 11
  },
  {
    year: 'FY 2027',
    budget: 2760000,
    headcountTarget: 470,
    recruitmentPlan: 92,
    attritionForecast: 10
  }
];
