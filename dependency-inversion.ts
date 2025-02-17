interface INotificationRepository {
  sendNotification(): void;
}

class SMSNotficationProcessor implements INotificationRepository {
  sendNotification() {
    console.log('SMS sent')
  }
}

class EmailNotficationProcessor implements INotificationRepository {
  sendNotification() {
    console.log('Email sent')
  }
}


class NotficationProcessor {
  notificationProvider: INotificationRepository
  constructor(notificationProvider: INotificationRepository) {
    this.notificationProvider = notificationProvider
  } 

  sendNotification() {
    this.notificationProvider.sendNotification()
  }
}


const smsProvider = new SMSNotficationProcessor()
const notificationProcessor = new NotficationProcessor(smsProvider);


notificationProcessor.sendNotification()


