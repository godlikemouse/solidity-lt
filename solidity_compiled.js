if(!lt.util.load.provided_QMARK_('lt.plugins.solidity')) {
goog.provide('lt.plugins.solidity');
goog.require('cljs.core');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.solidity","solidity-lang","lt.plugins.solidity/solidity-lang",3333012842),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"solidity.lang","solidity.lang",4455083595),null], null), null));
lt.plugins.solidity.solidity = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.solidity","solidity-lang","lt.plugins.solidity/solidity-lang",3333012842));
lt.plugins.solidity.script = (function script(src){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),src,new cljs.core.Keyword(null,"type","type",1017479852),"text/x-solidity"], null)], null));var seq__6365_6381 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6366_6382 = null;var count__6367_6383 = 0;var i__6368_6384 = 0;while(true){
if((i__6368_6384 < count__6367_6383))
{var vec__6369_6385 = cljs.core._nth.call(null,chunk__6366_6382,i__6368_6384);var ev__6276__auto___6386 = cljs.core.nth.call(null,vec__6369_6385,0,null);var func__6277__auto___6387 = cljs.core.nth.call(null,vec__6369_6385,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6386,func__6277__auto___6387);
{
var G__6388 = seq__6365_6381;
var G__6389 = chunk__6366_6382;
var G__6390 = count__6367_6383;
var G__6391 = (i__6368_6384 + 1);
seq__6365_6381 = G__6388;
chunk__6366_6382 = G__6389;
count__6367_6383 = G__6390;
i__6368_6384 = G__6391;
continue;
}
} else
{var temp__4092__auto___6392 = cljs.core.seq.call(null,seq__6365_6381);if(temp__4092__auto___6392)
{var seq__6365_6393__$1 = temp__4092__auto___6392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6365_6393__$1))
{var c__5632__auto___6394 = cljs.core.chunk_first.call(null,seq__6365_6393__$1);{
var G__6395 = cljs.core.chunk_rest.call(null,seq__6365_6393__$1);
var G__6396 = c__5632__auto___6394;
var G__6397 = cljs.core.count.call(null,c__5632__auto___6394);
var G__6398 = 0;
seq__6365_6381 = G__6395;
chunk__6366_6382 = G__6396;
count__6367_6383 = G__6397;
i__6368_6384 = G__6398;
continue;
}
} else
{var vec__6370_6399 = cljs.core.first.call(null,seq__6365_6393__$1);var ev__6276__auto___6400 = cljs.core.nth.call(null,vec__6370_6399,0,null);var func__6277__auto___6401 = cljs.core.nth.call(null,vec__6370_6399,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6400,func__6277__auto___6401);
{
var G__6402 = cljs.core.next.call(null,seq__6365_6393__$1);
var G__6403 = null;
var G__6404 = 0;
var G__6405 = 0;
seq__6365_6381 = G__6402;
chunk__6366_6382 = G__6403;
count__6367_6383 = G__6404;
i__6368_6384 = G__6405;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
}

//# sourceMappingURL=solidity_compiled.js.map