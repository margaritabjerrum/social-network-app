import fs from 'fs';
import ejs from 'ejs';
import { INotificationTemplate } from '@notification/interfaces/notification.interface';

class NotificationTemplate {
  public notificationMessageTemplate(templateParams: INotificationTemplate): string {
    const { username, header, message } = templateParams;
    return ejs.render(fs.readFileSync(__dirname + '/notification.ejs', 'utf8'), {
      username,
      header,
      message,
      image_url: 'https://www.svgrepo.com/show/304531/notification-alert.svg'
    });
  }
}

export const notificationTemplate: NotificationTemplate = new NotificationTemplate();
