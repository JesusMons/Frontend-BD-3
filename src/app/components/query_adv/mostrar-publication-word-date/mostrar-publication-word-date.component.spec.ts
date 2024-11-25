import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicationWordDateComponent } from './mostrar-publication-word-date.component';

describe('MostrarPublicationWordDateComponent', () => {
  let component: MostrarPublicationWordDateComponent;
  let fixture: ComponentFixture<MostrarPublicationWordDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPublicationWordDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPublicationWordDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
