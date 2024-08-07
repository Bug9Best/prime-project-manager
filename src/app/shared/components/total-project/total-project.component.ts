import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'total-project',
  standalone: true,
  imports: [ButtonModule, TableModule, ChartModule],
  templateUrl: './total-project.component.html',
  styleUrl: './total-project.component.scss',
})
export class TotalProjectComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      datasets: [
        {
          data: [70, 30],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-400'),
            documentStyle.getPropertyValue('--blue-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--blue-400'),
          ],
        },
      ],
      labels: ['Bug', 'Issue'],

    };
    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }
}
