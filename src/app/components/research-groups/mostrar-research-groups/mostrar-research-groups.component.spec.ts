import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarResearchGroupsComponent } from './mostrar-research-groups.component';

describe('MostrarResearchGroupsComponent', () => {
  let component: MostrarResearchGroupsComponent;
  let fixture: ComponentFixture<MostrarResearchGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarResearchGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarResearchGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
