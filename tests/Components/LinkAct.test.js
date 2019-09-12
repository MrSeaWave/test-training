import React from 'react';
import { create, act } from 'react-test-renderer';
import LinkAct from '../../src/Components/LinkAct';

it('Link Act 方法改变class数据', () => {
  let root;
  act(() => {
    root = create(<LinkAct page="http://www.facebook.com">----- Facebook ----- </LinkAct>);
  });
  expect(root.toJSON()).toMatchSnapshot();

  // 有个问题，暂时没办法运行出来
  act(() => {
    root = root.update(<LinkAct page="http://www.baidu.com">------ BaiDu ------</LinkAct>);
  });

  console.log('rooot', root);
  expect(root.toJSON()).toMatchSnapshot();
});
