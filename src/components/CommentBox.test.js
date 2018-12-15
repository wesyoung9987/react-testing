import React from 'react';
// import { shallow } from 'enzyme';
import { mount } from 'enzyme';
// Note: using mount here just for demonstration purposes.
// Could use shallow like in App.test

import Root from '../Root';
import CommentBox from './CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment'
      }
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('clears the textarea when the form is submitted', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  
    wrapped.find('form').simulate('submit', {
      preventDefault: () => {}
    });
  
    wrapped.update();
  
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

// it('has a textarea and a button', () => {
//   const wrapped = shallow(<CommentBox />);

//   expect(wrapped.find('textarea').length).toEqual(1);
//   expect(wrapped.find('button').length).toEqual(1);
// });
