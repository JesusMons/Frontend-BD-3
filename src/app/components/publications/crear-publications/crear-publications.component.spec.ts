import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPublicationsComponent } from './crear-publications.component';

describe('CrearPublicationsComponent', () => {
  let component: CrearPublicationsComponent;
  let fixture: ComponentFixture<CrearPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPublicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
