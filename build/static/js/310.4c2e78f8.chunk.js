(self.webpackChunkreact_web3auth=self.webpackChunkreact_web3auth||[]).push([[310,464,812],{308:function(e,t,n){"use strict";n.r(t),n.d(t,{PhantomAdapter:function(){return K}});var r=n(15861),o=n(15671),a=n(43144),c=n(97326),i=n(11752),s=n(60136),l=n(82963),u=n(61120),p=n(4942),h=n(64687),d=n.n(h),f=n(64613),v=n(688),m=(n(58489),n(30456),n(62895)),y=n.n(m),k="eip155",w="solana",N="other",g="solana",E=function(e,t){if(e===N)return null;var n=t?"number"===typeof t?t:parseInt(t,16):function(e){if(e===k)return 1;if(e===w)return 1;throw new Error("Chain namespace ".concat(e," is not supported"))}(e);return e===k?function(e){return 1===e?{chainNamespace:k,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/eth",displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===e?{chainNamespace:k,chainId:"0x3",rpcTarget:"https://rpc.ankr.com/eth_ropsten",displayName:"Ropsten Testnet",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===e?{chainNamespace:k,chainId:"0x4",rpcTarget:"https://rpc.ankr.com/eth_rinkeby",displayName:"Rinkeby Testnet",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===e?{chainNamespace:k,chainId:"0x5",rpcTarget:"https://rpc.ankr.com/eth_goerli",displayName:"Goerli Testnet",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===e?{chainNamespace:k,chainId:"0x89",rpcTarget:"https://rpc.ankr.com/polygon",displayName:"Polygon Mainnet",blockExplorer:"https://polygonscan.com",ticker:"MATIC",tickerName:"Polygon"}:80001===e?{chainNamespace:k,chainId:"0x13881",rpcTarget:"https://rpc.ankr.com/polygon_mumbai",displayName:"Polygon Mumbai Testnet",blockExplorer:"https://mumbai.polygonscan.com/",ticker:"MATIC",tickerName:"Polygon"}:56===e?{chainNamespace:k,chainId:"0x38",rpcTarget:"https://rpc.ankr.com/bsc",displayName:"Binance SmartChain Mainnet",blockExplorer:"https://bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:97===e?{chainNamespace:k,chainId:"0x61",rpcTarget:"https://rpc.ankr.com/bsc_testnet_chapel",displayName:"Binance SmartChain Testnet",blockExplorer:"https://testnet.bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:25===e?{chainNamespace:k,chainId:"0x19",rpcTarget:"https://rpc.cronos.org",displayName:"Cronos Mainnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:338===e?{chainNamespace:k,chainId:"0x152",rpcTarget:"https://rpc-t3.cronos.org/",displayName:"Cronos Testnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:8217===e?{chainNamespace:k,chainId:"0x2019",rpcTarget:"https://public-node-api.klaytnapi.com/v1/cypress",displayName:"Klaytn Mainnet",blockExplorer:"https://scope.klaytn.com",ticker:"KLAY",tickerName:"Klaytn"}:null}(n):e===w?function(e){return 1===e?{chainNamespace:w,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/solana",displayName:"Solana Mainnet",blockExplorer:"https://explorer.solana.com",ticker:"SOL",tickerName:"Solana"}:2===e?{chainNamespace:w,chainId:"0x2",rpcTarget:"https://api.testnet.solana.com",displayName:"Solana Testnet",blockExplorer:"https://explorer.solana.com?cluster=testnet",ticker:"SOL",tickerName:"Solana"}:3===e?{chainNamespace:w,chainId:"0x3",rpcTarget:"https://api.devnet.solana.com",displayName:"Solana Devnet",blockExplorer:"https://explorer.solana.com?cluster=devnet",ticker:"SOL",tickerName:"Solana"}:null}(n):null};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var O=function(e){(0,s.Z)(n,e);var t=b(n);function n(e,r){var a;return(0,o.Z)(this,n),a=t.call(this,r),(0,p.Z)((0,c.Z)(a),"code",void 0),(0,p.Z)((0,c.Z)(a),"message",void 0),a.code=e,a.message=r||"",Object.defineProperty((0,c.Z)(a),"name",{value:"Web3AuthError"}),a}return(0,a.Z)(n,[{key:"toJSON",value:function(){return{name:this.name,code:this.code,message:this.message}}},{key:"toString",value:function(){return JSON.stringify(this.toJSON())}}]),n}(v.s),C=function(e){(0,s.Z)(n,e);var t=b(n);function n(e,r){var a;return(0,o.Z)(this,n),a=t.call(this,e,r),Object.defineProperty((0,c.Z)(a),"name",{value:"WalletInitializationError"}),a}return(0,a.Z)(n,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new n(e,"".concat(n.messages[e],", ").concat(t))}},{key:"notFound",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5001,e)}},{key:"notInstalled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5002,e)}},{key:"notReady",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5003,e)}},{key:"windowBlocked",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5004,e)}},{key:"windowClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5005,e)}},{key:"incompatibleChainNameSpace",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5006,e)}},{key:"duplicateAdapterError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5007,e)}},{key:"invalidProviderConfigError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5008,e)}},{key:"providerNotReadyError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5009,e)}},{key:"rpcConnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5010,e)}},{key:"invalidParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5011,e)}},{key:"invalidNetwork",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5013,e)}}]),n}(O);(0,p.Z)(C,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});var x=function(e){(0,s.Z)(n,e);var t=b(n);function n(e,r){var a;return(0,o.Z)(this,n),a=t.call(this,e,r),Object.defineProperty((0,c.Z)(a),"name",{value:"WalletLoginError"}),a}return(0,a.Z)(n,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new n(e,"".concat(n.messages[e]).concat(t))}},{key:"connectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5111,e)}},{key:"disconnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5112,e)}},{key:"notConnectedError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5113,e)}},{key:"popupClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5114,e)}}]),n}(O);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,p.Z)(x,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});var P={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},_=Z({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom",SOLLET:"sollet",SOLLET_EXTENSION:"sollet-extension",SOLFLARE:"solflare",SLOPE:"slope"},P),R=Z({TORUS_EVM:"torus-evm",METAMASK:"metamask",COINBASE:"coinbase"},P),D=Z(Z({},R),_);function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j="external",L={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},M=S(S({},L),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"}),W=(f.Ue,y().getLogger("web3auth-logger"));var B=n(72584),Y=n(57945);function H(e,t,n){return new Promise((function(o,a){n>0?setTimeout((0,r.Z)(d().mark((function r(){var c;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:(c=r.sent)&&o(c),c||H(e,t,n-1).then((function(e){return o(e),e})).catch((function(e){return a(e)}));case 5:case"end":return r.stop()}}),r)}))),t):o(!1)}))}var F=function(){var e=(0,r.Z)(d().mark((function e(){var t,n,r=arguments;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:{interval:1e3,count:3},!("undefined"!==typeof window&&!(null===(t=window.solana)||void 0===t||!t.isPhantom))){e.next=4;break}return e.abrupt("return",window.solana);case 4:return e.next=6,H((function(){var e;return null===(e=window.solana)||void 0===e?void 0:e.isPhantom}),n.interval,n.count);case 6:if(!e.sent){e.next=9;break}return e.abrupt("return",window.solana);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var K=function(e){(0,s.Z)(n,e);var t=G(n);function n(e){var r;return(0,o.Z)(this,n),r=t.call(this,e),(0,p.Z)((0,c.Z)(r),"name",D.PHANTOM),(0,p.Z)((0,c.Z)(r),"adapterNamespace",g),(0,p.Z)((0,c.Z)(r),"currentChainNamespace",w),(0,p.Z)((0,c.Z)(r),"type",j),(0,p.Z)((0,c.Z)(r),"status",L.NOT_READY),(0,p.Z)((0,c.Z)(r),"_wallet",null),(0,p.Z)((0,c.Z)(r),"phantomProvider",null),(0,p.Z)((0,c.Z)(r),"rehydrated",!1),(0,p.Z)((0,c.Z)(r),"_onDisconnect",(function(){r._wallet&&(r._wallet.off("disconnect",r._onDisconnect),r.rehydrated=!1,r.status=r.status===L.CONNECTED?L.READY:L.NOT_READY,r.emit(M.DISCONNECTED))})),r.chainConfig=(null===e||void 0===e?void 0:e.chainConfig)||null,r.sessionTime=(null===e||void 0===e?void 0:e.sessionTime)||86400,r}return(0,a.Z)(n,[{key:"isWalletConnected",get:function(){var e;return!(null===(e=this._wallet)||void 0===e||!e.isConnected||this.status!==L.CONNECTED)}},{key:"provider",get:function(){var e;return(null===(e=this.phantomProvider)||void 0===e?void 0:e.provider)||null},set:function(e){throw new Error("Not implemented")}},{key:"setAdapterSettings",value:function(e){this.status!==L.READY&&(null!==e&&void 0!==e&&e.sessionTime&&(this.sessionTime=e.sessionTime),null!==e&&void 0!==e&&e.clientId&&(this.clientId=e.clientId))}},{key:"init",value:function(){var e=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,i.Z)((0,u.Z)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=E(w,"0x1")),e.next=4,F({interval:500,count:3});case 4:if(this._wallet=e.sent,this._wallet){e.next=7;break}throw C.notInstalled();case 7:if(this.phantomProvider=new Y.PhantomInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=L.READY,this.emit(M.READY,D.PHANTOM),e.prev=10,W.debug("initializing phantom adapter"),!t.autoConnect){e.next=16;break}return this.rehydrated=!0,e.next=16,this.connect();case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10),W.error("Failed to connect with cached phantom provider",e.t0),this.emit("ERRORED",e.t0);case 22:case"end":return e.stop()}}),e,this,[[10,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=(0,r.Z)(d().mark((function e(){var t,o=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,i.Z)((0,u.Z)(n.prototype),"checkConnectionRequirements",this).call(this),this.status=L.CONNECTING,this.emit(M.CONNECTING,{adapter:D.PHANTOM}),this._wallet){e.next=6;break}throw C.notInstalled();case 6:if(this._wallet.isConnected){e.next=23;break}return t=this._wallet._handleDisconnect,e.prev=8,e.next=11,new Promise((function(e,n){var a=function(){var t=(0,r.Z)(d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.connectWithProvider(o._wallet);case 2:e(o.provider);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(!o._wallet)return n(C.notInstalled());o._wallet.once("connect",a),o._wallet._handleDisconnect=function(){n(C.windowClosed());for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return t.apply(o._wallet,r)},o._wallet.connect().catch((function(e){n(e)}))}));case 11:e.next=18;break;case 13:if(e.prev=13,e.t0=e.catch(8),!(e.t0 instanceof O)){e.next=17;break}throw e.t0;case 17:throw x.connectionError(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 18:return e.prev=18,this._wallet._handleDisconnect=t,e.finish(18);case 21:e.next=25;break;case 23:return e.next=25,this.connectWithProvider(this._wallet);case 25:if(this._wallet.publicKey){e.next=27;break}throw x.connectionError();case 27:return this._wallet.on("disconnect",this._onDisconnect),e.abrupt("return",this.provider);case 31:throw e.prev=31,e.t1=e.catch(0),this.status=L.READY,this.rehydrated=!1,this.emit(M.ERRORED,e.t1),e.t1;case 37:case"end":return e.stop()}}),e,this,[[0,31],[8,13,18,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,r.Z)(d().mark((function e(){var t,r,o=arguments;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{cleanup:!1},e.next=3,(0,i.Z)((0,u.Z)(n.prototype),"disconnect",this).call(this);case 3:return e.prev=3,e.next=6,null===(r=this._wallet)||void 0===r?void 0:r.disconnect();case 6:t.cleanup&&(this.status=L.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(M.DISCONNECTED),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.emit(M.ERRORED,x.disconnectionError(null===e.t0||void 0===e.t0?void 0:e.t0.message));case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=(0,r.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isWalletConnected){e.next=2;break}throw x.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return e.abrupt("return",{});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connectWithProvider",value:function(){var e=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.phantomProvider){e.next=2;break}throw x.connectionError("No phantom provider");case 2:return e.next=4,this.phantomProvider.setupProvider(t);case 4:return this.status=L.CONNECTED,this.emit(M.CONNECTED,{adapter:D.PHANTOM,reconnected:this.rehydrated}),e.abrupt("return",this.provider);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(B.v)},7420:function(){},35139:function(){},78848:function(){}}]);
//# sourceMappingURL=310.4c2e78f8.chunk.js.map