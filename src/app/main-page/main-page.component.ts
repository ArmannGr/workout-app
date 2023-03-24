import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  exercises = ['Lat Pulldown', 'Lat Extension', 'Seated Row', 'Reverse Fly', 'Hammer Curls', 'Preacher Curls'];
  myWorkouts = {
    title: 'Pull',
    exercise: this.exercises
  }
  timestamp = new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear();
  onlyRelevantExercises: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getOnlyRelevantExercises();
  }

  getOnlyRelevantExercises(){
    this.onlyRelevantExercises = this.exercises.slice(0, 3);
  }

}
