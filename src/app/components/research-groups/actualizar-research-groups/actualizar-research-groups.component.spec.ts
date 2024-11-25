import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarResearchGroupsComponent } from './actualizar-research-groups.component';

describe('ActualizarResearchGroupsComponent', () => {
  let component: ActualizarResearchGroupsComponent;
  let fixture: ComponentFixture<ActualizarResearchGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarResearchGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarResearchGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
