## Usage

```bash
$ npm install
$ npm run serve

$ npm run build
```

The development server will run on port 8080 by default.

NINGBOJICHANG

AppID

wx1ed628ada097224a

AppSecret

1ea76b9ea99d2cea0c85e92af125b8cf


// renew.vue 续费
// platebind.vue 车牌绑定
// stopcar.vue 停车
// expense.vue 消费记录
// invoice.vue 发票

// pay.vue 停车缴费
// coupon.vue 优惠券
// findcar.vue 智能寻车


### nginx本地调试相关配置

#### location /bcopenapi/ 接口地址拦截转发

```bash

server {	
		#侦听80端口
    listen       80;
		#定义域名访问
    #server_name www.bjzsis.com;		
		#server_name www.bluecardsoft.com;		
		server_name ai.bluecardsoft.com.cn;
		#默认请求
    location / {
			proxy_next_upstream http_502 http_504 error timeout invalid_header;
			proxy_set_header Host $host;
			proxy_set_header X-Forwarded-For $remote_addr;
			proxy_set_header X-Real-IP        $remote_addr; 
			proxy_pass http://127.0.0.1:38888;
			break;
		}
		#api拦截
		location /bcopenapi/ {
			proxy_next_upstream http_502 http_504 error timeout invalid_header;
			proxy_set_header Host $host;
			proxy_set_header X-Forwarded-For $remote_addr;
			proxy_set_header X-Real-IP        $remote_addr; 
			proxy_pass http://ai.bluecardsoft.com.cn;			
			break;
		}
		
		#设定本虚拟主机的访问日志
      access_log  C:/nginx-1.11.4/logs/static_access.log  main;
      expires 1h;
      charset utf-8;
    }
```