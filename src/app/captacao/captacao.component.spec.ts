import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptacaoComponent } from './captacao.component';

describe('CaptacaoComponent', () => {
  let component: CaptacaoComponent;
  let fixture: ComponentFixture<CaptacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
