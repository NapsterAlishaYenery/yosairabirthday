import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayContentComponent } from './birthday-content.component';

describe('BirthdayContentComponent', () => {
  let component: BirthdayContentComponent;
  let fixture: ComponentFixture<BirthdayContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
