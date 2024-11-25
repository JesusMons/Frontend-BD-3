import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUserByProgramsComponent } from './mostrar-user-by-programs.component';

describe('MostrarUserByProgramsComponent', () => {
  let component: MostrarUserByProgramsComponent;
  let fixture: ComponentFixture<MostrarUserByProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarUserByProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarUserByProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
