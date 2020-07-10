export interface Notification {
  activatorId: number;
  fromUserId: number;
  id: number;
  importance: number;
  isActive: boolean;
  isRead: boolean;
  message: string;
  toUserId: number;
}
