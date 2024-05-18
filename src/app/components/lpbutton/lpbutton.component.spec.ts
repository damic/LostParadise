import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpbuttonComponent } from './lpbutton.component';

describe('LpbuttonComponent', () => {
  let component: LpbuttonComponent;
  let fixture: ComponentFixture<LpbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
