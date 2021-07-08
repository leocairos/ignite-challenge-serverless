
import { document } from '../utils/dynamodbClient';

interface ICreateTodoPathParm {
	user_id: string;
}

export const handle = async(event)=> {
  const { user_id } = event.pathParameters as ICreateTodoPathParm;

  const response = await document.query({
    TableName: 'tb_challenge_todo',
    KeyConditionExpression: "id = :user_id",
    ExpressionAttributeValues: {
      ":user_id": user_id
    }
  }).promise()

  return {
    statusCode: 201,
    body: JSON.stringify({
      todos: response.Items
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};