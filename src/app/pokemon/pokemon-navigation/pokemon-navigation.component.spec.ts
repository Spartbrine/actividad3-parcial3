import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNavigationComponent } from './pokemon-navigation.component';

describe('PokemonNavigationComponent', () => {
  let component: PokemonNavigationComponent;
  let fixture: ComponentFixture<PokemonNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
