import AWS from "aws-sdk";
import message from "aws-sdk/lib/maintenance_mode_message.js";
message.suppress = true;

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const db = new AWS.DynamoDB.DocumentClient();

const Table = "employee";

export { db, Table };
