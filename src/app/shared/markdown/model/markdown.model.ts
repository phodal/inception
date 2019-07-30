export interface MarkdownTaskModel {
  id: string;
  completed: boolean;
  startDate?: string;
  endDate?: string;
  text: string;
  context?: string;
  priority?: string;
  mail?: string;
  tag?: string[];
}
