import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUserComponent } from './mostrar-user.component';

describe('MostrarUserComponent', () => {
  let component: MostrarUserComponent;
  let fixture: ComponentFixture<MostrarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
