import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGroupUserResearchComponent } from './mostrar-group-user-research.component';

describe('MostrarGroupUserResearchComponent', () => {
  let component: MostrarGroupUserResearchComponent;
  let fixture: ComponentFixture<MostrarGroupUserResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarGroupUserResearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarGroupUserResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
