import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAdministracaoComponent } from './painel-administracao.component';

describe('PainelAdministracaoComponent', () => {
  let component: PainelAdministracaoComponent;
  let fixture: ComponentFixture<PainelAdministracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelAdministracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAdministracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
