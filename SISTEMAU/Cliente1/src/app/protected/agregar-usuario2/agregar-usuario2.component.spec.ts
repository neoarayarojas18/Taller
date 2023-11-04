import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuarioComponent2 } from './agregar-usuario2.component';

describe('AgregarUsuario2Component', () => {
  let component: AgregarUsuarioComponent2;
  let fixture: ComponentFixture<AgregarUsuarioComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarUsuarioComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarUsuarioComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
