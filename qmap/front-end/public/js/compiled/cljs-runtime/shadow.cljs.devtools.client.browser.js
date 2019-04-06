goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37124 = arguments.length;
var i__4731__auto___37125 = (0);
while(true){
if((i__4731__auto___37125 < len__4730__auto___37124)){
args__4736__auto__.push((arguments[i__4731__auto___37125]));

var G__37126 = (i__4731__auto___37125 + (1));
i__4731__auto___37125 = G__37126;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36819){
var G__36820 = cljs.core.first(seq36819);
var seq36819__$1 = cljs.core.next(seq36819);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36820,seq36819__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36832){
var map__36833 = p__36832;
var map__36833__$1 = (((((!((map__36833 == null))))?(((((map__36833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36833):map__36833);
var src = map__36833__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36841 = cljs.core.seq(sources);
var chunk__36842 = null;
var count__36843 = (0);
var i__36844 = (0);
while(true){
if((i__36844 < count__36843)){
var map__36854 = chunk__36842.cljs$core$IIndexed$_nth$arity$2(null,i__36844);
var map__36854__$1 = (((((!((map__36854 == null))))?(((((map__36854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36854):map__36854);
var src = map__36854__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36854__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37143 = seq__36841;
var G__37144 = chunk__36842;
var G__37145 = count__36843;
var G__37146 = (i__36844 + (1));
seq__36841 = G__37143;
chunk__36842 = G__37144;
count__36843 = G__37145;
i__36844 = G__37146;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36841);
if(temp__5720__auto__){
var seq__36841__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36841__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36841__$1);
var G__37147 = cljs.core.chunk_rest(seq__36841__$1);
var G__37148 = c__4550__auto__;
var G__37149 = cljs.core.count(c__4550__auto__);
var G__37150 = (0);
seq__36841 = G__37147;
chunk__36842 = G__37148;
count__36843 = G__37149;
i__36844 = G__37150;
continue;
} else {
var map__36856 = cljs.core.first(seq__36841__$1);
var map__36856__$1 = (((((!((map__36856 == null))))?(((((map__36856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36856):map__36856);
var src = map__36856__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36856__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36856__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36856__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37157 = cljs.core.next(seq__36841__$1);
var G__37158 = null;
var G__37159 = (0);
var G__37160 = (0);
seq__36841 = G__37157;
chunk__36842 = G__37158;
count__36843 = G__37159;
i__36844 = G__37160;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36868 = cljs.core.seq(js_requires);
var chunk__36869 = null;
var count__36870 = (0);
var i__36871 = (0);
while(true){
if((i__36871 < count__36870)){
var js_ns = chunk__36869.cljs$core$IIndexed$_nth$arity$2(null,i__36871);
var require_str_37163 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37163);


var G__37165 = seq__36868;
var G__37166 = chunk__36869;
var G__37167 = count__36870;
var G__37168 = (i__36871 + (1));
seq__36868 = G__37165;
chunk__36869 = G__37166;
count__36870 = G__37167;
i__36871 = G__37168;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36868);
if(temp__5720__auto__){
var seq__36868__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36868__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36868__$1);
var G__37171 = cljs.core.chunk_rest(seq__36868__$1);
var G__37172 = c__4550__auto__;
var G__37173 = cljs.core.count(c__4550__auto__);
var G__37174 = (0);
seq__36868 = G__37171;
chunk__36869 = G__37172;
count__36870 = G__37173;
i__36871 = G__37174;
continue;
} else {
var js_ns = cljs.core.first(seq__36868__$1);
var require_str_37175 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37175);


var G__37176 = cljs.core.next(seq__36868__$1);
var G__37177 = null;
var G__37178 = (0);
var G__37179 = (0);
seq__36868 = G__37176;
chunk__36869 = G__37177;
count__36870 = G__37178;
i__36871 = G__37179;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36880 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36880) : callback.call(null,G__36880));
} else {
var G__36881 = shadow.cljs.devtools.client.env.files_url();
var G__36882 = ((function (G__36881){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__36881))
;
var G__36883 = "POST";
var G__36884 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__36885 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36881,G__36882,G__36883,G__36884,G__36885);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36891){
var map__36892 = p__36891;
var map__36892__$1 = (((((!((map__36892 == null))))?(((((map__36892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36892):map__36892);
var msg = map__36892__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36892__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36892__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__36894 = info;
var map__36894__$1 = (((((!((map__36894 == null))))?(((((map__36894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36894):map__36894);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36894__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36894__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36908(s__36909){
return (new cljs.core.LazySeq(null,((function (map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info){
return (function (){
var s__36909__$1 = s__36909;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36909__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__36914 = cljs.core.first(xs__6277__auto__);
var map__36914__$1 = (((((!((map__36914 == null))))?(((((map__36914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36914):map__36914);
var src = map__36914__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36914__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__36909__$1,map__36914,map__36914__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36908_$_iter__36910(s__36911){
return (new cljs.core.LazySeq(null,((function (s__36909__$1,map__36914,map__36914__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info){
return (function (){
var s__36911__$1 = s__36911;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__36911__$1);
if(temp__5720__auto____$1){
var s__36911__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36911__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36911__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36913 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36912 = (0);
while(true){
if((i__36912 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36912);
cljs.core.chunk_append(b__36913,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37191 = (i__36912 + (1));
i__36912 = G__37191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36913),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36908_$_iter__36910(cljs.core.chunk_rest(s__36911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36913),null);
}
} else {
var warning = cljs.core.first(s__36911__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36908_$_iter__36910(cljs.core.rest(s__36911__$2)));
}
} else {
return null;
}
break;
}
});})(s__36909__$1,map__36914,map__36914__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info))
,null,null));
});})(s__36909__$1,map__36914,map__36914__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36908(cljs.core.rest(s__36909__$1)));
} else {
var G__37192 = cljs.core.rest(s__36909__$1);
s__36909__$1 = G__37192;
continue;
}
} else {
var G__37193 = cljs.core.rest(s__36909__$1);
s__36909__$1 = G__37193;
continue;
}
} else {
return null;
}
break;
}
});})(map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info))
,null,null));
});})(map__36894,map__36894__$1,sources,compiled,map__36892,map__36892__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__36926_37194 = cljs.core.seq(warnings);
var chunk__36927_37195 = null;
var count__36928_37196 = (0);
var i__36929_37197 = (0);
while(true){
if((i__36929_37197 < count__36928_37196)){
var map__36937_37198 = chunk__36927_37195.cljs$core$IIndexed$_nth$arity$2(null,i__36929_37197);
var map__36937_37199__$1 = (((((!((map__36937_37198 == null))))?(((((map__36937_37198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36937_37198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36937_37198):map__36937_37198);
var w_37200 = map__36937_37199__$1;
var msg_37201__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937_37199__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937_37199__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937_37199__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937_37199__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37204)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37202),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37203),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37201__$1)].join(''));


var G__37208 = seq__36926_37194;
var G__37209 = chunk__36927_37195;
var G__37210 = count__36928_37196;
var G__37211 = (i__36929_37197 + (1));
seq__36926_37194 = G__37208;
chunk__36927_37195 = G__37209;
count__36928_37196 = G__37210;
i__36929_37197 = G__37211;
continue;
} else {
var temp__5720__auto___37212 = cljs.core.seq(seq__36926_37194);
if(temp__5720__auto___37212){
var seq__36926_37213__$1 = temp__5720__auto___37212;
if(cljs.core.chunked_seq_QMARK_(seq__36926_37213__$1)){
var c__4550__auto___37214 = cljs.core.chunk_first(seq__36926_37213__$1);
var G__37215 = cljs.core.chunk_rest(seq__36926_37213__$1);
var G__37216 = c__4550__auto___37214;
var G__37217 = cljs.core.count(c__4550__auto___37214);
var G__37218 = (0);
seq__36926_37194 = G__37215;
chunk__36927_37195 = G__37216;
count__36928_37196 = G__37217;
i__36929_37197 = G__37218;
continue;
} else {
var map__36959_37219 = cljs.core.first(seq__36926_37213__$1);
var map__36959_37220__$1 = (((((!((map__36959_37219 == null))))?(((((map__36959_37219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36959_37219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36959_37219):map__36959_37219);
var w_37221 = map__36959_37220__$1;
var msg_37222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959_37220__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959_37220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959_37220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959_37220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37225)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37223),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37224),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37222__$1)].join(''));


var G__37226 = cljs.core.next(seq__36926_37213__$1);
var G__37227 = null;
var G__37228 = (0);
var G__37229 = (0);
seq__36926_37194 = G__37226;
chunk__36927_37195 = G__37227;
count__36928_37196 = G__37228;
i__36929_37197 = G__37229;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info){
return (function (p__36963){
var map__36964 = p__36963;
var map__36964__$1 = (((((!((map__36964 == null))))?(((((map__36964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36964):map__36964);
var src = map__36964__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36964__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36964__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info){
return (function (p__36966){
var map__36967 = p__36966;
var map__36967__$1 = (((((!((map__36967 == null))))?(((((map__36967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36967):map__36967);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36967__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info){
return (function (p__36969){
var map__36970 = p__36969;
var map__36970__$1 = (((((!((map__36970 == null))))?(((((map__36970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36970):map__36970);
var rc = map__36970__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36970__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info){
return (function (p1__36890_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36890_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__36894,map__36894__$1,sources,compiled,warnings,map__36892,map__36892__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36987){
var map__36988 = p__36987;
var map__36988__$1 = (((((!((map__36988 == null))))?(((((map__36988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36988):map__36988);
var msg = map__36988__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36988__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36990 = cljs.core.seq(updates);
var chunk__36992 = null;
var count__36993 = (0);
var i__36994 = (0);
while(true){
if((i__36994 < count__36993)){
var path = chunk__36992.cljs$core$IIndexed$_nth$arity$2(null,i__36994);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37044_37232 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37047_37233 = null;
var count__37048_37234 = (0);
var i__37049_37235 = (0);
while(true){
if((i__37049_37235 < count__37048_37234)){
var node_37236 = chunk__37047_37233.cljs$core$IIndexed$_nth$arity$2(null,i__37049_37235);
var path_match_37237 = shadow.cljs.devtools.client.browser.match_paths(node_37236.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37237)){
var new_link_37238 = (function (){var G__37056 = node_37236.cloneNode(true);
G__37056.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37237),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37056;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37237], 0));

goog.dom.insertSiblingAfter(new_link_37238,node_37236);

goog.dom.removeNode(node_37236);


var G__37239 = seq__37044_37232;
var G__37240 = chunk__37047_37233;
var G__37241 = count__37048_37234;
var G__37242 = (i__37049_37235 + (1));
seq__37044_37232 = G__37239;
chunk__37047_37233 = G__37240;
count__37048_37234 = G__37241;
i__37049_37235 = G__37242;
continue;
} else {
var G__37243 = seq__37044_37232;
var G__37244 = chunk__37047_37233;
var G__37245 = count__37048_37234;
var G__37246 = (i__37049_37235 + (1));
seq__37044_37232 = G__37243;
chunk__37047_37233 = G__37244;
count__37048_37234 = G__37245;
i__37049_37235 = G__37246;
continue;
}
} else {
var temp__5720__auto___37247 = cljs.core.seq(seq__37044_37232);
if(temp__5720__auto___37247){
var seq__37044_37248__$1 = temp__5720__auto___37247;
if(cljs.core.chunked_seq_QMARK_(seq__37044_37248__$1)){
var c__4550__auto___37249 = cljs.core.chunk_first(seq__37044_37248__$1);
var G__37250 = cljs.core.chunk_rest(seq__37044_37248__$1);
var G__37251 = c__4550__auto___37249;
var G__37252 = cljs.core.count(c__4550__auto___37249);
var G__37253 = (0);
seq__37044_37232 = G__37250;
chunk__37047_37233 = G__37251;
count__37048_37234 = G__37252;
i__37049_37235 = G__37253;
continue;
} else {
var node_37254 = cljs.core.first(seq__37044_37248__$1);
var path_match_37255 = shadow.cljs.devtools.client.browser.match_paths(node_37254.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37255)){
var new_link_37256 = (function (){var G__37061 = node_37254.cloneNode(true);
G__37061.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37255),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37061;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37255], 0));

goog.dom.insertSiblingAfter(new_link_37256,node_37254);

goog.dom.removeNode(node_37254);


var G__37257 = cljs.core.next(seq__37044_37248__$1);
var G__37258 = null;
var G__37259 = (0);
var G__37260 = (0);
seq__37044_37232 = G__37257;
chunk__37047_37233 = G__37258;
count__37048_37234 = G__37259;
i__37049_37235 = G__37260;
continue;
} else {
var G__37261 = cljs.core.next(seq__37044_37248__$1);
var G__37262 = null;
var G__37263 = (0);
var G__37264 = (0);
seq__37044_37232 = G__37261;
chunk__37047_37233 = G__37262;
count__37048_37234 = G__37263;
i__37049_37235 = G__37264;
continue;
}
}
} else {
}
}
break;
}


var G__37265 = seq__36990;
var G__37266 = chunk__36992;
var G__37267 = count__36993;
var G__37268 = (i__36994 + (1));
seq__36990 = G__37265;
chunk__36992 = G__37266;
count__36993 = G__37267;
i__36994 = G__37268;
continue;
} else {
var G__37269 = seq__36990;
var G__37270 = chunk__36992;
var G__37271 = count__36993;
var G__37272 = (i__36994 + (1));
seq__36990 = G__37269;
chunk__36992 = G__37270;
count__36993 = G__37271;
i__36994 = G__37272;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36990);
if(temp__5720__auto__){
var seq__36990__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36990__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36990__$1);
var G__37273 = cljs.core.chunk_rest(seq__36990__$1);
var G__37274 = c__4550__auto__;
var G__37275 = cljs.core.count(c__4550__auto__);
var G__37276 = (0);
seq__36990 = G__37273;
chunk__36992 = G__37274;
count__36993 = G__37275;
i__36994 = G__37276;
continue;
} else {
var path = cljs.core.first(seq__36990__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37066_37277 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37069_37278 = null;
var count__37070_37279 = (0);
var i__37071_37280 = (0);
while(true){
if((i__37071_37280 < count__37070_37279)){
var node_37284 = chunk__37069_37278.cljs$core$IIndexed$_nth$arity$2(null,i__37071_37280);
var path_match_37285 = shadow.cljs.devtools.client.browser.match_paths(node_37284.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37285)){
var new_link_37286 = (function (){var G__37084 = node_37284.cloneNode(true);
G__37084.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37285),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37084;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37285], 0));

goog.dom.insertSiblingAfter(new_link_37286,node_37284);

goog.dom.removeNode(node_37284);


var G__37287 = seq__37066_37277;
var G__37288 = chunk__37069_37278;
var G__37289 = count__37070_37279;
var G__37290 = (i__37071_37280 + (1));
seq__37066_37277 = G__37287;
chunk__37069_37278 = G__37288;
count__37070_37279 = G__37289;
i__37071_37280 = G__37290;
continue;
} else {
var G__37291 = seq__37066_37277;
var G__37292 = chunk__37069_37278;
var G__37293 = count__37070_37279;
var G__37294 = (i__37071_37280 + (1));
seq__37066_37277 = G__37291;
chunk__37069_37278 = G__37292;
count__37070_37279 = G__37293;
i__37071_37280 = G__37294;
continue;
}
} else {
var temp__5720__auto___37295__$1 = cljs.core.seq(seq__37066_37277);
if(temp__5720__auto___37295__$1){
var seq__37066_37296__$1 = temp__5720__auto___37295__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37066_37296__$1)){
var c__4550__auto___37297 = cljs.core.chunk_first(seq__37066_37296__$1);
var G__37298 = cljs.core.chunk_rest(seq__37066_37296__$1);
var G__37299 = c__4550__auto___37297;
var G__37300 = cljs.core.count(c__4550__auto___37297);
var G__37301 = (0);
seq__37066_37277 = G__37298;
chunk__37069_37278 = G__37299;
count__37070_37279 = G__37300;
i__37071_37280 = G__37301;
continue;
} else {
var node_37302 = cljs.core.first(seq__37066_37296__$1);
var path_match_37303 = shadow.cljs.devtools.client.browser.match_paths(node_37302.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37303)){
var new_link_37304 = (function (){var G__37093 = node_37302.cloneNode(true);
G__37093.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37303),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37093;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37303], 0));

goog.dom.insertSiblingAfter(new_link_37304,node_37302);

goog.dom.removeNode(node_37302);


var G__37306 = cljs.core.next(seq__37066_37296__$1);
var G__37307 = null;
var G__37308 = (0);
var G__37309 = (0);
seq__37066_37277 = G__37306;
chunk__37069_37278 = G__37307;
count__37070_37279 = G__37308;
i__37071_37280 = G__37309;
continue;
} else {
var G__37310 = cljs.core.next(seq__37066_37296__$1);
var G__37311 = null;
var G__37312 = (0);
var G__37313 = (0);
seq__37066_37277 = G__37310;
chunk__37069_37278 = G__37311;
count__37070_37279 = G__37312;
i__37071_37280 = G__37313;
continue;
}
}
} else {
}
}
break;
}


var G__37314 = cljs.core.next(seq__36990__$1);
var G__37315 = null;
var G__37316 = (0);
var G__37317 = (0);
seq__36990 = G__37314;
chunk__36992 = G__37315;
count__36993 = G__37316;
i__36994 = G__37317;
continue;
} else {
var G__37318 = cljs.core.next(seq__36990__$1);
var G__37319 = null;
var G__37320 = (0);
var G__37321 = (0);
seq__36990 = G__37318;
chunk__36992 = G__37319;
count__36993 = G__37320;
i__36994 = G__37321;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37094){
var map__37095 = p__37094;
var map__37095__$1 = (((((!((map__37095 == null))))?(((((map__37095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37095):map__37095);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37095,map__37095__$1,id,js){
return (function (){
return eval(js);
});})(map__37095,map__37095__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37097){
var map__37098 = p__37097;
var map__37098__$1 = (((((!((map__37098 == null))))?(((((map__37098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37098):map__37098);
var msg = map__37098__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37098,map__37098__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37100){
var map__37101 = p__37100;
var map__37101__$1 = (((((!((map__37101 == null))))?(((((map__37101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37101):map__37101);
var src = map__37101__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37098,map__37098__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37098,map__37098__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37098,map__37098__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37103){
var map__37104 = p__37103;
var map__37104__$1 = (((((!((map__37104 == null))))?(((((map__37104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37104):map__37104);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37104__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37104__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37104,map__37104__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37104,map__37104__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37106){
var map__37109 = p__37106;
var map__37109__$1 = (((((!((map__37109 == null))))?(((((map__37109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37109):map__37109);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37109__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37111){
var map__37112 = p__37111;
var map__37112__$1 = (((((!((map__37112 == null))))?(((((map__37112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37112):map__37112);
var msg = map__37112__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37114 = type;
var G__37114__$1 = (((G__37114 instanceof cljs.core.Keyword))?G__37114.fqn:null);
switch (G__37114__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37115 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37116 = ((function (G__37115){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37115))
;
var G__37117 = "POST";
var G__37118 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37119 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37115,G__37116,G__37117,G__37118,G__37119);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37123){var e = e37123;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37332 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37332)){
var s_37333 = temp__5720__auto___37332;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37333.onclose = ((function (s_37333,temp__5720__auto___37332){
return (function (e){
return null;
});})(s_37333,temp__5720__auto___37332))
;

s_37333.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
