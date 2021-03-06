
import { document } from '../utils/dynamodbClient';
import  { v4 as uuidv4 } from 'uuid';

interface ICreateTodo {
	title: string;
	deadline: string;
}

interface ICreateTodoPathParm {
	user_id: string;
}

export const handle = async(event)=> {
  const { title, deadline } = JSON.parse(event.body) as ICreateTodo;
  const { user_id } = event.pathParameters as ICreateTodoPathParm;

  const todoToSave = {
    id: uuidv4(),
    user_id,
    title,
    done: false, 
    deadline: new Date(deadline)
  }

  await document.put({
    TableName: 'tb_challenge_todo',
    Item: todoToSave
  }).promise()

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Todo created!',
      todoSaved: todoToSave
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};