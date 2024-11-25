import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProgramsComponent } from './actualizar-programs.component';

describe('ActualizarProgramsComponent', () => {
  let component: ActualizarProgramsComponent;
  let fixture: ComponentFixture<ActualizarProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
