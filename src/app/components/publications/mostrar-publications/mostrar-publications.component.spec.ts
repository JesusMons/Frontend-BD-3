import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicationsComponent } from './mostrar-publications.component';

describe('MostrarPublicationsComponent', () => {
  let component: MostrarPublicationsComponent;
  let fixture: ComponentFixture<MostrarPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPublicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
