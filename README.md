# iTunes Current Song Viewer

![screenshot of Chrome and iTunes](./doc/ss.jpg)

## Memo

## expand JXA child process buffer size

```
$ vim ./node_modules/@jxa/run/lib/run.js
```

```js
// L25-28
env: {
    OSA_ARGS: JSON.stringify(args)
}
maxBuffer: 1000 * 1024 // add this line
```
