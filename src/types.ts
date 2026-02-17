export type ProcessType =
  | 'Onboarding'
  | 'Offboarding'
  | 'Promotion'
  | 'Department Transfer'
  | 'Fiscal Year Planning';

export interface ProcessItem {
  id: string;
  employee: string;
  type: ProcessType;
  status: 'In Progress' | 'Needs Review' | 'Completed';
  owner: string;
  dueDate: string;
}

export interface FiscalRecord {
  year: string;
  budget: number;
  headcountTarget: number;
  recruitmentPlan: number;
  attritionForecast: number;
}

export type AppPage = 'Dashboard' | 'Summaries' | 'Processes' | 'FiscalYears' | 'Settings';