import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPublicationsComponent } from './actualizar-publications.component';

describe('ActualizarPublicationsComponent', () => {
  let component: ActualizarPublicationsComponent;
  let fixture: ComponentFixture<ActualizarPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarPublicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
