import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// create entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalized = normalize(notificationData, [notification]);

export function getAllNotificationsByUser(userId) {
  return notificationData.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export { normalized };
