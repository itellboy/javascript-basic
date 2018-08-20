# mongoose API

[官方文档](http://mongoosejs.com/docs/api.html)

在这里记录一些平时用的比较多的 api

## Mongoose

## Schema

## Connection

## Document

## Model

* `Model.insertMany()`效率比`Model.create()`效率要高，但不会触发`save`中间件，会触发`insertMany`中间件

## Query

**Query.prototype.setOptions()**

for `find()`

* [`sort `](https://docs.mongodb.com/manual/reference/method/cursor.sort/#cursor.sort)
* `limit`
* `skip`
