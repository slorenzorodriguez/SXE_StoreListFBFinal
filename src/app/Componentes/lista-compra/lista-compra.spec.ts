import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductos } from './lista-compra';

describe('ListaProductos', () => {
  let component: ListaProductos;
  let fixture: ComponentFixture<ListaProductos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProductos ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
