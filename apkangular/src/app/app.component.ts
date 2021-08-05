import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private list = new TodoList("Adam", [
    new TodoItem("Isc pobiegac", true),
    new TodoItem("Kupic kwiaty "),
    new TodoItem("Odebrac bilety"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  
  showComplete: boolean = false;

  get items(): readonly TodoItem[] {
    // return this.list.items;
    return this.list.items.filter(item => !item.complete || this.showComplete);
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }

  placeholderEmpty: string = "";
}