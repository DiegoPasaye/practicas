import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPage } from './inicio.page';
import { IonicModule } from '@ionic/angular';
import { Personajes } from 'src/app/services/personajes';
import { of } from 'rxjs';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;
  const personajesServiceMock = {
    getPersonajes: () => of([]),
    getPersonajesDetalle: (id: string) => of({})
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      declarations: [InicioPage],
      providers: [
        { provide: Personajes, useValue: personajesServiceMock }
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});