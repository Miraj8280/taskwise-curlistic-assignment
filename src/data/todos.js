import { v4 as uuid } from 'uuid';

export const myTodos = [
    {
        id: uuid(),
        name: 'Learn MongoDB',
        completed: false,
    },
    {
        id: uuid(),
        name: 'Learn Express Js',
        completed: false
    },
    {
        id: uuid(),
        name: 'Learn React Js',
        completed: false
    },
    {
        id: uuid(),
        name: 'Learn Node Js',
        completed: false
    }
]