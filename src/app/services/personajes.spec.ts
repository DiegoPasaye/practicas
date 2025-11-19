import { TestBed } from '@angular/core/testing';
import { Personajes } from './personajes';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Firestore } from '@angular/fire/firestore';

describe('Personajes Service', () => {
  let service: Personajes;
  let httpMock: HttpTestingController;

  // Mock simple para Firestore
  const firestoreMock = {
    collection: () => ({}),
    doc: () => ({})
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: Firestore, useValue: firestoreMock }
      ]
    });
    service = TestBed.inject(Personajes);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getDatos debería hacer una petición GET a la API', () => {
    const dummyResponse = { data: [] };

    service.getDatos().subscribe(res => {
      expect(res).toEqual(dummyResponse as any);
    });

    const req = httpMock.expectOne('https://practicaangular-bc58e-default-rtdb.firebaseio.com/.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('getDatosById debería hacer una petición GET con el ID', () => {
    const id = 1;
    const dummyResponse = { name: 'Luke' };

    service.getDatosById(id).subscribe(res => {
      expect(res).toEqual(dummyResponse as any);
    });

    const req = httpMock.expectOne(`https://practicaangular-bc58e-default-rtdb.firebaseio.com/.json/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});