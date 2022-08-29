import { Injectable } from '@nestjs/common';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { UpdateMailerDto } from './dto/update-mailer.dto';
import { MailerService as mailerSe } from '@nestjs-modules/mailer';
import generateTemplate from './template/index';

@Injectable()
export class MailerService {
  constructor(private readonly mailerServicer: mailerSe) { }
  async send(toEmail, subject) {
    await this.mailerServicer.sendMail({
      to: '980355088@qq.com', // 要发送的目标邮箱
      subject: 'Testing Nest MailerModule ✔', // 标题
      html: generateTemplate(Date.now())
      // html: '<b>welcome aaa</b>',
      // from: '18355403288@163.com', // 自定义发送者的邮箱，默认在mudule已配置了，可以不配置
      // text: 'welcome', // 发送的文字        
    })
    .then(() => {
      // return 'send ... success'
    })
    .catch(() => {
      return 'send ... fail'
    });
    return 'send ... success'
  }

  create(createMailerDto: CreateMailerDto) {
    return 'This action adds a new mailer';
  }

  findAll() {
    return `This action returns all mailer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailer`;
  }

  update(id: number, updateMailerDto: UpdateMailerDto) {
    return `This action updates a #${id} mailer`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailer`;
  }
}
