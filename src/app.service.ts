import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserList() {
    return [
      {
        id: 1,
        name: 'Jane',
      },
      {
        id: 2,
        name: 'John',
      },
    ];
  }

  getLongTimeHello(time = 1000): Promise<string> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const ran = Math.random();
        if (ran > 0.3) {
          res(`hello ${ran.toFixed(2)}`);
        } else {
          rej(`fake error ${ran.toFixed(2)}`);
        }
      }, time);
    });
  }

  getHelloUser(input = ''): Promise<string> {
    return new Promise((res) => {
      setTimeout(() => {
        res(input + ', hello!');
      }, Math.random() * 1000);
    });
  }
}
