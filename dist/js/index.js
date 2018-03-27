var novelSupport=function novelSupport(elem){var option=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var optionContent=option.content===undefined?'text':option.content;var optionMark=option.mark===undefined?'dot':option.mark;var optionRewrite=option.rewrite===undefined?false:option.rewrite;console.log(optionContent,optionMark,optionRewrite);var txtBase='<p class="ns_indent">$1</p>';var rubyBase='<ruby>$1<rt>$2</rt></ruby>';var emphasisBase='<strong class="ns_emphasis">$1</strong>';console.log('\u73FE\u5728\u306Enovel-support.js\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u5909\u63DB\u306F'+optionContent+'\u3067\u3059');var obj=void 0;var replaceBody=void 0;if(optionContent==='text'){obj=document.getElementById(elem).textContent;replaceBody=obj.replace(/(.+?)[\n\r]/g,txtBase).replace(/[\|｜](.+?)《(.+?)》/g,rubyBase).replace(/《《(.+?)》》/g,emphasisBase);}else if(optionContent==='html'){obj=document.getElementById(elem).innerHTML;replaceBody=obj.replace(/[\|｜](.+?)《(.+?)》/g,rubyBase).replace(/《《(.+?)》》/g,emphasisBase);}document.getElementById(elem).innerHTML=replaceBody;};export{novelSupport};

//# sourceMappingURL=index.js.map