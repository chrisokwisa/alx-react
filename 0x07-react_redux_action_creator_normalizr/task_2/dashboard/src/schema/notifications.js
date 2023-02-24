import * as notificationData from "../../notifications.json";
import { normalize, schema } from "normalizr";

// create entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const result = [];
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      result.push(messages[notifications[id].context]);
    }
  }

  return result;
}

export { normalized };
