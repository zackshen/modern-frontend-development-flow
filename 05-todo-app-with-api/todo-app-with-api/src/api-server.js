import Koa from "koa";
const app = new Koa()
import Router from "koa-router";
import bodyParser from 'koa-body'
import { nanoid } from "nanoid";

const db = {
  todos: [
    { id: nanoid(), content: '起床 7:00', status: 'active' },
    { id: nanoid(), content: '遛狗', status: 'active' },
    { id: nanoid(), content: '外出采购', status: 'active' },
  ]
}

app.use(bodyParser({
  multipart: true,
  urlencoded: true
}));

const todos = Router({
  prefix: '/todos'
})


todos.get('/:id/', async function (ctx, next) {
  const { id } = ctx.request.params
  ctx.response.body = { id }
  await next()
})

todos.get('/', async function (ctx, next) {
  ctx.response.body = db.todos
  await next()
})

todos.post('/', async function (ctx, next) {
  const { content } = ctx.request.body
  const todo = {
    id: nanoid(),
    content,
    status: 'active'
  }
  db.todos.push(todo)
  ctx.response.body = todo
  await next()
})

todos.delete('/:id', async function (ctx, next) {
  const { id } = ctx.request.params
  db.todos = db.todos = db.todos.filter(todo => todo.id !== id)
  ctx.response.body = { id }
  await next()
})

todos.put('/:id', async function (ctx, next) {
  const data = ctx.request.body
  const { id } = ctx.request.params

  db.todos = db.todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        ...data
      }
    }
    return todo
  })
  ctx.response.body = { id }
})

app.use(todos.routes());

console.log('listen at: http://localhost:3000')
app.listen(3000);
