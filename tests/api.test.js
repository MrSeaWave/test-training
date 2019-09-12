import { getUser, getWrongUser } from '../services/api';

it('getMethod2 async', async () => {
  expect.assertions(1);
  const resp = await getUser({ id: 1 });
  expect(resp.success).toBe(true);
});

it('getMethod2 promise', () => {
  expect.assertions(2);
  return getUser({ id: 1 }).then(resp => {
    const { success } = resp;
    expect(success).toBe(true);
    expect(1 + 1).toBe(2);
  });
});

// it('getMethod wrong',()=>{
//   expect.assertions(1);
//   return getWrongUser().catch(e=>{
//     console.log('wrong ',e)
//     expect(e).toBeTruthy()
//   })
// })
