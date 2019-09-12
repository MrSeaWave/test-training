# test-training

## Step 1

```bash
$ git clone https://github.com/MrSeaWave/test-training.git
```

## Step 2

```bash
$ yarn
```

## Step 3

所有文件测试

```bash
$ npm run test
```

单独`sum.js`文件测试

```bash
$ npm run testSum
```

## 注意

- 如果出现下面提示，请移除[`__snapshots__`](./tests/Components/__snapshots__)文件夹
    ```bash
    Snapshot Summary
     › 1 snapshot obsolete from 1 test suite. To remove it, run `npm test -- -u`.
       ↳ tests/Components/LinkAct.test.js
           • Link Act 方法改变class数据 2
    ```

## 参考

- [单元测试](https://github.com/MrSeaWave/Booknotes/tree/master/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
