import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2PalabraComponent } from './punto2-palabra.component';

describe('Punto2PalabraComponent', () => {
  let component: Punto2PalabraComponent;
  let fixture: ComponentFixture<Punto2PalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2PalabraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2PalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
