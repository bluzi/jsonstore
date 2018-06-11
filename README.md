<p align="center">
<img src="https://wpoffice365.com/wp-content/uploads/2017/07/react-logo.png" height="75" />
<img src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" height="75" />
<img src="https://cdn-images-1.medium.com/max/960/1*pxfq-ikL8zPE3RyGB2xbng.png" height="75" />
<img src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-card.png" height="75" />
</p>
<p align="center">
<a href="https://www.jsonstore.io/">
  <img src="logo.png" />
<a />
</p>
<p align="center">
Start storing your data in the cloud in 2 seconds
</p>

## jsonstore.io
jsonstore.io offers a free, secured and JSON based cloud datastore for small projects.
Just enter https://www.jsonstore.io/, copy the URL and start sending HTTP requests to communicate with your datastore.
POST requests will save data, PUT requests modify data, DELETE requests delete data and GET requests retrieves data.

## Examples
Make sure to replace the URL in the examples to your own endpoint, that can be found at https://www.jsonstore.io/.
### CURL
#### POST
The following command will create a user in `/users/1`:
```shell
curl -XPOST -H "Content-type: application/json" -d '{
  "name": "jon.snow",
  "age": 31
}' 'https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

#### GET
The following command will retrieve the user we created earlier:
```shell
curl -XGET 'https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

##### Querying and Sorting
To query the data, use the query parameters `orderKey`, `filterValue` and `valueType`

- `orderKey`: name of the key in child. For example, to order by `age` use,
```shell
curl -XGET 'https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users?orderKey=age'
```

> if `orderKey` in not present in child, that child will come in order before children with `orderKey`

- `filterValue`: value of key (given using `orderKey`), to filter the children by. For example, to get the users with `age`=`20`
```shell
curl -XGET 'https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users?orderKey=age&filterValue=20'
```
> `filterValue` should be used in conjugation with `orderBy`.

- `valueType`: enforcing type of `filterValue`. Type of `filterValue` is guessed by `jsonstore`. If you want to enforce a type, send `string`, `number` or `boolean` as `valueType`. For eg,
```shell
curl -XGET 'https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users?orderKey=age&filterValue=20&valueType=number'
```

#### PUT
The following command will change the age of the user to `32`:
```shell
curl -XPUT -H "Content-type: application/json" -d '32' 'https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1/age'
```

#### DELETE
The following command will delete the user:
```shell
curl -XDELETE 'https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

### JavaScript
#### POST
```js
fetch('https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST',
  body: { name: 'jon snow', age: 31 },
});
```

#### GET
```js
const user = await fetch('https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1')
  .then(function(response) {
    return response.json();
  })
```

#### PUT
```js
fetch('https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1/age', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'PUT',
  body: 32,
});
```

#### DELETE
```js
fetch('https://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1', {
  method: 'DELETE',
});
```

### Contribution
Any type of feedback, pull request or issue is welcome.
