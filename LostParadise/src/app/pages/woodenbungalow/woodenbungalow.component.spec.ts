import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenbungalowComponent } from './woodenbungalow.component';

describe('WoodenbungalowComponent', () => {
  let component: WoodenbungalowComponent;
  let fixture: ComponentFixture<WoodenbungalowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoodenbungalowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WoodenbungalowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
