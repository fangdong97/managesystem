// 引入mockjs
const Mock = require('mockjs')
/*
  mock生成一个接口 ajax就可以请求
  Mock.mock(path[,type], {})
  参数1 请求 path 路径
  参数2 请求方式 get post put delete
  参数3 返回数据
*/
Mock.mock('/api/getGoodsList', 'get', {
  code: 200,
  msg: 'success',
  'data|10': [
    {
      'id|+1': 1,
      itemName: '@ctitle',
      'itemPrice|0-100': 0,
      'sale|0-1000': 0,
      thumb: '@image("100x100","@color","小甜甜")',
      desc: '@cparagraph',
      'onSale|0-1': 1, // 0下架 1上架
      createAt: '@date'
    }
  ]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
// 模拟 商品列表接口
/*
  mockjs 生成随机数据语法
  长度
  特定功能 随机数据 （占位符）

  量词：
    语法 在 字段名中定义 修饰 数量或者 数字的大小
    '字段名|数量'
    '字段名|开始数量和结束数量'
    'data|10': [
      {}
    ]
    'data|10-20': [
      {}
    ]
    字符串
    'str|3': '☆☆'
    'str|3-6: '☆☆'
    数字
    'num|10-100': 10 // 修饰数字大小
    特殊量词 id
    'id|+1': 1 // 自增1
  生成固定 功能随机数据 占位符
  用在 字段值中 值要加引号 占位符 前面要加@关键字生效
  thumb: ''

  常用占位符
  基础数据
    boolean, natural, integer, float, character, string, range, date, time, datetime, now
  图片
    image, dataImage(base64图片)
  颜色 color
  文字 paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
  名字 first, last, name, cfirst, clast, cname
  web地址 url, domain, email, ip, tld
  地址 area, region
  其他 capitalize, upper, lower, pick, shuffle Miscellaneous guid, id
*/
