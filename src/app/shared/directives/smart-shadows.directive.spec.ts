import { SmartShadowsDirective } from './smart-shadows.directive';
import { By } from "@angular/platform-browser";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  template: `
    <div class="scroll-block" id="scroll-block" appSmartShadows>
      <div class="scroll-item"></div>
    </div>`,
  styles: ['.scroll-block { width: 300px; max-width: 300px; overflow: auto }', '.scroll-item { width: 500px; min-width: 500px; height: 100px }']
})
class TestComponent {
}

describe('SmartShadowsDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  const leftShadow: string = 'gray 20px 0px 10px -10px inset';
  const rightShadow: string = 'gray -20px 0px 10px -10px inset';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, SmartShadowsDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveEl = fixture.debugElement.query(By.directive(SmartShadowsDirective));
    expect(directiveEl).not.toBeNull();
  });

  it("should have right shadow", () => {
    const scrollBlockEl = fixture.debugElement.query(By.css('#scroll-block')).nativeElement;

    scrollBlockEl.scrollTo(0, 0);
    scrollBlockEl.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(scrollBlockEl.style.boxShadow).toBe(rightShadow);
  });

  it("should have left shadow", () => {
    const scrollBlockEl = fixture.debugElement.query(By.css('#scroll-block')).nativeElement;

    scrollBlockEl.scrollTo(scrollBlockEl.scrollWidth, scrollBlockEl.scrollWidth);
    scrollBlockEl.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(scrollBlockEl.style.boxShadow).toBe(leftShadow);
  });

  it("should have shadows on both sides", () => {
    const scrollBlockEl = fixture.debugElement.query(By.css('#scroll-block')).nativeElement;

    scrollBlockEl.scrollTo(100, 100);
    scrollBlockEl.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(scrollBlockEl.style.boxShadow).toBe(rightShadow + ', ' + leftShadow);
  });
});
