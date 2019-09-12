import { addUser, deleteUser, editUser, getUsers } from '../services/api';

describe('request 方法测试', () => {
  it('getMethod 测试', async () => {
    // 确保在异步的测试用例中，有一个断言会在回调函数中被执行
    // 确保添加 expect.assertions 来验证一定数量的断言被调用。 否则一个fulfilled态的Promise 不会让测试失败
    expect.assertions(2);
    const resp = await getUsers();
    expect(resp.success).toBe(true);
    expect(resp.data.data).not.toHaveLength(3);
  });

  it('postMethod 测试', async () => {
    expect.assertions(1);
    const resp = await editUser({ id: 1, name: '233' });
    expect(resp.data.data).toBe(1);
  });

  it('putMethod 测试', async () => {
    expect.assertions(1);
    const resp = await addUser({ name: '233' });
    expect(resp.data.data).toBe(2);
  });

  it('deleteMethod 测试', async () => {
    expect.assertions(1);
    const resp = await deleteUser({ id: 1223 });
    expect(resp.data.msg).toBe('delete success');
  });
});
