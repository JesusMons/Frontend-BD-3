import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCountPublicationsResearchComponent } from './mostrar-count-publications-research.component';

describe('MostrarCountPublicationsResearchComponent', () => {
  let component: MostrarCountPublicationsResearchComponent;
  let fixture: ComponentFixture<MostrarCountPublicationsResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarCountPublicationsResearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCountPublicationsResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
