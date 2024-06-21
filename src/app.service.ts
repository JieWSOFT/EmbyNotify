import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService){}

  getHello(embyInfo:any): string {
    console.log(embyInfo)
    // const webhook = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7d127e31-bea6-4894-89d4-143c4b8473b1'
    const webhook = 'https://oapi.dingtalk.com/robot/send?access_token=9a975a1365f93c892e682704aaf30e33d6073e39d37529ed93d817fd1dec2f34'
    const testObj = {
      "actionCard": {
          "title": "Emby通知", 
          "text": "![screenshot](https://tse4-mm.cn.bing.net/th/id/OIP-C.6er-wTFZf2RhpVqfMVgxvgHaEK?rs=1&pid=ImgDetMain) \n "+
          "### Emby通知 \n "+
          `#### 用户：${embyInfo.User.Name} \n`+
          `内容：${embyInfo.Description} \n`, 
          "btnOrientation": "0", 
          "singleTitle" : "Emby地址",
          "singleURL" : "https://emby.tymd.xyz:11443"
      }, 
      "msgtype": "actionCard"
  }
    //  {
    //   "msgtype": "news",
    //   "news": {
    //     "articles" : [
    //         {
    //             "title" : "Emby通知",
    //             "description" : `${embyInfo.Description}`,
    //             "picurl" : "http://res.mail.qq.com/node/ww/wwopenmng/images/independent/doc/test_pic_msg1.png"
    //         }
    //      ]
    //  }
    // }
    console.log(embyInfo.User.Name)
    this.httpService.post(webhook,testObj).subscribe(res=>{
      console.log(res.status)
    })
    return 'Hello World!';
  }

}
