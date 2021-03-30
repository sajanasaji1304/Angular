import {AuthService} from './authguard.service';

describe('Authguard', () => {
  it('should create an instance', () => {
    expect(new AuthService()).toBeTruthy();
  });
});
