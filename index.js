'use strict';

function parseQuery(h, sep) {
    var parts = h ? h.split(sep) : []
    var queries = {}
    parts.forEach(function(kv) {
        kv = kv.split('=')
        queries[kv[0]] = kv[1]
    })
    return queries
}

module.exports = function (sep) {
    return function (ctx) {
        ctx.queries = parseQuery(ctx.path.split('?')[1] || '', sep || '&')
    }
}