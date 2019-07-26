export interface ChecklistModel {
  title: string;
  priority: string;
  description: string;
  tools: string[];
  documentation: string[];
  tags: [];
  subitems: CheckItem[];
}

export interface CheckItem {
  title: string;
  complete?: boolean;
  description: string;
}
