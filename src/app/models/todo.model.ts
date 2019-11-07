export enum PriorityEmun {
  SMALL = 'small',
  MEDIUM = 'medium',
  STRONG = 'strong'
}

export interface Todo {
  name: string,
  category: string,
  priority: PriorityEmun
}
