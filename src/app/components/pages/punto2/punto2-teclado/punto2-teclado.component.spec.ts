import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2TecladoComponent } from './punto2-teclado.component';

describe('Punto2TecladoComponent', () => {
  let component: Punto2TecladoComponent;
  let fixture: ComponentFixture<Punto2TecladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2TecladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2TecladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
