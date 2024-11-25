import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarResearchGroupsComponent } from './eliminar-research-groups.component';

describe('EliminarResearchGroupsComponent', () => {
  let component: EliminarResearchGroupsComponent;
  let fixture: ComponentFixture<EliminarResearchGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarResearchGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarResearchGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
