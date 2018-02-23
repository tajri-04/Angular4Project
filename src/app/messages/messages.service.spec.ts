import { Message } from './../message/message';
import { TestBed, inject } from '@angular/core/testing';
import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
    it('should be initialisated with mock data', inject([MessagesService], (service: MessagesService) => {
      expect(service).toBeTruthy();
    }));
it('should allow us to add a new message to the messages', inject([MessagesService], (service: MessagesService) => {
  const testMessage = {
    author: 'Jack',
    content: '@Joe : Fine wby?',
    date: '2017-12-05',
    hidden: false
  };
    expect(service.addMessage(testMessage)).toBeFalsy();
    expect(service.getSyncMessages()[3]).toBe(testMessage);
    }));
  });

