import api from './api';
import { AnalyticsSummary } from '../types/analytics';

// GET MONTHLY ANALYTICS
export const getMonthlyAnalytics = async (): Promise<AnalyticsSummary> => {
  const response = await api.get('/analytics/monthly');
  return response.data;
};