import * as util from './index';

const style = {
  top:"1em",
  height:"2em"
};
describe('util test',function () {
  it('should receive:',function(){
    expect(util.addStyle('.123',style)).toEqual(['use-spaced-icon']);
  });
});