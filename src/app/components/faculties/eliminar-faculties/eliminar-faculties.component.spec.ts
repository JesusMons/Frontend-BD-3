import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFacultiesComponent } from './eliminar-faculties.component';

describe('EliminarFacultiesComponent', () => {
  let component: EliminarFacultiesComponent;
  let fixture: ComponentFixture<EliminarFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarFacultiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
