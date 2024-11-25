import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResearchGroupsComponent } from './crear-research-groups.component';

describe('CrearResearchGroupsComponent', () => {
  let component: CrearResearchGroupsComponent;
  let fixture: ComponentFixture<CrearResearchGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearResearchGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearResearchGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
