import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditempleadoComponent } from './editempleado.component';

describe('EditempleadoComponent', () => {
  let component: EditempleadoComponent;
  let fixture: ComponentFixture<EditempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditempleadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
