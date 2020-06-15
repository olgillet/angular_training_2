import { MySuperPipePipe } from './my-super-pipe.pipe';

describe('MySuperPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MySuperPipePipe();
    expect(pipe).toBeTruthy();
  });
});
