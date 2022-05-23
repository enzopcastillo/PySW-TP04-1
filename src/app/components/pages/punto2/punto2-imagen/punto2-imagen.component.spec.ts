import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2ImagenComponent } from './punto2-imagen.component';

describe('Punto2ImagenComponent', () => {
  let component: Punto2ImagenComponent;
  let fixture: ComponentFixture<Punto2ImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2ImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2ImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
