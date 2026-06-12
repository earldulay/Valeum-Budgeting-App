export interface Category {
  name: string;
  amount: number;
  percentage: number;
}

export interface AnalyticsSummary {
  income: number;
  expenses: number;
  savings: number;
  score: number;
  categories: Category[];
}