import React from 'react';
import TestRenderer from 'react-test-renderer';
import Link from '../../src/Components/Link';

it('当鼠标悬浮时改变class数据', () => {
  const component = TestRenderer.create(
    <Link page="http://www.facebook.com"> ------- Facebook ------- </Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
