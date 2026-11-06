import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTips } from './shared-tips';

describe('SharedTips', () => {
  let component: SharedTips;
  let fixture: ComponentFixture<SharedTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTips],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedTips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
