import { Component, OnInit } from '@angular/core';
import { PostService } from './Services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* The AppComponent class retrieves posts from a PostService and assigns them to a variable. */
export class AppComponent implements OnInit {
  tasks: any;

    /**
     * This is a constructor function that takes in a PostService object as a parameter and assigns it
     * to a private property.
     * @param {PostService} service - The "service" parameter is a dependency injection of the
     * "PostService" class. It allows the current class to access the methods and properties of the
     * "PostService" class. This is a common practice in Angular applications, where services are used
     * to handle data and business logic, and components rely on
     */
    constructor(private service: PostService){}

  /**
   * The ngOnInit function retrieves posts from a service and assigns them to a variable.
   */
    ngOnInit() {

       /* `this.service.getTasks()` is calling the `getTasks()` method of the `PostService` class to
       retrieve tasks. This method likely makes an HTTP request to a server to retrieve the tasks
       data. The method returns an observable, which is then subscribed to using the `.subscribe()`
       method. When the observable emits a value (i.e. when the HTTP request is successful), the
       function inside the `subscribe()` method is executed, which assigns the response received
       from the `getTasks()` method to the `tasks` variable of the `AppComponent` class. This allows
       the retrieved tasks to be accessed and displayed in the app's template. */
        this.service.getTasks()

       /* The `.subscribe(Response => { ... })` method is subscribing to the observable returned by the
       `getTasks()` method of the `PostService`. When the observable emits a value (i.e. when the
       HTTP request to retrieve tasks is successful), the function inside the `subscribe()` method
       is executed. In this case, the function assigns the response received from the `getTasks()`
       method to the `tasks` variable of the `AppComponent` class, allowing the retrieved tasks to
       be accessed and displayed in the app's template. */
        .subscribe(Response => {

          /* `this.tasks = Response;` is assigning the response received from the `getTasks()` method
          of the `PostService` to the `tasks` variable of the `AppComponent` class. This allows the
          retrieved tasks to be accessed and displayed in the app's template. */
          this.tasks = Response;
        })
    }
}
