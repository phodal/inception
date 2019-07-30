export interface MarkdownTaskModel {
  completed: boolean;
  startDate?: string;
  endDate?: string;
  text: string;
  context?: string;
  priority?: string;
  mail?: string;
  tag?: string;
}
