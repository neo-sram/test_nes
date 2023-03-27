# full API sided app for Users , Blogs , Comments

this API side app lets the user create blogs and comment on other users blogs

## technologies used :

- NestJs
- Node.js

## EndPoints :

### Users :

- ' GET /userAuth/all ' gets all users
- ' POST /userAuth/create ' posts a body containing a user object

### Posts :

- ' Post /post/postCreate ' posts a body containng a post object that directly determines its writter from the JSON
- ' Get /post/getPostOf/:id ' gets the posts associated with the userId provided

### comments : 

- ' Post /comment/commentCreate/postOfUser/:id/postNum/:postNumber ' creates a comment in the specified blog of the specified user

## classes :

- User :

```javascript
 class User {
  id: number;
  name: string;
  age: number;
  blogs?: Blog[];
}
```

- Blog :

```javascript
export class Blog {
  writer: number;
  content: string;
  comments?: Commentary[];

  constructor(writer: number, content: string) {
    this.content = content;
    this.writer = writer;
    this.comments = [];
  }
}
```

- Comment :

```javascript
class Commentary {
  writer?: number;
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
```
