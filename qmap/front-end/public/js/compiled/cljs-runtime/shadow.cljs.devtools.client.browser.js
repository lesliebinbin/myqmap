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
var len__4730__auto___37147 = arguments.length;
var i__4731__auto___37149 = (0);
while(true){
if((i__4731__auto___37149 < len__4730__auto___37147)){
args__4736__auto__.push((arguments[i__4731__auto___37149]));

var G__37151 = (i__4731__auto___37149 + (1));
i__4731__auto___37149 = G__37151;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36928){
var G__36929 = cljs.core.first(seq36928);
var seq36928__$1 = cljs.core.next(seq36928);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36929,seq36928__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36937){
var map__36938 = p__36937;
var map__36938__$1 = (((((!((map__36938 == null))))?(((((map__36938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36938):map__36938);
var src = map__36938__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36938__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36938__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__36941 = cljs.core.seq(sources);
var chunk__36942 = null;
var count__36943 = (0);
var i__36944 = (0);
while(true){
if((i__36944 < count__36943)){
var map__36949 = chunk__36942.cljs$core$IIndexed$_nth$arity$2(null,i__36944);
var map__36949__$1 = (((((!((map__36949 == null))))?(((((map__36949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36949):map__36949);
var src = map__36949__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36949__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36949__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36949__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36949__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37162 = seq__36941;
var G__37163 = chunk__36942;
var G__37164 = count__36943;
var G__37165 = (i__36944 + (1));
seq__36941 = G__37162;
chunk__36942 = G__37163;
count__36943 = G__37164;
i__36944 = G__37165;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36941);
if(temp__5720__auto__){
var seq__36941__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36941__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36941__$1);
var G__37166 = cljs.core.chunk_rest(seq__36941__$1);
var G__37167 = c__4550__auto__;
var G__37168 = cljs.core.count(c__4550__auto__);
var G__37169 = (0);
seq__36941 = G__37166;
chunk__36942 = G__37167;
count__36943 = G__37168;
i__36944 = G__37169;
continue;
} else {
var map__36951 = cljs.core.first(seq__36941__$1);
var map__36951__$1 = (((((!((map__36951 == null))))?(((((map__36951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36951):map__36951);
var src = map__36951__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37172 = cljs.core.next(seq__36941__$1);
var G__37173 = null;
var G__37174 = (0);
var G__37175 = (0);
seq__36941 = G__37172;
chunk__36942 = G__37173;
count__36943 = G__37174;
i__36944 = G__37175;
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
var seq__36963 = cljs.core.seq(js_requires);
var chunk__36964 = null;
var count__36965 = (0);
var i__36966 = (0);
while(true){
if((i__36966 < count__36965)){
var js_ns = chunk__36964.cljs$core$IIndexed$_nth$arity$2(null,i__36966);
var require_str_37178 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37178);


var G__37179 = seq__36963;
var G__37180 = chunk__36964;
var G__37181 = count__36965;
var G__37182 = (i__36966 + (1));
seq__36963 = G__37179;
chunk__36964 = G__37180;
count__36965 = G__37181;
i__36966 = G__37182;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36963);
if(temp__5720__auto__){
var seq__36963__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36963__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36963__$1);
var G__37185 = cljs.core.chunk_rest(seq__36963__$1);
var G__37186 = c__4550__auto__;
var G__37187 = cljs.core.count(c__4550__auto__);
var G__37188 = (0);
seq__36963 = G__37185;
chunk__36964 = G__37186;
count__36965 = G__37187;
i__36966 = G__37188;
continue;
} else {
var js_ns = cljs.core.first(seq__36963__$1);
var require_str_37189 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37189);


var G__37190 = cljs.core.next(seq__36963__$1);
var G__37191 = null;
var G__37192 = (0);
var G__37193 = (0);
seq__36963 = G__37190;
chunk__36964 = G__37191;
count__36965 = G__37192;
i__36966 = G__37193;
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
var G__36967 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36967) : callback.call(null,G__36967));
} else {
var G__36968 = shadow.cljs.devtools.client.env.files_url();
var G__36969 = ((function (G__36968){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__36968))
;
var G__36970 = "POST";
var G__36971 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__36972 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36968,G__36969,G__36970,G__36971,G__36972);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36985){
var map__36986 = p__36985;
var map__36986__$1 = (((((!((map__36986 == null))))?(((((map__36986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36986):map__36986);
var msg = map__36986__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36986__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__36988 = info;
var map__36988__$1 = (((((!((map__36988 == null))))?(((((map__36988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36988):map__36988);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36988__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36988__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36990(s__36991){
return (new cljs.core.LazySeq(null,((function (map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info){
return (function (){
var s__36991__$1 = s__36991;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36991__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__36996 = cljs.core.first(xs__6277__auto__);
var map__36996__$1 = (((((!((map__36996 == null))))?(((((map__36996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36996):map__36996);
var src = map__36996__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36996__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36996__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__36991__$1,map__36996,map__36996__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36990_$_iter__36992(s__36993){
return (new cljs.core.LazySeq(null,((function (s__36991__$1,map__36996,map__36996__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info){
return (function (){
var s__36993__$1 = s__36993;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__36993__$1);
if(temp__5720__auto____$1){
var s__36993__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36993__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36993__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36995 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36994 = (0);
while(true){
if((i__36994 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36994);
cljs.core.chunk_append(b__36995,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37194 = (i__36994 + (1));
i__36994 = G__37194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36995),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36990_$_iter__36992(cljs.core.chunk_rest(s__36993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36995),null);
}
} else {
var warning = cljs.core.first(s__36993__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36990_$_iter__36992(cljs.core.rest(s__36993__$2)));
}
} else {
return null;
}
break;
}
});})(s__36991__$1,map__36996,map__36996__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info))
,null,null));
});})(s__36991__$1,map__36996,map__36996__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36990(cljs.core.rest(s__36991__$1)));
} else {
var G__37195 = cljs.core.rest(s__36991__$1);
s__36991__$1 = G__37195;
continue;
}
} else {
var G__37196 = cljs.core.rest(s__36991__$1);
s__36991__$1 = G__37196;
continue;
}
} else {
return null;
}
break;
}
});})(map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info))
,null,null));
});})(map__36988,map__36988__$1,sources,compiled,map__36986,map__36986__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37008_37197 = cljs.core.seq(warnings);
var chunk__37009_37198 = null;
var count__37010_37199 = (0);
var i__37011_37200 = (0);
while(true){
if((i__37011_37200 < count__37010_37199)){
var map__37019_37201 = chunk__37009_37198.cljs$core$IIndexed$_nth$arity$2(null,i__37011_37200);
var map__37019_37202__$1 = (((((!((map__37019_37201 == null))))?(((((map__37019_37201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019_37201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37019_37201):map__37019_37201);
var w_37203 = map__37019_37202__$1;
var msg_37204__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019_37202__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019_37202__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019_37202__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019_37202__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37207)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37205),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37206),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37204__$1)].join(''));


var G__37210 = seq__37008_37197;
var G__37211 = chunk__37009_37198;
var G__37212 = count__37010_37199;
var G__37213 = (i__37011_37200 + (1));
seq__37008_37197 = G__37210;
chunk__37009_37198 = G__37211;
count__37010_37199 = G__37212;
i__37011_37200 = G__37213;
continue;
} else {
var temp__5720__auto___37214 = cljs.core.seq(seq__37008_37197);
if(temp__5720__auto___37214){
var seq__37008_37215__$1 = temp__5720__auto___37214;
if(cljs.core.chunked_seq_QMARK_(seq__37008_37215__$1)){
var c__4550__auto___37216 = cljs.core.chunk_first(seq__37008_37215__$1);
var G__37217 = cljs.core.chunk_rest(seq__37008_37215__$1);
var G__37218 = c__4550__auto___37216;
var G__37219 = cljs.core.count(c__4550__auto___37216);
var G__37220 = (0);
seq__37008_37197 = G__37217;
chunk__37009_37198 = G__37218;
count__37010_37199 = G__37219;
i__37011_37200 = G__37220;
continue;
} else {
var map__37022_37221 = cljs.core.first(seq__37008_37215__$1);
var map__37022_37222__$1 = (((((!((map__37022_37221 == null))))?(((((map__37022_37221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37022_37221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37022_37221):map__37022_37221);
var w_37223 = map__37022_37222__$1;
var msg_37224__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022_37222__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022_37222__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022_37222__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022_37222__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37227)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37225),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37226),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37224__$1)].join(''));


var G__37228 = cljs.core.next(seq__37008_37215__$1);
var G__37229 = null;
var G__37230 = (0);
var G__37231 = (0);
seq__37008_37197 = G__37228;
chunk__37009_37198 = G__37229;
count__37010_37199 = G__37230;
i__37011_37200 = G__37231;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info){
return (function (p__37027){
var map__37028 = p__37027;
var map__37028__$1 = (((((!((map__37028 == null))))?(((((map__37028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37028):map__37028);
var src = map__37028__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37028__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37028__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info){
return (function (p__37030){
var map__37031 = p__37030;
var map__37031__$1 = (((((!((map__37031 == null))))?(((((map__37031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37031):map__37031);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37031__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info){
return (function (p__37034){
var map__37035 = p__37034;
var map__37035__$1 = (((((!((map__37035 == null))))?(((((map__37035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37035):map__37035);
var rc = map__37035__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37035__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info){
return (function (p1__36984_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36984_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__36988,map__36988__$1,sources,compiled,warnings,map__36986,map__36986__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37037){
var map__37038 = p__37037;
var map__37038__$1 = (((((!((map__37038 == null))))?(((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37038):map__37038);
var msg = map__37038__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37040 = cljs.core.seq(updates);
var chunk__37042 = null;
var count__37043 = (0);
var i__37044 = (0);
while(true){
if((i__37044 < count__37043)){
var path = chunk__37042.cljs$core$IIndexed$_nth$arity$2(null,i__37044);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37070_37232 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37073_37233 = null;
var count__37074_37234 = (0);
var i__37075_37235 = (0);
while(true){
if((i__37075_37235 < count__37074_37234)){
var node_37236 = chunk__37073_37233.cljs$core$IIndexed$_nth$arity$2(null,i__37075_37235);
var path_match_37237 = shadow.cljs.devtools.client.browser.match_paths(node_37236.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37237)){
var new_link_37238 = (function (){var G__37083 = node_37236.cloneNode(true);
G__37083.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37237),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37083;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37237], 0));

goog.dom.insertSiblingAfter(new_link_37238,node_37236);

goog.dom.removeNode(node_37236);


var G__37239 = seq__37070_37232;
var G__37240 = chunk__37073_37233;
var G__37241 = count__37074_37234;
var G__37242 = (i__37075_37235 + (1));
seq__37070_37232 = G__37239;
chunk__37073_37233 = G__37240;
count__37074_37234 = G__37241;
i__37075_37235 = G__37242;
continue;
} else {
var G__37243 = seq__37070_37232;
var G__37244 = chunk__37073_37233;
var G__37245 = count__37074_37234;
var G__37246 = (i__37075_37235 + (1));
seq__37070_37232 = G__37243;
chunk__37073_37233 = G__37244;
count__37074_37234 = G__37245;
i__37075_37235 = G__37246;
continue;
}
} else {
var temp__5720__auto___37247 = cljs.core.seq(seq__37070_37232);
if(temp__5720__auto___37247){
var seq__37070_37248__$1 = temp__5720__auto___37247;
if(cljs.core.chunked_seq_QMARK_(seq__37070_37248__$1)){
var c__4550__auto___37249 = cljs.core.chunk_first(seq__37070_37248__$1);
var G__37251 = cljs.core.chunk_rest(seq__37070_37248__$1);
var G__37252 = c__4550__auto___37249;
var G__37253 = cljs.core.count(c__4550__auto___37249);
var G__37254 = (0);
seq__37070_37232 = G__37251;
chunk__37073_37233 = G__37252;
count__37074_37234 = G__37253;
i__37075_37235 = G__37254;
continue;
} else {
var node_37257 = cljs.core.first(seq__37070_37248__$1);
var path_match_37258 = shadow.cljs.devtools.client.browser.match_paths(node_37257.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37258)){
var new_link_37259 = (function (){var G__37084 = node_37257.cloneNode(true);
G__37084.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37258),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37084;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37258], 0));

goog.dom.insertSiblingAfter(new_link_37259,node_37257);

goog.dom.removeNode(node_37257);


var G__37260 = cljs.core.next(seq__37070_37248__$1);
var G__37261 = null;
var G__37262 = (0);
var G__37263 = (0);
seq__37070_37232 = G__37260;
chunk__37073_37233 = G__37261;
count__37074_37234 = G__37262;
i__37075_37235 = G__37263;
continue;
} else {
var G__37265 = cljs.core.next(seq__37070_37248__$1);
var G__37266 = null;
var G__37267 = (0);
var G__37268 = (0);
seq__37070_37232 = G__37265;
chunk__37073_37233 = G__37266;
count__37074_37234 = G__37267;
i__37075_37235 = G__37268;
continue;
}
}
} else {
}
}
break;
}


var G__37269 = seq__37040;
var G__37270 = chunk__37042;
var G__37271 = count__37043;
var G__37272 = (i__37044 + (1));
seq__37040 = G__37269;
chunk__37042 = G__37270;
count__37043 = G__37271;
i__37044 = G__37272;
continue;
} else {
var G__37273 = seq__37040;
var G__37274 = chunk__37042;
var G__37275 = count__37043;
var G__37276 = (i__37044 + (1));
seq__37040 = G__37273;
chunk__37042 = G__37274;
count__37043 = G__37275;
i__37044 = G__37276;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37040);
if(temp__5720__auto__){
var seq__37040__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37040__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37040__$1);
var G__37277 = cljs.core.chunk_rest(seq__37040__$1);
var G__37278 = c__4550__auto__;
var G__37279 = cljs.core.count(c__4550__auto__);
var G__37280 = (0);
seq__37040 = G__37277;
chunk__37042 = G__37278;
count__37043 = G__37279;
i__37044 = G__37280;
continue;
} else {
var path = cljs.core.first(seq__37040__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37085_37281 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37088_37282 = null;
var count__37089_37283 = (0);
var i__37090_37284 = (0);
while(true){
if((i__37090_37284 < count__37089_37283)){
var node_37285 = chunk__37088_37282.cljs$core$IIndexed$_nth$arity$2(null,i__37090_37284);
var path_match_37286 = shadow.cljs.devtools.client.browser.match_paths(node_37285.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37286)){
var new_link_37287 = (function (){var G__37097 = node_37285.cloneNode(true);
G__37097.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37286),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37097;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37286], 0));

goog.dom.insertSiblingAfter(new_link_37287,node_37285);

goog.dom.removeNode(node_37285);


var G__37290 = seq__37085_37281;
var G__37291 = chunk__37088_37282;
var G__37292 = count__37089_37283;
var G__37293 = (i__37090_37284 + (1));
seq__37085_37281 = G__37290;
chunk__37088_37282 = G__37291;
count__37089_37283 = G__37292;
i__37090_37284 = G__37293;
continue;
} else {
var G__37294 = seq__37085_37281;
var G__37295 = chunk__37088_37282;
var G__37296 = count__37089_37283;
var G__37297 = (i__37090_37284 + (1));
seq__37085_37281 = G__37294;
chunk__37088_37282 = G__37295;
count__37089_37283 = G__37296;
i__37090_37284 = G__37297;
continue;
}
} else {
var temp__5720__auto___37298__$1 = cljs.core.seq(seq__37085_37281);
if(temp__5720__auto___37298__$1){
var seq__37085_37299__$1 = temp__5720__auto___37298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37085_37299__$1)){
var c__4550__auto___37300 = cljs.core.chunk_first(seq__37085_37299__$1);
var G__37301 = cljs.core.chunk_rest(seq__37085_37299__$1);
var G__37302 = c__4550__auto___37300;
var G__37303 = cljs.core.count(c__4550__auto___37300);
var G__37304 = (0);
seq__37085_37281 = G__37301;
chunk__37088_37282 = G__37302;
count__37089_37283 = G__37303;
i__37090_37284 = G__37304;
continue;
} else {
var node_37305 = cljs.core.first(seq__37085_37299__$1);
var path_match_37306 = shadow.cljs.devtools.client.browser.match_paths(node_37305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37306)){
var new_link_37307 = (function (){var G__37098 = node_37305.cloneNode(true);
G__37098.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37098;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37306], 0));

goog.dom.insertSiblingAfter(new_link_37307,node_37305);

goog.dom.removeNode(node_37305);


var G__37308 = cljs.core.next(seq__37085_37299__$1);
var G__37309 = null;
var G__37310 = (0);
var G__37311 = (0);
seq__37085_37281 = G__37308;
chunk__37088_37282 = G__37309;
count__37089_37283 = G__37310;
i__37090_37284 = G__37311;
continue;
} else {
var G__37312 = cljs.core.next(seq__37085_37299__$1);
var G__37313 = null;
var G__37314 = (0);
var G__37315 = (0);
seq__37085_37281 = G__37312;
chunk__37088_37282 = G__37313;
count__37089_37283 = G__37314;
i__37090_37284 = G__37315;
continue;
}
}
} else {
}
}
break;
}


var G__37316 = cljs.core.next(seq__37040__$1);
var G__37317 = null;
var G__37318 = (0);
var G__37319 = (0);
seq__37040 = G__37316;
chunk__37042 = G__37317;
count__37043 = G__37318;
i__37044 = G__37319;
continue;
} else {
var G__37320 = cljs.core.next(seq__37040__$1);
var G__37321 = null;
var G__37322 = (0);
var G__37323 = (0);
seq__37040 = G__37320;
chunk__37042 = G__37321;
count__37043 = G__37322;
i__37044 = G__37323;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37099){
var map__37100 = p__37099;
var map__37100__$1 = (((((!((map__37100 == null))))?(((((map__37100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37100):map__37100);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37100__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37100__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37100,map__37100__$1,id,js){
return (function (){
return eval(js);
});})(map__37100,map__37100__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37102){
var map__37103 = p__37102;
var map__37103__$1 = (((((!((map__37103 == null))))?(((((map__37103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37103):map__37103);
var msg = map__37103__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37103,map__37103__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37105){
var map__37106 = p__37105;
var map__37106__$1 = (((((!((map__37106 == null))))?(((((map__37106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37106):map__37106);
var src = map__37106__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37106__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37103,map__37103__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37103,map__37103__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37103,map__37103__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37108){
var map__37109 = p__37108;
var map__37109__$1 = (((((!((map__37109 == null))))?(((((map__37109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37109):map__37109);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37109__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37109,map__37109__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37109,map__37109__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37113){
var map__37114 = p__37113;
var map__37114__$1 = (((((!((map__37114 == null))))?(((((map__37114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37114):map__37114);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37114__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37114__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37120){
var map__37121 = p__37120;
var map__37121__$1 = (((((!((map__37121 == null))))?(((((map__37121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37121):map__37121);
var msg = map__37121__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37123 = type;
var G__37123__$1 = (((G__37123 instanceof cljs.core.Keyword))?G__37123.fqn:null);
switch (G__37123__$1) {
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
var G__37130 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37131 = ((function (G__37130){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37130))
;
var G__37132 = "POST";
var G__37133 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37134 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37130,G__37131,G__37132,G__37133,G__37134);
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
}catch (e37146){var e = e37146;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37325 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37325)){
var s_37326 = temp__5720__auto___37325;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37326.onclose = ((function (s_37326,temp__5720__auto___37325){
return (function (e){
return null;
});})(s_37326,temp__5720__auto___37325))
;

s_37326.close();

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
