import { Command } from './model/command';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserAction } from './model/user-action';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class InputAnalyzerService {

  locale: string ;
  constructor() { }


  analyze(input: string): Observable<Command> {
    const cmd: Command = new Command();
    cmd.action = this.categorizeAction(input);

    return of(cmd);

  }
  categorizeAction(input: string): UserAction {
    const defaultAction = UserAction.CREATE_TASK;
    // TODO: pass to categorizer
    return defaultAction;
  }

  parseNewTask(input: string): Task {
    const task = new Task();
    task.content = input;
    const dueKeywords = [];
    const matched = this.textExactMatcher(input, dueKeywords);
    if (matched) {

    }
    return task;
  }
  textExactMatcher(text, regexes): string | false {
    // TODO
    return '';
  }


}
