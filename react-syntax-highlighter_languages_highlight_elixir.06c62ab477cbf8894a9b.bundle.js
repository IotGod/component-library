(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1333:function(e,n){e.exports=function(e){var n="[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?",a="and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0",s={className:"subst",begin:"#\\{",end:"}",lexemes:n,keywords:a},i={className:"string",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},r={className:"function",beginKeywords:"def defp defmacro",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:n,endsParent:!0})]},o=e.inherit(r,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),l=[i,e.HASH_COMMENT_MODE,o,r,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[i,{begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}],relevance:0},{className:"symbol",begin:n+":(?!:)",relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{className:"variable",begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{begin:"->"},{begin:"("+e.RE_STARTERS_RE+")\\s*",contains:[e.HASH_COMMENT_MODE,{className:"regexp",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}],relevance:0}];return s.contains=l,{lexemes:n,keywords:a,contains:l}}}}]);