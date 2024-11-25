import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPublicationsComponent } from './eliminar-publications.component';

describe('EliminarPublicationsComponent', () => {
  let component: EliminarPublicationsComponent;
  let fixture: ComponentFixture<EliminarPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPublicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
