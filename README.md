<p align="center">
<img src="logo.png" />
</p>
<p align="center">
Start storing your data on the cloud in 2 seconds
</p>

## jsonstore.io
jsonstore.io offers a free, secured and JSON based cloud datastore for small projects.
Just enter http://jsonstore.io, copy the URL and start sending HTTP requests to communicate with your datastore.
POST requests will save data, PUT requests modify data, DELETE requests delete data and GET requests retrieves data.

## Examples
Make sure to replace the URL in the examples to your own endpoint, that can be found at http://jsonstore.io.
### CURL
#### POST
The following command will create a user in `/users/1`:
```shell
curl -XPOST -H "Content-type: application/json" -d '{
  "name": "john.snow",
  "age": 31
}' 'http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

#### GET
The following command will retrieve the user we created earlier:
```shell
curl -XGET -H "Content-type: application/json" 'http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

#### PUT
The following command will change the age of the user to `32`:
```shell
curl -XPUT -H "Content-type: application/json" -d '32' 'http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1/age'
```

#### DELETE
The following command will delete the user:
```shell
curl -XGET -H "Content-type: application/json" 'http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1'
```

### JavaScript
#### POST
```js
fetch('http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST',
  body: { name: 'john snow', age: 31 },
});
```

#### GET
```js
const user = await fetch('http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1')
  .then(function(response) {
    return response.json();
  })
```

#### PUT
```js
fetch('http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1/age', {
  headers: {
    'Content-type': 'application/json'
  },
  method: 'PUT',
  body: 32,
});
```

#### DELETE
```js
fetch('http://www.jsonstore.io/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/users/1', {
  method: 'DELETE',
});
```

### Contribution
Any type of feedback, pull request or issue is welcome.
