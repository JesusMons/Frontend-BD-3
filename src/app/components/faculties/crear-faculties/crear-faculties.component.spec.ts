import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacultiesComponent } from './crear-faculties.component';

describe('CrearFacultiesComponent', () => {
  let component: CrearFacultiesComponent;
  let fixture: ComponentFixture<CrearFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFacultiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
