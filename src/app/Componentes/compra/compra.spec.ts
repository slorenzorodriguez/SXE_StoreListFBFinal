import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreList } from './compra';

describe('Compra', () => {
  let component: StoreList;
  let fixture: ComponentFixture<StoreList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreList ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
