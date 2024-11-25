import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFacultiesComponent } from './actualizar-faculties.component';

describe('ActualizarFacultiesComponent', () => {
  let component: ActualizarFacultiesComponent;
  let fixture: ComponentFixture<ActualizarFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarFacultiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
