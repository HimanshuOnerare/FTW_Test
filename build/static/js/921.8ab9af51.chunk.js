(self.webpackChunkreact_web3auth=self.webpackChunkreact_web3auth||[]).push([[921],{84656:function(r,n,e){"use strict";e.r(n),e.d(n,{getED25519Key:function(){return o}});var t=e(93433),a=e(83201),f=e.n(a),c=e(19778).Buffer,u=f().lowlevel;function o(r){var n;n="string"===typeof r?c.from(r,"hex"):r;var e=new Uint8Array(64),a=[u.gf(),u.gf(),u.gf(),u.gf()],f=new Uint8Array([].concat((0,t.Z)(new Uint8Array(n)),(0,t.Z)(new Uint8Array(32)))),o=new Uint8Array(32);u.crypto_hash(e,f,32),e[0]&=248,e[31]&=127,e[31]|=64,u.scalarbase(a,e),u.pack(o,a);for(var i=0;i<32;i+=1)f[i+32]=o[i];return{sk:c.from(f),pk:c.from(o)}}},78848:function(){}}]);
//# sourceMappingURL=921.8ab9af51.chunk.js.map