import { saveComment } from './index';
import { SAVE_COMMENT } from './types';

describe('#saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('hsa the correct payload', () => {
    const action = saveComment('Some Comment');
    expect(action.payload).toEqual('Some Comment');
  });
});
