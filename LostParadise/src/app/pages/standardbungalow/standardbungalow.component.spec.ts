import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardbungalowComponent } from './standardbungalow.component';

describe('StandardbungalowComponent', () => {
  let component: StandardbungalowComponent;
  let fixture: ComponentFixture<StandardbungalowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardbungalowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardbungalowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
