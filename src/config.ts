const prod = "production" === process.env.NODE_ENV;

// 运行时的端口号，测试环境是6688，生产环境是6690
const port = prod ? 6688 : 6690;

// 服务器的请求域名前缀
const prefix = prod ? "" : "";


export { port, prefix };
