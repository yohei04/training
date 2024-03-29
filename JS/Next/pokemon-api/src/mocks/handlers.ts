import { db } from './db'

export const handlers = [
  // Create REST API request handlers based on
  // the "task" database model.
  ...db.user.toHandlers('rest'),
  ...db.blog.toHandlers('rest'),
]

// export const handlers = [
//   rest.get(`${BASE_ENDPOINT}/blogs`, (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.delay(500),
//       ctx.json([
//         {
//           id: 1,
//           title: 'title1',
//           body: 'body1',
//           author: 'author1',
//         },
//         {
//           id: 2,
//           title: 'title2',
//           body: 'body2',
//           author: 'author2',
//         },
//       ])
//     )
//   }),

//   rest.get(`${BASE_ENDPOINT}/blogs/:id`, (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.delay(500),
//       ctx.json({
//         id: req.params.id,
//         title: `title${req.params.id}`,
//         body: `body${req.params.id}`,
//         author: `author${req.params.id}`,
//       })
//     )
//   }),

//   rest.post(`${BASE_ENDPOINT}/blogs`, (req, res, ctx) => {
//     return res(ctx.status(200), ctx.delay(500))
//   }),
// ]
