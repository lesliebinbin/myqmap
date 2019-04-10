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
var len__4730__auto___37173 = arguments.length;
var i__4731__auto___37174 = (0);
while(true){
if((i__4731__auto___37174 < len__4730__auto___37173)){
args__4736__auto__.push((arguments[i__4731__auto___37174]));

var G__37175 = (i__4731__auto___37174 + (1));
i__4731__auto___37174 = G__37175;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36963){
var G__36964 = cljs.core.first(seq36963);
var seq36963__$1 = cljs.core.next(seq36963);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36964,seq36963__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36965){
var map__36966 = p__36965;
var map__36966__$1 = (((((!((map__36966 == null))))?(((((map__36966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36966):map__36966);
var src = map__36966__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36966__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36966__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__36977 = cljs.core.seq(sources);
var chunk__36978 = null;
var count__36979 = (0);
var i__36980 = (0);
while(true){
if((i__36980 < count__36979)){
var map__36986 = chunk__36978.cljs$core$IIndexed$_nth$arity$2(null,i__36980);
var map__36986__$1 = (((((!((map__36986 == null))))?(((((map__36986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36986):map__36986);
var src = map__36986__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37176 = seq__36977;
var G__37177 = chunk__36978;
var G__37178 = count__36979;
var G__37179 = (i__36980 + (1));
seq__36977 = G__37176;
chunk__36978 = G__37177;
count__36979 = G__37178;
i__36980 = G__37179;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36977);
if(temp__5720__auto__){
var seq__36977__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36977__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36977__$1);
var G__37180 = cljs.core.chunk_rest(seq__36977__$1);
var G__37181 = c__4550__auto__;
var G__37182 = cljs.core.count(c__4550__auto__);
var G__37183 = (0);
seq__36977 = G__37180;
chunk__36978 = G__37181;
count__36979 = G__37182;
i__36980 = G__37183;
continue;
} else {
var map__36988 = cljs.core.first(seq__36977__$1);
var map__36988__$1 = (((((!((map__36988 == null))))?(((((map__36988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36988):map__36988);
var src = map__36988__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36988__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36988__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36988__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36988__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37184 = cljs.core.next(seq__36977__$1);
var G__37185 = null;
var G__37186 = (0);
var G__37187 = (0);
seq__36977 = G__37184;
chunk__36978 = G__37185;
count__36979 = G__37186;
i__36980 = G__37187;
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
var seq__36990 = cljs.core.seq(js_requires);
var chunk__36991 = null;
var count__36992 = (0);
var i__36993 = (0);
while(true){
if((i__36993 < count__36992)){
var js_ns = chunk__36991.cljs$core$IIndexed$_nth$arity$2(null,i__36993);
var require_str_37188 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37188);


var G__37189 = seq__36990;
var G__37190 = chunk__36991;
var G__37191 = count__36992;
var G__37192 = (i__36993 + (1));
seq__36990 = G__37189;
chunk__36991 = G__37190;
count__36992 = G__37191;
i__36993 = G__37192;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36990);
if(temp__5720__auto__){
var seq__36990__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36990__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36990__$1);
var G__37193 = cljs.core.chunk_rest(seq__36990__$1);
var G__37194 = c__4550__auto__;
var G__37195 = cljs.core.count(c__4550__auto__);
var G__37196 = (0);
seq__36990 = G__37193;
chunk__36991 = G__37194;
count__36992 = G__37195;
i__36993 = G__37196;
continue;
} else {
var js_ns = cljs.core.first(seq__36990__$1);
var require_str_37197 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37197);


var G__37198 = cljs.core.next(seq__36990__$1);
var G__37199 = null;
var G__37200 = (0);
var G__37201 = (0);
seq__36990 = G__37198;
chunk__36991 = G__37199;
count__36992 = G__37200;
i__36993 = G__37201;
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
var G__36994 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36994) : callback.call(null,G__36994));
} else {
var G__36995 = shadow.cljs.devtools.client.env.files_url();
var G__36996 = ((function (G__36995){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__36995))
;
var G__36997 = "POST";
var G__36998 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__36999 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36995,G__36996,G__36997,G__36998,G__36999);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37001){
var map__37002 = p__37001;
var map__37002__$1 = (((((!((map__37002 == null))))?(((((map__37002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37002):map__37002);
var msg = map__37002__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37004 = info;
var map__37004__$1 = (((((!((map__37004 == null))))?(((((map__37004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37004):map__37004);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37004__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37004__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37006(s__37007){
return (new cljs.core.LazySeq(null,((function (map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info){
return (function (){
var s__37007__$1 = s__37007;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37007__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37014 = cljs.core.first(xs__6277__auto__);
var map__37014__$1 = (((((!((map__37014 == null))))?(((((map__37014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37014):map__37014);
var src = map__37014__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37014__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37007__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37006_$_iter__37008(s__37009){
return (new cljs.core.LazySeq(null,((function (s__37007__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info){
return (function (){
var s__37009__$1 = s__37009;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37009__$1);
if(temp__5720__auto____$1){
var s__37009__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37009__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37009__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37011 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37010 = (0);
while(true){
if((i__37010 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37010);
cljs.core.chunk_append(b__37011,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37209 = (i__37010 + (1));
i__37010 = G__37209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37011),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37006_$_iter__37008(cljs.core.chunk_rest(s__37009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37011),null);
}
} else {
var warning = cljs.core.first(s__37009__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37006_$_iter__37008(cljs.core.rest(s__37009__$2)));
}
} else {
return null;
}
break;
}
});})(s__37007__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info))
,null,null));
});})(s__37007__$1,map__37014,map__37014__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37006(cljs.core.rest(s__37007__$1)));
} else {
var G__37210 = cljs.core.rest(s__37007__$1);
s__37007__$1 = G__37210;
continue;
}
} else {
var G__37211 = cljs.core.rest(s__37007__$1);
s__37007__$1 = G__37211;
continue;
}
} else {
return null;
}
break;
}
});})(map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info))
,null,null));
});})(map__37004,map__37004__$1,sources,compiled,map__37002,map__37002__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37018_37212 = cljs.core.seq(warnings);
var chunk__37019_37213 = null;
var count__37020_37214 = (0);
var i__37021_37215 = (0);
while(true){
if((i__37021_37215 < count__37020_37214)){
var map__37026_37216 = chunk__37019_37213.cljs$core$IIndexed$_nth$arity$2(null,i__37021_37215);
var map__37026_37217__$1 = (((((!((map__37026_37216 == null))))?(((((map__37026_37216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37026_37216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37026_37216):map__37026_37216);
var w_37218 = map__37026_37217__$1;
var msg_37219__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37026_37217__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37026_37217__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37026_37217__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37026_37217__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37222)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37220),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37221),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37219__$1)].join(''));


var G__37223 = seq__37018_37212;
var G__37224 = chunk__37019_37213;
var G__37225 = count__37020_37214;
var G__37226 = (i__37021_37215 + (1));
seq__37018_37212 = G__37223;
chunk__37019_37213 = G__37224;
count__37020_37214 = G__37225;
i__37021_37215 = G__37226;
continue;
} else {
var temp__5720__auto___37227 = cljs.core.seq(seq__37018_37212);
if(temp__5720__auto___37227){
var seq__37018_37228__$1 = temp__5720__auto___37227;
if(cljs.core.chunked_seq_QMARK_(seq__37018_37228__$1)){
var c__4550__auto___37229 = cljs.core.chunk_first(seq__37018_37228__$1);
var G__37230 = cljs.core.chunk_rest(seq__37018_37228__$1);
var G__37231 = c__4550__auto___37229;
var G__37232 = cljs.core.count(c__4550__auto___37229);
var G__37233 = (0);
seq__37018_37212 = G__37230;
chunk__37019_37213 = G__37231;
count__37020_37214 = G__37232;
i__37021_37215 = G__37233;
continue;
} else {
var map__37029_37237 = cljs.core.first(seq__37018_37228__$1);
var map__37029_37238__$1 = (((((!((map__37029_37237 == null))))?(((((map__37029_37237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37029_37237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37029_37237):map__37029_37237);
var w_37239 = map__37029_37238__$1;
var msg_37240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029_37238__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029_37238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029_37238__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029_37238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37243)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37241),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37242),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37240__$1)].join(''));


var G__37244 = cljs.core.next(seq__37018_37228__$1);
var G__37245 = null;
var G__37246 = (0);
var G__37247 = (0);
seq__37018_37212 = G__37244;
chunk__37019_37213 = G__37245;
count__37020_37214 = G__37246;
i__37021_37215 = G__37247;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info){
return (function (p__37031){
var map__37032 = p__37031;
var map__37032__$1 = (((((!((map__37032 == null))))?(((((map__37032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37032):map__37032);
var src = map__37032__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37032__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37032__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info){
return (function (p__37034){
var map__37035 = p__37034;
var map__37035__$1 = (((((!((map__37035 == null))))?(((((map__37035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37035):map__37035);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37035__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info){
return (function (p__37037){
var map__37038 = p__37037;
var map__37038__$1 = (((((!((map__37038 == null))))?(((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37038):map__37038);
var rc = map__37038__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info){
return (function (p1__37000_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37000_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37004,map__37004__$1,sources,compiled,warnings,map__37002,map__37002__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37041){
var map__37042 = p__37041;
var map__37042__$1 = (((((!((map__37042 == null))))?(((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37042):map__37042);
var msg = map__37042__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37042__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37044 = cljs.core.seq(updates);
var chunk__37046 = null;
var count__37047 = (0);
var i__37048 = (0);
while(true){
if((i__37048 < count__37047)){
var path = chunk__37046.cljs$core$IIndexed$_nth$arity$2(null,i__37048);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37079_37248 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37082_37249 = null;
var count__37083_37250 = (0);
var i__37084_37251 = (0);
while(true){
if((i__37084_37251 < count__37083_37250)){
var node_37252 = chunk__37082_37249.cljs$core$IIndexed$_nth$arity$2(null,i__37084_37251);
var path_match_37253 = shadow.cljs.devtools.client.browser.match_paths(node_37252.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37253)){
var new_link_37254 = (function (){var G__37094 = node_37252.cloneNode(true);
G__37094.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37253),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37094;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37253], 0));

goog.dom.insertSiblingAfter(new_link_37254,node_37252);

goog.dom.removeNode(node_37252);


var G__37255 = seq__37079_37248;
var G__37256 = chunk__37082_37249;
var G__37257 = count__37083_37250;
var G__37258 = (i__37084_37251 + (1));
seq__37079_37248 = G__37255;
chunk__37082_37249 = G__37256;
count__37083_37250 = G__37257;
i__37084_37251 = G__37258;
continue;
} else {
var G__37259 = seq__37079_37248;
var G__37260 = chunk__37082_37249;
var G__37261 = count__37083_37250;
var G__37262 = (i__37084_37251 + (1));
seq__37079_37248 = G__37259;
chunk__37082_37249 = G__37260;
count__37083_37250 = G__37261;
i__37084_37251 = G__37262;
continue;
}
} else {
var temp__5720__auto___37263 = cljs.core.seq(seq__37079_37248);
if(temp__5720__auto___37263){
var seq__37079_37264__$1 = temp__5720__auto___37263;
if(cljs.core.chunked_seq_QMARK_(seq__37079_37264__$1)){
var c__4550__auto___37265 = cljs.core.chunk_first(seq__37079_37264__$1);
var G__37266 = cljs.core.chunk_rest(seq__37079_37264__$1);
var G__37267 = c__4550__auto___37265;
var G__37268 = cljs.core.count(c__4550__auto___37265);
var G__37269 = (0);
seq__37079_37248 = G__37266;
chunk__37082_37249 = G__37267;
count__37083_37250 = G__37268;
i__37084_37251 = G__37269;
continue;
} else {
var node_37273 = cljs.core.first(seq__37079_37264__$1);
var path_match_37274 = shadow.cljs.devtools.client.browser.match_paths(node_37273.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37274)){
var new_link_37275 = (function (){var G__37116 = node_37273.cloneNode(true);
G__37116.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37274),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37116;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37274], 0));

goog.dom.insertSiblingAfter(new_link_37275,node_37273);

goog.dom.removeNode(node_37273);


var G__37278 = cljs.core.next(seq__37079_37264__$1);
var G__37279 = null;
var G__37280 = (0);
var G__37281 = (0);
seq__37079_37248 = G__37278;
chunk__37082_37249 = G__37279;
count__37083_37250 = G__37280;
i__37084_37251 = G__37281;
continue;
} else {
var G__37282 = cljs.core.next(seq__37079_37264__$1);
var G__37283 = null;
var G__37284 = (0);
var G__37285 = (0);
seq__37079_37248 = G__37282;
chunk__37082_37249 = G__37283;
count__37083_37250 = G__37284;
i__37084_37251 = G__37285;
continue;
}
}
} else {
}
}
break;
}


var G__37286 = seq__37044;
var G__37287 = chunk__37046;
var G__37288 = count__37047;
var G__37289 = (i__37048 + (1));
seq__37044 = G__37286;
chunk__37046 = G__37287;
count__37047 = G__37288;
i__37048 = G__37289;
continue;
} else {
var G__37290 = seq__37044;
var G__37291 = chunk__37046;
var G__37292 = count__37047;
var G__37293 = (i__37048 + (1));
seq__37044 = G__37290;
chunk__37046 = G__37291;
count__37047 = G__37292;
i__37048 = G__37293;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37044);
if(temp__5720__auto__){
var seq__37044__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37044__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37044__$1);
var G__37294 = cljs.core.chunk_rest(seq__37044__$1);
var G__37295 = c__4550__auto__;
var G__37296 = cljs.core.count(c__4550__auto__);
var G__37297 = (0);
seq__37044 = G__37294;
chunk__37046 = G__37295;
count__37047 = G__37296;
i__37048 = G__37297;
continue;
} else {
var path = cljs.core.first(seq__37044__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37122_37298 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37131_37299 = null;
var count__37132_37300 = (0);
var i__37133_37301 = (0);
while(true){
if((i__37133_37301 < count__37132_37300)){
var node_37302 = chunk__37131_37299.cljs$core$IIndexed$_nth$arity$2(null,i__37133_37301);
var path_match_37303 = shadow.cljs.devtools.client.browser.match_paths(node_37302.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37303)){
var new_link_37304 = (function (){var G__37140 = node_37302.cloneNode(true);
G__37140.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37303),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37140;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37303], 0));

goog.dom.insertSiblingAfter(new_link_37304,node_37302);

goog.dom.removeNode(node_37302);


var G__37307 = seq__37122_37298;
var G__37308 = chunk__37131_37299;
var G__37309 = count__37132_37300;
var G__37310 = (i__37133_37301 + (1));
seq__37122_37298 = G__37307;
chunk__37131_37299 = G__37308;
count__37132_37300 = G__37309;
i__37133_37301 = G__37310;
continue;
} else {
var G__37311 = seq__37122_37298;
var G__37312 = chunk__37131_37299;
var G__37313 = count__37132_37300;
var G__37314 = (i__37133_37301 + (1));
seq__37122_37298 = G__37311;
chunk__37131_37299 = G__37312;
count__37132_37300 = G__37313;
i__37133_37301 = G__37314;
continue;
}
} else {
var temp__5720__auto___37315__$1 = cljs.core.seq(seq__37122_37298);
if(temp__5720__auto___37315__$1){
var seq__37122_37316__$1 = temp__5720__auto___37315__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37122_37316__$1)){
var c__4550__auto___37317 = cljs.core.chunk_first(seq__37122_37316__$1);
var G__37318 = cljs.core.chunk_rest(seq__37122_37316__$1);
var G__37319 = c__4550__auto___37317;
var G__37320 = cljs.core.count(c__4550__auto___37317);
var G__37321 = (0);
seq__37122_37298 = G__37318;
chunk__37131_37299 = G__37319;
count__37132_37300 = G__37320;
i__37133_37301 = G__37321;
continue;
} else {
var node_37322 = cljs.core.first(seq__37122_37316__$1);
var path_match_37323 = shadow.cljs.devtools.client.browser.match_paths(node_37322.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37323)){
var new_link_37324 = (function (){var G__37141 = node_37322.cloneNode(true);
G__37141.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37323),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37141;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37323], 0));

goog.dom.insertSiblingAfter(new_link_37324,node_37322);

goog.dom.removeNode(node_37322);


var G__37325 = cljs.core.next(seq__37122_37316__$1);
var G__37326 = null;
var G__37327 = (0);
var G__37328 = (0);
seq__37122_37298 = G__37325;
chunk__37131_37299 = G__37326;
count__37132_37300 = G__37327;
i__37133_37301 = G__37328;
continue;
} else {
var G__37329 = cljs.core.next(seq__37122_37316__$1);
var G__37330 = null;
var G__37331 = (0);
var G__37332 = (0);
seq__37122_37298 = G__37329;
chunk__37131_37299 = G__37330;
count__37132_37300 = G__37331;
i__37133_37301 = G__37332;
continue;
}
}
} else {
}
}
break;
}


var G__37333 = cljs.core.next(seq__37044__$1);
var G__37334 = null;
var G__37335 = (0);
var G__37336 = (0);
seq__37044 = G__37333;
chunk__37046 = G__37334;
count__37047 = G__37335;
i__37048 = G__37336;
continue;
} else {
var G__37337 = cljs.core.next(seq__37044__$1);
var G__37338 = null;
var G__37339 = (0);
var G__37340 = (0);
seq__37044 = G__37337;
chunk__37046 = G__37338;
count__37047 = G__37339;
i__37048 = G__37340;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37142){
var map__37143 = p__37142;
var map__37143__$1 = (((((!((map__37143 == null))))?(((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37143):map__37143);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37143,map__37143__$1,id,js){
return (function (){
return eval(js);
});})(map__37143,map__37143__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37148){
var map__37149 = p__37148;
var map__37149__$1 = (((((!((map__37149 == null))))?(((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37149):map__37149);
var msg = map__37149__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37149__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37149__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37149__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37149__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37149,map__37149__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37152){
var map__37153 = p__37152;
var map__37153__$1 = (((((!((map__37153 == null))))?(((((map__37153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37153):map__37153);
var src = map__37153__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37153__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37149,map__37149__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37149,map__37149__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37149,map__37149__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37155){
var map__37156 = p__37155;
var map__37156__$1 = (((((!((map__37156 == null))))?(((((map__37156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37156):map__37156);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37156__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37156,map__37156__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37156,map__37156__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37158){
var map__37159 = p__37158;
var map__37159__$1 = (((((!((map__37159 == null))))?(((((map__37159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37159):map__37159);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37163){
var map__37164 = p__37163;
var map__37164__$1 = (((((!((map__37164 == null))))?(((((map__37164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37164):map__37164);
var msg = map__37164__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37166 = type;
var G__37166__$1 = (((G__37166 instanceof cljs.core.Keyword))?G__37166.fqn:null);
switch (G__37166__$1) {
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
var G__37167 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37168 = ((function (G__37167){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37167))
;
var G__37169 = "POST";
var G__37170 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37171 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37167,G__37168,G__37169,G__37170,G__37171);
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
}catch (e37172){var e = e37172;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37354 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37354)){
var s_37355 = temp__5720__auto___37354;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37355.onclose = ((function (s_37355,temp__5720__auto___37354){
return (function (e){
return null;
});})(s_37355,temp__5720__auto___37354))
;

s_37355.close();

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
