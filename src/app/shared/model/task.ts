import { Tag } from './tag';
import { Context } from './context';

export class Task {
  id: string;
  content: string;
  startDate?: Date;
  dueDate?: Date;
  timeCost?: number; // By Minute
  moneyCost?: number;
  tags: Tag[];
  contexts: Context[];
}
