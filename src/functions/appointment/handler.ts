import * as AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB.DocumentClient();
export const appointmentHandler = async (event) => {

  console.log("estoy desde la lambda que ejecutara operaciones desde peru");
  console.log(event);
  const id = event.detail.id;

  const result = await dynamodb.update({
    TableName: "Appointment-dev",
    UpdateExpression: "set status_appointment=:status_appointment",
    ExpressionAttributeValues: {
      ":status_appointment": 1
    },
    Key: { id },
    ReturnValues: "ALL_NEW"

  }).promise();

  console.log(result);

  return {
    statusCode: 200,
    event
  };
};
