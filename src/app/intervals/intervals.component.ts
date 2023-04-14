import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IntervalModel } from "../shared/models/interval.model";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@Component({
  standalone: true,
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  styleUrls: ['./intervals.component.scss'],
  imports: [CommonModule, SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntervalsComponent implements OnInit {
  public intervalDays: IntervalModel[][] = [];

  public ngOnInit(): void {
    this.setInterval(5);
  }

  public trackByFn(index: number): number {
    return index;
  }

  public setInterval(interval: string | number): void {
    const daysOfCurrentMonth: number = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const minutesInDay: number = 1440;
    const allIntervals = minutesInDay / +interval;
    this.intervalDays = [];

    for (let dayIndex = 0; dayIndex <= daysOfCurrentMonth; dayIndex++) {
      const daysInMonths = [];

      for (let i = 1; i <= allIntervals; i++) {
        daysInMonths.push({ time: this.getTime(+interval, i), value: `Detail ${i}` })
      }

      this.intervalDays.push(daysInMonths);
    }
  }

  private getTime(interval: number, index: number): number {
    return (new Date(new Date().setHours(0, 0, 0, 0)).getTime() + (interval * index * 60000));
  }
}
