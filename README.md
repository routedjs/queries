# queries
A [Routed](https://github.com/switer/routed) middleware to parse hash and get queries, then set to context object. 

# Usage

```js
Routed.use(queries())

Routed.use(queries('&')) // set queries separator
```

## Example

```js
// hash: #/index?name=routed!!author=switer

Routed.use(queries('!!'))
Routed(function (ctx) {
    ctx.queries // --> {name: "routed", author: "switer"}
})


## License

MIT