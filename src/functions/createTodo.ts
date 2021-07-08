
import { document } from '../utils/dynamodbClient';
import  { v4 as uuidv4 } from 'uuid';

interface ICreateTodo {
	title: string;
	deadline: Date;
}

interface ICreateTodoPathParm {
	user_id: string;
}

export const handle = async(event)=> {
  const { title, deadline } = event.body as ICreateTodo;
  const { user_id } = event.pathParameters as ICreateTodoPathParm;

  await document.put({
    TableName: 'tb_challenge_todo',
    Item: {
      id: uuidv4(),
      user_id,
      title,
      done: false, 
	    deadline: new Date(deadline)
    }
  }).promise()

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Todo created!',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};