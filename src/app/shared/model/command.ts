import { Task } from './task';
import { UserAction } from './user-action';

export class Command {
  action: UserAction;
  param: {
    task?: Task,
    taskId?: string
  };
}
