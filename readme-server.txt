localhost:5000/todos

// Create Todo
POST /todos

Request
{
  "title": String,
  "done": Boolean
}

Response
{
  success: Boolean,
  result: {
    uid: String,
    title: String,
    done: Boolean
  }
}

// List all Todos
GET /todos

Response
{
  success: Boolean,
  result: Array of todos
}

// Delete Todo
DELETE /todos/:uid

Response
{
  success: Boolean,
  result: String
}

// Update Todo
PUT /todos/:uid

Response
{
  success: Boolean,
  result: String
}
