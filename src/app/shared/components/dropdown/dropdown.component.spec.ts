import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';
import { By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  const mockDropdownOptions = [
    {
      label: '5 minutes',
      value: 5,
    },
    {
      label: '30 minutes',
      value: 30,
    },
    {
      label: '1 hour',
      value: 60,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have dropdown options in TS", () => {
    expect(component.dropdownOptions).toEqual(mockDropdownOptions)
  });

  it("should render dropdown options in HTML", () => {
    const dropdownEl: DebugElement = fixture.debugElement.query(By.css('#custom-dropdown'));
    const optionElements: HTMLElement[] = dropdownEl.nativeElement.children as HTMLElement[]

    [...optionElements].forEach((optionElement, index) => {
      expect(optionElement.textContent).toBe(mockDropdownOptions[index].label)
    })
  });

  it("should set interval via emitter", () => {
    spyOn(component.setInterval, "emit");

    const dropdownEl: HTMLSelectElement = fixture.debugElement.query(By.css('#custom-dropdown')).nativeElement;
    dropdownEl.value = dropdownEl.options[0].value;
    dropdownEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.setInterval.emit).toHaveBeenCalledOnceWith('5');
  })
});
