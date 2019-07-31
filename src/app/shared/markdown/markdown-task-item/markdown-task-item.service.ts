import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownTaskItemService {
  private tasks: any;
  private subject = new Subject<any>();

  update(tasks) {
    this.subject.next(tasks);
  }

  subTasks(channel): Observable<any> {
    return this.subject.asObservable();
  }

  setTasks(tasks: any) {
    this.tasks = tasks;
  }

  updateTask($event: any, item) {
    if (!item.id) {
      return;
    }
    console.log(this.tasks, item);

    const tasks = this.updateTaskByItem(this.tasks, item);
    this.update(tasks);
  }

  updateTaskByItem(tasks, item) {
    for (const task of tasks) {
      if (task.item.id === item.id) {
        task.item = JSON.parse(JSON.stringify(item));
        return tasks;
      }

      if (task.childrens) {
        this.updateTaskByItem(task.childrens, item);
      }
    }

    return tasks;
  }
}
