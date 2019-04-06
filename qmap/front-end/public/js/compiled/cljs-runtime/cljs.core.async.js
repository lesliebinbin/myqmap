goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33314 = arguments.length;
switch (G__33314) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33315 = (function (f,blockable,meta33316){
this.f = f;
this.blockable = blockable;
this.meta33316 = meta33316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33317,meta33316__$1){
var self__ = this;
var _33317__$1 = this;
return (new cljs.core.async.t_cljs$core$async33315(self__.f,self__.blockable,meta33316__$1));
});

cljs.core.async.t_cljs$core$async33315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33317){
var self__ = this;
var _33317__$1 = this;
return self__.meta33316;
});

cljs.core.async.t_cljs$core$async33315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33316","meta33316",1229117150,null)], null);
});

cljs.core.async.t_cljs$core$async33315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33315";

cljs.core.async.t_cljs$core$async33315.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33315");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33315.
 */
cljs.core.async.__GT_t_cljs$core$async33315 = (function cljs$core$async$__GT_t_cljs$core$async33315(f__$1,blockable__$1,meta33316){
return (new cljs.core.async.t_cljs$core$async33315(f__$1,blockable__$1,meta33316));
});

}

return (new cljs.core.async.t_cljs$core$async33315(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33320 = arguments.length;
switch (G__33320) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33322 = arguments.length;
switch (G__33322) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33324 = arguments.length;
switch (G__33324) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34779 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34779) : fn1.call(null,val_34779));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34779,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34779) : fn1.call(null,val_34779));
});})(val_34779,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33327 = arguments.length;
switch (G__33327) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34793 = n;
var x_34795 = (0);
while(true){
if((x_34795 < n__4607__auto___34793)){
(a[x_34795] = (0));

var G__34797 = (x_34795 + (1));
x_34795 = G__34797;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34799 = (i + (1));
i = G__34799;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33329 = (function (flag,meta33330){
this.flag = flag;
this.meta33330 = meta33330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33331,meta33330__$1){
var self__ = this;
var _33331__$1 = this;
return (new cljs.core.async.t_cljs$core$async33329(self__.flag,meta33330__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33331){
var self__ = this;
var _33331__$1 = this;
return self__.meta33330;
});})(flag))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33329.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33330","meta33330",-151264032,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33329";

cljs.core.async.t_cljs$core$async33329.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33329");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33329.
 */
cljs.core.async.__GT_t_cljs$core$async33329 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33329(flag__$1,meta33330){
return (new cljs.core.async.t_cljs$core$async33329(flag__$1,meta33330));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33329(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33332 = (function (flag,cb,meta33333){
this.flag = flag;
this.cb = cb;
this.meta33333 = meta33333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33334,meta33333__$1){
var self__ = this;
var _33334__$1 = this;
return (new cljs.core.async.t_cljs$core$async33332(self__.flag,self__.cb,meta33333__$1));
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33334){
var self__ = this;
var _33334__$1 = this;
return self__.meta33333;
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33333","meta33333",-485470116,null)], null);
});

cljs.core.async.t_cljs$core$async33332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33332";

cljs.core.async.t_cljs$core$async33332.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33332");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33332.
 */
cljs.core.async.__GT_t_cljs$core$async33332 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33332(flag__$1,cb__$1,meta33333){
return (new cljs.core.async.t_cljs$core$async33332(flag__$1,cb__$1,meta33333));
});

}

return (new cljs.core.async.t_cljs$core$async33332(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33335_SHARP_){
var G__33337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33335_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33337) : fret.call(null,G__33337));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33336_SHARP_){
var G__33338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33336_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33338) : fret.call(null,G__33338));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34823 = (i + (1));
i = G__34823;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34828 = arguments.length;
var i__4731__auto___34829 = (0);
while(true){
if((i__4731__auto___34829 < len__4730__auto___34828)){
args__4736__auto__.push((arguments[i__4731__auto___34829]));

var G__34830 = (i__4731__auto___34829 + (1));
i__4731__auto___34829 = G__34830;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33341){
var map__33342 = p__33341;
var map__33342__$1 = (((((!((map__33342 == null))))?(((((map__33342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33342):map__33342);
var opts = map__33342__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33339){
var G__33340 = cljs.core.first(seq33339);
var seq33339__$1 = cljs.core.next(seq33339);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33340,seq33339__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33254__auto___34841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___34841){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___34841){
return (function (state_33369){
var state_val_33370 = (state_33369[(1)]);
if((state_val_33370 === (7))){
var inst_33365 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33371_34842 = state_33369__$1;
(statearr_33371_34842[(2)] = inst_33365);

(statearr_33371_34842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (1))){
var state_33369__$1 = state_33369;
var statearr_33372_34843 = state_33369__$1;
(statearr_33372_34843[(2)] = null);

(statearr_33372_34843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (4))){
var inst_33348 = (state_33369[(7)]);
var inst_33348__$1 = (state_33369[(2)]);
var inst_33349 = (inst_33348__$1 == null);
var state_33369__$1 = (function (){var statearr_33373 = state_33369;
(statearr_33373[(7)] = inst_33348__$1);

return statearr_33373;
})();
if(cljs.core.truth_(inst_33349)){
var statearr_33374_34844 = state_33369__$1;
(statearr_33374_34844[(1)] = (5));

} else {
var statearr_33375_34845 = state_33369__$1;
(statearr_33375_34845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (13))){
var state_33369__$1 = state_33369;
var statearr_33376_34846 = state_33369__$1;
(statearr_33376_34846[(2)] = null);

(statearr_33376_34846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (6))){
var inst_33348 = (state_33369[(7)]);
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33369__$1,(11),to,inst_33348);
} else {
if((state_val_33370 === (3))){
var inst_33367 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33369__$1,inst_33367);
} else {
if((state_val_33370 === (12))){
var state_33369__$1 = state_33369;
var statearr_33377_34848 = state_33369__$1;
(statearr_33377_34848[(2)] = null);

(statearr_33377_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (2))){
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33369__$1,(4),from);
} else {
if((state_val_33370 === (11))){
var inst_33358 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
if(cljs.core.truth_(inst_33358)){
var statearr_33378_34849 = state_33369__$1;
(statearr_33378_34849[(1)] = (12));

} else {
var statearr_33379_34851 = state_33369__$1;
(statearr_33379_34851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (9))){
var state_33369__$1 = state_33369;
var statearr_33380_34852 = state_33369__$1;
(statearr_33380_34852[(2)] = null);

(statearr_33380_34852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (5))){
var state_33369__$1 = state_33369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33381_34853 = state_33369__$1;
(statearr_33381_34853[(1)] = (8));

} else {
var statearr_33382_34854 = state_33369__$1;
(statearr_33382_34854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (14))){
var inst_33363 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33383_34855 = state_33369__$1;
(statearr_33383_34855[(2)] = inst_33363);

(statearr_33383_34855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (10))){
var inst_33355 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33384_34856 = state_33369__$1;
(statearr_33384_34856[(2)] = inst_33355);

(statearr_33384_34856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (8))){
var inst_33352 = cljs.core.async.close_BANG_(to);
var state_33369__$1 = state_33369;
var statearr_33385_34857 = state_33369__$1;
(statearr_33385_34857[(2)] = inst_33352);

(statearr_33385_34857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___34841))
;
return ((function (switch__33155__auto__,c__33254__auto___34841){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_33386 = [null,null,null,null,null,null,null,null];
(statearr_33386[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_33386[(1)] = (1));

return statearr_33386;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_33369){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33369);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33387){if((e33387 instanceof Object)){
var ex__33159__auto__ = e33387;
var statearr_33388_34858 = state_33369;
(statearr_33388_34858[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34859 = state_33369;
state_33369 = G__34859;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_33369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_33369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___34841))
})();
var state__33256__auto__ = (function (){var statearr_33389 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33389[(6)] = c__33254__auto___34841);

return statearr_33389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___34841))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33390){
var vec__33391 = p__33390;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(1),null);
var job = vec__33391;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33254__auto___34860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___34860,res,vec__33391,v,p,job,jobs,results){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___34860,res,vec__33391,v,p,job,jobs,results){
return (function (state_33398){
var state_val_33399 = (state_33398[(1)]);
if((state_val_33399 === (1))){
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33398__$1,(2),res,v);
} else {
if((state_val_33399 === (2))){
var inst_33395 = (state_33398[(2)]);
var inst_33396 = cljs.core.async.close_BANG_(res);
var state_33398__$1 = (function (){var statearr_33400 = state_33398;
(statearr_33400[(7)] = inst_33395);

return statearr_33400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33398__$1,inst_33396);
} else {
return null;
}
}
});})(c__33254__auto___34860,res,vec__33391,v,p,job,jobs,results))
;
return ((function (switch__33155__auto__,c__33254__auto___34860,res,vec__33391,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0 = (function (){
var statearr_33401 = [null,null,null,null,null,null,null,null];
(statearr_33401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__);

(statearr_33401[(1)] = (1));

return statearr_33401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1 = (function (state_33398){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33398);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33402){if((e33402 instanceof Object)){
var ex__33159__auto__ = e33402;
var statearr_33403_34861 = state_33398;
(statearr_33403_34861[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34862 = state_33398;
state_33398 = G__34862;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = function(state_33398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1.call(this,state_33398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___34860,res,vec__33391,v,p,job,jobs,results))
})();
var state__33256__auto__ = (function (){var statearr_33404 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33404[(6)] = c__33254__auto___34860);

return statearr_33404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___34860,res,vec__33391,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33405){
var vec__33406 = p__33405;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(1),null);
var job = vec__33406;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___34865 = n;
var __34866 = (0);
while(true){
if((__34866 < n__4607__auto___34865)){
var G__33409_34867 = type;
var G__33409_34868__$1 = (((G__33409_34867 instanceof cljs.core.Keyword))?G__33409_34867.fqn:null);
switch (G__33409_34868__$1) {
case "compute":
var c__33254__auto___34870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34866,c__33254__auto___34870,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (__34866,c__33254__auto___34870,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async){
return (function (state_33422){
var state_val_33423 = (state_33422[(1)]);
if((state_val_33423 === (1))){
var state_33422__$1 = state_33422;
var statearr_33424_34880 = state_33422__$1;
(statearr_33424_34880[(2)] = null);

(statearr_33424_34880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (2))){
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33422__$1,(4),jobs);
} else {
if((state_val_33423 === (3))){
var inst_33420 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33422__$1,inst_33420);
} else {
if((state_val_33423 === (4))){
var inst_33412 = (state_33422[(2)]);
var inst_33413 = process(inst_33412);
var state_33422__$1 = state_33422;
if(cljs.core.truth_(inst_33413)){
var statearr_33425_34881 = state_33422__$1;
(statearr_33425_34881[(1)] = (5));

} else {
var statearr_33426_34882 = state_33422__$1;
(statearr_33426_34882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (5))){
var state_33422__$1 = state_33422;
var statearr_33427_34883 = state_33422__$1;
(statearr_33427_34883[(2)] = null);

(statearr_33427_34883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (6))){
var state_33422__$1 = state_33422;
var statearr_33428_34884 = state_33422__$1;
(statearr_33428_34884[(2)] = null);

(statearr_33428_34884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (7))){
var inst_33418 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
var statearr_33429_34885 = state_33422__$1;
(statearr_33429_34885[(2)] = inst_33418);

(statearr_33429_34885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34866,c__33254__auto___34870,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async))
;
return ((function (__34866,switch__33155__auto__,c__33254__auto___34870,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0 = (function (){
var statearr_33430 = [null,null,null,null,null,null,null];
(statearr_33430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__);

(statearr_33430[(1)] = (1));

return statearr_33430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1 = (function (state_33422){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33422);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33431){if((e33431 instanceof Object)){
var ex__33159__auto__ = e33431;
var statearr_33432_34886 = state_33422;
(statearr_33432_34886[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34887 = state_33422;
state_33422 = G__34887;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = function(state_33422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1.call(this,state_33422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__;
})()
;})(__34866,switch__33155__auto__,c__33254__auto___34870,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async))
})();
var state__33256__auto__ = (function (){var statearr_33433 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33433[(6)] = c__33254__auto___34870);

return statearr_33433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(__34866,c__33254__auto___34870,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async))
);


break;
case "async":
var c__33254__auto___34888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34866,c__33254__auto___34888,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (__34866,c__33254__auto___34888,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async){
return (function (state_33446){
var state_val_33447 = (state_33446[(1)]);
if((state_val_33447 === (1))){
var state_33446__$1 = state_33446;
var statearr_33448_34889 = state_33446__$1;
(statearr_33448_34889[(2)] = null);

(statearr_33448_34889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (2))){
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33446__$1,(4),jobs);
} else {
if((state_val_33447 === (3))){
var inst_33444 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33446__$1,inst_33444);
} else {
if((state_val_33447 === (4))){
var inst_33436 = (state_33446[(2)]);
var inst_33437 = async(inst_33436);
var state_33446__$1 = state_33446;
if(cljs.core.truth_(inst_33437)){
var statearr_33449_34890 = state_33446__$1;
(statearr_33449_34890[(1)] = (5));

} else {
var statearr_33450_34891 = state_33446__$1;
(statearr_33450_34891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (5))){
var state_33446__$1 = state_33446;
var statearr_33451_34892 = state_33446__$1;
(statearr_33451_34892[(2)] = null);

(statearr_33451_34892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (6))){
var state_33446__$1 = state_33446;
var statearr_33452_34893 = state_33446__$1;
(statearr_33452_34893[(2)] = null);

(statearr_33452_34893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (7))){
var inst_33442 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33453_34894 = state_33446__$1;
(statearr_33453_34894[(2)] = inst_33442);

(statearr_33453_34894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34866,c__33254__auto___34888,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async))
;
return ((function (__34866,switch__33155__auto__,c__33254__auto___34888,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0 = (function (){
var statearr_33454 = [null,null,null,null,null,null,null];
(statearr_33454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__);

(statearr_33454[(1)] = (1));

return statearr_33454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1 = (function (state_33446){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33446);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33455){if((e33455 instanceof Object)){
var ex__33159__auto__ = e33455;
var statearr_33456_34895 = state_33446;
(statearr_33456_34895[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34896 = state_33446;
state_33446 = G__34896;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = function(state_33446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1.call(this,state_33446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__;
})()
;})(__34866,switch__33155__auto__,c__33254__auto___34888,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async))
})();
var state__33256__auto__ = (function (){var statearr_33457 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33457[(6)] = c__33254__auto___34888);

return statearr_33457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(__34866,c__33254__auto___34888,G__33409_34867,G__33409_34868__$1,n__4607__auto___34865,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33409_34868__$1)].join('')));

}

var G__34898 = (__34866 + (1));
__34866 = G__34898;
continue;
} else {
}
break;
}

var c__33254__auto___34899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___34899,jobs,results,process,async){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___34899,jobs,results,process,async){
return (function (state_33479){
var state_val_33480 = (state_33479[(1)]);
if((state_val_33480 === (7))){
var inst_33475 = (state_33479[(2)]);
var state_33479__$1 = state_33479;
var statearr_33481_34900 = state_33479__$1;
(statearr_33481_34900[(2)] = inst_33475);

(statearr_33481_34900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33480 === (1))){
var state_33479__$1 = state_33479;
var statearr_33482_34901 = state_33479__$1;
(statearr_33482_34901[(2)] = null);

(statearr_33482_34901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33480 === (4))){
var inst_33460 = (state_33479[(7)]);
var inst_33460__$1 = (state_33479[(2)]);
var inst_33461 = (inst_33460__$1 == null);
var state_33479__$1 = (function (){var statearr_33483 = state_33479;
(statearr_33483[(7)] = inst_33460__$1);

return statearr_33483;
})();
if(cljs.core.truth_(inst_33461)){
var statearr_33484_34904 = state_33479__$1;
(statearr_33484_34904[(1)] = (5));

} else {
var statearr_33485_34905 = state_33479__$1;
(statearr_33485_34905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33480 === (6))){
var inst_33460 = (state_33479[(7)]);
var inst_33465 = (state_33479[(8)]);
var inst_33465__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33467 = [inst_33460,inst_33465__$1];
var inst_33468 = (new cljs.core.PersistentVector(null,2,(5),inst_33466,inst_33467,null));
var state_33479__$1 = (function (){var statearr_33486 = state_33479;
(statearr_33486[(8)] = inst_33465__$1);

return statearr_33486;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33479__$1,(8),jobs,inst_33468);
} else {
if((state_val_33480 === (3))){
var inst_33477 = (state_33479[(2)]);
var state_33479__$1 = state_33479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33479__$1,inst_33477);
} else {
if((state_val_33480 === (2))){
var state_33479__$1 = state_33479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33479__$1,(4),from);
} else {
if((state_val_33480 === (9))){
var inst_33472 = (state_33479[(2)]);
var state_33479__$1 = (function (){var statearr_33487 = state_33479;
(statearr_33487[(9)] = inst_33472);

return statearr_33487;
})();
var statearr_33488_34906 = state_33479__$1;
(statearr_33488_34906[(2)] = null);

(statearr_33488_34906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33480 === (5))){
var inst_33463 = cljs.core.async.close_BANG_(jobs);
var state_33479__$1 = state_33479;
var statearr_33489_34907 = state_33479__$1;
(statearr_33489_34907[(2)] = inst_33463);

(statearr_33489_34907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33480 === (8))){
var inst_33465 = (state_33479[(8)]);
var inst_33470 = (state_33479[(2)]);
var state_33479__$1 = (function (){var statearr_33490 = state_33479;
(statearr_33490[(10)] = inst_33470);

return statearr_33490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33479__$1,(9),results,inst_33465);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___34899,jobs,results,process,async))
;
return ((function (switch__33155__auto__,c__33254__auto___34899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0 = (function (){
var statearr_33491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__);

(statearr_33491[(1)] = (1));

return statearr_33491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1 = (function (state_33479){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33479);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33492){if((e33492 instanceof Object)){
var ex__33159__auto__ = e33492;
var statearr_33493_34913 = state_33479;
(statearr_33493_34913[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34914 = state_33479;
state_33479 = G__34914;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = function(state_33479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1.call(this,state_33479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___34899,jobs,results,process,async))
})();
var state__33256__auto__ = (function (){var statearr_33494 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33494[(6)] = c__33254__auto___34899);

return statearr_33494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___34899,jobs,results,process,async))
);


var c__33254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto__,jobs,results,process,async){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto__,jobs,results,process,async){
return (function (state_33532){
var state_val_33533 = (state_33532[(1)]);
if((state_val_33533 === (7))){
var inst_33528 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
var statearr_33534_34917 = state_33532__$1;
(statearr_33534_34917[(2)] = inst_33528);

(statearr_33534_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (20))){
var state_33532__$1 = state_33532;
var statearr_33535_34918 = state_33532__$1;
(statearr_33535_34918[(2)] = null);

(statearr_33535_34918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (1))){
var state_33532__$1 = state_33532;
var statearr_33536_34919 = state_33532__$1;
(statearr_33536_34919[(2)] = null);

(statearr_33536_34919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (4))){
var inst_33497 = (state_33532[(7)]);
var inst_33497__$1 = (state_33532[(2)]);
var inst_33498 = (inst_33497__$1 == null);
var state_33532__$1 = (function (){var statearr_33537 = state_33532;
(statearr_33537[(7)] = inst_33497__$1);

return statearr_33537;
})();
if(cljs.core.truth_(inst_33498)){
var statearr_33538_34920 = state_33532__$1;
(statearr_33538_34920[(1)] = (5));

} else {
var statearr_33539_34921 = state_33532__$1;
(statearr_33539_34921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (15))){
var inst_33510 = (state_33532[(8)]);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33532__$1,(18),to,inst_33510);
} else {
if((state_val_33533 === (21))){
var inst_33523 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
var statearr_33540_34922 = state_33532__$1;
(statearr_33540_34922[(2)] = inst_33523);

(statearr_33540_34922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (13))){
var inst_33525 = (state_33532[(2)]);
var state_33532__$1 = (function (){var statearr_33541 = state_33532;
(statearr_33541[(9)] = inst_33525);

return statearr_33541;
})();
var statearr_33542_34925 = state_33532__$1;
(statearr_33542_34925[(2)] = null);

(statearr_33542_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (6))){
var inst_33497 = (state_33532[(7)]);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33532__$1,(11),inst_33497);
} else {
if((state_val_33533 === (17))){
var inst_33518 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
if(cljs.core.truth_(inst_33518)){
var statearr_33543_34935 = state_33532__$1;
(statearr_33543_34935[(1)] = (19));

} else {
var statearr_33544_34936 = state_33532__$1;
(statearr_33544_34936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (3))){
var inst_33530 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33532__$1,inst_33530);
} else {
if((state_val_33533 === (12))){
var inst_33507 = (state_33532[(10)]);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33532__$1,(14),inst_33507);
} else {
if((state_val_33533 === (2))){
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33532__$1,(4),results);
} else {
if((state_val_33533 === (19))){
var state_33532__$1 = state_33532;
var statearr_33545_34937 = state_33532__$1;
(statearr_33545_34937[(2)] = null);

(statearr_33545_34937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (11))){
var inst_33507 = (state_33532[(2)]);
var state_33532__$1 = (function (){var statearr_33546 = state_33532;
(statearr_33546[(10)] = inst_33507);

return statearr_33546;
})();
var statearr_33547_34938 = state_33532__$1;
(statearr_33547_34938[(2)] = null);

(statearr_33547_34938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (9))){
var state_33532__$1 = state_33532;
var statearr_33548_34939 = state_33532__$1;
(statearr_33548_34939[(2)] = null);

(statearr_33548_34939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (5))){
var state_33532__$1 = state_33532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33549_34940 = state_33532__$1;
(statearr_33549_34940[(1)] = (8));

} else {
var statearr_33550_34941 = state_33532__$1;
(statearr_33550_34941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (14))){
var inst_33512 = (state_33532[(11)]);
var inst_33510 = (state_33532[(8)]);
var inst_33510__$1 = (state_33532[(2)]);
var inst_33511 = (inst_33510__$1 == null);
var inst_33512__$1 = cljs.core.not(inst_33511);
var state_33532__$1 = (function (){var statearr_33551 = state_33532;
(statearr_33551[(11)] = inst_33512__$1);

(statearr_33551[(8)] = inst_33510__$1);

return statearr_33551;
})();
if(inst_33512__$1){
var statearr_33552_34943 = state_33532__$1;
(statearr_33552_34943[(1)] = (15));

} else {
var statearr_33553_34945 = state_33532__$1;
(statearr_33553_34945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (16))){
var inst_33512 = (state_33532[(11)]);
var state_33532__$1 = state_33532;
var statearr_33554_34946 = state_33532__$1;
(statearr_33554_34946[(2)] = inst_33512);

(statearr_33554_34946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (10))){
var inst_33504 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
var statearr_33555_34947 = state_33532__$1;
(statearr_33555_34947[(2)] = inst_33504);

(statearr_33555_34947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (18))){
var inst_33515 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
var statearr_33556_34948 = state_33532__$1;
(statearr_33556_34948[(2)] = inst_33515);

(statearr_33556_34948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (8))){
var inst_33501 = cljs.core.async.close_BANG_(to);
var state_33532__$1 = state_33532;
var statearr_33557_34949 = state_33532__$1;
(statearr_33557_34949[(2)] = inst_33501);

(statearr_33557_34949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto__,jobs,results,process,async))
;
return ((function (switch__33155__auto__,c__33254__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0 = (function (){
var statearr_33558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__);

(statearr_33558[(1)] = (1));

return statearr_33558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1 = (function (state_33532){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33532);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33559){if((e33559 instanceof Object)){
var ex__33159__auto__ = e33559;
var statearr_33560_34951 = state_33532;
(statearr_33560_34951[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34953 = state_33532;
state_33532 = G__34953;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__ = function(state_33532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1.call(this,state_33532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto__,jobs,results,process,async))
})();
var state__33256__auto__ = (function (){var statearr_33561 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33561[(6)] = c__33254__auto__);

return statearr_33561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto__,jobs,results,process,async))
);

return c__33254__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33563 = arguments.length;
switch (G__33563) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33565 = arguments.length;
switch (G__33565) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33567 = arguments.length;
switch (G__33567) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33254__auto___34969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___34969,tc,fc){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___34969,tc,fc){
return (function (state_33593){
var state_val_33594 = (state_33593[(1)]);
if((state_val_33594 === (7))){
var inst_33589 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33595_34970 = state_33593__$1;
(statearr_33595_34970[(2)] = inst_33589);

(statearr_33595_34970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (1))){
var state_33593__$1 = state_33593;
var statearr_33596_34971 = state_33593__$1;
(statearr_33596_34971[(2)] = null);

(statearr_33596_34971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (4))){
var inst_33570 = (state_33593[(7)]);
var inst_33570__$1 = (state_33593[(2)]);
var inst_33571 = (inst_33570__$1 == null);
var state_33593__$1 = (function (){var statearr_33597 = state_33593;
(statearr_33597[(7)] = inst_33570__$1);

return statearr_33597;
})();
if(cljs.core.truth_(inst_33571)){
var statearr_33598_34972 = state_33593__$1;
(statearr_33598_34972[(1)] = (5));

} else {
var statearr_33599_34973 = state_33593__$1;
(statearr_33599_34973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (13))){
var state_33593__$1 = state_33593;
var statearr_33600_34974 = state_33593__$1;
(statearr_33600_34974[(2)] = null);

(statearr_33600_34974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (6))){
var inst_33570 = (state_33593[(7)]);
var inst_33576 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33570) : p.call(null,inst_33570));
var state_33593__$1 = state_33593;
if(cljs.core.truth_(inst_33576)){
var statearr_33601_34976 = state_33593__$1;
(statearr_33601_34976[(1)] = (9));

} else {
var statearr_33602_34977 = state_33593__$1;
(statearr_33602_34977[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (3))){
var inst_33591 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33593__$1,inst_33591);
} else {
if((state_val_33594 === (12))){
var state_33593__$1 = state_33593;
var statearr_33603_34978 = state_33593__$1;
(statearr_33603_34978[(2)] = null);

(statearr_33603_34978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (2))){
var state_33593__$1 = state_33593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33593__$1,(4),ch);
} else {
if((state_val_33594 === (11))){
var inst_33570 = (state_33593[(7)]);
var inst_33580 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33593__$1,(8),inst_33580,inst_33570);
} else {
if((state_val_33594 === (9))){
var state_33593__$1 = state_33593;
var statearr_33604_34979 = state_33593__$1;
(statearr_33604_34979[(2)] = tc);

(statearr_33604_34979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (5))){
var inst_33573 = cljs.core.async.close_BANG_(tc);
var inst_33574 = cljs.core.async.close_BANG_(fc);
var state_33593__$1 = (function (){var statearr_33605 = state_33593;
(statearr_33605[(8)] = inst_33573);

return statearr_33605;
})();
var statearr_33606_34980 = state_33593__$1;
(statearr_33606_34980[(2)] = inst_33574);

(statearr_33606_34980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (14))){
var inst_33587 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33607_34981 = state_33593__$1;
(statearr_33607_34981[(2)] = inst_33587);

(statearr_33607_34981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (10))){
var state_33593__$1 = state_33593;
var statearr_33608_34986 = state_33593__$1;
(statearr_33608_34986[(2)] = fc);

(statearr_33608_34986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (8))){
var inst_33582 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
if(cljs.core.truth_(inst_33582)){
var statearr_33609_34987 = state_33593__$1;
(statearr_33609_34987[(1)] = (12));

} else {
var statearr_33610_34988 = state_33593__$1;
(statearr_33610_34988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___34969,tc,fc))
;
return ((function (switch__33155__auto__,c__33254__auto___34969,tc,fc){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_33611 = [null,null,null,null,null,null,null,null,null];
(statearr_33611[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_33611[(1)] = (1));

return statearr_33611;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_33593){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33593);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33612){if((e33612 instanceof Object)){
var ex__33159__auto__ = e33612;
var statearr_33613_34992 = state_33593;
(statearr_33613_34992[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34993 = state_33593;
state_33593 = G__34993;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_33593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_33593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___34969,tc,fc))
})();
var state__33256__auto__ = (function (){var statearr_33614 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33614[(6)] = c__33254__auto___34969);

return statearr_33614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___34969,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto__){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto__){
return (function (state_33635){
var state_val_33636 = (state_33635[(1)]);
if((state_val_33636 === (7))){
var inst_33631 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33637_35000 = state_33635__$1;
(statearr_33637_35000[(2)] = inst_33631);

(statearr_33637_35000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (1))){
var inst_33615 = init;
var state_33635__$1 = (function (){var statearr_33638 = state_33635;
(statearr_33638[(7)] = inst_33615);

return statearr_33638;
})();
var statearr_33639_35001 = state_33635__$1;
(statearr_33639_35001[(2)] = null);

(statearr_33639_35001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (4))){
var inst_33618 = (state_33635[(8)]);
var inst_33618__$1 = (state_33635[(2)]);
var inst_33619 = (inst_33618__$1 == null);
var state_33635__$1 = (function (){var statearr_33640 = state_33635;
(statearr_33640[(8)] = inst_33618__$1);

return statearr_33640;
})();
if(cljs.core.truth_(inst_33619)){
var statearr_33641_35002 = state_33635__$1;
(statearr_33641_35002[(1)] = (5));

} else {
var statearr_33642_35006 = state_33635__$1;
(statearr_33642_35006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (6))){
var inst_33615 = (state_33635[(7)]);
var inst_33622 = (state_33635[(9)]);
var inst_33618 = (state_33635[(8)]);
var inst_33622__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33615,inst_33618) : f.call(null,inst_33615,inst_33618));
var inst_33623 = cljs.core.reduced_QMARK_(inst_33622__$1);
var state_33635__$1 = (function (){var statearr_33643 = state_33635;
(statearr_33643[(9)] = inst_33622__$1);

return statearr_33643;
})();
if(inst_33623){
var statearr_33644_35007 = state_33635__$1;
(statearr_33644_35007[(1)] = (8));

} else {
var statearr_33645_35008 = state_33635__$1;
(statearr_33645_35008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (3))){
var inst_33633 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33635__$1,inst_33633);
} else {
if((state_val_33636 === (2))){
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33635__$1,(4),ch);
} else {
if((state_val_33636 === (9))){
var inst_33622 = (state_33635[(9)]);
var inst_33615 = inst_33622;
var state_33635__$1 = (function (){var statearr_33646 = state_33635;
(statearr_33646[(7)] = inst_33615);

return statearr_33646;
})();
var statearr_33647_35011 = state_33635__$1;
(statearr_33647_35011[(2)] = null);

(statearr_33647_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (5))){
var inst_33615 = (state_33635[(7)]);
var state_33635__$1 = state_33635;
var statearr_33648_35012 = state_33635__$1;
(statearr_33648_35012[(2)] = inst_33615);

(statearr_33648_35012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (10))){
var inst_33629 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33649_35013 = state_33635__$1;
(statearr_33649_35013[(2)] = inst_33629);

(statearr_33649_35013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (8))){
var inst_33622 = (state_33635[(9)]);
var inst_33625 = cljs.core.deref(inst_33622);
var state_33635__$1 = state_33635;
var statearr_33650_35014 = state_33635__$1;
(statearr_33650_35014[(2)] = inst_33625);

(statearr_33650_35014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto__))
;
return ((function (switch__33155__auto__,c__33254__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33156__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33156__auto____0 = (function (){
var statearr_33651 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33651[(0)] = cljs$core$async$reduce_$_state_machine__33156__auto__);

(statearr_33651[(1)] = (1));

return statearr_33651;
});
var cljs$core$async$reduce_$_state_machine__33156__auto____1 = (function (state_33635){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33635);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33652){if((e33652 instanceof Object)){
var ex__33159__auto__ = e33652;
var statearr_33653_35018 = state_33635;
(statearr_33653_35018[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35022 = state_33635;
state_33635 = G__35022;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33156__auto__ = function(state_33635){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33156__auto____1.call(this,state_33635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33156__auto____0;
cljs$core$async$reduce_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33156__auto____1;
return cljs$core$async$reduce_$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto__))
})();
var state__33256__auto__ = (function (){var statearr_33654 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33654[(6)] = c__33254__auto__);

return statearr_33654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto__))
);

return c__33254__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto__,f__$1){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto__,f__$1){
return (function (state_33660){
var state_val_33661 = (state_33660[(1)]);
if((state_val_33661 === (1))){
var inst_33655 = cljs.core.async.reduce(f__$1,init,ch);
var state_33660__$1 = state_33660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33660__$1,(2),inst_33655);
} else {
if((state_val_33661 === (2))){
var inst_33657 = (state_33660[(2)]);
var inst_33658 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33657) : f__$1.call(null,inst_33657));
var state_33660__$1 = state_33660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33660__$1,inst_33658);
} else {
return null;
}
}
});})(c__33254__auto__,f__$1))
;
return ((function (switch__33155__auto__,c__33254__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33156__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33156__auto____0 = (function (){
var statearr_33662 = [null,null,null,null,null,null,null];
(statearr_33662[(0)] = cljs$core$async$transduce_$_state_machine__33156__auto__);

(statearr_33662[(1)] = (1));

return statearr_33662;
});
var cljs$core$async$transduce_$_state_machine__33156__auto____1 = (function (state_33660){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33660);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33663){if((e33663 instanceof Object)){
var ex__33159__auto__ = e33663;
var statearr_33664_35033 = state_33660;
(statearr_33664_35033[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35034 = state_33660;
state_33660 = G__35034;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33156__auto__ = function(state_33660){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33156__auto____1.call(this,state_33660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33156__auto____0;
cljs$core$async$transduce_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33156__auto____1;
return cljs$core$async$transduce_$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto__,f__$1))
})();
var state__33256__auto__ = (function (){var statearr_33665 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33665[(6)] = c__33254__auto__);

return statearr_33665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto__,f__$1))
);

return c__33254__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33667 = arguments.length;
switch (G__33667) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto__){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto__){
return (function (state_33692){
var state_val_33693 = (state_33692[(1)]);
if((state_val_33693 === (7))){
var inst_33674 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33694_35036 = state_33692__$1;
(statearr_33694_35036[(2)] = inst_33674);

(statearr_33694_35036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (1))){
var inst_33668 = cljs.core.seq(coll);
var inst_33669 = inst_33668;
var state_33692__$1 = (function (){var statearr_33695 = state_33692;
(statearr_33695[(7)] = inst_33669);

return statearr_33695;
})();
var statearr_33696_35037 = state_33692__$1;
(statearr_33696_35037[(2)] = null);

(statearr_33696_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (4))){
var inst_33669 = (state_33692[(7)]);
var inst_33672 = cljs.core.first(inst_33669);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33692__$1,(7),ch,inst_33672);
} else {
if((state_val_33693 === (13))){
var inst_33686 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33697_35038 = state_33692__$1;
(statearr_33697_35038[(2)] = inst_33686);

(statearr_33697_35038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (6))){
var inst_33677 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
if(cljs.core.truth_(inst_33677)){
var statearr_33698_35039 = state_33692__$1;
(statearr_33698_35039[(1)] = (8));

} else {
var statearr_33699_35040 = state_33692__$1;
(statearr_33699_35040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (3))){
var inst_33690 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33692__$1,inst_33690);
} else {
if((state_val_33693 === (12))){
var state_33692__$1 = state_33692;
var statearr_33700_35041 = state_33692__$1;
(statearr_33700_35041[(2)] = null);

(statearr_33700_35041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (2))){
var inst_33669 = (state_33692[(7)]);
var state_33692__$1 = state_33692;
if(cljs.core.truth_(inst_33669)){
var statearr_33701_35042 = state_33692__$1;
(statearr_33701_35042[(1)] = (4));

} else {
var statearr_33702_35043 = state_33692__$1;
(statearr_33702_35043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (11))){
var inst_33683 = cljs.core.async.close_BANG_(ch);
var state_33692__$1 = state_33692;
var statearr_33703_35047 = state_33692__$1;
(statearr_33703_35047[(2)] = inst_33683);

(statearr_33703_35047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (9))){
var state_33692__$1 = state_33692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33704_35048 = state_33692__$1;
(statearr_33704_35048[(1)] = (11));

} else {
var statearr_33705_35049 = state_33692__$1;
(statearr_33705_35049[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (5))){
var inst_33669 = (state_33692[(7)]);
var state_33692__$1 = state_33692;
var statearr_33706_35050 = state_33692__$1;
(statearr_33706_35050[(2)] = inst_33669);

(statearr_33706_35050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (10))){
var inst_33688 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33707_35051 = state_33692__$1;
(statearr_33707_35051[(2)] = inst_33688);

(statearr_33707_35051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (8))){
var inst_33669 = (state_33692[(7)]);
var inst_33679 = cljs.core.next(inst_33669);
var inst_33669__$1 = inst_33679;
var state_33692__$1 = (function (){var statearr_33708 = state_33692;
(statearr_33708[(7)] = inst_33669__$1);

return statearr_33708;
})();
var statearr_33709_35052 = state_33692__$1;
(statearr_33709_35052[(2)] = null);

(statearr_33709_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto__))
;
return ((function (switch__33155__auto__,c__33254__auto__){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_33710 = [null,null,null,null,null,null,null,null];
(statearr_33710[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_33710[(1)] = (1));

return statearr_33710;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_33692){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33692);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33711){if((e33711 instanceof Object)){
var ex__33159__auto__ = e33711;
var statearr_33712_35056 = state_33692;
(statearr_33712_35056[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35057 = state_33692;
state_33692 = G__35057;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_33692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_33692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto__))
})();
var state__33256__auto__ = (function (){var statearr_33713 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33713[(6)] = c__33254__auto__);

return statearr_33713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto__))
);

return c__33254__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33714 = (function (ch,cs,meta33715){
this.ch = ch;
this.cs = cs;
this.meta33715 = meta33715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33716,meta33715__$1){
var self__ = this;
var _33716__$1 = this;
return (new cljs.core.async.t_cljs$core$async33714(self__.ch,self__.cs,meta33715__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33716){
var self__ = this;
var _33716__$1 = this;
return self__.meta33715;
});})(cs))
;

cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33714.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33715","meta33715",-173090567,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33714";

cljs.core.async.t_cljs$core$async33714.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33714");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33714.
 */
cljs.core.async.__GT_t_cljs$core$async33714 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33714(ch__$1,cs__$1,meta33715){
return (new cljs.core.async.t_cljs$core$async33714(ch__$1,cs__$1,meta33715));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33714(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33254__auto___35074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35074,cs,m,dchan,dctr,done){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35074,cs,m,dchan,dctr,done){
return (function (state_33851){
var state_val_33852 = (state_33851[(1)]);
if((state_val_33852 === (7))){
var inst_33847 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33853_35075 = state_33851__$1;
(statearr_33853_35075[(2)] = inst_33847);

(statearr_33853_35075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (20))){
var inst_33750 = (state_33851[(7)]);
var inst_33762 = cljs.core.first(inst_33750);
var inst_33763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33762,(0),null);
var inst_33764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33762,(1),null);
var state_33851__$1 = (function (){var statearr_33854 = state_33851;
(statearr_33854[(8)] = inst_33763);

return statearr_33854;
})();
if(cljs.core.truth_(inst_33764)){
var statearr_33855_35082 = state_33851__$1;
(statearr_33855_35082[(1)] = (22));

} else {
var statearr_33856_35083 = state_33851__$1;
(statearr_33856_35083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (27))){
var inst_33799 = (state_33851[(9)]);
var inst_33792 = (state_33851[(10)]);
var inst_33719 = (state_33851[(11)]);
var inst_33794 = (state_33851[(12)]);
var inst_33799__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33792,inst_33794);
var inst_33800 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33799__$1,inst_33719,done);
var state_33851__$1 = (function (){var statearr_33857 = state_33851;
(statearr_33857[(9)] = inst_33799__$1);

return statearr_33857;
})();
if(cljs.core.truth_(inst_33800)){
var statearr_33858_35084 = state_33851__$1;
(statearr_33858_35084[(1)] = (30));

} else {
var statearr_33859_35088 = state_33851__$1;
(statearr_33859_35088[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (1))){
var state_33851__$1 = state_33851;
var statearr_33860_35092 = state_33851__$1;
(statearr_33860_35092[(2)] = null);

(statearr_33860_35092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (24))){
var inst_33750 = (state_33851[(7)]);
var inst_33769 = (state_33851[(2)]);
var inst_33770 = cljs.core.next(inst_33750);
var inst_33728 = inst_33770;
var inst_33729 = null;
var inst_33730 = (0);
var inst_33731 = (0);
var state_33851__$1 = (function (){var statearr_33861 = state_33851;
(statearr_33861[(13)] = inst_33769);

(statearr_33861[(14)] = inst_33730);

(statearr_33861[(15)] = inst_33729);

(statearr_33861[(16)] = inst_33731);

(statearr_33861[(17)] = inst_33728);

return statearr_33861;
})();
var statearr_33862_35093 = state_33851__$1;
(statearr_33862_35093[(2)] = null);

(statearr_33862_35093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (39))){
var state_33851__$1 = state_33851;
var statearr_33866_35094 = state_33851__$1;
(statearr_33866_35094[(2)] = null);

(statearr_33866_35094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (4))){
var inst_33719 = (state_33851[(11)]);
var inst_33719__$1 = (state_33851[(2)]);
var inst_33720 = (inst_33719__$1 == null);
var state_33851__$1 = (function (){var statearr_33867 = state_33851;
(statearr_33867[(11)] = inst_33719__$1);

return statearr_33867;
})();
if(cljs.core.truth_(inst_33720)){
var statearr_33868_35095 = state_33851__$1;
(statearr_33868_35095[(1)] = (5));

} else {
var statearr_33869_35096 = state_33851__$1;
(statearr_33869_35096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (15))){
var inst_33730 = (state_33851[(14)]);
var inst_33729 = (state_33851[(15)]);
var inst_33731 = (state_33851[(16)]);
var inst_33728 = (state_33851[(17)]);
var inst_33746 = (state_33851[(2)]);
var inst_33747 = (inst_33731 + (1));
var tmp33863 = inst_33730;
var tmp33864 = inst_33729;
var tmp33865 = inst_33728;
var inst_33728__$1 = tmp33865;
var inst_33729__$1 = tmp33864;
var inst_33730__$1 = tmp33863;
var inst_33731__$1 = inst_33747;
var state_33851__$1 = (function (){var statearr_33870 = state_33851;
(statearr_33870[(14)] = inst_33730__$1);

(statearr_33870[(15)] = inst_33729__$1);

(statearr_33870[(18)] = inst_33746);

(statearr_33870[(16)] = inst_33731__$1);

(statearr_33870[(17)] = inst_33728__$1);

return statearr_33870;
})();
var statearr_33871_35097 = state_33851__$1;
(statearr_33871_35097[(2)] = null);

(statearr_33871_35097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (21))){
var inst_33773 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33875_35098 = state_33851__$1;
(statearr_33875_35098[(2)] = inst_33773);

(statearr_33875_35098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (31))){
var inst_33799 = (state_33851[(9)]);
var inst_33803 = done(null);
var inst_33804 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33799);
var state_33851__$1 = (function (){var statearr_33876 = state_33851;
(statearr_33876[(19)] = inst_33803);

return statearr_33876;
})();
var statearr_33877_35100 = state_33851__$1;
(statearr_33877_35100[(2)] = inst_33804);

(statearr_33877_35100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (32))){
var inst_33792 = (state_33851[(10)]);
var inst_33791 = (state_33851[(20)]);
var inst_33793 = (state_33851[(21)]);
var inst_33794 = (state_33851[(12)]);
var inst_33806 = (state_33851[(2)]);
var inst_33807 = (inst_33794 + (1));
var tmp33872 = inst_33792;
var tmp33873 = inst_33791;
var tmp33874 = inst_33793;
var inst_33791__$1 = tmp33873;
var inst_33792__$1 = tmp33872;
var inst_33793__$1 = tmp33874;
var inst_33794__$1 = inst_33807;
var state_33851__$1 = (function (){var statearr_33878 = state_33851;
(statearr_33878[(10)] = inst_33792__$1);

(statearr_33878[(22)] = inst_33806);

(statearr_33878[(20)] = inst_33791__$1);

(statearr_33878[(21)] = inst_33793__$1);

(statearr_33878[(12)] = inst_33794__$1);

return statearr_33878;
})();
var statearr_33879_35101 = state_33851__$1;
(statearr_33879_35101[(2)] = null);

(statearr_33879_35101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (40))){
var inst_33819 = (state_33851[(23)]);
var inst_33823 = done(null);
var inst_33824 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33819);
var state_33851__$1 = (function (){var statearr_33880 = state_33851;
(statearr_33880[(24)] = inst_33823);

return statearr_33880;
})();
var statearr_33881_35102 = state_33851__$1;
(statearr_33881_35102[(2)] = inst_33824);

(statearr_33881_35102[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (33))){
var inst_33810 = (state_33851[(25)]);
var inst_33812 = cljs.core.chunked_seq_QMARK_(inst_33810);
var state_33851__$1 = state_33851;
if(inst_33812){
var statearr_33882_35103 = state_33851__$1;
(statearr_33882_35103[(1)] = (36));

} else {
var statearr_33883_35104 = state_33851__$1;
(statearr_33883_35104[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (13))){
var inst_33740 = (state_33851[(26)]);
var inst_33743 = cljs.core.async.close_BANG_(inst_33740);
var state_33851__$1 = state_33851;
var statearr_33884_35105 = state_33851__$1;
(statearr_33884_35105[(2)] = inst_33743);

(statearr_33884_35105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (22))){
var inst_33763 = (state_33851[(8)]);
var inst_33766 = cljs.core.async.close_BANG_(inst_33763);
var state_33851__$1 = state_33851;
var statearr_33885_35106 = state_33851__$1;
(statearr_33885_35106[(2)] = inst_33766);

(statearr_33885_35106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (36))){
var inst_33810 = (state_33851[(25)]);
var inst_33814 = cljs.core.chunk_first(inst_33810);
var inst_33815 = cljs.core.chunk_rest(inst_33810);
var inst_33816 = cljs.core.count(inst_33814);
var inst_33791 = inst_33815;
var inst_33792 = inst_33814;
var inst_33793 = inst_33816;
var inst_33794 = (0);
var state_33851__$1 = (function (){var statearr_33886 = state_33851;
(statearr_33886[(10)] = inst_33792);

(statearr_33886[(20)] = inst_33791);

(statearr_33886[(21)] = inst_33793);

(statearr_33886[(12)] = inst_33794);

return statearr_33886;
})();
var statearr_33887_35107 = state_33851__$1;
(statearr_33887_35107[(2)] = null);

(statearr_33887_35107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (41))){
var inst_33810 = (state_33851[(25)]);
var inst_33826 = (state_33851[(2)]);
var inst_33827 = cljs.core.next(inst_33810);
var inst_33791 = inst_33827;
var inst_33792 = null;
var inst_33793 = (0);
var inst_33794 = (0);
var state_33851__$1 = (function (){var statearr_33888 = state_33851;
(statearr_33888[(10)] = inst_33792);

(statearr_33888[(27)] = inst_33826);

(statearr_33888[(20)] = inst_33791);

(statearr_33888[(21)] = inst_33793);

(statearr_33888[(12)] = inst_33794);

return statearr_33888;
})();
var statearr_33889_35108 = state_33851__$1;
(statearr_33889_35108[(2)] = null);

(statearr_33889_35108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (43))){
var state_33851__$1 = state_33851;
var statearr_33890_35109 = state_33851__$1;
(statearr_33890_35109[(2)] = null);

(statearr_33890_35109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (29))){
var inst_33835 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33891_35110 = state_33851__$1;
(statearr_33891_35110[(2)] = inst_33835);

(statearr_33891_35110[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (44))){
var inst_33844 = (state_33851[(2)]);
var state_33851__$1 = (function (){var statearr_33892 = state_33851;
(statearr_33892[(28)] = inst_33844);

return statearr_33892;
})();
var statearr_33893_35111 = state_33851__$1;
(statearr_33893_35111[(2)] = null);

(statearr_33893_35111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (6))){
var inst_33783 = (state_33851[(29)]);
var inst_33782 = cljs.core.deref(cs);
var inst_33783__$1 = cljs.core.keys(inst_33782);
var inst_33784 = cljs.core.count(inst_33783__$1);
var inst_33785 = cljs.core.reset_BANG_(dctr,inst_33784);
var inst_33790 = cljs.core.seq(inst_33783__$1);
var inst_33791 = inst_33790;
var inst_33792 = null;
var inst_33793 = (0);
var inst_33794 = (0);
var state_33851__$1 = (function (){var statearr_33894 = state_33851;
(statearr_33894[(10)] = inst_33792);

(statearr_33894[(20)] = inst_33791);

(statearr_33894[(29)] = inst_33783__$1);

(statearr_33894[(21)] = inst_33793);

(statearr_33894[(12)] = inst_33794);

(statearr_33894[(30)] = inst_33785);

return statearr_33894;
})();
var statearr_33895_35112 = state_33851__$1;
(statearr_33895_35112[(2)] = null);

(statearr_33895_35112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (28))){
var inst_33791 = (state_33851[(20)]);
var inst_33810 = (state_33851[(25)]);
var inst_33810__$1 = cljs.core.seq(inst_33791);
var state_33851__$1 = (function (){var statearr_33896 = state_33851;
(statearr_33896[(25)] = inst_33810__$1);

return statearr_33896;
})();
if(inst_33810__$1){
var statearr_33897_35113 = state_33851__$1;
(statearr_33897_35113[(1)] = (33));

} else {
var statearr_33898_35114 = state_33851__$1;
(statearr_33898_35114[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (25))){
var inst_33793 = (state_33851[(21)]);
var inst_33794 = (state_33851[(12)]);
var inst_33796 = (inst_33794 < inst_33793);
var inst_33797 = inst_33796;
var state_33851__$1 = state_33851;
if(cljs.core.truth_(inst_33797)){
var statearr_33899_35115 = state_33851__$1;
(statearr_33899_35115[(1)] = (27));

} else {
var statearr_33900_35116 = state_33851__$1;
(statearr_33900_35116[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (34))){
var state_33851__$1 = state_33851;
var statearr_33901_35117 = state_33851__$1;
(statearr_33901_35117[(2)] = null);

(statearr_33901_35117[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (17))){
var state_33851__$1 = state_33851;
var statearr_33902_35118 = state_33851__$1;
(statearr_33902_35118[(2)] = null);

(statearr_33902_35118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (3))){
var inst_33849 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33851__$1,inst_33849);
} else {
if((state_val_33852 === (12))){
var inst_33778 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33903_35119 = state_33851__$1;
(statearr_33903_35119[(2)] = inst_33778);

(statearr_33903_35119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (2))){
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33851__$1,(4),ch);
} else {
if((state_val_33852 === (23))){
var state_33851__$1 = state_33851;
var statearr_33904_35120 = state_33851__$1;
(statearr_33904_35120[(2)] = null);

(statearr_33904_35120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (35))){
var inst_33833 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33905_35121 = state_33851__$1;
(statearr_33905_35121[(2)] = inst_33833);

(statearr_33905_35121[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (19))){
var inst_33750 = (state_33851[(7)]);
var inst_33754 = cljs.core.chunk_first(inst_33750);
var inst_33755 = cljs.core.chunk_rest(inst_33750);
var inst_33756 = cljs.core.count(inst_33754);
var inst_33728 = inst_33755;
var inst_33729 = inst_33754;
var inst_33730 = inst_33756;
var inst_33731 = (0);
var state_33851__$1 = (function (){var statearr_33906 = state_33851;
(statearr_33906[(14)] = inst_33730);

(statearr_33906[(15)] = inst_33729);

(statearr_33906[(16)] = inst_33731);

(statearr_33906[(17)] = inst_33728);

return statearr_33906;
})();
var statearr_33907_35122 = state_33851__$1;
(statearr_33907_35122[(2)] = null);

(statearr_33907_35122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (11))){
var inst_33750 = (state_33851[(7)]);
var inst_33728 = (state_33851[(17)]);
var inst_33750__$1 = cljs.core.seq(inst_33728);
var state_33851__$1 = (function (){var statearr_33908 = state_33851;
(statearr_33908[(7)] = inst_33750__$1);

return statearr_33908;
})();
if(inst_33750__$1){
var statearr_33909_35123 = state_33851__$1;
(statearr_33909_35123[(1)] = (16));

} else {
var statearr_33910_35124 = state_33851__$1;
(statearr_33910_35124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (9))){
var inst_33780 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33911_35125 = state_33851__$1;
(statearr_33911_35125[(2)] = inst_33780);

(statearr_33911_35125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (5))){
var inst_33726 = cljs.core.deref(cs);
var inst_33727 = cljs.core.seq(inst_33726);
var inst_33728 = inst_33727;
var inst_33729 = null;
var inst_33730 = (0);
var inst_33731 = (0);
var state_33851__$1 = (function (){var statearr_33912 = state_33851;
(statearr_33912[(14)] = inst_33730);

(statearr_33912[(15)] = inst_33729);

(statearr_33912[(16)] = inst_33731);

(statearr_33912[(17)] = inst_33728);

return statearr_33912;
})();
var statearr_33913_35126 = state_33851__$1;
(statearr_33913_35126[(2)] = null);

(statearr_33913_35126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (14))){
var state_33851__$1 = state_33851;
var statearr_33914_35127 = state_33851__$1;
(statearr_33914_35127[(2)] = null);

(statearr_33914_35127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (45))){
var inst_33841 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33915_35128 = state_33851__$1;
(statearr_33915_35128[(2)] = inst_33841);

(statearr_33915_35128[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (26))){
var inst_33783 = (state_33851[(29)]);
var inst_33837 = (state_33851[(2)]);
var inst_33838 = cljs.core.seq(inst_33783);
var state_33851__$1 = (function (){var statearr_33916 = state_33851;
(statearr_33916[(31)] = inst_33837);

return statearr_33916;
})();
if(inst_33838){
var statearr_33917_35131 = state_33851__$1;
(statearr_33917_35131[(1)] = (42));

} else {
var statearr_33918_35132 = state_33851__$1;
(statearr_33918_35132[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (16))){
var inst_33750 = (state_33851[(7)]);
var inst_33752 = cljs.core.chunked_seq_QMARK_(inst_33750);
var state_33851__$1 = state_33851;
if(inst_33752){
var statearr_33919_35133 = state_33851__$1;
(statearr_33919_35133[(1)] = (19));

} else {
var statearr_33920_35134 = state_33851__$1;
(statearr_33920_35134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (38))){
var inst_33830 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33921_35135 = state_33851__$1;
(statearr_33921_35135[(2)] = inst_33830);

(statearr_33921_35135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (30))){
var state_33851__$1 = state_33851;
var statearr_33922_35136 = state_33851__$1;
(statearr_33922_35136[(2)] = null);

(statearr_33922_35136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (10))){
var inst_33729 = (state_33851[(15)]);
var inst_33731 = (state_33851[(16)]);
var inst_33739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33729,inst_33731);
var inst_33740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33739,(0),null);
var inst_33741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33739,(1),null);
var state_33851__$1 = (function (){var statearr_33923 = state_33851;
(statearr_33923[(26)] = inst_33740);

return statearr_33923;
})();
if(cljs.core.truth_(inst_33741)){
var statearr_33924_35137 = state_33851__$1;
(statearr_33924_35137[(1)] = (13));

} else {
var statearr_33925_35138 = state_33851__$1;
(statearr_33925_35138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (18))){
var inst_33776 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33926_35139 = state_33851__$1;
(statearr_33926_35139[(2)] = inst_33776);

(statearr_33926_35139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (42))){
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33851__$1,(45),dchan);
} else {
if((state_val_33852 === (37))){
var inst_33719 = (state_33851[(11)]);
var inst_33819 = (state_33851[(23)]);
var inst_33810 = (state_33851[(25)]);
var inst_33819__$1 = cljs.core.first(inst_33810);
var inst_33820 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33819__$1,inst_33719,done);
var state_33851__$1 = (function (){var statearr_33927 = state_33851;
(statearr_33927[(23)] = inst_33819__$1);

return statearr_33927;
})();
if(cljs.core.truth_(inst_33820)){
var statearr_33928_35140 = state_33851__$1;
(statearr_33928_35140[(1)] = (39));

} else {
var statearr_33929_35141 = state_33851__$1;
(statearr_33929_35141[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (8))){
var inst_33730 = (state_33851[(14)]);
var inst_33731 = (state_33851[(16)]);
var inst_33733 = (inst_33731 < inst_33730);
var inst_33734 = inst_33733;
var state_33851__$1 = state_33851;
if(cljs.core.truth_(inst_33734)){
var statearr_33930_35142 = state_33851__$1;
(statearr_33930_35142[(1)] = (10));

} else {
var statearr_33931_35143 = state_33851__$1;
(statearr_33931_35143[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35074,cs,m,dchan,dctr,done))
;
return ((function (switch__33155__auto__,c__33254__auto___35074,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33156__auto__ = null;
var cljs$core$async$mult_$_state_machine__33156__auto____0 = (function (){
var statearr_33932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33932[(0)] = cljs$core$async$mult_$_state_machine__33156__auto__);

(statearr_33932[(1)] = (1));

return statearr_33932;
});
var cljs$core$async$mult_$_state_machine__33156__auto____1 = (function (state_33851){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_33851);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e33933){if((e33933 instanceof Object)){
var ex__33159__auto__ = e33933;
var statearr_33934_35144 = state_33851;
(statearr_33934_35144[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_33851;
state_33851 = G__35145;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33156__auto__ = function(state_33851){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33156__auto____1.call(this,state_33851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33156__auto____0;
cljs$core$async$mult_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33156__auto____1;
return cljs$core$async$mult_$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35074,cs,m,dchan,dctr,done))
})();
var state__33256__auto__ = (function (){var statearr_33935 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_33935[(6)] = c__33254__auto___35074);

return statearr_33935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35074,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33937 = arguments.length;
switch (G__33937) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35150 = arguments.length;
var i__4731__auto___35151 = (0);
while(true){
if((i__4731__auto___35151 < len__4730__auto___35150)){
args__4736__auto__.push((arguments[i__4731__auto___35151]));

var G__35152 = (i__4731__auto___35151 + (1));
i__4731__auto___35151 = G__35152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33942){
var map__33943 = p__33942;
var map__33943__$1 = (((((!((map__33943 == null))))?(((((map__33943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33943):map__33943);
var opts = map__33943__$1;
var statearr_33945_35153 = state;
(statearr_33945_35153[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__33943,map__33943__$1,opts){
return (function (val){
var statearr_33946_35154 = state;
(statearr_33946_35154[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33943,map__33943__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33947_35155 = state;
(statearr_33947_35155[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33938){
var G__33939 = cljs.core.first(seq33938);
var seq33938__$1 = cljs.core.next(seq33938);
var G__33940 = cljs.core.first(seq33938__$1);
var seq33938__$2 = cljs.core.next(seq33938__$1);
var G__33941 = cljs.core.first(seq33938__$2);
var seq33938__$3 = cljs.core.next(seq33938__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33939,G__33940,G__33941,seq33938__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33948 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33949){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33949 = meta33949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33950,meta33949__$1){
var self__ = this;
var _33950__$1 = this;
return (new cljs.core.async.t_cljs$core$async33948(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33949__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33950){
var self__ = this;
var _33950__$1 = this;
return self__.meta33949;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33949","meta33949",740384439,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33948";

cljs.core.async.t_cljs$core$async33948.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33948");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33948.
 */
cljs.core.async.__GT_t_cljs$core$async33948 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33948(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33949){
return (new cljs.core.async.t_cljs$core$async33948(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33949));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33948(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33254__auto___35166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34052){
var state_val_34053 = (state_34052[(1)]);
if((state_val_34053 === (7))){
var inst_33967 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
var statearr_34054_35167 = state_34052__$1;
(statearr_34054_35167[(2)] = inst_33967);

(statearr_34054_35167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (20))){
var inst_33979 = (state_34052[(7)]);
var state_34052__$1 = state_34052;
var statearr_34055_35168 = state_34052__$1;
(statearr_34055_35168[(2)] = inst_33979);

(statearr_34055_35168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (27))){
var state_34052__$1 = state_34052;
var statearr_34056_35169 = state_34052__$1;
(statearr_34056_35169[(2)] = null);

(statearr_34056_35169[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (1))){
var inst_33954 = (state_34052[(8)]);
var inst_33954__$1 = calc_state();
var inst_33956 = (inst_33954__$1 == null);
var inst_33957 = cljs.core.not(inst_33956);
var state_34052__$1 = (function (){var statearr_34057 = state_34052;
(statearr_34057[(8)] = inst_33954__$1);

return statearr_34057;
})();
if(inst_33957){
var statearr_34058_35170 = state_34052__$1;
(statearr_34058_35170[(1)] = (2));

} else {
var statearr_34059_35171 = state_34052__$1;
(statearr_34059_35171[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (24))){
var inst_34012 = (state_34052[(9)]);
var inst_34003 = (state_34052[(10)]);
var inst_34026 = (state_34052[(11)]);
var inst_34026__$1 = (inst_34003.cljs$core$IFn$_invoke$arity$1 ? inst_34003.cljs$core$IFn$_invoke$arity$1(inst_34012) : inst_34003.call(null,inst_34012));
var state_34052__$1 = (function (){var statearr_34060 = state_34052;
(statearr_34060[(11)] = inst_34026__$1);

return statearr_34060;
})();
if(cljs.core.truth_(inst_34026__$1)){
var statearr_34061_35172 = state_34052__$1;
(statearr_34061_35172[(1)] = (29));

} else {
var statearr_34062_35173 = state_34052__$1;
(statearr_34062_35173[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (4))){
var inst_33970 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
if(cljs.core.truth_(inst_33970)){
var statearr_34063_35174 = state_34052__$1;
(statearr_34063_35174[(1)] = (8));

} else {
var statearr_34064_35175 = state_34052__$1;
(statearr_34064_35175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (15))){
var inst_33997 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
if(cljs.core.truth_(inst_33997)){
var statearr_34065_35176 = state_34052__$1;
(statearr_34065_35176[(1)] = (19));

} else {
var statearr_34066_35177 = state_34052__$1;
(statearr_34066_35177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (21))){
var inst_34002 = (state_34052[(12)]);
var inst_34002__$1 = (state_34052[(2)]);
var inst_34003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34002__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34002__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34002__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34052__$1 = (function (){var statearr_34067 = state_34052;
(statearr_34067[(13)] = inst_34004);

(statearr_34067[(10)] = inst_34003);

(statearr_34067[(12)] = inst_34002__$1);

return statearr_34067;
})();
return cljs.core.async.ioc_alts_BANG_(state_34052__$1,(22),inst_34005);
} else {
if((state_val_34053 === (31))){
var inst_34034 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
if(cljs.core.truth_(inst_34034)){
var statearr_34068_35180 = state_34052__$1;
(statearr_34068_35180[(1)] = (32));

} else {
var statearr_34069_35181 = state_34052__$1;
(statearr_34069_35181[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (32))){
var inst_34011 = (state_34052[(14)]);
var state_34052__$1 = state_34052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34052__$1,(35),out,inst_34011);
} else {
if((state_val_34053 === (33))){
var inst_34002 = (state_34052[(12)]);
var inst_33979 = inst_34002;
var state_34052__$1 = (function (){var statearr_34070 = state_34052;
(statearr_34070[(7)] = inst_33979);

return statearr_34070;
})();
var statearr_34071_35184 = state_34052__$1;
(statearr_34071_35184[(2)] = null);

(statearr_34071_35184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (13))){
var inst_33979 = (state_34052[(7)]);
var inst_33986 = inst_33979.cljs$lang$protocol_mask$partition0$;
var inst_33987 = (inst_33986 & (64));
var inst_33988 = inst_33979.cljs$core$ISeq$;
var inst_33989 = (cljs.core.PROTOCOL_SENTINEL === inst_33988);
var inst_33990 = ((inst_33987) || (inst_33989));
var state_34052__$1 = state_34052;
if(cljs.core.truth_(inst_33990)){
var statearr_34072_35188 = state_34052__$1;
(statearr_34072_35188[(1)] = (16));

} else {
var statearr_34073_35189 = state_34052__$1;
(statearr_34073_35189[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (22))){
var inst_34012 = (state_34052[(9)]);
var inst_34011 = (state_34052[(14)]);
var inst_34010 = (state_34052[(2)]);
var inst_34011__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34010,(0),null);
var inst_34012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34010,(1),null);
var inst_34013 = (inst_34011__$1 == null);
var inst_34014 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34012__$1,change);
var inst_34015 = ((inst_34013) || (inst_34014));
var state_34052__$1 = (function (){var statearr_34074 = state_34052;
(statearr_34074[(9)] = inst_34012__$1);

(statearr_34074[(14)] = inst_34011__$1);

return statearr_34074;
})();
if(cljs.core.truth_(inst_34015)){
var statearr_34075_35196 = state_34052__$1;
(statearr_34075_35196[(1)] = (23));

} else {
var statearr_34076_35197 = state_34052__$1;
(statearr_34076_35197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (36))){
var inst_34002 = (state_34052[(12)]);
var inst_33979 = inst_34002;
var state_34052__$1 = (function (){var statearr_34077 = state_34052;
(statearr_34077[(7)] = inst_33979);

return statearr_34077;
})();
var statearr_34078_35198 = state_34052__$1;
(statearr_34078_35198[(2)] = null);

(statearr_34078_35198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (29))){
var inst_34026 = (state_34052[(11)]);
var state_34052__$1 = state_34052;
var statearr_34079_35199 = state_34052__$1;
(statearr_34079_35199[(2)] = inst_34026);

(statearr_34079_35199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (6))){
var state_34052__$1 = state_34052;
var statearr_34080_35200 = state_34052__$1;
(statearr_34080_35200[(2)] = false);

(statearr_34080_35200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (28))){
var inst_34022 = (state_34052[(2)]);
var inst_34023 = calc_state();
var inst_33979 = inst_34023;
var state_34052__$1 = (function (){var statearr_34081 = state_34052;
(statearr_34081[(15)] = inst_34022);

(statearr_34081[(7)] = inst_33979);

return statearr_34081;
})();
var statearr_34082_35201 = state_34052__$1;
(statearr_34082_35201[(2)] = null);

(statearr_34082_35201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (25))){
var inst_34048 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
var statearr_34083_35206 = state_34052__$1;
(statearr_34083_35206[(2)] = inst_34048);

(statearr_34083_35206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (34))){
var inst_34046 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
var statearr_34084_35207 = state_34052__$1;
(statearr_34084_35207[(2)] = inst_34046);

(statearr_34084_35207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (17))){
var state_34052__$1 = state_34052;
var statearr_34085_35208 = state_34052__$1;
(statearr_34085_35208[(2)] = false);

(statearr_34085_35208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (3))){
var state_34052__$1 = state_34052;
var statearr_34086_35209 = state_34052__$1;
(statearr_34086_35209[(2)] = false);

(statearr_34086_35209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (12))){
var inst_34050 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34052__$1,inst_34050);
} else {
if((state_val_34053 === (2))){
var inst_33954 = (state_34052[(8)]);
var inst_33959 = inst_33954.cljs$lang$protocol_mask$partition0$;
var inst_33960 = (inst_33959 & (64));
var inst_33961 = inst_33954.cljs$core$ISeq$;
var inst_33962 = (cljs.core.PROTOCOL_SENTINEL === inst_33961);
var inst_33963 = ((inst_33960) || (inst_33962));
var state_34052__$1 = state_34052;
if(cljs.core.truth_(inst_33963)){
var statearr_34087_35210 = state_34052__$1;
(statearr_34087_35210[(1)] = (5));

} else {
var statearr_34088_35211 = state_34052__$1;
(statearr_34088_35211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (23))){
var inst_34011 = (state_34052[(14)]);
var inst_34017 = (inst_34011 == null);
var state_34052__$1 = state_34052;
if(cljs.core.truth_(inst_34017)){
var statearr_34089_35212 = state_34052__$1;
(statearr_34089_35212[(1)] = (26));

} else {
var statearr_34090_35213 = state_34052__$1;
(statearr_34090_35213[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (35))){
var inst_34037 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
if(cljs.core.truth_(inst_34037)){
var statearr_34091_35214 = state_34052__$1;
(statearr_34091_35214[(1)] = (36));

} else {
var statearr_34092_35215 = state_34052__$1;
(statearr_34092_35215[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (19))){
var inst_33979 = (state_34052[(7)]);
var inst_33999 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33979);
var state_34052__$1 = state_34052;
var statearr_34093_35216 = state_34052__$1;
(statearr_34093_35216[(2)] = inst_33999);

(statearr_34093_35216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (11))){
var inst_33979 = (state_34052[(7)]);
var inst_33983 = (inst_33979 == null);
var inst_33984 = cljs.core.not(inst_33983);
var state_34052__$1 = state_34052;
if(inst_33984){
var statearr_34094_35217 = state_34052__$1;
(statearr_34094_35217[(1)] = (13));

} else {
var statearr_34095_35218 = state_34052__$1;
(statearr_34095_35218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (9))){
var inst_33954 = (state_34052[(8)]);
var state_34052__$1 = state_34052;
var statearr_34096_35219 = state_34052__$1;
(statearr_34096_35219[(2)] = inst_33954);

(statearr_34096_35219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (5))){
var state_34052__$1 = state_34052;
var statearr_34097_35220 = state_34052__$1;
(statearr_34097_35220[(2)] = true);

(statearr_34097_35220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (14))){
var state_34052__$1 = state_34052;
var statearr_34098_35221 = state_34052__$1;
(statearr_34098_35221[(2)] = false);

(statearr_34098_35221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (26))){
var inst_34012 = (state_34052[(9)]);
var inst_34019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34012);
var state_34052__$1 = state_34052;
var statearr_34099_35222 = state_34052__$1;
(statearr_34099_35222[(2)] = inst_34019);

(statearr_34099_35222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (16))){
var state_34052__$1 = state_34052;
var statearr_34100_35223 = state_34052__$1;
(statearr_34100_35223[(2)] = true);

(statearr_34100_35223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (38))){
var inst_34042 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
var statearr_34101_35224 = state_34052__$1;
(statearr_34101_35224[(2)] = inst_34042);

(statearr_34101_35224[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (30))){
var inst_34012 = (state_34052[(9)]);
var inst_34004 = (state_34052[(13)]);
var inst_34003 = (state_34052[(10)]);
var inst_34029 = cljs.core.empty_QMARK_(inst_34003);
var inst_34030 = (inst_34004.cljs$core$IFn$_invoke$arity$1 ? inst_34004.cljs$core$IFn$_invoke$arity$1(inst_34012) : inst_34004.call(null,inst_34012));
var inst_34031 = cljs.core.not(inst_34030);
var inst_34032 = ((inst_34029) && (inst_34031));
var state_34052__$1 = state_34052;
var statearr_34102_35225 = state_34052__$1;
(statearr_34102_35225[(2)] = inst_34032);

(statearr_34102_35225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (10))){
var inst_33954 = (state_34052[(8)]);
var inst_33975 = (state_34052[(2)]);
var inst_33976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33975,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33975,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33975,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33979 = inst_33954;
var state_34052__$1 = (function (){var statearr_34103 = state_34052;
(statearr_34103[(16)] = inst_33976);

(statearr_34103[(17)] = inst_33977);

(statearr_34103[(18)] = inst_33978);

(statearr_34103[(7)] = inst_33979);

return statearr_34103;
})();
var statearr_34104_35226 = state_34052__$1;
(statearr_34104_35226[(2)] = null);

(statearr_34104_35226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (18))){
var inst_33994 = (state_34052[(2)]);
var state_34052__$1 = state_34052;
var statearr_34105_35233 = state_34052__$1;
(statearr_34105_35233[(2)] = inst_33994);

(statearr_34105_35233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (37))){
var state_34052__$1 = state_34052;
var statearr_34106_35234 = state_34052__$1;
(statearr_34106_35234[(2)] = null);

(statearr_34106_35234[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34053 === (8))){
var inst_33954 = (state_34052[(8)]);
var inst_33972 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33954);
var state_34052__$1 = state_34052;
var statearr_34107_35235 = state_34052__$1;
(statearr_34107_35235[(2)] = inst_33972);

(statearr_34107_35235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33155__auto__,c__33254__auto___35166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33156__auto__ = null;
var cljs$core$async$mix_$_state_machine__33156__auto____0 = (function (){
var statearr_34108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34108[(0)] = cljs$core$async$mix_$_state_machine__33156__auto__);

(statearr_34108[(1)] = (1));

return statearr_34108;
});
var cljs$core$async$mix_$_state_machine__33156__auto____1 = (function (state_34052){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34052);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34109){if((e34109 instanceof Object)){
var ex__33159__auto__ = e34109;
var statearr_34110_35236 = state_34052;
(statearr_34110_35236[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35237 = state_34052;
state_34052 = G__35237;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33156__auto__ = function(state_34052){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33156__auto____1.call(this,state_34052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33156__auto____0;
cljs$core$async$mix_$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33156__auto____1;
return cljs$core$async$mix_$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33256__auto__ = (function (){var statearr_34111 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34111[(6)] = c__33254__auto___35166);

return statearr_34111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34113 = arguments.length;
switch (G__34113) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34116 = arguments.length;
switch (G__34116) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34114_SHARP_){
if(cljs.core.truth_((p1__34114_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34114_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34114_SHARP_.call(null,topic)))){
return p1__34114_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34114_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34117 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34118){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34118 = meta34118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34119,meta34118__$1){
var self__ = this;
var _34119__$1 = this;
return (new cljs.core.async.t_cljs$core$async34117(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34118__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34119){
var self__ = this;
var _34119__$1 = this;
return self__.meta34118;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34118","meta34118",-1299242634,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34117";

cljs.core.async.t_cljs$core$async34117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34117");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34117.
 */
cljs.core.async.__GT_t_cljs$core$async34117 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34118){
return (new cljs.core.async.t_cljs$core$async34117(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34118));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34117(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33254__auto___35264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35264,mults,ensure_mult,p){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35264,mults,ensure_mult,p){
return (function (state_34191){
var state_val_34192 = (state_34191[(1)]);
if((state_val_34192 === (7))){
var inst_34187 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34193_35265 = state_34191__$1;
(statearr_34193_35265[(2)] = inst_34187);

(statearr_34193_35265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (20))){
var state_34191__$1 = state_34191;
var statearr_34194_35266 = state_34191__$1;
(statearr_34194_35266[(2)] = null);

(statearr_34194_35266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (1))){
var state_34191__$1 = state_34191;
var statearr_34195_35267 = state_34191__$1;
(statearr_34195_35267[(2)] = null);

(statearr_34195_35267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (24))){
var inst_34170 = (state_34191[(7)]);
var inst_34179 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34170);
var state_34191__$1 = state_34191;
var statearr_34196_35268 = state_34191__$1;
(statearr_34196_35268[(2)] = inst_34179);

(statearr_34196_35268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (4))){
var inst_34122 = (state_34191[(8)]);
var inst_34122__$1 = (state_34191[(2)]);
var inst_34123 = (inst_34122__$1 == null);
var state_34191__$1 = (function (){var statearr_34197 = state_34191;
(statearr_34197[(8)] = inst_34122__$1);

return statearr_34197;
})();
if(cljs.core.truth_(inst_34123)){
var statearr_34198_35269 = state_34191__$1;
(statearr_34198_35269[(1)] = (5));

} else {
var statearr_34199_35270 = state_34191__$1;
(statearr_34199_35270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (15))){
var inst_34164 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34200_35272 = state_34191__$1;
(statearr_34200_35272[(2)] = inst_34164);

(statearr_34200_35272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (21))){
var inst_34184 = (state_34191[(2)]);
var state_34191__$1 = (function (){var statearr_34201 = state_34191;
(statearr_34201[(9)] = inst_34184);

return statearr_34201;
})();
var statearr_34202_35274 = state_34191__$1;
(statearr_34202_35274[(2)] = null);

(statearr_34202_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (13))){
var inst_34146 = (state_34191[(10)]);
var inst_34148 = cljs.core.chunked_seq_QMARK_(inst_34146);
var state_34191__$1 = state_34191;
if(inst_34148){
var statearr_34203_35275 = state_34191__$1;
(statearr_34203_35275[(1)] = (16));

} else {
var statearr_34204_35276 = state_34191__$1;
(statearr_34204_35276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (22))){
var inst_34176 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
if(cljs.core.truth_(inst_34176)){
var statearr_34205_35277 = state_34191__$1;
(statearr_34205_35277[(1)] = (23));

} else {
var statearr_34206_35278 = state_34191__$1;
(statearr_34206_35278[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (6))){
var inst_34170 = (state_34191[(7)]);
var inst_34122 = (state_34191[(8)]);
var inst_34172 = (state_34191[(11)]);
var inst_34170__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34122) : topic_fn.call(null,inst_34122));
var inst_34171 = cljs.core.deref(mults);
var inst_34172__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34171,inst_34170__$1);
var state_34191__$1 = (function (){var statearr_34207 = state_34191;
(statearr_34207[(7)] = inst_34170__$1);

(statearr_34207[(11)] = inst_34172__$1);

return statearr_34207;
})();
if(cljs.core.truth_(inst_34172__$1)){
var statearr_34208_35279 = state_34191__$1;
(statearr_34208_35279[(1)] = (19));

} else {
var statearr_34209_35280 = state_34191__$1;
(statearr_34209_35280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (25))){
var inst_34181 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34210_35281 = state_34191__$1;
(statearr_34210_35281[(2)] = inst_34181);

(statearr_34210_35281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (17))){
var inst_34146 = (state_34191[(10)]);
var inst_34155 = cljs.core.first(inst_34146);
var inst_34156 = cljs.core.async.muxch_STAR_(inst_34155);
var inst_34157 = cljs.core.async.close_BANG_(inst_34156);
var inst_34158 = cljs.core.next(inst_34146);
var inst_34132 = inst_34158;
var inst_34133 = null;
var inst_34134 = (0);
var inst_34135 = (0);
var state_34191__$1 = (function (){var statearr_34211 = state_34191;
(statearr_34211[(12)] = inst_34132);

(statearr_34211[(13)] = inst_34135);

(statearr_34211[(14)] = inst_34157);

(statearr_34211[(15)] = inst_34134);

(statearr_34211[(16)] = inst_34133);

return statearr_34211;
})();
var statearr_34212_35282 = state_34191__$1;
(statearr_34212_35282[(2)] = null);

(statearr_34212_35282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (3))){
var inst_34189 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34191__$1,inst_34189);
} else {
if((state_val_34192 === (12))){
var inst_34166 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34213_35283 = state_34191__$1;
(statearr_34213_35283[(2)] = inst_34166);

(statearr_34213_35283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (2))){
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34191__$1,(4),ch);
} else {
if((state_val_34192 === (23))){
var state_34191__$1 = state_34191;
var statearr_34214_35285 = state_34191__$1;
(statearr_34214_35285[(2)] = null);

(statearr_34214_35285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (19))){
var inst_34122 = (state_34191[(8)]);
var inst_34172 = (state_34191[(11)]);
var inst_34174 = cljs.core.async.muxch_STAR_(inst_34172);
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34191__$1,(22),inst_34174,inst_34122);
} else {
if((state_val_34192 === (11))){
var inst_34132 = (state_34191[(12)]);
var inst_34146 = (state_34191[(10)]);
var inst_34146__$1 = cljs.core.seq(inst_34132);
var state_34191__$1 = (function (){var statearr_34215 = state_34191;
(statearr_34215[(10)] = inst_34146__$1);

return statearr_34215;
})();
if(inst_34146__$1){
var statearr_34216_35290 = state_34191__$1;
(statearr_34216_35290[(1)] = (13));

} else {
var statearr_34217_35291 = state_34191__$1;
(statearr_34217_35291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (9))){
var inst_34168 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34218_35292 = state_34191__$1;
(statearr_34218_35292[(2)] = inst_34168);

(statearr_34218_35292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (5))){
var inst_34129 = cljs.core.deref(mults);
var inst_34130 = cljs.core.vals(inst_34129);
var inst_34131 = cljs.core.seq(inst_34130);
var inst_34132 = inst_34131;
var inst_34133 = null;
var inst_34134 = (0);
var inst_34135 = (0);
var state_34191__$1 = (function (){var statearr_34219 = state_34191;
(statearr_34219[(12)] = inst_34132);

(statearr_34219[(13)] = inst_34135);

(statearr_34219[(15)] = inst_34134);

(statearr_34219[(16)] = inst_34133);

return statearr_34219;
})();
var statearr_34220_35300 = state_34191__$1;
(statearr_34220_35300[(2)] = null);

(statearr_34220_35300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (14))){
var state_34191__$1 = state_34191;
var statearr_34224_35301 = state_34191__$1;
(statearr_34224_35301[(2)] = null);

(statearr_34224_35301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (16))){
var inst_34146 = (state_34191[(10)]);
var inst_34150 = cljs.core.chunk_first(inst_34146);
var inst_34151 = cljs.core.chunk_rest(inst_34146);
var inst_34152 = cljs.core.count(inst_34150);
var inst_34132 = inst_34151;
var inst_34133 = inst_34150;
var inst_34134 = inst_34152;
var inst_34135 = (0);
var state_34191__$1 = (function (){var statearr_34225 = state_34191;
(statearr_34225[(12)] = inst_34132);

(statearr_34225[(13)] = inst_34135);

(statearr_34225[(15)] = inst_34134);

(statearr_34225[(16)] = inst_34133);

return statearr_34225;
})();
var statearr_34226_35308 = state_34191__$1;
(statearr_34226_35308[(2)] = null);

(statearr_34226_35308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (10))){
var inst_34132 = (state_34191[(12)]);
var inst_34135 = (state_34191[(13)]);
var inst_34134 = (state_34191[(15)]);
var inst_34133 = (state_34191[(16)]);
var inst_34140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34133,inst_34135);
var inst_34141 = cljs.core.async.muxch_STAR_(inst_34140);
var inst_34142 = cljs.core.async.close_BANG_(inst_34141);
var inst_34143 = (inst_34135 + (1));
var tmp34221 = inst_34132;
var tmp34222 = inst_34134;
var tmp34223 = inst_34133;
var inst_34132__$1 = tmp34221;
var inst_34133__$1 = tmp34223;
var inst_34134__$1 = tmp34222;
var inst_34135__$1 = inst_34143;
var state_34191__$1 = (function (){var statearr_34227 = state_34191;
(statearr_34227[(17)] = inst_34142);

(statearr_34227[(12)] = inst_34132__$1);

(statearr_34227[(13)] = inst_34135__$1);

(statearr_34227[(15)] = inst_34134__$1);

(statearr_34227[(16)] = inst_34133__$1);

return statearr_34227;
})();
var statearr_34228_35316 = state_34191__$1;
(statearr_34228_35316[(2)] = null);

(statearr_34228_35316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (18))){
var inst_34161 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34229_35317 = state_34191__$1;
(statearr_34229_35317[(2)] = inst_34161);

(statearr_34229_35317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (8))){
var inst_34135 = (state_34191[(13)]);
var inst_34134 = (state_34191[(15)]);
var inst_34137 = (inst_34135 < inst_34134);
var inst_34138 = inst_34137;
var state_34191__$1 = state_34191;
if(cljs.core.truth_(inst_34138)){
var statearr_34230_35318 = state_34191__$1;
(statearr_34230_35318[(1)] = (10));

} else {
var statearr_34231_35319 = state_34191__$1;
(statearr_34231_35319[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35264,mults,ensure_mult,p))
;
return ((function (switch__33155__auto__,c__33254__auto___35264,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34191){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34191);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34233){if((e34233 instanceof Object)){
var ex__33159__auto__ = e34233;
var statearr_34234_35322 = state_34191;
(statearr_34234_35322[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35324 = state_34191;
state_34191 = G__35324;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35264,mults,ensure_mult,p))
})();
var state__33256__auto__ = (function (){var statearr_34235 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34235[(6)] = c__33254__auto___35264);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35264,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34237 = arguments.length;
switch (G__34237) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34239 = arguments.length;
switch (G__34239) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34241 = arguments.length;
switch (G__34241) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33254__auto___35335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34280){
var state_val_34281 = (state_34280[(1)]);
if((state_val_34281 === (7))){
var state_34280__$1 = state_34280;
var statearr_34282_35338 = state_34280__$1;
(statearr_34282_35338[(2)] = null);

(statearr_34282_35338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (1))){
var state_34280__$1 = state_34280;
var statearr_34283_35339 = state_34280__$1;
(statearr_34283_35339[(2)] = null);

(statearr_34283_35339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (4))){
var inst_34244 = (state_34280[(7)]);
var inst_34246 = (inst_34244 < cnt);
var state_34280__$1 = state_34280;
if(cljs.core.truth_(inst_34246)){
var statearr_34284_35340 = state_34280__$1;
(statearr_34284_35340[(1)] = (6));

} else {
var statearr_34285_35341 = state_34280__$1;
(statearr_34285_35341[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (15))){
var inst_34276 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
var statearr_34286_35342 = state_34280__$1;
(statearr_34286_35342[(2)] = inst_34276);

(statearr_34286_35342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (13))){
var inst_34269 = cljs.core.async.close_BANG_(out);
var state_34280__$1 = state_34280;
var statearr_34287_35343 = state_34280__$1;
(statearr_34287_35343[(2)] = inst_34269);

(statearr_34287_35343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (6))){
var state_34280__$1 = state_34280;
var statearr_34288_35344 = state_34280__$1;
(statearr_34288_35344[(2)] = null);

(statearr_34288_35344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (3))){
var inst_34278 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34280__$1,inst_34278);
} else {
if((state_val_34281 === (12))){
var inst_34266 = (state_34280[(8)]);
var inst_34266__$1 = (state_34280[(2)]);
var inst_34267 = cljs.core.some(cljs.core.nil_QMARK_,inst_34266__$1);
var state_34280__$1 = (function (){var statearr_34289 = state_34280;
(statearr_34289[(8)] = inst_34266__$1);

return statearr_34289;
})();
if(cljs.core.truth_(inst_34267)){
var statearr_34290_35345 = state_34280__$1;
(statearr_34290_35345[(1)] = (13));

} else {
var statearr_34291_35346 = state_34280__$1;
(statearr_34291_35346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (2))){
var inst_34243 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34244 = (0);
var state_34280__$1 = (function (){var statearr_34292 = state_34280;
(statearr_34292[(7)] = inst_34244);

(statearr_34292[(9)] = inst_34243);

return statearr_34292;
})();
var statearr_34293_35347 = state_34280__$1;
(statearr_34293_35347[(2)] = null);

(statearr_34293_35347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (11))){
var inst_34244 = (state_34280[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34280,(10),Object,null,(9));
var inst_34253 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34244) : chs__$1.call(null,inst_34244));
var inst_34254 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34244) : done.call(null,inst_34244));
var inst_34255 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34253,inst_34254);
var state_34280__$1 = state_34280;
var statearr_34294_35348 = state_34280__$1;
(statearr_34294_35348[(2)] = inst_34255);


cljs.core.async.impl.ioc_helpers.process_exception(state_34280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (9))){
var inst_34244 = (state_34280[(7)]);
var inst_34257 = (state_34280[(2)]);
var inst_34258 = (inst_34244 + (1));
var inst_34244__$1 = inst_34258;
var state_34280__$1 = (function (){var statearr_34295 = state_34280;
(statearr_34295[(7)] = inst_34244__$1);

(statearr_34295[(10)] = inst_34257);

return statearr_34295;
})();
var statearr_34296_35353 = state_34280__$1;
(statearr_34296_35353[(2)] = null);

(statearr_34296_35353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (5))){
var inst_34264 = (state_34280[(2)]);
var state_34280__$1 = (function (){var statearr_34297 = state_34280;
(statearr_34297[(11)] = inst_34264);

return statearr_34297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34280__$1,(12),dchan);
} else {
if((state_val_34281 === (14))){
var inst_34266 = (state_34280[(8)]);
var inst_34271 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34266);
var state_34280__$1 = state_34280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34280__$1,(16),out,inst_34271);
} else {
if((state_val_34281 === (16))){
var inst_34273 = (state_34280[(2)]);
var state_34280__$1 = (function (){var statearr_34298 = state_34280;
(statearr_34298[(12)] = inst_34273);

return statearr_34298;
})();
var statearr_34299_35354 = state_34280__$1;
(statearr_34299_35354[(2)] = null);

(statearr_34299_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (10))){
var inst_34248 = (state_34280[(2)]);
var inst_34249 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34280__$1 = (function (){var statearr_34300 = state_34280;
(statearr_34300[(13)] = inst_34248);

return statearr_34300;
})();
var statearr_34301_35355 = state_34280__$1;
(statearr_34301_35355[(2)] = inst_34249);


cljs.core.async.impl.ioc_helpers.process_exception(state_34280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (8))){
var inst_34262 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
var statearr_34302_35356 = state_34280__$1;
(statearr_34302_35356[(2)] = inst_34262);

(statearr_34302_35356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35335,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33155__auto__,c__33254__auto___35335,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34303[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34303[(1)] = (1));

return statearr_34303;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34280){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34280);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34304){if((e34304 instanceof Object)){
var ex__33159__auto__ = e34304;
var statearr_34305_35357 = state_34280;
(statearr_34305_35357[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35358 = state_34280;
state_34280 = G__35358;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35335,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33256__auto__ = (function (){var statearr_34306 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34306[(6)] = c__33254__auto___35335);

return statearr_34306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35335,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34309 = arguments.length;
switch (G__34309) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33254__auto___35364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35364,out){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35364,out){
return (function (state_34341){
var state_val_34342 = (state_34341[(1)]);
if((state_val_34342 === (7))){
var inst_34321 = (state_34341[(7)]);
var inst_34320 = (state_34341[(8)]);
var inst_34320__$1 = (state_34341[(2)]);
var inst_34321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34320__$1,(0),null);
var inst_34322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34320__$1,(1),null);
var inst_34323 = (inst_34321__$1 == null);
var state_34341__$1 = (function (){var statearr_34343 = state_34341;
(statearr_34343[(7)] = inst_34321__$1);

(statearr_34343[(8)] = inst_34320__$1);

(statearr_34343[(9)] = inst_34322);

return statearr_34343;
})();
if(cljs.core.truth_(inst_34323)){
var statearr_34344_35366 = state_34341__$1;
(statearr_34344_35366[(1)] = (8));

} else {
var statearr_34345_35367 = state_34341__$1;
(statearr_34345_35367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34342 === (1))){
var inst_34310 = cljs.core.vec(chs);
var inst_34311 = inst_34310;
var state_34341__$1 = (function (){var statearr_34346 = state_34341;
(statearr_34346[(10)] = inst_34311);

return statearr_34346;
})();
var statearr_34347_35368 = state_34341__$1;
(statearr_34347_35368[(2)] = null);

(statearr_34347_35368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34342 === (4))){
var inst_34311 = (state_34341[(10)]);
var state_34341__$1 = state_34341;
return cljs.core.async.ioc_alts_BANG_(state_34341__$1,(7),inst_34311);
} else {
if((state_val_34342 === (6))){
var inst_34337 = (state_34341[(2)]);
var state_34341__$1 = state_34341;
var statearr_34348_35370 = state_34341__$1;
(statearr_34348_35370[(2)] = inst_34337);

(statearr_34348_35370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34342 === (3))){
var inst_34339 = (state_34341[(2)]);
var state_34341__$1 = state_34341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34341__$1,inst_34339);
} else {
if((state_val_34342 === (2))){
var inst_34311 = (state_34341[(10)]);
var inst_34313 = cljs.core.count(inst_34311);
var inst_34314 = (inst_34313 > (0));
var state_34341__$1 = state_34341;
if(cljs.core.truth_(inst_34314)){
var statearr_34350_35372 = state_34341__$1;
(statearr_34350_35372[(1)] = (4));

} else {
var statearr_34351_35376 = state_34341__$1;
(statearr_34351_35376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34342 === (11))){
var inst_34311 = (state_34341[(10)]);
var inst_34330 = (state_34341[(2)]);
var tmp34349 = inst_34311;
var inst_34311__$1 = tmp34349;
var state_34341__$1 = (function (){var statearr_34352 = state_34341;
(statearr_34352[(10)] = inst_34311__$1);

(statearr_34352[(11)] = inst_34330);

return statearr_34352;
})();
var statearr_34353_35377 = state_34341__$1;
(statearr_34353_35377[(2)] = null);

(statearr_34353_35377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34342 === (9))){
var inst_34321 = (state_34341[(7)]);
var state_34341__$1 = state_34341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34341__$1,(11),out,inst_34321);
} else {
if((state_val_34342 === (5))){
var inst_34335 = cljs.core.async.close_BANG_(out);
var state_34341__$1 = state_34341;
var statearr_34354_35378 = state_34341__$1;
(statearr_34354_35378[(2)] = inst_34335);

(statearr_34354_35378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34342 === (10))){
var inst_34333 = (state_34341[(2)]);
var state_34341__$1 = state_34341;
var statearr_34355_35379 = state_34341__$1;
(statearr_34355_35379[(2)] = inst_34333);

(statearr_34355_35379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34342 === (8))){
var inst_34321 = (state_34341[(7)]);
var inst_34320 = (state_34341[(8)]);
var inst_34311 = (state_34341[(10)]);
var inst_34322 = (state_34341[(9)]);
var inst_34325 = (function (){var cs = inst_34311;
var vec__34316 = inst_34320;
var v = inst_34321;
var c = inst_34322;
return ((function (cs,vec__34316,v,c,inst_34321,inst_34320,inst_34311,inst_34322,state_val_34342,c__33254__auto___35364,out){
return (function (p1__34307_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34307_SHARP_);
});
;})(cs,vec__34316,v,c,inst_34321,inst_34320,inst_34311,inst_34322,state_val_34342,c__33254__auto___35364,out))
})();
var inst_34326 = cljs.core.filterv(inst_34325,inst_34311);
var inst_34311__$1 = inst_34326;
var state_34341__$1 = (function (){var statearr_34356 = state_34341;
(statearr_34356[(10)] = inst_34311__$1);

return statearr_34356;
})();
var statearr_34357_35380 = state_34341__$1;
(statearr_34357_35380[(2)] = null);

(statearr_34357_35380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35364,out))
;
return ((function (switch__33155__auto__,c__33254__auto___35364,out){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34358[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34358[(1)] = (1));

return statearr_34358;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34341){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34341);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34359){if((e34359 instanceof Object)){
var ex__33159__auto__ = e34359;
var statearr_34360_35382 = state_34341;
(statearr_34360_35382[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35383 = state_34341;
state_34341 = G__35383;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35364,out))
})();
var state__33256__auto__ = (function (){var statearr_34361 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34361[(6)] = c__33254__auto___35364);

return statearr_34361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35364,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34363 = arguments.length;
switch (G__34363) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33254__auto___35392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35392,out){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35392,out){
return (function (state_34387){
var state_val_34388 = (state_34387[(1)]);
if((state_val_34388 === (7))){
var inst_34369 = (state_34387[(7)]);
var inst_34369__$1 = (state_34387[(2)]);
var inst_34370 = (inst_34369__$1 == null);
var inst_34371 = cljs.core.not(inst_34370);
var state_34387__$1 = (function (){var statearr_34389 = state_34387;
(statearr_34389[(7)] = inst_34369__$1);

return statearr_34389;
})();
if(inst_34371){
var statearr_34390_35393 = state_34387__$1;
(statearr_34390_35393[(1)] = (8));

} else {
var statearr_34391_35394 = state_34387__$1;
(statearr_34391_35394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (1))){
var inst_34364 = (0);
var state_34387__$1 = (function (){var statearr_34392 = state_34387;
(statearr_34392[(8)] = inst_34364);

return statearr_34392;
})();
var statearr_34393_35395 = state_34387__$1;
(statearr_34393_35395[(2)] = null);

(statearr_34393_35395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (4))){
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34387__$1,(7),ch);
} else {
if((state_val_34388 === (6))){
var inst_34382 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34394_35396 = state_34387__$1;
(statearr_34394_35396[(2)] = inst_34382);

(statearr_34394_35396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (3))){
var inst_34384 = (state_34387[(2)]);
var inst_34385 = cljs.core.async.close_BANG_(out);
var state_34387__$1 = (function (){var statearr_34395 = state_34387;
(statearr_34395[(9)] = inst_34384);

return statearr_34395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34387__$1,inst_34385);
} else {
if((state_val_34388 === (2))){
var inst_34364 = (state_34387[(8)]);
var inst_34366 = (inst_34364 < n);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34366)){
var statearr_34396_35397 = state_34387__$1;
(statearr_34396_35397[(1)] = (4));

} else {
var statearr_34397_35398 = state_34387__$1;
(statearr_34397_35398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (11))){
var inst_34364 = (state_34387[(8)]);
var inst_34374 = (state_34387[(2)]);
var inst_34375 = (inst_34364 + (1));
var inst_34364__$1 = inst_34375;
var state_34387__$1 = (function (){var statearr_34398 = state_34387;
(statearr_34398[(8)] = inst_34364__$1);

(statearr_34398[(10)] = inst_34374);

return statearr_34398;
})();
var statearr_34399_35399 = state_34387__$1;
(statearr_34399_35399[(2)] = null);

(statearr_34399_35399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (9))){
var state_34387__$1 = state_34387;
var statearr_34400_35401 = state_34387__$1;
(statearr_34400_35401[(2)] = null);

(statearr_34400_35401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (5))){
var state_34387__$1 = state_34387;
var statearr_34401_35402 = state_34387__$1;
(statearr_34401_35402[(2)] = null);

(statearr_34401_35402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (10))){
var inst_34379 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34402_35403 = state_34387__$1;
(statearr_34402_35403[(2)] = inst_34379);

(statearr_34402_35403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (8))){
var inst_34369 = (state_34387[(7)]);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34387__$1,(11),out,inst_34369);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35392,out))
;
return ((function (switch__33155__auto__,c__33254__auto___35392,out){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34403[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34403[(1)] = (1));

return statearr_34403;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34387){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34387);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34404){if((e34404 instanceof Object)){
var ex__33159__auto__ = e34404;
var statearr_34405_35406 = state_34387;
(statearr_34405_35406[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35408 = state_34387;
state_34387 = G__35408;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35392,out))
})();
var state__33256__auto__ = (function (){var statearr_34406 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34406[(6)] = c__33254__auto___35392);

return statearr_34406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35392,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34408 = (function (f,ch,meta34409){
this.f = f;
this.ch = ch;
this.meta34409 = meta34409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34410,meta34409__$1){
var self__ = this;
var _34410__$1 = this;
return (new cljs.core.async.t_cljs$core$async34408(self__.f,self__.ch,meta34409__$1));
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34410){
var self__ = this;
var _34410__$1 = this;
return self__.meta34409;
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34411 = (function (f,ch,meta34409,_,fn1,meta34412){
this.f = f;
this.ch = ch;
this.meta34409 = meta34409;
this._ = _;
this.fn1 = fn1;
this.meta34412 = meta34412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34413,meta34412__$1){
var self__ = this;
var _34413__$1 = this;
return (new cljs.core.async.t_cljs$core$async34411(self__.f,self__.ch,self__.meta34409,self__._,self__.fn1,meta34412__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34413){
var self__ = this;
var _34413__$1 = this;
return self__.meta34412;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34407_SHARP_){
var G__34414 = (((p1__34407_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34407_SHARP_) : self__.f.call(null,p1__34407_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34414) : f1.call(null,G__34414));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34409","meta34409",12506569,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34408","cljs.core.async/t_cljs$core$async34408",878710209,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34412","meta34412",-1901723496,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34411";

cljs.core.async.t_cljs$core$async34411.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34411");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34411.
 */
cljs.core.async.__GT_t_cljs$core$async34411 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34411(f__$1,ch__$1,meta34409__$1,___$2,fn1__$1,meta34412){
return (new cljs.core.async.t_cljs$core$async34411(f__$1,ch__$1,meta34409__$1,___$2,fn1__$1,meta34412));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34411(self__.f,self__.ch,self__.meta34409,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34415 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34415) : self__.f.call(null,G__34415));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34409","meta34409",12506569,null)], null);
});

cljs.core.async.t_cljs$core$async34408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34408";

cljs.core.async.t_cljs$core$async34408.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34408");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34408.
 */
cljs.core.async.__GT_t_cljs$core$async34408 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34408(f__$1,ch__$1,meta34409){
return (new cljs.core.async.t_cljs$core$async34408(f__$1,ch__$1,meta34409));
});

}

return (new cljs.core.async.t_cljs$core$async34408(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34416 = (function (f,ch,meta34417){
this.f = f;
this.ch = ch;
this.meta34417 = meta34417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34418,meta34417__$1){
var self__ = this;
var _34418__$1 = this;
return (new cljs.core.async.t_cljs$core$async34416(self__.f,self__.ch,meta34417__$1));
});

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34418){
var self__ = this;
var _34418__$1 = this;
return self__.meta34417;
});

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34417","meta34417",719617664,null)], null);
});

cljs.core.async.t_cljs$core$async34416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34416";

cljs.core.async.t_cljs$core$async34416.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34416");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34416.
 */
cljs.core.async.__GT_t_cljs$core$async34416 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34416(f__$1,ch__$1,meta34417){
return (new cljs.core.async.t_cljs$core$async34416(f__$1,ch__$1,meta34417));
});

}

return (new cljs.core.async.t_cljs$core$async34416(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34419 = (function (p,ch,meta34420){
this.p = p;
this.ch = ch;
this.meta34420 = meta34420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34421,meta34420__$1){
var self__ = this;
var _34421__$1 = this;
return (new cljs.core.async.t_cljs$core$async34419(self__.p,self__.ch,meta34420__$1));
});

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34421){
var self__ = this;
var _34421__$1 = this;
return self__.meta34420;
});

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34420","meta34420",474451971,null)], null);
});

cljs.core.async.t_cljs$core$async34419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34419";

cljs.core.async.t_cljs$core$async34419.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34419");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34419.
 */
cljs.core.async.__GT_t_cljs$core$async34419 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34419(p__$1,ch__$1,meta34420){
return (new cljs.core.async.t_cljs$core$async34419(p__$1,ch__$1,meta34420));
});

}

return (new cljs.core.async.t_cljs$core$async34419(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34423 = arguments.length;
switch (G__34423) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33254__auto___35420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35420,out){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35420,out){
return (function (state_34444){
var state_val_34445 = (state_34444[(1)]);
if((state_val_34445 === (7))){
var inst_34440 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34446_35421 = state_34444__$1;
(statearr_34446_35421[(2)] = inst_34440);

(statearr_34446_35421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (1))){
var state_34444__$1 = state_34444;
var statearr_34447_35422 = state_34444__$1;
(statearr_34447_35422[(2)] = null);

(statearr_34447_35422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (4))){
var inst_34426 = (state_34444[(7)]);
var inst_34426__$1 = (state_34444[(2)]);
var inst_34427 = (inst_34426__$1 == null);
var state_34444__$1 = (function (){var statearr_34448 = state_34444;
(statearr_34448[(7)] = inst_34426__$1);

return statearr_34448;
})();
if(cljs.core.truth_(inst_34427)){
var statearr_34449_35424 = state_34444__$1;
(statearr_34449_35424[(1)] = (5));

} else {
var statearr_34450_35425 = state_34444__$1;
(statearr_34450_35425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (6))){
var inst_34426 = (state_34444[(7)]);
var inst_34431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34426) : p.call(null,inst_34426));
var state_34444__$1 = state_34444;
if(cljs.core.truth_(inst_34431)){
var statearr_34451_35426 = state_34444__$1;
(statearr_34451_35426[(1)] = (8));

} else {
var statearr_34452_35427 = state_34444__$1;
(statearr_34452_35427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (3))){
var inst_34442 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34444__$1,inst_34442);
} else {
if((state_val_34445 === (2))){
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34444__$1,(4),ch);
} else {
if((state_val_34445 === (11))){
var inst_34434 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34453_35433 = state_34444__$1;
(statearr_34453_35433[(2)] = inst_34434);

(statearr_34453_35433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (9))){
var state_34444__$1 = state_34444;
var statearr_34454_35436 = state_34444__$1;
(statearr_34454_35436[(2)] = null);

(statearr_34454_35436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (5))){
var inst_34429 = cljs.core.async.close_BANG_(out);
var state_34444__$1 = state_34444;
var statearr_34455_35437 = state_34444__$1;
(statearr_34455_35437[(2)] = inst_34429);

(statearr_34455_35437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (10))){
var inst_34437 = (state_34444[(2)]);
var state_34444__$1 = (function (){var statearr_34456 = state_34444;
(statearr_34456[(8)] = inst_34437);

return statearr_34456;
})();
var statearr_34457_35438 = state_34444__$1;
(statearr_34457_35438[(2)] = null);

(statearr_34457_35438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (8))){
var inst_34426 = (state_34444[(7)]);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34444__$1,(11),out,inst_34426);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35420,out))
;
return ((function (switch__33155__auto__,c__33254__auto___35420,out){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34458 = [null,null,null,null,null,null,null,null,null];
(statearr_34458[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34458[(1)] = (1));

return statearr_34458;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34444){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34444);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34459){if((e34459 instanceof Object)){
var ex__33159__auto__ = e34459;
var statearr_34460_35439 = state_34444;
(statearr_34460_35439[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35440 = state_34444;
state_34444 = G__35440;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35420,out))
})();
var state__33256__auto__ = (function (){var statearr_34461 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34461[(6)] = c__33254__auto___35420);

return statearr_34461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35420,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34463 = arguments.length;
switch (G__34463) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto__){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto__){
return (function (state_34525){
var state_val_34526 = (state_34525[(1)]);
if((state_val_34526 === (7))){
var inst_34521 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
var statearr_34527_35444 = state_34525__$1;
(statearr_34527_35444[(2)] = inst_34521);

(statearr_34527_35444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (20))){
var inst_34491 = (state_34525[(7)]);
var inst_34502 = (state_34525[(2)]);
var inst_34503 = cljs.core.next(inst_34491);
var inst_34477 = inst_34503;
var inst_34478 = null;
var inst_34479 = (0);
var inst_34480 = (0);
var state_34525__$1 = (function (){var statearr_34528 = state_34525;
(statearr_34528[(8)] = inst_34478);

(statearr_34528[(9)] = inst_34477);

(statearr_34528[(10)] = inst_34479);

(statearr_34528[(11)] = inst_34502);

(statearr_34528[(12)] = inst_34480);

return statearr_34528;
})();
var statearr_34529_35445 = state_34525__$1;
(statearr_34529_35445[(2)] = null);

(statearr_34529_35445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (1))){
var state_34525__$1 = state_34525;
var statearr_34530_35446 = state_34525__$1;
(statearr_34530_35446[(2)] = null);

(statearr_34530_35446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (4))){
var inst_34466 = (state_34525[(13)]);
var inst_34466__$1 = (state_34525[(2)]);
var inst_34467 = (inst_34466__$1 == null);
var state_34525__$1 = (function (){var statearr_34531 = state_34525;
(statearr_34531[(13)] = inst_34466__$1);

return statearr_34531;
})();
if(cljs.core.truth_(inst_34467)){
var statearr_34532_35447 = state_34525__$1;
(statearr_34532_35447[(1)] = (5));

} else {
var statearr_34533_35448 = state_34525__$1;
(statearr_34533_35448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (15))){
var state_34525__$1 = state_34525;
var statearr_34537_35449 = state_34525__$1;
(statearr_34537_35449[(2)] = null);

(statearr_34537_35449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (21))){
var state_34525__$1 = state_34525;
var statearr_34538_35462 = state_34525__$1;
(statearr_34538_35462[(2)] = null);

(statearr_34538_35462[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (13))){
var inst_34478 = (state_34525[(8)]);
var inst_34477 = (state_34525[(9)]);
var inst_34479 = (state_34525[(10)]);
var inst_34480 = (state_34525[(12)]);
var inst_34487 = (state_34525[(2)]);
var inst_34488 = (inst_34480 + (1));
var tmp34534 = inst_34478;
var tmp34535 = inst_34477;
var tmp34536 = inst_34479;
var inst_34477__$1 = tmp34535;
var inst_34478__$1 = tmp34534;
var inst_34479__$1 = tmp34536;
var inst_34480__$1 = inst_34488;
var state_34525__$1 = (function (){var statearr_34539 = state_34525;
(statearr_34539[(8)] = inst_34478__$1);

(statearr_34539[(9)] = inst_34477__$1);

(statearr_34539[(10)] = inst_34479__$1);

(statearr_34539[(14)] = inst_34487);

(statearr_34539[(12)] = inst_34480__$1);

return statearr_34539;
})();
var statearr_34540_35463 = state_34525__$1;
(statearr_34540_35463[(2)] = null);

(statearr_34540_35463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (22))){
var state_34525__$1 = state_34525;
var statearr_34541_35464 = state_34525__$1;
(statearr_34541_35464[(2)] = null);

(statearr_34541_35464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (6))){
var inst_34466 = (state_34525[(13)]);
var inst_34475 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34466) : f.call(null,inst_34466));
var inst_34476 = cljs.core.seq(inst_34475);
var inst_34477 = inst_34476;
var inst_34478 = null;
var inst_34479 = (0);
var inst_34480 = (0);
var state_34525__$1 = (function (){var statearr_34542 = state_34525;
(statearr_34542[(8)] = inst_34478);

(statearr_34542[(9)] = inst_34477);

(statearr_34542[(10)] = inst_34479);

(statearr_34542[(12)] = inst_34480);

return statearr_34542;
})();
var statearr_34543_35465 = state_34525__$1;
(statearr_34543_35465[(2)] = null);

(statearr_34543_35465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (17))){
var inst_34491 = (state_34525[(7)]);
var inst_34495 = cljs.core.chunk_first(inst_34491);
var inst_34496 = cljs.core.chunk_rest(inst_34491);
var inst_34497 = cljs.core.count(inst_34495);
var inst_34477 = inst_34496;
var inst_34478 = inst_34495;
var inst_34479 = inst_34497;
var inst_34480 = (0);
var state_34525__$1 = (function (){var statearr_34544 = state_34525;
(statearr_34544[(8)] = inst_34478);

(statearr_34544[(9)] = inst_34477);

(statearr_34544[(10)] = inst_34479);

(statearr_34544[(12)] = inst_34480);

return statearr_34544;
})();
var statearr_34545_35466 = state_34525__$1;
(statearr_34545_35466[(2)] = null);

(statearr_34545_35466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (3))){
var inst_34523 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34525__$1,inst_34523);
} else {
if((state_val_34526 === (12))){
var inst_34511 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
var statearr_34546_35467 = state_34525__$1;
(statearr_34546_35467[(2)] = inst_34511);

(statearr_34546_35467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (2))){
var state_34525__$1 = state_34525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34525__$1,(4),in$);
} else {
if((state_val_34526 === (23))){
var inst_34519 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
var statearr_34547_35468 = state_34525__$1;
(statearr_34547_35468[(2)] = inst_34519);

(statearr_34547_35468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (19))){
var inst_34506 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
var statearr_34548_35469 = state_34525__$1;
(statearr_34548_35469[(2)] = inst_34506);

(statearr_34548_35469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (11))){
var inst_34477 = (state_34525[(9)]);
var inst_34491 = (state_34525[(7)]);
var inst_34491__$1 = cljs.core.seq(inst_34477);
var state_34525__$1 = (function (){var statearr_34549 = state_34525;
(statearr_34549[(7)] = inst_34491__$1);

return statearr_34549;
})();
if(inst_34491__$1){
var statearr_34550_35470 = state_34525__$1;
(statearr_34550_35470[(1)] = (14));

} else {
var statearr_34551_35471 = state_34525__$1;
(statearr_34551_35471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (9))){
var inst_34513 = (state_34525[(2)]);
var inst_34514 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34525__$1 = (function (){var statearr_34552 = state_34525;
(statearr_34552[(15)] = inst_34513);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34514)){
var statearr_34553_35472 = state_34525__$1;
(statearr_34553_35472[(1)] = (21));

} else {
var statearr_34554_35473 = state_34525__$1;
(statearr_34554_35473[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (5))){
var inst_34469 = cljs.core.async.close_BANG_(out);
var state_34525__$1 = state_34525;
var statearr_34555_35474 = state_34525__$1;
(statearr_34555_35474[(2)] = inst_34469);

(statearr_34555_35474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (14))){
var inst_34491 = (state_34525[(7)]);
var inst_34493 = cljs.core.chunked_seq_QMARK_(inst_34491);
var state_34525__$1 = state_34525;
if(inst_34493){
var statearr_34556_35475 = state_34525__$1;
(statearr_34556_35475[(1)] = (17));

} else {
var statearr_34557_35476 = state_34525__$1;
(statearr_34557_35476[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (16))){
var inst_34509 = (state_34525[(2)]);
var state_34525__$1 = state_34525;
var statearr_34558_35477 = state_34525__$1;
(statearr_34558_35477[(2)] = inst_34509);

(statearr_34558_35477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34526 === (10))){
var inst_34478 = (state_34525[(8)]);
var inst_34480 = (state_34525[(12)]);
var inst_34485 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34478,inst_34480);
var state_34525__$1 = state_34525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34525__$1,(13),out,inst_34485);
} else {
if((state_val_34526 === (18))){
var inst_34491 = (state_34525[(7)]);
var inst_34500 = cljs.core.first(inst_34491);
var state_34525__$1 = state_34525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34525__$1,(20),out,inst_34500);
} else {
if((state_val_34526 === (8))){
var inst_34479 = (state_34525[(10)]);
var inst_34480 = (state_34525[(12)]);
var inst_34482 = (inst_34480 < inst_34479);
var inst_34483 = inst_34482;
var state_34525__$1 = state_34525;
if(cljs.core.truth_(inst_34483)){
var statearr_34559_35478 = state_34525__$1;
(statearr_34559_35478[(1)] = (10));

} else {
var statearr_34560_35479 = state_34525__$1;
(statearr_34560_35479[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto__))
;
return ((function (switch__33155__auto__,c__33254__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33156__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33156__auto____0 = (function (){
var statearr_34561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34561[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33156__auto__);

(statearr_34561[(1)] = (1));

return statearr_34561;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33156__auto____1 = (function (state_34525){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34525);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34562){if((e34562 instanceof Object)){
var ex__33159__auto__ = e34562;
var statearr_34563_35482 = state_34525;
(statearr_34563_35482[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35483 = state_34525;
state_34525 = G__35483;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33156__auto__ = function(state_34525){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33156__auto____1.call(this,state_34525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33156__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33156__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto__))
})();
var state__33256__auto__ = (function (){var statearr_34564 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34564[(6)] = c__33254__auto__);

return statearr_34564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto__))
);

return c__33254__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34566 = arguments.length;
switch (G__34566) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34568 = arguments.length;
switch (G__34568) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34570 = arguments.length;
switch (G__34570) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33254__auto___35488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35488,out){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35488,out){
return (function (state_34594){
var state_val_34595 = (state_34594[(1)]);
if((state_val_34595 === (7))){
var inst_34589 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
var statearr_34596_35489 = state_34594__$1;
(statearr_34596_35489[(2)] = inst_34589);

(statearr_34596_35489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (1))){
var inst_34571 = null;
var state_34594__$1 = (function (){var statearr_34597 = state_34594;
(statearr_34597[(7)] = inst_34571);

return statearr_34597;
})();
var statearr_34598_35490 = state_34594__$1;
(statearr_34598_35490[(2)] = null);

(statearr_34598_35490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (4))){
var inst_34574 = (state_34594[(8)]);
var inst_34574__$1 = (state_34594[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var inst_34576 = cljs.core.not(inst_34575);
var state_34594__$1 = (function (){var statearr_34599 = state_34594;
(statearr_34599[(8)] = inst_34574__$1);

return statearr_34599;
})();
if(inst_34576){
var statearr_34600_35491 = state_34594__$1;
(statearr_34600_35491[(1)] = (5));

} else {
var statearr_34601_35492 = state_34594__$1;
(statearr_34601_35492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (6))){
var state_34594__$1 = state_34594;
var statearr_34602_35493 = state_34594__$1;
(statearr_34602_35493[(2)] = null);

(statearr_34602_35493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (3))){
var inst_34591 = (state_34594[(2)]);
var inst_34592 = cljs.core.async.close_BANG_(out);
var state_34594__$1 = (function (){var statearr_34603 = state_34594;
(statearr_34603[(9)] = inst_34591);

return statearr_34603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34594__$1,inst_34592);
} else {
if((state_val_34595 === (2))){
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34594__$1,(4),ch);
} else {
if((state_val_34595 === (11))){
var inst_34574 = (state_34594[(8)]);
var inst_34583 = (state_34594[(2)]);
var inst_34571 = inst_34574;
var state_34594__$1 = (function (){var statearr_34604 = state_34594;
(statearr_34604[(7)] = inst_34571);

(statearr_34604[(10)] = inst_34583);

return statearr_34604;
})();
var statearr_34605_35495 = state_34594__$1;
(statearr_34605_35495[(2)] = null);

(statearr_34605_35495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (9))){
var inst_34574 = (state_34594[(8)]);
var state_34594__$1 = state_34594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34594__$1,(11),out,inst_34574);
} else {
if((state_val_34595 === (5))){
var inst_34571 = (state_34594[(7)]);
var inst_34574 = (state_34594[(8)]);
var inst_34578 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34574,inst_34571);
var state_34594__$1 = state_34594;
if(inst_34578){
var statearr_34607_35497 = state_34594__$1;
(statearr_34607_35497[(1)] = (8));

} else {
var statearr_34608_35498 = state_34594__$1;
(statearr_34608_35498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (10))){
var inst_34586 = (state_34594[(2)]);
var state_34594__$1 = state_34594;
var statearr_34609_35512 = state_34594__$1;
(statearr_34609_35512[(2)] = inst_34586);

(statearr_34609_35512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34595 === (8))){
var inst_34571 = (state_34594[(7)]);
var tmp34606 = inst_34571;
var inst_34571__$1 = tmp34606;
var state_34594__$1 = (function (){var statearr_34610 = state_34594;
(statearr_34610[(7)] = inst_34571__$1);

return statearr_34610;
})();
var statearr_34611_35513 = state_34594__$1;
(statearr_34611_35513[(2)] = null);

(statearr_34611_35513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35488,out))
;
return ((function (switch__33155__auto__,c__33254__auto___35488,out){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34612[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34612[(1)] = (1));

return statearr_34612;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34594){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34594);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34613){if((e34613 instanceof Object)){
var ex__33159__auto__ = e34613;
var statearr_34614_35514 = state_34594;
(statearr_34614_35514[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35515 = state_34594;
state_34594 = G__35515;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35488,out))
})();
var state__33256__auto__ = (function (){var statearr_34615 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34615[(6)] = c__33254__auto___35488);

return statearr_34615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35488,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34617 = arguments.length;
switch (G__34617) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33254__auto___35524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35524,out){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35524,out){
return (function (state_34655){
var state_val_34656 = (state_34655[(1)]);
if((state_val_34656 === (7))){
var inst_34651 = (state_34655[(2)]);
var state_34655__$1 = state_34655;
var statearr_34657_35525 = state_34655__$1;
(statearr_34657_35525[(2)] = inst_34651);

(statearr_34657_35525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (1))){
var inst_34618 = (new Array(n));
var inst_34619 = inst_34618;
var inst_34620 = (0);
var state_34655__$1 = (function (){var statearr_34658 = state_34655;
(statearr_34658[(7)] = inst_34619);

(statearr_34658[(8)] = inst_34620);

return statearr_34658;
})();
var statearr_34659_35526 = state_34655__$1;
(statearr_34659_35526[(2)] = null);

(statearr_34659_35526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (4))){
var inst_34623 = (state_34655[(9)]);
var inst_34623__$1 = (state_34655[(2)]);
var inst_34624 = (inst_34623__$1 == null);
var inst_34625 = cljs.core.not(inst_34624);
var state_34655__$1 = (function (){var statearr_34660 = state_34655;
(statearr_34660[(9)] = inst_34623__$1);

return statearr_34660;
})();
if(inst_34625){
var statearr_34661_35527 = state_34655__$1;
(statearr_34661_35527[(1)] = (5));

} else {
var statearr_34662_35528 = state_34655__$1;
(statearr_34662_35528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (15))){
var inst_34645 = (state_34655[(2)]);
var state_34655__$1 = state_34655;
var statearr_34663_35544 = state_34655__$1;
(statearr_34663_35544[(2)] = inst_34645);

(statearr_34663_35544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (13))){
var state_34655__$1 = state_34655;
var statearr_34664_35545 = state_34655__$1;
(statearr_34664_35545[(2)] = null);

(statearr_34664_35545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (6))){
var inst_34620 = (state_34655[(8)]);
var inst_34641 = (inst_34620 > (0));
var state_34655__$1 = state_34655;
if(cljs.core.truth_(inst_34641)){
var statearr_34665_35546 = state_34655__$1;
(statearr_34665_35546[(1)] = (12));

} else {
var statearr_34666_35547 = state_34655__$1;
(statearr_34666_35547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (3))){
var inst_34653 = (state_34655[(2)]);
var state_34655__$1 = state_34655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34655__$1,inst_34653);
} else {
if((state_val_34656 === (12))){
var inst_34619 = (state_34655[(7)]);
var inst_34643 = cljs.core.vec(inst_34619);
var state_34655__$1 = state_34655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34655__$1,(15),out,inst_34643);
} else {
if((state_val_34656 === (2))){
var state_34655__$1 = state_34655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34655__$1,(4),ch);
} else {
if((state_val_34656 === (11))){
var inst_34635 = (state_34655[(2)]);
var inst_34636 = (new Array(n));
var inst_34619 = inst_34636;
var inst_34620 = (0);
var state_34655__$1 = (function (){var statearr_34667 = state_34655;
(statearr_34667[(10)] = inst_34635);

(statearr_34667[(7)] = inst_34619);

(statearr_34667[(8)] = inst_34620);

return statearr_34667;
})();
var statearr_34668_35548 = state_34655__$1;
(statearr_34668_35548[(2)] = null);

(statearr_34668_35548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (9))){
var inst_34619 = (state_34655[(7)]);
var inst_34633 = cljs.core.vec(inst_34619);
var state_34655__$1 = state_34655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34655__$1,(11),out,inst_34633);
} else {
if((state_val_34656 === (5))){
var inst_34619 = (state_34655[(7)]);
var inst_34628 = (state_34655[(11)]);
var inst_34620 = (state_34655[(8)]);
var inst_34623 = (state_34655[(9)]);
var inst_34627 = (inst_34619[inst_34620] = inst_34623);
var inst_34628__$1 = (inst_34620 + (1));
var inst_34629 = (inst_34628__$1 < n);
var state_34655__$1 = (function (){var statearr_34669 = state_34655;
(statearr_34669[(12)] = inst_34627);

(statearr_34669[(11)] = inst_34628__$1);

return statearr_34669;
})();
if(cljs.core.truth_(inst_34629)){
var statearr_34670_35549 = state_34655__$1;
(statearr_34670_35549[(1)] = (8));

} else {
var statearr_34671_35550 = state_34655__$1;
(statearr_34671_35550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (14))){
var inst_34648 = (state_34655[(2)]);
var inst_34649 = cljs.core.async.close_BANG_(out);
var state_34655__$1 = (function (){var statearr_34673 = state_34655;
(statearr_34673[(13)] = inst_34648);

return statearr_34673;
})();
var statearr_34674_35551 = state_34655__$1;
(statearr_34674_35551[(2)] = inst_34649);

(statearr_34674_35551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (10))){
var inst_34639 = (state_34655[(2)]);
var state_34655__$1 = state_34655;
var statearr_34675_35552 = state_34655__$1;
(statearr_34675_35552[(2)] = inst_34639);

(statearr_34675_35552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34656 === (8))){
var inst_34619 = (state_34655[(7)]);
var inst_34628 = (state_34655[(11)]);
var tmp34672 = inst_34619;
var inst_34619__$1 = tmp34672;
var inst_34620 = inst_34628;
var state_34655__$1 = (function (){var statearr_34676 = state_34655;
(statearr_34676[(7)] = inst_34619__$1);

(statearr_34676[(8)] = inst_34620);

return statearr_34676;
})();
var statearr_34677_35553 = state_34655__$1;
(statearr_34677_35553[(2)] = null);

(statearr_34677_35553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35524,out))
;
return ((function (switch__33155__auto__,c__33254__auto___35524,out){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34678[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34678[(1)] = (1));

return statearr_34678;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34655){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34655);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34679){if((e34679 instanceof Object)){
var ex__33159__auto__ = e34679;
var statearr_34680_35554 = state_34655;
(statearr_34680_35554[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35555 = state_34655;
state_34655 = G__35555;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35524,out))
})();
var state__33256__auto__ = (function (){var statearr_34681 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34681[(6)] = c__33254__auto___35524);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35524,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34683 = arguments.length;
switch (G__34683) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33254__auto___35569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___35569,out){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___35569,out){
return (function (state_34725){
var state_val_34726 = (state_34725[(1)]);
if((state_val_34726 === (7))){
var inst_34721 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
var statearr_34727_35570 = state_34725__$1;
(statearr_34727_35570[(2)] = inst_34721);

(statearr_34727_35570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (1))){
var inst_34684 = [];
var inst_34685 = inst_34684;
var inst_34686 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34725__$1 = (function (){var statearr_34728 = state_34725;
(statearr_34728[(7)] = inst_34685);

(statearr_34728[(8)] = inst_34686);

return statearr_34728;
})();
var statearr_34729_35577 = state_34725__$1;
(statearr_34729_35577[(2)] = null);

(statearr_34729_35577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (4))){
var inst_34689 = (state_34725[(9)]);
var inst_34689__$1 = (state_34725[(2)]);
var inst_34690 = (inst_34689__$1 == null);
var inst_34691 = cljs.core.not(inst_34690);
var state_34725__$1 = (function (){var statearr_34730 = state_34725;
(statearr_34730[(9)] = inst_34689__$1);

return statearr_34730;
})();
if(inst_34691){
var statearr_34731_35578 = state_34725__$1;
(statearr_34731_35578[(1)] = (5));

} else {
var statearr_34732_35579 = state_34725__$1;
(statearr_34732_35579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (15))){
var inst_34715 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
var statearr_34733_35580 = state_34725__$1;
(statearr_34733_35580[(2)] = inst_34715);

(statearr_34733_35580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (13))){
var state_34725__$1 = state_34725;
var statearr_34734_35581 = state_34725__$1;
(statearr_34734_35581[(2)] = null);

(statearr_34734_35581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (6))){
var inst_34685 = (state_34725[(7)]);
var inst_34710 = inst_34685.length;
var inst_34711 = (inst_34710 > (0));
var state_34725__$1 = state_34725;
if(cljs.core.truth_(inst_34711)){
var statearr_34735_35582 = state_34725__$1;
(statearr_34735_35582[(1)] = (12));

} else {
var statearr_34736_35583 = state_34725__$1;
(statearr_34736_35583[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (3))){
var inst_34723 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34725__$1,inst_34723);
} else {
if((state_val_34726 === (12))){
var inst_34685 = (state_34725[(7)]);
var inst_34713 = cljs.core.vec(inst_34685);
var state_34725__$1 = state_34725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34725__$1,(15),out,inst_34713);
} else {
if((state_val_34726 === (2))){
var state_34725__$1 = state_34725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34725__$1,(4),ch);
} else {
if((state_val_34726 === (11))){
var inst_34693 = (state_34725[(10)]);
var inst_34689 = (state_34725[(9)]);
var inst_34703 = (state_34725[(2)]);
var inst_34704 = [];
var inst_34705 = inst_34704.push(inst_34689);
var inst_34685 = inst_34704;
var inst_34686 = inst_34693;
var state_34725__$1 = (function (){var statearr_34737 = state_34725;
(statearr_34737[(11)] = inst_34703);

(statearr_34737[(7)] = inst_34685);

(statearr_34737[(12)] = inst_34705);

(statearr_34737[(8)] = inst_34686);

return statearr_34737;
})();
var statearr_34738_35584 = state_34725__$1;
(statearr_34738_35584[(2)] = null);

(statearr_34738_35584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (9))){
var inst_34685 = (state_34725[(7)]);
var inst_34701 = cljs.core.vec(inst_34685);
var state_34725__$1 = state_34725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34725__$1,(11),out,inst_34701);
} else {
if((state_val_34726 === (5))){
var inst_34693 = (state_34725[(10)]);
var inst_34689 = (state_34725[(9)]);
var inst_34686 = (state_34725[(8)]);
var inst_34693__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34689) : f.call(null,inst_34689));
var inst_34694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34693__$1,inst_34686);
var inst_34695 = cljs.core.keyword_identical_QMARK_(inst_34686,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34696 = ((inst_34694) || (inst_34695));
var state_34725__$1 = (function (){var statearr_34739 = state_34725;
(statearr_34739[(10)] = inst_34693__$1);

return statearr_34739;
})();
if(cljs.core.truth_(inst_34696)){
var statearr_34740_35585 = state_34725__$1;
(statearr_34740_35585[(1)] = (8));

} else {
var statearr_34741_35586 = state_34725__$1;
(statearr_34741_35586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (14))){
var inst_34718 = (state_34725[(2)]);
var inst_34719 = cljs.core.async.close_BANG_(out);
var state_34725__$1 = (function (){var statearr_34743 = state_34725;
(statearr_34743[(13)] = inst_34718);

return statearr_34743;
})();
var statearr_34744_35587 = state_34725__$1;
(statearr_34744_35587[(2)] = inst_34719);

(statearr_34744_35587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (10))){
var inst_34708 = (state_34725[(2)]);
var state_34725__$1 = state_34725;
var statearr_34745_35588 = state_34725__$1;
(statearr_34745_35588[(2)] = inst_34708);

(statearr_34745_35588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34726 === (8))){
var inst_34693 = (state_34725[(10)]);
var inst_34689 = (state_34725[(9)]);
var inst_34685 = (state_34725[(7)]);
var inst_34698 = inst_34685.push(inst_34689);
var tmp34742 = inst_34685;
var inst_34685__$1 = tmp34742;
var inst_34686 = inst_34693;
var state_34725__$1 = (function (){var statearr_34746 = state_34725;
(statearr_34746[(14)] = inst_34698);

(statearr_34746[(7)] = inst_34685__$1);

(statearr_34746[(8)] = inst_34686);

return statearr_34746;
})();
var statearr_34747_35589 = state_34725__$1;
(statearr_34747_35589[(2)] = null);

(statearr_34747_35589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33254__auto___35569,out))
;
return ((function (switch__33155__auto__,c__33254__auto___35569,out){
return (function() {
var cljs$core$async$state_machine__33156__auto__ = null;
var cljs$core$async$state_machine__33156__auto____0 = (function (){
var statearr_34748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34748[(0)] = cljs$core$async$state_machine__33156__auto__);

(statearr_34748[(1)] = (1));

return statearr_34748;
});
var cljs$core$async$state_machine__33156__auto____1 = (function (state_34725){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_34725);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e34749){if((e34749 instanceof Object)){
var ex__33159__auto__ = e34749;
var statearr_34750_35590 = state_34725;
(statearr_34750_35590[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35591 = state_34725;
state_34725 = G__35591;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
cljs$core$async$state_machine__33156__auto__ = function(state_34725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33156__auto____1.call(this,state_34725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33156__auto____0;
cljs$core$async$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33156__auto____1;
return cljs$core$async$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___35569,out))
})();
var state__33256__auto__ = (function (){var statearr_34751 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_34751[(6)] = c__33254__auto___35569);

return statearr_34751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___35569,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
