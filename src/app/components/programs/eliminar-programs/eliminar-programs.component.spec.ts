import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProgramsComponent } from './eliminar-programs.component';

describe('EliminarProgramsComponent', () => {
  let component: EliminarProgramsComponent;
  let fixture: ComponentFixture<EliminarProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
