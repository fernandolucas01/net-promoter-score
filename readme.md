# NPS NLW#4
## Installation
Install the dependencies and devDependencies and start the server.
`$ yarn`
or
`$ npm install`
## Run
`$ yarn dev`
or
`$ npm run dev`

## Routes
| Route | Method | Params | Description |
| - | - | - | - |
|`/users` | POST | Body: `name` and `email` |Create a new user |
| `/surveys` | GET |  | List all surveys |
| `/surveys` | POST | Body: `title` and `description` | Create a new Survey |
| `/sendMail` | POST | Body: `email` and `survey_id` | Send survey |
|`/nps/:survey_id`| GET | Url: `survey_id` | Set user rating for a survey |

## Request body
`POST /users`
```
{
    "name": "myName",
    "email": "myemail@example.com"
}
```
`POST /survey`
```
{
    "title": "My survey",
    "description": "how do you rate the product?"
}
```

`POST /sendMail`
```
{
    "email": "myemail@example.com",
    "survey_id": "f87092d2-d9e9-4e28-951a-433df07b8e3c"
}
```
## Run tests
`$ yarn test`
or
`npm run test`