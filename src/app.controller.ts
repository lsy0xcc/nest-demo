import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['', 'hello-world'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('long-time-hello')
  async getLongTimeHello(): Promise<string> {
    return this.appService.getLongTimeHello();
  }

  @Get('hello-user')
  async getHelloUser(@Query('name') name: string): Promise<string> {
    console.log(name);
    return this.appService.getHelloUser(name);
  }

  @Get('users')
  getUserList(): any[] {
    return this.appService.getUserList();
  }
}
