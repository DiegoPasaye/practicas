import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle.component';
import { Personajes } from 'src/app/services/personajes';
import { of } from 'rxjs';

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;

  const personajesServiceMock = {
    getPersonajesDetalle: (id: string) => of({})
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(), 
        DetalleComponent 
      ],
    
      providers: [
        { provide: Personajes, useValue: personajesServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});