import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const login = [
      {
        id: 1,
        name: 'myUse'
      }
    ];
    return { login };
  }
}
