import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFacultiesComponent } from './mostrar-faculties.component';

describe('MostrarFacultiesComponent', () => {
  let component: MostrarFacultiesComponent;
  let fixture: ComponentFixture<MostrarFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarFacultiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
