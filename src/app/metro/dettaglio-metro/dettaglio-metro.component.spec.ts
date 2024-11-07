import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioMetroComponent } from './dettaglio-metro.component';

describe('DettaglioMetroComponent', () => {
  let component: DettaglioMetroComponent;
  let fixture: ComponentFixture<DettaglioMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioMetroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettaglioMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
