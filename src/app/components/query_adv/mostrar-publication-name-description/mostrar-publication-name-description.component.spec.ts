import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicationNameDescriptionComponent } from './mostrar-publication-name-description.component';

describe('MostrarPublicationNameDescriptionComponent', () => {
  let component: MostrarPublicationNameDescriptionComponent;
  let fixture: ComponentFixture<MostrarPublicationNameDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPublicationNameDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPublicationNameDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
