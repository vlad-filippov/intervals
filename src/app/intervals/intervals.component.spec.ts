import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntervalsComponent } from './intervals.component';
import { SharedModule } from "../shared/shared.module";
import { ONE_HOUR_INTERVALS, HALF_HOUR_INTERVALS, FIVE_MINS_INTERVALS } from "../../mock-data/mock-intervals";

describe('IntervalsComponent', () => {
  let component: IntervalsComponent;
  let fixture: ComponentFixture<IntervalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get 1 hour intervals", () => {
    component.setInterval('60');

    expect(component.intervalDays).toEqual(ONE_HOUR_INTERVALS)
  });

  it("should get 30 mins intervals", () => {
    component.setInterval('30');

    expect(component.intervalDays).toEqual(HALF_HOUR_INTERVALS)
  });

  it("should get 5 mins intervals", () => {
    component.setInterval('5');

    expect(component.intervalDays).toEqual(FIVE_MINS_INTERVALS)
  });
});
