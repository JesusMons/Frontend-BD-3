import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGruoupUserAndReserchComponent } from './mostrar-gruoup-user-and-reserch.component';

describe('MostrarGruoupUserAndReserchComponent', () => {
  let component: MostrarGruoupUserAndReserchComponent;
  let fixture: ComponentFixture<MostrarGruoupUserAndReserchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarGruoupUserAndReserchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarGruoupUserAndReserchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
