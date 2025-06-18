import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayContentComponent } from './components/birthday-content/birthday-content.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';


@Component({
  selector: 'app-root',
  imports: [BirthdayContentComponent, ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Yosaira Birthday';
  isBirthdayToday: boolean = false;
  targetBirthday: Date = new Date('2025-07-08T00:00:00-04:00'); // Año, Mes (0-11), Día, Hora
 

  ngOnInit() {
    this.checkIfBirthday();
  }

  checkIfBirthday(): void {
    const today = new Date();

    if (today.getFullYear() === this.targetBirthday.getFullYear() &&
      today.getMonth() === this.targetBirthday.getMonth() &&
      today.getDate() === this.targetBirthday.getDate()) {
      this.isBirthdayToday = true;
      console.log('¡Hoy es el cumpleaños de Yosayra!');
    } else {
      this.isBirthdayToday = false;
      console.log('Aún no es el cumpleaños. Fecha actual:', today.toLocaleDateString());
    }
  }
}
