import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProgramsComponent } from './crear-programs.component';

describe('CrearProgramsComponent', () => {
  let component: CrearProgramsComponent;
  let fixture: ComponentFixture<CrearProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
