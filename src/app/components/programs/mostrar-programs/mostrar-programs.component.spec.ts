import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProgramsComponent } from './mostrar-programs.component';

describe('MostrarProgramsComponent', () => {
  let component: MostrarProgramsComponent;
  let fixture: ComponentFixture<MostrarProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
