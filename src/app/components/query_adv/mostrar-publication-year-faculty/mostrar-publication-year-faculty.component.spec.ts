import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicationYearFacultyComponent } from './mostrar-publication-year-faculty.component';

describe('MostrarPublicationYearFacultyComponent', () => {
  let component: MostrarPublicationYearFacultyComponent;
  let fixture: ComponentFixture<MostrarPublicationYearFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPublicationYearFacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPublicationYearFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
