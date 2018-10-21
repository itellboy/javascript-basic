const App = require('koa')
const { spawn } = require('child_process');

const app = new App()

app.use(async ctx => {
  const ls = spawn('sh', ['./deploy.sh']);
  ls.stdout.on('data', (data) => {
    console.log(`输出：${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`错误：${data}`);
  });

  ls.on('close', (code) => {
    console.log(`子进程退出码：${code} at ${new Date()}`);
  });
  ctx.body = 'deploy finish';
});

app.listen(3000)