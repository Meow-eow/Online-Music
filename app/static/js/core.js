(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return!1
    };
    NEJ.P = function (By) {
        if (!By || !By.length)return null;
        var TC = window;
        for (var a = By.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; TC = TC[a[i]] = TC[a[i]] || {}, i++);
        return TC
    };
    NEJ.Q = function (dB, By) {
        dB = dB || NEJ.O;
        var cH = By.split(".");
        for (var i = 0, l = cH.length; i < l; i++) {
            dB = dB[cH[i]];
            if (!dB)break
        }
        return dB
    };
    NEJ.C = function () {
        var bjL = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bjP = function (bD, cE) {
            for (var x in cE)if (bD == cE[x])return x;
            return null
        };
        var bid = {dv: 0, cz: 1, cR: 2, dm: 3, cY: 4, ht: 5, lO: 6, ft: 7}, td = {dC: 0, cB: 1, cV: 2, dw: 3, df: 4, jn: 5, mX: 6, gS: 7};
        return function () {
            var gb = function () {
                this.bjV();
                return this.dv.apply(this, arguments)
            };
            gb.prototype.bjV = NEJ.F;
            gb.prototype.dv = NEJ.F;
            gb.bU = function (zC, bka) {
                if (bjL(zC))return;
                if (bka == null || !!bka)NEJ.X(this, zC, bjL);
                this.bFo = zC;
                this.dr = zC.prototype;
                var cQ = function () {
                };
                cQ.prototype = zC.prototype;
                this.prototype = new cQ;
                var BM = this.prototype;
                BM.constructor = this;
                var fy;
                for (var x in bid) {
                    fy = bjP(bid[x], td);
                    if (!fy || !this.dr[x])continue;
                    BM[x] = function (bX) {
                        return function () {
                            this[bX].apply(this, arguments)
                        }
                    }(fy)
                }
                var CM = {};
                for (var x in td) {
                    fy = bjP(td[x], bid);
                    if (!fy || !this.dr[fy])continue;
                    CM[fy] = zC;
                    BM[x] = function (bX) {
                        return function () {
                            var bp, cQ = this.Zg[bX], UZ = cQ.prototype[bX];
                            this.Zg[bX] = cQ.bFo || zC;
                            if (!!UZ)bp = UZ.apply(this, arguments);
                            this.Zg[bX] = zC;
                            return bp
                        }
                    }(fy)
                }
                BM.bjV = function () {
                    this.Zg = NEJ.X({}, CM)
                };
                BM.cgr = BM.dC;
                return BM
            };
            return gb
        }
    }();
    NEJ.X = function (gR, cX, eV) {
        if (!gR || !cX)return gR;
        eV = eV || NEJ.F;
        for (var x in cX) {
            if (cX.hasOwnProperty(x) && !eV(cX[x], x))gR[x] = cX[x]
        }
        return gR
    };
    NEJ.EX = function (gR, cX) {
        if (!gR || !cX)return gR;
        for (var x in gR) {
            if (gR.hasOwnProperty(x) && cX[x] != null)gR[x] = cX[x]
        }
        return gR
    };
    var CW = Function.prototype;
    CW.fj = function (nF, Zk) {
        var f = NEJ.F, Zk = Zk || f, nF = nF || f, fr = this;
        return function () {
            var be = {args: NEJ.R.slice.call(arguments, 0)};
            nF(be);
            if (!be.stopped) {
                be.value = fr.apply(this, be.args);
                Zk(be)
            }
            return be.value
        }
    };
    CW.bi = function () {
        var cn = arguments, gR = arguments[0], WV = this;
        return function () {
            var tS = NEJ.R.slice.call(cn, 1);
            NEJ.R.push.apply(tS, arguments);
            return WV.apply(gR || window, tS)
        }
    };
    CW.gY = function () {
        var cn = arguments, gR = NEJ.R.shift.call(cn), WV = this;
        return function () {
            NEJ.R.push.apply(arguments, cn);
            return WV.apply(gR || window, arguments)
        }
    };
    var CW = String.prototype;
    if (!CW.trim) {
        CW.trim = function () {
            var eh = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(eh, "")
            }
        }()
    }
    if (!window.MWF)window.MWF = NEJ;
    if (!window.mwf)window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bM = bd("nej.p"), UV = window.navigator.platform, sn = window.navigator.userAgent;
    var kN = {mac: UV, win: UV, linux: UV, ipad: sn, ipod: sn, iphone: UV, android: sn};
    bM.Hj = kN;
    for (var x in kN)kN[x] = (new RegExp(x, "i")).test(kN[x]);
    kN.ios = kN.ipad || kN.iphone || kN.ipod;
    kN.tablet = kN.ipad;
    kN.desktop = kN.mac || kN.win || kN.linux && !kN.android;
    var ir = {engine: "unknow", release: "unknow", browser: "unknow", version: "unknow", prefix: {css: "", pro: "", clz: ""}};
    bM.ek = ir;
    if (/msie\s+(.*?);/i.test(sn) || /trident\/.+rv:([\d\.]+)/i.test(sn)) {
        ir.engine = "trident";
        ir.browser = "ie";
        ir.version = RegExp.$1;
        ir.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var pM = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        ir.release = pM[document.documentMode] || pM[parseInt(ir.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sn)) {
        ir.engine = "webkit";
        ir.release = RegExp.$1 || "";
        ir.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sn)) {
        ir.engine = "gecko";
        ir.release = RegExp.$1 || "";
        ir.browser = "firefox";
        ir.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(sn))ir.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sn)) {
        ir.engine = "presto";
        ir.release = RegExp.$1 || "";
        ir.browser = "opera";
        ir.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(sn))ir.version = RegExp.$1 || ""
    }
    if (ir.browser == "unknow") {
        var pM = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = pM.length, bX; i < l; i++) {
            bX = pM[i] == "safari" ? "version" : pM[i];
            if ((new RegExp(bX + "/(.*?)(?=\\s|$)", "i")).test(sn)) {
                ir.browser = pM[i];
                ir.version = RegExp.$1.trim();
                break
            }
        }
    }
    bM.bke = {};
    var UT = ir.engine != "trident";
    bM.ns = {gecko: ir.engine != "gecko", webkit: ir.engine != "webkit", presto: ir.engine != "presto", trident0: UT || ir.release > "2.0", trident1: UT || ir.release < "6.0", trident2: UT || ir.release > "3.0", trident: UT || ir.release >= "6.0"}
})();
(function () {
    var jf = NEJ.P("nej.c"), ce = {};
    var Xu = function () {
        var eh = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (bZ) {
            bZ = bZ || "";
            if (eh.test(bZ))return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Id = function () {
        var bkg = function (bk, cE) {
            if (!bk || !bk.length)return;
            for (var i = 0, l = bk.length, lq; i < l; i++) {
                lq = bk[i];
                if (lq.indexOf("://") > 0)cE[Xu(lq)] = lq
            }
        };
        var cj = {portrait: {name: "portrait", dft: "portrait/"}, "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"}, "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"}, "audio.swf": {name: "audio", dft: "nej_player_audio.swf"}, "video.swf": {name: "video", dft: "nej_player_video.swf"}, "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}};
        return function (cX) {
            jf.Db("root", cX.root || "/res/");
            var bcW, gg = jf.bG("root");
            for (var x in cj) {
                bcW = cj[x];
                jf.Db(x, cX[bcW.name] || gg + bcW.dft)
            }
            var zl = cX.p_csrf;
            if (zl == !0) {
                zl = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            jf.Db("csrf", NEJ.EX({cookie: "", param: ""}, zl));
            ce.frames = {};
            bkg(cX.p_frame, ce.frames);
            ce.flashs = {};
            bkg(cX.p_flash, ce.flashs)
        }
    }();
    jf.Db = function (bN, bD) {
        ce[bN] = bD
    };
    jf.bG = function (bN) {
        return ce[bN]
    };
    jf.bFH = function (bZ) {
        var tW = Xu(bZ);
        return ce.frames[tW] || tW + "/res/nej_proxy_frame.html"
    };
    jf.bFS = function (bZ) {
        return ce.flashs[Xu(bZ)]
    };
    Id(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var bd = NEJ.P, bM = bd("nej.p"), jf = bd("nej.c"), cX = window.NEJ_CONF || NEJ.O;
    if (bM.ns.trident)return;
    jf.Db("storage.swf", cX.storage || jf.bG("root") + "nej_storage.swf");
    if (bM.ek.release < "4.0") {
        jf.Db("blank.png", cX.blank || jf.bG("root") + "nej_blank.gif")
    }
    var bk = cX.xdr, gK = /^(https?:\/\/.*?)(?=\/|$)/i, jY = /[\/?=&]/i;
    var bkq = function (bZ) {
        return(gK.test(bZ) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!bk && !!bk.length)for (var i = bk.length - 1, bZ, bN; i >= 0; i--) {
        bZ = bk[i];
        bN = bkq(bZ);
        if (!!bN)jf.Db(bN, bZ)
    }
    jf.cge = function (bZ) {
        var bN = bkq(bZ);
        if (!bN) {
            if (jY.test(bZ)) {
                bN = location.protocol + "//" + location.host
            } else if (bZ.indexOf("://") < 0) {
                bN = location.protocol + "//" + bZ
            } else {
                bN = bZ
            }
        }
        return jf.bG(bN) || bN + "/res/nej_xdomain.html"
    }
})();
(function () {
    var bd = NEJ.P, jf = bd("nej.c"), bM = bd("nej.g"), gJ = +(new Date);
    bM.cgd = 1e4 - gJ;
    bM.beh = 10001 - gJ;
    bM.cfZ = 10002 - gJ;
    bM.bku = 10003 - gJ;
    bM.bIQ = 10004 - gJ;
    bM.cfU = 10005 - gJ;
    bM.Xi = 10006 - gJ;
    bM.bJa = 10007 - gJ;
    bM.yY = "Content-Type";
    bM.cfO = "text/plain";
    bM.Ca = "multipart/form-data";
    bM.bJr = "application/x-www-form-urlencoded";
    bM.Zi = jf.bG("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var bd = NEJ.P, gm = NEJ.R, bM = bd("nej.p"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), cf = bd("nej.h");
    var lp = bM.ek.prefix, bky = bM.bke, bKo = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, bLf = {scale: "scale3d({x|1},{y|1},{z|1})", rotate: "rotate3d({x},{y},{z},{a})", translate: "translate3d({x},{y},{z})"}, JU = {transition: !0, transform: !0, animation: !0, keyframes: !0, box: !0, "box-pack": !0, "box-flex": !0, marquee: !0, "border-radius": !0, "user-select": !0};
    var Id = function () {
        var ri = cf.bkG();
        bky.css3d = !!ri && ri.m41 != null;
        var eh = /-([a-z])/g;
        for (var x in JU) {
            JU[bkK(x)] = JU[x]
        }
    };
    var bkK = function () {
        var eh = /-([a-z])/g;
        return function (bX) {
            bX = bX || "";
            return bX.replace(eh, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bkM = function (bX) {
        return(!bky.css3d ? bKo : bLf)[bX]
    };
    var bkQ = function () {
        var eh = /\s+/;
        return function (gb) {
            gb = (gb || "").trim();
            return!!gb ? gb.split(eh) : null
        }
    }();
    var Uu = function (bC, bu, gb) {
        bC = bb.bG(bC);
        if (!bC)return;
        bm.cv(bkQ(gb), function (eL) {
            bC.classList[bu](eL)
        })
    };
    cf.Dl = function (bk) {
        return gm.slice.call(bk, 0)
    };
    cf.Yl = function (bC) {
        return cf.Dl(bC.children)
    };
    cf.YE = function (bC, gb) {
        return cf.Dl(bC.getElementsByClassName(gb))
    };
    cf.YU = function (bC, Dm) {
        Uu(bC, "add", Dm)
    };
    cf.Zh = function (bC, Do) {
        Uu(bC, "remove", Do)
    };
    cf.MB = function (bC, Do, Dm) {
        Uu(bC, "remove", Do);
        Uu(bC, "add", Dm)
    };
    cf.ZI = function (bC, gb) {
        bC = bb.bG(bC);
        if (!bC)return!1;
        var bk = bC.classList;
        if (!bk || !bk.length)return!1;
        return bm.eg(bkQ(gb), function (eL) {
            return bk.contains(eL)
        }) >= 0
    };
    cf.baJ = function (bC, eL) {
    };
    cf.baL = function (bC) {
    };
    cf.baX = function (gw, ld) {
        gw.selectionEnd = ld.end || 0;
        gw.selectionStart = ld.start || 0;
        gw.focus()
    };
    cf.bcE = function (gw) {
        return{end: gw.selectionEnd, start: gw.selectionStart}
    };
    cf.bcM = function () {
        var Ao = function (eL, be) {
            var bC = bj.bY(be);
            if (!bC.value)bb.bH(bC, eL)
        };
        var Dp = function (eL, be) {
            bb.bJ(bj.bY(be), eL)
        };
        return function (bC, fC, eL) {
            if (fC == 1) {
                bj.bt(bC, "blur", Ao.bi(null, eL))
            }
            if (fC == 1 || fC == -1) {
                bj.bt(bC, "focus", Dp.bi(null, eL))
            }
        }
    }();
    cf.biB = function (bE) {
        return(new XMLSerializer).serializeToString(bE) || ""
    };
    cf.Vk = function (yP) {
        var gg = (new DOMParser).parseFromString(yP, "text/xml").documentElement;
        return gg.nodeName == "parsererror" ? null : gg
    };
    cf.VH = function (bC) {
    };
    cf.mP = function (bC) {
        return null
    };
    cf.We = function (bC) {
        return null
    };
    cf.Wt = function (fA) {
    };
    cf.WR = function () {
        var cn = cf.Dl(arguments);
        cn[0] = bb.bG(cn[0]);
        if (!cn[0])return null;
        cn[1] = (cn[1] || "").toLowerCase();
        if (!cn[1])return null;
        return cn
    };
    cf.yO = function () {
        var ug = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, iZ = {transitionend: "TransitionEnd", animationend: "AnimationEnd", animationstart: "AnimationStart", animationiteration: "AnimationIteration"};
        var bMm = function (bu) {
            return(lp.evt || lp.pro) + bu
        };
        return function () {
            var cn = cf.WR.apply(cf, arguments);
            if (!cn)return;
            var Uh = iZ[cn[1]], Uf = ug[cn[1]];
            if (!!Uh) {
                cn[4] = cn[1];
                cn[1] = bMm(Uh)
            } else if (!!Uf) {
                var bX = "on" + cn[1];
                if (!(bX in cn[0])) {
                    cn[4] = cn[1];
                    cn[1] = Uf
                }
            }
            return cn
        }
    }();
    cf.XV = function () {
        var cn = arguments;
        cn[0].addEventListener(cn[1], cn[2], !!cn[3])
    };
    cf.Ud = function () {
        var cn = arguments;
        cn[0].removeEventListener(cn[1], cn[2], !!cn[3])
    };
    cf.Yp = function (bC, bu, bf) {
        var be = document.createEvent("Event");
        be.initEvent(bu, !0, !0);
        NEJ.X(be, bf);
        bC.dispatchEvent(be)
    };
    cf.bkG = function () {
        var gK = /\((.*?)\)/, jY = /\s*,\s*/, bk = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Ub = function (ri) {
            var iS = {};
            if (gK.test(ri || "")) {
                bm.cv(RegExp.$1.split(jY), function (bD, bv) {
                    iS[bk[bv]] = bD || ""
                })
            }
            return iS
        };
        return function (ri) {
            if (!!window.CSSMatrix)return new CSSMatrix(ri);
            var bX = lp.clz + "CSSMatrix";
            if (!!window[bX])return new window[bX](ri || "");
            return Ub(ri)
        }
    }();
    cf.bkR = function () {
        var eh = /\{(.*?)\}/g;
        return function (bX, cE) {
            cE = cE || o;
            var rl = bkM(bX);
            return!rl ? "" : rl.replace(eh, function ($1, $2) {
                var cH = $2.split("|");
                return cE[cH[0]] || cH[1] || "0"
            })
        }
    }();
    cf.ZC = function (bC, bX, bD) {
        bC.style[cf.bkX(bX)] = bD
    };
    cf.bkX = function () {
        var eh = /^[a-z]/, ZP = lp.css;
        var bNn = function (bX) {
            return bX.replace(eh, function ($1) {
                return ZP + $1.toUpperCase()
            })
        };
        return function (bX) {
            bX = bkK(bX);
            var bOk = cf.bOo(bX, JU);
            return bOk ? bNn(bX) : bX
        }
    }();
    cf.bOo = function () {
        var eh = /^([a-z]+?)[A-Z]/;
        return function (bX, cE) {
            if (!cE[bX]) {
                if (eh.test(bX))bX = RegExp.$1
            }
            return!!cE[bX]
        }
    }();
    cf.bPn = function () {
        var eh = /\$<(.*?)>/gi, ZP = "-" + lp.css.toLowerCase() + "-";
        return function (kE) {
            return kE.replace(eh, function ($1, $2) {
                var gu = $2, cH = gu.split("|"), rl = bkM(cH[0]);
                if (!!rl) {
                    return cf.bkR(cH[0], bm.iO(cH[1]))
                }
                return!cf.bPo(gu, JU) ? gu : ZP + gu
            })
        }
    }();
    cf.bPo = function (bX, cE) {
        return!!cE[bX]
    };
    cf.bbD = function (ds, kE) {
        ds.textContent = kE
    };
    cf.bch = function (ds, kE) {
        var wI = ds.sheet, cF = wI.cssRules.length;
        wI.insertRule(kE, cF);
        return wI.cssRules[cF]
    };
    cf.ceN = function (bC, bf) {
    };
    cf.TL = function (TI) {
        return(TI || "").toLowerCase() != "transparent"
    };
    cf.bPt = function (bC) {
    };
    cf.bgt = function (bC, bX) {
        if (!!bC.getAttribute)return bC.getAttribute(bX);
        return""
    };
    cf.TH = function (fU) {
        bb.dW(fU)
    };
    Id()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bM = bd("nej.p"), cf = bd("nej.h");
    if (bM.ns.trident0)return;
    var gJ = +(new Date);
    ce = {};
    cf.baJ = cf.baJ.fj(function (be) {
        be.stopped = !0;
        var cn = be.args, bB = bb.lr(cn[0]), bN = "hover-" + bB;
        if (!bB || !!ce[bN])return;
        ce[bN] = !0;
        bj.bt(bB, "mouseenter", bb.bJ.bi(bb, bB, cn[1]));
        bj.bt(bB, "mouseleave", bb.bH.bi(bb, bB, cn[1]))
    });
    cf.baL = function () {
        var ceH = function () {
        };
        return cf.baL.fj(function (be) {
            be.stopped = !0;
            var bC = be.args[0], bB = "fixed-" + bb.lr(bC);
            if (!!ce[bB])return;
            var cj = {};
            ce[bB] = cj
        })
    }();
    cf.VH = cf.VH.fj(function (be) {
        be.stopped = !0;
        var bC = be.args[0], ds = bC.style, blo = bb.qr();
        ds.width = blo.scrollWidth + "px";
        ds.height = blo.scrollHeight + "px"
    });
    cf.mP = cf.mP.fj(function (be) {
        be.stopped = !0;
        var bC = be.args[0], kD = ce[bC.msk];
        if (!kD) {
            bC.msk = gJ++;
            kD = bb.ef("iframe");
            kD.style.position = "absolute";
            ce[bC.msk] = kD
        }
        be.value = kD;
        var ds = kD.style;
        ds.top = (parseInt(bb.ey(bC, "top")) || 0) + "px";
        ds.left = (parseInt(bb.ey(bC, "left")) || 0) + "px";
        ds.width = bC.offsetWidth + "px";
        ds.height = bC.offsetHeight + "px";
        bC.insertAdjacentElement("beforeBegin", kD)
    });
    cf.We = cf.We.fj(function (be) {
        be.stopped = !0;
        var kD = ce[be.args[0].msk];
        if (!!kD)bb.mB(kD)
    })
})();
(function () {
    var bd = NEJ.P, bM = bd("nej.p"), bb = bd("nej.e"), cf = bd("nej.h");
    if (bM.ns.trident1)return;
    cf.yO = function () {
        var ug = {touchcancel: "MSPointerCancel", touchstart: "MSPointerDown", touchmove: "MSPointerMove", touchend: "MSPointerUp"};
        return cf.yO.fj(function (be) {
            var cn = cf.WR.apply(cf, be.args);
            if (!cn) {
                be.stopped = !0;
                return
            }
            var bu = ug[cn[1]];
            if (!!bu && ("on" + bu).toLowerCase()in cn[0]) {
                cn[4] = cn[1];
                cn[1] = bu;
                be.stopped = !0;
                be.value = cn
            }
        })
    }();
    cf.TL = function (TI) {
        return!0
    };
    cf.TH = cf.TH.fj(function (be) {
        be.stopped = !0;
        var fU = be.args[0];
        bb.ch(fU, "display", "none");
        try {
            fU.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bM = bd("nej.p"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), cf = bd("nej.h"), Wy = {};
    if (bM.ns.trident)return;
    cf.Dl = cf.Dl.fj(function (be) {
        be.stopped = !0;
        var bk = be.args[0];
        if (!bk) {
            be.value = null;
            return
        }
        var bv = 0, bp = [];
        while (!!bk[bv]) {
            bp.push(bk[bv++])
        }
        be.value = bp
    });
    cf.Yl = cf.Yl.fj(function (be) {
        be.stopped = !0;
        var cH = [];
        bm.cv(be.args[0].childNodes, function (bh) {
            if (bh.nodeType == 1)cH.push(bh)
        });
        be.value = cH
    });
    cf.YE = cf.YE.fj(function (be) {
        var bC = be.args[0];
        if (!!bC.getElementsByClassName)return;
        be.stopped = !0;
        var bp = [], WD = new RegExp("(\\s|^)(?:" + be.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        bm.cv(bC.getElementsByTagName("*"), function (bh) {
            if (WD.test(bh.className))bp.push(bh)
        });
        be.value = bp
    });
    cf.baX = cf.baX.fj(function (be) {
        var gw = be.args[0], ld = be.args[1];
        if (gw.selectionStart == null) {
            be.stopped = !0;
            var dQ = gw.createTextRange();
            dQ.collapse(!0);
            dQ.moveStart("character", ld.start);
            dQ.moveEnd("character", ld.end - ld.start);
            dQ.select();
            gw.focus()
        }
    });
    cf.bcE = cf.bcE.fj(function (be) {
        var gw = be.args[0];
        gw.focus();
        if (gw.selectionStart == null) {
            be.stopped = !0;
            var blp = document.selection.createRange();
            var blq = gw.createTextRange();
            blq.moveToBookmark(blp.getBookmark());
            var Xv = gw.createTextRange();
            Xv.collapse(!0);
            Xv.setEndPoint("EndToStart", blq);
            var mO = Xv.text.length;
            be.value = {start: mO, end: mO + blp.text.length}
        }
    });
    cf.biB = cf.biB.fj(function (be) {
        if (!!window.XMLSerializer)return;
        be.stopped = !0;
        var bC = be.args[0];
        be.value = bC.xml != null ? bC.xml : bC.outHTML
    });
    cf.Vk = function () {
        var IJ = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bRh = function () {
            try {
                for (var i = 0, l = IJ.length; i < l; i++)return new ActiveXObject(IJ[i])
            } catch (ex) {
                return null
            }
        };
        return cf.Vk.fj(function (be) {
            if (!!window.DOMParser)return;
            be.stopped = !0;
            var Tx = bRh();
            if (!!Tx && Tx.loadXML(be.args[0]) && !Tx.parseError.errorCode)be.value = Tx.documentElement
        })
    }();
    cf.yO = function () {
        var iZ = {input: "propertychange", load: "readystatechange"};
        for (var x in iZ)Wy[iZ[x]] = !0;
        var bRn = function (bC, bu) {
            if ("on" + bu in bC)return null;
            return iZ[bu] || ""
        };
        var bRo = function (bu, fr) {
            var gP = fr;
            switch (bu) {
                case"readystatechange":
                    gP = function (be) {
                        var bC = bj.bY(be) || this;
                        if (bC.readyState == "loaded" || bC.readyState == "complete") {
                            be.target = bC;
                            fr.call(bC, be)
                        }
                    };
                    break;
                case"propertychange":
                    gP = function (be) {
                        var bC = bj.bY(be) || this;
                        if ("value"in bC && be.propertyName == "value") {
                            be.target = bC;
                            fr.call(bC, be)
                        }
                    };
                    break
            }
            return gP
        };
        return cf.yO.fj(function (be) {
            var cn = cf.WR.apply(cf, be.args);
            if (!cn) {
                be.stopped = !0;
                return
            }
            var bu = bRn(cn[0], cn[1]);
            if (!!bu) {
                be.stopped = !0;
                cn[4] = cn[1];
                cn[1] = bu;
                if (!!cn[2]) {
                    cn[5] = cn[2];
                    cn[2] = bRo(cn[1], cn[2])
                }
                be.value = cn
            }
        }, function (be) {
            var cn = be.value;
            if (!cn[0] || !bm.hC(cn[2]))return;
            if (!bm.hC(cn[5]))cn[5] = cn[2];
            cn[2] = cn[2].bi(cn[0])
        })
    }();
    cf.XV = cf.XV.fj(function (be) {
        var cn = be.args;
        if (!!Wy[cn[1]] || !document.addEventListener) {
            be.stopped = !0;
            cn[0].attachEvent("on" + cn[1], cn[2])
        }
    });
    cf.Ud = cf.Ud.fj(function (be) {
        var cn = be.args;
        if (!!Wy[cn[1]] || !document.removeEventListener) {
            be.stopped = !0;
            cn[0].detachEvent("on" + cn[1], cn[2])
        }
    });
    cf.Yp = cf.Yp.fj(function (be) {
        if (!document.createEvent) {
            be.stopped = !0;
            var cn = be.args, bls = document.createEventObject();
            NEJ.X(bls, cn[2]);
            try {
                cn[0].fireEvent("on" + cn[1], bls)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    cf.ZC = cf.ZC.fj(function (be) {
        var cn = be.args, bX = cn[1].toLowerCase();
        if (bX == "opacity" && !(bX in document.body.style)) {
            cn[1] = "filter";
            cn[2] = "alpha(opacity=" + cn[2] * 100 + ")"
        }
    });
    cf.bbD = function () {
        var hM = 30;
        return cf.bbD.fj(function (be) {
            var bC = be.args[0];
            if (!bC.styleSheet)return;
            be.stopped = !0;
            var kE = be.args[1];
            var bk = document.styleSheets;
            if (bk.length > hM) {
                bC = bk[hM];
                kE = bC.cssText + kE
            } else {
                bC = bC.styleSheet
            }
            bC.cssText = kE
        })
    }();
    cf.bch = cf.bch.fj(function (be) {
        var cn = be.args, wI = cn[0].sheet;
        if (!!wI)return;
        be.stopped = !0;
        var wI = cn[0].styleSheet, cF = wI.rules.length, cH = cn[1].split(/[\{\}]/);
        wI.addRule(cH[0], cH[1], cF);
        be.value = wI.rules[cF]
    });
    cf.bcM = function () {
        var Ao = function (eL, be) {
            bb.bH(bj.bY(be), eL)
        };
        return cf.bcM.fj(function (be) {
            if (bM.ek.release >= "4.0")return;
            var cn = be.args;
            if (cn[1] != 1) {
                bj.bt(cn[0], "blur", Ao.bi(null, cn[2]));
                cn[1] = -1
            }
        })
    }();
    cf.TL = function (TI) {
        return!0
    };
    cf.bgt = cf.bgt.fj(function (be) {
        var cn = be.args, bh = (cn[0].attributes || cg)[cn[1]];
        if (!!bh) {
            be.stopped = !0;
            be.value = bh.value
        }
    }, function (be) {
        var cn = be.args;
        if (cn[1] == "maxlength" && be.value == 2147483647)be.value = ""
    });
    if (bM.ek.release < 5) {
        cf.Wt = function () {
            var hd, fU, jU = [], Zo = "cb-" + +(new Date), cm = '<script>parent.nej.h["' + Zo + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var blt = function () {
                hd = window.clearTimeout(hd);
                if (!jU.length)return;
                var fA = jU.shift();
                try {
                    var uq = fU.contentWindow.document;
                    uq.open();
                    uq.write("<head><title>");
                    uq.write(document.title);
                    uq.write("</title>");
                    uq.write(cm.replace("#<HASH>", encodeURIComponent(fA)));
                    uq.write("</head><body></body>");
                    if (location.hostname != document.domain)uq.domain = document.domain;
                    uq.close();
                    cf[Zo] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jU.unshift(fA)
                }
                hd = window.setTimeout(blt, 50)
            };
            return cf.Wt.fj(function (be) {
                be.stopped = !0;
                var fA = be.args[0];
                if (!!cf[Zo] || !fU && !fA)return;
                jU.push(fA);
                if (!fU)fU = bb.Tp();
                blt()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var bd = NEJ.P, bj = bd("nej.v"), cf = bd("nej.h"), bM = bd("nej.p"), Tn = bM.bke;
    if (bM.ns.gecko)return;
    var Id = function () {
        Tn.css3d = Tn.css3d || "MozPerspective"in document.body.style;
        if (!document.body.insertAdjacentElement)HTMLElement.prototype.insertAdjacentElement = function (iD, bC) {
            if (!iD || !bC)return;
            switch (iD) {
                case"beforeEnd":
                    this.appendChild(bC);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(bC, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(bC) : this.insertBefore(bC, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(bC) : this.parentNode.insertBefore(bC, this.nextSibling);
                    return
            }
        };
        if (!("innerText"in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (cm) {
                this.textContent = cm
            })
        }
    };
    cf.yO = function () {
        var gK = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return cf.yO.fj(function (be) {
            var cn = be.args;
            if (gK.test(cn[1] || "")) {
                be.stopped = !0;
                be.value = cn
            }
        })
    }();
    cf.bPt = function () {
        var bRx = function (be) {
            bj.cu(be);
            bj.bY(be).control.click()
        };
        return function (bC) {
            bj.bt(bC, "click", bRx)
        }
    }();
    Id()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), cf = bd("nej.h");
    var Tl = function () {
        var pM = !!document.body.classList;
        return function () {
            return pM
        }
    }();
    var blv = function () {
        var eh = /\s+/g;
        return function (gb) {
            gb = (gb || "").trim();
            return!gb ? null : new RegExp("(\\s|^)(?:" + gb.replace(eh, "|") + ")(?=\\s|$)", "g")
        }
    }();
    cf.MB = cf.MB.fj(function (be) {
        if (Tl())return;
        be.stopped = !0;
        var cn = be.args, bC = bb.bG(cn[0]);
        if (!bC || !cn[1] && !cn[2])return;
        var gb = bC.className || "";
        var Dm = " " + (cn[2] || ""), Do = blv((cn[1] || "") + Dm);
        !!Do && (gb = gb.replace(Do, "$1"));
        bC.className = (gb + Dm).replace(/\s+/g, " ").trim()
    });
    cf.YU = cf.YU.fj(function (be) {
        if (Tl())return;
        be.stopped = !0;
        var cn = be.args;
        cf.MB(cn[0], "", cn[1])
    });
    cf.Zh = cf.Zh.fj(function (be) {
        if (Tl())return;
        be.stopped = !0;
        var cn = be.args;
        cf.MB(cn[0], cn[1], "")
    });
    cf.ZI = cf.ZI.fj(function (be) {
        if (Tl())return;
        be.stopped = !0;
        var cn = be.args, bC = bb.bG(cn[0]);
        if (!bC) {
            be.value = !1;
            return
        }
        var eh = blv(cn[1]);
        be.value = !eh ? !1 : eh.test(bC.className || "")
    })
})();
(function () {
    var bd = NEJ.P, bM = bd("nej.p"), cf = bd("nej.h");
    if (bM.ns.webkit)return;
    cf.TL = function (TI) {
        return!0
    }
})();
(function () {
    var bd = NEJ.P, cf = bd("nej.h"), bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), dY = bd("nej.x"), ce = {};
    var blw = function (bC) {
        bC = bb.bG(bC);
        if (!bC || !ce[bC.id])return;
        var Tg = !0, bB = bC.id;
        bm.fo(ce[bB], function () {
            Tg = !1;
            return!0
        });
        if (Tg)delete ce[bB]
    };
    bj.bt = dY.bt = function () {
        var bRA = function () {
            var cn = cf.yO.apply(cf, arguments);
            if (!cn || !cn[2])return;
            var tw = bb.lr(cn[0]), oa = ce[tw] || {};
            ce[tw] = oa;
            tw = cn[4] || cn[1];
            var ye = oa[tw] || [];
            oa[tw] = ye;
            ye.push({type: cn[1], func: cn[2], capt: !!cn[3], sfun: cn[5] || cn[2]});
            return cn.slice(0, 4)
        };
        return function () {
            var cn = bRA.apply(null, arguments);
            if (!!cn)cf.XV.apply(cf, cn);
            return this
        }
    }();
    bj.oz = dY.oz = function () {
        var bRC = function () {
            var tS = arguments, tw = bb.lr(tS[0]), oa = ce[tw], bu = (tS[1] || "").toLowerCase(), be = tS[2];
            if (!oa || !bu || !be)return;
            oa = oa[bu];
            if (!oa)return;
            var bSK = !!tS[3], bv = bm.eg(oa, function (iZ) {
                return be == iZ.sfun && bSK == iZ.capt
            });
            if (bv < 0)return;
            var iZ = oa.splice(bv, 1)[0];
            return!iZ ? null : [bb.bG(tw), iZ.type, iZ.func, iZ.capt]
        };
        return function () {
            var cn = bRC.apply(null, arguments);
            if (!!cn) {
                cf.Ud.apply(cf, cn);
                blw(cn[0])
            }
            return this
        }
    }();
    bj.ky = dY.ky = function () {
        var bly = function () {
            var tS = arguments, tw = bb.lr(tS[0]), oa = ce[tw], ye = (tS[1] || "").toLowerCase();
            if (!oa || !ye)return;
            var bC = bb.bG(tw);
            bm.nt(oa[ye], function (iZ, bv, bk) {
                cf.Ud(bC, iZ.type, iZ.func, iZ.capt);
                bk.splice(bv, 1)
            });
            delete oa[ye]
        };
        var bTw = function (bC) {
            bC = bb.bG(bC);
            if (!bC)return;
            var bB = bC.id;
            bm.fo(ce[bB], function (bk, bu) {
                bly(bB, bu)
            });
            delete ce[bB]
        };
        return function (bC, bu) {
            !bu ? bTw(bC) : bly(bC, bu);
            blw(bC);
            return this
        }
    }();
    bj.bY = function () {
        var bhr;
        var DC = function (bX, bC) {
            var cH = bX.split(":");
            if (cH.length > 1) {
                if (!bhr)bhr = {c: bb.cU, d: bb.bz, a: bb.ix};
                var DD = bhr[cH[0]];
                if (!!DD)return!!DD(bC, cH[1]);
                bX = cH[1]
            }
            return!!bb.ix(bC, bX) || !!bb.bz(bC, bX) || bb.cU(bC, bX)
        };
        return function (be) {
            if (!be)return null;
            var bC = be.target || be.srcElement, eV = arguments[1];
            if (!eV)return bC;
            if (bm.gH(eV))eV = DC.bi(null, eV);
            if (bm.hC(eV)) {
                while (bC) {
                    if (!!eV(bC))return bC;
                    bC = bC.parentNode
                }
                return null
            }
            return bC
        }
    }();
    bj.cu = function (be) {
        bj.ru(be);
        bj.dp(be);
        return this
    };
    bj.ru = function (be) {
        if (!!be) {
            !!be.stopPropagation ? be.stopPropagation() : be.cancelBubble = !0
        }
        return this
    };
    bj.dp = function (be) {
        if (!!be) {
            !!be.preventDefault ? be.preventDefault() : be.returnValue = !1
        }
        return this
    };
    bj.cec = function () {
        var pT = !1;
        var bUR = function () {
            if (pT)return;
            pT = !0;
            bj.bt(document, "click", bVr, !0)
        };
        var bVr = function (be) {
            var bC = bj.bY(be), bVS = bb.bz(bC, "stopped");
            if (bVS == "true") {
                bj.cu(be);
                bb.bz(bC, "stopped", "false")
            }
        };
        return function (be) {
            if (!be)return;
            if (be.type == "click") {
                bj.cu(be);
                return
            }
            bUR();
            bb.bz(bj.bY(be), "stopped", "true")
        }
    }();
    bj.mS = function (be) {
        return be.pageX != null ? be.pageX : be.clientX + bb.qr().scrollLeft
    };
    bj.qi = function (be) {
        return be.pageY != null ? be.pageY : be.clientY + bb.qr().scrollTop
    };
    bj.bK = dY.bK = function (bC, bu, bf) {
        var cn = cf.yO(bC, bu);
        if (!!cn)cf.Yp(cn[0], cn[1], bf);
        return this
    };
    bd("dbg").dumpEV = function () {
        return ce
    };
    dY.isChange = !0
})();
(function () {
    var o = !0, w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a)return"a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify, b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({a: [f, o, !1, w, "\0\b\n\f\r\t"]}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {
                                }
                                if (e)try {
                                    e = 1 !== a("01")
                                } catch (i) {
                                }
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c)return e
                }
                return b && e
            }
        }

        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd, k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], z = function (a, f) {
                return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
            };
            if (!(p = {}.hasOwnProperty))p = function (a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {toString: 1}, f).toString != m)p = function (a) {
                    var f = this.__proto__, a = a in(this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                }; else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {"boolean": 1, number: 1, string: 1, "undefined": 1};
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h)p.call(h, n) && c++;
                b = h = w;
                if (c)c = c == 2 ? function (a, f) {
                    var c = {}, b = m.call(a) == "[object Function]", d;
                    for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]", b, d;
                    for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                }; else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)!(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"}, u = function (a, f) {
                    return("000000" + (f || 0)).slice(-a)
                }, G = function (a) {
                    var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                f = f + L[e];
                                break;
                            default:
                                if (e < 32) {
                                    f = f + ("\\u00" + u(2, e.toString(16)));
                                    break
                                }
                                f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                }, E = function (a, b, c, d, h, n, e) {
                    var g = b[a], i, j, k, l, q, s, v, x, y;
                    try {
                        g = b[a]
                    } catch (A) {
                    }
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON"))if (g > -1 / 0 && g < 1 / 0) {
                            if (z) {
                                k = t(g / 864e5);
                                for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                k = 1 + k - z(i, j);
                                l = (g % 864e5 + 864e5) % 864e5;
                                q = t(l / 36e5) % 24;
                                s = t(l / 6e4) % 60;
                                v = t(l / 1e3) % 60;
                                l = l % 1e3
                            } else {
                                i = g.getUTCFullYear();
                                j = g.getUTCMonth();
                                k = g.getUTCDate();
                                q = g.getUTCHours();
                                s = g.getUTCMinutes();
                                v = g.getUTCSeconds();
                                l = g.getUTCMilliseconds()
                            }
                            g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                        } else g = w; else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w)return"null";
                    i = m.call(g);
                    if (i == "[object Boolean]")return"" + g;
                    if (i == "[object Number]")return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (i == "[object String]")return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--;)if (e[a] === g)throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o), j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null" : i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                        } else {
                            C(d || g, function (a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)if (m.call(b) == "[object Function]")h = b; else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ");
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode, N = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, A, j = function () {
                    b = A = w;
                    throw SyntaxError()
                }, q = function () {
                    for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                        e = a.charCodeAt(b);
                        switch (e) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                c = s ? a.charAt(b) : a[b];
                                b++;
                                return c;
                            case 34:
                                c = "@";
                                for (b++; b < f;) {
                                    e = a.charCodeAt(b);
                                    if (e < 32)j(); else if (e == 92) {
                                        e = a.charCodeAt(++b);
                                        switch (e) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                c = c + N[e];
                                                b++;
                                                break;
                                            case 117:
                                                d = ++b;
                                                for (h = b + 4; b < h; b++) {
                                                    e = a.charCodeAt(b);
                                                    e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                }
                                                c = c + M("0x" + a.slice(d, b));
                                                break;
                                            default:
                                                j()
                                        }
                                    } else {
                                        if (e == 34)break;
                                        e = a.charCodeAt(b);
                                        for (d = b; e >= 32 && e != 92 && e != 34;)e = a.charCodeAt(++b);
                                        c = c + a.slice(d, b)
                                    }
                                }
                                if (a.charCodeAt(b) == 34) {
                                    b++;
                                    return c
                                }
                                j();
                            default:
                                d = b;
                                if (e == 45) {
                                    k = o;
                                    e = a.charCodeAt(++b)
                                }
                                if (e >= 48 && e <= 57) {
                                    for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                    if (a.charCodeAt(b) == 46) {
                                        for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                        h == b && j();
                                        b = h
                                    }
                                    e = a.charCodeAt(b);
                                    if (e == 101 || e == 69) {
                                        e = a.charCodeAt(++b);
                                        (e == 43 || e == 45) && b++;
                                        for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                        h == b && j();
                                        b = h
                                    }
                                    return+a.slice(d, b)
                                }
                                k && j();
                                if (a.slice(b, b + 4) == "true") {
                                    b = b + 4;
                                    return o
                                }
                                if (a.slice(b, b + 5) == "false") {
                                    b = b + 5;
                                    return false
                                }
                                if (a.slice(b, b + 4) == "null") {
                                    b = b + 4;
                                    return w
                                }
                                j()
                        }
                    }
                    return"$"
                }, F = function (a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@")return a.slice(1);
                        if (a == "[") {
                            for (b = []; ; c || (c = o)) {
                                a = q();
                                if (a == "]")break;
                                if (c)if (a == ",") {
                                    a = q();
                                    a == "]" && j()
                                } else j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {}; ; c || (c = o)) {
                                a = q();
                                if (a == "}")break;
                                if (c)if (a == ",") {
                                    a = q();
                                    a == "}" && j()
                                } else j();
                                (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                }, I = function (a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                }, H = function (a, b, c) {
                    var d = a[b], h;
                    if (typeof d == "object" && d)if (m.call(d) == "[object Array]")for (h = d.length; h--;)I(d, h, c); else C(d, function (a) {
                        I(d, a, c)
                    });
                    return c.call(a, b, d)
                };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var bd = NEJ.P, bM = bd("nej.p");
    if (bM.ns.trident0)return;
    JSON.parse = JSON.parse.fj(function (be) {
        var dT = be.args[0] || "";
        if (dT.length >= 5e5) {
            be.stopped = !0;
            be.value = eval("(" + dT + ")")
        }
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, fm = bd("nej.g"), bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), cf = bd("nej.h"), dY = bd("nej.x"), DL, Xr = {}, ce = document.createDocumentFragment();
    bb.lr = dY.lr = function (bC) {
        bC = bb.bG(bC);
        if (!bC)return;
        var bB = !!bC.id ? bC.id : "auto-id-" + bm.blF(16);
        bC.id = bB;
        if (bb.bG(bB) != bC)Xr[bB] = bC;
        return bB
    };
    bb.bG = dY.bG = function (bC) {
        var bh = Xr["" + bC];
        if (!!bh)return bh;
        if (!bm.gH(bC) && !bm.uu(bC))return bC;
        return document.getElementById(bC)
    };
    bb.eu = dY.eu = function (bC, eL) {
        bC = bb.bG(bC);
        if (!bC)return null;
        var bk = cf.Yl(bC);
        if (!!eL)bm.nt(bk, function (bh, bv) {
            if (!bb.cU(bh, eL))bk.splice(bv, 1)
        });
        return bk
    };
    bb.bP = dY.bP = function (bC, gb) {
        bC = bb.bG(bC);
        return!bC ? null : cf.YE(bC, gb.trim())
    };
    bb.blH = dY.blH = function (bC) {
        bC = bb.bG(bC);
        if (!!bC) {
            bC = bC.parentNode;
            while (!!bC) {
                if (bC.scrollHeight > bC.clientHeight)break;
                bC = bC.parentNode
            }
            if (!!bC)return bC
        }
        var oa = document.body.scrollHeight, ye = document.documentElement.scrollHeight;
        return ye >= oa ? document.documentElement : document.body
    };
    bb.qr = function () {
        var blI = function (bk) {
            var bp = 0;
            bm.cv(bk, function (hV) {
                if (!hV)return;
                if (!bp) {
                    bp = hV
                } else {
                    bp = Math.min(bp, hV)
                }
            });
            return bp
        };
        return function (uq) {
            var blM = uq || document, xV = blM.body, xQ = blM.documentElement, bp = {scrollTop: Math.max(xV.scrollTop, xQ.scrollTop), scrollLeft: Math.max(xV.scrollLeft, xQ.scrollLeft), clientWidth: blI([xV.clientWidth, xV.offsetWidth, xQ.clientWidth, xQ.offsetWidth]), clientHeight: blI([xV.clientHeight, xV.offsetHeight, xQ.clientHeight, xQ.offsetHeight])};
            bp.scrollWidth = Math.max(bp.clientWidth, xV.scrollWidth, xQ.scrollWidth);
            bp.scrollHeight = Math.max(bp.clientHeight, xV.scrollHeight, xQ.scrollHeight);
            return bp
        }
    }();
    bb.cdH = function (hM, nR) {
        var bp = NEJ.X({}, nR), blT = hM.width / hM.height, SP = nR.width / nR.height;
        if (blT > SP && nR.height > hM.height) {
            bp.height = hM.height;
            bp.width = bp.height * SP
        }
        if (blT < SP && nR.width > hM.width) {
            bp.width = hM.width;
            bp.height = bp.width / SP
        }
        return bp
    };
    bb.cdB = function () {
        var eh = /\s+/;
        var tJ = {left: function () {
            return 0
        }, center: function (hA, nR) {
            return(hA.width - nR.width) / 2
        }, right: function (hA, nR) {
            return hA.width - nR.width
        }, top: function () {
            return 0
        }, middle: function (hA, nR) {
            return(hA.height - nR.height) / 2
        }, bottom: function (hA, nR) {
            return hA.height - nR.height
        }};
        return function (hA, nR, ng) {
            var bp = {}, cH = (ng || "").split(eh), hs = tJ[cH[1]] || tJ.middle, jQ = tJ[cH[0]] || tJ.center;
            bp.top = hs(hA, nR);
            bp.left = jQ(hA, nR);
            return bp
        }
    }();
    bb.rx = dY.rx = function (bC, eL) {
        cf.baJ(bC, eL || bb.bz(bC, "hover") || "js-hover");
        return this
    };
    bb.Lh = dY.Lh = function (bC) {
        bC = bb.bG(bC);
        if (!bC)return;
        cf.baL(bC)
    };
    bb.bZK = dY.bZK = function () {
        var ce = {}, blV = 2;
        var cae = function (bB, eL, be) {
            ce[bB] = [bj.mS(be), bj.qi(be)];
            bb.bJ(bB, eL)
        };
        var caf = function (bB, eL, be) {
            var cK = ce[bB];
            if (!bm.hh(cK))return;
            var cde = Math.abs(bj.mS(be) - cK[0]), ccZ = Math.abs(bj.qi(be) - cK[1]);
            if (cde > blV || ccZ > blV)bbQ(bB, eL)
        };
        var bbQ = function (bB, eL) {
            if (bm.hh(ce[bB])) {
                ce[bB] = -1;
                bb.bH(bB, eL)
            }
        };
        return function (bC, eL) {
            var bB = bb.lr(bC);
            if (!bB || ce[bB] != null)return;
            ce[bB] = -1;
            eL = eL || bb.bz(bB, "highlight") || "js-highlight";
            bj.bt(bB, "touchstart", cae.bi(null, bB, eL));
            bj.bt(document, "touchmove", caf.bi(null, bB, eL));
            bj.bt(document, "touchend", bbQ.bi(null, bB, eL));
            bj.bt(document, "touchcancel", bbQ.bi(null, bB, eL))
        }
    }();
    bb.xE = dY.xE = function () {
        var ccY = function (bB, eL, ccX) {
            var bC = bb.bG(bB), be = {clazz: eL, target: bC};
            if (bb.cU(bC, eL)) {
                be.toggled = !1;
                bb.bH(bC, eL)
            } else {
                be.toggled = !0;
                bb.bJ(bC, eL)
            }
            ccX.call(null, be)
        };
        return function (bC, bf) {
            bC = bb.bG(bC);
            if (!!bC) {
                var iS = {ontoggle: cC, clazz: "js-toggle", element: bC.parentNode};
                if (bm.gH(bf)) {
                    var bh = bb.bG(bf);
                    !!bh ? iS.element = bh : iS.clazz = bf
                } else {
                    NEJ.EX(iS, bf);
                    iS.element = bb.bG(iS.element)
                }
                var bB = bb.lr(iS.element);
                bj.bt(bC, "click", ccY.bi(null, bB, iS.clazz, iS.ontoggle || cC))
            }
            return this
        }
    }();
    bb.mK = dY.mK = function (bC, bf) {
        bC = bb.bG(bC);
        if (!bC)return;
        var fC = 0, eL = "js-focus";
        if (bm.uu(bf)) {
            fC = bf
        } else if (bm.gH(bf)) {
            eL = bf
        } else if (bm.qj(bf)) {
            fC = bf.mode || fC;
            eL = bf.clazz || eL
        }
        var bD = parseInt(bb.bz(bC, "mode"));
        if (!isNaN(bD))fC = bD;
        bD = bb.bz(bC, "focus");
        if (!!bD)eL = bD;
        cf.bcM(bC, fC, eL);
        return this
    };
    bb.ef = function () {
        var cE = {a: {href: "#", hideFocus: !0}, style: {type: "text/css"}, link: {type: "text/css", rel: "stylesheet"}, iframe: {frameBorder: 0}, script: {defer: !0, type: "text/javascript"}};
        return function (fP, gb, cQ) {
            var bC = document.createElement(fP);
            NEJ.X(bC, cE[fP.toLowerCase()]);
            if (!!gb)bC.className = gb;
            cQ = bb.bG(cQ);
            if (!!cQ)cQ.appendChild(bC);
            return bC
        }
    }();
    bb.Tp = function () {
        var ccW = function () {
            if (location.hostname == document.domain)return"about:blank";
            return'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ccU = function (bX) {
            bX = bX.trim();
            if (!bX)return bb.ef("iframe");
            var fU;
            try {
                fU = document.createElement('<iframe name="' + bX + '"></iframe>');
                fU.frameBorder = 0
            } catch (e) {
                fU = bb.ef("iframe");
                fU.name = bX
            }
            return fU
        };
        return function (bf) {
            bf = bf || cg;
            var fU = ccU(bf.name || "");
            if (!bf.visible)fU.style.display = "none";
            if (bm.hC(bf.onload))bj.bt(fU, "load", function (be) {
                if (!fU.src)return;
                bj.ky(fU, "load");
                bf.onload(be)
            });
            var cQ = bf.parent;
            if (bm.hC(cQ)) {
                try {
                    cQ(fU)
                } catch (e) {
                }
            } else {
                (bb.bG(cQ) || document.body).appendChild(fU)
            }
            var eR = bf.src || ccW();
            window.setTimeout(function () {
                fU.src = eR
            }, 0);
            return fU
        }
    }();
    bb.dW = dY.dW = function () {
        var bmj = function (LZ) {
            LZ.src = fm.Zi
        };
        var bmk = function (uz) {
            uz.src = "about:blank"
        };
        return function (bC, ccN) {
            bC = bb.bG(bC);
            if (!bC)return this;
            if (!ccN)bj.ky(bC);
            delete Xr[bC.id];
            var fP = bC.tagName;
            if (fP == "IFRAME") {
                bmk(bC)
            } else if (fP == "IMG") {
                bmj(bC)
            } else if (!!bC.getElementsByTagName) {
                bm.cv(bC.getElementsByTagName("img"), bmj);
                bm.cv(bC.getElementsByTagName("iframe"), bmk)
            }
            if (!!bC.parentNode) {
                bC.parentNode.removeChild(bC)
            }
            return this
        }
    }();
    bb.mB = dY.mB = function (bC) {
        bC = bb.bG(bC);
        if (!!bC)ce.appendChild(bC);
        return this
    };
    bb.bms = dY.bms = function (bC) {
        bC = bb.bG(bC);
        if (!bC)return;
        bm.nt(bC.childNodes, function (bh) {
            bb.dW(bh)
        })
    };
    bb.Eg = dY.Eg = function () {
        var eL, gK = /\s+/;
        var ccE = function () {
            if (!!eL)return;
            eL = bb.rA(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            bb.bmu()
        };
        return function (bC, bf) {
            bC = bb.bG(bC);
            if (!bC)return;
            ccE();
            bf = bf || cg;
            var cQ = bC.parentNode;
            if (!bb.cU(cQ, eL)) {
                cQ = bb.ef("span", eL);
                bC.insertAdjacentElement("beforeBegin", cQ);
                cQ.appendChild(bC)
            }
            var bmz = bf.nid || "", bh = bb.bP(cQ, bmz || eL + "-show")[0];
            if (!bh) {
                var eG = ((bf.clazz || "") + " " + bmz).trim();
                eG = eL + "-show" + (!eG ? "" : " ") + eG;
                bh = bb.ef(bf.tag || "span", eG);
                cQ.appendChild(bh)
            }
            var eG = bf.clazz;
            if (!!eG) {
                eG = (eG || "").trim().split(gK)[0] + "-parent";
                bb.bJ(cQ, eG)
            }
            return bh
        }
    }();
    bb.bz = dY.bz = function () {
        var bim = {}, fP = "data-", eh = /\-(.{1})/gi;
        var zU = function (bC) {
            var bB = bb.lr(bC);
            if (!!bim[bB])return;
            var cE = {};
            bm.cv(bC.attributes, function (bh) {
                var bN = bh.nodeName;
                if (bN.indexOf(fP) != 0)return;
                bN = bN.replace(fP, "").replace(eh, function ($1, $2) {
                    return $2.toUpperCase()
                });
                cE[bN] = bh.nodeValue || ""
            });
            bim[bB] = cE
        };
        return function (bC, bN, bD) {
            bC = bb.bG(bC);
            if (!bC)return null;
            var Sk = bC.dataset;
            if (!Sk) {
                zU(bC);
                Sk = bim[bC.id]
            }
            if (bD !== undefined)Sk[bN] = bD;
            return Sk[bN]
        }
    }();
    bb.ix = dY.ix = function (bC, bX, bD) {
        bC = bb.bG(bC);
        if (!bC)return"";
        if (bD !== undefined && !!bC.setAttribute)bC.setAttribute(bX, bD);
        return cf.bgt(bC, bX)
    };
    bb.oZ = function (eN) {
        var pX = document.createElement("div");
        pX.innerHTML = eN;
        var bk = bb.eu(pX);
        return bk.length > 1 ? pX : bk[0]
    };
    bb.ccw = dY.ccw = function (bC) {
        bC = bb.bG(bC);
        return!bC ? "" : cf.biB(bC)
    };
    bb.bmB = function (yP) {
        yP = (yP || "").trim();
        return!yP ? null : cf.Vk(yP)
    };
    bb.ccq = function (ew, bu) {
        ew = ew || "";
        switch (bu) {
            case"xml":
                ew = bb.bmB(ew);
                break;
            case"json":
                try {
                    ew = JSON.parse(ew)
                } catch (ex) {
                    ew = null
                }
                break
        }
        return ew
    };
    bb.jX = dY.jX = function () {
        var ccp = function (bC) {
            return bC == document.body || bC == document.documentElement
        };
        return function (eO, nA) {
            eO = bb.bG(eO);
            if (!eO)return null;
            nA = bb.bG(nA) || null;
            var bp = {x: 0, y: 0}, Wv, el, Sj;
            while (!!eO && eO != nA) {
                Wv = ccp(eO);
                el = Wv ? 0 : eO.scrollLeft;
                Sj = parseInt(bb.ey(eO, "borderLeftWidth")) || 0;
                bp.x += eO.offsetLeft + Sj - el;
                el = Wv ? 0 : eO.scrollTop;
                Sj = parseInt(bb.ey(eO, "borderTopWidth")) || 0;
                bp.y += eO.offsetTop + Sj - el;
                eO = eO.offsetParent
            }
            return bp
        }
    }();
    bb.nw = dY.nw = function (bC) {
        var cq = bb.jX(bC);
        window.scrollTo(cq.x, cq.y);
        return this
    };
    bb.cdh = function (ri) {
        ri = (ri || "").trim();
        return cf.bkG(ri)
    };
    bb.cck = dY.cck = function (bC, bX, cE) {
        bC = bb.bG(bC);
        if (!bC)return this;
        var bD = cf.bkR(bX, cE);
        if (!bD)return this;
        bb.ch(bC, "transform", bD);
        return this
    };
    bb.la = dY.la = function (bC, cE) {
        bC = bb.bG(bC);
        if (!!bC)bm.fo(cE, function (bD, bX) {
            bb.ch(bC, bX, bD)
        });
        return this
    };
    bb.ccj = dY.ccj = function (gw, bf) {
        gw = bb.bG(gw);
        if (!gw)return{start: 0, end: 0};
        if (bm.uu(bf))bf = {start: bf, end: bf};
        if (bf != null) {
            if (bf.end == null)bf.end = bf.start || 0;
            cf.baX(gw, bf)
        } else {
            bf = cf.bcE(gw)
        }
        return bf
    };
    bb.ch = dY.ch = function (bC, bX, bD) {
        bC = bb.bG(bC);
        if (!!bC)cf.ZC(bC, bX, bD);
        return this
    };
    bb.ey = dY.ey = function (bC, bX) {
        bC = bb.bG(bC);
        if (!bC)return"";
        var hb = !window.getComputedStyle ? bC.currentStyle || cg : window.getComputedStyle(bC, null);
        return hb[cf.bkX(bX)] || ""
    };
    bb.bmF = function () {
        var eh = /[\s\r\n]+/gi;
        return function (ds) {
            ds = (ds || "").trim().replace(eh, " ");
            if (!ds)return;
            var bh = bb.ef("style");
            document.head.appendChild(bh);
            cf.bbD(bh, cf.bPn(ds));
            return bh
        }
    }();
    bb.bmI = function (RW) {
        try {
            RW = RW.trim();
            if (!!RW)return(new Function(RW))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    bb.rA = function () {
        var eh = /#<.*?>/g, gJ = +(new Date);
        return function (kE) {
            if (!DL)DL = [];
            var gb = "auto-" + gJ++;
            DL.push(kE.replace(eh, gb));
            return gb
        }
    }();
    bb.bmu = function () {
        if (!!DL) {
            bb.bmF(DL.join(""));
            DL = null
        }
        return this
    };
    bb.cdj = function (ds, kE) {
        ds = bb.bG(ds);
        return!ds ? null : cf.bch(ds, kE)
    };
    bb.bJ = dY.bJ = function () {
        cf.YU.apply(cf, arguments);
        return this
    };
    bb.bH = dY.bH = function () {
        cf.Zh.apply(cf, arguments);
        return this
    };
    bb.gL = dY.gL = function () {
        cf.MB.apply(cf, arguments);
        return this
    };
    bb.cU = dY.cU = function () {
        return cf.ZI.apply(cf, arguments)
    };
    if (!document.head)document.head = document.getElementsByTagName("head")[0] || document.body;
    dY.isChange = !0
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gm = NEJ.R, cC = NEJ.F, bb = bd("nej.e"), cf = bd("nej.h"), bm = bd("nej.u");
    var Aa = function (bl, bu) {
        try {
            bu = bu.toLowerCase();
            if (bl === null)return bu == "null";
            if (bl === undefined)return bu == "undefined";
            return cg.toString.call(bl).toLowerCase() == "[object " + bu + "]"
        } catch (e) {
            return!1
        }
    };
    bm.hC = function (bl) {
        return Aa(bl, "function")
    };
    bm.gH = function (bl) {
        return Aa(bl, "string")
    };
    bm.uu = function (bl) {
        return Aa(bl, "number")
    };
    bm.cdk = function (bl) {
        return Aa(bl, "boolean")
    };
    bm.RQ = function (bl) {
        return Aa(bl, "date")
    };
    bm.hh = function (bl) {
        return Aa(bl, "array")
    };
    bm.qj = function (bl) {
        return Aa(bl, "object")
    };
    bm.hk = function () {
        var eh = /[^\x00-\xfff]/g;
        return function (cm) {
            return("" + (cm || "")).replace(eh, "**").length
        }
    }();
    bm.eg = function (bk, bw) {
        var eV = bm.hC(bw) ? bw : function (bD) {
            return bD === bw
        }, bv = bm.fo(bk, eV);
        return bv != null ? bv : -1
    };
    bm.cdl = function () {
        var bmN;
        var Hp = function (bk, nP, nS) {
            if (nP > nS)return-1;
            var Hr = Math.ceil((nP + nS) / 2), bp = bmN(bk[Hr], Hr, bk);
            if (bp == 0)return Hr;
            if (bp < 0)return Hp(bk, nP, Hr - 1);
            return Hp(bk, Hr + 1, nS)
        };
        return function (bk, DD) {
            bmN = DD || cC;
            return Hp(bk, 0, bk.length - 1)
        }
    }();
    bm.nt = function (bk, gP, rD) {
        if (!bk || !bk.length || !bm.hC(gP))return null;
        for (var i = bk.length - 1; i >= 0; i--)if (!!gP.call(rD, bk[i], i, bk))return i;
        return null
    };
    bm.cv = function (bk, gP, rD) {
        if (!bk || !bk.length || !bm.hC(gP))return this;
        if (!!bk.forEach) {
            bk.forEach(gP, rD);
            return this
        }
        for (var i = 0, l = bk.length; i < l; i++)gP.call(rD, bk[i], i, bk);
        return this
    };
    bm.fo = function (bk, gP, rD) {
        if (!bk || !bm.hC(gP))return null;
        if (bk.length != null) {
            if (bk.length > 0)for (var i = 0, l = bk.length; i < l; i++)if (!!gP.call(rD, bk[i], i, bk))return i
        }
        if (bm.qj(bk)) {
            for (var x in bk)if (bk.hasOwnProperty(x) && !!gP.call(rD, bk[x], x, bk))return x
        }
        return null
    };
    bm.cbL = function (iQ, cbH, bf) {
        iQ = iQ || [];
        bf = bf || cg;
        var bmT = !!bf.union, uE = !!bf.begin, RL = bf.compare, cbC = bmT && uE ? bm.nt : bm.cv;
        cbC(cbH, function (bw) {
            if (!!RL)RL = RL.gY(bw);
            var bv = bm.eg(iQ, RL || bw);
            if (bv >= 0)iQ.splice(bv, 1);
            if (bmT)iQ[uE ? "unshift" : "push"](bw)
        });
        return iQ
    };
    bm.Ez = function (cE, cm) {
        if (!cE || !cm || !cm.replace)return cm || "";
        return cm.replace(cE.r, function ($1) {
            var bp = cE[!cE.i ? $1.toLowerCase() : $1];
            return bp != null ? bp : $1
        })
    };
    bm.fd = function () {
        var cE = {r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "\n": "<br/>", "\r": "", "&lt;": "&lt;", "&gt;": "&gt;"};
        return function (cm) {
            return bm.Ez(cE, cm)
        }
    }();
    bm.cdm = function () {
        var cE = {r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi, "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " ", "&#39;": "'", "&quot;": '"', "<br/>": "\n"};
        return function (cm) {
            return bm.Ez(cE, cm)
        }
    }();
    bm.nc = function () {
        var cE = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, cbA = ["上午", "下午"], cbz = ["A.M.", "P.M."], baR = ["日", "一", "二", "三", "四", "五", "六"], cby = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], cbu = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Hy = function (gk) {
            gk = parseInt(gk) || 0;
            return(gk < 10 ? "0" : "") + gk
        };
        var cbs = function (oM) {
            return oM < 12 ? 0 : 1
        };
        return function (cT, RF, cbq) {
            if (!cT || !RF)return"";
            cT = bm.RE(cT);
            cE.yyyy = cT.getFullYear();
            cE.yy = ("" + cE.yyyy).substr(2);
            cE.M = cT.getMonth() + 1;
            cE.MM = Hy(cE.M);
            cE.eM = cbu[cE.M - 1];
            cE.cM = cby[cE.M - 1];
            cE.d = cT.getDate();
            cE.dd = Hy(cE.d);
            cE.H = cT.getHours();
            cE.HH = Hy(cE.H);
            cE.m = cT.getMinutes();
            cE.mm = Hy(cE.m);
            cE.s = cT.getSeconds();
            cE.ss = Hy(cE.s);
            cE.ms = cT.getMilliseconds();
            cE.w = baR[cT.getDay()];
            var bnk = cbs(cE.H);
            cE.ct = cbA[bnk];
            cE.et = cbz[bnk];
            if (!!cbq) {
                cE.H = cE.H % 12
            }
            return bm.Ez(cE, RF)
        }
    }();
    bm.RE = function (cT) {
        var dH = cT;
        if (bm.gH(cT))dH = new Date(Date.parse(cT));
        if (!bm.RQ(cT))dH = new Date(cT);
        return dH
    };
    bm.Lh = function (cbj, cbe) {
        return(new Number(cbj)).toFixed(cbe)
    };
    bm.bdO = function () {
        var gK = /([^\/:])\/.*$/, jY = /\/[^\/]+$/, HF = /[#\?]/, bej = location.href.split(/[?#]/)[0], rG = document.createElement("a");
        var bep = function (mi) {
            return(mi || "").indexOf("://") > 0
        };
        var bnn = function (mi) {
            return(mi || "").split(HF)[0].replace(jY, "/")
        };
        var cbc = function (mi, gg) {
            if (mi.indexOf("/") == 0)return gg.replace(gK, "$1") + mi;
            return bnn(gg) + mi
        };
        bej = bnn(bej);
        return function (mi, gg) {
            mi = (mi || "").trim();
            if (!bep(gg))gg = bej;
            if (!mi)return gg;
            if (bep(mi))return mi;
            mi = cbc(mi, gg);
            rG.href = mi;
            mi = rG.href;
            return bep(mi) ? mi : rG.getAttribute("href", 4)
        }
    }();
    bm.cbb = function () {
        var eh = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (bZ) {
            if (eh.test(bZ || ""))return RegExp.$1.toLowerCase();
            return""
        }
    }();
    bm.bnp = function (bE, iS) {
        if (!bE)return iS;
        var bX = bE.tagName.toLowerCase(), bk = bb.eu(bE);
        if (!bk || !bk.length) {
            iS[bX] = bE.textContent || bE.text || "";
            return iS
        }
        var fy = {};
        iS[bX] = fy;
        bm.cv(bk, function (bh) {
            bm.bnp(bh, fy)
        });
        return iS
    };
    bm.cdq = function (yP) {
        try {
            return bm.bnp(bb.bmB(yP), {})
        } catch (ex) {
            return null
        }
    };
    bm.bnq = function (iN, HG) {
        var iS = {};
        bm.cv((iN || "").split(HG), function (bX) {
            var Rw = bX.split("=");
            if (!Rw || !Rw.length)return;
            var bN = Rw.shift();
            if (!bN)return;
            iS[decodeURIComponent(bN)] = decodeURIComponent(Rw.join("="))
        });
        return iS
    };
    bm.BW = function (gR, HG, caL) {
        if (!gR)return"";
        var cH = [];
        for (var x in gR) {
            cH.push(encodeURIComponent(x) + "=" + (!!caL ? encodeURIComponent(gR[x]) : gR[x]))
        }
        return cH.join(HG || ",")
    };
    bm.iO = function (cN) {
        return bm.bnq(cN, "&")
    };
    bm.eX = function (gR) {
        return bm.BW(gR, "&", !0)
    };
    bm.cds = function (gR) {
        return cf.Dl(gR)
    };
    bm.cdt = function (bk, eV) {
        var bp = {};
        bm.cv(bk, function (bw) {
            var bN = bw;
            if (!!eV) {
                bN = eV(bw)
            }
            bp[bN] = bw
        });
        return bp
    };
    bm.cdw = function (gk, gM) {
        var caE = ("" + gk).length, caD = Math.max(1, parseInt(gM) || 0), el = caD - caE;
        if (el > 0) {
            gk = (new Array(el + 1)).join("0") + gk
        }
        return"" + gk
    };
    bm.NB = function (gR, bX) {
        if (!bm.hh(bX)) {
            try {
                delete gR[bX]
            } catch (e) {
                gR[bX] = undefined
            }
            return this
        }
        bm.cv(bX, bm.NB.bi(bm, gR));
        return this
    };
    bm.blF = function () {
        var bns = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (cF) {
            cF = cF || 10;
            var bp = [];
            for (var i = 0, bnt; i < cF; ++i) {
                bnt = Math.floor(Math.random() * bns.length);
                bp.push(bns.charAt(bnt))
            }
            return bp.join("")
        }
    }();
    bm.HQ = function (iT, hM) {
        return Math.floor(Math.random() * (hM - iT) + iT)
    };
    bm.nY = function (cF) {
        cF = Math.max(0, Math.min(cF || 8, 30));
        var iT = Math.pow(10, cF - 1), hM = iT * 10;
        return bm.HQ(iT, hM).toString()
    };
    bm.Ro = function () {
        var gJ = +(new Date);
        return function () {
            return"" + gJ++
        }
    }()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gm = NEJ.R, cC = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bM = bd("nej.ut"), oc;
    if (!!bM.dZ)return;
    bM.dZ = NEJ.C();
    oc = bM.dZ.prototype;
    bM.dZ.bF = function (bf) {
        bf = bf || {};
        var dP = !!this.HS && this.HS.shift();
        if (!dP) {
            dP = new this(bf);
            this.cau = (this.cau || 0) + 1
        }
        dP.cz(bf);
        return dP
    };
    bM.dZ.bW = function () {
        var HU = function (bw, bv, bk) {
            bw.bW();
            bk.splice(bv, 1)
        };
        return function (dP) {
            if (!dP)return null;
            if (!bm.hh(dP)) {
                if (!(dP instanceof this)) {
                    var gb = dP.constructor;
                    if (!!gb.bW)gb.bW(dP);
                    return null
                }
                if (dP == this.fJ)delete this.fJ;
                if (dP == this.ze)delete this.ze;
                dP.cR();
                if (!this.HS)this.HS = [];
                if (bm.eg(this.HS, dP) < 0) {
                    this.HS.push(dP)
                }
                return null
            }
            bm.nt(dP, HU, this)
        }
    }();
    bM.dZ.iE = function (bf) {
        bf = bf || {};
        if (!this.fJ)this.fJ = this.bF(bf);
        return this.fJ
    };
    bM.dZ.car = function (bf, qO) {
        bf = bf || {};
        if (!!qO && !!this.ze) {
            this.ze.bW();
            delete this.ze
        }
        if (!this.ze) {
            this.ze = this.bF(bf)
        } else {
            this.ze.cz(bf)
        }
        return this.ze
    };
    oc.dv = function () {
        var gJ = +(new Date);
        return function () {
            this.id = gJ++;
            this.lC = {};
            this.bnv = {}
        }
    }();
    oc.cz = function (bf) {
        this.XF(bf)
    };
    oc.cR = function () {
        this.ky();
        this.XI()
    };
    oc.dq = function () {
        var gJ = +(new Date);
        var cal = function (cn) {
            if (!cn || cn.length < 3)return;
            this.bnv["de-" + gJ++] = cn;
            bj.bt.apply(bj, cn)
        };
        return function (bk) {
            bm.cv(bk, cal, this)
        }
    }();
    oc.XI = function () {
        var caa = function (cn, bN, cE) {
            delete cE[bN];
            bj.oz.apply(bj, cn)
        };
        return function () {
            bm.fo(this.bnv, caa)
        }
    }();
    oc.cdz = function (eV) {
        eV = eV || cC;
        bm.fo(this, function (Cb, bN, cE) {
            if (!!Cb && !!Cb.bW && !eV(Cb)) {
                delete cE[bN];
                Cb.bW()
            }
        })
    };
    oc.bW = function () {
        this.constructor.bW(this)
    };
    oc.bnI = function (bu) {
        var be = this.lC[bu.toLowerCase()];
        return!!be && be !== cC
    };
    oc.bt = function (bu, be) {
        this.Ch.apply(this, arguments);
        return this
    };
    oc.oz = function (bu, be) {
        var bu = (bu || "").toLowerCase(), fs = this.lC[bu];
        if (!bm.hh(fs)) {
            if (fs == be)delete this.lC[bu];
            return
        }
        bm.nt(fs, function (gO, bv, bk) {
            if (gO == be)bk.splice(bv, 1)
        })
    };
    oc.Ch = function (bu, be) {
        if (!!bu && bm.hC(be))this.lC[bu.toLowerCase()] = be;
        return this
    };
    oc.XF = function () {
        var bZQ = function (be, bu) {
            this.Ch(bu, be)
        };
        return function (fs) {
            bm.fo(fs, bZQ, this);
            return this
        }
    }();
    oc.ky = function () {
        var YR = function (be, bu) {
            this.ky(bu)
        };
        return function (bu) {
            var bu = (bu || "").toLowerCase();
            if (!!bu) {
                delete this.lC[bu]
            } else {
                bm.fo(this.lC, YR, this)
            }
            return this
        }
    }();
    oc.YT = function (bu, be) {
        if (!bu || !bm.hC(be))return this;
        bu = bu.toLowerCase();
        var fs = this.lC[bu];
        if (!fs) {
            this.lC[bu] = be;
            return this
        }
        if (!bm.hh(fs)) {
            this.lC[bu] = [fs]
        }
        this.lC[bu].push(be);
        return this
    };
    oc.bK = function (bu) {
        var be = this.lC[(bu || "").toLowerCase()];
        if (!be)return this;
        var cn = gm.slice.call(arguments, 1);
        if (!bm.hh(be))return be.apply(this, cn);
        bm.cv(be, function (fr) {
            try {
                fr.apply(this, cn)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    bM.Rd = function () {
        var ce = {};
        return function (bB, gb, bf) {
            var fB = gb.bZO;
            if (!fB) {
                fB = bm.blF(10);
                gb.bZO = fB
            }
            var bN = bB + "-" + fB, dP = ce[bN];
            if (!!bf && !dP) {
                dP = gb.bF(bf);
                dP.bW = dP.bW.fj(function (be) {
                    delete ce[bN];
                    delete dP.bW
                });
                ce[bN] = dP
            }
            return dP
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.hI = function () {
        var dH = new Date, bXh = +dH, bbh = 864e5;
        var bXg = function (bX) {
            var qw = document.cookie, rS = "\\b" + bX + "=", PM = qw.search(rS);
            if (PM < 0)return"";
            PM += rS.length - 2;
            var yn = qw.indexOf(";", PM);
            if (yn < 0)yn = qw.length;
            return qw.substring(PM, yn) || ""
        };
        return function (bX, bl) {
            if (bl === undefined)return bXg(bX);
            if (u.gH(bl)) {
                if (!!bl) {
                    document.cookie = bX + "=" + bl + ";";
                    return bl
                }
                bl = {expires: -100}
            }
            bl = bl || o;
            var qw = bX + "=" + (bl.value || "") + ";";
            delete bl.value;
            if (bl.expires !== undefined) {
                dH.setTime(bXh + bl.expires * bbh);
                bl.expires = dH.toGMTString()
            }
            qw += u.BW(bl, ";");
            document.cookie = qw
        }
    }()
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, jf = bd("nej.c"), fm = bd("nej.g"), bb = bd("nej.e"), bA = bd("nej.j"), bI = bd("nej.ut"), bM = bd("nej.ut.j"), bm = bd("nej.u"), bc;
    if (!!bM.FF)return;
    bM.FF = NEJ.C();
    bc = bM.FF.bU(bI.dZ);
    bc.cz = function (bf) {
        this.cB(bf);
        this.qG = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.qG, bf);
        var zl = jf.bG("csrf");
        if (!!zl.cookie && !!zl.param) {
            var cN = encodeURIComponent(zl.param) + "=" + encodeURIComponent(bA.hI(zl.cookie) || ""), HG = this.qG.url.indexOf("?") < 0 ? "?" : "&";
            this.qG.url += HG + cN
        }
        this.PK = bf.headers || {};
        var cm = this.PK[fm.yY];
        if (cm == null)this.PK[fm.yY] = fm.bJr
    };
    bc.cR = function () {
        this.cV();
        delete this.xu;
        delete this.qG;
        delete this.PK
    };
    bc.bXf = function (cm) {
        var cE = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.qG.noescape) {
            return bm.Ez(cE, cm)
        } else {
            return cm
        }
    };
    bc.tu = function (be) {
        var gf = be.status;
        if (gf == -1) {
            this.bK("onerror", {code: fm.bku, message: "请求[" + this.qG.url + "]超时！"});
            return
        }
        if (("" + gf).indexOf("2") != 0) {
            this.bK("onerror", {data: gf, code: fm.Xi, message: "服务器返回异常状态[" + gf + "]!"});
            return
        }
        this.bK("onload", bb.ccq(this.bXf(be.result), this.qG.type))
    };
    bc.dJ = cC;
    bc.bcO = function (bl) {
        var bZ = this.qG.url;
        if (!bZ) {
            this.bK("onerror", {code: fm.beh, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.qG.data = bl == null ? null : bl;
            var be = {request: this.qG, headers: this.PK};
            try {
                this.bK("onbeforerequest", be)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.dJ(be)
        } catch (e) {
            this.bK("onerror", {code: fm.Xi, message: "请求[" + bZ + "]失败:" + e.message + "！"})
        }
        return this
    };
    bc.rV = cC
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, cf = bd("nej.h"), fm = bd("nej.g"), bm = bd("nej.u"), bM = bd("nej.ut.j"), ce = {}, Kv;
    if (!!bM.PE)return;
    bM.PE = NEJ.C();
    Kv = bM.PE.bU(bM.FF);
    Kv.cR = function () {
        this.cV();
        window.clearTimeout(this.gl);
        delete this.gl;
        try {
            this.qS.onreadystatechange = cC;
            this.qS.abort()
        } catch (e) {
        }
        delete this.qS
    };
    Kv.dJ = function () {
        var bXe = function (bD, bN) {
            this.qS.setRequestHeader(bN, bD)
        };
        return function (bf) {
            var gy = bf.request, vf = bf.headers;
            this.qS = cf.bdR();
            if (vf[fm.yY] === fm.Ca) {
                delete vf[fm.yY];
                this.qS.upload.onprogress = this.iA.bi(this, 1);
                if (gy.data.tagName === "FORM")gy.data = new FormData(gy.data)
            }
            this.qS.onreadystatechange = this.iA.bi(this, 2);
            if (gy.timeout != 0) {
                this.gl = window.setTimeout(this.iA.bi(this, 3), gy.timeout)
            }
            this.qS.open(gy.method, gy.url, !gy.sync);
            bm.fo(vf, bXe, this);
            if (!!this.qG.cookie && "withCredentials"in this.qS)this.qS.withCredentials = !0;
            //this.qS.send(gy.data)
        }
    }();
    Kv.iA = function (bu) {
        switch (bu) {
            case 1:
                this.bK("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qS.readyState == 4)this.tu({status: this.qS.status, result: this.qS.responseText || ""});
                break;
            case 3:
                this.tu({status: -1});
                break
        }
    };
    Kv.rV = function () {
        this.tu({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")TrimPath = exports
    }
    var Ic = {}, QY = [], bnJ = /\s+/g, gJ = +(new Date), GN, cX, qI;
    var Ac = function () {
        var gK = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, jY = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/, HF = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, bZJ = /^new\s+/, bZH = /['"]/;
        var bZG = function (bD) {
            if (gK.test(bD))return;
            bD = bD.split(".")[0].trim();
            if (!bD || bZH.test(bD))return;
            bD = bD.replace(bZJ, "");
            try {
                if (HF.test(bD))return;
                qI[bD] = 1
            } catch (e) {
            }
        };
        return function (cm) {
            cm = cm || "";
            if (!cm || gK.test(cm))return;
            var cH = cm.split(jY);
            for (var i = 0, l = cH.length; i < l; i++)bZG(cH[i])
        }
    }();
    var bZD = function (es) {
        if (es[2] != "in")throw"bad for loop statement: " + es.join(" ");
        QY.push(es[1]);
        Ac(es[3]);
        return"var __HASH__" + es[1] + " = " + es[3] + "," + es[1] + "," + es[1] + "_count=0;" + "if (!!__HASH__" + es[1] + ")" + "for(var " + es[1] + "_key in __HASH__" + es[1] + "){" + es[1] + " = __HASH__" + es[1] + "[" + es[1] + "_key];" + "if (typeof(" + es[1] + ')=="function") continue;' + es[1] + "_count++;"
    };
    var bZC = function () {
        var es = QY[QY.length - 1];
        return"}; if(!__HASH__" + es + "||!" + es + "_count){"
    };
    var bZB = function () {
        QY.pop();
        return"};"
    };
    var bZA = function (es) {
        if (es[2] != "as")throw"bad for list loop statement: " + es.join(" ");
        var Io = es[1].split("..");
        if (Io.length > 1) {
            Ac(Io[0]);
            Ac(Io[1]);
            return"for(var " + es[3] + "," + es[3] + "_index=0," + es[3] + "_beg=" + Io[0] + "," + es[3] + "_end=" + Io[1] + "," + es[3] + "_length=parseInt(" + es[3] + "_end-" + es[3] + "_beg+1);" + es[3] + "_index<" + es[3] + "_length;" + es[3] + "_index++){" + es[3] + " = " + es[3] + "_beg+" + es[3] + "_index;"
        } else {
            Ac(es[1]);
            return"for(var __LIST__" + es[3] + " = " + es[1] + "," + es[3] + "," + es[3] + "_index=0," + es[3] + "_length=__LIST__" + es[3] + ".length;" + es[3] + "_index<" + es[3] + "_length;" + es[3] + "_index++){" + es[3] + " = __LIST__" + es[3] + "[" + es[3] + "_index];"
        }
    };
    var bZw = function (es) {
        if (!es || !es.length)return;
        es.shift();
        var bX = es[0].split("(")[0];
        return"var " + bX + " = function" + es.join("").replace(bX, "") + "{var __OUT=[];"
    };
    var bZi = function (es) {
        if (!es[1])throw"bad include statement: " + es.join(" ");
        return'if (typeof inline == "function"){__OUT.push(inline('
    };
    var baT = function (lp, es) {
        Ac(es.slice(1).join(" "));
        return lp
    };
    var bZg = function (es) {
        return baT("if(", es)
    };
    var bZd = function (es) {
        return baT("}else if(", es)
    };
    var bZa = function (es) {
        return baT("var ", es)
    };
    cX = {blk: /^\{(cdata|minify|eval)/i, tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include", def: {"if": {pfix: bZg, sfix: "){", pmin: 1}, "else": {pfix: "}else{"}, elseif: {pfix: bZd, sfix: "){", pdft: "true"}, "/if": {pfix: "}"}, "for": {pfix: bZD, pmin: 3}, forelse: {pfix: bZC}, "/for": {pfix: bZB}, list: {pfix: bZA, pmin: 3}, "/list": {pfix: "};"}, "break": {pfix: "break;"}, "var": {pfix: bZa, sfix: ";"}, macro: {pfix: bZw}, "/macro": {pfix: 'return __OUT.join("");};'}, trim: {pfix: function () {
        GN = !0
    }}, "/trim": {pfix: function () {
        GN = null
    }}, inline: {pfix: bZi, pmin: 1, sfix: "));}"}}, ext: {seed: function (lp) {
        return(lp || "") + "" + gJ
    }, "default": function (bD, oI) {
        return bD || oI
    }}};
    var bYT = function () {
        var bYS = /\\([\{\}])/g;
        return function (cm, jo) {
            cm = cm.replace(bYS, "$1");
            var es = cm.slice(1, -1).split(bnJ), cj = cX.def[es[0]];
            if (!cj) {
                QP(cm, jo);
                return
            }
            if (!!cj.pmin && cj.pmin >= es.length)throw"Statement needs more parameters:" + cm;
            jo.push(!!cj.pfix && typeof cj.pfix != "string" ? cj.pfix(es) : cj.pfix || "");
            if (!!cj.sfix) {
                if (es.length <= 1) {
                    if (!!cj.pdft)jo.push(cj.pdft)
                } else {
                    for (var i = 1, l = es.length; i < l; i++) {
                        if (i > 1)jo.push(" ");
                        jo.push(es[i])
                    }
                }
                jo.push(cj.sfix)
            }
        }
    }();
    var bnW = function (EU, jo) {
        if (!EU || !EU.length)return;
        if (EU.length == 1) {
            var bci = EU.pop();
            Ac(bci);
            jo.push(bci == "" ? '""' : bci);
            return
        }
        var bcz = EU.pop().split(":");
        jo.push("__MDF['" + bcz.shift() + "'](");
        bnW(EU, jo);
        if (bcz.length > 0) {
            var cn = bcz.join(":");
            Ac(cn);
            jo.push("," + cn)
        }
        jo.push(")")
    };
    var QP = function (cm, jo) {
        if (!cm)return;
        var uP = cm.split("\n");
        if (!uP || !uP.length)return;
        for (var i = 0, l = uP.length, iz; i < l; i++) {
            iz = uP[i];
            if (!!GN) {
                iz = iz.trim();
                if (!iz)continue
            }
            bYP(iz, jo);
            if (!!GN && i < l - 1)jo.push("__OUT.push('\\n');")
        }
    };
    var bYP = function () {
        var bYO = /\|\|/g, bYN = /#@@#/g;
        return function (cm, jo) {
            var Iz = "}", IB = -1, cF = cm.length, uE, kp, EY, QH, IE;
            while (IB + Iz.length < cF) {
                uE = "${";
                kp = "}";
                EY = cm.indexOf(uE, IB + Iz.length);
                if (EY < 0)break;
                if (cm.charAt(EY + 2) == "%") {
                    uE = "${%";
                    kp = "%}"
                }
                QH = cm.indexOf(kp, EY + uE.length);
                if (QH < 0)break;
                QE(cm.substring(IB + Iz.length, EY), jo);
                IE = cm.substring(EY + uE.length, QH).replace(bYO, "#@@#").split("|");
                for (var i = 0, l = IE.length; i < l; IE[i] = IE[i].replace(bYN, "||"), i++);
                jo.push("__OUT.push(");
                bnW(IE, jo);
                jo.push(");");
                Iz = kp;
                IB = QH
            }
            QE(cm.substring(IB + Iz.length), jo)
        }
    }();
    var QE = function () {
        var cE = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var bYM = function (cm) {
            return(cm || "").replace(cE.r, function ($1) {
                return cE[$1] || $1
            })
        };
        return function (cm, jo) {
            if (!cm)return;
            jo.push("__OUT.push('" + bYM(cm) + "');")
        }
    }();
    var bYF = function () {
        var bYE = /\t/g, bYD = /\n/g, bYC = /\r\n?/g;
        var bof = function (cm, uE) {
            var bv = cm.indexOf("}", uE + 1);
            while (cm.charAt(bv - 1) == "\\") {
                bv = cm.indexOf("}", bv + 1)
            }
            return bv
        };
        var bYA = function () {
            var cH = [], bYz = arguments[0];
            for (var x in bYz) {
                x = (x || "").trim();
                if (!x)continue;
                cH.push(x + "=$v('" + x + "')")
            }
            return cH.length > 0 ? "var " + cH.join(",") + ";" : ""
        };
        return function (cm) {
            qI = {};
            cm = cm.replace(bYC, "\n").replace(bYE, "    ");
            var qU = ["if(!__CTX) return '';", ""];
            qU.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qU.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qU.push("__OUT=[];");
            var zM = -1, cF = cm.length;
            var mx, Fj, Jh, Jj, xy, Jk, bib, Jo;
            while (zM + 1 < cF) {
                mx = zM;
                mx = cm.indexOf("{", mx + 1);
                while (mx >= 0) {
                    Fj = bof(cm, mx);
                    Jh = cm.substring(mx, Fj);
                    Jj = Jh.match(cX.blk);
                    if (!!Jj) {
                        xy = Jj[1].length + 1;
                        Jk = cm.indexOf("}", mx + xy);
                        if (Jk >= 0) {
                            bib = Jk - mx - xy <= 0 ? "{/" + Jj[1] + "}" : Jh.substr(xy + 1);
                            xy = cm.indexOf(bib, Jk + 1);
                            if (xy >= 0) {
                                QP(cm.substring(zM + 1, mx), qU);
                                Jo = cm.substring(Jk + 1, xy);
                                switch (Jj[1]) {
                                    case"cdata":
                                        QE(Jo, qU);
                                        break;
                                    case"minify":
                                        QE(Jo.replace(bYD, " ").replace(bnJ, " "), qU);
                                        break;
                                    case"eval":
                                        if (!!Jo)qU.push("__OUT.push((function(){" + Jo + "})());");
                                        break
                                }
                                mx = zM = xy + bib.length - 1
                            }
                        }
                    } else if (cm.charAt(mx - 1) != "$" && cm.charAt(mx - 1) != "\\" && Jh.substr(Jh.charAt(1) == "/" ? 2 : 1).search(cX.tag) == 0) {
                        break
                    }
                    mx = cm.indexOf("{", mx + 1)
                }
                if (mx < 0)break;
                Fj = bof(cm, mx);
                if (Fj < 0)break;
                QP(cm.substring(zM + 1, mx), qU);
                bYT(cm.substring(mx, Fj + 1), qU);
                zM = Fj
            }
            QP(cm.substring(zM + 1), qU);
            qU.push(';return __OUT.join("");');
            qU[1] = bYA(qI);
            qI = null;
            return new Function("__CTX", "__MDF", qU.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gJ
    };
    TrimPath.merge = function () {
        var Js = {};
        TrimPath.dump = function () {
            return{func: Js, text: Ic}
        };
        return function (fB, bl, lE) {
            try {
                bl = bl || {};
                if (!Js[fB] && !Ic[fB])return"";
                if (!Js[fB]) {
                    Js[fB] = bYF(Ic[fB]);
                    delete Ic[fB]
                }
                if (!!lE) {
                    for (var x in cX.ext)if (!lE[x])lE[x] = cX.ext[x]
                }
                return Js[fB](bl, lE || cX.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var bYw = +(new Date);
        return function (cm, fB) {
            if (!cm)return"";
            fB = fB || "ck_" + bYw++;
            Ic[fB] = cm;
            return fB
        }
    }()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bm = bd("nej.u"), ib = {};
    bb.Fq = TrimPath.seed;
    bb.dg = function () {
        var bog = function (bB) {
            return!bb.jZ ? "" : bb.jZ(bB)
        };
        return function (fB, bl, lE) {
            bl = bl || {};
            bl.inline = bog;
            lE = NEJ.X(NEJ.X({}, ib), lE);
            lE.rand = bm.nY;
            lE.format = bm.nc;
            lE.escape = bm.fd;
            lE.inline = bog;
            return TrimPath.merge(fB, bl, lE)
        }
    }();
    bb.gs = function (cm, bYm) {
        if (!cm)return"";
        var fB, bC = bb.bG(cm);
        if (!!bC) {
            fB = bC.id;
            cm = bC.value || bC.innerText;
            if (!bYm)bb.dW(bC)
        }
        return TrimPath.parse(cm, fB)
    };
    bb.fR = function (cQ, fB, bl, lE) {
        cQ = bb.bG(cQ);
        if (!!cQ)cQ.innerHTML = bb.dg(fB, bl, lE);
        return this
    };
    bb.cdJ = function (cE) {
        NEJ.X(ib, cE)
    };
    bd("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var ej = NEJ.P("nej.p"), bM = window, kN = ej.Hj, bpd = kN.ipad || kN.iphone;
    if (!bpd && !!bM.requestAnimationFrame && !!bM.cancelRequestAnimationFrame)return;
    var lp = ej.ek.prefix.pro;
    if (!bpd && !!bM[lp + "RequestAnimationFrame"] && !!bM[lp + "CancelRequestAnimationFrame"]) {
        bM.requestAnimationFrame = bM[lp + "RequestAnimationFrame"];
        bM.cancelRequestAnimationFrame = bM[lp + "CancelRequestAnimationFrame"];
        return
    }
    var PC = kN.desktop ? 80 : kN.ios ? 50 : 30;
    bM.requestAnimationFrame = function (gP) {
        return window.setTimeout(function () {
            try {
                gP(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / PC)
    };
    bM.cancelRequestAnimationFrame = function (bB) {
        window.clearTimeout(bB);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, bm = bd("nej.u"), bb = bd("nej.e"), bj = bd("nej.v"), cf = bd("nej.h"), dY = bd("nej.x"), Pz = bd("nej.ut.j.cb"), iq;
    if (!!bb.rW)return;
    bb.rW = dY.rW = function () {
        var ce = {}, gK = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (be) {
            var bB = decodeURIComponent(be.target), bu = be.type.toLowerCase();
            var fr = ce[bB + "-on" + bu];
            if (!!fr) {
                try {
                    fr(be)
                } catch (e) {
                }
                return
            }
            var dU = ce[bB + "-tgt"];
            if (!!dU && gK.test(bu)) {
                bpi(dU, be)
            }
        };
        var bfm = function (bf) {
            var cQ = bb.bG(bf.parent) || document.body, eN = bb.dg(iq, bf);
            cQ.insertAdjacentHTML(!bf.hidden ? "beforeEnd" : "afterBegin", eN)
        };
        var bpi = function (bB, be) {
            var bu = be.type.toLowerCase();
            requestAnimationFrame(function () {
                bj.bK(bB, bu)
            })
        };
        var bWY = function (hQ) {
            return!!hQ && !!hQ.inited && !!hQ.inited()
        };
        var KE = function (bB) {
            var cH = [document.embeds[bB], bb.bG(bB), document[bB], window[bB]], bv = bm.fo(cH, bWY), hQ = cH[bv], bgf = bB + "-count";
            ce[bgf]++;
            if (!!hQ || ce[bgf] > 100) {
                ce[bB](hQ);
                delete ce[bB];
                delete ce[bgf];
                return
            }
            window.setTimeout(KE.bi(null, bB), 300)
        };
        var bWV = function (bf) {
            var bB = bf.id, jF = bf.params;
            if (!jF) {
                jF = {};
                bf.params = jF
            }
            var qI = jF.flashvars || "";
            qI += (!qI ? "" : "&") + ("id=" + bB);
            if (!bf.hidden && (!!bf.target || cf.TL(jF.wmode))) {
                var kZ = bb.lr(bf.target) || bb.lr(bf.parent), bpl = bm.Ro();
                Pz["cb" + bpl] = bpi.bi(null, kZ);
                qI += "&onevent=nej.ut.j.cb.cb" + bpl;
                ce[bB + "-tgt"] = kZ
            }
            jF.flashvars = qI;
            bm.fo(bf, function (bD, bN) {
                if (bm.hC(bD) && bN != "onready") {
                    ce[bB + "-" + bN] = bD
                }
            })
        };
        return function (bf) {
            bf = NEJ.X({}, bf);
            if (!bf.src)return;
            var bB = "flash_" + bm.Ro();
            bf.id = bB;
            bWV(bf);
            bfm(bf);
            if (!bf.onready)return;
            ce[bB] = bf.onready;
            ce[bB + "-count"] = 0;
            KE(bB)
        }
    }();
    iq = bb.gs('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    dY.isChange = !0
})();
(function () {
    var bd = NEJ.P, jf = bd("nej.c"), bb = bd("nej.e"), bm = bd("nej.u"), bM = bd("nej.ut.j"), Pz = bd("nej.ut.j.cb"), ce = {}, gJ = +(new Date), bgU;
    if (!!bM.bgW)return;
    Pz["ld" + gJ] = function (bN, ew) {
        var jH = ce[bN];
        if (!jH)return;
        delete ce[bN];
        jH.tu({status: 200, result: ew})
    };
    Pz["er" + gJ] = function (bN, gf) {
        var jH = ce[bN];
        if (!jH)return;
        delete ce[bN];
        jH.tu({status: gf || 0})
    };
    bM.bgW = NEJ.C();
    bgU = bM.bgW.bU(bM.FF);
    bgU.dJ = function (bf) {
        var hQ = ce.flash;
        if (bm.hh(hQ)) {
            hQ.push(this.dJ.bi(this, bf));
            return
        }
        if (!hQ) {
            ce.flash = [this.dJ.bi(this, bf)];
            bb.rW({hidden: !0, src: jf.bG("ajax.swf"), onready: function (hQ) {
                if (!hQ)return;
                var bk = ce.flash;
                ce.flash = hQ;
                bm.nt(bk, function (fr) {
                    try {
                        fr()
                    } catch (e) {
                    }
                })
            }});
            return
        }
        this.xu = "swf-" + bm.nY();
        ce[this.xu] = this;
        var bl = NEJ.EX({url: "", data: null, method: "GET"}, bf.request);
        bl.key = this.xu;
        bl.headers = bf.headers;
        bl.onerror = "nej.ut.j.cb.er" + gJ;
        bl.onloaded = "nej.ut.j.cb.ld" + gJ;
        var bpq = jf.bFS(bl.url);
        if (!!bpq)bl.policyURL = bpq;
        hQ.request(bl)
    };
    bgU.rV = function () {
        delete ce[this.xu];
        this.tu({status: 0});
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cf = bd("nej.h");
    cf.bpv = function () {
        var eh = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (iM) {
            iM = iM || "";
            if (eh.test(iM))return RegExp.$1;
            return"*"
        }
    }();
    cf.bhF = function (bl) {
        return bl
    };
    cf.bhH = function (bpw, bf) {
        if (!bpw.postMessage)return;
        bf = bf || cg;
        bpw.postMessage(cf.bhF(bf.data), cf.bpv(bf.origin))
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bM = bd("nej.ut"), bc;
    if (!!bM.gN)return;
    bM.gN = NEJ.C();
    bc = bM.gN.bU(bM.dZ);
    bc.dv = function () {
        this.bS = {};
        this.dC()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.Jy = bb.bG(bf.element) || window;
        this.boy(bf.event);
        this.bYh();
        this.bK("oninit")
    };
    bc.cR = function () {
        var Bu = function (bD, bN, cE) {
            if (!bm.hh(bD)) {
                bm.NB(this.Jy, bN)
            }
            delete cE[bN]
        };
        return function () {
            this.cV();
            bm.fo(this.bS, Bu, this);
            delete this.Jy
        }
    }();
    bc.Qi = function (bC, bu) {
        bC = bb.bG(bC);
        return bC == this.Jy && (!bu || !!this.bS["on" + bu])
    };
    bc.boy = function (be) {
        if (bm.gH(be)) {
            var bX = "on" + be;
            if (!this.bS[bX]) {
                this.bS[bX] = this.bYe.bi(this, be)
            }
            this.boB(be);
            return
        }
        if (bm.hh(be)) {
            bm.cv(be, this.boy, this)
        }
    };
    bc.boB = function (bu) {
        var be = "on" + bu, fr = this.Jy[be], boD = this.bS[be];
        if (fr != boD) {
            this.Qf(bu);
            if (!!fr && fr != cC)this.boE(bu, fr);
            this.Jy[be] = boD
        }
    };
    bc.boE = function (bu, fr, bXS) {
        var bk = this.bS[bu];
        if (!bk) {
            bk = [];
            this.bS[bu] = bk
        }
        if (bm.hC(fr)) {
            !bXS ? bk.push(fr) : bk.unshift(fr)
        }
    };
    bc.Qf = function (bu, fr) {
        var bk = this.bS[bu];
        if (!bk || !bk.length)return;
        if (!fr) {
            delete this.bS[bu];
            return
        }
        bm.nt(bk, function (bD, bv, Fv) {
            if (fr === bD) {
                Fv.splice(bv, 1);
                return!0
            }
        })
    };
    bc.bYe = function (bu, be) {
        be = be || {noargs: !0};
        be.type = bu;
        this.bK("ondispatch", be);
        if (!!be.stopped)return;
        bm.cv(this.bS[bu], function (fr) {
            try {
                fr(be)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    bc.bYh = function () {
        var Xl = function (be) {
            var cn = be.args, bu = cn[1].toLowerCase();
            if (this.Qi(cn[0], bu)) {
                be.stopped = !0;
                this.boB(bu);
                this.boE(bu, cn[2], cn[3]);
                this.bK("oneventadd", {type: bu, listener: cn[2]})
            }
        };
        var bXR = function (be) {
            var cn = be.args, bu = cn[1].toLowerCase();
            if (this.Qi(cn[0], bu)) {
                be.stopped = !0;
                this.Qf(bu, cn[2])
            }
        };
        var YR = function (be) {
            var cn = be.args, bu = (cn[1] || "").toLowerCase();
            if (this.Qi(cn[0])) {
                if (!!bu) {
                    this.Qf(bu);
                    return
                }
                bm.fo(this.bS, function (bD, bN) {
                    if (bm.hh(bD)) {
                        this.Qf(bN)
                    }
                }, this)
            }
        };
        var bXQ = function (be) {
            var cn = be.args, bu = cn[1].toLowerCase();
            if (this.Qi(cn[0], bu)) {
                be.stopped = !0;
                cn[0]["on" + bu].apply(cn[0], cn.slice(2))
            }
        };
        return function () {
            if (!!this.bXP)return;
            this.bXP = true;
            bj.bt = bj.bt.fj(Xl.bi(this));
            bj.oz = bj.oz.fj(bXR.bi(this));
            bj.ky = bj.ky.fj(YR.bi(this));
            bj.bK = bj.bK.fj(bXQ.bi(this))
        }
    }()
})();
(function () {
    var bd = NEJ.P, bM = bd("nej.p"), cf = bd("nej.h"), bm = bd("nej.u"), bj = bd("nej.v"), bI = bd("nej.ut");
    if (bM.ns.trident)return;
    if (!!window.postMessage) {
        cf.bhF = cf.bhF.fj(function (be) {
            be.stopped = !0;
            be.value = JSON.stringify(be.args[0])
        });
        return
    }
    var bN = "MSG|", jU = [];
    var bWO = function () {
        var bX = unescape(window.name || "").trim();
        if (!bX || bX.indexOf(bN) != 0)return;
        window.name = "";
        var bp = bm.bnq(bX.replace(bN, ""), "|"), iM = (bp.origin || "").toLowerCase();
        if (!!iM && iM != "*" && location.href.toLowerCase().indexOf(iM) != 0)return;
        bj.bK(window, "message", {data: JSON.parse(bp.data || "null"), source: window.frames[bp.self] || bp.self, origin: cf.bpv(bp.ref || document.referrer)})
    };
    var bWG = function () {
        var Pu;
        var bWF = function (cE, bv, bk) {
            if (bm.eg(Pu, cE.w) < 0) {
                Pu.push(cE.w);
                bk.splice(bv, 1);
                cE.w.name = cE.d
            }
        };
        return function () {
            Pu = [];
            bm.nt(jU, bWF);
            Pu = null
        }
    }();
    cf.bhH = function () {
        var bWD = function (bl) {
            var bp = {};
            bl = bl || cg;
            bp.origin = bl.origin || "";
            bp.ref = location.href;
            bp.self = bl.source;
            bp.data = JSON.stringify(bl.data);
            return bN + bm.BW(bp, "|", !0)
        };
        return cf.bhH.fj(function (be) {
            be.stopped = !0;
            var cn = be.args;
            jU.unshift({w: cn[0], d: escape(bWD(cn[1]))})
        })
    }();
    bI.gN.bF({element: window, event: "message"});
    window.setInterval(bWG, 100);
    window.setInterval(bWO, 20)
})();
(function () {
    var bd = NEJ.P, cf = bd("nej.h"), bb = bd("nej.e"), bA = bd("nej.j");
    bA.bWC = function () {
        var jb = window.name || "_parent", bWA = {hs: window.top, jb: window, cQ: window.parent};
        return function (dU, bf) {
            if (typeof dU == "string") {
                dU = bWA[dU] || window.frames[dU];
                if (!dU)return this
            }
            var bl = NEJ.X({origin: "*", source: jb}, bf);
            cf.bhH(dU, bl);
            return this
        }
    }()
})();
(function () {
    var bd = NEJ.P, jf = bd("nej.c"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bM = bd("nej.ut.j"), ce = {}, Pp;
    if (!!bM.bjo)return;
    bM.bjo = NEJ.C();
    Pp = bM.bjo.bU(bM.FF);
    Pp.dv = function () {
        var fI = "NEJ-AJAX-DATA:", zU = !1;
        var bjs = function (be) {
            var bl = be.data;
            if (bl.indexOf(fI) != 0)return;
            bl = JSON.parse(bl.replace(fI, ""));
            var jH = ce[bl.key];
            if (!jH)return;
            delete ce[bl.key];
            bl.result = decodeURIComponent(bl.result || "");
            jH.tu(bl)
        };
        var bjA = function () {
            if (!zU) {
                zU = !0;
                bj.bt(window, "message", bjs)
            }
        };
        return function () {
            this.dC();
            bjA()
        }
    }();
    Pp.dJ = function (bf) {
        var gy = bf.request, jH = jf.bFH(gy.url), uz = ce[jH];
        if (bm.hh(uz)) {
            uz.push(this.dJ.bi(this, bf));
            return
        }
        if (!uz) {
            ce[jH] = [this.dJ.bi(this, bf)];
            bb.Tp({src: jH, visible: !1, onload: function (be) {
                var bk = ce[jH];
                ce[jH] = bj.bY(be).contentWindow;
                bm.nt(bk, function (fr) {
                    try {
                        fr()
                    } catch (e) {
                    }
                })
            }});
            return
        }
        this.xu = "frm-" + bm.nY();
        ce[this.xu] = this;
        var bl = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, gy);
        bl.key = this.xu;
        bl.headers = bf.headers;
        bA.bWC(ce[jH], {data: bl})
    };
    Pp.rV = function () {
        delete ce[this.xu];
        this.tu({status: 0});
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, fm = bd("nej.g"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bM = bd("nej.ut.j"), ce = {}, FO;
    if (!!bM.Vg)return;
    bM.Vg = NEJ.C();
    FO = bM.Vg.bU(bM.FF);
    FO.dv = function () {
        var fI = "NEJ-UPLOAD-RESULT:", zU = !1;
        var bjs = function (be) {
            var bl = be.data;
            if (bl.indexOf(fI) != 0)return;
            bl = JSON.parse(bl.replace(fI, ""));
            var jH = ce[bl.key];
            if (!jH)return;
            delete ce[bl.key];
            jH.tu(decodeURIComponent(bl.result))
        };
        var bjA = function () {
            if (!zU) {
                zU = !0;
                bj.bt(window, "message", bjs)
            }
        };
        return function () {
            this.dC();
            bjA()
        }
    }();
    FO.cR = function () {
        this.cV();
        bb.dW(this.Vj);
        delete this.Vj;
        window.clearTimeout(this.gl);
        delete this.gl
    };
    FO.tu = function (ew) {
        var bV;
        try {
            bV = JSON.parse(ew);
            this.bK("onload", bV)
        } catch (e) {
            this.bK("onerror", {code: fm.bIQ, message: ew})
        }
    };
    FO.dJ = function () {
        var bWz = function () {
            var qe, ew;
            try {
                var qe = this.Vj.contentWindow.document.body, ew = qe.innerText || qe.textContent
            } catch (e) {
                return
            }
            this.tu(ew)
        };
        var Vy = function (bZ, fC, qw) {
            bA.cG(bZ, {type: "json", method: "POST", cookie: qw, mode: parseInt(fC) || 0, onload: function (bl) {
                if (!this.gl)return;
                this.bK("onuploading", bl);
                this.gl = window.setTimeout(Vy.bi(this, bZ, fC, qw), 1e3)
            }.bi(this), onerror: function (dc) {
                if (!this.gl)return;
                this.gl = window.setTimeout(Vy.bi(this, bZ, fC, qw), 1e3)
            }.bi(this)})
        };
        return function (bf) {
            var gy = bf.request, vf = bf.headers, fF = gy.data, bX = "fom-" + bm.nY();
            ce[bX] = this;
            fF.target = bX;
            fF.method = "POST";
            fF.enctype = fm.Ca;
            fF.encoding = fm.Ca;
            var bZ = fF.action || "", mb = bZ.indexOf("?") <= 0 ? "?" : "&";
            fF.action = bZ + mb + "_proxy_=form";
            this.Vj = bb.Tp({name: bX, onload: function (be) {
                var uz = bj.bY(be);
                bj.bt(uz, "load", bWz.bi(this));
                fF.submit();
                var bpF = (fF.nej_query || cg).value;
                if (!bpF)return;
                var fC = (fF.nej_mode || cg).value, qw = (fF.nej_cookie || cg).value == "true";
                this.gl = window.setTimeout(Vy.bi(this, bpF, fC, qw), 100)
            }.bi(this)})
        }
    }();
    FO.rV = function () {
        this.bK("onerror", {code: fm.bJa, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cf = bd("nej.h"), bM = bd("nej.ut.j");
    cf.bdR = function () {
        return new XMLHttpRequest
    };
    cf.VI = function (fC, Ph, bf) {
        var cE = !!Ph ? {2: bM.Vg} : {2: bM.bjo, 3: bM.bgW};
        return(cE[fC] || bM.PE).bF(bf)
    }
})();
(function () {
    var bd = NEJ.P, bM = bd("nej.p"), cf = bd("nej.h");
    if (bM.ns.trident)return;
    cf.bdR = function () {
        var IJ = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var bWu = function () {
            for (var i = 0, l = IJ.length; i < l; i++) {
                try {
                    return new ActiveXObject(IJ[i])
                } catch (e) {
                }
            }
            return null
        };
        return cf.bdR.fj(function (be) {
            if (!!window.XMLHttpRequest)return;
            be.stopped = !0;
            be.value = bWu()
        })
    }();
    cf.VI = function () {
        var CM = {0: 2, 1: 3};
        return cf.VI.fj(function (be) {
            var cn = be.args, fC = cn[0] || 0;
            cn[0] = !!cn[1] ? 2 : CM[fC] || fC
        })
    }()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, cf = bd("nej.h"), fm = bd("nej.g"), bm = bd("nej.u"), bA = bd("nej.j"), bM = bd("nej.ut.j"), Lf = {}, DC = cC;
    bA.rV = function (fB) {
        var ce = Lf[fB];
        if (!ce)return this;
        ce.req.rV();
        return this
    };
    bA.cdR = function (eV) {
        DC = eV || cC;
        return this
    };
    bA.cG = function () {
        var jq = (location.protocol + "//" + location.host).toLowerCase();
        var bWs = function (bZ) {
            var iM = bm.cbb(bZ);
            return!!iM && iM != jq
        };
        var bWr = function (vf) {
            return(vf || cg)[fm.yY] == fm.Ca
        };
        var bWl = function (bf) {
            var Ph = bWr(bf.headers);
            if (!bWs(bf.url) && !Ph)return bM.PE.bF(bf);
            return cf.VI(bf.mode, Ph, bf)
        };
        var Bu = function (fB) {
            var ce = Lf[fB];
            if (!ce)return;
            if (!!ce.req)ce.req.bW();
            delete Lf[fB]
        };
        var bpW = function (fB, bu) {
            var ce = Lf[fB];
            if (!ce)return;
            Bu(fB);
            try {
                var be = {type: bu, result: arguments[2]};
                DC(be);
                if (!be.stopped)(ce[bu] || cC)(be.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var Ln = function (fB, bl) {
            bpW(fB, "onload", bl)
        };
        var WF = function (fB, dc) {
            bpW(fB, "onerror", dc)
        };
        return function (bZ, bf) {
            bf = bf || {};
            var fB = bm.nY(), ce = {onload: bf.onload || cC, onerror: bf.onerror || cC};
            Lf[fB] = ce;
            bf.onload = Ln.bi(null, fB);
            bf.onerror = WF.bi(null, fB);
            if (!!bf.query) {
                var mb = bZ.indexOf("?") < 0 ? "?" : "&", cN = bf.query;
                if (bm.qj(cN))cN = bm.eX(cN);
                if (!!cN)bZ += mb + cN
            }
            bf.url = bZ;
            ce.req = bWl(bf);
            ce.req.bcO(bf.data);
            return fB
        }
    }();
    bA.jT = function (fF, bf) {
        var hl = {mode: 0, type: "json", query: null, cookie: !1, headers: {}, onload: null, onerror: null, onuploading: null, onbeforerequest: null};
        NEJ.EX(hl, bf);
        hl.data = fF;
        hl.method = "POST";
        hl.timeout = 0;
        hl.headers[fm.yY] = fm.Ca;
        return bA.cG(fF.action, hl)
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, fm = bd("nej.g"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bM = bd("nej.ut.j"), lW, zn = 6e4;
    if (!!bM.JN)return;
    bM.JN = NEJ.C();
    lW = bM.JN.bU(bI.dZ);
    lW.dv = function () {
        this.dC();
        this.JO = {onerror: this.bXO.bi(this), onloaded: this.bXL.bi(this)};
        if (!this.constructor.bS)this.constructor.bS = {loaded: {}}
    };
    lW.cz = function (bf) {
        this.cB(bf);
        this.Fz = bf.version;
        this.XT = bf.timeout;
        this.JO.version = this.Fz;
        this.JO.timeout = this.XT
    };
    lW.boF = function (bN) {
        delete this.constructor.bS[bN]
    };
    lW.yB = function (bN) {
        return this.constructor.bS[bN]
    };
    lW.boI = function (bN, bl) {
        this.constructor.bS[bN] = bl
    };
    lW.PW = cC;
    lW.boL = function (gy) {
        bj.ky(gy)
    };
    lW.YH = function (gy) {
        gy.src = this.lL;
        document.head.appendChild(gy)
    };
    lW.yp = function () {
        var ce = this.yB(this.lL);
        if (!ce)return;
        window.clearTimeout(ce.timer);
        this.boL(ce.request);
        delete ce.bind;
        delete ce.timer;
        delete ce.request;
        this.boF(this.lL);
        this.yB("loaded")[this.lL] = !0
    };
    lW.PU = function (bX) {
        var ce = this.yB(this.lL);
        if (!ce)return;
        var bk = ce.bind;
        this.yp();
        if (!!bk && bk.length > 0) {
            var dP;
            while (bk.length) {
                dP = bk.shift();
                try {
                    dP.bK(bX, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                dP.bW()
            }
        }
    };
    lW.hi = function (dc) {
        this.PU("onerror", dc)
    };
    lW.boM = function () {
        this.PU("onloaded")
    };
    lW.bXz = function (bZ) {
        this.constructor.bF(this.JO).PT(bZ)
    };
    lW.boN = function (dc) {
        var ce = this.yB(this.uS);
        if (!ce)return;
        if (!!dc)ce.error++;
        ce.loaded++;
        if (ce.loaded < ce.total)return;
        this.boF(this.uS);
        this.bK(ce.error > 0 ? "onerror" : "onloaded")
    };
    lW.bXO = function (dc) {
        this.boN(!0)
    };
    lW.bXL = function () {
        this.boN()
    };
    lW.PT = function (bZ) {
        bZ = bm.bdO(bZ);
        if (!bZ) {
            this.bK("onerror", {code: fm.beh, message: "请指定要载入的资源地址！"});
            return this
        }
        this.lL = bZ;
        if (!!this.Fz)this.lL += (this.lL.indexOf("?") < 0 ? "?" : "&") + this.Fz;
        if (this.yB("loaded")[this.lL]) {
            try {
                this.bK("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.bW();
            return this
        }
        var ce = this.yB(this.lL), gy;
        if (!!ce) {
            ce.bind.unshift(this);
            ce.timer = window.clearTimeout(ce.timer)
        } else {
            gy = this.PW();
            ce = {request: gy, bind: [this]};
            this.boI(this.lL, ce);
            bj.bt(gy, "load", this.boM.bi(this));
            bj.bt(gy, "error", this.hi.bi(this, {code: fm.Xi, message: "无法加载指定资源文件[" + this.lL + "]！"}))
        }
        if (this.XT != 0)ce.timer = window.setTimeout(this.hi.bi(this, {code: fm.bku, message: "指定资源文件[" + this.lL + "]载入超时！"}), this.XT || zn);
        if (!!gy)this.YH(gy);
        this.bK("onloading");
        return this
    };
    lW.boV = function (bk) {
        if (!bk || !bk.length) {
            this.bK("onerror", {code: fm.beh, message: "请指定要载入的资源队列！"});
            return this
        }
        this.uS = bm.nY();
        var ce = {error: 0, loaded: 0, total: bk.length};
        this.boI(this.uS, ce);
        for (var i = 0, l = bk.length; i < l; i++) {
            if (!bk[i]) {
                ce.total--;
                continue
            }
            this.bXz(bk[i])
        }
        this.bK("onloading");
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), cf = bd("nej.h"), bM = bd("nej.ut.j"), Kc;
    if (!!bM.ZH)return;
    bM.ZH = NEJ.C();
    Kc = bM.ZH.bU(bM.JN);
    Kc.PW = function () {
        var fU = bb.ef("iframe");
        fU.width = 0;
        fU.height = 0;
        fU.style.display = "none";
        return fU
    };
    Kc.YH = function (gy) {
        gy.src = this.lL;
        document.body.appendChild(gy)
    };
    Kc.hi = function (dc) {
        var fU = (this.yB(this.lL) || cg).request;
        this.PU("onerror", dc);
        cf.TH(fU)
    };
    Kc.boM = function () {
        var qe = null, fU = (this.yB(this.lL) || cg).request;
        try {
            qe = fU.contentWindow.document.body
        } catch (ex) {
        }
        this.PU("onloaded", qe);
        cf.TH(fU)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bM = bd("nej.ut.j"), ZJ;
    if (!!bM.PR)return;
    bM.PR = NEJ.C();
    ZJ = bM.PR.bU(bM.JN);
    ZJ.PW = function () {
        return bb.ef("link")
    };
    ZJ.YH = function (gy) {
        gy.href = this.lL;
        document.head.appendChild(gy)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bM = bd("nej.ut.j"), PQ;
    if (!!bM.PO)return;
    bM.PO = NEJ.C();
    PQ = bM.PO.bU(bM.JN);
    PQ.cz = function (bf) {
        this.cB(bf);
        this.boW = bf.async;
        this.baD = bf.charset;
        this.JO.async = !1;
        this.JO.charset = this.baD
    };
    PQ.PW = function () {
        var gy = bb.ef("script");
        if (this.boW != null)gy.async = !!this.boW;
        if (this.baD != null)gy.charset = this.baD;
        return gy
    };
    PQ.boL = function (gy) {
        bb.dW(gy)
    }
})();
(function () {
    var bd = NEJ.P, bA = bd("nej.j"), bM = bd("nej.ut.j");
    bA.bXn = function (bZ, bf) {
        bM.PO.bF(bf).PT(bZ);
        return this
    };
    bA.bXl = function (bk, bf) {
        bM.PO.bF(bf).boV(bk);
        return this
    };
    bA.cdP = function (bZ, bf) {
        bM.PR.bF(bf).PT(bZ);
        return this
    };
    bA.bXj = function (bk, bf) {
        bM.PR.bF(bf).boV(bk);
        return this
    };
    bA.bpc = function (bZ, bf) {
        bM.ZH.bF(bf).PT(bZ);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bI = bd("nej.ut"), ce = {}, sa = +(new Date) + "-";
    bb.dV = function () {
        var dE = 0;
        var Lp = function () {
            if (dE > 0)return;
            dE = 0;
            bj.bK(document, "templateready");
            bj.ky(document, "templateready")
        };
        var Pb = function (gw, bf) {
            var eR = bb.bz(gw, "src");
            if (!eR)return;
            bf = bf || cg;
            var gg = bf.root;
            if (!gg) {
                gg = gw.ownerDocument.location.href
            } else {
                gg = bm.bdO(gg)
            }
            eR = eR.split(",");
            bm.cv(eR, function (bD, bv, bk) {
                bk[bv] = bm.bdO(bD, gg)
            });
            return eR
        };
        var bWf = function (gw, bf) {
            if (!gw)return;
            var eR = Pb(gw, bf);
            if (!!eR)bA.bXj(eR, {version: bb.bz(gw, "version")});
            bb.bmF(gw.value)
        };
        var bWe = function (bD) {
            dE--;
            bb.bmI(bD);
            Lp()
        };
        var bWd = function (gw, bf) {
            if (!gw)return;
            var eR = Pb(gw, bf), gu = gw.value;
            if (!!eR) {
                dE++;
                var bf = {version: bb.bz(gw, "version"), onloaded: bWe.bi(null, gu)};
                window.setTimeout(bA.bXl.bi(bA, eR, bf), 0);
                return
            }
            bb.bmI(gu)
        };
        var bWa = function (qe) {
            dE--;
            bb.dV(qe);
            Lp()
        };
        var bVZ = function (gw, bf) {
            if (!gw)return;
            var eR = Pb(gw, bf)[0];
            if (!!eR) {
                dE++;
                var bf = {version: bb.bz(gw, "version"), onloaded: bWa};
                window.setTimeout(bA.bpc.bi(bA, eR, bf), 0)
            }
        };
        var bVX = function (bB, ew) {
            dE--;
            bb.FZ(bB, ew || "");
            Lp()
        };
        var bVW = function (gw, bf) {
            if (!gw || !gw.id)return;
            var bB = gw.id, eR = Pb(gw, bf)[0];
            if (!!eR) {
                dE++;
                var bZ = eR + (eR.indexOf("?") < 0 ? "?" : "&") + (bb.bz(gw, "version") || ""), bf = {type: "text", method: "GET", onload: bVX.bi(null, bB)};
                window.setTimeout(bA.cG.bi(bA, bZ, bf), 0)
            }
        };
        var bVU = function (bh, bf) {
            var bu = bh.name.toLowerCase();
            switch (bu) {
                case"jst":
                    bb.gs(bh, !0);
                    return;
                case"txt":
                    bb.FZ(bh.id, bh.value || "");
                    return;
                case"ntp":
                    bb.kg(bh.value || "", bh.id);
                    return;
                case"js":
                    bWd(bh, bf);
                    return;
                case"css":
                    bWf(bh, bf);
                    return;
                case"html":
                    bVZ(bh, bf);
                    return;
                case"res":
                    bVW(bh, bf);
                    return
            }
        };
        bI.gN.bF({element: document, event: "templateready", oneventadd: Lp});
        return function (bC, bf) {
            bC = bb.bG(bC);
            if (!!bC) {
                var bk = bC.tagName == "TEXTAREA" ? [bC] : bC.getElementsByTagName("textarea");
                bm.cv(bk, function (bh) {
                    bVU(bh, bf)
                });
                bb.dW(bC, !0)
            }
            Lp();
            return this
        }
    }();
    bb.FZ = function (bN, bD) {
        ce[bN] = bD || "";
        return this
    };
    bb.jZ = function (bN) {
        return ce[bN] || ""
    };
    bb.kg = function (bC, bN) {
        bN = bN || bm.nY();
        bC = bb.bG(bC) || bC;
        bb.FZ(sa + bN, bC);
        bb.mB(bC);
        return bN
    };
    bb.fg = function (bN) {
        if (!bN)return null;
        bN = sa + bN;
        var bD = bb.jZ(bN);
        if (!bD)return null;
        if (bm.gH(bD)) {
            bD = bb.oZ(bD);
            bb.FZ(bN, bD)
        }
        return bD.cloneNode(!0)
    };
    bb.yb = function () {
        var DC = function (bD, bN) {
            return bN == "offset" || bN == "limit"
        };
        return function (bk, bw, bf) {
            var cH = [];
            if (!bk || !bk.length || !bw)return cH;
            bf = bf || cg;
            var gx = bk.length, kr = parseInt(bf.offset) || 0, kp = Math.min(gx, kr + (parseInt(bf.limit) || gx)), dG = {total: bk.length, range: [kr, kp]};
            NEJ.X(dG, bf, DC);
            for (var i = kr, dP; i < kp; i++) {
                dG.index = i;
                dG.data = bk[i];
                dP = bw.bF(dG);
                var bB = dP.zR();
                ce[bB] = dP;
                dP.bW = dP.bW.fj(function (bB, dP) {
                    delete ce[bB];
                    delete dP.bW
                }.bi(null, bB, dP));
                cH.push(dP)
            }
            return cH
        }
    }();
    bb.bqa = function (bB) {
        return ce[bB]
    };
    bb.cdV = function (eG, bf) {
        bf = bf || cg;
        bb.dV(bf.tid || "template-box");
        bj.bt(document, "templateready", function () {
            eG.bF().bK("onshow", bf)
        })
    };
    bd("dbg").dumpTC = function () {
        return ce
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bm = bd("nej.u"), bI = bd("nej.ut"), bM = bd("nej.ui"), bc;
    if (!!bM.gh)return;
    bM.gh = NEJ.C();
    bc = bM.gh.bU(bI.dZ);
    bc.dv = function () {
        this.dC();
        bb.bmu();
        this.dx();
        this.dm()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.bVP(bf.clazz);
        this.bqe(bf.parent)
    };
    bc.cR = function () {
        this.cV();
        this.bqf();
        delete this.gX;
        bb.mB(this.bs);
        bb.bH(this.bs, this.Zb);
        delete this.Zb
    };
    bc.dx = cC;
    bc.dm = function () {
        if (!this.dy)this.OT();
        this.bs = bb.fg(this.dy);
        if (!this.bs)this.bs = bb.ef("div", this.lz);
        bb.bJ(this.bs, this.lz)
    };
    bc.OT = cC;
    bc.bVP = function (eL) {
        this.Zb = eL || "";
        bb.bJ(this.bs, this.Zb)
    };
    bc.bVM = function () {
        if (!this.lz)return;
        bb.bJ(this.gX, this.lz + "-parent")
    };
    bc.bqf = function () {
        if (!this.lz)return;
        bb.bH(this.gX, this.lz + "-parent")
    };
    bc.mL = function () {
        return this.bs
    };
    bc.bqe = function (cQ) {
        if (!this.bs)return this;
        this.bqf();
        if (bm.hC(cQ)) {
            this.gX = cQ(this.bs)
        } else {
            this.gX = bb.bG(cQ);
            if (!!this.gX)this.gX.appendChild(this.bs)
        }
        this.bVM();
        return this
    };
    bc.bR = function () {
        if (!this.gX || !this.bs || this.bs.parentNode == this.gX)return this;
        this.gX.appendChild(this.bs);
        return this
    };
    bc.cw = function () {
        bb.mB(this.bs);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bm = bd("nej.u"), cf = bd("nej.h"), bM = bd("nej.ui"), ul, bqh;
    if (!!bM.LR)return;
    bM.LR = NEJ.C();
    ul = bM.LR.bU(bM.gh);
    bqh = bM.LR.dr;
    ul.cz = function (bf) {
        this.cB(bf);
        this.Ch("oncontentready", bf.oncontentready || this.bVK.bi(this));
        this.bVI = !!bf.nohack;
        this.bVH = !!bf.destroyable;
        this.Gj(bf.content)
    };
    ul.cR = function () {
        this.bK("onbeforerecycle");
        this.cV();
        this.OG();
        this.Gj("");
        bb.la(this.bs, {top: "", left: ""})
    };
    ul.bVK = cC;
    ul.Mc = cC;
    ul.OG = function () {
        bb.mB(this.bs);
        if (!!this.mP) {
            this.mP = cf.We(this.bs);
            delete this.mP
        }
    };
    ul.Gj = function (cm) {
        if (!this.bs || !this.yN || cm == null)return this;
        cm = cm || "";
        bm.gH(cm) ? this.yN.innerHTML = cm : this.yN.appendChild(cm);
        this.bK("oncontentready", this.yN);
        return this
    };
    ul.hn = function (cq) {
        var bD = cq.top;
        if (bD != null) {
            bD += "px";
            bb.ch(this.bs, "top", bD);
            bb.ch(this.mP, "top", bD)
        }
        var bD = cq.left;
        if (bD != null) {
            bD += "px";
            bb.ch(this.bs, "left", bD);
            bb.ch(this.mP, "left", bD)
        }
        return this
    };
    ul.bR = function () {
        bb.ch(this.bs, "visibility", "hidden");
        bqh.bR.apply(this, arguments);
        this.Mc();
        bb.ch(this.bs, "visibility", "");
        if (!this.bVI) {
            this.mP = cf.mP(this.bs)
        }
        return this
    };
    ul.cw = function () {
        this.bVH ? this.bW() : this.OG();
        return this
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, bm = bd("nej.u"), bb = bd("nej.e"), bM = bd("nej.ui"), yQ;
    if (!!bM.OD)return;
    bM.OD = NEJ.C();
    yQ = bM.OD.bU(bM.gh);
    yQ.cz = function (bf) {
        this.Me();
        this.cB(this.bVG(bf));
        this.dk.onbeforerecycle = this.bW.bi(this);
        this.nX = this.bbe()
    };
    yQ.cR = function () {
        this.bK("onbeforerecycle");
        this.cV();
        delete this.dk;
        bb.mB(this.bs);
        var zg = this.nX;
        if (!!zg) {
            delete this.nX;
            zg.bW()
        }
    };
    yQ.bbe = cC;
    yQ.bVG = function (bf) {
        var bp = {};
        bm.fo(bf, function (bw, bN) {
            this.dk.hasOwnProperty(bN) ? this.dk[bN] = bw : bp[bN] = bw
        }, this);
        return bp
    };
    yQ.Me = function () {
        this.dk = {clazz: "", parent: null, content: this.bs, destroyable: !1, oncontentready: null, nohack: !1}
    };
    yQ.bR = function () {
        if (!!this.nX)this.nX.bR();
        this.bK("onaftershow");
        return this
    };
    yQ.cw = function () {
        if (!!this.nX)this.nX.cw();
        return this
    }
})();
(function () {
    var bd = NEJ.P, fm = bd("nej.g"), cf = bd("nej.h"), bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), bM = bd("nej.ui"), Mj, bqk;
    if (!!bM.Gp)return;
    var iP = bb.rA(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + fm.Zi + ");}");
    bM.Gp = NEJ.C();
    Mj = bM.Gp.bU(bM.gh);
    bqk = bM.Gp.dr;
    Mj.cz = function (bf) {
        this.cB(bf);
        var cm = bf.content || "&nbsp;";
        bm.gH(cm) ? this.bs.innerHTML = cm : this.bs.appendChild(cm)
    };
    Mj.cR = function () {
        this.cV();
        this.bs.innerHTML = "&nbsp;"
    };
    Mj.dx = function () {
        this.lz = iP
    };
    Mj.bR = function () {
        cf.VH(this.bs);
        bqk.bR.apply(this, arguments);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bM = bd("nej.ut"), tX;
    if (!!bM.zm)return;
    bM.zm = NEJ.C();
    tX = bM.zm.bU(bM.dZ);
    tX.cz = function (bf) {
        this.cB(bf);
        this.bVD = !!bf.overflow;
        this.bs = bb.bG(bf.body);
        this.Gq = bb.bG(bf.view) || bb.blH(this.bs);
        this.bql = bb.bG(bf.mbar) || this.bs;
        this.Ow = parseInt(bf.direction) || 0;
        if (!!bf.isRelative) {
            this.bs.style.position = "relative";
            this.bcj = true;
            this.bcm()
        }
        this.dq([
            [document, "mouseup", this.bcv.bi(this)],
            [document, "mousemove", this.bcw.bi(this)],
            [this.bql, "mousedown", this.Mn.bi(this)]
        ])
    };
    tX.bcm = function () {
        if (!!this.bcj) {
            this.Gt = bb.jX(this.bs, this.Gq);
            this.Gt.x -= parseInt(bb.ey(this.bs, "left")) || 0;
            this.Gt.y -= parseInt(bb.ey(this.bs, "top")) || 0
        }
    };
    tX.cR = function () {
        this.cV();
        delete this.bs;
        delete this.bql;
        delete this.Gq
    };
    tX.bqm = function () {
        return{x: Math.max(this.Gq.clientWidth, this.Gq.scrollWidth) - this.bs.offsetWidth, y: Math.max(this.Gq.clientHeight, this.Gq.scrollHeight) - this.bs.offsetHeight}
    };
    tX.Mn = function (be) {
        bj.cu(be);
        if (!!this.iL)return;
        this.iL = {x: bj.mS(be), y: bj.qi(be)};
        this.bqn = this.bqm();
        this.bK("ondragstart", be)
    };
    tX.bcw = function (be) {
        if (!this.iL)return;
        var cq = {x: bj.mS(be), y: bj.qi(be)};
        var tP = cq.x - this.iL.x, uf = cq.y - this.iL.y, bD = {top: (parseInt(bb.ey(this.bs, "top")) || 0) + uf, left: (parseInt(bb.ey(this.bs, "left")) || 0) + tP};
        if (this.bcj) {
            this.bcm();
            bD.top = bD.top + this.Gt.y;
            bD.left = bD.left + this.Gt.x
        }
        this.iL = cq;
        this.hn(bD)
    };
    tX.bcv = function (be) {
        if (!this.iL)return;
        delete this.bqn;
        delete this.iL;
        this.bK("ondragend", this.bdj())
    };
    tX.hn = function (be) {
        if (!this.bVD) {
            var bqo = this.bqn || this.bqm();
            be.top = Math.min(bqo.y, Math.max(0, be.top));
            be.left = Math.min(bqo.x, Math.max(0, be.left))
        }
        var ds = this.bs.style;
        if (this.bcj) {
            this.bcm();
            be.top = be.top - this.Gt.y;
            be.left = be.left - this.Gt.x
        }
        if (this.Ow == 0 || this.Ow == 2)ds.top = be.top + "px";
        if (this.Ow == 0 || this.Ow == 1)ds.left = be.left + "px";
        this.bK("onchange", be);
        return this
    };
    tX.bdj = function () {
        return{left: parseInt(bb.ey(this.bs, "left")) || 0, top: parseInt(bb.ey(this.bs, "top")) || 0}
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = NEJ.P("nej.e"), bj = NEJ.P("nej.v"), bm = NEJ.P("nej.u"), bI = NEJ.P("nej.ut"), bM = NEJ.P("nej.ui"), iP, iq, bc, bO;
    if (!!bM.Oq)return;
    bM.Oq = NEJ.C();
    bc = bM.Oq.bU(bM.LR);
    bO = bM.Oq.dr;
    bc.dv = function () {
        this.tK = {};
        this.ko = {onchange: this.bcw.bi(this)};
        this.dC()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.bVx(bf.mask);
        this.bVw(bf.align);
        this.xl(bf.title);
        if (!bf.draggable)return;
        this.lA = bI.zm.bF(this.ko)
    };
    bc.cR = function () {
        this.cV();
        delete this.pk;
        delete this.Mw;
        if (!!this.xd) {
            this.xd.bW();
            delete this.xd
        }
        if (!!this.lA) {
            this.lA.bW();
            delete this.lA
        }
    };
    bc.dx = function () {
        this.lz = iP;
        this.dy = iq
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.eu(this.bs);
        this.yN = bk[1];
        this.ko.mbar = bk[0];
        this.ko.body = this.bs;
        bj.bt(bk[2], "mousedown", this.bVs.bi(this));
        bj.bt(this.ko.mbar, "mousedown", this.Mn.bi(this));
        this.bqt = bb.eu(this.ko.mbar)[0]
    };
    bc.bVs = function (be) {
        bj.cu(be);
        this.bK("onclose", be);
        if (!be.stopped) {
            this.cw()
        }
    };
    bc.Mn = function (be) {
        bj.bK(document, "click")
    };
    bc.bcw = function (be) {
        if (!this.mP)return;
        bb.la(this.mP, {top: be.top + "px", left: be.left + "px"})
    };
    bc.Mc = function () {
        var gO = [function () {
            return 0
        }, function (tF, el, bN) {
            return Math.max(0, tF[bN] + el[bN] / 2)
        }, function (tF, el, bN) {
            return tF[bN] + el[bN]
        }], bVo = ["left", "top"];
        return function () {
            var bD = {}, ds = this.bs.style, lU = bb.qr(), tF = {left: lU.scrollLeft, top: lU.scrollTop}, el = {left: lU.clientWidth - this.bs.offsetWidth, top: lU.clientHeight - this.bs.offsetHeight};
            bm.cv(bVo, function (bN, bv) {
                var fr = gO[this.pk[bv]];
                if (!fr)return;
                bD[bN] = fr(tF, el, bN)
            }, this);
            this.hn(bD)
        }
    }();
    bc.bVm = function () {
        if (!this.xd) {
            if (!this.Mw)return;
            this.tK.parent = this.gX;
            this.xd = this.Mw.bF(this.tK)
        }
        this.xd.bR()
    };
    bc.OG = function () {
        if (!!this.xd)this.xd.cw();
        bO.OG.apply(this, arguments)
    };
    bc.bVx = function (kD) {
        if (!!kD) {
            if (kD instanceof bM.Gp) {
                this.xd = kD;
                return
            }
            if (bm.hC(kD)) {
                this.Mw = kD;
                return
            }
            this.Mw = bM.Gp;
            if (bm.gH(kD))this.tK.clazz = kD;
            return
        }
        this.Mw = null
    };
    bc.xl = function (hJ, eN) {
        if (!!this.bqt) {
            var UZ = !eN ? "innerText" : "innerHTML";
            this.bqt[UZ] = hJ || "标题"
        }
        return this
    };
    bc.bVw = function () {
        var eh = /\s+/, bVi = {left: 0, center: 1, right: 2, auto: 3}, bVg = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (ng) {
            this.pk = (ng || "").split(eh);
            var fy = bVi[this.pk[0]];
            if (fy == null)fy = 1;
            this.pk[0] = fy;
            var fy = bVg[this.pk[1]];
            if (fy == null)fy = 1;
            this.pk[1] = fy;
            return this
        }
    }();
    bc.bR = function () {
        bO.bR.apply(this, arguments);
        this.bVm();
        return this
    };
    iP = bb.rA(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    iq = bb.kg('<div class="' + iP + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var bd = NEJ.P, bm = bd("nej.u"), bM = bd("nej.ui"), bft;
    if (!!bM.Oo)return;
    bM.Oo = NEJ.C();
    bft = bM.Oo.bU(bM.OD);
    bft.bbe = function () {
        return bM.Oq.bF(this.dk)
    };
    bft.Me = function () {
        bM.Oo.dr.Me.apply(this, arguments);
        this.dk.mask = null;
        this.dk.title = "标题";
        this.dk.align = "";
        this.dk.draggable = !1;
        this.dk.onclose = null
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), cA = bd("nej.ui"), bo = bd("nm.l"), bc, bO;
    bo.fz = NEJ.C();
    bc = bo.fz.bU(cA.Oo);
    bc.cz = function (bf) {
        bf.clazz = "m-layer z-show " + (bf.clazz || "");
        bf.nohack = true;
        bf.draggable = true;
        this.cB(bf)
    };
    bc.eH = function (bh, cZ) {
        if (!bh)return;
        bb.ch(bh, "display", !cZ ? "none" : "");
        bh.lastChild.innerText = cZ || ""
    };
    bc.eU = function (il, dI, Mx, Mz) {
        var eG = "js-lock";
        if (dI === undefined)return bb.cU(il, eG);
        !dI ? bb.bH(il, eG) : bb.bJ(il, eG);
        il.firstChild.innerText = !dI ? Mx : Mz
    };
    bo.fz.bR = function (bf) {
        bf = bf || {};
        if (bf.mask === undefined)bf.mask = "m-mask";
        if (bf.parent === undefined)bf.parent = document.body;
        if (bf.draggable === undefined)bf.draggable = true;
        !!this.fJ && this.fJ.bW();
        this.fJ = this.bF(bf);
        this.fJ.bR(bf);
        return this.fJ
    };
    bo.fz.cw = function () {
        !!this.fJ && this.fJ.bW()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bq = bd("nm.d"), bn = bd("nm.x"), bo = bd("nm.l"), bc, bO;
    bo.bhw = NEJ.C();
    bc = bo.bhw.bU(bo.fz);
    bO = bo.bhw.dr;
    bc.cz = function (bf) {
        this.cB(bf);
        if (bf.bubble === undefined)bf.bubble = true;
        this.MC = bf.bubble;
        this.pe = bf.message || ""
    };
    bc.dx = function () {
        this.dy = bb.kg('<div class="lyct f-cb f-tc"></div>')
    };
    bc.dm = function () {
        this.dw();
        bj.bt(this.bs, "click", this.dM.bi(this))
    };
    bc.dM = function (be) {
        var bh = bj.bY(be, "d:action");
        if (!bh)return;
        if (bh.href)bj.dp(be);
        if (bb.bz(bh, "action") == "close")this.cw();
        if (this.MC === !1)bj.ru(be);
        this.bK("onaction", bb.bz(bh, "action"))
    };
    bc.bR = function () {
        bO.bR.call(this);
        this.bs.innerHTML = this.pe
    };
    var gJ = bb.gs('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    bn.mo = function () {
        var hd;
        var dP;
        var bhN = function (lI, cl) {
            if (bm.hC(lI, "function") && lI(cl) != -1)dP.bW()
        };
        var yG = function () {
            !!dP && dP.cw()
        };
        return function (bf) {
            clearTimeout(hd);
            bf = bf || {};
            bf.title = bf.title || "提示";
            bf.clazz = bf.clazz || "";
            bf.parent = bf.parent || document.body;
            bf.buttons = bf.buttons || [];
            bf.message = bb.dg(gJ, bf);
            bf.onaction = bhN.bi(null, bf.action);
            if (bf.mask === undefined)bf.mask = true;
            if (bf.draggable === undefined)bf.draggable = true;
            !!dP && dP.bW();
            dP = bo.bhw.bF(bf);
            dP.bR();
            if (bf.autoclose)hd = setTimeout(yG.bi(null), 2e3);
            return dP
        }
    }();
    bn.gz = function (bf) {
        bf = bf || {};
        bf.clazz = bf.clazz || "m-layer-w1";
        bf.buttons = [
            {klass: "u-btn2-2", action: "close", text: bf.btntxt || "确定"}
        ];
        var dP = bn.mo(bf);
        return dP
    };
    bn.iu = function (bf) {
        bf = bf || {};
        bf.clazz = bf.clazz || "m-layer-w2";
        bf.buttons = [
            {klass: "u-btn2-2", action: "ok", text: bf.btnok || "确定", style: bf.okstyle || ""},
            {klass: "u-btn2-1", action: "close", text: bf.btncc || "取消", style: bf.ccstyle || ""}
        ];
        var dP = bn.mo(bf);
        return dP
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u");
    bb.bVe = function () {
        var gK = /[\r\n]/gi, ce = {};
        var bVd = function (dT) {
            return(dT || "").replace(gK, "aa").length
        };
        var bqA = function (bB) {
            var cj = ce[bB], bqC = bb.bG(bB), bUY = bb.bG(bB + "-counter");
            if (!bqC || !cj)return;
            var be = {input: bqC.value};
            be.length = cj.onlength(be.input);
            be.delta = cj.max - be.length;
            cj.onchange(be);
            bUY.innerHTML = be.value || "剩余" + be.delta + "个字"
        };
        return function (bC, bf) {
            var bB = bb.lr(bC);
            if (!bB || !!ce[bB])return;
            var cj = NEJ.X({}, bf);
            cj.onchange = cj.onchange || cC;
            cj.onlength = bVd;
            if (!cj.max) {
                var bqD = parseInt(bb.ix(bB, "maxlength")), bqM = parseInt(bb.bz(bB, "maxLength"));
                cj.max = bqD || bqM || 100;
                if (!bqD && !!bqM)cj.onlength = bm.hk
            }
            ce[bB] = cj;
            bj.bt(bB, "input", bqA.bi(null, bB));
            var bh = bb.Eg(bB, {nid: cj.nid || "js-counter", clazz: cj.clazz});
            cj.xid = bB + "-counter";
            bh.id = cj.xid;
            bqA(bB)
        }
    }()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), cf = bd("nej.h");
    cf.bja = function (bC, eL) {
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, bM = bd("nej.p"), bb = bd("nej.e"), bj = bd("nej.v"), cf = bd("nej.h");
    if (bM.ns.trident)return;
    cf.bja = function () {
        var ce = {};
        var Dp = function (be) {
            var gp = bj.bY(be);
            if (!!gp.value)return;
            bb.ch(bb.Eg(gp), "display", "none")
        };
        var Ao = function (be) {
            var gp = bj.bY(be);
            if (!!gp.value)return;
            bb.ch(bb.Eg(gp), "display", "")
        };
        var bUT = function (gp, eL) {
            var bB = bb.lr(gp), ln = bb.Eg(gp, {tag: "label", clazz: eL});
            ln.htmlFor = bB;
            var ew = bb.ix(gp, "placeholder") || "";
            ln.innerText = ew == "null" ? "" : ew;
            var en = gp.offsetHeight + "px";
            bb.la(ln, {left: 0, display: !gp.value ? "" : "none"})
        };
        return cf.bja.fj(function (be) {
            be.stopped = !0;
            var cn = be.args, gp = bb.bG(cn[0]);
            if (!!ce[gp.id])return;
            bUT(gp, cn[1]);
            ce[gp.id] = !0;
            bj.bt(gp, "blur", Ao.bi(null));
            bj.bt(gp, "focus", Dp.bi(null))
        })
    }()
})();
(function () {
    var bd = NEJ.P, cf = bd("nej.h"), bb = bd("nej.e"), dY = bd("nej.x");
    bb.gj = dY.gj = function (bC, eL) {
        cf.bja(bC, bb.bz(bC, "holder") || eL || "js-placeholder");
        return this
    };
    dY.isChange = !0
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bM = bd("nej.ut"), hR;
    if (!!bM.MJ)return;
    bM.MJ = NEJ.C();
    hR = bM.MJ.bU(bM.dZ);
    hR.dv = function () {
        this.dC();
        this.BT = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    hR.cz = function (bf) {
        this.cB(bf);
        this.gC = document.forms[bf.form] || bb.bG(bf.form);
        this.dq([
            [this.gC, "keypress", this.bUS.bi(this)]
        ]);
        this.pe = bf.message || {};
        this.pe.pass = this.pe.pass || "&nbsp;";
        var fC = this.oO(this.gC, "focusMode", 1);
        if (!isNaN(fC)) {
            this.bqN = {mode: fC, clazz: bf.focus}
        }
        this.xR = bf.holder;
        this.BT.tp.clazz = "js-mhd " + (bf.tip || "js-tip");
        this.BT.ok.clazz = "js-mhd " + (bf.pass || "js-pass");
        this.BT.er.clazz = "js-mhd " + (bf.error || "js-error");
        this.bqO = bf.invalid || "js-invalid";
        this.bUL(bf);
        this.hP();
        if (!!this.zH)this.zH.focus()
    };
    hR.cR = function () {
        this.cV();
        delete this.pe;
        delete this.zH;
        delete this.Ci;
        delete this.gC;
        delete this.bqP;
        delete this.MS
    };
    hR.oO = function (bh, GE, bu) {
        var bD = bb.bz(bh, GE);
        switch (bu) {
            case 1:
                return parseInt(bD);
            case 2:
                return(bD || "").toLowerCase() == "true";
            case 3:
                return this.Wr(bD)
        }
        return bD
    };
    hR.xk = function (bD, bu) {
        if (bu == "date")return this.Wr(bD);
        return parseInt(bD)
    };
    hR.NU = function () {
        var jY = /^button|submit|reset|image|hidden|file$/i;
        return function (bh) {
            bh = this.bG(bh) || bh;
            var bu = bh.type;
            return!!bh.name && !jY.test(bh.type || "")
        }
    }();
    hR.bUJ = function () {
        var jY = /^hidden$/i;
        return function (bh) {
            if (this.NU(bh))return!0;
            bh = this.bG(bh) || bh;
            var bu = bh.type || "";
            return jY.test(bu)
        }
    }();
    hR.Wr = function () {
        var eh = /[-\/]/;
        var bUI = function (bD) {
            if (!bD)return"";
            bD = bD.split(eh);
            bD.push(bD.shift());
            return bD.join("/")
        };
        return function (bD) {
            if ((bD || "").toLowerCase() == "now")return+(new Date);
            return Date.parse(bUI(bD))
        }
    }();
    hR.bUS = function (be) {
        if (be.keyCode != 13)return;
        this.bK("onenter", be)
    };
    hR.bUC = function (bB, bX) {
        var qZ = this.MS[bX], bD = this.oO(bB, bX);
        if (!bD || !qZ)return;
        this.NS(bB, qZ);
        this.WL(bB, bX, bD)
    };
    hR.bUB = function (bB, bX) {
        try {
            var bqV = this.oO(bB, bX);
            if (!bqV)return;
            var bD = new RegExp(bqV);
            this.WL(bB, bX, bD);
            this.NS(bB, this.MS[bX])
        } catch (e) {
        }
    };
    hR.bUz = function (bB, bX) {
        var qZ = this.MS[bX];
        if (!!qZ && this.oO(bB, bX, 2))this.NS(bB, qZ)
    };
    hR.WU = function (bB, bX, bD) {
        bD = parseInt(bD);
        if (isNaN(bD))return;
        this.WL(bB, bX, bD);
        this.NS(bB, this.MS[bX])
    };
    hR.bqX = function (bB, bX) {
        this.WU(bB, bX, this.oO(bB, bX))
    };
    hR.bqZ = function (bB, bX) {
        this.WU(bB, bX, bb.ix(bB, bX))
    };
    hR.bra = function (bB, bX, bu) {
        var bD = this.xk(this.oO(bB, bX), this.oO(bB, "type"));
        this.WU(bB, bX, bD)
    };
    hR.bUt = function () {
        var gK = /^input|textarea$/i;
        var Dp = function (be) {
            this.qg(bj.bY(be))
        };
        var Ao = function (be) {
            var bh = bj.bY(be);
            if (!this.oO(bh, "ignore", 2)) {
                this.brd(bh)
            }
        };
        return function (bh) {
            if (this.oO(bh, "autoFocus", 2))this.zH = bh;
            var pt = bb.ix(bh, "placeholder");
            if (!!pt && pt != "null")bb.gj(bh, this.xR);
            if (!!this.bqN && gK.test(bh.tagName))bb.mK(bh, this.bqN);
            var bB = bb.lr(bh);
            this.bUz(bB, "required");
            this.bUC(bB, "type");
            this.bUB(bB, "pattern");
            this.bqZ(bB, "maxlength");
            this.bqZ(bB, "minlength");
            this.bqX(bB, "maxLength");
            this.bqX(bB, "minLength");
            this.bra(bB, "min");
            this.bra(bB, "max");
            var bX = bh.name;
            this.pe[bX + "-tip"] = this.oO(bh, "tip");
            this.pe[bX + "-error"] = this.oO(bh, "message");
            this.qg(bh);
            var cP = this.Ci[bB], bl = (cP || cg).data || cg, Nr = this.oO(bh, "counter", 2);
            if (Nr && (bl.maxlength || bl.maxLength)) {
                bb.bVe(bB, {nid: this.BT.tp.nid, clazz: "js-counter"})
            }
            if (!!cP && gK.test(bh.tagName)) {
                this.dq([
                    [bh, "focus", Dp.bi(this)],
                    [bh, "blur", Ao.bi(this)]
                ])
            } else if (this.oO(bh, "focus", 2)) {
                this.dq([
                    [bh, "focus", Dp.bi(this)]
                ])
            }
        }
    }();
    hR.bUL = function () {
        var Ad = {number: /^[\d]+$/i, url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i, email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i, date: function (v) {
            return!v || !isNaN(this.Wr(v))
        }};
        var bUr = {required: function (bh) {
            var bu = bh.type, bUm = !bh.value, bUj = (bu == "checkbox" || bu == "radio") && !bh.checked;
            if (bUj || bUm)return-1
        }, type: function (bh, bf) {
            var eh = this.bqP[bf.type], gu = bh.value.trim(), bUi = !!eh.test && !eh.test(gu), bUh = bm.hC(eh) && !eh.call(this, gu);
            if (bUi || bUh)return-2
        }, pattern: function (bh, bf) {
            if (!bf.pattern.test(bh.value))return-3
        }, maxlength: function (bh, bf) {
            if (bh.value.length > bf.maxlength)return-4
        }, minlength: function (bh, bf) {
            if (bh.value.length < bf.minlength)return-5
        }, maxLength: function (bh, bf) {
            if (bm.hk(bh.value) > bf.maxLength)return-4
        }, minLength: function (bh, bf) {
            if (bm.hk(bh.value) < bf.minLength)return-5
        }, min: function (bh, bf) {
            var gk = this.xk(bh.value, bf.type);
            if (isNaN(gk) || gk < bf.min)return-6
        }, max: function (bh, bf) {
            var gk = this.xk(bh.value, bf.type);
            if (isNaN(gk) || gk > bf.max)return-7
        }};
        return function (bf) {
            this.bqP = NEJ.X(NEJ.X({}, Ad), bf.type);
            this.MS = NEJ.X(NEJ.X({}, bUr), bf.attr)
        }
    }();
    hR.NS = function (bB, vJ) {
        if (!bm.hC(vJ))return;
        var cP = this.Ci[bB];
        if (!cP || !cP.func) {
            cP = cP || {};
            cP.func = [];
            this.Ci[bB] = cP
        }
        cP.func.push(vJ)
    };
    hR.WL = function (bB, bX, bD) {
        if (!bX)return;
        var cP = this.Ci[bB];
        if (!cP || !cP.data) {
            cP = cP || {};
            cP.data = {};
            this.Ci[bB] = cP
        }
        cP.data[bX] = bD
    };
    hR.brd = function (bh) {
        bh = this.bG(bh) || bh;
        var cP = this.Ci[bb.lr(bh)];
        if (!bh || !cP || !this.NU(bh))return!0;
        var bp;
        bm.fo(cP.func, function (gO) {
            bp = gO.call(this, bh, cP.data);
            return bp != null
        }, this);
        if (bp == null) {
            var be = {target: bh, form: this.gC};
            this.bK("oncheck", be);
            bp = be.value
        }
        var be = {target: bh, form: this.gC};
        if (bp != null) {
            be.code = bp;
            this.bK("oninvalid", be);
            if (!be.stopped) {
                this.bUg(bh, be.value || this.pe[bh.name + bp])
            }
        } else {
            this.bK("onvalid", be);
            if (!be.stopped)this.bUf(bh, be.value)
        }
        return bp == null
    };
    hR.vR = function () {
        var bUe = function (Uh, Uf) {
            return Uh == Uf ? "block" : "none"
        };
        var bUd = function (bh, bu, cZ) {
            var pt = bre.call(this, bh, bu);
            if (!pt && !!cZ)pt = bb.Eg(bh, this.BT[bu]);
            return pt
        };
        var bre = function (bh, bu) {
            var pt;
            if (bu == "tp")pt = bb.bG(bh.name + "-tip");
            if (!pt)pt = bb.bP(bh.parentNode, this.BT[bu].nid)[0];
            return pt
        };
        return function (bh, cZ, bu) {
            bh = this.bG(bh) || bh;
            if (!bh)return;
            bu == "er" ? bb.bJ(bh, this.bqO) : bb.bH(bh, this.bqO);
            var pt = bUd.call(this, bh, bu, cZ);
            if (!!pt && !!cZ)pt.innerHTML = cZ;
            bm.fo(this.BT, function (bD, bN) {
                bb.ch(bre.call(this, bh, bN), "display", bUe(bu, bN))
            }, this)
        }
    }();
    hR.qg = function (bh, cZ) {
        this.vR(bh, cZ || this.pe[bh.name + "-tip"], "tp");
        return this
    };
    hR.bUf = function (bh, cZ) {
        this.vR(bh, cZ || this.pe[bh.name + "-pass"] || this.pe.pass, "ok");
        return this
    };
    hR.bUg = function (bh, cZ) {
        this.vR(bh, cZ || this.pe[bh.name + "-error"], "er");
        return this
    };
    hR.jI = function () {
        var gK = /^(?:radio|checkbox)$/i;
        var bUb = function (bD) {
            return bD == null ? "" : bD
        };
        var brf = function (bD, bh) {
            if (gK.test(bh.type || "")) {
                bh.checked = bD == bh.value
            } else {
                bh.value = bUb(bD)
            }
        };
        return function (bX, bD) {
            var bh = this.bG(bX);
            if (!bh)return this;
            if (bh.tagName == "SELECT" || !bh.length) {
                brf(bD, bh)
            } else {
                bm.cv(bh, brf.bi(null, bD))
            }
            return this
        }
    }();
    hR.bG = function (bX) {
        return this.gC.elements[bX]
    };
    hR.ceb = function () {
        return this.gC
    };
    hR.NC = function () {
        var gK = /^radio|checkbox$/i, jY = /^number|date$/;
        var bTY = function (cE, bh) {
            var bX = bh.name, bD = bh.value, cP = cE[bX], bu = this.oO(bh, "type");
            if (jY.test(bu))bD = this.xk(bD, bu);
            if (gK.test(bh.type) && !bh.checked) {
                bD = this.oO(bh, "value");
                if (!bD)return
            }
            if (!!cP) {
                if (!bm.hh(cP)) {
                    cP = [cP];
                    cE[bX] = cP
                }
                cP.push(bD)
            } else {
                cE[bX] = bD
            }
        };
        return function () {
            var bp = {};
            bm.cv(this.gC.elements, function (bh) {
                if (this.bUJ(bh))bTY.call(this, bp, bh)
            }, this);
            return bp
        }
    }();
    hR.NE = function () {
        var bTO = function (bh) {
            if (this.NU(bh))this.qg(bh)
        };
        return function () {
            this.gC.reset();
            bm.cv(this.gC.elements, bTO, this);
            return this
        }
    }();
    hR.ced = function () {
        this.gC.submit();
        return this
    };
    hR.hP = function () {
        var bTK = function (bh) {
            if (this.NU(bh))this.bUt(bh)
        };
        return function () {
            this.Ci = {};
            bm.cv(this.gC.elements, bTK, this);
            return this
        }
    }();
    hR.bTG = function (bh) {
        bh = this.bG(bh) || bh;
        if (!!bh)return this.brd(bh);
        var bp = !0;
        bm.cv(this.gC.elements, function (bh) {
            var nN = this.bTG(bh);
            bp = bp && nN
        }, this);
        return bp
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bI = bd("nej.ut"), bm = bd("nej.u"), bn = bd("nm.x"), bo = bd("nm.l"), bc, bO;
    bo.NK = NEJ.C();
    bc = bo.NK.bU(bo.fz);
    bO = bo.NK.dr;
    bc.dm = function () {
        this.dw();
        bj.bt(this.bs, "click", this.dM.bi(this));
        bj.bt(document, "mousewheel", this.zo.bi(this));
        if (!!document.body.addEventListener)document.body.addEventListener("DOMMouseScroll", this.zo.bi(this))
    };
    bc.cz = function (bf) {
        this.cB(bf);
        if (bf.jst) {
            this.bs.innerHTML = bb.dg(bf.jst, bf.data)
        } else if (bf.ntp) {
            this.bs.appendChild(bb.fg(bf.ntp))
        } else if (bf.txt) {
            this.bs.innerHTML = bb.jZ(bf.txt)
        } else if (bf.html) {
            this.bs.innerHTML = bf.html
        }
        var No = this.bs.getElementsByTagName("form");
        if (No.length) {
            this.gC = bI.MJ.bF({form: No[0]})
        }
        this.AS = bb.eu(this.bs)[0]
    };
    bc.cR = function () {
        this.bK("ondestroy");
        this.cV();
        this.bs.innerHTML = "";
        delete this.AS
    };
    bc.dM = function (be) {
        var bh = bj.bY(be, "d:action"), bl = this.gC ? this.gC.NC() : null, be = {action: bb.bz(bh, "action")};
        if (bl)be.data = bl;
        if (be.action) {
            this.bK("onaction", be);
            if (be.stopped)return;
            this.cw()
        }
    };
    bc.zo = function (be) {
        if (!this.AS)return;
        bj.cu(be);
        var el = be.wheelDelta || -be.detail;
        this.AS.scrollTop -= el
    };
    bn.lg = function (bf) {
        bf.destroyable = bf.destroyable || true;
        bf.title = bf.title || "提示";
        bf.draggable = true;
        bf.parent = document.body;
        bf.mask = bf.mask || true;
        var zg = bo.NK.bF(bf);
        zg.bR();
        return zg
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var brr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Nj = {}, Bh = {};
    for (var i = 0, l = brr.length, c; i < l; i++) {
        c = brr.charAt(i);
        Nj[i] = c;
        Bh[c] = i
    }
    var bTC = function (jA) {
        var bv = 0, c, bp = [];
        while (bv < jA.length) {
            c = jA[bv];
            if (c < 128) {
                bp.push(String.fromCharCode(c));
                bv++
            } else if (c > 191 && c < 224) {
                bp.push(String.fromCharCode((c & 31) << 6 | jA[bv + 1] & 63));
                bv += 2
            } else {
                bp.push(String.fromCharCode((c & 15) << 12 | (jA[bv + 1] & 63) << 6 | jA[bv + 2] & 63));
                bv += 3
            }
        }
        return bp.join("")
    };
    var bTA = function () {
        var iz = /\r\n/g;
        return function (bl) {
            bl = bl.replace(iz, "\n");
            var bp = [], pM = String.fromCharCode(237);
            if (pM.charCodeAt(0) < 0)for (var i = 0, l = bl.length, c; i < l; i++) {
                c = bl.charCodeAt(i);
                c > 0 ? bp.push(c) : bp.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = bl.length, c; i < l; i++) {
                c = bl.charCodeAt(i);
                if (c < 128)bp.push(c); else if (c > 127 && c < 2048)bp.push(c >> 6 | 192, c & 63 | 128); else bp.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return bp
        }
    }();
    var GI = function (jA) {
        var bv = 0, bp = [], fC = jA.length % 3;
        if (fC == 1)jA.push(0, 0);
        if (fC == 2)jA.push(0);
        while (bv < jA.length) {
            bp.push(Nj[jA[bv] >> 2], Nj[(jA[bv] & 3) << 4 | jA[bv + 1] >> 4], Nj[(jA[bv + 1] & 15) << 2 | jA[bv + 2] >> 6], Nj[jA[bv + 2] & 63]);
            bv += 3
        }
        if (fC == 1)bp[bp.length - 1] = bp[bp.length - 2] = "=";
        if (fC == 2)bp[bp.length - 1] = "=";
        return bp.join("")
    };
    var bTx = function () {
        var qO = /\n|\r|=/g;
        return function (bl) {
            var bv = 0, bp = [];
            bl = bl.replace(qO, "");
            for (var i = 0, l = bl.length; i < l; i += 4)bp.push(Bh[bl.charAt(i)] << 2 | Bh[bl.charAt(i + 1)] >> 4, (Bh[bl.charAt(i + 1)] & 15) << 4 | Bh[bl.charAt(i + 2)] >> 2, (Bh[bl.charAt(i + 2)] & 3) << 6 | Bh[bl.charAt(i + 3)]);
            var cF = bp.length, fC = bl.length % 4;
            if (fC == 2)bp = bp.slice(0, cF - 2);
            if (fC == 3)bp = bp.slice(0, cF - 1);
            return bp
        }
    }();
    p.cee = function (bl) {
        return bTC(bTx(bl))
    };
    p.bTv = function (bl) {
        try {
            return window.btoa(bl)
        } catch (ex) {
            return GI(bTA(bl))
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bA = bd("nej.j"), bM = bd("nej.p"), bm = bd("nej.u"), bo = bd("nm.l"), bT = bd("nm.w"), di = bd("nej.ui"), bq = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    bo.brt = NEJ.C();
    bc = bo.brt.bU(bo.fz);
    bc.dx = function () {
        this.dy = "m-download-layer"
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.ZU = bk[0];
        this.bag = bk[1];
        this.brw = bk[2];
        bA.cG("/client/version/get", {type: "json", onload: this.bTq.bi(this)});
        if (bM.Hj.mac) {
            bb.bH(this.ZU.parentNode, "f-hide");
            bb.bJ(this.bag.parentNode, "f-hide");
            bb.bJ(this.brw, "f-hide")
        } else {
            bb.bJ(this.ZU.parentNode, "f-hide");
            bb.bH(this.bag.parentNode, "f-hide");
            bb.bH(this.brw, "f-hide")
        }
    };
    bc.cz = function (bf) {
        bf.clazz = " m-layer-down";
        bf.parent = bf.parent || document.body;
        bf.title = "下载";
        bf.draggable = !0;
        bf.destroyalbe = !0;
        bf.mask = true;
        this.cB(bf);
        this.dq([
            [this.bs, "click", this.cS.bi(this)]
        ]);
        this.fL = TYPE_MAP[bf.type];
        this.kx = bf.id
    };
    bc.cR = function () {
        this.cV()
    };
    bc.BR = function () {
        this.cw()
    };
    bc.GG = function (be) {
        this.bK("onok", bD);
        this.cw()
    };
    bc.cS = function (be) {
        var bh = bj.bY(be, "d:action");
        switch (bb.bz(bh, "action")) {
            case"download":
                this.cw();
                window.open(bb.bz(bh, "src"));
                break;
            case"orpheus":
                this.cw();
                location.href = "orpheus://" + bm.bTv(JSON.stringify({type: this.fL, id: this.kx, cmd: "download"}));
                break
        }
    };
    bc.bTq = function (be) {
        if (be.code == 200) {
            this.Fz = be.data;
            this.ZU.innerText = "V" + this.Fz.mac;
            this.bag.innerText = "V" + this.Fz.pc
        }
    };
    bn.NW = function (bf) {
        bo.brt.bF(bf).bR()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bm = bd("nej.u"), bq = bd("nm.d"), cX = {};
    bq.bG = function (bN) {
        return cX[bN]
    };
    bq.sq = function (bN, cj) {
        cX[bN] = cj
    };
    bq.fX = function (bl) {
        bm.fo(bl, function (bw, bN) {
            var cj = cX[bN] || {};
            NEJ.X(cj, bw);
            cX[bN] = cj
        })
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, cf = bd("nej.h");
    cf.NY = function (bN) {
        return localStorage.getItem(bN)
    };
    cf.NZ = function (bN, bD) {
        localStorage.setItem(bN, bD)
    };
    cf.baV = function (bN) {
        localStorage.removeItem(bN)
    };
    cf.baW = function () {
        localStorage.clear()
    };
    cf.bTp = function () {
        var bp = [];
        for (var i = 0, l = localStorage.length; i < l; i++)bp.push(localStorage.key(i));
        return bp
    };
    cf.baY = function () {
        (document.onstorageready || cC)()
    };
    cf.baZ = function () {
        return!0
    }
})();
(function () {
    var bd = NEJ.P, bM = bd("nej.p"), jf = bd("nej.c"), cf = bd("nej.h"), rz;
    if (bM.ns.trident || !!window.localStorage)return;
    var bTo = function () {
        var pX, hd;
        var bfm = function () {
            pX = document.createElement("div");
            NEJ.X(pX.style, {position: "absolute", top: 0, left: 0, width: "1px", height: "1px", zIndex: 1e4, overflow: "hidden"});
            document.body.insertAdjacentElement("afterBegin", pX);
            pX.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + jf.bG("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var KE = function () {
            hd = window.clearTimeout(hd);
            var hQ = pX.getElementsByTagName("object")[0];
            if (!!hQ.initStorage) {
                delete pX;
                rz = hQ;
                rz.initStorage("nej-storage");
                (document.onstorageready || cC)();
                return
            }
            hd = window.setTimeout(KE, 500)
        };
        return function () {
            if (!!rz)return;
            bfm();
            KE()
        }
    }();
    cf.NY = cf.NY.fj(function (be) {
        be.stopped = !0;
        if (!rz)return;
        be.value = rz.getItem(be.args[0])
    });
    cf.NZ = cf.NZ.fj(function (be) {
        be.stopped = !0;
        if (!rz)return;
        var cn = be.args;
        rz.setItem(cn[0], cn[1])
    });
    cf.baV = cf.baV.fj(function (be) {
        be.stopped = !0;
        if (!rz)return;
        rz.removeItem(be.args[0])
    });
    cf.baW = cf.baW.fj(function (be) {
        be.stopped = !0;
        if (!!rz)rz.clear()
    });
    cf.baY = cf.baY.fj(function (be) {
        be.stopped = !0;
        bTo()
    });
    cf.baZ = cf.baZ.fj(function (be) {
        be.stopped = !0;
        be.value = !!rz
    })
})();
(function () {
    var bd = NEJ.P, bm = bd("nej.u"), bj = bd("nej.v"), cf = bd("nej.h"), bA = bd("nej.j"), bI = bd("nej.ut"), ce = {};
    bA.wl = function (bN, bD) {
        var bry = JSON.stringify(bD);
        try {
            cf.NZ(bN, bry)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bry != cf.NY(bN))ce[bN] = bD;
        return this
    };
    bA.sj = function (bN) {
        var bl = JSON.parse(cf.NY(bN) || "null");
        return bl == null ? ce[bN] : bl
    };
    bA.cef = function (bN, bD) {
        var bl = bA.sj(bN);
        if (bl == null) {
            bl = bD;
            bA.wl(bN, bl)
        }
        return bl
    };
    bA.Ob = function (bN) {
        delete ce[bN];
        cf.baV(bN);
        return this
    };
    bA.ceg = function () {
        var bbF = function (bw, bN, cE) {
            delete cE[bN]
        };
        return function () {
            bm.fo(ce, bbF);
            cf.baW();
            return this
        }
    }();
    bA.ceh = function (bp) {
        bp = bp || {};
        bm.cv(cf.bTp(), function (bN) {
            bp[bN] = bA.sj(bN)
        });
        return bp
    };
    bI.gN.bF({element: document, event: "storageready", oneventadd: function () {
        if (cf.baZ()) {
            document.onstorageready()
        }
    }});
    var bTg = function () {
        var bTc = function (bD, bN, cE) {
            cf.NZ(bN, JSON.stringify(bD));
            delete cE[bN]
        };
        return function () {
            bm.fo(ce, bTc)
        }
    }();
    bj.bt(document, "storageready", bTg);
    cf.baY()
})();
(function () {
    var bd = NEJ.P, bj = bd("nej.v"), bm = bd("nej.u"), bM = bd("nej.ut"), Gy;
    if (!!bM.bce)return;
    bM.bce = NEJ.C();
    Gy = bM.bce.bU(bM.dZ);
    Gy.dv = function () {
        var gJ = +(new Date), nd = "dat-" + gJ;
        return function () {
            this.dC();
            var ce = this.constructor[nd];
            if (!ce) {
                ce = {};
                this.constructor[nd] = ce
            }
            this.bS = ce
        }
    }();
    Gy.bG = function (bN) {
        return this.bS[bN]
    };
    Gy.sq = function (bN, bD) {
        var lT = this.bS[bN];
        this.bS[bN] = bD;
        bj.bK(localCache, "cachechange", {key: bN, type: "set", oldValue: lT, newValue: bD});
        return this
    };
    Gy.dW = function (bN) {
        var lT = this.bS[bN];
        bm.NB(this.bS, bN);
        bj.bK(localCache, "cachechange", {key: bN, type: "delete", oldValue: lT, newValue: undefined});
        return lT
    };
    Gy.Ol = function (By) {
        return NEJ.Q(this.bS, By)
    };
    window.localCache = bM.bce.bF();
    bM.gN.bF({element: localCache, event: "cachechange"})
})();
(function () {
    var bd = NEJ.P, gm = NEJ.R, cC = NEJ.F, bm = bd("nej.u"), bA = bd("nej.j"), bM = bd("nej.ut"), nd = "dat-" + +(new Date), mU;
    if (!!bM.bcs)return;
    bM.bcs = NEJ.C();
    mU = bM.bcs.bU(bM.dZ);
    mU.dv = function () {
        this.dC();
        this.bS = this.constructor[nd];
        if (!this.bS) {
            this.bS = {};
            this.bS[nd + "-l"] = {};
            this.constructor[nd] = this.bS
        }
    };
    mU.qA = function (bN) {
        return this.bS[bN]
    };
    mU.pn = function (bN, bD) {
        this.bS[bN] = bD
    };
    mU.lk = function (bN, oI) {
        var bl = this.qA(bN);
        if (bl == null) {
            bl = oI;
            this.pn(bN, bl)
        }
        return bl
    };
    mU.bTa = function (bN) {
        if (bN != null) {
            delete this.bS[bN];
            return
        }
        bm.fo(this.bS, function (bw, bN) {
            if (bN == nd + "-l")return;
            this.bTa(bN)
        }, this)
    };
    mU.cei = function (bN) {
        if (!!bA.Ob)return bA.Ob(bN)
    };
    mU.bSF = function (bN) {
        if (!!bA.sj)return bA.sj(bN)
    };
    mU.bSE = function (bN, bD) {
        if (!!bA.wl)bA.wl(bN, bD)
    };
    mU.zP = function (bN, oI) {
        var bl = this.My(bN);
        if (bl == null) {
            bl = oI;
            this.uw(bN, bl)
        }
        return bl
    };
    mU.My = function (bN) {
        var bl = this.qA(bN);
        if (bl != null)return bl;
        bl = this.bSF(bN);
        if (bl != null)this.pn(bN, bl);
        return bl
    };
    mU.uw = function (bN, bD) {
        this.bSE(bN, bD);
        this.pn(bN, bD)
    };
    mU.brI = function (bN) {
        if (bN != null) {
            delete this.bS[bN];
            if (!!bA.Ob)bA.Ob(bN);
            return
        }
        bm.fo(this.bS, function (bw, bN) {
            if (bN == nd + "-l")return;
            this.brI(bN)
        }, this)
    };
    mU.cel = function () {
        this.brI();
        return this
    };
    mU.bde = function (bN) {
        var bl = this.bS[nd + "-l"], cn = gm.slice.call(arguments, 1);
        bm.cv(bl[bN], function (gP) {
            try {
                gP.apply(null, cn)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete bl[bN]
    };
    mU.bdi = function (bN, gP) {
        gP = gP || cC;
        var bk = this.bS[nd + "-l"][bN];
        if (!bk) {
            bk = [gP];
            this.bS[nd + "-l"][bN] = bk;
            return!1
        }
        bk.push(gP);
        return!0
    };
    mU.bSv = function (bk, cq, gM) {
        if (!bk)return!1;
        cq = parseInt(cq) || 0;
        gM = parseInt(gM) || 0;
        if (!gM) {
            if (!bk.loaded)return!1;
            gM = bk.length
        }
        if (!!bk.loaded)gM = Math.min(gM, bk.length - cq);
        for (var i = 0; i < gM; i++)if (!bk[cq + i])return!1;
        return!0
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bm = bd("nej.u"), bM = bd("nej.ut"), bc, bO;
    if (!!bM.Mo)return;
    bM.Mo = NEJ.C();
    bc = bM.Mo.bU(bM.bcs);
    bO = bM.Mo.dr;
    bc.cz = function (bf) {
        this.cB(bf);
        this.uS = bf.key || "id";
        this.ck = bf.data || cg;
        this.bSs = !!bf.autogc;
        this.bSr(bf.id)
    };
    bc.cR = function () {
        this.cV();
        if (!!this.gl) {
            this.brP()
        }
    };
    bc.bSr = function (bB) {
        var ce;
        if (!!bB) {
            ce = this.bS[bB];
            if (!ce) {
                ce = {};
                this.bS[bB] = ce
            }
        }
        ce = ce || this.bS;
        ce.hash = ce.hash || {};
        this.Ml = ce
    };
    bc.brP = function () {
        this.gl = window.clearTimeout(this.gl);
        var cE = {};
        bm.fo(this.Ml, function (bk, bN) {
            if (bN == "hash")return;
            if (!bm.hh(bk))return;
            bm.cv(bk, function (bw) {
                if (!bw)return;
                cE[bw[this.uS]] = !0
            }, this)
        }, this);
        bm.fo(this.Oz(), function (bw, bB, fA) {
            if (!cE[bB]) {
                delete fA[bB]
            }
        })
    };
    bc.bSn = function () {
        if (!!this.gl) {
            this.gl = window.clearTimeout(this.gl)
        }
        this.gl = window.setTimeout(this.brP.bi(this), 150)
    };
    bc.yg = function (bw, bei) {
        bw = this.bSj(bw, bei) || bw;
        if (!bw)return null;
        var bN = bw[this.uS];
        if (bN != null) {
            var yi = this.Oz()[bN];
            if (!!yi)bw = NEJ.X(yi, bw);
            this.Oz()[bN] = bw
        }
        delete bw.brY;
        return bw
    };
    bc.bSj = cC;
    bc.beo = function (bN, bw) {
        if (!bw)return;
        if (!bm.hh(bw)) {
            var bk = this.hT(bN), bw = this.yg(bw, bN);
            if (!!bw)bk.unshift(bw);
            return
        }
        bm.nt(bw, this.beo.bi(this, bN))
    };
    bc.Mh = function (bN, dL) {
        var bk = this.hT(bN);
        bk.length = Math.max(bk.length, dL);
        this.bet(bN);
        return this
    };
    bc.kW = function (bN) {
        return this.hT(bN).length
    };
    bc.bet = function (bN, qV) {
        this.hT(bN).loaded = qV != !1;
        return this
    };
    bc.OB = function (bN) {
        return!!this.hT(bN).loaded
    };
    bc.rq = function (bN, bk) {
        this.wy(bN);
        this.beL({key: bN, offset: 0, limit: bk.length + 1}, {list: bk, total: bk.length})
    };
    bc.hT = function () {
        var AB = function (bN) {
            return(bN || "") + (!bN ? "" : "-") + "list"
        };
        return function (bN) {
            var bN = AB(bN), bk = this.Ml[bN];
            if (!bk) {
                bk = [];
                this.Ml[bN] = bk
            }
            return bk
        }
    }();
    bc.Oz = function () {
        var fA = this.Ml.hash;
        if (!fA) {
            fA = {};
            this.Ml.hash = fA
        }
        return fA
    };
    bc.bff = function () {
        var AB = function (bf) {
            return"r-" + bf.key
        };
        return function (bf) {
            var iK = NEJ.X({}, bf), mQ = AB(iK);
            if (!this.bdi(mQ, this.bK.bi(this))) {
                iK.rkey = mQ;
                iK.onload = this.bSg.bi(this, iK);
                this.bK("dopullrefresh", iK)
            }
            return this
        }
    }();
    bc.bSg = function (bf, bk) {
        this.beo(bf.key, bk);
        this.bde(bf.rkey, "onpullrefresh", bf)
    };
    bc.qb = function () {
        var AB = function (bf) {
            return"r-" + bf.key + "-" + bf.offset + "-" + bf.limit
        };
        return function (bf) {
            bf = bf || cg;
            var iK = {key: "" + bf.key || "", ext: bf.ext || null, data: bf.data || null, offset: parseInt(bf.offset) || 0, limit: parseInt(bf.limit) || 0}, bk = this.hT(iK.key);
            if (this.bSv(bk, iK.offset, iK.limit)) {
                this.bK("onlistload", iK);
                return this
            }
            var mQ = AB(iK);
            if (!this.bdi(mQ, this.bK.bi(this))) {
                iK.rkey = mQ;
                iK.onload = this.beL.bi(this, iK);
                this.bK("doloadlist", iK)
            }
            return this
        }
    }();
    bc.beL = function () {
        var Bu = function (bw, bv, bk) {
            if (!!bw) {
                return!0
            }
            bk.splice(bv, 1)
        };
        return function (bf, bp) {
            bf = bf || cg;
            var bN = bf.key, cq = bf.offset, brZ = this.hT(bN);
            var bk = bp || [];
            if (!bm.hh(bk)) {
                bk = bp.result || bp.list || [];
                var dL = parseInt(bp.total);
                if (!isNaN(dL) || dL > bk.length) {
                    this.Mh(bN, dL)
                }
            }
            bm.cv(bk, function (bw, bv) {
                brZ[cq + bv] = this.yg(bw, bN)
            }, this);
            if (bk.length < bf.limit) {
                this.bet(bN);
                bm.nt(brZ, Bu)
            }
            this.bde(bf.rkey, "onlistload", bf)
        }
    }();
    bc.wy = function () {
        var Bu = function (bw, bv, bk) {
            bk.splice(bv, 1)
        };
        return function (bN) {
            var bk = this.hT(bN);
            bm.nt(bk, Bu);
            this.bet(bN, !1);
            if (this.bSs) {
                this.bSn()
            }
            return this
        }
    }();
    bc.bse = function (bw, bei) {
        return!bw.brY
    };
    bc.fw = function (bB) {
        return this.Oz()[bB]
    };
    bc.cen = function (bB) {
        var bw = this.fw(bB);
        if (!!bw)bw.brY = !0
    };
    bc.bfZ = function () {
        var AB = function (bf) {
            return"r-" + bf.key + "-" + bf.id
        };
        return function (bf) {
            bf = bf || cg;
            var bB = bf[this.uS], iK = {id: bB, ext: bf.ext, data: bf.data || {}, key: "" + bf.key || ""};
            bw = this.fw(bB);
            iK.data[this.uS] = bB;
            if (!!bw && this.bse(bw, iK.key)) {
                this.bK("onitemload", iK);
                return this
            }
            var mQ = AB(iK);
            if (!this.bdi(mQ, this.bK.bi(this))) {
                iK.rkey = mQ;
                iK.onload = this.bRQ.bi(this, iK);
                this.bK("doloaditem", iK)
            }
            return this
        }
    }();
    bc.bRQ = function (bf, bw) {
        bf = bf || cg;
        this.yg(bw, bf.key);
        this.bde(bf.rkey, "onitemload", bf)
    };
    bc.kV = function (bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.wF.bi(this, bf);
        this.bK("doadditem", bf)
    };
    bc.wF = function (bf, bw) {
        var bN = bf.key;
        bw = this.yg(bw, bN);
        if (!!bw) {
            var fI = 0, bk = this.hT(bN);
            if (!bf.push) {
                fI = -1;
                var cq = bf.offset || 0;
                bk.splice(cq, 0, bw)
            } else if (bk.loaded) {
                fI = 1;
                bk.push(bw)
            } else {
                bk.length++
            }
        }
        var be = {key: bN, flag: fI, data: bw, action: "add", ext: bf.ext};
        this.bK("onitemadd", be);
        return be
    };
    bc.Mb = function (bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.bgv.bi(this, bf);
        this.bK("dodeleteitem", bf)
    };
    bc.bgv = function (bf, bRP) {
        var bw, bN = bf.key;
        if (!!bRP) {
            bw = this.fw(bf.id) || null;
            var bB = bf.id, bRO = this.uS, bk = this.hT(bN), bv = bm.eg(bk, function (yi) {
                return!!yi && yi[bRO] == bB
            });
            if (bv >= 0)bk.splice(bv, 1)
        }
        var be = {key: bN, data: bw, action: "delete", ext: bf.ext};
        this.bK("onitemdelete", be);
        return be
    };
    bc.OH = function (bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.bRG.bi(this, bf);
        this.bK("doupdateitem", bf)
    };
    bc.bRG = function (bf, bw) {
        var bN = bf.key;
        if (!!bw)bw = this.yg(bw, bN);
        var be = {key: bN, data: bw, action: "update", ext: bf.ext};
        this.bK("onitemupdate", be);
        return be
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bm = bd("nej.u"), bM = bd("nej.ut"), bc;
    if (!!bM.bgV)return;
    bM.bgV = NEJ.C();
    bc = bM.bgV.bU(bM.Mo);
    bc.cz = function (bf) {
        this.cB(bf);
        this.XF({doloadlist: this.Vf.bi(this), doloaditem: this.bha.bi(this), doadditem: this.bsk.bi(this), dodeleteitem: this.OI.bi(this), doupdateitem: this.OJ.bi(this), dopullrefresh: this.bso.bi(this)})
    };
    bc.Vf = cC;
    bc.bso = cC;
    bc.bha = cC;
    bc.bsk = cC;
    bc.OI = cC;
    bc.OJ = cC
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bI = bd("nej.ut"), bn = bd("nm.x"), bq = bd("nm.d"), bc, bO;
    bq.ik = NEJ.C();
    bc = bq.ik.bU(bI.bgV);
    bc.dJ = function () {
        var bsp = location.protocol + "//" + location.host;
        var bRv = function (cH, bl) {
            var cE = {conf: {}, data: {}, urls: []};
            bm.cv(cH, function (bN, bv, bk) {
                var cj = bq.bG(bN);
                if (!cj)return;
                var LT = bsr(cj.url, bl[bN]);
                cE.urls.push(LT);
                cE.conf[LT] = cj;
                cE.data[LT] = JSON.stringify(bl[bN] == null ? "" : bl[bN])
            });
            return cE
        };
        var bsr = function (bZ, bl) {
            return bZ.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return bl[$2] || $1
            })
        };
        var bss = function (cj, bf, be) {
            bj.bK(window, "requesterror", be);
            if (!!be.stopped)return;
            var Gh = cj.onerror || bf.onerror;
            if (bm.gH(Gh)) {
                this.bK(Gh, be, bf)
            } else {
                (Gh || cC).call(this, be, bf)
            }
            var be = {result: be, option: bf};
            this.bK("onerror", be);
            if (!be.stopped)(cj.onmessage || cC).call(this, be.result.code, be.result)
        };
        var bsu = function (bV, cj, bf) {
            var bp = bV;
            if (bm.hC(cj.format)) {
                bp = cj.format.call(this, bV, bf)
            }
            return bp
        };
        var Ln = function (bV, cj, bf, td) {
            if (bm.hC(cj.beforeload)) {
                cj.beforeload.call(this, bV, bf, cj)
            }
            if (bV && bV.code != null && bV.code != 200) {
                bss.call(this, cj, bf, {key: bf.key, code: bV.code, message: bV.message || "", captchaId: bV.captchaId});
                return
            }
            var bp = bV;
            if (!td) {
                bp = bsu.call(this, bV, cj, bf)
            } else if (bm.hC(cj.format)) {
                var bhS = [];
                bm.cv(td.urls, function (bZ) {
                    bhS.push(bsu.call(this, bV[bZ], td.conf[bZ], bf))
                }, this);
                bhS.push(bf);
                bp = cj.format.apply(this, bhS)
            }
            var su = cj.onload || bf.onload, bsv = cj.finaly || bf.finaly || cC;
            if (bm.gH(su)) {
                bsv.call(this, this.bK(su, bp), bf)
            } else {
                bsv.call(this, (su || cC).call(this, bp), bf)
            }
        };
        var WF = function (cj, bf, dc) {
            bss.call(this, cj, bf, {key: bf.key, code: dc.code || -1, message: dc.message || ""})
        };
        return function (cj, bf) {
            if (bm.gH(cj)) {
                cj = bq.bG(cj)
            }
            delete bf.value;
            (cj.filter || cC).call(this, bf, cj);
            var bV = bf.value;
            if (!!bV) {
                Ln.call(this, bV, cj, bf);
                return
            }
            var bZ, bl = bf.data || cg, wL = {cookie: !0, type: cj.rtype || "json", method: cj.type || "POST", onerror: WF.bi(this, cj, bf), noescape: cj.noescape};
            if (bm.hh(cj.url)) {
                var td = bRv(cj.url, bl);
                bZ = bsp + "/api/batch";
                wL.data = bm.eX(td.data);
                wL.onload = Ln.gY(this, cj, bf, td);
                wL.headers = {"batch-method": "POST"};
                delete td.data
            } else {
                var lp = cj.url.indexOf(":") < 0 ? bsp : "";
                bZ = bsr(lp + cj.url, bl);
                wL.data = bm.eX(bf.data);
                wL.onload = Ln.gY(this, cj, bf)
            }
            if (wL.method == "GET")wL.query = wL.data;
            return bA.cG(bZ, wL)
        }
    }();
    bc.BB = function () {
        var gK = /^get|list|pull$/i;
        return function (bsz, bf) {
            var bN = bf.key, cj = bq.bG(bN.split("-")[0] + "-" + bsz);
            if (gK.test(bsz) && bN.indexOf("post-") < 0)cj.type = "GET";
            this.dJ(cj, bf)
        }
    }();
    bc.cez = function (bN, bk) {
        var dL = bk.length;
        this.beL({key: bN, offset: 0, limit: dL + 1}, {list: bk, total: dL})
    };
    bc.Vf = function (bf) {
        this.BB("list", bf)
    };
    bc.bha = function (bf) {
        this.BB("get", bf)
    };
    bc.bso = function (bf) {
        this.BB("pull", bf)
    };
    bc.bsk = function (bf) {
        this.BB("add", bf)
    };
    bc.OI = function (bf) {
        this.BB("del", bf)
    };
    bc.OJ = function (bf) {
        this.BB("update", bf)
    };
    bc.bRg = function (bw) {
        this.yg(bw)
    };
    bI.gN.bF({element: window, event: "requesterror"})
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bj = bd("nej.v"), bI = bd("nej.ut"), bq = bd("nm.d"), bio = {}, bc, bO;
    var tL = function (bp, bf) {
        bp.conf = bf.conf;
        return bp
    };
    bq.fX({"res-mv-get": {type: "GET", url: "/api/v1/mv/detail", format: function (bV, bf) {
        return tL({mv: bV}, bf)
    }}, "res-song-get": {type: "GET", url: "/api/song/detail/", format: function (bp, bf) {
        if (!!bp.songs && bp.songs.length > 0)bp.song = bp.songs[0]; else bp.song = bio;
        delete bp.songs;
        return tL(bp, bf)
    }, filter: function (bf) {
        bf.data.ids = "[" + bf.data.id + "]"
    }}, "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: tL}, "res-album-get": {type: "GET", url: "/api/album/{id}", format: tL}, "res-playlist-get": {type: "GET", url: "/api/playlist/detail", format: function (bp, bf) {
        bp.playlist = bp.result;
        delete bp.result;
        return tL(bp, bf)
    }}, "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: tL}, "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: tL}, "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: tL}, "res-djradio-get": {type: "GET", url: "/api/dj/program/byradio", filter: function (bf) {
        var bk = bf.data.id.split("-");
        bf.data.radioId = bk[0];
        bf.data.asc = bk[1] == 2;
        bf.data.limit = 1e3;
        delete bf.data.id
    }, format: function (bV, bf) {
        var bRe = {id: bf.data.radioId, programs: bV.programs};
        return tL({djradio: bRe}, bf)
    }}, "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: tL}, "res-lyric-get": {type: "GET", url: "/api/song/lyric", filter: function (bf) {
        bf.data.lv = 0;
        bf.data.tv = 0
    }, format: function (bp, bf) {
        var tZ = {lyric: "", nolyric: true};
        if (bp.code == 200 && bp.lrc && bp.lrc.lyric) {
            tZ.lyric = bp.lrc.lyric;
            tZ.nolyric = false
        } else {
            tZ.nolyric = true
        }
        return tL({lyric: tZ}, bf)
    }}});
    bq.tV = NEJ.C();
    bc = bq.tV.bU(bq.ik);
    bc.bRc = function (bu, dO) {
        return this.qA(this.OM(bu, dO))
    };
    bc.LL = function (bu, dO, bf) {
        bf = bf || {};
        var bl = this.qA(this.OM(bu, dO));
        if (bl && (bu != 13 && bu != 19 || bf.conf && bf.conf.useCache)) {
            this.bK("onresourceload", bu, dO, bl, bf.conf);
            return
        }
        bf.data = {id: dO};
        bf.onload = this.bQX.bi(this, bu, dO);
        bf.onerror = this.bQT.bi(this, bu, dO);
        this.dJ("res-" + this.zw(bu) + "-get", bf)
    };
    bc.bQX = function (bu, dO, bp) {
        var bl = bp[this.zw(bu)];
        this.pn(this.OM(bu, dO), bl);
        this.bK("onresourceload", bu, dO, bl, bp.conf)
    };
    bc.bQT = function (bu, dO, bp, bf) {
        if (bp.code != 404) {
            this.bK("onresourceerror", bu, dO, bp.code);
            return
        }
        this.pn(this.OM(bu, dO), bio);
        this.bK("onresourceload", bu, dO, bio, bf.conf)
    };
    bc.ceB = function (bu, bf) {
        this.dJ("res-" + this.zw(bu) + "-play", bf)
    };
    bc.OM = function (bu, dO) {
        return"res-" + this.zw(bu) + "-" + dO
    };
    bc.zw = function (bu) {
        var cE = {2: "hotSongs", 13: "playlist", 17: "program", 18: "song", 19: "album", 21: "mv", 41: "lyric", 70: "djradio"};
        return cE[bu]
    };
    bq.tV.Gb = function (bu, dO) {
        if (!this.fJ)this.fJ = bq.tV.bF({});
        return this.fJ.bRc(bu, dO)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bq = bd("nm.d"), bjt = /^[1-9][0-9]*$/, bc, bO;
    var LOCAL_LOG_KEY = "local-log";
    bq.fX({"bi-log": {url: "/api/feedback/weblog"}, "bi-batch-log": {url: "/api/feedback/weblog"}, "plus-mv-count": {url: "/api/song/mv/play"}, "plus-song-count": {url: "/api/song/play"}, "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"}, "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}});
    bq.kQ = NEJ.C();
    bc = bq.kQ.bU(bq.ik);
    bc.mW = function (cl, cj) {
        if (!cl || !cj)return;
        if (bm.gH(cj)) {
            try {
                cj = JSON.parse(cj)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", bb)
                }
            }
        }
        if (!bm.qj(cj))return;
        this.dJ("bi-log", {data: {logs: JSON.stringify([
            {action: cl, json: cj}
        ])}})
    };
    bc.OX = function (nO) {
        if (!bm.hh(nO))return;
        this.dJ("bi-batch-log", {data: {logs: JSON.stringify(nO)}})
    };
    bc.bsH = function (cj) {
        if (!cj || !cj.type || !cj.rid)return;
        var nk = cj.type;
        if (bjt.test(nk)) {
            nk = this.zw(nk)
        }
        if (!nk)return;
        if (nk == "playlist")nk = "list";
        this.mW("search", {type: nk, id: cj.rid || null, keyword: cj.keyword || null})
    };
    bc.Lx = function () {
        var bQN = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (cj) {
            if (!cj || !cj.type || !cj.rid)return;
            if (cj.play === undefined)cj.play = true;
            var nk = cj.type;
            if (bjt.test(nk)) {
                nk = this.zw(nk)
            }
            if (!nk)return;
            if (nk == "playlist")nk = "list";
            var bV = {id: cj.rid, type: nk};
            if (nk == "song" && cj.source) {
                bV.source = this.bsM(cj.source);
                if (!!cj.sourceid)bV.sourceid = cj.sourceid
            }
            this.mW(!cj.play ? "addto" : "play", bV);
            if (nk == "song" && cj.hash && cj.hash.match(bQN)) {
                this.mW(!cj.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    bc.VC = function (bB, cT, eO, Cz) {
        var bV = {type: "song", wifi: 0, download: 0};
        var bQJ = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        bV.id = bB;
        bV.time = Math.round(cT);
        bV.end = bm.gH(Cz) ? Cz : bQJ[Cz] || "";
        if (eO && eO.fid) {
            bV.source = this.bsM(eO.fid);
            bV.sourceId = eO.fdata
        }
        this.mW("play", bV)
    };
    bc.bsN = function (bu, dO) {
        if (!bu || !dO)return;
        if (bjt.test(bu))bu = this.zw(bu);
        if (bu != "playlist" && bu != "dj")return;
        var cj = bq.bG("plus-" + bu + "-count");
        if (!cj)return!1;
        this.dJ(cj, {data: {id: dO}});
        var ce = this.lk("play-hist-" + bu, []);
        if (bm.eg(ce, dO) < 0) {
            ce.push(dO);
            return!0
        }
        return!1
    };
    bc.zw = function (bu) {
        var cE = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return cE[bu]
    };
    bc.bsM = function (FY) {
        var cE = {1: "user", 2: "artist", 13: "list", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist", 32: "search", 33: "search", 34: "event", 35: "msg"};
        return cE[FY]
    };
    bc.bQH = function (hZ) {
        var nO = this.zP(LOCAL_LOG_KEY, []);
        nO.unshift(hZ);
        if (nO.length > 200) {
            nO.length = 200
        }
        this.uw(LOCAL_LOG_KEY, nO)
    };
    bc.bQG = function () {
        return this.My(LOCAL_LOG_KEY)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bj = bd("nej.v"), bA = bd("nej.j"), bI = bd("nej.ut"), bb = bd("nej.e"), bm = bd("nej.u"), bo = bd("nm.l"), bn = bd("nm.x"), bq = bd("nm.d");
    if (!bq.tV)return;
    var ce = bq.tV.bF({onresourceload: bQB});
    var Ll = bq.kQ.iE();

    function bQB(bu, dO, bl, cj) {
        var bk = [];
        switch (parseInt(bu)) {
            case 2:
                bk = bl;
                break;
            case 13:
                bk = bl.tracks;
                break;
            case 18:
                bk.push(bl);
                break;
            case 19:
                bk = bl.songs;
                break;
            case 21:
                if (bl.mp && bl.mp.fee && bl.mp.pl <= 0) {
                    bn.Wk(bl.data.id, bl.mp.fee);
                    return
                }
                break
        }
        if (bn.FW(bk, true, null, bu == 19 ? {source: "album", sourceid: dO} : null) == 0) {
            return
        }
        bn.gz({clazz: "m-layer-w2", bubble: !1, message: cj.message})
    }

    function bQA(be, qX, xa, ib) {
        ib = ib || {};
        if (be.action == "ok") {
            if (xa) {
                location.dispatch2("/payfee?songId=" + xa)
            } else {
                location.dispatch2("/payfee?fee=" + qX || 1)
            }
            Ll.mW("click", {type: "tobuyvip", name: "box", source: ib.source || "song", sourceid: ib.sourceid || xa || 0})
        } else if (be.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + xa);
            Ll.mW("click", {type: "tobuyone", name: "box", source: ib.source || "song", sourceid: ib.sourceid || xa || 0})
        }
    }

    function uL(cZ) {
        bn.gz({clazz: "m-layer-w2", bubble: !1, message: cZ, btntxt: "知道了"})
    }

    function vd(cZ, bV) {
        uL((bV || cg).toast || cZ)
    }

    bn.kK = function (cZ, bB, bu, xr, co) {
        cZ = cZ || "由于版权保护，您所在的地区暂时无法使用。";
        if (xr && co && co.privilege && co.privilege.toast) {
            bA.cG("/api/song/toast", {query: {id: co.id}, type: "json", onload: vd.bi(this, cZ), onerror: vd.bi(this, cZ)})
        } else if (bB && bu) {
            ce.LL(bu, bB, {conf: {message: cZ, useCache: bu != 18}})
        } else {
            uL(cZ)
        }
    };
    bn.sK = function (qX, xa, bu, ib, Gx) {
        var cX, rl = "m-popup-info", WA = "单首购买", bsS = "马上去开通", dS = "唱片公司要求，当前歌曲须付费使用。", cix = true;
        try {
            cX = top.api.feeMessage || {}
        } catch (e) {
            cX = {}
        }
        if (qX == 1 || qX == 8 || qX == 16) {
            if (bu == "song") {
                rl = "m-popup-song-buy";
                dS = cX["vip2"] || dS;
                bsS = cX["vip2button"] || "包月购买";
                WA = cX["vip2link"] || WA;
                if (Gx && Gx.flag !== undefined) {
                    var cH = Gx.flag.toString(2).split("");
                    if (parseInt(cH.pop(), 10) == 1) {
                        cix = false
                    }
                }
            } else {
                dS = cX["vip"] || dS
            }
        } else if (qX == 4) {
            dS = cX["album"] || dS
        } else {
            dS = cX["unknow"] || dS
        }
        bn.lg({clazz: "m-layer-w5", html: bb.dg(rl, {songTxt: WA, tip: dS, oktext: bsS, cctext: "以后再说", showSongText: cix}), onaction: bQA.gY(null, qX, xa, ib)})
    };
    bn.bsT = function (WJ, zF) {
        bn.iu({title: "提示", message: "唱片公司要求，该歌曲须下载后播放", btnok: "下载", btncc: "取消", okstyle: "u-btn2-w1", ccstyle: "u-btn2-w1", action: function (bu) {
            if (bu == "ok") {
                bn.NW({id: WJ, type: zF})
            }
        }})
    };
    bn.Wk = function (nL, qX) {
        var cX, dS = "唱片公司要求，当前歌曲须付费使用。";
        try {
            cX = top.api.feeMessage || {}
        } catch (e) {
            cX = {}
        }
        if (qX == 1 || qX == 8) {
            dS = cX["vip"] || dS
        } else if (qX == 4) {
            dS = cX["album"] || dS
        } else {
            dS = cX["unknow"] || dS
        }
        return bn.lg({clazz: "m-layer-w5", html: bb.dg("m-popup-info", {tip: dS, oktext: "马上去开通", cctext: "以后再说"}), onaction: function (be) {
            if (be.action == "ok") {
                location.dispatch2("/payfee?mvId=" + nL);
                Ll.mW("click", {type: "tobuyone", name: "box", source: "mv", sourceid: nL || 0})
            }
        }})
    };
    bn.FW = function () {
        function compareFee(bQu, bQt) {
            var cE = {1: 99, 8: 99, 4: 88, 16: 99};
            return(cE[bQu] || 0) - (cE[bQt] || 0)
        }

        return function (bk, dS, sm, ib) {
            sm = sm || {};
            var vJ = [], Ld = {}, bsV = 0, bsW = 0, qQ = null;
            if (!bk || !bk.length)return vJ;
            bm.cv(bk, function (co) {
                var gr = bn.oP(co);
                if (gr == 0) {
                    vJ.push(co)
                } else if (gr == 10) {
                    if (co.privilege) {
                        co.fee = co.privilege.fee
                    }
                    if (compareFee(co.fee, Ld.fee) > 0) {
                        Ld = co
                    }
                } else if (gr == 11) {
                    ++bsV;
                    if (!sm.play)vJ.push(co)
                } else if (gr == 1e3) {
                    ++bsW;
                    if (!sm.download)vJ.push(co)
                } else if (gr == 100) {
                    qQ = co
                }
            });
            if (vJ.length == 0 && dS) {
                if (bsV == bk.length) {
                    var wR = bk[0].privilege || {};
                    if (wR.payed) {
                        bn.kK("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        bn.sK(wR.fee, null, null, ib)
                    }
                } else if (bsW == bk.length) {
                    bn.kK("因版权方要求，该歌曲不支持下载")
                } else if (Ld.id) {
                    bn.sK(Ld.fee, Ld.id, null, ib, Ld.privilege)
                } else {
                    if (qQ && bk.length == 1 && qQ.privilege && qQ.privilege.st < 0 && qQ.privilege.toast) {
                        bn.kK(null, null, null, true, qQ)
                    } else {
                        bn.kK()
                    }
                }
            }
            return vJ
        }
    }();
    bn.oP = function (co) {
        if (!co)return 0;
        var gr = co.privilege;
        if (co.program)return 0;
        if (window.GAbroad)return 100;
        if (gr) {
            if (gr.st != null && gr.st < 0) {
                return 100
            }
            if (gr.fee > 0 && gr.fee != 8 && gr.payed == 0)return 10;
            if (gr.fee == 16)return 11;
            if ((gr.fee == 0 || gr.payed) && gr.pl > 0 && gr.dl == 0)return 1e3;
            if (gr.pl == 0 && gr.dl == 0)return 100;
            return 0
        } else {
            var gf = co.status != null ? co.status : co.st != null ? co.st : 0;
            if (co.status >= 0)return 0;
            if (co.fee > 0)return 10;
            return 100
        }
    }
})();
(function () {
    var bd = NEJ.P, bA = bd("nej.j"), bm = bd("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        bA.cG = bA.cG.fj(function (be) {
            bf = be.args[1];
            bf.query = bf.query || {};
            if (bm.gH(bf.query))bf.query = bm.iO(bf.query);
            bf.query.ref = "mail"
        })
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bM = bd("nej.ui"), bc;
    if (!!bM.Xq)return;
    var iP = bb.rA(".#<uispace>{position:absolute;background:#fff;}");
    bM.Xq = NEJ.C();
    bc = bM.Xq.bU(bM.LR);
    bc.cz = function (bf) {
        this.cB(bf);
        this.dq([
            [document, "click", this.rf.bi(this)]
        ]);
        this.bQq = !!bf.nostop;
        this.bsX = {top: bf.top, left: bf.left}
    };
    bc.cR = function () {
        delete this.wN;
        delete this.XA;
        delete this.pk;
        delete this.bsY;
        delete this.Pq;
        delete this.bsX;
        this.cV()
    };
    bc.dx = function () {
        this.lz = iP
    };
    bc.dm = function () {
        this.dw();
        this.yN = this.bs;
        bj.bt(this.bs, "click", this.bQn.bi(this))
    };
    bc.rf = function (be) {
        if (be.button != 2)this.cw()
    };
    bc.bQn = function (be) {
        if (this.bQq)return;
        bj.ru(be);
        var bC = bj.bY(be);
        if (bC.tagName == "A")bj.dp(be)
    };
    bc.bQd = function () {
        var eh = /\s+/i;
        return function (ng) {
            ng = (ng || "").trim().toLowerCase().split(eh);
            ng[0] = ng[0] || "bottom";
            ng[1] = ng[1] || "left";
            this.pk = ng
        }
    }();
    bc.bQc = function (ng) {
        var bp = {}, mI = this.XA, ceF = bb.qr(), eZ = this.bs.offsetWidth, en = this.bs.offsetHeight;
        switch (ng[0]) {
            case"top":
                bp.top = mI.top - en;
                bp.left = ng[1] == "right" ? mI.left + mI.width - eZ : mI.left;
                break;
            case"left":
                bp.left = mI.left - eZ;
                bp.top = ng[1] == "bottom" ? mI.top + mI.height - en : mI.top;
                break;
            case"right":
                bp.left = mI.left + mI.width;
                bp.top = ng[1] == "bottom" ? mI.top + mI.height - en : mI.top;
                break;
            default:
                bp.top = mI.top + mI.height;
                bp.left = ng[1] == "right" ? mI.left + mI.width - eZ : mI.left;
                break
        }
        return bp
    };
    bc.Mc = function () {
        if (!this.bsY) {
            this.hn(this.bsX);
            return
        }
        if (!!this.Pq) {
            this.hn(this.wN);
            return
        }
        if (!!this.XA)this.hn(this.bQc(this.pk))
    };
    bc.bPZ = function (bC, el, be) {
        el = el || cg;
        var btf = bb.qr(), dY = bj.mS(be) + (el.left || 0), hv = bj.qi(be) + (el.top || 0), eZ = bC.offsetWidth + (el.right || 0), en = bC.offsetHeight + (el.bottom || 0), FK = btf.scrollWidth, XW = btf.scrollHeight, XX = dY + eZ, XY = hv + en;
        switch (this.pk[0]) {
            case"top":
                hv = XY > XW ? hv - en : hv;
                if (this.pk[1] == "right") {
                    dY = dY - eZ < 0 ? 0 : dY - eZ
                } else {
                    dY = XX > FK ? FK - eZ : dY
                }
                break;
            case"left":
                dY = XX > FK ? FK - eZ : dY;
                if (this.pk[1] == "top") {
                    hv = XY > XW ? hv - en : hv
                } else {
                    hv = hv - en < 0 ? hv : hv - en
                }
                break;
            case"right":
                dY = dY - eZ < 0 ? 0 : dY - eZ;
                if (this.pk[1] == "top") {
                    hv = XY > XW ? hv - en : hv
                } else {
                    hv = hv - en < 0 ? hv : hv - en
                }
                break;
            default:
                hv = hv - en < 0 ? hv : hv - en;
                if (this.pk[1] == "left") {
                    dY = XX > FK ? FK - eZ : dY
                } else {
                    dY = dY - eZ < 0 ? 0 : dY - eZ
                }
                break
        }
        return{top: hv, left: dY}
    };
    bc.XZ = function () {
        var bPX = function (bC, el) {
            bC = bb.bG(bC);
            if (!bC)return;
            el = el || cg;
            var cq = bb.jX(bC);
            return{top: cq.y - (el.top || 0), left: cq.x - (el.left || 0), width: bC.offsetWidth + (el.right || 0), height: bC.offsetHeight + (el.bottom || 0)}
        };
        return function (bf) {
            bf = bf || cg;
            this.Pq = bf.event;
            this.bQd(bf.align);
            if (!!this.Pq)this.wN = this.bPZ(bf.target, bf.delta, this.Pq);
            this.XA = bPX(bf.target, bf.delta);
            this.bsY = !!bf.fitable;
            this.bR();
            return this
        }
    }()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bM = bd("nej.ui"), bc, bO;
    if (!!bM.yD)return;
    bM.yD = NEJ.C();
    bc = bM.yD.bU(bM.OD);
    bO = bM.yD.dr;
    bM.yD.ceG = function () {
        var bPU = function (be, bB, gb, kd, KF) {
            var dP, bN = bB + "-i", ce = gb.wA, btk = !!kd.noclear, btl = !!kd.toggled;
            if (bm.hC(kd.onbeforeclick)) {
                var PD = kd.noclear, bPJ = kd.toggled;
                try {
                    kd.onbeforeclick(kd)
                } catch (e) {
                }
                btk = !!kd.noclear;
                btl = !!kd.toggled;
                kd.toggled = bPJ;
                kd.noclear = PD
            }
            var Cb = ce[bN];
            if (btl && !!Cb) {
                Cb.cw();
                return
            }
            bj.cu(be);
            if (!btk) {
                bj.bK(document, "click");
                dP = gb.bF(kd)
            } else {
                dP = gb.car(kd, !0)
            }
            ce[bN] = dP;
            dP.Ch("onbeforerecycle", function () {
                delete ce[bN]
            });
            dP.XZ(KF)
        };
        return function (bh, bf) {
            bh = bb.bG(bh);
            if (!bh)return this;
            if (!this.wA)this.wA = {};
            var bB = bb.lr(bh);
            if (!!this.wA[bB])return this;
            bf = NEJ.X({}, bf);
            var KF = NEJ.EX({align: "", delta: null, fitable: !1}, bf);
            KF.target = bB;
            bf.destroyable = !0;
            if (!bf.fixed) {
                KF.fitable = !0;
                bf.parent = document.body
            }
            this.wA[bB] = [bB, bf.event || "click", bPU.gY(null, bB, this, bf, KF)];
            bj.bt.apply(bj, this.wA[bB]);
            return this
        }
    }();
    bM.yD.ceI = function (bh) {
        if (!this.wA)return this;
        var bB = bb.lr(bh), be = this.wA[bB];
        if (!be)return this;
        delete this.wA[bB];
        bj.oz.apply(bj, be);
        var dP = this.wA[bB + "-i"];
        if (!!dP)dP.cw();
        return this
    };
    bc.bbe = function () {
        return bM.Xq.bF(this.dk)
    };
    bc.Me = function () {
        bO.Me.apply(this, arguments);
        this.dk.top = null;
        this.dk.left = null;
        this.dk.nostop = !1
    };
    bc.XZ = function (bf) {
        if (!!this.nX)this.nX.XZ(bf);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cA = bd("nej.ui"), bo = bd("nm.l"), bc, bO;
    bo.YI = NEJ.C();
    bc = bo.YI.bU(cA.yD);
    bc.cz = function (bf) {
        bf.nohack = true;
        this.cB(bf)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bo = bd("nm.l"), bc, bO;
    bo.ci = NEJ.C();
    bc = bo.ci.bU(bo.YI);
    bO = bo.ci.dr;
    bc.cz = function (bf) {
        this.cB(bf);
        this.fL = bf.type || 1
    };
    bc.dm = function () {
        this.dw();
        this.bs = bb.oZ(this.bPE());
        var bk = bb.eu(this.bs);
        this.FH = bk[0];
        this.dA = bk[1]
    };
    bc.bPE = function () {
        return'<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    bc.Mc = function () {
        var bD = {}, ds = this.bs.style, lU = bb.qr(), tF = {left: lU.scrollLeft, top: lU.scrollTop}, el = {left: lU.clientWidth - this.bs.offsetWidth, top: lU.clientHeight - this.bs.offsetHeight};
        bD.top = Math.max(0, tF.top + el.top / 2);
        bD.left = Math.max(0, tF.left + el.left / 2);
        this.nX.hn(bD)
    };
    bc.bR = function (bf) {
        bO.bR.call(this);
        this.Mc();
        this.fL == 1 ? bb.gL(this.FH, "u-icn-32", "u-icn-31") : bb.gL(this.FH, "u-icn-31", "u-icn-32");
        this.dA.innerHTML = bf.tip || ""
    };
    bo.ci.bR = function () {
        var hd;
        return function (bf) {
            clearTimeout(hd);
            if (bf.parent === undefined)bf.parent = document.body;
            if (bf.autoclose === undefined)bf.autoclose = true;
            bf.clazz = "m-sysmsg";
            !!this.fJ && this.fJ.bW();
            this.fJ = this.bF(bf);
            this.fJ.bR(bf);
            if (bf.autoclose)hd = setTimeout(this.cw.bi(this), 2e3)
        }
    }();
    bo.ci.cw = function () {
        !!this.fJ && this.fJ.cw()
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, gm = NEJ.R, bI = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bq = bd("nm.d"), bo = bd("nm.l"), bN = "playlist-tracks_", bc;
    bq.fX({"playlist_my-list": {url: "/api/user/playlist", type: "GET", format: function (bV, bf) {
        this.bPD(bV.playlist);
        return{total: 0, list: gm}
    }, onerror: function () {
        this.bK("onlisterror")
    }}, "playlist_new-add": {url: "/api/playlist/create", format: function (bV, bf) {
        var jy = bV.playlist;
        jy.creator = GUser;
        jy.isHost = !0;
        jy.typeFlag = "playlist";
        return jy
    }, finaly: function (be, bf) {
        bj.bK(bq.hW, "listchange", be)
    }, onmessage: function () {
        var lJ = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
        return function (dX) {
            bo.ci.bR({tip: lJ[dX] || "创建失败", type: 2})
        }
    }()}, "playlist_new-del": {url: "/api/playlist/delete", type: "GET", filter: function (bf) {
        bf.id = bf.data.pid
    }, finaly: function (be, bf) {
        bj.bK(bq.hW, "listchange", be)
    }, onmessage: function () {
        var lJ = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
        return function (dX) {
            bo.ci.bR({tip: lJ[dX] || "删除失败", type: 2})
        }
    }()}, "playlist_fav-add": {type: "GET", url: "/api/playlist/subscribe/", filter: function (bf) {
        var ib = bf.ext || {};
        bf.ext = NEJ.X(ib, bf.data);
        bf.data = {id: bf.ext.id}
    }, format: function (bV, bf) {
        bo.ci.bR({tip: "收藏成功" + (bV.point > 0 ? ' 获得<em class="s-fc6">' + bV.point + "积分</em>" : "")});
        var bw = bf.ext;
        bw.subscribedCount++;
        return bw
    }, finaly: function (be, bf) {
        bj.bK(bq.bPC, "listchange", be);
        bj.bK(bq.bPC, "itemchange", {attr: "subscribedCount", data: be.data})
    }, onmessage: function () {
        var lJ = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
        return function (dX) {
            bo.ci.bR({type: 2, tip: lJ[dX] || "收藏失败，请稍后再试！"})
        }
    }()}, "playlist_fav-del": {url: "/api/playlist/unsubscribe", type: "GET", filter: function (bf) {
        bf.id = bf.data.id = bf.data.pid
    }, finaly: function (be, bf) {
        bj.bK(bq.hW, "listchange", be)
    }, onmessage: function () {
        var lJ = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
        return function (dX) {
            bo.ci.bR({tip: lJ[dX], type: 2})
        }
    }()}, "playlist_new-update": {url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"], filter: function (bf) {
        var bl = bf.data, PG = {};
        PG["playlist-update-name"] = {id: bl.id, name: bl.name};
        PG["playlist-update-tag"] = {id: bl.id, tags: bl.tags.join(";")};
        PG["playlist-update-desc"] = {id: bl.id, desc: bl.description};
        bf.data = PG;
        bf.ext = bl
    }, format: function (bX, pr, Kq, bf) {
        if (bX.code == 200 && pr.code == 200 && Kq.code == 200) {
            bf.ext.allSuccess = true;
            bo.ci.bR({tip: "保存成功"})
        } else if (bX.code == 407 || pr.code == 407 || Kq.code == 407) {
            bf.ext.allSuccess = false;
            bo.ci.bR({type: 2, tip: "输入内容包含关键字"})
        } else {
            bf.ext.allSuccess = false;
            bo.ci.bR({type: 2, tip: "保存失败"})
        }
        return this.fw(bf.ext.id)
    }, finaly: function (be, bf) {
        bj.bK(bq.hW, "listchange", be)
    }, onmessage: function (dX) {
        bo.ci.bR({type: 2, tip: "保存失败"})
    }}, "playlist-update-name": {url: "/api/playlist/update/name", format: function (bV, bf) {
        var bw = this.fw(bf.ext.id);
        if (bV.code == 200)bw.name = bf.ext.name;
        return bV
    }}, "playlist-update-tag": {url: "/api/playlist/tags/update", format: function (bV, bf) {
        var bw = this.fw(bf.ext.id);
        if (bV.code == 200)bw.tags = bf.ext.tags;
        return bV
    }}, "playlist-update-desc": {url: "/api/playlist/desc/update", format: function (bV, bf) {
        var bw = this.fw(bf.ext.id);
        if (bV.code == 200)bw.description = bf.ext.description;
        return bV
    }}, "playlist-update-cover": {url: "/api/playlist/cover/update", filter: function (bf) {
        bf.url = bf.data.url;
        delete bf.data.url
    }, format: function (bV, bf) {
        bo.ci.bR({tip: "保存成功"});
        var bw = this.fw(bf.data.id);
        bw.coverImgUrl = bf.url;
        bf.ext = bw;
        return bw
    }, onmessage: function (dX) {
        bo.ci.bR({type: 2, tip: "保存失败"})
    }, finaly: function (be, bf) {
        bj.bK(bq.hW, "itemchange", {attr: "coverImgUrl", data: bf.ext})
    }}, "playlist-upcount": {url: "/api/playlist/update/playcount", type: "GET", format: function (bV, bf) {
        var jy = this.fw(bf.data.id);
        if (!jy)return;
        jy.playCount++;
        bj.bK(bq.hW, "itemchange", {attr: "playcount", data: jy})
    }}});
    bq.hW = NEJ.C();
    bc = bq.hW.bU(bq.ik);
    bc.dv = function () {
        this.dC()
    };
    bc.btu = function () {
        var fh = GUser.userId;
        this.qb({limit: 1001, key: "playlist_my-" + fh, data: {offset: 0, limit: 1001, uid: fh}})
    };
    bc.bPD = function (bk) {
        var fh = GUser.userId, jO = [], btv = [];
        bm.cv(bk, function (bw) {
            bw.typeFlag = "playlist";
            if (bw.creator && bw.creator.userId == fh) {
                if (bw.specialType == 5)bw.name = "我喜欢的音乐";
                bw.isHost = !0;
                jO.push(bw)
            } else {
                btv.push(bw)
            }
        });
        this.rq("playlist_new-" + fh, jO);
        this.rq("playlist_fav-" + fh, btv)
    };
    bc.bPz = function (bl) {
        this.dJ("playlist-update-cover", {data: bl})
    };
    bc.ceK = function () {
        var Kn = this.bPv.bG("host-plist");
        if (Kn.length == 0) {
            return
        }
        if (Kn.length == 1 && Kn[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Kn.length; i < len; i++) {
            var bw = Kn[i];
            if (bw.trackCount > 0)return bw.id
        }
        return this.bPv.bG("host-plist")[0].id
    };
    bc.bPu = function (bB) {
        if (GUser && GUser.userId > 0) {
            this.dJ("playlist-upcount", {data: {id: bB}})
        }
    };
    bc.BQ = function () {
        if (GUser && GUser.userId > 0) {
            return!0
        } else {
            top.login();
            return!1
        }
    };
    bc.ceL = function () {
        return GUser.userId
    };
    bc.bai = function (bw) {
        if (bw.userId == GUser.userId && bw.specialType == 5)bw.name = "我喜欢的音乐";
        bj.bK(this.constructor, "itemchange", {data: this.yg(bw)});
        return bw
    };
    bI.gN.bF({element: bq.hW, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var bd = NEJ.P, gm = NEJ.R, cC = NEJ.F, cg = NEJ.O, bI = bd("nej.ut"), bj = bd("nej.v"), bm = bd("nej.u"), bn = bd("nm.x"), bq = bd("nm.d"), bo = bd("nm.l"), bc, bO;
    bq.fX({"program-get": {url: "/api/dj/program/detail", format: function (bV) {
        return bV.program
    }}, "program_djradio-list": {type: "GET", url: "/api/dj/program/byradio", filter: function (bf) {
        bf.data.limit = 1e3;
        delete bf.data.id
    }, format: function (bV, bf) {
        return bV.programs
    }}, "program_fav-list": {url: "/api/djprogram/subscribed/paged/", format: function (bV, bf) {
        return bV.programs
    }, onerror: "onlisterror"}, "program_fav-add": {url: "/api/djprogram/subscribe/", filter: function (bf) {
        bf.ext = bf.data;
        bf.data = {id: bf.ext.id};
        bf.id = bf.data.id
    }, format: function (bV, bf) {
        bo.ci.bR({tip: "收藏成功"});
        var bw = bf.ext;
        bw.subscribedCount++;
        bw.subscribed = !0;
        return bw
    }, finaly: function (be, bf) {
        bj.bK(bq.pL, "listchange", be)
    }, onmessage: function () {
        var lJ = {404: "节目不存在！", 501: "节目已收藏！"};
        return function (dX) {
            bo.ci.bR({type: 2, tip: lJ[dX] || "收藏失败！"})
        }
    }()}, "program_fav-del": {url: "/api/djprogram/unsubscribe/", finaly: function (be, bf) {
        bj.bK(bq.pL, "listchange", be)
    }, onmessage: function () {
        var lJ = {404: "节目不存在！", 502: "没有收藏此节目！"};
        return function (dX) {
            bn.bal({txt: lJ[dX] || "取消收藏失败！"})
        }
    }()}, "program-update-count": {type: "GET", url: "/api/dj/program/listen", filter: function (bf) {
        var bw = this.fw(bf.data.id) || cg;
        bf.ext = (bw.listenerCount || 0) + 1
    }, format: function (bV, bf) {
        var bw = this.fw(bf.data.id);
        if (!!bw) {
            bw.listenerCount = Math.max(bf.ext, bw.listenerCount || 0)
        }
    }, finaly: function (be, bf) {
        bj.bK(bq.pL, "itemchange", {attr: "playCount", data: this.fw(bf.data.id)})
    }}, "program-like": {url: "/api/resource/like", filter: function (bf) {
        bf.data = {threadId: "A_DJ_1_" + bf.id}
    }, format: function (bV, bf) {
        var bw = bf.ext.data || this.fw(bf.id);
        bw.liked = true;
        bw.likedCount++;
        bf.ext.data = bw;
        try {
            top.player.setLike(bw)
        } catch (e) {
        }
        return bw
    }, finaly: function (be, bf) {
        bj.bK(bq.pL, "itemchange", {attr: "likedCount", data: bf.ext.data})
    }}, "program-unlike": {url: "/api/resource/unlike", filter: function (bf) {
        bf.data = {threadId: "A_DJ_1_" + bf.id}
    }, format: function (bV, bf) {
        var bw = bf.ext.data || this.fw(bf.id);
        bw.liked = false;
        bw.likedCount--;
        bf.ext.data = bw;
        try {
            top.player.setLike(bw)
        } catch (e) {
        }
        return bw
    }, finaly: function (be, bf) {
        bj.bK(bq.pL, "itemchange", {attr: "likedCount", data: bf.ext.data})
    }}});
    bq.pL = NEJ.C();
    bc = bq.pL.bU(bq.ik);
    bc.ceM = function () {
        var fh = GUser.userId;
        this.qb({limit: 1001, key: "program_fav-" + fh, data: {offset: 0, limit: 1e3, uid: fh}})
    };
    bc.ceO = function (dN) {
        var oy = dN[this.uS];
        bn.bPp(4, function (ce) {
            ce.rq("track_program-" + oy, dN.songs)
        });
        delete dN.songs;
        var cJ = dN.mainSong;
        bn.bPp(4, function (ce) {
            ce.rq("track_program_main-" + oy, !cJ ? [] : [cJ])
        });
        dN.mainSong = (cJ || cg).id
    };
    bc.ceP = function (bB) {
        var dN = this.fw(bB), fh = localCache.Ol("host.profile.userId");
        return!!dN && dN.dj.userId == fh
    };
    bc.ceQ = function (bB) {
        return!1
    };
    bc.bai = function (bw) {
        bj.bK(this.constructor, "itemchange", {attr: "detail", data: this.yg(bw)});
        return bw
    };
    bc.bPu = function (bB) {
        this.dJ("program-update-count", {data: {id: bB}})
    };
    bn.btz = function (bf) {
        var ce = bq.pL.bF({onitemadd: function () {
            (bf.onsuccess || cC)()
        }, onerror: function () {
            (bf.onerror || cC)()
        }});
        if (bf.data.liked) {
            ce.PL(bf.data)
        } else {
            ce.xq(bf.data)
        }
    };
    bc.xq = function (dN) {
        if (!bn.ic())return;
        var dG = {ext: {}};
        if (bm.qj(dN)) {
            dG.id = dN.id;
            dG.ext.data = dN
        } else {
            dG.id = dN
        }
        this.dJ("program-like", dG)
    };
    bc.PL = function (dN) {
        if (!bn.ic())return;
        var dG = {ext: {}};
        if (bm.qj(dN)) {
            dG.id = dN.id;
            dG.ext.data = dN
        } else {
            dG.id = dN
        }
        this.dJ("program-unlike", dG)
    };
    bI.gN.bF({element: bq.pL, event: ["listchange", "itemchange"]})
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, gm = NEJ.R, bI = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bq = bd("nm.d"), bo = bd("nm.l"), bn = bd("nm.x"), bN = "playlist-tracks_", bn = bd("nm.x"), bc;
    bq.fX({"track-get": {url: "/api/v3/song/detail", filter: function (bf) {
        bf.data.c = JSON.stringify([
            {id: bf.data.id}
        ])
    }, format: function (bV, bf) {
        var co = bn.Cf(bV.songs[0]);
        co.privilege = bV.privileges[0];
        return co
    }}, "track_playlist-list": {url: "/api/v3/playlist/detail", filter: function (bf) {
        bf.data.n = 1e3
    }, format: function (bV, bf) {
        var hu = [];
        this.ra.bai(bV.playlist);
        bm.cv(bV.playlist.tracks, function (cJ, bv) {
            var btC = bn.Cf(cJ);
            btC.privilege = bV.privileges[bv];
            hu.push(btC)
        }, this);
        return hu
    }}, "track_album-list": {url: "/api/v1/album/{id}", format: function (bV, bf) {
        var hu = [];
        bm.cv(bV.songs, function (co) {
            hu.push(bn.Cf(co))
        });
        return hu
    }}, "track_playlist-add": {url: "/api/playlist/manipulate/tracks", filter: function (bf) {
        var cE = {}, bl = bf.data, bPk = this.hT(bf.key) || [];
        Cn = [];
        bm.cv(bPk, function (cJ) {
            var bB = bm.qj(cJ) ? cJ.id : cJ;
            cE[bB] = true
        });
        bf.ext = [];
        bm.cv(bl.tracks, function (cJ) {
            var bB = bm.qj(cJ) ? cJ.id : cJ;
            if (!cE[bB]) {
                Cn.push(bB);
                cE[bB] = true;
                bf.ext.push(cJ)
            }
        });
        bl.trackIds = JSON.stringify(Cn);
        bl.op = "add";
        if (!Cn.length) {
            bf.value = {code: 502}
        }
    }, format: function (bV, bf) {
        bo.ci.bR({tip: "已添加至歌单"});
        var jy = this.ra.fw(bf.data.pid);
        if (!!bV.coverImgUrl)jy.coverImgUrl = bV.coverImgUrl;
        bm.nt(bf.ext, function (cJ) {
            this.wF(bf, bm.qj(cJ) ? cJ : null);
            if (!!jy)jy.trackCount++
        }, this);
        bj.bK(bq.hW, "itemchange", {data: jy || {}, cmd: "add"});
        this.bK("onaddsuccess");
        return null
    }, finaly: function (be, bf) {
        bj.bK(bq.uH, "listchange", {key: bf.key, action: "refresh"});
        var oy = bf.data.pid, dL = this.kW(bf.key)
    }, onmessage: function () {
        var lJ = {502: "歌曲已存在！"};
        return function (dX) {
            setTimeout(function () {
                bo.ci.bR({tip: lJ[dX] || "添加失败，请稍后再试！", type: 2})
            }, 0)
        }
    }()}, "track_playlist-del": {url: "/api/playlist/manipulate/tracks", filter: function (bf) {
        var bl = bf.data;
        bf.ext = bl.trackIds;
        bl.trackIds = JSON.stringify(bl.trackIds);
        bl.op = "del"
    }, format: function (bV, bf) {
        var jy = this.ra.fw(bf.data.pid);
        bm.cv(bf.ext, function (bB) {
            this.bgv({id: bB, key: "track_playlist-" + bf.data.pid}, !0);
            if (!!jy)jy.trackCount = Math.max(0, jy.trackCount - 1)
        }, this);
        bj.bK(bq.hW, "itemchange", {data: jy || {}, cmd: "del"});
        return null
    }, finaly: function (be, bf) {
        bj.bK(bq.uH, "listchange", {key: bf.key, action: "refresh"})
    }, onmessage: function (dX) {
        bn.bal({text: "歌曲删除失败！"})
    }}, "track_program-list": {url: "/api/dj/program/detail", format: function (bV, bf) {
        return this.btD.bai(bV.program).songs
    }, onerror: "onlisterror"}, "track_listen_record-list": {url: "/api/v1/play/record", format: function (bV, bf) {
        var bk = [];
        if (bf.data.type == -1) {
            if (bV.weekData && bV.weekData.length) {
                bf.data.type = 1
            } else {
                bf.data.type = 0
            }
        }
        if (bf.data.type == 1) {
            bk = this.btE(bV.weekData)
        } else {
            bk = this.btE(bV.allData)
        }
        return bk
    }, onerror: "onlisterror"}, "track_day-list": {url: "/api/v1/discovery/recommend/songs", format: function (bV) {
        var nO = [];
        bm.cv(bV.recommend, function (co, bv) {
            nO.push({action: "recommendimpress", json: {alg: co.alg, scene: "user-song", position: bv, id: co.id}})
        });
        this.kt.OX(nO);
        return bV.recommend
    }, onerror: "onlisterror"}, "track_lyric-get": {type: "GET", url: "/api/song/lyric", filter: function (bf) {
        bf.data.lv = 0;
        bf.data.tv = 0
    }, format: function (bp, bf) {
        return bp
    }, onload: "onlyricload", onerror: "onlyricerror"}});
    bq.uH = NEJ.C();
    bc = bq.uH.bU(bq.ik);
    bc.dv = function () {
        this.dC();
        this.ra = bq.hW.bF();
        this.btD = bq.pL.bF();
        this.kt = bq.kQ.bF()
    };
    bc.btE = function (bk) {
        var bp = [], hM = 0;
        bm.cv(bk, function (bw, bv) {
            var co = bn.Cf(bw.song);
            if (bv == 0) {
                hM = bw.score
            }
            co.max = hM;
            co.playCount = bw.playCount;
            co.score = bw.score;
            bp.push(co)
        });
        return bp
    };
    bI.gN.bF({element: bq.uH, event: ["listchange"]})
})();
(function () {
    var bd = NEJ.P, fm = bd("nej.g"), bA = bd("nej.j"), bm = bd("nej.u"), Ka = bd("nm.x.ek");
    Ka.emj = {"色": "00e0b", "流感": "509f6", "这边": "259df", "弱": "8642d", "嘴唇": "bc356", "亲": "62901", "开心": "477df", "呲牙": "22677", "憨笑": "ec152", "猫": "b5ff6", "皱眉": "8ace6", "幽灵": "15bb7", "蛋糕": "b7251", "发怒": "52b3a", "大哭": "b17a8", "兔子": "76aea", "星星": "8a5aa", "钟情": "76d2e", "牵手": "41762", "公鸡": "9ec4e", "爱意": "e341f", "禁止": "56135", "狗": "fccf6", "亲亲": "95280", "叉": "104e0", "礼物": "312ec", "晕": "bda92", "呆": "557c9", "生病": "38701", "钻石": "14af6", "拜": "c9d05", "怒": "c4f7f", "示爱": "0c368", "汗": "5b7a4", "小鸡": "6bee2", "痛苦": "55932", "撇嘴": "575cc", "惶恐": "e10b4", "口罩": "24d81", "吐舌": "3cfe4", "心碎": "875d3", "生气": "e8204", "可爱": "7b97d", "鬼脸": "def52", "跳舞": "741d5", "男孩": "46b8e", "奸笑": "289dc", "猪": "6935b", "圈": "3ece0", "便便": "462db", "外星": "0a22b", "圣诞": "8e7", "流泪": "01000", "强": "1", "爱心": "0CoJU", "女孩": "m6Qyw", "惊恐": "8W8ju", "大笑": "d"};
    Ka.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {}, l = d.lib = {}, s = function () {
    }, t = l.Base = {extend: function (a) {
        s.prototype = this;
        var c = new s;
        a && c.mixIn(a);
        c.hasOwnProperty("init") || (c.init = function () {
            c.$super.init.apply(this, arguments)
        });
        c.init.prototype = c;
        c.$super = this;
        return c
    }, create: function () {
        var a = this.extend();
        a.init.apply(a, arguments);
        return a
    }, init: function () {
    }, mixIn: function (a) {
        for (var c in a)a.hasOwnProperty(c) && (this[c] = a[c]);
        a.hasOwnProperty("toString") && (this.toString = a.toString)
    }, clone: function () {
        return this.init.prototype.extend(this)
    }}, r = l.WordArray = t.extend({init: function (a, c) {
        a = this.words = a || [];
        this.sigBytes = c != p ? c : 4 * a.length
    }, toString: function (a) {
        return(a || v).stringify(this)
    }, concat: function (a) {
        var c = this.words, e = a.words, j = this.sigBytes;
        a = a.sigBytes;
        this.clamp();
        if (j % 4)for (var k = 0; k < a; k++)c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length)for (k = 0; k < a; k += 4)c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
        this.sigBytes += a;
        return this
    }, clamp: function () {
        var a = this.words, c = this.sigBytes;
        a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
        a.length = u.ceil(c / 4)
    }, clone: function () {
        var a = t.clone.call(this);
        a.words = this.words.slice(0);
        return a
    }, random: function (a) {
        for (var c = [], e = 0; e < a; e += 4)c.push(4294967296 * u.random() | 0);
        return new r.init(c, a)
    }}), w = d.enc = {}, v = w.Hex = {stringify: function (a) {
        var c = a.words;
        a = a.sigBytes;
        for (var e = [], j = 0; j < a; j++) {
            var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
            e.push((k >>> 4).toString(16));
            e.push((k & 15).toString(16))
        }
        return e.join("")
    }, parse: function (a) {
        for (var c = a.length, e = [], j = 0; j < c; j += 2)e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
        return new r.init(e, c / 2)
    }}, b = w.Latin1 = {stringify: function (a) {
        var c = a.words;
        a = a.sigBytes;
        for (var e = [], j = 0; j < a; j++)e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
        return e.join("")
    }, parse: function (a) {
        for (var c = a.length, e = [], j = 0; j < c; j++)e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
        return new r.init(e, c)
    }}, x = w.Utf8 = {stringify: function (a) {
        try {
            return decodeURIComponent(escape(b.stringify(a)))
        } catch (c) {
            throw Error("Malformed UTF-8 data")
        }
    }, parse: function (a) {
        return b.parse(unescape(encodeURIComponent(a)))
    }}, q = l.BufferedBlockAlgorithm = t.extend({reset: function () {
        this.bl = new r.init;
        this.btH = 0
    }, PV: function (a) {
        "string" == typeof a && (a = x.parse(a));
        this.bl.concat(a);
        this.btH += a.sigBytes
    }, FA: function (a) {
        var c = this.bl, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k), b = a ? u.ceil(b) : u.max((b | 0) - this.btG, 0);
        a = b * k;
        j = u.min(4 * a, j);
        if (a) {
            for (var q = 0; q < a; q += k)this.btI(e, q);
            q = e.splice(0, a);
            c.sigBytes -= j
        }
        return new r.init(q, j)
    }, clone: function () {
        var a = t.clone.call(this);
        a.bl = this.bl.clone();
        return a
    }, btG: 0});
    l.Hasher = q.extend({cfg: t.extend(), init: function (a) {
        this.cfg = this.cfg.extend(a);
        this.reset()
    }, reset: function () {
        q.reset.call(this);
        this.bbr()
    }, update: function (a) {
        this.PV(a);
        this.FA();
        return this
    }, finalize: function (a) {
        a && this.PV(a);
        return this.PX()
    }, blockSize: 16, bbn: function (a) {
        return function (b, e) {
            return(new a.init(e)).finalize(b)
        }
    }, bPe: function (a) {
        return function (b, e) {
            return(new n.HMAC.init(a, e)).finalize(b)
        }
    }});
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {stringify: function (d) {
        var l = d.words, p = d.sigBytes, t = this.cE;
        d.clamp();
        d = [];
        for (var r = 0; r < p; r += 3)for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)d.push(t.charAt(w >>> 6 * (3 - v) & 63));
        if (l = t.charAt(64))for (; d.length % 4;)d.push(l);
        return d.join("")
    }, parse: function (d) {
        var l = d.length, s = this.cE, t = s.charAt(64);
        t && (t = d.indexOf(t), -1 != t && (l = t));
        for (var t = [], r = 0, w = 0; w < l; w++)if (w % 4) {
            var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
            t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
            r++
        }
        return p.create(t, r)
    }, cE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return(b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return(b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return(b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return(b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({bbr: function () {
        this.fA = new w.init([1732584193, 4023233417, 2562383102, 271733878])
    }, btI: function (q, n) {
        for (var a = 0; 16 > a; a++) {
            var c = n + a, e = q[c];
            q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
        }
        var a = this.fA.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5], t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12], D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3], f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]), m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]), g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]), h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]), f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]), m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]), g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]), h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]), f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]), m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]), g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]), h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]), f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]), m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]), g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]), h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]), f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]), m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]), g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]), h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]), f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]), m = s(m, g, h, f, A, 21, b[63]);
        a[0] = a[0] + f | 0;
        a[1] = a[1] + m | 0;
        a[2] = a[2] + g | 0;
        a[3] = a[3] + h | 0
    }, PX: function () {
        var b = this.bl, n = b.words, a = 8 * this.btH, c = 8 * b.sigBytes;
        n[c >>> 5] |= 128 << 24 - c % 32;
        var e = u.floor(a / 4294967296);
        n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
        n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
        b.sigBytes = 4 * (n.length + 1);
        this.FA();
        b = this.fA;
        n = b.words;
        for (a = 0; 4 > a; a++)c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
        return b
    }, clone: function () {
        var b = v.clone.call(this);
        b.fA = this.fA.clone();
        return b
    }});
    t.MD5 = v.bbn(r);
    t.HmacMD5 = v.bPe(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
        this.cfg = this.cfg.extend(d)
    }, compute: function (d, r) {
        for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
            n && s.update(n);
            var n = s.update(d).finalize(r);
            s.reset();
            for (var a = 1; a < p; a++)n = s.finalize(n), s.reset();
            b.concat(n)
        }
        b.sigBytes = 4 * q;
        return b
    }});
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64, w = p.algo.EvpKDF, v = d.Cipher = t.extend({cfg: l.extend(), createEncryptor: function (e, a) {
        return this.create(this.bbv, e, a)
    }, createDecryptor: function (e, a) {
        return this.create(this.bPd, e, a)
    }, init: function (e, a, b) {
        this.cfg = this.cfg.extend(b);
        this.btJ = e;
        this.bN = a;
        this.reset()
    }, reset: function () {
        t.reset.call(this);
        this.bbr()
    }, process: function (e) {
        this.PV(e);
        return this.FA()
    }, finalize: function (e) {
        e && this.PV(e);
        return this.PX()
    }, keySize: 4, ivSize: 4, bbv: 1, bPd: 2, bbn: function (e) {
        return{encrypt: function (b, k, d) {
            return("string" == typeof k ? c : a).encrypt(e, b, k, d)
        }, decrypt: function (b, k, d) {
            return("string" == typeof k ? c : a).decrypt(e, b, k, d)
        }}
    }});
    d.StreamCipher = v.extend({PX: function () {
        return this.FA(!0)
    }, blockSize: 1});
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.btK;
        c ? this.btK = u : c = this.btM;
        for (var d = 0; d < b; d++)e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({createEncryptor: function (e, a) {
        return this.Encryptor.create(e, a)
    }, createDecryptor: function (e, a) {
        return this.Decryptor.create(e, a)
    }, init: function (e, a) {
        this.btN = e;
        this.btK = a
    }})).extend();
    q.Encryptor = q.extend({processBlock: function (e, a) {
        var b = this.btN, c = b.blockSize;
        x.call(this, e, a, c);
        b.encryptBlock(e, a);
        this.btM = e.slice(a, a + c)
    }});
    q.Decryptor = q.extend({processBlock: function (e, a) {
        var b = this.btN, c = b.blockSize, d = e.slice(a, a + c);
        b.decryptBlock(e, a);
        x.call(this, e, a, c);
        this.btM = d
    }});
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {pad: function (a, b) {
        for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)l.push(d);
        c = s.create(l, c);
        a.concat(c)
    }, unpad: function (a) {
        a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
    }};
    d.BlockCipher = v.extend({cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
        v.reset.call(this);
        var a = this.cfg, b = a.iv, a = a.mode;
        if (this.btJ == this.bbv)var c = a.createEncryptor; else c = a.createDecryptor, this.btG = 1;
        this.fC = c.call(a, this, b && b.words)
    }, btI: function (a, b) {
        this.fC.processBlock(a, b)
    }, PX: function () {
        var a = this.cfg.padding;
        if (this.btJ == this.bbv) {
            a.pad(this.bl, this.blockSize);
            var b = this.FA(!0)
        } else b = this.FA(!0), a.unpad(b);
        return b
    }, blockSize: 4});
    var n = d.CipherParams = l.extend({init: function (a) {
        this.mixIn(a)
    }, toString: function (a) {
        return(a || this.formatter).stringify(this)
    }}), b = (p.format = {}).OpenSSL = {stringify: function (a) {
        var b = a.ciphertext;
        a = a.salt;
        return(a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
    }, parse: function (a) {
        a = r.parse(a);
        var b = a.words;
        if (1398893684 == b[0] && 1701076831 == b[1]) {
            var c = s.create(b.slice(2, 4));
            b.splice(0, 4);
            a.sigBytes -= 16
        }
        return n.create({ciphertext: a, salt: c})
    }}, a = d.SerializableCipher = l.extend({cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
        d = this.cfg.extend(d);
        var l = a.createEncryptor(c, d);
        b = l.finalize(b);
        l = l.cfg;
        return n.create({ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format})
    }, decrypt: function (a, b, c, d) {
        d = this.cfg.extend(d);
        b = this.Ub(b, d.format);
        return a.createDecryptor(c, d).finalize(b.ciphertext)
    }, Ub: function (a, b) {
        return"string" == typeof a ? b.parse(a, this) : a
    }}), p = (p.kdf = {}).OpenSSL = {execute: function (a, b, c, d) {
        d || (d = s.random(8));
        a = w.create({keySize: b + c}).compute(a, d);
        c = s.create(a.words.slice(b), 4 * c);
        a.sigBytes = 4 * b;
        return n.create({key: a, iv: c, salt: d})
    }}, c = d.PasswordBasedCipher = a.extend({cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
        l = this.cfg.extend(l);
        d = l.kdf.execute(d, b.keySize, b.ivSize);
        l.iv = d.iv;
        b = a.encrypt.call(this, b, c, d.key, l);
        b.mixIn(d);
        return b
    }, decrypt: function (b, c, d, l) {
        l = this.cfg.extend(l);
        c = this.Ub(c, l.format);
        d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
        l.iv = d.iv;
        return a.decrypt.call(this, b, c, d.key, l)
    }})
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({bbr: function () {
        for (var a = this.bN, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.bOU = d + 6) + 1), e = this.bOT = [], j = 0; j < a; j++)if (j < d)e[j] = c[j]; else {
            var k = e[j - 1];
            j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
            e[j] = e[j - d] ^ k
        }
        c = this.bOR = [];
        for (d = 0; d < a; d++)j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
    }, encryptBlock: function (a, b) {
        this.btR(a, b, this.bOT, t, r, w, v, l)
    }, decryptBlock: function (a, c) {
        var d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d;
        this.btR(a, c, this.bOR, b, x, q, n, s);
        d = a[c + 1];
        a[c + 1] = a[c + 3];
        a[c + 3] = d
    }, btR: function (a, b, c, d, e, j, l, f) {
        for (var m = this.bOU, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
        q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
        s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
        t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
        n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
        a[b] = q;
        a[b + 1] = s;
        a[b + 2] = t;
        a[b + 3] = n
    }, keySize: 8});
    u.AES = p.bbn(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return(10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;)c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;)c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h)j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f)d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}
function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length)d = new BigInt; else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;)d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;)b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);)d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return(a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);)c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return(a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15, c = "";
    for (i = 0; 4 > i; ++i)c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d)b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e)b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--)h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}
function biDump(a) {
    return(a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f)e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f)d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f)d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i)h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f)e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h)c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h)d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h)d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)if (a.digits[c] != b.digits[c])return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;)b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b)break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f))break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;)h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e))break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"), e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var bd = NEJ.P, fm = bd("nej.g"), bA = bd("nej.j"), bm = bd("nej.u"), Ka = bd("nm.x.ek"), bn = bd("nm.x");
    if (bA.cG.redefine || !window.GEnc)return;
    var bbZ = function (bOP) {
        var bp = [];
        bm.cv(bOP, function (bOO) {
            bp.push(Ka.emj[bOO])
        });
        return bp.join("")
    };
    var bON = bA.cG;
    bA.cG = function (bZ, bf) {
        var bl = {}, bf = NEJ.X({}, bf), mb = bZ.indexOf("?");
        if (/(^|\.com)\/api/.test(bZ) && !(bf.headers && bf.headers[fm.yY] == fm.Ca) && !bf.noEnc) {
            if (mb != -1) {
                bl = bm.iO(bZ.substring(mb + 1));
                bZ = bZ.substring(0, mb)
            }
            if (bf.query) {
                bl = NEJ.X(bl, bm.gH(bf.query) ? bm.iO(bf.query) : bf.query)
            }
            if (bf.data) {
                bl = NEJ.X(bl, bm.gH(bf.data) ? bm.iO(bf.data) : bf.data)
            }
            bl["csrf_token"] = bA.hI("__csrf");
            bZ = bZ.replace("api", "weapi");
            bf.method = "post";
            delete bf.query;
            var bua = window.asrsea(JSON.stringify(bl), bbZ(["流泪", "强"]), bbZ(Ka.md), bbZ(["爱心", "女孩", "惊恐", "大笑"]));
            bf.data = bm.eX({params: bua.encText, encSecKey: bua.encSecKey})
        }
        bON(bZ, bf)
    };
    bA.cG.redefine = true
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), ej = bd("nej.p"), bm = bd("nej.u"), bj = bd("nej.v"), eT = bd("nm.u"), bn = bd("nm.x"), bq = bd("nm.d"),  bl = {"大笑": "86", "可爱": "85", "憨笑": "359", "色": "95", "亲亲": "363", "惊恐": "96", "流泪": "356", "亲": "362", "呆": "352", "哀伤": "342", "呲牙": "343", "吐舌": "348", "撇嘴": "353", "怒": "361", "奸笑": "341", "汗": "97", "痛苦": "346", "惶恐": "354", "生病": "350", "口罩": "351", "大哭": "357", "晕": "355", "发怒": "115", "开心": "360", "鬼脸": "94", "皱眉": "87", "流感": "358", "爱心": "33", "心碎": "34", "钟情": "303", "星星": "309", "生气": "314", "便便": "89", "强": "13", "弱": "372", "拜": "14", "牵手": "379", "跳舞": "380", "禁止": "374", "这边": "262", "爱意": "106", "示爱": "376", "嘴唇": "367", "狗": "81", "猫": "78", "猪": "100", "兔子": "459", "小鸡": "450", "公鸡": "461", "幽灵": "116", "圣诞": "411", "外星": "101", "钻石": "52", "礼物": "107", "男孩": "0", "女孩": "1", "蛋糕": "337", 18: "186", "圈": "312", "叉": "313"};
    bn.bcl = function (cJ) {
        if (!cJ || cJ.copyrightId === undefined || !!cJ.program)return false;
        if (window.GAbroad) {
            cJ.fee = 0;
            return true
        }
        if (cJ.status < 0)return true;
        var JF;
        if (typeof GCopyrights !== "undefined")JF = GCopyrights;
        try {
            if (!JF && !!top.GCopyrights)JF = top.GCopyrights
        } catch (e) {
        }
        if (JF) {
            var bv = bm.eg(JF, cJ.copyrightId);
            if (bv >= 0)return true
        }
        return false
    };
    bn.bcp = function () {
        var xF = /^\/m\/(song|album|artist|playlist|dj|search)\?/, ug = {2: "artist", 13: "playlist", 17: "dj", 19: "album", 18: "song", 31: "toplist", 32: "searchsong", 33: "searchlyric", 34: "event", 70: "djradio", 24: "day", 50: "record"}, bOL = {song: "单曲", album: "专辑", artist: "歌手", playlist: "歌单", dj: "电台节目", searchsong: "单曲搜索", searchlyric: "歌词搜索", toplist: "榜单", event: "动态", djradio: "电台", day: "每日歌曲推荐", record: "听歌排行榜"};
        var bOK = function (bN, bl, JC) {
            switch (bN) {
                case"event":
                    bl = bl.split("|");
                    return"/event?id=" + bl[0] + "&uid=" + bl[1];
                case"searchsong":
                case"searchlyric":
                    var bu = bN == "searchsong" ? 1 : 1006;
                    return"/search/m/?s=" + encodeURIComponent(bl) + "&type=" + bu;
                case"toplist":
                    return"/discover/toplist?id=" + bl + "&_hash=songlist-" + JC;
                case"day":
                    return"/discover/recommend/taste" + "?_hash=songlist-" + JC;
                    ;
                case"record":
                    bl = bl.split("|");
                    return"/user/songs/rank?id=" + bl[0] + "&cat=" + bl[1];
                    break;
                default:
                    return"/" + bN + "?id=" + bl + "&_hash=songlist-" + JC
            }
        };
        return function (eO, JC) {
            if (!eO)return null;
            var FY = eO.fid || (eO.type != 18 ? eO.type : null), bcD = eO.fdata || eO.rid, bub = eO.page || eO.fhref;
            var bN = ug[FY];
            if (!bN) {
                var vD = (bub || "").match(xF);
                if (vD)bN = vD[1]
            }
            if (!bN)return null;
            return{title: bOL[bN], link: !ug[FY] ? bub : bOK(bN, bcD, JC), fid: FY, fdata: bcD}
        }
    }();
    bn.Qh = function (oI) {
        var eQ = oI;
        if (typeof GUser !== "undefined" && GUser.userId > 0)eQ = GUser;
        return eQ
    };
    bn.ic = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    bn.Ft = function () {
        var xF = /#(.*?)$/;
        return function (hs) {
            var jq = hs === false ? location : top.location;
            return xF.test(jq.href) ? RegExp.$1 : ""
        }
    }();
    bn.Qj = function () {
        var buj = bn.bcX().supported, yw = bb.ef("audio"), buk = yw.canPlayType && yw.canPlayType("audio/mpeg");
        if (ej.Hj.mac) {
            if (buk)return 2;
            if (buj)return 1;
            return 0
        } else {
            if (buj)return 1;
            if (buk)return 2;
            return 0
        }
    };
    bn.bcX = function () {
        var gR, bda = !1, bdb = "";
        if (ej.ek.browser == "ie") {
            try {
                gR = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gR = null
            }
            if (gR) {
                bda = !0;
                bdb = gR.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gR = navigator.plugins["Shockwave Flash"];
                if (gR) {
                    bda = !0;
                    bdb = gR.description
                }
            }
        }
        return{supported: bda, version: bdb}
    };
    bn.qc = function () {
        return"网易云音乐 听见好时光"
    };
    bn.bOD = function () {
        return bl
    };
    bn.bum = function (ew) {
        var bB = bl[ew];
        return bB == null ? "" : bck.replace("{ID}", bB)
    };
    bn.rP = function (cm, eG, bdo) {
        if (!cm)return"";
        if (!!bdo) {
            cm = bn.bOA(cm)
        }
        return bn.buo(bn.bOw(cm, eG))
    };
    bn.bOA = function () {
        var eh = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (cm) {
            return(cm || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(eh, function ($0, $1) {
                return"<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    bn.bOw = function () {
        var eh = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var gO = function (nE, eG) {
            return'<a href="/user/home?nickname=' + encodeURIComponent(nE) + '" class="' + (eG || "") + '">@' + nE + "</a>"
        };
        return function (cm, eG) {
            return(cm || "").replace(eh, function ($0, $1) {
                return gO($1, eG)
            })
        }
    }();
    bn.buo = function () {
        var eh = /\[(.*?)\]/g;
        return function (cm) {
            return(cm || "").replace(eh, function ($1, $2) {
                var bZ = bn.bum($2);
                return!bZ ? $1 : '<img src="' + bZ + '"/>'
            })
        }
    }();
    bn.xE = function (bC, eG) {
        bb.cU(bC, eG) ? bb.bH(bC, eG) : bb.bJ(bC, eG)
    };
    bn.Qm = function (dU, iM) {
        dU = bb.bG(dU);
        iM = bb.bG(iM);
        if (!dU || !iM)return!1;
        for (iM = iM.parentNode; !!iM && iM != dU; iM = iM.parentNode);
        return iM == dU
    };
    bn.nJ = function () {
        var bup = function (gk) {
            return(gk < 10 ? "0" : "") + gk
        };
        return function (rR) {
            rR = parseInt(rR) || 0;
            if (!rR)return"00:00";
            var bOu = Math.floor(rR % 60), bOp = Math.floor(rR / 60);
            return bup(bOp) + ":" + bup(bOu)
        }
    }();
    bn.vj = function (gD, uY) {
        if (!gD || gD.length == 0)return"";
        uY = uY || "/";
        var cH = [];
        for (var i = gD.length - 1; i >= 0; i--) {
            cH.unshift(gD[i].name)
        }
        return cH.join(uY)
    };
    bn.ph = function () {
        var Jr = function (hX, eG, dU) {
            if (!hX || !hX.name)return"";
            if (!hX.id)return'<span class="' + eG + '">' + bm.fd(hX.name) + "</span>";
            return"<a" + (dU ? ' target="_blank"' : "") + ' class="' + eG + '" href="/artist?id=' + hX.id + '" hidefocus="true">' + bm.fd(hX.name) + "</a>"
        };
        return function (gD, bX, uY, dU) {
            if (!gD || !gD.length)return"";
            uY = uY || "/";
            bX = bX || "";
            var hJ = [];
            for (var i = 0, bk = [], vk = [], iW; i < gD.length; ++i) {
                hJ.push(gD[i].name);
                if (!gD[i] || gD[i].id <= 0) {
                    vk.push(gD[i]);
                    continue
                }
                if (bm.hC(bX)) {
                    iW = bX(gD[i])
                } else {
                    iW = Jr(gD[i], bX, dU)
                }
                !!iW && bk.push(iW)
            }
            for (var i = 0, iW; i < vk.length; ++i) {
                if (bm.hC(bX)) {
                    iW = bX(vk[i])
                } else {
                    iW = Jr(vk[i], bX, dU)
                }
                !!iW && bk.push(iW)
            }
            return'<span title="' + hJ.join(uY) + '">' + bk.join(uY) + "</span>"
        }
    }();
    bn.vM = function (fS) {
        return!!fS && /^[0-9]{11}$/.test(fS)
    };
    bn.ceU = function (fS) {
        if (!bn.vM(fS))return fS;
        return fS.substring(0, 3) + "****" + fS.substr(7)
    };
    bn.jG = function () {
        var eh = /^\s+$/g;
        return function (iN) {
            return!iN || eh.test(iN)
        }
    }();
    bn.Fp = function () {
        var beC = /[^\x00-\xfff]/g;
        return function (iN) {
            var bOl = iN.match(beC) || [], gx = bOl.length;
            return iN.length + gx
        }
    }();
    bn.AW = function () {
        var beC = /[^\x00-\xfff]/;
        return function (iN, hV) {
            for (var i = 0, len = iN.length; i < len && hV > 0; i++) {
                if (beC.test(iN.charAt(i))) {
                    hV -= 2;
                    if (hV < 0) {
                        break
                    }
                } else {
                    hV -= 1
                }
            }
            return iN.substring(0, i)
        }
    }();
    bn.AX = function (iN, hV, Nr) {
        hV = hV || 10;
        Nr = Nr || nej.p.ek.engine == "trident" && parseInt(nej.p.ek.release) < 5;
        if (Nr && bn.Fp(iN) > hV) {
            return bn.AW(iN, hV) + "..."
        } else {
            return iN
        }
    };
    bn.buy = function (bh) {
        return bh === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(bh.type || bh.href || ~bh.tabIndex)
    };
    bn.bOj = function (be, dU) {
        if (!be || !dU)return!0;
        var bh, bu = be.type.toLowerCase();
        if (bu == "mouseout") {
            bh = be.relatedTarget || be.toElement
        } else if (bu == "mouseover") {
            bh = be.relatedTarget || be.fromElement
        }
        return!bh || bh !== dU && !bn.Qm(dU, bh)
    };
    bn.rx = function () {
        ce = {};
        return function (bh, eL) {
            var bB = bb.lr(bh), bN = "hover-" + bB;
            if (!eL || !bB || !!ce[bN])return;
            ce[bN] = !0;
            bj.bt(bB, "mouseover", function () {
                var beR = bb.bP(bh, "hshow") || [];
                var beU = bb.bP(bh, "icn-dislike") || [];
                bb.bJ(bB, "z-hover");
                bb.ch(beR[0], "display", "block");
                bb.ch(beU[0], "display", "block")
            });
            bj.bt(bB, "mouseout", function () {
                var beR = bb.bP(bh, "hshow") || [];
                var beU = bb.bP(bh, "icn-dislike") || [];
                bb.bH(bB, "z-hover");
                bb.ch(beR[0], "display", "none");
                bb.ch(beU[0], "display", "none")
            })
        }
    }();
    bn.buz = function () {
        var cE = {r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi, "(": "\\(", ")": "\\)", "[": "\\[", "]": "\\]", "{": "\\{", "}": "\\}", "*": "\\*", "+": "\\+", "^": "\\^", $: "\\$", "?": "\\?", "!": "\\!", "\\": "\\\\", "|": "\\|", ".": "\\."};
        return function (iN) {
            return bm.Ez(cE, iN)
        }
    }();
    bn.sb = function (cT) {
        if (bm.RQ(cT))cT = cT.getTime();
        var jm = new Date, Fo = jm.getTime() - cT;
        if (Fo <= 6e4)return"刚刚";
        var Qq = jm.getHours() * 36e5 + jm.getMinutes() * 6e4 + jm.getSeconds() * 1e3;
        if (Fo <= Qq) {
            if (Fo < 36e5) {
                var bOh = Math.floor(Fo / 6e4);
                return bOh + "分钟前"
            }
            return bm.nc(cT, "HH:mm")
        } else {
            if (Fo < Qq + 864e5) {
                return"昨天" + bm.nc(cT, "HH:mm")
            } else {
                var hq = jm.getFullYear(), bOg = new Date(hq, 0, 1);
                var Qq = jm.getTime() - bOg.getTime();
                if (Fo < Qq) {
                    return bm.nc(cT, "M月d日 HH:mm")
                }
                return bm.nc(cT, "yyyy年M月d日")
            }
        }
    };
    bn.Fn = function () {
        var eh = /\{(.*?)\}/gi;
        return function (rl, bl) {
            return(rl || "").replace(eh, function ($1, $2) {
                var bD = bl[$2];
                return bD == null ? $1 : bD
            })
        }
    }();
    bn.fX = function () {
        var cn = Array.prototype.slice.call(arguments, 0), rl = cn.shift();
        if (rl) {
            return rl.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < cn.length ? cn[$2] : $1
            })
        }
        return""
    };
    bn.Fk = function (bk, eG, lp) {
        return"";
        lp = lp || " - ";
        if (bk && bk.length) {
            return lp + (!!eG ? '<span class="' + eG + '">' + bk[0] + "</span>" : bk[0])
        }
        return""
    };
    bn.buB = function () {
        if (window.getSelection) {
            var qv = window.getSelection();
            if (qv && qv.focusNode && qv.focusNode.tagName) {
                var xW = bb.eu(qv.focusNode);
                for (var i = 0, wE; i < xW.length; ++i) {
                    wE = xW[i].tagName;
                    if (!wE)continue;
                    wE = wE.toLowerCase();
                    if (wE == "textarea" || wE == "input")return!0
                }
            }
        } else if (document.selection) {
            var dQ = document.selection.createRange();
            if (dQ) {
                var bh = dQ.parentElement();
                if (bh && bh.tagName) {
                    var wE = bh.tagName.toLowerCase();
                    if (wE == "textarea" || wE == "input")return!0
                }
            }
        }
        return!1
    };
    bn.yI = function (gq) {
        if (/^[A-Z]\:\\/i.test(gq)) {
            gq = gq.split("\\")
        } else {
            gq = gq.split("/")
        }
        gq = gq[gq.length - 1];
        return gq
    };
    bn.bNZ = function () {
        var Ad = [13, 17, 34, 19, 18, 21];
        return function (bB) {
            var cH = (bB || "").split("_");
            return{type: Ad[cH[2]] || -1, id: cH[3] || ""}
        }
    }();
    bn.bgj = function (eQ) {
        if (4 == eQ.userType) {
            return'<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (eQ.authStatus == 1) {
            return'<sup class="u-icn u-icn-1"></sup>'
        } else if (eQ.expertTags && eQ.expertTags.length) {
            return'<sup class="u-icn u-icn-84"></sup>'
        }
    };
    bn.Jd = function (gk) {
        gk += "";
        if (gk) {
            return gk.substr(0, 3) + "****" + gk.substr(gk.length - 4)
        }
    };
    bn.ceW = function (bv, dL) {
        return(bv % dL + dL) % dL
    };
    bn.buD = function () {
        var Ad = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function (bB) {
            var cH = (bB || "").split("_"), bp = {type: Ad[cH[2]] || -1, id: cH[3] || ""};
            if (bp.type == "event") {
                bp.uid = cH[4] || "";
                return"/" + bp.type + "?id=" + bp.id + "&uid=" + bp.uid
            }
            return"/" + bp.type + "?id=" + bp.id
        }
    }();
    bn.buE = function () {
        var Ad = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专栏文章"];
        return function (bB) {
            var cH = (bB || "").split("_");
            return Ad[cH[2]] || "资源"
        }
    }();
    bn.bNL = function (cN) {
        var qs = cN.length > 0 ? cN.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [], item = null, name = null, value = null, i = 0, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    bn.buK = function (xb, IX) {
        var Qw = 0, gf = new Array;
        bm.cv(xb, function (bZ, bv) {
            var gQ = bb.ef("img");
            gQ.src = bZ;
            bj.bt(gQ, "load", function (bv, be) {
                gf[bv] = 1;
                Qw++;
                if (Qw == xb.length)IX(xb, gf)
            }.bi(this, bv));
            bj.bt(gQ, "error", function (be, bv) {
                gf[bv] = 0;
                Qw++;
                if (Qw == xb.length)IX(xb, gf)
            }.bi(this, bv))
        })
    };
    bn.buL = function (bk, eV) {
        var bp = [];
        bm.cv(bk, function (bw) {
            bp.push(eV(bw))
        });
        return bp
    };
    bn.bNF = function (cm) {
        return bm.fd((cm || "").replace(/\s{2,}/g, " ").trim())
    };
    bn.bgZ = function (co) {
        if (co.transNames && co.transNames.length) {
            return co.transNames[0]
        } else if (co.alias && co.alias.length) {
            return co.alias[0]
        }
    };
    bn.buU = function (Kq) {
        if (Kq) {
            return Kq.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    bn.bhc = function (bh) {
        var bh = bb.bG(bh), ew = bh && bh.getElementsByTagName("textarea")[0], bN = bb.bz(bh, "key"), bhj = bb.bz(bh, "simple") == "1", bva = bq.uH.iE();
        if (!(bh && ew && bN))return;
        if (bhj) {
            bva.rq(bN, bn.Cf(JSON.parse(ew.value)))
        } else {
            bva.rq(bN, JSON.parse(ew.value || ew.defaultValue))
        }
        bh.innerHTML = "";
        return bN
    };
    bn.bNw = function (ow) {
        if (!ow.onbeforelistload) {
            ow.onbeforelistload = function (be) {
                be.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!ow.onemptylist) {
            ow.onemptylist = function (be) {
                be.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (ow.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return ow
    };
    bn.Cf = function (im) {
        if (bm.hh(im)) {
            var kb = [];
            bm.cv(im, function (bhj) {
                kb.push(bvd(bhj))
            });
            return kb
        } else {
            return bvd(im)
        }
        function bvd(im) {
            if (!im)return null;
            var kb = {album: im.al, alias: im.alia || im.ala || [], artists: im.ar || [], commentThreadId: "R_SO_4_" + im.id, copyrightId: im.cp || 0, duration: im.dt || 0, id: im.id, mvid: im.mv || 0, name: im.name || "", cd: im.cd, position: im.no || 0, ringtone: im.rt, rtUrl: im.rtUrl, status: im.st || 0, pstatus: im.pst || 0, fee: im.fee || 0, version: im.v || 0, eq: im.eq, songType: im.t || 0, mst: im.mst, score: im.pop || 0, ftype: im.ftype, rtUrls: im.rtUrls, transNames: im.tns, privilege: im.privilege, lyrics: im.lyrics};
            return kb
        }
    };
    bn.ceX = function () {
        var bh = bb.oZ('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(bh);
        bj.bt(bh, "click", function (be) {
            bj.cu(be);
            bb.dW(bh)
        })
    };
    bn.nW = function (dE) {
        if (dE < 1e5) {
            return dE
        } else {
            return Math.floor(dE / 1e4) + "万"
        }
    };
    bn.ue = function (dE, ew) {
        return"<i>" + (dE ? "(" + dE + ")" : ew) + "</i>"
    };
    bn.bvi = function (bu, hU) {
        var bf = {};
        if (!bm.qj(hU)) {
            return bf
        }
        switch (parseInt(bu)) {
            case 17:
                bf.title = hU.name;
                bf.author = (hU.radio || []).name;
                bf.picUrl = hU.coverUrl;
                bf.category = hU.radio.category;
                break;
            case 19:
                bf.title = hU.name;
                bf.author = bn.vj(hU.artists);
                bf.authors = bn.vj(hU.artists, " / ");
                bf.picUrl = hU.picUrl;
                break;
            case 13:
                bf.title = hU.name;
                bf.author = (hU.creator || []).nickname;
                bf.picUrl = hU.coverImgUrl;
                break;
            case 18:
                bf.title = hU.name;
                bf.author = bn.vj(hU.artists);
                bf.picUrl = (hU.album || []).picUrl;
                break;
            case 20:
                bf.title = hU.name;
                bf.author = "";
                bf.picUrl = hU.img1v1Url;
                break;
            case 21:
                bf.title = hU.name;
                bf.author = hU.artistName;
                bf.authors = bn.vj(hU.artists, " / ");
                bf.picUrl = hU.newCover || hU.cover;
                break;
            case 70:
                bf.title = hU.name;
                bf.author = (hU.dj || []).nickname;
                bf.picUrl = hU.picUrl;
                bf.category = hU.category;
                break;
            default:
                break
        }
        return bf
    };
    bn.bvk = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    bn.chg = function (gO, bes, bf) {
        var dB, cn, bp;
        var zn = null;
        var SY = 0;
        if (!bf)bf = {};
        var chf = function () {
            SY = bf.leading === false ? 0 : +(new Date);
            zn = null;
            bp = gO.apply(dB, cn);
            if (!zn)dB = cn = null
        };
        return function () {
            var jm = +(new Date);
            if (!SY && bf.leading === false)SY = jm;
            var byj = bes - (jm - SY);
            dB = this;
            cn = arguments;
            if (byj <= 0 || byj > bes) {
                if (zn) {
                    clearTimeout(zn);
                    zn = null
                }
                SY = jm;
                bp = gO.apply(dB, cn);
                if (!zn)dB = cn = null
            } else if (!zn && bf.trailing !== false) {
                zn = setTimeout(chf, byj)
            }
            return bp
        }
    };
    bn.bah = function (bh, jJ) {
        if (bh) {
            var bh = bh.firstElementChild;
            if (bh) {
                bh.firstElementChild && (bh = bh.firstElementChild);
                bh.setAttribute("xlink:href", "/style/pc/svg/" + jJ)
            }
        }
    }
})();
(function () {
    function x() {
        var h = "MmI12c93DJo6px0n".split("");
        this.IN = function (g) {
            if (null == g || void ((1464086688 ^ 345178714) + (-1094586668 ^ 48833490)) == g)return g;
            if ((-70715121 ^ -1985074564) + (-420218205 ^ 1802163758) != g.length % ((1677721540 ^ 1208943436) + (126793362 ^ -746474008)))throw Error("1100");
            for (var k = [], l = (867647599 ^ 887503956) + (-1899999895 ^ 1986973356); l < g.length; l++) {
                (-1353826066 ^ -1682229371) + (-94974223 ^ 828130916) == l % ((-585148913 ^ -706166081) + (-1757469750 ^ 1614235800)) && k.push("%");
                for (var n = h, w = (352369889 ^ 1264400622) + (-430415204 ^ 1207572845); w < n.length; w++)if (g.charAt(l) == n[w]) {
                    k.push(w.toString((1498391092 ^ 81701778) + (-1564940465 ^ 14029093)));
                    break
                }
            }
            return decodeURIComponent(k.join(""))
        }
    }

    var n = (new x).IN, h = (new x).IN, g = (new x).IN, k = (new x).IN, l = (new x).IN;
    (function () {
        function x(a) {
            for (var e = [], d = (-1558456649 ^ -156186362) + (-1117841117 ^ 386660716); d < a; d++) {
                var b = ((-720177852 ^ -237914700) + (704911192 ^ -247945194)) * Math.random(), b = Math.floor(b);
                e.push(n("9mco9IcJ1M91cD92c31m9cc9991Icc9311c29D12c19JcI1c9ocm9619cM9p2n139x20901D2x9n2p1J3M263m2o3I2J312D32233c29392c33223D213J2I3o2m").charAt(b))
            }
            return e.join(g(""))
        }

        function D(a) {
            for (var e = q.cookie.split(l("16IM")), d = (1927624072 ^ 2033069835) + (1532648936 ^ -1351698283); d < e.length; d++) {
                var b = e[d].indexOf(k("1x"));
                if ((-652444267 ^ -1511413121) + (-1894101087 ^ 202401719) <= b) {
                    var c = e[d].substring((-1713931660 ^ -492215387) + (1670666804 ^ -418005989), b), b = e[d].substring(b + ((-1055174120 ^ -158181470) + (689042632 ^ -513339761)), e[d].length);
                    if (c == a)return window.decodeURIComponent(b)
                }
            }
            return null
        }

        function R(a) {
            var e = l("39IM993MIM3cIM9DIM9c91IM9c9x").split(h("IM")), d;
            if (null == a || void ((2002773766 ^ 528368891) + (-710834241 ^ 1115675580)) == a)return a;
            if (l("9n9I9o9c9132") == typeof a) {
                d = k("36");
                for (var b = (1874585304 ^ 299639911) + (1989596223 ^ -150017666); b < e.length; b++)if (a.hasOwnProperty(e[b])) {
                    var c = l("I3") + e[b] + k("I31oI3"), f;
                    f = l("") + a[e[b]];
                    f = null == f || void ((-635311390 ^ -110907233) + (-1640570844 ^ 1116423591)) == f ? f : f.replace(/'/g, k("cpI3")).replace(/"/g, k("II"));
                    d += c + f + g("I3Ip")
                }
                g("Ip") == d.charAt(d.length - ((462653679 ^ 161094991) + (-1383699226 ^ 1081083527))) && (d = d.substring((1328204189 ^ 167093355) + (-188142489 ^ 1307164269), d.length - ((1624794621 ^ 924755577) + (1024705287 ^ -1792344198))));
                return d + g("3x")
            }
            return null
        }

        function S(a, e, d, b) {
            var c = [];
            c.push(a + n("1x") + window.encodeURIComponent(e));
            d && (a = new Date(b), b = a.toGMTString(), c.push(g("16IM")), c.push(k("9c3D")), c.push(g("3M9J")), c.push(g("3I9c")), c.push(n("311x")), c.push(b));
            c.push(l("16IM"));
            c.push(h("3M9m"));
            c.push(k("329D1xIn"));
            b = l("I0") + window[g("9p9n919m329J9n90")].hostname;
            null != b && void ((179061284 ^ 1467923800) + (-919280570 ^ 1796859074)) != b && k("") != b && (c.push(n("16IM")), c.push(n("929n")), c.push(l("9x9m9J")), c.push(g("901x")), c.push(b));
            q.cookie = c.join(l(""))
        }

        function T(a, e) {
            for (var d = [], b = (-1104509226 ^ -825727091) + (1157004923 ^ -873766690); b < e; b++)d.push(a);
            return d.join(n(""))
        }

        function w(a) {
            if (null == a || void ((700941223 ^ 848526610) + (-455386495 ^ 7363530)) == a || n("") == a)return null;
            a = a.split(k("1o"));
            return(-1557661866 ^ -524502748) + (-1937294963 ^ 820217885) > a.length || !/[0-9]+/gi.test(a[(344631200 ^ 987573575) + (502502715 ^ -866394079)]) ? null : parseInt(a[(-1750267408 ^ -1052254921) + (249382790 ^ -1480037188)])
        }

        function Y() {
            var a = D(h("2oc12cc1c12J2n202J22Ixc3cJcJcJ"));
            if (null == a || void ((1263581397 ^ 843189941) + (-1361067006 ^ 674401698)) == a || k("") == a)return(971496910 ^ 1933006322) + (-90099355 ^ 1334724257);
            a = w(a);
            return null == a ? (1706500058 ^ 1937713848) + (49297981 ^ -339218269) : a - ((906156732 ^ 787316261) + (-291806312 ^ 160048735)) - (new window.Date).getTime()
        }

        function K() {
            var a = !((-1212801847 ^ -45414660) + (-2053184810 ^ 815531805)), e = {v: h("391mI01M")}, d = null;
            e.h = Z;
            var b = (new window.Date).getTime() + ((629098801 ^ 78109099) + (2065459112 ^ -1520533234));
            e.u = x((-706704233 ^ -1165407155) + (1695868380 ^ -175973643)) + b + x((-769470868 ^ -2042373527) + (79649474 ^ -1356746436));
            try {
                var c = (new aa).get();
                null != c && void ((739491497 ^ 277156226) + (662925904 ^ -454417787)) != c && (1770499029 ^ 28042716) + (985628904 ^ -1385418465) < c.length ? e.fp = c.join(n("Ip")) : (e.fp = T(g("1M"), (-298276928 ^ -543227816) + (1404825862 ^ -1646024332)), e.ec = l("1m"), a = !((-2086246114 ^ -1184882977) + (-504572115 ^ 617963373)))
            } catch (f) {
                e.fp = T(l("1M"), (-1877126245 ^ -1046905181) + (-342429384 ^ 1173169130)), e.ec = n("1m"), a = !((1586692387 ^ 1218022507) + (1093871092 ^ -1463396531))
            }
            try {
                if (d = R(e), null == d || void ((-418723390 ^ -1322964227) + (1880869226 ^ -640952917)) == d)d = n(""); else {
                    var r = U(d), B = U(h("1m12131212921J1c111D119192111M131c222m121I211J1191229m2m9c1312191c21292m1c99211M2I1J112I1m")), c = r;
                    null == c && (c = []);
                    e = [];
                    for (r = (-1718400663 ^ -722677542) + (238062053 ^ -1129255e3); (508250344 ^ 476353526) + (-685264128 ^ 720869350) > r; r++) {
                        var q = ((-543114457 ^ -1473904605) + (275501194 ^ -1743612554)) * Math.random(), q = Math.floor(q);
                        e[r] = t(q)
                    }
                    var B = L(B), B = M(B, L(e)), q = B = L(B), y, p = c;
                    if (null == p || void ((1827539634 ^ 2048414340) + (-907961441 ^ 552090709)) == p || (-1684630287 ^ -2139176646) + (-124341125 ^ 478223950) == p.length)y = V((1493082863 ^ 1249296114) + (-2051012511 ^ 1756884034)); else {
                        var m = p.length, c = (175252306 ^ 1111984400) + (480227590 ^ -1420434248), c = (-1515266927 ^ -1910356948) + (2140553256 ^ -1411045545) >= m % ((-346657995 ^ -1771966827) + (862056242 ^ -1314286190)) ? (-2101448443 ^ -2041369135) + (-741902186 ^ 685104122) - m % ((1720926217 ^ 689191951) + (-2066803859 ^ 884447063)) - ((262441392 ^ 1745495276) + (1375757850 ^ -900647758)) : (1872412268 ^ 2067371644) + (608380145 ^ -819987327) - m % ((1681597298 ^ 231719895) + (1592610896 ^ -924430389)) - ((-704040589 ^ -1989189335) + (557684266 ^ -2119943808)), r = [];
                        F(p, (1258200654 ^ 45832591) + (1582317620 ^ -370509813), r, (164233953 ^ 772056713) + (1239902356 ^ -1848233204), m);
                        for (p = (1057475589 ^ 439040109) + (1399058776 ^ -1984890176); p < c; p++)r[m + p] = (2118909340 ^ 2064636655) + (103258109 ^ -56864912);
                        p = [];
                        p[(465317715 ^ 636000608) + (-1114835448 ^ 2082979781)] = m >>> (20707941 ^ 1469226289) + (2057511557 ^ -738870719) & (269989610 ^ 997521329) + (-255570227 ^ 609808745);
                        p[(1954387010 ^ 754769288) + (-748142076 ^ 1947661363)] = m >>> (763707698 ^ 1330845475) + (-1897594552 ^ 332179639) & (-639648524 ^ -180603267) + (-158453838 ^ 630348228);
                        p[(1859456488 ^ 1506482853) + (-403501999 ^ 789767396)] = m >>> (-1619269137 ^ -1099022303) + (-1660063612 ^ 1140270782) & (1181694848 ^ 2119552189) + (-1375117985 ^ 1774998685);
                        p[(433378284 ^ 724488145) + (-740628916 ^ 517932426)] = m & (1822182792 ^ 87694432) + (864850358 ^ -1512751455);
                        F(p, (66361984 ^ 1870434581) + (1166677164 ^ -688004921), r, m + c, (-1223926804 ^ -1938724912) + (-1151932287 ^ 2144611145));
                        y = r
                    }
                    m = y;
                    if (null == m || (1975350395 ^ 718319355) + (-390062167 ^ 1213348393) != m.length % ((-2041381142 ^ -472744009) + (1994073864 ^ -324773397)))throw Error(k("1m1M1M1c"));
                    y = [];
                    for (var c = (2037969104 ^ 977802706) + (1336658137 ^ -211496409), v = m.length / ((140002282 ^ 1286308004) + (-307800659 ^ 1454074207)), r = (141699850 ^ 535611341) + (1611268002 ^ -2006389605); r < v; r++)for (y[r] = [], p = (-1332366250 ^ -866390395) + (-1966267853 ^ 167544606); (2007979427 ^ 695703793) + (-601058320 ^ 2097914142) > p; p++)y[r][p] = m[c++];
                    v = [];
                    F(e, (711259511 ^ 449983994) + (1310009187 ^ -2124670960), v, (-1258806040 ^ -1529308664) + (-658790989 ^ 929358995), (802884204 ^ 1679147276) + (-140158358 ^ 1133801166));
                    for (var u = y.length, e = (-417247976 ^ -705330063) + (590898758 ^ -300724015); e < u; e++) {
                        var z, w, N = y[e];
                        if (null == N)w = null; else {
                            for (var ba = t((1618945363 ^ 1792680915) + (668388705 ^ -762563528)), m = [], ca = N.length, c = (-190881435 ^ -1201924679) + (-846300694 ^ 2125656782); c < ca; c++)m.push(da(N[c], ba++));
                            w = m
                        }
                        var O, m = w;
                        if (null == m)O = null; else {
                            for (var ea = t((1999643442 ^ 449242729) + (1594705392 ^ -855343315)), c = [], fa = m.length, r = (544890851 ^ 1451706578) + (293862301 ^ -1736371374); r < fa; r++)c.push(G(m[r], ea--));
                            O = c
                        }
                        var ga = P(O, (1942336381 ^ 239978506) + (814403227 ^ -1292023091));
                        z = P(ga, (-25459033 ^ -919609492) + (271568030 ^ -662410590));
                        var Q = M(z, B), H, m = Q, c = q;
                        if (null == m)H = null; else if (null == c)H = m; else {
                            for (var r = [], C = c.length, p = (-916668707 ^ -732014185) + (1708710818 ^ -2027568364), D = m.length; p < D; p++)r[p] = t(m[p] + c[p % C]);
                            H = r
                        }
                        var Q = M(H, q), I = W(Q), I = W(I);
                        F(I, (-2023170950 ^ -1791125252) + (-1341978069 ^ 1571402065), v, ((-1099248196 ^ -1028520619) + (1071084354 ^ -1126153195)) * e + ((-1330765500 ^ -619022255) + (1473931262 ^ -1013858031)), (234019070 ^ 592520219) + (-1678837518 ^ 1253243817));
                        q = I
                    }
                    var A, E = v.length;
                    if (null == v || (-116149294 ^ -1453578699) + (-374179940 ^ 1174543749) > E)A = new String(h("")); else {
                        u = [];
                        for (z = (769044734 ^ 1835413779) + (1609728875 ^ -524419720); z < E; z++)u.push(ha(v[z]));
                        A = u.join(k(""))
                    }
                    d = A
                }
            } catch (J) {
                d = R({ec: n("1I"), em: J.message}), a = !((1925969782 ^ 761226374) + (-1521854466 ^ 86064111))
            }
            S(l("2oc12cc1c12J2n202J22Ixc3cJcJcJ"), d + g("1o") + b, a, b);
            S(h("cn9J3c3m3D9p929x3o3Icn"), (-1926340910 ^ -858979448) + (1683908839 ^ -633157032), a, b);
            window[l("319c32c29J9x9c9n3c32")](K, (1661975233 ^ 481543669) + (-454611183 ^ 1689854653))
        }

        var Z = window[h("9p9n919m329J9n90")].host, q = window[g("929n913c9x9c9032")], u = window[l("909m399J939m329n3I")], A = function (a, e) {
            if ((2072022071 ^ 1744314038) + (-2112011548 ^ 1637494683) >= a)return[(1188971465 ^ 1325674184) + (-639238220 ^ 801140043)];
            for (var d = [], b = (-1470592230 ^ -298449689) + (-2118136805 ^ 942586904); b < a; b++)d.push(e);
            return d
        }, E = function (a, e, d, b) {
            a = h("") + a;
            if (a.length > d)throw Error(k("1m1m1m1m"));
            if (a.length == d)return a;
            var c = [];
            e || c.push(a);
            for (var f = a.length; f < d; f++)c.push(b);
            e && c.push(a);
            return c.join(g(""))
        }, J = function (a, e) {
            if ((162574606 ^ 2021126398) + (-1689796938 ^ 360644774) > a || (-1508959065 ^ -1268319475) + (-513114483 ^ 217868013) <= a)throw Error(g("1m1m1m1M"));
            for (var d = A(e, k("1M")), b = n("") + a, c = (-633236978 ^ -10222332) + (504870439 ^ -993141039), f = (-1951321106 ^ -1407226925) + (521763962 ^ -951526471); c < d.length && f < b.length; f++)n("I0") != b.charAt(f) && (d[c++] = b.charAt(f));
            return parseInt(d.join(g("")))
        }, C = function (a) {
            var e, d, b, c, f;
            e = a.length & (-995340326 ^ -1443424374) + (1683836124 ^ -151393425);
            d = a.length - e;
            b = (-1096907036 ^ -2070641184) + (-856984082 ^ 152996085);
            for (f = (-306767e3 ^ -540261865) + (-619777947 ^ 378164964); f < d;)c = a.charCodeAt(f) & (1706323486 ^ 1008175080) + (-1752598647 ^ 836067456) | (a.charCodeAt(++f) & (369095635 ^ 1822520820) + (-991453222 ^ 1111942402)) << (-1692750067 ^ -628920490) + (724887897 ^ -1789733132) | (a.charCodeAt(++f) & (-414318462 ^ -799985601) + (-1214527156 ^ 2138773774)) << (247717432 ^ 78311331) + (2120319808 ^ -1946727115) | (a.charCodeAt(++f) & (-528397863 ^ -354165784) + (410907721 ^ -304047481)) << (-1319508738 ^ -1586603891) + (-820378547 ^ 550651880), ++f, c = 3432918353 * (c & (-813426502 ^ -1268044115) + (-975783086 ^ 1103590074)) + ((3432918353 * (c >>> (1683969786 ^ 1166387642) + (-1112668205 ^ 1670055683)) & (783494488 ^ 158787869) + (-321890614 ^ 887844208)) << (339292621 ^ 1158218719) + (-1257919505 ^ 466249233)) & 4294967295, c = c << (1858906058 ^ 685189885) + (-903241700 ^ 1942868676) | c >>> (287193025 ^ 1582961507) + (1524322915 ^ -362772212), c = ((-1575860540 ^ -279730102) + (1976469535 ^ -1148465382)) * (c & (-800332285 ^ -781325776) + (1350899218 ^ -1369446946)) + ((((-1590327587 ^ -277086367) + (-984443218 ^ 141176185)) * (c >>> (1744942817 ^ 105514993) + (-593474883 ^ 1293157821)) & (904246137 ^ 740353923) + (-1366320759 ^ 1219768972)) << (-1876316886 ^ -198046289) + (905738955 ^ -1374149312)) & 4294967295, b ^= c, b = b << (-260703996 ^ -157083232) + (-931634375 ^ 827423824) | b >>> (-701841989 ^ -1561229848) + (2040301197 ^ -222805683), b = ((-522512605 ^ -1301207544) + (1266774714 ^ -422265760)) * (b & (385396895 ^ 848038569) + (-1083256276 ^ 1692571621)) + ((((-884721053 ^ -1082002630) + (-2108150426 ^ 157424586)) * (b >>> (-935221138 ^ -169044762) + (-1780061109 ^ 1471459267)) & (1955966197 ^ 1425555769) + (-2013494532 ^ 1483706575)) << (1358575462 ^ 1645092626) + (684780411 ^ -438616857)) & 4294967295, b = (b & (1218338521 ^ 793819369) + (-1900227165 ^ 378457196)) + ((-620859988 ^ -528137054) + (1689003231 ^ -1591122295)) + (((b >>> (-1227401789 ^ -261061706) + (-47596317 ^ 1148294520)) + ((335133579 ^ 2065820673) + (-2067214506 ^ 333463964)) & (1502544003 ^ 540722599) + (372587532 ^ -1870788905)) << (1283290972 ^ 2027027625) + (2134713106 ^ -1267837175));
            c = (-489495544 ^ -2074521827) + (-1442046454 ^ 863521505);
            switch (e) {
                case(-1008592589 ^ -731235055) + (1568314864 ^ -1257419247):
                    c ^= (a.charCodeAt(f + ((-1988889092 ^ -1981749095) + (301110933 ^ -291605496))) & (-1156292323 ^ -1333996914) + (-1553533095 ^ 1475459637)) << (-183110279 ^ -510506772) + (-2104532254 ^ 1777803417);
                case(-1394741366 ^ -1879769146) + (-1280831991 ^ 1870586303):
                    c ^= (a.charCodeAt(f + ((916550410 ^ 838093415) + (58188200 ^ -69392580))) & (2092972976 ^ 1287287027) + (331192077 ^ -600300879)) << (-941586150 ^ -119513518) + (-306681874 ^ 759648046);
                case(1472503826 ^ 171768346) + (-1082317758 ^ 494567867):
                    c ^= a.charCodeAt(f) & (1946813904 ^ 513214872) + (-1255301894 ^ 542074957), c = 3432918353 * (c & (971845801 ^ 1181552503) + (166349245 ^ -1989506660)) + ((3432918353 * (c >>> (-1679969878 ^ -523705715) + (-1613783450 ^ 455422607)) & (1220018752 ^ 1334488507) + (405274083 ^ -521556505)) << (-328866022 ^ -1392814894) + (-976485927 ^ 2058177937)) & 4294967295, c = c << (320082978 ^ 510896597) + (-1993747683 ^ 2075234565) | c >>> (1723250192 ^ 1330862160) + (1172764546 ^ -1812142509), b ^= ((870061369 ^ 341705793) + (-1129366728 ^ 1219108643)) * (c & (1994158495 ^ 1008786915) + (569403691 ^ -1795933528)) + ((((-1033594985 ^ -247132403) + (882985446 ^ -591080161)) * (c >>> (657442816 ^ 569668112) + (-1186168881 ^ 1080572367)) & (296310868 ^ 530464093) + (1564206382 ^ -1393393704)) << (1814539133 ^ 2123533635) + (831779215 ^ -589748131)) & 4294967295
            }
            b ^= a.length;
            b ^= b >>> (2038002942 ^ 1603993988) + (45859060 ^ -609858974);
            b = 2246822507 * (b & (1557598207 ^ 554811004) + (472948053 ^ -1643457751)) + ((2246822507 * (b >>> (-1406890365 ^ -1488661241) + (1871589089 ^ -1693349267)) & (-1432203389 ^ -464227919) + (135013102 ^ -1190730973)) << (-1768122999 ^ -124309694) + (-425521525 ^ 2002209742)) & 4294967295;
            b ^= b >>> (1499957776 ^ 522057247) + (323918609 ^ -1429530385);
            b = 3266489909 * (b & (-1461524821 ^ -1332178085) + (-1189493086 ^ 1587498157)) + ((3266489909 * (b >>> (-1668421439 ^ -1611964060) + (1773912194 ^ -1792887063)) & (-1645104722 ^ -1860249080) + (-2065385311 ^ 2012556536)) << (-901331761 ^ -1875795691) + (-1885033715 ^ 707539259)) & 4294967295;
            a = (b ^ b >>> (-1588205787 ^ -1977835195) + (58178414 ^ -675216674)) >>> (-1238855983 ^ -1306246957) + (381360191 ^ -314037823);
            e = [];
            e.push(a);
            try {
                var h;
                d = a + k("");
                for (c = b = f = (1353393891 ^ 1484727773) + (351480203 ^ -472328887); c < d.length; c++)try {
                    var q = parseInt(d.charAt(c) + n(""));
                    f = q || (-539286457 ^ -265557301) + (-1534363889 ^ 1954825851) === q ? f + q : f + ((1507201600 ^ 2100105366) + (1379710537 ^ -1992799390));
                    b++
                } catch (t) {
                    f += (1063156995 ^ 936448460) + (-1087658683 ^ 1213937271), b++
                }
                h = J(((-537594727 ^ -1422590860) + (-745386385 ^ 1487780219)) * f / ((982591015 ^ 1091671132) + (861399237 ^ -1222073024) == b ? (-552151562 ^ -1809022344) + (1958615551 ^ -1065635444) : b), (308807988 ^ 2027158225) + (312867964 ^ -2015235999));
                for (var u, p = Math.floor(h / Math.pow((86369216 ^ 1898953462) + (-55510618 ^ 2001035122), (-1498684101 ^ -1900187716) + (-711141317 ^ 41266497))), q = a + g(""), m = c = b = f = d = (-1389419032 ^ -462710041) + (1244795613 ^ -58109396); m < q.length; m++)try {
                    var v = parseInt(q.charAt(m) + k(""));
                    v || (1638027880 ^ 301435048) + (-1025453302 ^ 1296758346) === v ? v < p ? (f++, d += v) : (c++, b += v) : (c++, b += p)
                } catch (w) {
                    c++, b += p
                }
                u = J(((-183536374 ^ -1937683293) + (181854387 ^ -1935202581)) * b / ((891136681 ^ 101934226) + (-1263249597 ^ 2017814150) == c ? (-729151957 ^ -2058032454) + (-1792635883 ^ 990355301) : c) - ((1686391511 ^ 1715905266) + (1923103386 ^ -1885524666)) * d / ((-1955526963 ^ -1052562761) + (1632902198 ^ -728117328) == f ? (-320011226 ^ -116596020) + (660758977 ^ -847480618) : f), (103543928 ^ 1202359606) + (-91620197 ^ 1157069359));
                e.push(E(h, !((-1769329928 ^ -1752246218) + (-1535030683 ^ 1517963095)), (-1622407401 ^ -2076558610) + (1719151682 ^ -2098074037), l("1M")));
                e.push(E(u, !((-526591239 ^ -1411033617) + (-793855664 ^ 1680394682)), (1347388776 ^ 160740508) + (-653213440 ^ 2134118158), l("1M")))
            } catch (z) {
                e = [], e.push(a), e.push(A((2015360955 ^ 670651842) + (2093226936 ^ -589478351), g("Ix")).join(l(""))), e.push(A((33846686 ^ 1407117924) + (-543981368 ^ 1907810496), g("Ix")).join(l("")))
            }
            return e.join(k(""))
        }, aa = function (a) {
            var e = Array.prototype.forEach, d = Array.prototype.map, b = function (a, b, c) {
                if (null !== a)if (e && a.forEach === e)a.forEach(b, c); else if (a.length === +a.length)for (var d = (1785510099 ^ 1611182069) + (1228291529 ^ -1129458413), f = a.length; d < f && b.call(c, a[d], d, a) !== {}; d++); else for (d in a)if (a.hasOwnProperty(d) && b.call(c, a[d], d, a) === {})break
            }, c = function (a, c, e) {
                var f = [];
                if (null == a)return f;
                if (d && a.map === d)return a.map(c, e);
                b(a, function (a, b, d) {
                    f[f.length] = c.call(e, a, b, d)
                });
                return f
            }, f = {QB: C, bNm: !((-2123117812 ^ -183933065) + (640652637 ^ -1381316904)), bNl: !((1952519850 ^ 1857786153) + (-13941360 ^ 437140973)), bNk: !((-1459179905 ^ -1797781665) + (55083336 ^ -1050028120))};
            h("993c9091329J9n90") == typeof a && (f.QB = a);
            var r = function () {
                try {
                    return!!window[h("9p9n919m9pc1329n3I9m939c")]
                } catch (a) {
                    return!((798538447 ^ 372657983) + (488331622 ^ -615885962))
                }
            }, t = function () {
                try {
                    return!!window[l("319c31319J9n90c1329n3I9m939c")]
                } catch (a) {
                    return!((607145191 ^ 1378992366) + (-193146399 ^ 2105713174))
                }
            }, w = function () {
                return window[g("2m91329J399ccD2n9I9o9c9132")] ? c(h("2m913I9ncM2229I0cM2229162m929n929II0c1323I9c9m9x162m93219n90323I9n9pI02m93219n90323I9n9p16229c399m9pc9cIcD21323I9pI0229c399m9pc9cIcD21323I9pI01m162x9m913I9n9x9c929J9m299p9m319DcM9m3M9c3II02x9m913I9n9x9c929J9m299p9m319DcM9m3M9c3I162x313D9x9p1II0222n2x229n913c9x9c9032162x313D9x9p1II0cD2x2p2Dc2c2cM16cM2229I0cM929921323I9p16cm3c9J9196c29J9x9cI0cm3c9J9196c29J9x9c16cm3c9J9196c29J9x9c219D9c91962n9I9o9c9132I0cm3c9J9196c29J9x9c219D9c9196I01m163I9x9n913DI0cI9c9m9pcM9p9m3J9c3IIM231IIM219n90323I9n9p163I9x9n913DI0cI9c9m9pcM9p9m3J9c3IIM231IIM219n90323I9n9pI01m16cI9c9m9pcM9p9m3J9c3I16cI9c9m9pcM9p9m3J9c3II0cI9c9m9pcM9p9m3J9c3IID329xIJIM2m91329J399ccDIM219n90323I9n9pIMID111IIx9I9J32IJ16cI9c9m9pc99J929c9nI0cI9c9m9pc99J929c9nID329xIJIM2m91329J399ccDIM219n90323I9n9pIMID111IIx9I9J32IJ163I9x9n913DI0cI9c9m9pcM9p9m3J9c3IIM231IIM219n90323I9n9p16c1913I9J3M329J9093I0229J91329J9n909m3I3J16c19D9c9p9pI0cc2J2D9c9p3M9c3I16c19D9n9196339m399c299p9m319DI0c19D9n9196339m399c299p9m319D16c1c321329pI0c1c321329p16c1963J3M9cI0229c329c91329J9n9016c2222121329pI0c2222121329p16c32xcM9p9m3J9c3II02n21cD").split(k("16")),function (a) {
                    try {
                        return new (window[k("2m91329J399ccD2n9I9o9c9132")])(a), a
                    } catch (b) {
                        return null
                    }
                }).join(h("16")) : h("")
            }, y = function () {
                if (!u[g("3M9p3c939J9031")])return h("");
                var a = [], b = {};
                a.push(c(u[l("3M9p3c939J9031")],function (a) {
                    b[a.name] = (1270036592 ^ 546931475) + (241848991 ^ -1698753023);
                    var d = c(a,function (a) {
                        return[a.type, a.suffixes].join(n("30"))
                    }).join(k("Ip"));
                    return[a.name, a.description, d].join(h("1o1o"))
                }, this).join(k("I2")));
                a.push(c(n("12939m9x9c162m929I9p9n9196cM9p3c939J90162m929n9I9c2c3D2x9m902121229c329c9132162m929n9I9c2c3D2x9m90229c329c9132162m9p9m339m3IIM20cM2mcM2JIM3c329J9p31162m9p9J9c929J32IMcM9p3c93Ix2J90162m9p9J3M9m3JIMc19c913c3I9J323JIM219n90323I9n9pIM11162m9p9Jc1c12n2p9n939J90IM3M9p3c939J90162m9x9m3o9n902xcM11229n33909p9n9m929c3IcM9p3c939J90162m2n2pIM2x9c929J9mIMcM9p9m3J9I9m9196IMcM9p3c939J90162m3M3Mcc3M162m3I919D9J212m22162mc923IMc19J329cc19m999c323JIM3M9p3c939J90162I9m9I3J9p9n90IMc29n9n9p2I9m3I162I9m32329p9c9p9n93IM239m9x9cIM2p9m3c90919D9c3I162I9J32219n9x9c322m939c9032162I9J32929c999c90929c3IIMcm3c9J9196c1919m90162I9p3c9cc1329m919631IM2J9031329m9p9pIM229c329c91329n3I16219m329m9p9J909m233I9n3c3MIMcc3M929m329c16219J323I9J3DIM2J212mIM219p9J9c903216219J323I9J3DIM9n909p9J909cIM3M9p3c93Ix9J9016219J323I9J3DIMcI9c919c9J399c3IIMcM9p3c93Ix9J9016219n9n339n90IMcc3M929m329c16229c9m9pcM9p3J2p9J399cIMcc3M929m329c16229c999m3c9p32IM2I3I9n33319c3IIM2D9c9p3M9c3I16229J39cDIM2I3I9n33319c3IIMcM9p3c93Ix2J9016229J39cDIMcM9p3c31IMc39c9IIMcM9p9m3J9c3I16229J39cDIMc92n22IM2D9c9p3M9c3IIMcM9p3c93Ix9J9016929n3c9I9p9cc2339J3132IMc39c9IIMcM9p3c939J9016229n33909p9n9m929c3I31IM3M9p3c939J9016929n33909p9n9m92cc3M929m329c3I169c2x3c319J91cM9p3c939J90IM222p2x19162cc120IM2p9m3c90919DIM2x9n3o9J9p9p9mIMcM9p3c939J90162cc120IMc19n909m3IIM2mcM2J162c3D9J99IM2c399c3I3J339D9c3I9c16299m919c9I9n9n96IMcM9p3c939J9016299J9p9cIM229n33909p9n9m929c3IIMcM9p3c93Ix9J9016299J9p9c2p9m9IIM3M9p3c939J9016299p3J2n3I229J9cIM239m9x9c31IMcM9p3c939J9016299n9p3DIM11IM2I3I9n33319c3IIMcM9p3c939J901629ccco2cc19D9m3I9c1623222pIM2n9I9o9c9132IMc39c9IIMcM9p3c93Ix9J90IM1m19I01M1M1623292m212cIMcM9p3c939J9016239J90939c3I1623909n9x9cIMc19D9c9p9pIM2J90329c933I9m329J9n9016239n9n939p9cIM2c9m3I329DIMcM9p3c939J9016239n9n939p9cIM2c9m3I329DIMcM9p3c93Ix9J9016239n9n939p9cIM239c9m3I31IM1MI01cI01111I01M16239n9n939p9cIMc29m9p96IM2c99999c913231IMcM9p3c939J9016239n9n939p9cIMcc3M929m329c162D9m3I9x9n903JIM299J3I9c999n3DIMcM9p3c939J90162D9m3I9x9n903JIMcM9p3c93Ix2J90162D9c3I9n9c31IMI9IM239c909c3I9m9p31IM9p9J399c162DcM229c329c9132162D329x9p1cIM9p9n919m329J9n90IM3M3I9n399J929c3I162J2cIMc29m9IIM3M9p3c939J90169J239c32329c3Ic1913I9J3M329m9I9p9ccM9p3c939J90169J2x9c319DIM3M9p3c939J9016269m313M9c3I31963JIMcM9m3131339n3I92IM2x9m909m939c3I162p9m3132cM9m3131162p9n932x9c2J90IMcM9p3c939J90IM1mI01MI01MI01J111c162p9n932x9c2J90IMcM9p3c939J90IM1mI01MI01MI01J191m162x9mIx219n90999J93I0919n9xIM3M9p3c939J90162x9J913I9n319n9932IM2n99999J919cIM1I1M1m11162x9J909J9I9m3IcM9p3c939J9016209m329J399cIM219p9J9c903216209J323I9nIMcM2229IMcM9p3c93Ix2J9016209n969J9mIMc13c9J329cIM2c909m9I9p9c3IIMcM9p3c939J9016209n3I329n90IM2J929c90329J323JIMc19m999c16903M2mcM2JIMcM9p3c939J901620cM2p9m3132cM9m31311620cMcM9p9m3J9c3Ic19D9c9p9p16903Mc29n90939I3c2m92929J9016203J3D2p9m3c90919D9c3I162n91329n319D9m3M9cIMc1323I9c9m9x9J9093IMc19c3I399J919c31162n909p9J909cIMc1329n3I9m939cIM3M9p3c93Ix9J90162n3I9I9J32IM229n33909p9n9m929c3I16cM9m90929nIMc39c9IIMcM9p3c939J9016cM9m3I9n9xI0c2c9IM3M9p9m3J9c3IIM3M9p3c939J9016cM2229IM9J90329c933I9m929nIM929nIMc39c9I269J3216cM2229IxcD219D9m90939cIMc99J9c339c3I16cM9D9n329n219c90329c3IcM9p3c939J901mI01mI01II01I16cM9J919m319m16cM9p9m3J2n90IMcM9p3c93Ix9J9016cmcm1I1M1m11IM299J3I9c999n3DIMcM9p3c939J9016cmcm229n33909p9n9m92IMcM9p3c939J9016cmcm2x9J909J222pIMcM9p3c939J9016cmcm2x3c319J9116cI9c9m9p229n33909p9n9m929c3IIMcM9p3c939J9016cI9n9I9p9n3DIM2p9m3c90919D9c3IIMcM9p3c939J9016cI9n91962x9c9p32IMcc3M929m329c16c19m999c3IIMcc3M929m329c16c19m999cc19c9m3I919D16c1913I9J3M329J9093I0229J91329J9n909m3I3J16c19c99219p9J9c9032IMcM9p3c939J9016c19D9c9p9pI0cc2J2D9c9p3M9c3I16c19J9p399c3I9p9J939D32IMcM9p3c93Ix2J9016c19J9x3M9p9cIMcM9m313116c1963J3M9cIMc39c9IIMcM9p3c939J9016c13c9x9m323I9mcM2229IM2I3I9n33319c3IIMcM9p3c939J9016c13J9x9m90329c91IMcM262JIM219p9J9c903216c29c90919c9032IM29c220IM3M9p3c93Ix9J9016c29D3c90929c3IIM229m3M21323I9pIM20cM2mcM2JIMcM9p3c939J9016c29n3I919D2D9c9p3M9c3I16cc909J323JIMcM9p9m3J9c3I16cc3M9p9m3JIMcM2116c9229n33909p9n9m929c3I16c99c9c329p9cIMc2c9IM219n3I9c16c92p21IM2x3c9p329J9x9c929J9mIMcM9p3c939J9016c39c9IIM219n9x3M9n909c90323116c39c9I269J32Ix9J90329c933I9J9c3I329cIMcM222916c32c2Ico2c20IM2I3I9n33319c3IIM2c3D329c90319J9n9016c39n9p993I9m9xIM2x9m329D9c9x9m329J919m16c39n3I92219m3M323c3I9ccD16c3cM2JIM229c329c91329n3IIM1mI01216cJ9m90929c3DIM2x9c929J9mIMcM9p3c939J9016cJ9m90929c3DIMcM2229IMc99J9c339c3I16cJ9n3cc23c9I9cIMcM9p3c93Ix9J90163o9m969n").split(g("16")),function (a) {
                    if (b[a])return l("");
                    a = u[h("3M9p3c939J9031")][a];
                    if (!a)return k("");
                    var d = c(a,function (a) {
                        return[a.type, a.suffixes].join(k("30"))
                    }).join(l("Ip"));
                    return[a.name, a.description, d].join(g("1o1o"))
                }, this).join(g("16")));
                return a.join(g("16"))
            }, p = function () {
                var a = q.createElement(h("919m90399m31")), b = a[h("939c32219n90329c3D32")](h("1I92"));
                b.textBaseline = k("329n3M");
                b.font = n("131M3M3DIMI32m3I9J9m9pI3");
                b.textBaseline = h("9m9p3M9D9m9I9c329J91");
                b.fillStyle = g("I199191M");
                b.fillRect((-880258800 ^ -1552329627) + (408175283 ^ -1889879621), (2021800238 ^ 1563364961) + (2086162157 ^ -1509259681), (-1763239775 ^ -943514994) + (1885935055 ^ -558699584), (-470637936 ^ -893879647) + (1988361528 ^ -1607017765));
                b.fillStyle = g("I11M191J");
                b.fillText(g("9x3321IM90969I9m999o9n3I92IM3M9D31939p3JIM9c3D3932IM3o3m9J3cIpIM0m6xoMIM323M9D3132In1oIn3c9D9I93329J91I09x9nIn9p9c39399m"), (-385966307 ^ -1266138413) + (2065230767 ^ -661534309), (-1144630135 ^ -561394360) + (-1549054271 ^ 958081167));
                b.fillStyle = g("3I939I9mID1m1M1IIpIM1I1M12IpIM1MIpIM1MI013IJ");
                b.fillText(g("9x3321IM90969I9m999o9n3I92IM3M9D31939p3JIM9c3D3932IM3o3m9J3cIpIM0m6xoMIM323M9D3132In1oIn3c9D9I93329J91I09x9nIn9p9c39399m"), (-653291053 ^ -1217258718) + (1113435662 ^ -740304099), (1367629315 ^ 1272790148) + (1509882444 ^ -1135056954));
                return a[h("329n229m329mcccI2p")]()
            }, m = function () {
                var a = q.createElement(g("929J39")), b = [], c = h("2m91329J399c2I9n3I929c3IIM2m91329J399c219m3M329J9n90IM2m3M3Mc39n3I96313M9m919cIM2I9m9196933I9n3c9092IM2I3c32329n90299m919cIM2I3c32329n902D9J939D9p9J939D32IM2I3c32329n90c19D9m929n33IM2I3c32329n90c29c3D32IM219m3M329J9n90c29c3D32IM233I9m3Jc29c3D32IM2D9J939D9p9J939D32IM2D9J939D9p9J939D32c29c3D32IM2J909m91329J399c2I9n3I929c3IIM2J909m91329J399c219m3M329J9n90IM2J909m91329J399c219m3M329J9n90c29c3D32IM2J90999n2I9m9196933I9n3c9092IM2J90999nc29c3D32IM2x9c903cIM2x9c903cc29c3D32IMc1913I9n9p9p9I9m3IIMc29D3I9c9c22229m3I96c19D9m929n33IMc29D3I9c9c22299m919cIMc29D3I9c9c222D9J939D9p9J939D32IMc29D3I9c9c222p9J939D32c19D9m929n33IMc29D3I9c9c22c19D9m929n33IMc39J90929n33IMc39J90929n33293I9m9x9cIMc39J90929n33c29c3D32").split(n("IM"));
                if (!window[k("939c32219n9x3M3c329c92c1323J9p9c")])return b.join(g(""));
                for (var d = (-1231209509 ^ -1591932031) + (-1641297840 ^ 1985218550); d < c.length; d++)q.body.appendChild(a), a.style.color = c[d], b.push(c[d]), b.push(window[h("939c32219n9x3M3c329c92c1323J9p9c")](a).getPropertyValue(k("919n9p9n3I"))), q.body.removeChild(a);
                return b.join(n("1o"))
            }, v = function (a, b) {
                var c = a.createBuffer();
                a.bindBuffer(a.ARRAY_BUFFER, c);
                var d = new Float32Array([-.2, -.9, (1469631559 ^ 2055475082) + (-16038169 ^ 770210516), .4, -.26, (-103881598 ^ -1667150332) + (-1478359649 ^ 1030901989), (-1621610662 ^ -691052996) + (-188798276 ^ 1121428518), .732134444, (-934972825 ^ -418105828) + (562541914 ^ -248967457)]);
                a.bufferData(a.ARRAY_BUFFER, d, a.STATIC_DRAW);
                c.itemSize = (-360236342 ^ -836590572) + (-57720444 ^ 668278945);
                c.numItems = (-688728134 ^ -1342470171) + (473845971 ^ -1698103433);
                var d = a.createProgram(), e = a.createShader(a.VERTEX_SHADER);
                a.shaderSource(e, g("9m32323I9J9I3c329cIM399c911IIM9m32323Ic99c3I329c3D16IM399m3I3J9J9093IM399c911IIM399m3I3J9J90c29c3D219n9n3I929J909m329c16IM3c909J999n3I9xIM399c911IIM3c909J999n3I9x2n9999319c3216IM399n9J92IM9x9m9J90IDIJIM36IMIMIM399m3I3J9J90c29c3D219n9n3I929J909m329cIM1xIM9m32323Ic99c3I329c3DIMI6IM3c909J999n3I9x2n9999319c3216IMIMIM939pcncM9n319J329J9n90IM1xIM399c9112ID9m32323Ic99c3I329c3DIpIM1MIpIM1mIJ16IM3x"));
                a.compileShader(e);
                var f = a.createShader(a.FRAGMENT_SHADER);
                return a.shaderSource(f, l("3M3I9c919J319J9n90IM9x9c929J3c9x3MIM999p9n9m3216IM399m3I3J9J9093IM399c911IIM399m3I3J9J90c29c3D219n9n3I929J909m329c16IM399n9J92IM9x9m9J90IDIJIM36IMIMIM939pcn293I9m93219n9p9n3IIM1xIM399c9112ID399m3I3J9J90c29c3D219n9n3I929J909m329cIpIM1MIpIM1mIJ16IM3x")), a.compileShader(f), a.attachShader(d, e), a.attachShader(d, f), a.linkProgram(d), a.useProgram(d), d.vertexPosAttrib = a.getAttribLocation(d, h("9m32323Ic99c3I329c3D")), d.offsetUniform = a.getUniformLocation(d, h("3c909J999n3I9x2n9999319c32")), a.enableVertexAttribArray(d.vertexPosArray), a.vertexAttribPointer(d.vertexPosAttrib, c.itemSize, a.FLOAT, !((2006802813 ^ 1517909371) + (840609725 ^ -536787898)), (1219986388 ^ 1708739407) + (-1201390490 ^ 1794444035), (-1626230401 ^ -1749958402) + (1460865059 ^ -1605597604)), a.uniform2f(d.offsetUniform, (-965874649 ^ -1157642082) + (-946727310 ^ 1157614906), (-444834034 ^ -1435326268) + (1654620736 ^ -764507529)), a.drawArrays(a.TRIANGLE_STRIP, (-143344006 ^ -1420735231) + (1387128959 ^ -243800838), c.numItems), C(b[h("329n229m329mcccI2p")]())
            }, x = function () {
                var a = null, b = q.createElement(h("919m90399m31")), d = [];
                try {
                    a = b[h("939c32219n90329c3D32")](l("339c9I939p")) || b[g("939c32219n90329c3D32")](h("9c3D3M9c3I9J9x9c90329m9pIx339c9I939p"))
                } catch (c) {
                }
                if (!a)return d;
                try {
                    d.push(a.getSupportedExtensions())
                } catch (e) {
                }
                try {
                    d.push(v(a, b))
                } catch (f) {
                }
                return d.join(k("16"))
            }, z = function () {
                var a = [l("9x9n909n313M9m919c"), n("319m9031Ix319c3I9J99"), g("319c3I9J99")], b = [], d = q.body, c = q.createElement(n("313M9m90"));
                c.style.fontSize = h("131I3M3D");
                c.style.visibility = h("9D9J92929c90");
                c.innerHTML = k("3333339x9x9x9x9x9x9x9x9x9x9p9p9J");
                for (var e = function (a) {
                    var b = {};
                    return c.style.fontFamily = a, d.appendChild(c), b.height = c.offsetHeight, b.width = c.offsetWidth, d.removeChild(c), b
                }, f = (-1758178318 ^ -1337651594) + (-469278086 ^ 1015660550); f < a.length; f++)b[f] = e(a[f]);
                return function (d) {
                    for (var c = (-439354462 ^ -1614197325) + (1147054287 ^ -1045962464); c < b.length; c++) {
                        var f = e(d + h("Ip") + a[c]), g = b[c];
                        if (f.height !== g.height || f.width !== g.width)return!((-1435612171 ^ -2117455178) + (409757650 ^ -868753041))
                    }
                    return!((-1917373501 ^ -1621972726) + (127975534 ^ -356866730))
                }
            }, A = function () {
                for (var a = k("2m9I9m929JIM2xc2IM219n90929c90319c92IM2p9J939D32162m929n9I9cIM299m9093319n9093IMc13292162m929n9I9cIM2D9c9I3I9c33162m929n9I9cIM2x9J9093IMc13292162m939c90913JIM292I162m3I9m9I162m3I9m9I9J91IMc23J3M9c319c32329J9093162m3I9J9m9pIM2I9p9m9196162I9m329m9093162I9m3c9D9m3c31IM1J11162I9c9p9pIM2xc2162I9J3231323I9c9m9xIMc99c3I9mIMc19c3I9J99162I9n929n909JIM2xc2162I9n9n969x9m90IM2n9p92IMc1323J9p9c162I3I9m93939m929n919J9n162I3I9n9m92339m3J16219m9p9J9I3I9J16219m9p9J999n3I909J9m90IM292I16219m31329c9p9p9m3I16219m313c9m9p16219c90329m3c3I16219c90323c3I3JIM239n329D9J9116219D9m9p96923c31329c3I16219n9p9n90909mIM2xc216219n3M3M9c3I3M9p9m329cIM239n329D9J91IM2p9J939D3216229c9o9mc93cIM2p2321IMc19m9031IM2x9n909n16229c31929c9x9n909m162229269m9JIxc12I16229n323c9x162c90933I9m399c3I31IM2xc2162c3I9m31IM2I9n9p92IM2Jc221162c3c3I9n31329J9p9c16299m9093c19n909316299n3I329c16293I9m90969p9J90IM239n329D9J91IM2D9c9m393J16293I9c90919DIMc1913I9J3M32IM2xc216239m9I3I9J9n9p9m16239J939J16239J319D9m16239n3c923JIM2n9p92IMc1323J9p9c16233c9p9J9x16233c9093c19c9n162D9m9c32329c9031919D339c9J9p9c3I162D9m3I3I9J9093329n90162D9J3I9m939J909nIMc19m9031IM232I162J9x3M9m9132162J90999n3I9x9m9pIMcI9n9x9m9016269m9131322n909c16269J909nIM2xc216269n3o3c969mIM239n329D9J91IMcM3I1920162p9n9D9J32IM233c9o9m3I9m329J162p9n9x9m162p3c919J929mIM2I3I9J939D32162p3c919J929mIM299m3D162x9m93909c329n162x9m9p933c90IM239n329D9J91162x9m323c3I9mIM2xc2IMc1913I9J3M32IM219m3M9J329m9p31162x9c909p9n162x9J90932p9JccIx2c3D322I162x9n9n9p2I9n3I9m90162xc1IMcM2x9J90919D9n162xc1IMcI9c999c3I9c90919cIMc19m9031IMc19c3I9J9916209c3331IM239n329D9J91IM2xc216209J9m939m3I9mIMc19n9p9J9216203J9m9p9m16cM9m9p9m919cIMc1913I9J3M32IM2xc216cM9m3M3J3I3c3116cM9c3I3M9c323c9m16cM9p9m3J9I9J9p9p16cM2x9J90932p9Jcc16cI9m919D9m909m16cI9n9196339c9p9p16c19m339m31929c9c16c1913I9J3M32IM2xc2IM2I9n9p9216c19c939n9cIMcM3I9J903216c19D9n33919m3I92IM239n329D9J9116c19J9x2D9c9J16c1909m3MIM2Jc22116c29p33932x9n909n16c233IM219c90IM2xc2IM219n90929c90319c92IM2c3D323I9mIM2I9n9p9216cc9I3c90323c16cc9x3M3c319D16cc909J399c3I3116cc329n3M9J9m16c99p9m929J9x9J3IIMc1913I9J3M3216c39J929cIM2p9m329J901602666n0co0D6160cDxD009J9D3026Dox0co0D6160cDxD009J9D302666n0co0D6160cDxD009J9D30co0D6026xJ1160cDxD009J9D30c6xoJ026oJm160cDxD009J9D309J96M0JoxDn160cDxD009J9D309oc63026xJ1160cDxD009J9D303JMoc03DnDM160cDxD009J9D30366D90J66Jm160cDxD009J9D30DomDp09oc63160cDxD009J9D30JJo69026Jo9160co0D6026xJ1160c6J6p0cJpD9160c60o00D6xon0JJ6Dc0J66Jm1609J96M0co0D6026xJ11609J96J09oxo10co3Jo026xJ11609J96J09oxo10DDDJI026xJ11609oc63026xJ1160JJo69026Jo9160J66Jm026xJ11609J96M0366D909JDD0026xJ1160366D909JDD0026xJ11609oMD309oc63026xJ11602666n0co0D6cn232I1I111m1I1609oc63026xJ1cn232I1I111m1I160c60o00D6xon09oxo10J66Jm026xJ1160cDxD009J9D30J66Jm026xJ116026D6x0J66JmIMcM3I9n16026D6x0co0D6IMcM3I9n160DD66J09J0Jp026D6x026Dox0J66Jm160DD66J09J0Jp026D6x0366D90co0D6").split(h("16")), b = [], c = (-1197169454 ^ -168811878) + (-2004385278 ^ 976026554); c < a.length; c++) {
                    var d = a[c];
                    z()(d) && b.push(d)
                }
                return b.join(n("16"))
            };
            this.get = function () {
                var a = [];
                a.push(t());
                a.push(r());
                a.push(!!window[n("9J90929c3D9c92222I")]);
                q.body ? a.push(typeof q.body[g("9m92922I9c9D9m399J9n3I")]) : a.push(l("3c90929c999J909c92"));
                a.push(typeof window[h("9n3M9c90229m329m9I9m319c")]);
                a.push(u[h("913M3c219p9m3131")]);
                a.push(u[k("3M9p9m32999n3I9x")]);
                var b;
                if (b = f.bNl)b = q.createElement(n("919m90399m31")), b = !(!b[l("939c32219n90329c3D32")] || !b[k("939c32219n90329c3D32")](h("1I92")));
                b && (a.push(p()), a.push(x()));
                a.push(m());
                b = [];
                b.push(A());
                b.push(u[k("3c319c3I2m939c9032")]);
                b.push(u[h("9p9m90933c9m939c")]);
                b.push(window[l("31913I9c9c90")][h("919n9p9n3I229c3M329D")]);
                if (f.bNm) {
                    var c = [window[h("31913I9c9c90")].height, window[l("31913I9c9c90")].width];
                    l("3c90929c999J909c92") !== typeof c && b.push(c.join(k("3D")))
                }
                b.push((new Date)[l("939c32c29J9x9c3o9n909c2n9999319c32")]());
                b.push(u[n("929n209n32c23I9m9196")]);
                b.push(window[h("2m91329J399ccD2n9I9o9c9132")] && f.bNk ? w() : y());
                c = [];
                f.QB ? (c.push(f.QB(a.join(h("I1I1I1")))), c.push(f.QB(b.join(n("I1I1I1"))))) : (c.push(C(a.join(k("I1I1I1")))), c.push(C(b.join(n("I1I1I1")))));
                return c
            }
        }, t = function (a) {
            if ((1395141557 ^ 84954685) + (-65923695 ^ 1440058473) > a)return t((1388157449 ^ 1001577873) + (-1638052676 ^ 145618004) - ((2030137295 ^ 952036148) + (-1496885654 ^ 411512047) - a));
            if ((517867339 ^ 2131356489) + (-781718521 ^ 1330642809) <= a && (1873560152 ^ 740280379) + (-1974696946 ^ 906031634) >= a)return a;
            if ((-777237349 ^ -1024460297) + (694937373 ^ -975721458) < a)return t((-725930291 ^ -1133673719) + (192752657 ^ -1672184406) + a - ((818699888 ^ 500590583) + (-970859366 ^ 348396130)));
            throw Error(g("1m1M1M1m"))
        }, da = function (a, e) {
            return t(a + e)
        }, G = function (a, e) {
            a = t(a);
            e = t(e);
            return t(a ^ e)
        }, M = function (a, e) {
            if (null == a || null == e || a.length != e.length)return a;
            for (var d = [], b = (391063462 ^ 923887720) + (-612707748 ^ 81486446), c = a.length; b < c; b++)d[b] = G(a[b], e[b]);
            return d
        }, X = g("1M1m1I11121c19131D1J9m9I91929c99").split(h("")), ha = function (a) {
            var e = [];
            e.push(X[a >>> (572673052 ^ 1426640727) + (1230816381 ^ -1047938876) & (655144194 ^ 2113758198) + (-30042350 ^ 1530641929)]);
            e.push(X[a & (-144784840 ^ -1611687676) + (1299480364 ^ -633676801)]);
            return e.join(l(""))
        }, ia = function (a) {
            if (null == a || (-2039759924 ^ -1447528796) + (-901594242 ^ 443478502) == a.length)return[];
            a = new String(a);
            for (var e = [], d = a.length / ((1165046813 ^ 1058088127) + (475488471 ^ -1714909257)), b = (-1636867172 ^ -1059037034) + (-1038529654 ^ 1667872636), c = (1371507897 ^ 1172232769) + (1920157657 ^ -1712460079); c < d; c++) {
                var f = parseInt(a.charAt(b++), (-925824557 ^ -1049066495) + (1009303278 ^ -897659696)) << (1162406888 ^ 1308889438) + (776374566 ^ -621441944), g = parseInt(a.charAt(b++), (-1355588902 ^ -914226702) + (1042231711 ^ -1487825545));
                e[c] = t(f + g)
            }
            return e
        }, U = function (a) {
            if (null == a || void ((563947122 ^ 2002673812) + (1390860732 ^ -69574490)) == a)return a;
            a = encodeURIComponent(a);
            for (var e = [], d = a.length, b = (-404839717 ^ -592531227) + (757298763 ^ -374563959); b < d; b++)if (l("Ic") == a.charAt(b))if (b + ((-716519289 ^ -335602327) + (823614578 ^ -262310298)) < d)e.push(ia(a.charAt(++b) + g("") + a.charAt(++b))[(-1097052512 ^ -570391335) + (1274467619 ^ -728375132)]); else throw Error(g("1m1M1M1J")); else e.push(a.charCodeAt(b));
            return e
        }, F = function (a, e, d, b, c) {
            if (null == a || (-2026582115 ^ -1254045934) + (-1160364575 ^ 2002635408) == a.length)return d;
            if (null == d)throw Error(g("1m1M1M12"));
            if (a.length < c)throw Error(k("1m1M1M11"));
            for (var f = (1883226690 ^ 1679670461) + (-1671027171 ^ 2008786716); f < c; f++)d[b + f] = a[e + f];
            return d
        }, V = function (a) {
            for (var e = [], d = (-470271239 ^ -1256049220) + (-1064403149 ^ 1772851080); d < a; d++)e[d] = (-741535291 ^ -1919678763) + (1516394881 ^ -70995599);
            return e
        }, ja = [(-93552098 ^ -75212683) + (-1382705336 ^ 1401074228), (-1703801449 ^ -574417329) + (-1040049843 ^ 2051865914), (394903307 ^ 761675227) + (-2088544 ^ 988831099), (1315647032 ^ 1285676797) + (542087031 ^ -579167839), (-463994884 ^ -1399671723) + (43556765 ^ -1247663217), (1792659108 ^ 1925176027) + (-610449435 ^ 1006939354), (1405664354 ^ 1201632763) + (1269443221 ^ -1610474278), (1363042083 ^ 2069370361) + (-44594596 ^ 684605079), (-1704972034 ^ -164094244) + (-157574611 ^ 1698449423), (-1328459412 ^ -1409708139) + (1322864815 ^ -1441893979), (-345405935 ^ -1895557026) + (-149815691 ^ 1820565380), (1970687652 ^ 276286712) + (-2146776719 ^ 452244528), (1301587082 ^ 505264824) + (1113941048 ^ -300710376), (58508321 ^ 624207799) + (95826086 ^ -603869982), (879903573 ^ 1123571181) + (524308136 ^ -1774868503), (519885989 ^ 1219759682) + (1503663827 ^ -266915292), (-329465069 ^ -1877592456) + (1892168927 ^ -209895912), (1591016649 ^ 1216295448) + (1197894716 ^ -1372431168), (-678367149 ^ -420360597) + (863306281 ^ -34881506), (1632518916 ^ 839987565) + (1734360411 ^ -876564452), (335801373 ^ 1468942478) + (965093529 ^ -2047577115), (940273349 ^ 1928055676) + (1290975981 ^ -101850954), (-1770235163 ^ -1637501236) + (-1310298638 ^ 1174436263), (-1362234482 ^ -170476966) + (-501550933 ^ 1191069199), (-865913053 ^ -629723450) + (550066616 ^ -920469617), (818646274 ^ 647750478) + (-1842290850 ^ 2074037888), (1724657028 ^ 1708417953) + (973364185 ^ -958141776), (-1366504303 ^ -1725680619) + (2100784586 ^ -1251972571), (928445381 ^ 675509578) + (-27376604 ^ 515128578), (-2017584742 ^ -96660868) + (844725550 ^ -1339717190), (1803530629 ^ 924892091) + (1656767434 ^ -1050626450), (1059535894 ^ 1791533232) + (651317812 ^ -1933430387), (945741484 ^ 678308074) + (1093782247 ^ -1359036166), (-1863110778 ^ -1244138467) + (-907955328 ^ 322606855), (37687065 ^ 1137297839) + (-1076448658 ^ 31427553), (443927041 ^ 419549422) + (1408603213 ^ -1350668006), (1930180732 ^ 352423574) + (-1801170140 ^ 223746626), (-1020360554 ^ -840858599) + (1499673186 ^ -1470905929), (1517285173 ^ 490899156) + (988142227 ^ -2110305119), (-1644251871 ^ -1757333255) + (-2104478061 ^ 2010137655), (607674573 ^ 189371386) + (1620403071 ^ -1340379143), (897308632 ^ 346542172) + (-1503010921 ^ 2018125809), (-451771717 ^ -1667407899) + (-1658417e3 ^ 458666617), (1766321222 ^ 1775425036) + (-1586217437 ^ 1579087874), (-1608870863 ^ -68566837) + (825568815 ^ -1791392433), (787010227 ^ 455589430) + (1357481726 ^ -1697049224), (1070426559 ^ 1797513761) + (481445978 ^ -1214038976), (1791234429 ^ 1793187549) + (207393971 ^ -209274044), (-48845623 ^ -265022535) + (-80622788 ^ 166497131), (439980014 ^ 696892987) + (1827864468 ^ -1598213733), (-1993920500 ^ -1682875738) + (695441085 ^ -1004928002), (-1757197531 ^ -1079546902) + (246325423 ^ -642416649), (-1271129680 ^ -113235840) + (-1618644205 ^ 755416093), (871777181 ^ 1337591428) + (-931969077 ^ 1270938837), (1060562119 ^ 708552727) + (1944939003 ^ -1725965530), (-453936045 ^ -743230065) + (-796088347 ^ 405868953), (1350777608 ^ 1932596180) + (947799296 ^ -466382242), (-1086156971 ^ -589001938) + (-1793246632 ^ 155501013), (-1588171531 ^ -263295452) + (133685911 ^ -1458561217), (668753044 ^ 1456735098) + (-1091749367 ^ 807049742), (953271507 ^ 1561809832) + (1861038758 ^ -187409666), (-724176317 ^ -574984416) + (-22883626 ^ 137539825), (686226181 ^ 1859105518) + (-1135216429 ^ 92491513), (1402111300 ^ 298096508) + (-718972875 ^ 1754052040), (389268751 ^ 1484140790) + (-1259291036 ^ 72005562), (-1615089489 ^ -1044693638) + (-1339729669 ^ 299510376), (1976214121 ^ 1137435453) + (163861569 ^ -1069880489), (-1408375330 ^ -2030592508) + (-1958315231 ^ 1581512935), (-521394475 ^ -566791389) + (1368348894 ^ -1867779426), (-710128965 ^ -196460939) + (692084602 ^ -145107918), (125064182 ^ 1685313606) + (-588019834 ^ 1074525082), (-441358997 ^ -709361617) + (666126457 ^ -398273800), (1224755030 ^ 527213581) + (-1962468043 ^ 580125165), (2110827284 ^ 311920065) + (14127270 ^ -1871756847), (1667273359 ^ 1507737e3) + (-1016139066 ^ 103785004), (702770215 ^ 357468394) + (698349334 ^ -355603393), (1079970571 ^ 1086490006) + (1330058239 ^ -1339727079), (-809971774 ^ -41173656) + (539417535 ^ -303409513), (1255763976 ^ 1403354183) + (-1814300150 ^ 1968705069), (-798025612 ^ -1844530208) + (1197629536 ^ -84134685), (146262010 ^ 1093194521) + (-1506443784 ^ 274044677), (1678747603 ^ 58483892) + (-1343155836 ^ 930950419), (2142537227 ^ 2054763147) + (764370259 ^ -675473825), (-150601709 ^ -693195013) + (2118948195 ^ -1608792665), (-279119367 ^ -572579005) + (1448875619 ^ -1692388532), (-206904361 ^ -779530516) + (-167102630 ^ 735471055), (1730279126 ^ 367799464) + (1251515117 ^ -945111087), (1162920575 ^ 504543761) + (1654653949 ^ -971144038), (2131431552 ^ 2118671537) + (-169276042 ^ 190168815), (548117359 ^ 509516222) + (-451593658 ^ 606062362), (-1977844267 ^ -1802715825) + (-1332516332 ^ 1375491547), (682240738 ^ 162756622) + (708463007 ^ -186850045), (-865668041 ^ -1696581892) + (324417382 ^ -1171322250), (-1516706959 ^ -648820156) + (2045790749 ^ -87777996), (1548100881 ^ 80883952) + (-2139741628 ^ 656263283), (783925116 ^ 1627921459) + (-844594846 ^ 2112282068), (1331475163 ^ 1946636578) + (274288513 ^ -721595463), (742438620 ^ 847726437) + (-284015238 ^ 237652924), (-1150376062 ^ -1505273273) + (-1364819575 ^ 1282442175), (1761567330 ^ 1924050203) + (-773291860 ^ 877048062), (1377797498 ^ 1644847532) + (1262507422 ^ -2069213691), (1215949425 ^ 1992595788) + (1101858256 ^ -2131785584), (-1242558425 ^ -277569570) + (-179997116 ^ 1346242117), (-1742691035 ^ -400250352) + (372391810 ^ -1714827283), (1823604726 ^ 435004437) + (-707637131 ^ 1601303804), (1054737406 ^ 1104117617) + (807058891 ^ -1326170461), (1237012799 ^ 1929521312) + (1509532973 ^ -1665195245), (1414288905 ^ 194176504) + (-1107303840 ^ 501131669), (582070880 ^ 369343061) + (-648393525 ^ 303545092), (-1293921702 ^ -1184903297) + (589535617 ^ -681313636), (-384214826 ^ -1865614769) + (1231926886 ^ -817370245), (2105806723 ^ 686892872) + (945419403 ^ -1831656862), (1733413683 ^ 189594101) + (1050117931 ^ -1384822141), (-1223241336 ^ -1775670836) + (-1498810178 ^ 2020196312), (873079230 ^ 610096057) + (833169917 ^ -570316843), (1030289011 ^ 1368670522) + (1414658345 ^ -950882256), (-2030379616 ^ -135266341) + (87312382 ^ -1948345751), (-1151305912 ^ -2077373111) + (-2144619259 ^ 1083831044), (190319956 ^ 157611100) + (40937508 ^ -5001407), (-325447962 ^ -1841548007) + (1027709627 ^ -1139254966), (305744566 ^ 1812080192) + (1034744704 ^ -1134010218), (-1003836812 ^ -854692558) + (527913152 ^ -374576999), (-223162914 ^ -1969706885) + (-977207316 ^ 1108698491), (2083481139 ^ 1942124330) + (-848152685 ^ 1029757222), (-1185599839 ^ -1152158804) + (-1530143314 ^ 1496481641), (-886831014 ^ -297324246) + (1486329753 ^ -2113187447), (-1734166018 ^ -236972278) + (-418633913 ^ 1907455887), (-1896162455 ^ -1430073139) + (721084842 ^ -247655121), (-1572967143 ^ -1026412849) + (-667037889 ^ 1194226489), (1573973101 ^ 734950243) + (-954737664 ^ 1324792971), (1052086705 ^ 521157596) + (537309395 ^ -27466398), (-1210026652 ^ -224332320) + (-456751195 ^ 1585051669), (1743747866 ^ 952451361) + (497214968 ^ -1116266333), (-846835309 ^ -2039794752) + (2110884514 ^ -909962076), (1143622690 ^ 1809698897) + (741741843 ^ -63015239), (-1664748125 ^ -853414306) + (1350580363 ^ -23339805), (-1566629886 ^ -1059578875) + (240457768 ^ -1813128305), (718089345 ^ 1483461728) + (-740729536 ^ 1585470159), (-1619492856 ^ -1364489193) + (2047880260 ^ -1271080891), (1050662725 ^ 767793321) + (307097498 ^ -17932516), (-1425737978 ^ -461487269) + (-785174356 ^ 1639349038), (-1088391496 ^ -1549409034) + (1035613622 ^ -557819668), (1647580081 ^ 1028389101) + (-931376148 ^ 1761363748), (-208570669 ^ -1168227126) + (-55491756 ^ 1250004310), (1822475607 ^ 1823616966) + (-318052311 ^ 317193429), (-1299423369 ^ -686129602) + (-156323351 ^ 1825009577), (-442591105 ^ -755005739) + (-603734966 ^ 345857483), (-1306804648 ^ -620519382) + (92798176 ^ -1822417605), (1907541478 ^ 160960105) + (1967055033 ^ -219425621), (-640058396 ^ -134733620) + (-1835527476 ^ 1128707646), (1267726759 ^ 1820268856) + (1805046886 ^ -1281766409), (1818070437 ^ 2032757077) + (859216128 ^ -641891708), (-1789431649 ^ -833457288) + (30310744 ^ -1523287382), (1382837366 ^ 596209073) + (475647943 ^ -1841090144), (799519082 ^ 1913249460) + (442188459 ^ -1207250234), (-29756589 ^ -1014548586) + (1846204674 ^ -1404313030), (-2107395777 ^ -638416158) + (318971720 ^ -1217536773), (854393953 ^ 1674982808) + (-1425211848 ^ 97005692), (1052341837 ^ 1248006068) + (1542505405 ^ -791329205), (-1860560116 ^ -1249952195) + (-284104728 ^ 881474816), (211574934 ^ 1007393767) + (-1430261228 ^ 1708652100), (-1152604284 ^ -1662777863) + (-1116492180 ^ 1696920550), (1245668397 ^ 1789303096) + (149341756 ^ -679426926), (-1170378167 ^ -193149342) + (416403541 ^ -1452303375), (1510138593 ^ 785649310) + (-1417159740 ^ 548325542), (-1720263808 ^ -1532503117) + (-1957364148 ^ 1232862822), (352093879 ^ 472983769) + (381740672 ^ -504187081), (1436122568 ^ 633448632) + (349982368 ^ -1686412156), (1885668465 ^ 2118959371) + (652018004 ^ -687129848), (-1429451100 ^ -1021968321) + (-250663702 ^ 1730846151), (-161443359 ^ -1041447406) + (1933970516 ^ -1154110582), (-741194306 ^ -367538497) + (1328899695 ^ -1995500850), (-2136770431 ^ -1587609175) + (-2065990954 ^ 1524170117), (-1873812798 ^ -1553723140) + (1580801557 ^ -1829956762), (-1375456959 ^ -890025553) + (220806068 ^ -1776173808), (-1366266820 ^ -600509417) + (163805264 ^ -2070409138), (1186363797 ^ 763236538) + (-178356e3 ^ 1634277319), (-1523511127 ^ -232764946) + (941375062 ^ -1863149561), (-3162142 ^ -711172525) + (-267731566 ^ 631677925), (49341279 ^ 1329074118) + (924950577 ^ -2062109912), (-1310084269 ^ -148548206) + (-747428911 ^ 1782594293), (-345737741 ^ -421339717) + (773386578 ^ -597580106), (1815995282 ^ 1785484831) + (1588276572 ^ -1492818117), (-531472487 ^ -2025804273) + (-1865125544 ^ 137986022), (465195396 ^ 639833587) + (1417617682 ^ -1776706915), (-890909391 ^ -549296072) + (-52645447 ^ 377809727), (1964455276 ^ 1745555190) + (949059548 ^ -630015225), (1349589466 ^ 1387263359) + (1522226495 ^ -1483061589), (-1105537837 ^ -1916725205) + (345089021 ^ -659189394), (-1741897917 ^ -819892575) + (-265771134 ^ 1490717254), (490227391 ^ 537055625) + (1664679130 ^ -1577216951), (2060113216 ^ 1129834172) + (-1215196478 ^ 1911773493), (-83024663 ^ -1196715141) + (1026403683 ^ -2123045518), (285072340 ^ 1943237404) + (-870210754 ^ 1357968489), (1951720323 ^ 1254033199) + (-2064892393 ^ 1173890363), (-1879531484 ^ -1604035113) + (-488334336 ^ 847748713), (-1912886065 ^ -170068945) + (1648570601 ^ -442787919), (-949111864 ^ -1110704329) + (486063910 ^ -1717498815), (-382195900 ^ -549061015) + (294001332 ^ -670811023), (111621224 ^ 1610088440) + (-1853919301 ^ 936401704), (1974033785 ^ 1769437173) + (71461079 ^ -412893892), (1855109613 ^ 77775435) + (-1772825685 ^ 60510327), (-233886378 ^ -1154795891) + (89454606 ^ -1282466776), (-1635151993 ^ -1227732522) + (-1282859826 ^ 1680680323), (192196402 ^ 686875793) + (-1472324384 ^ 1950723858), (90035213 ^ 1983730014) + (-119265019 ^ 1954239350), (-1353817975 ^ -490179230) + (575913056 ^ -1876273565), (-1408104698 ^ -676091455) + (-1612749786 ^ 461452441), (-651778826 ^ -998731518) + (-336785406 ^ 156031482), (-725657450 ^ -974964958) + (-699687046 ^ 954732709), (46474430 ^ 209814177) + (1630306716 ^ -1869096002), (1047583825 ^ 549191851) + (1495120474 ^ -1204905636), (-1221703408 ^ -1571178222) + (-1592994416 ^ 1266997869), (-335775061 ^ -1622395582) + (795672e3 ^ -1541190222), (-12498836 ^ -2053707779) + (882656233 ^ -1313598675), (589553509 ^ 707056679) + (-1762911137 ^ 1611982906), (1938786029 ^ 425881161) + (769576825 ^ -1194534701), (2146965253 ^ 40198947) + (-189807997 ^ 1993166497), (453822578 ^ 1926258948) + (1404440249 ^ -980068254), (1486939753 ^ 544764961) + (-1973071434 ^ 222444670), (-509985786 ^ -1168018954) + (-792544234 ^ 1959136870), (70932116 ^ 488126911) + (-712057152 ^ 861097625), (641637900 ^ 724334614) + (559352436 ^ -742779916), (-181382990 ^ -201957355) + (1699115487 ^ -1669349704), (-832067641 ^ -940814990) + (285105568 ^ -427144846), (1421876899 ^ 280691752) + (1271591189 ^ -263318496), (1734945303 ^ 554726813) + (1267745693 ^ -233381090), (-128554459 ^ -1638909494) + (1893564600 ^ -383505557), (-19740066 ^ -742001045) + (179191860 ^ -666467464), (168542243 ^ 1124182177) + (-1856353790 ^ 665836907), (-1803233282 ^ -2026223134) + (-1308538183 ^ 1581263658), (387740136 ^ 1426925796) + (539667549 ^ -1648096413), (825375323 ^ 1734762099) + (611966326 ^ -1915599317), (968503400 ^ 1804713390) + (-1217918765 ^ 448559405), (2080269223 ^ 237764186) + (-403031344 ^ 1842370804), (-1186734148 ^ -1776922772) + (-1373580532 ^ 2123021469), (-2043346784 ^ -1376186984) + (-1625995816 ^ 1260828583), (-295226595 ^ -1649838584) + (1457644757 ^ -623878602), (436707569 ^ 945433867) + (-1992366432 ^ 1419548489), (-1044081966 ^ -1978888214) + (1033083019 ^ -1985709329), (-967173325 ^ -553291176) + (1737006677 ^ -2128082706), (160055608 ^ 1124462678) + (1477313371 ^ -310489643), (192987911 ^ 857215561) + (1590968695 ^ -1716293836), (1078083366 ^ 756295619) + (921987687 ^ -1537373005), (1822379255 ^ 141176509) + (1982513615 ^ -316646234), (2138567728 ^ 81259193) + (1738356790 ^ -473769546), (613991581 ^ 1070344094) + (-1720678208 ^ 2111542672), (-1597798315 ^ -1107653756) + (-1333590273 ^ 1380317919), (2017854821 ^ 503163959) + (-1894767566 ^ 357855839), (986921134 ^ 1851750869) + (-1936945836 ^ 671036316), (-652864319 ^ -1868186962) + (-1575503132 ^ 341568268), (-1302750766 ^ -98021188) + (1559736295 ^ -344352482), (-249957808 ^ -1600904930) + (1871438803 ^ -1040593110), (669687564 ^ 1677153693) + (-253732591 ^ 1258449929), (989244215 ^ 1830936873) + (-849442785 ^ 1702247938), (44263116 ^ 1130779372) + (990167333 ^ -2059531569)], L = function (a) {
            var e = [];
            if (null == a || void ((7306580 ^ 1175748701) + (1071077026 ^ -2041359275)) == a || (1214869392 ^ 32477026) + (808852430 ^ -2041641792) == a.length)return V((-2045367310 ^ -1192805483) + (823210697 ^ -266347248));
            if ((1790257052 ^ 2054053929) + (-802042190 ^ 1058371129) <= a.length) {
                e = [];
                if (null != a && (-464657058 ^ -268110929) + (-1137126524 ^ 1468938891) != a.length) {
                    if ((-849201059 ^ -1791981068) + (-2101907270 ^ 622476845) > a.length)throw Error(k("1m1M1M11"));
                    for (var d = (-944219032 ^ -1772274704) + (-1255957969 ^ 456720967); (1145007042 ^ 75215535) + (-1571568615 ^ 501801674) > d; d++)e[d] = a[(-1186974100 ^ -1265774411) + (-1850486756 ^ 1669450043) + d]
                }
                return e
            }
            for (d = (-74778711 ^ -1155694345) + (212247739 ^ -1278333927); (261048521 ^ 835257460) + (1300144270 ^ -1933110515) > d; d++)e[d] = a[d % a.length];
            return e
        }, W = function (a) {
            if (null == a)return null;
            for (var e = [], d = (-1424345242 ^ -1188349365) + (-468970119 ^ 163768234), b = a.length; d < b; d++) {
                var c = a[d];
                e[d] = ja[((915516827 ^ 1516208372) + (-1967348132 ^ 428700925)) * (c >>> (1279872162 ^ 659408273) + (225515991 ^ -1718980858) & (198131128 ^ 1790034287) + (722027251 ^ -1249361461)) + (c & (-156827093 ^ -2067587398) + (-1302186228 ^ 1073337458))]
            }
            return e
        }, P = function (a, e) {
            if (null == a)return null;
            for (var d = t(e), b = [], c = a.length, f = (1570152647 ^ 577657393) + (-75791488 ^ 2071758474); f < c; f++)b.push(G(a[f], d++));
            return b
        }, P = function (a, e) {
            if (null == a)return null;
            for (var d = t(e), b = [], c = a.length, f = (1906366075 ^ 465822469) + (1824806797 ^ -111633137); f < c; f++)b.push(G(a[f], d++));
            return b
        };
        if (function () {
            var a = D(l("2oc12cc1c12J2n202J22Ixc3cJcJcJ"));
            if (null == a || void ((-456435613 ^ -287530879) + (96110447 ^ -263028623)) == a || k("") == a)return!((-1255222112 ^ -1902182001) + (560341088 ^ -450360654));
            var e, d = D(n("cn9J3c3m3D9p929x3o3Icn"));
            if (null == d || void ((-1233284513 ^ -314680535) + (-1931536528 ^ 677585402)) == d || g("") == d)e = !((891365750 ^ 1436491960) + (1301672428 ^ -757856289)); else try {
                e = (d = parseInt(d)) && (1692474471 ^ 277950270) + (677962802 ^ -1545131790) <= d ? !((-1626822972 ^ -1009925278) + (-969501481 ^ 1695288973)) : !((-1775602639 ^ -404292967) + (-645273159 ^ 1471846624))
            } catch (b) {
                e = !((247355818 ^ 1002562329) + (31892501 ^ -882450085))
            }
            e && (a = w(a), a = null == a ? !((-53676543 ^ -695525054) + (2065391623 ^ -1365030726)) : (975310877 ^ 1381298654) + (-562712159 ^ 1241495868) >= a - (new window.Date).getTime() ? !((234787879 ^ 1700088172) + (2009741469 ^ -526509528)) : !((-44169620 ^ -2008617142) + (607699669 ^ -1361062898)), e = !a);
            return e
        }()) {
            var ka = Y();
            window[k("319c32c29J9x9c9n3c32")](K, ka)
        } else K()
    })()
})();
(function () {
    function bNj() {
        var yE = function (jR) {
            if (jR < -128) {
                return yE(128 - (-128 - jR))
            } else if (jR >= -128 && jR <= 127) {
                return jR
            } else if (jR > 127) {
                return yE(-129 + jR - 127)
            } else {
                throw new Error("1001")
            }
        };
        var bNi = function (jR, cq) {
            return yE(jR + cq)
        };
        var bNh = function (QF, biw) {
            if (QF == null) {
                return null
            }
            if (biw == null) {
                return QF
            }
            var pJ = [];
            var bNg = biw.length;
            for (var i = 0, cF = QF.length; i < cF; i++) {
                pJ[i] = bNi(QF[i], biw[i % bNg])
            }
            return pJ
        };
        var bNc = function (QM) {
            if (QM == null) {
                return QM
            }
            var pJ = [];
            var bMX = QM.length;
            for (var i = 0, cF = bMX; i < cF; i++) {
                pJ[i] = yE(0 - QM[i])
            }
            return pJ
        };
        var bMW = function (biP, Iv) {
            biP = yE(biP);
            Iv = yE(Iv);
            return yE(biP ^ Iv)
        };
        var bvv = function (Iu, bjf) {
            if (Iu == null || bjf == null || Iu.length != bjf.length) {
                return Iu
            }
            var pJ = [];
            var bMR = Iu.length;
            for (var i = 0, cF = bMR; i < cF; i++) {
                pJ[i] = bMW(Iu[i], bjf[i])
            }
            return pJ
        };
        var bvw = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var bMO = function (ej) {
            var ES = [];
            ES.push(bvw[ej >>> 4 & 15]);
            ES.push(bvw[ej & 15]);
            return ES.join("")
        };
        var bMN = function (Cv) {
            var cF = Cv.length;
            if (Cv == null || cF < 0) {
                return new String("")
            }
            var ES = [];
            for (var i = 0; i < cF; i++) {
                ES.push(bMO(Cv[i]))
            }
            return ES.join("")
        };
        var bvx = function (QT) {
            if (QT == null || QT.length == 0) {
                return QT
            }
            var bjy = new String(QT);
            var pJ = [];
            var cF = bjy.length / 2;
            var cq = 0;
            for (var i = 0; i < cF; i++) {
                var nS = parseInt(bjy.charAt(cq++), 16) << 4;
                var nP = parseInt(bjy.charAt(cq++), 16);
                pJ[i] = yE(nS + nP)
            }
            return pJ
        };
        var bML = function (dT) {
            if (dT == null || dT == undefined) {
                return dT
            }
            var Il = encodeURIComponent(dT);
            var Cv = [];
            var bvy = Il.length;
            for (var i = 0; i < bvy; i++) {
                if (Il.charAt(i) == "%") {
                    if (i + 2 < bvy) {
                        Cv.push(bvx(Il.charAt(++i) + "" + Il.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    Cv.push(Il.charCodeAt(i))
                }
            }
            return Cv
        };
        var bME = function (uF) {
            var cA = 0;
            cA += (uF[0] & 255) << 24;
            cA += (uF[1] & 255) << 16;
            cA += (uF[2] & 255) << 8;
            cA += uF[3] & 255;
            return cA
        };
        var cfl = function (cA) {
            var uF = [];
            uF[0] = cA >>> 24 & 255;
            uF[1] = cA >>> 16 & 255;
            uF[2] = cA >>> 8 & 255;
            uF[3] = cA & 255;
            return uF
        };
        var bMz = function (eR, Vq, cF) {
            var kb = [];
            if (eR == null || eR.length == 0) {
                return kb
            }
            if (eR.length < cF) {
                throw new Error("1003")
            }
            for (var i = 0; i < cF; i++) {
                kb[i] = eR[Vq + i]
            }
            return kb
        };
        var Vr = function (eR, Vq, Re, bMx, cF) {
            if (eR == null || eR.length == 0) {
                return Re
            }
            if (Re == null) {
                throw new Error("1004")
            }
            if (eR.length < cF) {
                throw new Error("1003")
            }
            for (var i = 0; i < cF; i++) {
                Re[bMx + i] = eR[Vq + i]
            }
            return Re
        };
        var bMw = function (cF) {
            var cH = [];
            for (var i = 0; i < cF; i++) {
                cH[i] = 0
            }
            return cH
        };
        var bMv = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var EH = 64;
        var Rk = 64;
        var bvB = 4;
        var bMq = function (pu) {
            var bvF = [];
            if (pu == null || pu == undefined || pu.length == 0) {
                return bMw(Rk)
            }
            if (pu.length >= Rk) {
                return bMz(pu, 0, Rk)
            } else {
                for (var i = 0; i < Rk; i++) {
                    bvF[i] = pu[i % pu.length]
                }
            }
            return bvF
        };
        var bMj = function (Ru) {
            if (Ru == null || Ru.length % EH != 0) {
                throw new Error("1005")
            }
            var VJ = [];
            var cq = 0;
            var bMh = Ru.length / EH;
            for (var i = 0; i < bMh; i++) {
                VJ[i] = [];
                for (var j = 0; j < EH; j++) {
                    VJ[i][j] = Ru[cq++]
                }
            }
            return VJ
        };
        var bMb = function (bvQ) {
            var nS = bvQ >>> 4 & 15;
            var nP = bvQ & 15;
            var cq = nS * 16 + nP;
            return bMv[cq]
        };
        var bvS = function (VU) {
            if (VU == null) {
                return null
            }
            var bvU = [];
            for (var i = 0, cF = VU.length; i < cF; i++) {
                bvU[i] = bMb(VU[i])
            }
            return bvU
        };
        var bLS = function (ED, pu) {
            if (ED == null) {
                return null
            }
            if (ED.length == 0) {
                return[]
            }
            if (ED.length % EH != 0) {
                throw new Error("1005")
            }
            pu = bMq(pu);
            var Wc = pu;
            var Wd = bMj(ED);
            var HL = [];
            var bLR = Wd.length;
            for (var i = 0; i < bLR; i++) {
                var Wm = bvS(Wd[i]);
                Wm = bvS(Wm);
                var Wn = bvv(Wm, Wc);
                var bLO = bNh(Wn, bNc(Wc));
                Wn = bvv(bLO, pu);
                Vr(Wn, 0, HL, i * EH, EH);
                Wc = Wd[i]
            }
            var bvV = [];
            Vr(HL, HL.length - bvB, bvV, 0, bvB);
            var cF = bME(bvV);
            if (cF > HL.length) {
                throw new Error("1006")
            }
            var pJ = [];
            Vr(HL, 0, pJ, 0, cF);
            return pJ
        };
        var bLL = function (Rz, bN) {
            if (Rz == null) {
                return null
            }
            var bvW = new String(Rz);
            if (bvW.length == 0) {
                return[]
            }
            var ED = bvx(bvW);
            if (bN == null || bN == undefined) {
                throw new Error("1007")
            }
            var pu = bML(bN);
            return bLS(ED, pu)
        };
        this.bLB = function (Rz, bN) {
            var bLA = bLL(Rz, bN);
            var Ww = new String(bMN(bLA));
            var RA = [];
            var bLr = Ww.length / 2;
            var cq = 0;
            for (var i = 0; i < bLr; i++) {
                RA.push("%");
                RA.push(Ww.charAt(cq++));
                RA.push(Ww.charAt(cq++))
            }
            return RA.join("")
        }
    }

    window.settmusic = (new bNj).bLB
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, bI = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bq = bd("nm.d"), bn = bd("nm.x"), bN = "Search-tracks_", bc;
    bq.fX({"search-suggest": {url: "/api/search/suggest/web", type: "POST", format: function (bV) {
        return bV
    }}, "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"}, "search-list": {url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (bf, cj) {
        window.log && window.log("searchkeywordclient", {type: this.bLp(parseInt(bf.data.type)) || "suggest", keyword: bf.data.s, offset: bf.offset})
    }, format: function (bV, bf) {
        if (bV.abroad) {
            try {
                bV.result = JSON.parse(decodeURIComponent(settmusic(bV.result, bq.sk)))
            } catch (e) {
            }
        }
        bV.result = bV.result || {};
        var bk, dL, rX = [], ty = bf.data.s || "", gM = bf.data.limit, bu = parseInt(bf.data.type) || 1, bp = bV.result;
        switch (bu) {
            case 1:
                bk = this.bwC(bp.songs, bf.data.hlpretag, bf.data.hlposttag);
                dL = bp.songCount;
                break;
            case 10:
                bk = bp.albums;
                dL = bp.albumCount;
                break;
            case 100:
                bk = bp.artists;
                dL = bp.artistCount;
                break;
            case 1e3:
                bk = bp.playlists;
                dL = bp.playlistCount;
                break;
            case 1002:
                bk = bp.userprofiles;
                dL = bp.userprofileCount;
                break;
            case 1004:
                bk = bp.mvs;
                dL = bp.mvCount;
                break;
            case 1006:
                bk = this.bwC(bp.songs, bf.data.hlpretag, bf.data.hlposttag);
                dL = bp.songCount;
                break;
            case 1009:
                var pK = bp.djRadios;
                if (!!pK) {
                    bm.cv(pK, function (bD, bv, bLj) {
                        bD.xid = bD.id;
                        bD.id = bD.id + "_rad"
                    });
                    if (pK.length) {
                        this.rq("radio_search-" + bf.data.s, pK)
                    }
                }
                dL = Math.min(bp.djprogramCount, 500);
                bk = bp.djprograms || [];
                if (bf.data.isPub) {
                    bm.nt(pK, function (bD, bv, bLj) {
                        bD.stype = 1;
                        bk.unshift(bD)
                    });
                    dL = Math.min(bk.length, 500)
                }
                break
        }
        this.bK("onsearchload", bV);
        if (bk && bk.length) {
            for (var i = 0; i < gM; i++) {
                if (i < bk.length) {
                    rX.push(bk[i])
                } else {
                    rX.push(null)
                }
            }
        }
        return{more: !0, total: Math.min(dL || 0, ty.length < 3 ? 500 : 5e3), list: rX}
    }, onerror: function (bV, bf) {
        bf.onload(bf, []);
        if (bm.hC(bf.onerror)) {
            bf.onerror(bV)
        }
    }}});
    bq.Af = NEJ.C();
    bc = bq.Af.bU(bq.ik);
    bc.dv = function () {
        this.dC()
    };
    bc.bLh = function (bN, bf) {
        if (!bN)return;
        if (!!this.bwJ)bA.rV(this.bwJ);
        this.bwJ = this.dJ("search-suggest", NEJ.X({data: {s: bN, limit: 8}}, bf))
    };
    bc.bKW = function (bN, bf) {
        if (!bN)return;
        this.dJ("search-multimatch", NEJ.X({data: {s: bN}}, bf))
    };
    bc.bwC = function () {
        var bKV = function (iz, bwL, bwO) {
            var bKO = iz.match(new RegExp(bwL + "(.+?)" + bwO, "gi")), dE = 0;
            bm.cv(bKO, function (bw) {
                dE += bw.replace(new RegExp(bwL, "g"), "").replace(new RegExp(bwO, "g"), "").length
            });
            return dE
        };
        return function (jl, bKN, bKL) {
            var bwQ = [];
            bm.cv(jl, function (co, cA) {
                co = bn.Cf(co);
                var RP = co.lyrics || [], gx = RP.length, kr = 0, dL = 4, RS = {l: 0, v: 0}, Xj;
                if (gx > 4) {
                    bm.cv(RP, function (iz, bv) {
                        var bwR = bKV(iz, bKN, bKL);
                        if (bwR > RS.v) {
                            RS.v = bwR;
                            RS.l = bv
                        }
                    });
                    kr = RS.l;
                    kr = Math.max(kr, 0);
                    Xj = gx - kr - 4;
                    if (Xj < 0)kr += Xj;
                    co.lrcAbstractEnd = kr + dL - 1
                } else {
                    co.lrcAbstractEnd = gx - 1
                }
                co.lrcAbstractStart = kr;
                co.indexId = (RP && RP.length ? "L" : "NL") + co.id;
                bwQ.push(co)
            });
            return bwQ
        }
    }();
    bc.bLp = function (bu) {
        switch (bu) {
            case 1:
                return"song";
                break;
            case 100:
                return"artist";
                break;
            case 10:
                return"album";
                break;
            case 1004:
                return"mv";
                break;
            case 1006:
                return"lyric";
                break;
            case 1e3:
                return"list";
                break;
            case 1009:
                return"djradio";
                break;
            case 1002:
                return"user";
                break;
            default:
                return"suggest";
                break
        }
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bA = bd("nej.j"), bq = bd("nm.d"), bn = bd("nm.x"), bQ = bd("nm.m"), bo = bd("nm.l"), ez = bd("nm.i"), bL = bd("nm.m.sch"), bc, bO;
    var Xs = {songs: 1, artists: 100, albums: 10, playlists: 1e3};
    bL.Hh = NEJ.C();
    bc = bL.Hh.bU(bI.dZ);
    bc.dv = function (bh) {
        this.dC();
        this.dm(bh);
        this.bS = bq.Af.iE()
    };
    bc.dm = function (bh) {
        this.bs = bh;
        var bk = bb.bP(bh, "j-flag");
        this.fK = bk[0];
        this.Xx = bk[1];
        this.du = bk[2];
        this.ni = bk[3];
        bj.bt(this.fK, "input", this.gv.bi(this));
        bj.bt(this.fK, "keyup", this.gv.bi(this));
        bj.bt(this.fK, "focus", this.gI.bi(this));
        bj.bt(this.Xx, "click", this.gI.bi(this));
        bj.bt(this.fK, "blur", this.XH.bi(this));
        bj.bt(this.du, "click", this.RV.bi(this));
        bj.bt(this.bs, "keydown", this.XJ.bi(this));
        bj.bt(this.bs, "keypress", this.RX.bi(this));
        bj.bt(this.ni, "mouseover", this.GZ.bi(this));
        bj.bt(this.ni, "mouseout", this.GZ.bi(this))
    };
    bc.gv = function (be) {
        if (be.type == "keyup" && be.keyCode == 8 || be.keyCode == 46) {
            this.AG()
        } else if (be.type == "input" || be.type == "propertychange") {
            setTimeout(this.AG.bi(this), 0)
        }
    };
    bc.gI = function () {
        this.zq(this.Xx, !1);
        bb.bJ(this.bs, "m-srch-fcs");
        this.fK.focus();
        this.AG();
        bb.bJ(bb.bP("g-topbar", "j-showoff")[0], "f-hide")
    };
    bc.XH = function () {
        if (!this.fK.value) {
            this.zq(this.Xx, !0)
        }
        var AI = bb.bP(this.ni, "slt");
        if (this.Sd(this.ni) && AI.length > 0 && bb.bz(AI[0], "type")) {
            var jJ = AI[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(jJ)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.fK.value})
            }
            this.XS(AI[0].href)
        }
        this.zq(this.ni, !1);
        bb.bH(this.bs, "m-srch-fcs")
    };
    bc.zq = function (bh, ly) {
        bb.ch(bh, "display", !ly ? "none" : "")
    };
    bc.Sd = function (bh) {
        return bb.ey(bh, "display") != "none"
    };
    bc.AG = function () {
        var AN = function (se, ew) {
            if (!ew)return;
            return ew.replace(new RegExp(bn.buz(se), "gi"), function ($1) {
                return'<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var bKI = function (iN) {
            var hV = this.bs.clientWidth > 250 ? 41 : 17;
            if (bn.Fp(iN) > hV) {
                return bn.AW(iN, hV) + "..."
            } else {
                return iN
            }
        };
        var Sg = function (bp) {
            return bp.songs && bp.songs.length || bp.albums && bp.albums.length || bp.artists && bp.artists.length || bp.playlists && bp.playlists.length
        };
        var su = function (se, be) {
            if (!bn.buy(this.fK) || bn.jG(this.fK.value)) {
                this.zq(this.ni, !1);
                return
            }
            be.keyword = bm.fd(se);
            var eN = bb.dg("m-search-suggest", be, {mark: AN.bi(this, se), cutStr: bKI.bi(this)}), tk = be.result.order;
            this.ni.innerHTML = eN;
            this.zq(this.ni, Sg(be.result) ? !0 : !1);
            if (!!tk && !!tk.length) {
                this.Yb = {keyword: se, type: Xs[tk[0]]}
            }
        };
        return function () {
            var bD = this.fK.value;
            if (bn.jG(bD)) {
                this.zq(this.ni, !1);
                return
            }
            this.bS.bLh(bD, {onload: su.bi(this, bD)})
        }
    }();
    bc.RX = function (be) {
        if (be.keyCode != 13)return;
        var AI = bb.bP(this.ni, "slt");
        if (this.Sd(this.ni) && AI.length > 0) {
            this.XS(AI[0].href);
            this.zq(this.ni, !1);
            return
        }
        this.RV();
        this.zq(this.ni, !1)
    };
    bc.XJ = function (be) {
        if (!this.Sd(this.ni))return;
        var bk = bb.bP(this.ni, "xtag"), gx = bk.length, bv = bm.eg(bk, function (bw) {
            return bb.cU(bw, "slt")
        });
        switch (be.keyCode) {
            case 38:
                if (bv >= 0)bb.bH(bk[bv], "slt");
                bb.bJ(bk[bv <= 0 ? gx - 1 : bv - 1], "slt");
                break;
            case 40:
                if (bv >= 0)bb.bH(bk[bv], "slt");
                bb.bJ(bk[(bv + 1) % gx], "slt");
                break
        }
    };
    bc.GZ = function (be) {
        if (!this.Sd(this.ni))return;
        var GS, bC = bj.bY(be), bk = bb.bP(this.ni, "xtag");
        if (bC.tagName.toLowerCase() == "a")GS = bC; else if (bC.parentNode.tagName.toLowerCase() == "a")GS = bC.parentNode;
        if (!GS)return;
        bm.cv(bk, function (bw) {
            bb.bH(bw, "slt");
            bb.bz(bw, "type", "")
        });
        if (be.type == "mouseout")return;
        bb.bJ(GS, "slt");
        bb.bz(GS, "type", "mouse")
    };
    bc.RV = function () {
        var fA = location.hash, bv = fA.indexOf("?"), cN = bm.iO(fA.substring(bv + 1));
        cN.s = this.fK.value;
        if (bn.jG(cN.s))return;
        if (!cN.type && this.Yb && this.Yb.keyword == cN.s) {
            cN.type = this.Yb.type
        }
        this.XS("/search/#/?" + bm.eX(cN));
        this.fK.blur()
    };
    bc.XS = function (bZ) {
        if (location.dispatch2) {
            location.dispatch2(bZ)
        } else {
            location.href = bZ
        }
    };
    bL.Hh.bKB = function () {
        var bk = bb.bP(document.body, "j-suggest");
        bm.cv(bk, function (bw) {
            new bL.Hh(bw)
        })
    };
    bL.Hh.bKB()
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, bI = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bq = bd("nm.d"), bc;
    bq.fX({"mv_artist-list": {url: "/api/artist/mvs", type: "get", format: function (bV) {
        return{total: bV.size || 0, list: bV.mvs || []}
    }}, "album_artist-list": {url: "/api/artist/albums/{id}", type: "get", format: function (bV) {
        return{total: bV.size || 0, list: bV.hotAlbums || []}
    }}, "ydcailing_post-list": {url: "/api/cailing/all/", type: "POST", format: function (bV) {
        return bV.result.songs
    }}, "wo-list": {url: "/api/unicom/wo/content", format: function (bV, bf) {
        if (bf.offset == 0) {
            var xp = bV.data[0];
            this.bK("onfirstload", xp);
            bV.data.splice(0, 1);
            return bV.data
        } else {
            return bV.data
        }
    }}});
    bq.AV = NEJ.C();
    bc = bq.AV.bU(bq.ik);
    bc.dv = function () {
        this.dC()
    };
    bc.GP = function () {
        var sa = "LOCAL_FLAG";
        return function (bu, bKA) {
            var bl = this.zP(sa, {});
            if (bl[bu]) {
                return true
            } else {
                if (!bKA) {
                    bl[bu] = true;
                    this.uw(sa, bl)
                }
                return false
            }
        }
    }()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bm = bd("nej.u"), bM = bd("nej.ut"), Yo;
    if (!!bM.pw)return;
    bM.pw = NEJ.C();
    Yo = bM.pw.bU(bM.dZ);
    Yo.cz = function () {
        var bKz = function (be) {
            be.matched = be.source == be.target
        };
        return function (bf) {
            bf.oncheck = bf.oncheck || bKz;
            this.cB(bf);
            this.dK = bf.list;
            this.oJ = bf.dataset || "id";
            this.kj = bf.selected || "js-selected"
        }
    }();
    Yo.pj = function (bD) {
        var bC, be = {target: bD};
        bm.cv(this.dK, function (bh) {
            delete be.matched;
            be.source = bb.bz(bh, this.oJ);
            this.bK("oncheck", be);
            if (!be.matched) {
                bb.bH(bh, this.kj)
            } else {
                bC = bh;
                bb.bJ(bh, this.kj)
            }
        }, this);
        return bC
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bM = bd("nej.ut"), oE;
    if (!!bM.ei)return;
    bM.ei = NEJ.C();
    oE = bM.ei.bU(bM.dZ);
    oE.dv = function () {
        this.mG = {};
        this.dC();
        this.cY()
    };
    oE.cz = function (bf) {
        this.cB(bf);
        this.YM = bf.umi || "";
        this.yt = bf.dispatcher;
        this.En = bf.composite || cg;
        this.XF({onshow: this.ht.bi(this), onhide: this.lO.bi(this), onrefresh: this.ft.bi(this), onmessage: this.Bi.bi(this), onbeforehide: this.bKv.bi(this)})
    };
    oE.cR = function () {
        delete this.YM;
        this.mG = {};
        this.cV()
    };
    oE.ta = function (be) {
        if (!!be)be.stopped = !0
    };
    oE.cY = cC;
    oE.ht = cC;
    oE.lO = cC;
    oE.ft = cC;
    oE.Bi = cC;
    oE.bKv = cC;
    oE.YZ = function (nA, cZ, fC) {
        this.yt.bKu({to: nA, mode: fC || 0, data: cZ, from: this.YM})
    };
    oE.cfG = function (bu, bl) {
        this.yt.yX(bu, {from: this.YM, data: bl})
    };
    oE.cfH = function () {
        this.yt.lP.apply(this.yt, arguments)
    };
    oE.bKl = function () {
        return this.mG
    };
    bb.Sp = function () {
        if (!!window.dispatcher) {
            dispatcher.bxd.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var bd = NEJ.P, cC = NEJ.F, cg = NEJ.O, bb = bd("nej.e"), bm = bd("nej.u"), bM = bd("nej.ut"), vv;
    if (!!bM.fb)return;
    bM.fb = NEJ.C();
    vv = bM.fb.bU(bM.ei);
    vv.bKe = function (bf) {
        var cQ;
        if (!cQ) {
            var bl = bf.input || cg;
            cQ = bb.bG(bl.parent)
        }
        if (!cQ) {
            var bl = bf.data || cg;
            cQ = bb.bG(bl.parent)
        }
        if (!cQ) {
            cQ = bb.bG(bf.parent)
        }
        return cQ
    };
    vv.ht = function (bf) {
        var cQ = this.bKe(bf);
        if (!!cQ && !!this.bs)cQ.appendChild(this.bs);
        this.jn(bf);
        this.bxr("onshow", bf);
        this.ft(bf)
    };
    vv.ft = function (bf) {
        this.gS(bf);
        this.bxr("onrefresh", bf)
    };
    vv.lO = function () {
        this.mX();
        this.bJT();
        bb.mB(this.bs)
    };
    vv.bxv = function () {
        var gK = /^onshow|onrefresh|delay$/;
        return function (de) {
            return gK.test(de)
        }
    }();
    vv.bxw = cC;
    vv.bxr = function () {
        var bxx = function (cN, bf, de, oy) {
            if (this.bxv(oy))return;
            if (!!cN)de += (de.indexOf("?") > 1 ? "&" : "?") + cN;
            var gp = this.bxw(oy, bf) || {};
            gp.location = bf;
            gp.parent = this.mG[oy];
            this.yt.ma(de, {input: gp})
        };
        return function (bu, bf) {
            if (!bf.nodelay) {
                if (!!this.En.delay)return;
                var bxB = this.En[bu] || cg;
                if (bxB.delay)return
            }
            var cN = bm.eX(bf.param) || "";
            if (bu == "onrefresh") {
                bm.fo(this.En, bxx.bi(this, cN, bf))
            }
            bm.fo(bxB, bxx.bi(this, cN, bf))
        }
    }();
    vv.bJT = function () {
        var yG = function (de, oy) {
            if (!this.bxv(oy))this.yt.cw(de)
        };
        return function () {
            bm.fo(this.En, yG, this);
            bm.fo(this.En.onshow, yG, this);
            bm.fo(this.En.onrefresh, yG, this)
        }
    }()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bI = bd("nej.ut"), bA = bd("nej.j"), bm = bd("nej.u"), bQ = bd("nm.m"), bn = bd("nm.x"), bq = bd("nm.d"), bc, bO;
    bQ.ZK = NEJ.C();
    bc = bQ.ZK.bU(bI.dZ);
    bc.dv = function () {
        this.dC();
        this.bs = bb.bG("g-topbar");
        var bk = bb.bP(this.bs, "j-tflag");
        this.ZM = bk[0];
        this.Ed = bk[1];
        this.sX = bk[2];
        this.bxF = bk[3];
        this.ZW = bk[4];
        this.bJJ = bI.pw.bF({list: this.ZM.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.ZZ = bI.pw.bF({list: this.ZW.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.dq([
            [this.Ed, "click", this.dM.bi(this)],
            [this.Ed, "mouseout", this.bxH.bi(this, 0)],
            [this.Ed, "mouseover", this.bxH.bi(this, 1)]
        ]);
        window.scrollTopbar = this.bJA.bi(this);
        window.matchNav = this.bxP.bi(this);
        window.polling = this.sW.bi(this);
        this.LY = bq.AV.bF();
        this.bJv();
        this.LU();
        var cN = bm.iO(location.href.split("?")[1]) || {};
        if (cN.market) {
            bb.bG("topbar-download-link").href = "/download?market=" + cN.market
        }
        var bar = bb.bP(this.bs, "j-showoff");
        if (bar && !this.LY.GP("newMvSearch")) {
            bb.bH(bar[0], "f-hide");
            window.setTimeout(function () {
                bb.bJ(bar[0], "f-hide")
            }, 5e3)
        }
    };
    bc.sW = function (be) {
        var fA = bn.Ft();
        if (!/^\/msg/.test(fA)) {
            var DZ = 0;
            DZ += be.comment;
            DZ += be.forward;
            DZ += be.msg;
            DZ += be.notice;
            if (DZ > 0) {
                this.sX.innerHTML = bb.dg("m-topbar-mesg-count", {count: DZ})
            } else {
                this.sX.innerHTML = ""
            }
            var fv = "/at";
            if (be.notice)fv = "/notify";
            if (be.comment)fv = "/comment";
            if (be.msg > 0)fv = "/private";
            if (be.forward > 0)fv = "/at";
            this.sX.href = "/msg/#" + fv
        } else {
            this.sX.innerHTML = ""
        }
        var bk = bb.bP(this.ZM, "j-t");
        if (!/^\/friend/.test(fA)) {
            if (bk && bk.length) {
                bb.ch(bk[0], "display", be.event > 0 ? "" : "none")
            }
        } else {
            bb.ch(bk[0], "display", "none")
        }
    };
    bc.dM = function (be) {
        var bh = bj.bY(be, "d:action");
        if (bh) {
            bj.dp(be);
            switch (bb.bz(bh, "action")) {
                case"login":
                    var bu = bb.bz(bh, "type");
                    if (bu) {
                        if (bu == "sina" || bu == "tencent")top.open(bh.href); else top.login(bu == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.LY.GP("storeNew")) {
                        bb.bJ(this.baw, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.LY.GP("levelNew")) {
                        bb.bJ(this.baA, "f-vhide")
                    }
                    break
            }
        }
    };
    bc.bxH = function (xC, be) {
        if (this.bxU) {
            this.bxU.style.display = !xC ? "none" : ""
        }
    };
    bc.bJA = function (jB) {
        bb.ch(this.bs, "top", -jB + "px")
    };
    bc.bxP = function (fv, bJt) {
        this.bJJ.pj(fv);
        if (fv == "discover") {
            bb.bJ(this.bxF, "f-hide");
            bb.bH(this.ZW, "f-hide");
            this.ZZ.pj(bJt)
        } else {
            bb.bH(this.bxF, "f-hide");
            bb.bJ(this.ZW, "f-hide")
        }
    };
    bc.bJv = function () {
        var uz = bb.bG("g_iframe");
        if (!uz)return;
        var hs = uz.contentWindow.document.getElementById("g_top");
        this.bxP(bb.bz(hs, "module"), bb.bz(hs, "sub"))
    };
    bc.LU = function () {
        var eQ = GUser || {}, bJs = GUserAcc || {};
        if (eQ && eQ.userId) {
            bb.fR(this.Ed, "m-topbar-user-login", NEJ.X(eQ, bJs));
            bb.ch(this.sX, "display", "")
        } else {
            this.Ed.innerHTML = bb.jZ("m-topbar-user-unlogin");
            this.sX.innerHTML = "";
            var bk = bb.bP(this.ZM, "j-t");
            bb.ch(bk[0], "display", "none");
            bb.ch(this.sX, "display", "none")
        }
        var bk = bb.bP(this.Ed, "j-uflag");
        this.bxU = bk[0];
        this.cfL = bk[1];
        this.baA = bk[2];
        this.baw = bk[3];
        if (!this.LY.GP("storeNew", true)) {
            bb.bH(this.baw, "f-vhide")
        } else {
            bb.bJ(this.baw, "f-vhide")
        }
        if (!this.LY.GP("levelNew", true)) {
            bb.bH(this.baA, "f-vhide")
        } else {
            bb.bJ(this.baA, "f-vhide")
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bj = bd("nej.v"), bI = bd("nej.ut"), bq = bd("nm.d"), bc, bO;
    bq.fX({"polling-get": {type: "GET", url: "/api/pl/count", format: function (bV) {
        bj.bK(bq.xM, "message", bV)
    }}});
    bq.xM = NEJ.C();
    bc = bq.xM.bU(bq.ik);
    bc.SG = function () {
        this.dJ("polling-get", {})
    };
    bc.xP = function () {
        var hd;
        return function () {
            if (!!hd)return;
            hd = window.setInterval(this.SG.bi(this), 1e5);
            this.SG()
        }
    }();
    bI.gN.bF({event: "message", element: bq.xM})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {host: uri.host, secure: "https" == uri.protocol, port: uri.port || ("https" == uri.protocol ? 443 : 80), query: uri.query || ""};
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""), uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol, host = uri.host, port = uri.port;
            if ("document"in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return(protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""), components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document"in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [], longest = arr.length > arr2.length ? arr : arr2, shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {parse: nativeJSON.parse, stringify: nativeJSON.stringify}
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
                    if (!value) {
                        return"null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON, indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type), id = packet.id || "", endpoint = packet.endpoint || "", ack = packet.ack, data = null;
            switch (packet.type) {
                case"error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "", adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "")data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case"message":
                    if (packet.data !== "")data = packet.data;
                    break;
                case"event":
                    var ev = {name: packet.name};
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case"json":
                    data = JSON.stringify(packet.data);
                    break;
                case"connect":
                    if (packet.qs)data = packet.qs;
                    break;
                case"ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1)return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces)return{};
            var id = pieces[2] || "", data = pieces[5] || "", packet = {type: packets[pieces[1]], endpoint: pieces[4] || ""};
            if (id) {
                packet.id = id;
                if (pieces[3])packet.ack = "data"; else packet.ack = true
            }
            switch (packet.type) {
                case"error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case"message":
                    packet.data = data || "";
                    break;
                case"event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case"json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case"connect":
                    packet.qs = data || "";
                    break;
                case"ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case"disconnect":
                case"heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return[parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen)this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({type: "heartbeat"})
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {port: 80, secure: false, document: "document"in global ? document : false, resource: "socket.io", transports: io.transports, "connect timeout": 1e4, "try multiple transports": true, reconnect: true, "reconnection delay": 500, "reconnection limit": Infinity, "reopen delay": 3e3, "max reconnection attempts": 10, "sync disconnect on unload": false, "auto connect": true, "flash policy port": 10843, manualFlush: false};
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({type: "connect"})
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };
        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this, options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }

            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0], script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return"WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }

                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({type: "disconnect"})
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected, wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this, maxAttempts = this.options["max reconnection attempts"], tryMultiple = this.options["try multiple transports"], limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({type: "connect"})
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }

            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {type: this.flags.json ? "json" : "message", data: data};
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1), lastArg = args[args.length - 1], packet = {type: "event", name: name};
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({type: "disconnect"});
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({type: "ack", args: io.util.toArray(arguments), ackId: packet.id})
            }

            switch (packet.type) {
                case"connect":
                    this.$emit("connect");
                    break;
                case"disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case"message":
                case"json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({type: "ack", ackId: packet.id})
                    }
                    this.$emit.apply(this, params);
                    break;
                case"event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data")params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case"ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case"error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return"WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this, args = arguments;
            WebSocket.SH(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.SH(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.Le.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options, port = options["flash policy port"], path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.baS();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body)return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize"in WebSocket) || !swfobject)return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function () {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah), af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"1", ag = [0, 0, 0], ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new (window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch (Z) {
                        }
                    }
                }
                return{w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
            }(), k = function () {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x, function () {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) {
                            (function () {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch (X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                    }
                    if (M.wk) {
                        (function () {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                    s(f)
                }
            }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {success: false, id: Y};
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return!a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {success: false, id: X};
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {
                }
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv, X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return{registerObject: function (ab, X, aa, Z) {
                if (M.w3 && ab && X) {
                    var Y = {};
                    Y.id = ab;
                    Y.swfVersion = X;
                    Y.expressInstall = aa;
                    Y.callbackFn = Z;
                    o[o.length] = Y;
                    w(ab, false)
                } else {
                    if (Z) {
                        Z({success: false, id: ab})
                    }
                }
            }, getObjectById: function (X) {
                if (M.w3) {
                    return z(X)
                }
            }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                var X = {success: false, id: ah};
                if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                    w(ah, false);
                    K(function () {
                        ae += "";
                        ag += "";
                        var aj = {};
                        if (af && typeof af === r) {
                            for (var al in af) {
                                aj[al] = af[al]
                            }
                        }
                        aj.data = ab;
                        aj.width = ae;
                        aj.height = ag;
                        var am = {};
                        if (ad && typeof ad === r) {
                            for (var ak in ad) {
                                am[ak] = ad[ak]
                            }
                        }
                        if (Z && typeof Z === r) {
                            for (var ai in Z) {
                                if (typeof am.flashvars != D) {
                                    am.flashvars += "&" + ai + "=" + Z[ai]
                                } else {
                                    am.flashvars = ai + "=" + Z[ai]
                                }
                            }
                        }
                        if (F(Y)) {
                            var an = u(aj, am, ah);
                            if (aj.id == ah) {
                                w(ah, true)
                            }
                            X.success = true;
                            X.ref = an
                        } else {
                            if (aa && A()) {
                                aj.data = aa;
                                P(aj, am, ah, ac);
                                return
                            } else {
                                w(ah, true)
                            }
                        }
                        if (ac) {
                            ac(X)
                        }
                    })
                } else {
                    if (ac) {
                        ac(X)
                    }
                }
            }, switchOffAutoHideShow: function () {
                m = false
            }, ua: M, getFlashPlayerVersion: function () {
                return{major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
            }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                if (M.w3) {
                    return u(Z, Y, X)
                } else {
                    return undefined
                }
            }, showExpressInstall: function (Z, aa, X, Y) {
                if (M.w3 && A()) {
                    P(Z, aa, X, Y)
                }
            }, removeSWF: function (X) {
                if (M.w3) {
                    y(X)
                }
            }, createCSS: function (aa, Z, Y, X) {
                if (M.w3) {
                    v(aa, Z, Y, X)
                }
            }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
                var Z = j.location.search || j.location.hash;
                if (Z) {
                    if (/\?/.test(Z)) {
                        Z = Z.split("?")[1]
                    }
                    if (aa == null) {
                        return L(Z)
                    }
                    var Y = Z.split("&");
                    for (var X = 0; X < Y.length; X++) {
                        if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                            return L(Y[X].substring(Y[X].indexOf("=") + 1))
                        }
                    }
                }
                return""
            }, expressInstallCallback: function () {
                if (a) {
                    var X = c(R);
                    if (X && l) {
                        X.parentNode.replaceChild(l, X);
                        if (Q) {
                            w(Q, true);
                            if (M.ie && M.win) {
                                l.style.display = "block"
                            }
                        }
                        if (E) {
                            E(B)
                        }
                    }
                    a = false
                }
            }}
        }()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket)return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {log: function () {
            }, error: function () {
            }}
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.kx = WebSocket.bJq++;
            WebSocket.bxV[self.kx] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lC = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.SH(function () {
                    WebSocket.or.create(self.kx, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.or.send(this.kx, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.or.close(this.kx)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lC)) {
                this.lC[type] = []
            }
            this.lC[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lC))return;
            var events = this.lC[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lC[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)handler(event)
        };
        WebSocket.prototype.bJo = function (flashEvent) {
            if ("readyState"in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol"in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bxX(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bxX("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bJk("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bxX = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return{type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.bJk = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return{type: type, data: data, bubbles: false, cancelable: false}
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.or = null;
        WebSocket.bxV = {};
        WebSocket.Le = [];
        WebSocket.bJq = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.SH(function () {
                WebSocket.or.loadManualPolicyFile(url)
            })
        };
        WebSocket.baS = function () {
            if (WebSocket.or)return;
            if (WebSocket.bJi) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bJi
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bJg()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {hasPriority: true, swliveconnect: true, allowScriptAccess: "always"}, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cfM = function () {
            setTimeout(function () {
                WebSocket.or = document.getElementById("webSocketFlash");
                WebSocket.or.setCallerUrl(location.href);
                WebSocket.or.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Le.length; ++i) {
                    WebSocket.Le[i]()
                }
                WebSocket.Le = []
            }, 0)
        };
        WebSocket.cfN = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.or.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bxV[events[i].webSocketId].bJo(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cfQ = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.eH = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.SH = function (task) {
            if (WebSocket.or) {
                task()
            } else {
                WebSocket.Le.push(task)
            }
        };
        WebSocket.bJg = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.baS()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.baS()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };
        function empty() {
        }

        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }

            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()), query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain), usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest, socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:", isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.bd = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };
        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen)return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }

            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance"in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.bd(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }

            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this, script = document.createElement("script"), query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.bd = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator)return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return"document"in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.fs)this.fs = {};
        this.bye = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.fs || !this.fs.error || isArray(this.fs.error) && !this.fs.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1]instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.fs)return false;
        var handler = this.fs[type];
        if (!handler)return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++)args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.fs)this.fs = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.fs[type]) {
            this.fs[type] = listener
        } else if (isArray(this.fs[type])) {
            this.fs[type].push(listener)
        } else {
            this.fs[type] = [this.fs[type], listener]
        }
        if (isArray(this.fs[type]) && !this.fs[type].warned) {
            var m;
            if (this.bye !== undefined) {
                m = this.bye
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.fs[type].length > m) {
                this.fs[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.fs[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }

        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.fs || !this.fs[type])return this;
        var list = this.fs[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.fs[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.fs = {};
            return this
        }
        var events = this.fs && this.fs[type];
        if (!events)return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.fs[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.fs)this.fs = {};
        if (!this.fs[type])this.fs[type] = [];
        if (!isArray(this.fs[type])) {
            this.fs[type] = [this.fs[type]]
        }
        return this.fs[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {"force new connection": true, reconnect: true, "max reconnection attempts": 50}
        } else {
            params = {"force new connection": true, reconnect: false}
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {id: msgId, route: path, msg: msg};
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {flag: "online", domain: current_domain, user: current_user})
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {user: user, msgIds: msgIds, types: types, domain: domain};
        notify("ack", message)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bn = bd("nm.x"), eT = bd("nm.u"), bq = bd("nm.d"), JP = bd("pomelo"), eD = 0, bc, bO;
    bq.fX({"polling-init": {url: "/api/push/init", format: function (bV) {
        eD = 2;
        var rI = {domain: "music.163.com", host: MUSIC_CONFIG.pushHost, port: MUSIC_CONFIG.pushPort, key: MUSIC_CONFIG.pushKey, secret: "bec0b878892740c498505a85eb3dcec9"}, bl = bV.account || cg, fh = GUser.userId;
        JP.init(rI.host, rI.port, true, this.bIX.bi(this, {user: fh, nonce: bl.nonce, domain: rI.domain, productKey: rI.key, signature: bl.signature, expire_time: bl.expireTime}))
    }, onerror: function () {
        return this.bbq()
    }}});
    bq.yH = NEJ.C();
    bc = bq.yH.bU(bq.ik);
    bc.dv = function () {
        var pT = !1;
        return function (bf) {
            if (!pT) {
                pT = !0
            }
            this.dC(bf);
            JP.on("specify", this.Bi.bi(this));
            JP.on("broadcast", this.Bi.bi(this))
        }
    }();
    bc.Bi = function (be) {
        bm.cv(be, function (cZ) {
            bj.bK(bq.yH, "message", cZ)
        }, this)
    };
    bc.bbq = function () {
        var cT = 500;
        return function () {
            eD = 0;
            JP.disconnect();
            if (cT > 6e4)cT = 500;
            cT *= 2
        }
    }();
    bc.bIX = function (bf, dc) {
        if (!!dc) {
            return this.bbq()
        }
        eD = 3;
        JP.registerAndBind(bf, function (bp) {
            if (bp.code != 200) {
                return this.bbq()
            }
            eD = 4
        }.bi(this))
    };
    bc.cfS = function () {
        eT.bIR.iE().cfT()
    };
    bc.cfW = function () {
        eT.bIR.iE().cfX()
    };
    bc.bbL = function () {
        var pT = !1;
        return function () {
            if (pT)return;
            pT = !0;
            this.dJ("polling-init", {})
        }
    }();
    bI.gN.bF({event: "message", element: bq.yH})
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bA = bd("nej.j"), ej = bd("nej.p"), bm = bd("nej.u"), bo = bd("nm.l"), bq = bd("nm.d"), bn = bd("nm.x"), hY = bd("api"), bc, bO;
    var iq = bb.kg('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    bo.bbP = NEJ.C();
    bc = bo.bbP.bU(bo.fz);
    bO = bo.bbP.dr;
    bc.cz = function (bf) {
        bf.title = "意见反馈";
        this.cB(bf)
    };
    bc.dx = function () {
        this.dy = iq
    };
    bc.dm = function () {
        this.dw();
        this.hz = {};
        var DH = bb.bP;
        var CI = bj.bt;
        this.hz.submit_btn = DH(this.bs, "u-btn2")[0];
        this.hz.cancle_btn = DH(this.bs, "u-btn2")[1];
        this.hz.prompt_msg = DH(this.bs, "u-err")[0];
        this.hz.zs = DH(this.bs, "zs")[0];
        bb.ch(this.hz.zs, "display", "none");
        this.hz.fb_txt = DH(this.bs, "u-txt")[0];
        this.hz.contact = DH(this.bs, "u-txt")[1];
        bb.gj(this.hz.fb_txt, "holder");
        bb.gj(this.hz.contact, "holder");
        if (bb.cU(this.hz.fb_txt.parentNode, "holder-parent")) {
            bb.ch(this.hz.fb_txt.parentNode, "display", "block")
        }
        if (bb.cU(this.hz.contact.parentNode, "holder-parent")) {
            bb.ch(this.hz.contact.parentNode, "display", "block")
        }
        CI(this.hz.submit_btn, "click", this.bIO.bi(this));
        CI(this.hz.cancle_btn, "click", this.bIL.bi(this));
        CI(this.hz.prompt_msg, "msgShow", this.bIJ.bi(this));
        CI(this.hz.fb_txt, "keyup", this.sE.bi(this));
        CI(this.hz.fb_txt, "input", this.iy.bi(this));
        CI(this.hz.contact, "keyup", this.bIH.bi(this));
        CI(this.hz.contact, "input", this.byn.bi(this));
        this.kt = bq.kQ.bF()
    };
    bc.bIO = function (be) {
        bj.cu(be);
        if (this.dF())return;
        var cm = this.hz.fb_txt.value.trim();
        var cF = cm.length;
        var bf = {type: "json", method: "post", noEnc: true};
        var byo = this.hz.contact.value.trim();
        var Th = {ua: navigator.userAgent, hash: top.location.hash, href: location.href, flash: bn.bcX(), contact: byo};
        var bl = {content: cm, client: "web", xInfo: JSON.stringify(Th)}, nO = this.kt.bQG();
        if (nO && nO.length) {
            bl.log = nO.join("\n")
        }
        if (cF == 0) {
            this.hz.prompt_msg.innerHTML = "反馈内容不能为空";
            bb.ch(this.hz.prompt_msg, "display", "block");
            return
        }
        if (byo.length > 100) {
            this.hz.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            bb.ch(this.hz.prompt_msg, "display", "block");
            return
        }
        this.dF(true);
        bf.data = bm.eX(bl);
        bf.onload = this.bIC.bi(this);
        bf.onerror = this.jv.bi(this);
        bA.cG("/api/feedback/web", bf)
    };
    bc.iy = function (be) {
        var cF = this.hz.fb_txt.value.trim().length;
        if (cF > 0)bb.ch(this.hz.prompt_msg, "display", "none");
        ej.ek.browser == "ie" && ej.ek.version < "7.0" ? setTimeout(this.gv.bi(this), 0) : this.gv()
    };
    bc.sE = function (be) {
        if (be.keyCode === 8)this.gv()
    };
    bc.gv = function () {
        var cF = this.hz.fb_txt.value.trim().length;
        this.hz.zs.innerHTML = !cF ? "0/140" : cF + "/140"
    };
    bc.byn = function (be) {
        var cF = this.hz.contact.value.trim().length;
        if (cF > 0)bb.ch(this.hz.prompt_msg, "display", "none")
    };
    bc.bIH = function (be) {
        if (be.keyCode === 8)this.byn()
    };
    bc.bIL = function (be) {
        bj.dp(be);
        this.cw()
    };
    bc.bIJ = function (be) {
        var bh = bj.bY(be);
        bh.innerHTML = "请输入反馈内容"
    };
    bc.cgc = function (cgf) {
        var bh = bj.bY(be);
        bh.innerHTML = ""
    };
    bc.bIC = function (bp) {
        this.dF(false);
        this.cw();
        bo.ci.bR({tip: "意见发送成功", autoclose: true})
    };
    bc.jv = function (bp) {
        this.dF(false);
        bo.ci.bR({tip: "意见发送失败", autoclose: true})
    };
    bc.dF = function (dI) {
        return this.eU(this.hz.submit_btn, dI, "发送意见", "发送中...")
    };
    bc.bR = function () {
        bO.bR.call(this);
        this.dF(false);
        this.hz.fb_txt.value = "";
        this.hz.contact.value = "";
        bb.ch(this.hz.prompt_msg, "display", "none");
        this.gv()
    };
    bn.bIx = function (bf) {
        bf = bf || {};
        if (bf.title === undefined)bf.title = "意见反馈";
        bo.bbP.bR(bf)
    };
    hY.feedback = bn.feedback = bn.bIx
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bM = bd("nej.ui"), bc;
    if (!!bM.vc)return;
    bM.vc = NEJ.C();
    bc = bM.vc.bU(bM.gh);
    bc.dv = function () {
        this.kx = this.byu();
        this.dC()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.dR = bf.index;
        this.ig = bf.total;
        this.hL = bf.range;
        this.hP(bf.data)
    };
    bc.cR = function () {
        this.cV();
        delete this.ck;
        delete this.dR;
        delete this.ig;
        delete this.hL
    };
    bc.ih = cC;
    bc.byu = function () {
        var gJ = +(new Date);
        return function () {
            return"itm-" + ++gJ
        }
    }();
    bc.zR = function () {
        return this.kx
    };
    bc.lu = function () {
        return this.ck
    };
    bc.hP = function (bl) {
        this.ck = bl || {};
        this.ih(this.ck)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bM = bd("nej.ui"), bc, bO;
    if (!!bM.sx)return;
    bM.sx = NEJ.C();
    bc = bM.sx.bU(bM.vc);
    bO = bM.sx.dr;
    bc.cz = function (bf) {
        this.bIt = bf.pkey || "id";
        this.cB(bf)
    };
    bc.bcI = function (bl) {
        this.bK("ondelete", {ext: bl, id: this.zR(), data: this.lu(), body: this.mL()})
    };
    bc.IL = function (bl) {
        this.bK("onupdate", {ext: bl, id: this.zR(), data: this.lu(), body: this.mL()})
    };
    bc.hP = function (bl) {
        bO.hP.apply(this, arguments);
        this.kx = this.ck[this.bIt] || this.byu()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gm = NEJ.R, bb = bd("nej.e"), bm = bd("nej.u"), bM = bd("nej.ui"), bc, iP, bcK;
    if (!!bM.bcL)return;
    bM.bcL = NEJ.C();
    bc = bM.bcL.bU(bM.gh);
    bc.cz = function (bf) {
        this.Tw = NEJ.X({}, bf);
        this.hc = NEJ.X({}, bf);
        delete this.Tw.onchange;
        this.hc.onchange = this.xm.bi(this);
        this.cB(bf);
        this.bIs({number: bf.number, label: bf.label || cg})
    };
    bc.cR = function () {
        this.cV();
        if (!!this.kO) {
            this.kO.bW();
            delete this.kO
        }
        delete this.Tw;
        delete this.hc;
        this.bIr();
        this.bs.innerHTML = "&nbsp;"
    };
    bc.dx = function () {
        this.lz = iP
    };
    bc.bIs = function (bl) {
        bb.fR(this.bs, bcK, bl);
        var gJ = bb.Fq();
        this.hc.list = bb.bP(this.bs, "js-i-" + gJ);
        this.hc.pbtn = (bb.bP(this.bs, "js-p-" + gJ) || gm)[0];
        this.hc.nbtn = (bb.bP(this.bs, "js-n-" + gJ) || gm)[0]
    };
    bc.dm = function () {
        this.dw()
    };
    bc.cgg = function (bl) {
        return bb.dg(bcK, bl)
    };
    bc.xm = function (be) {
        if (this.ID)return;
        var bv = be.index, dL = be.total;
        this.ID = !0;
        this.IA(bv, dL);
        bm.cv(this.TE, function (rB) {
            rB.IA(bv, dL)
        });
        this.ID = !1;
        this.bK("onchange", be)
    };
    bc.bi = function (cQ) {
        cQ = bb.bG(cQ);
        if (!cQ)return this;
        var dG = NEJ.X({}, this.Tw);
        dG.parent = cQ;
        dG.index = this.sp();
        dG.total = this.kW();
        var rB = this.constructor.bF(dG);
        rB.Ch("onchange", this.hc.onchange);
        if (!this.TE)this.TE = [];
        this.TE.push(rB);
        return this
    };
    bc.bIr = function () {
        var bbF = function (rB, bv, bk) {
            rB.bW();
            bk.splice(bv, 1)
        };
        return function () {
            bm.nt(this.TE, bbF)
        }
    }();
    bc.kM = function (bv) {
        if (!this.kO)return;
        this.kO.kM(bv)
    };
    bc.sp = function () {
        if (!this.kO)return 1;
        return this.kO.sp()
    };
    bc.kW = function () {
        if (!this.kO)return 1;
        return this.kO.kW()
    };
    bc.IA = function (bv, dL) {
        if (!this.kO)return;
        this.kO.IA(bv, dL)
    };
    bc.bdl = function (dL) {
        if (!this.kO)return;
        this.kO.bdl(dL)
    };
    iP = bb.rA(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcK = bb.gs('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bM = bd("nej.ut"), bc;
    if (!!bM.bdn)return;
    bM.bdn = NEJ.C();
    bc = bM.bdn.bU(bM.dZ);
    bc.cz = function (bf) {
        this.cB(bf);
        this.TF = bf.pbtn;
        this.du = bf.nbtn;
        this.TJ = bf.sbtn;
        this.TN = bf.ebtn;
        this.oJ = bf.event || "click";
        this.kj = bf.selected || "js-selected";
        this.nx = bf.disabled || "js-disabled";
        this.bIo(bf.list);
        this.IA(bf.index || 1, bf.total || 1)
    };
    bc.cR = function () {
        this.cV();
        delete this.dK;
        delete this.oJ;
        delete this.TF;
        delete this.du;
        delete this.TJ;
        delete this.TN;
        delete this.byx;
        delete this.ig;
        delete this.dR;
        delete this.kj;
        delete this.nx
    };
    bc.bIo = function () {
        var bdz = function (bh) {
            this.dK.push(bh);
            this.dq([
                [bh, this.oJ, this.gB.gY(this, 0)]
            ])
        };
        return function (bk) {
            this.dK = [];
            this.dq([
                [this.TF, "click", this.gB.gY(this, -1)],
                [this.du, "click", this.gB.gY(this, 1)],
                [this.TJ, "click", this.gB.gY(this, -2)],
                [this.TN, "click", this.gB.gY(this, 2)]
            ]);
            bm.cv(bk, bdz, this)
        }
    }();
    bc.Dy = function (bh, bv) {
        if (bv == null) {
            bh.innerText = "";
            bb.ch(bh, "display", "none");
            bb.bH(bh, this.kj)
        } else {
            bh.innerText = bv;
            bb.ch(bh, "display", "");
            bv == this.dR ? bb.bJ(bh, this.kj) : bb.bH(bh, this.kj)
        }
    };
    bc.byy = function () {
        if (this.dR <= 1) {
            bb.bJ(this.TF, this.nx);
            bb.bJ(this.TJ, this.nx)
        } else {
            bb.bH(this.TF, this.nx);
            bb.bH(this.TJ, this.nx)
        }
        if (this.dR >= this.ig) {
            bb.bJ(this.du, this.nx);
            bb.bJ(this.TN, this.nx)
        } else {
            bb.bH(this.du, this.nx);
            bb.bH(this.TN, this.nx)
        }
    };
    bc.bdK = cC;
    bc.bdL = function () {
        this.bdK();
        this.byy();
        this.bK("onchange", {last: this.byx, total: this.ig, index: this.dR, ext: this.bdN})
    };
    bc.byA = function (bv) {
        bv = parseInt(bv);
        if (isNaN(bv) || this.ig == null)return!1;
        bv = Math.max(1, Math.min(bv, this.ig));
        this.byx = this.dR;
        this.dR = bv;
        return!0
    };
    bc.bdQ = function (dL) {
        dL = parseInt(dL);
        if (isNaN(dL) || dL < 1)return!1;
        this.ig = dL;
        return!0
    };
    bc.gB = function (be, fI) {
        bj.dp(be);
        var bC = bj.bY(be);
        if (!bC || bb.cU(bC, this.kj) || bb.cU(bC, this.nx))return;
        var bv = bC.innerText;
        switch (fI) {
            case 1:
            case-1:
                bv = this.dR + fI;
                break;
            case 2:
                bv = this.ig;
                break;
            case-2:
                bv = 1;
                break
        }
        this.kM(bv)
    };
    bc.sp = function () {
        return this.dR
    };
    bc.kM = function (bv) {
        var bIk = this.dR;
        this.byA(bv);
        if (bIk != this.dR)this.bdL();
        return this
    };
    bc.kW = function () {
        return this.ig
    };
    bc.Mh = function (dL) {
        if (this.bdQ(dL) && this.dR != null) {
            this.dR = 1;
            this.bdL()
        }
        return this
    };
    bc.bdl = function (dL) {
        if (this.bdQ(dL)) {
            this.bdK();
            this.byy()
        }
        return this
    };
    bc.IA = function (bv, dL) {
        if (!this.bdQ(dL) || !this.byA(bv))return this;
        this.bdL();
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bm = bd("nej.u"), dY = bd("nej.x"), bM = bd("nej.ut"), bc;
    if (!!bM.HY)return;
    bM.HY = NEJ.C();
    bc = bM.HY.bU(bM.bdn);
    bc.dv = function () {
        this.dC();
        var bh = bb.ef("span", "zdot");
        bh.innerText = "...";
        this.TR = [bh.cloneNode(true), bh]
    };
    bc.cR = function () {
        this.cV();
        this.byC()
    };
    bc.byC = function () {
        bb.mB(this.TR[0]);
        bb.mB(this.TR[1])
    };
    bc.bdK = function () {
        this.bdN = {last: !1, first: !1, list: this.dK};
        this.byC();
        this.Dy(this.dK[0], 1);
        var cK = 1, cF = this.dK.length;
        if (this.ig < cF) {
            for (var pS; cK < cF; cK++) {
                pS = cK + 1;
                this.Dy(this.dK[cK], pS > this.ig ? null : pS)
            }
            return
        }
        if (this.dR > 1) {
            var dE = Math.floor((cF - 2) / 2), bId = this.ig - cF + 2, mO = Math.max(2, this.dR - dE);
            if (this.ig >= cF) {
                mO = Math.min(mO, bId)
            }
            if (mO > 2) {
                this.dK[0].insertAdjacentElement("afterEnd", this.TR[0]);
                this.bdN.first = !0
            }
            for (var bv; ; cK++) {
                bv = mO + cK - 1;
                if (bv > this.dR)break;
                this.Dy(this.dK[cK], bv)
            }
        }
        if (this.dR < this.ig) {
            var bv, mO = this.dR + 1;
            for (var i = 0, l = cF - 2; ; i++, cK++) {
                bv = mO + i;
                if (cK > l || bv > this.ig)break;
                this.Dy(this.dK[cK], bv)
            }
            if (bv < this.ig) {
                this.dK[cK].insertAdjacentElement("beforeBegin", this.TR[1]);
                this.bdN.last = !0
            }
            if (bv <= this.ig) {
                this.Dy(this.dK[cK++], this.ig)
            }
        }
        for (; cK < cF; cK++) {
            this.Dy(this.dK[cK])
        }
    };
    bb.bIa = dY.bIa = function (cQ, bf) {
        var bB = bb.lr(cQ);
        if (!bB)return null;
        if (!bM.Rd(bB, bM.HY)) {
            bf = bf || {};
            var bk = !bf.clazz ? bb.eu(bB) : bb.bP(bB, bf.clazz);
            bf.pbtn = bk.shift();
            bf.nbtn = bk.pop();
            bf.list = bk;
            delete bf.clazz
        }
        return bM.Rd(bB, bM.HY, bf || cg)
    };
    dY.isChange = !0
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gm = NEJ.R, bb = bd("nej.e"), bm = bd("nej.u"), bI = bd("nej.ut"), bM = bd("nej.ui"), bc, bO, iq;
    if (!!bM.HD)return;
    bM.HD = NEJ.C();
    bc = bM.HD.bU(bM.bcL);
    bO = bM.HD.dr;
    bc.cz = function (bf) {
        bf.number = parseInt(bf.number) || 9;
        this.cB(bf);
        this.kO = bI.HY.bF(this.hc)
    };
    bc.xm = function (be) {
        if (!!this.Tw.noend) {
            var byD = be.ext || cg, bk = byD.list || gm;
            if (byD.last) {
                bb.ch(bk[bk.length - 1], "display", "none")
            }
        }
        bO.xm.apply(this, arguments)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), cA = bd("nej.ui"), bM = bd("nej.ut"), bc;
    if (!!bM.TV)return;
    bM.TV = NEJ.C();
    bc = bM.TV.bU(bM.dZ);
    bc.cz = function (bf) {
        this.jz = {};
        this.cB(bf);
        this.jK = bb.bG(bf.parent);
        this.fT = {parent: this.jK};
        this.qF = parseInt(bf.limit) || 10;
        this.wr = parseInt(bf.first) || this.qF;
        this.bHY(bf.item);
        this.bHX(bf.cache || cg);
        this.bHW(bf.pager || cg);
        this.hP()
    };
    bc.cR = function () {
        this.bK("onbeforerecycle");
        this.Hu();
        this.cV();
        if (this.jz.clear) {
            this.bS.wy(this.jz.key)
        }
        this.bS.bW();
        if (!!this.kw) {
            this.kw.bW();
            delete this.kw
        }
        delete this.byF;
        delete this.hc;
        delete this.TY;
        delete this.bS;
        delete this.jK;
        delete this.GW;
        delete this.fT;
        delete this.jz
    };
    bc.byZ = function (bB) {
        return bB + "" + bb.Fq()
    };
    bc.xU = function (cK, cq, gM, cF) {
        var bp = {index: 1, total: 1};
        if (cq >= cK) {
            bp.index = Math.floor((cq - cK) / gM) + 2
        }
        if (cF > cK) {
            bp.total = Math.ceil((cF - cK) / gM) + 1
        }
        return bp
    };
    bc.bzc = function (bN) {
        delete this.GW;
        this.Dr = bN;
        this.dq([
            [this.jK, "click", this.bHz.bi(this)]
        ])
    };
    bc.bHY = function (bw) {
        if (bm.gH(bw)) {
            this.bzc(bw);
            return
        }
        NEJ.X(this.fT, bw);
        var eG = this.fT.klass;
        delete this.fT.klass;
        if (bm.gH(eG)) {
            this.bzc(eG);
            return
        }
        delete this.Dr;
        this.GW = eG;
        this.fT.ondelete = this.bK.bi(this, "ondelete");
        this.fT.onupdate = this.bK.bi(this, "onupdate")
    };
    bc.bHX = function (ce) {
        var eG = ce.klass, kd = NEJ.X({}, ce);
        this.jz.key = kd.lkey;
        this.jz.data = kd.data || {};
        this.jz.clear = !!kd.clear;
        this.fT.pkey = kd.key || "id";
        kd.onlistload = this.beY.bi(this);
        kd.onpullrefresh = this.bHy.bi(this);
        if (!!eG && "onlistchange"in eG) {
            this.dq([
                [eG, "listchange", this.bfb.bi(this)]
            ])
        } else {
            kd.onitemadd = this.Ue.bi(this);
            kd.onitemdelete = this.Ug.bi(this);
            kd.onitemupdate = this.bzo.bi(this)
        }
        this.bS = (eG || bM.Mo).bF(kd);
        if (ce.total != null) {
            this.bS.Mh(this.jz.key, ce.total)
        }
        if (!!ce.list) {
            this.bS.rq(this.jz.key, ce.list)
        }
    };
    bc.bHW = function (rB) {
        this.byF = rB.klass || cA.HD;
        this.hc = NEJ.X({}, rB);
        if (bm.hh(rB.parent)) {
            this.hc.parent = rB.parent[0];
            this.MY = rB.parent.slice(1);
            if (!this.MY || !this.MY.length) {
                delete this.MY
            }
        }
        delete this.hc.klass
    };
    bc.Hu = function () {
        var gK = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.bK("onbeforelistclear", {parent: this.jK});
            if (!!this.gG && this.gG.length > 0) {
                this.gG = this.GW.bW(this.gG);
                delete this.gG
            }
            if (gK.test(this.jK.tagName)) {
                bb.bms(this.jK)
            } else {
                this.jK.innerHTML = ""
            }
        }
    }();
    bc.bfp = function (Ui) {
        if (!!this.hc.fixed)return;
        bb.ch(this.hc.parent, "display", Ui);
        bm.cv(this.MY, function (cQ) {
            bb.ch(cQ, "display", Ui)
        }, this)
    };
    bc.bfu = function () {
        var bv = this.hc.index || 1;
        delete this.hc.index;
        if (!!this.kw) {
            bv = this.kw.sp()
        }
        this.yc({last: bv, index: bv})
    };
    bc.yc = function (be) {
        this.bK("onpagechange", be)
    };
    bc.bzp = function (cq) {
        this.jz.offset = cq;
        this.Vf()
    };
    bc.bzt = function (bf) {
        return bf
    };
    bc.Vf = function () {
        this.Mu();
        var bl = this.jz.data;
        bl.offset = this.jz.offset;
        var xp = bl.offset == 0;
        bl.total = xp;
        this.jz.limit = xp ? this.wr : this.qF;
        bl.limit = this.jz.limit;
        this.bS.qb(this.bzt(NEJ.X({}, this.jz)))
    };
    bc.beY = function (bf) {
        if (bf.key != this.jz.key || bf.offset != this.jz.offset)return;
        this.Ul();
        var bk = this.bS.hT(bf.key);
        if (!bk || !bk.length) {
            this.bfE();
            return
        }
        var gM = bf.limit, cq = bf.offset;
        if (this.bfG(bk, cq, gM))return;
        this.bK("onbeforelistrender", {list: bk, offset: cq, parent: this.jK});
        if (!!this.Dr) {
            this.fT.xlist = bk;
            this.fT.beg = cq;
            this.fT.end = Math.min(bk.length, cq + gM) - 1;
            this.fT.act = "list";
            var eN = bb.dg(this.Dr, this.fT);
            this.Um(eN)
        } else {
            this.fT.limit = gM;
            this.fT.offset = cq;
            var iR = bb.yb(bk, this.GW, this.fT);
            this.Up(iR)
        }
        this.bK("onafterlistrender", {list: bk, offset: cq, parent: this.jK})
    };
    bc.bHy = function (bf) {
        if (!this.TY)return;
        delete this.TY;
        this.Ul("onafterpullrefresh");
        this.hP()
    };
    bc.bzv = function (bv, dL) {
        if (!!this.kw) {
            var yn = this.kw.sp(), bHo = this.kw.kW();
            if (yn > dL || dL != bHo) {
                this.kw.bW();
                delete this.kw;
                this.yc({last: yn, index: Math.min(bv, dL)});
                return!0
            }
        } else {
            this.hc.index = bv;
            this.hc.total = dL;
            this.kw = this.byF.bF(this.hc);
            this.kw.Ch("onchange", this.yc.bi(this));
            bm.cv(this.MY, function (cQ) {
                this.kw.bi(cQ)
            }, this)
        }
    };
    bc.bzx = function () {
        var gJ = +(new Date);
        return function (bl) {
            var bB = bl[this.fT.pkey];
            if (!bB) {
                bl["dirty-data"] = !0;
                bl[this.fT.pkey] = "dirty-" + gJ++
            }
            return bl
        }
    }();
    bc.bzB = function (bl) {
        var bB = bl[this.fT.pkey];
        if (!!bl["dirty-data"]) {
            delete bl["dirty-data"];
            delete bl[this.fT.pkey]
        }
        return bB
    };
    bc.bzI = function () {
        var bHc = function (ll, qe) {
            this.jK.insertAdjacentElement(ll, qe)
        };
        return function (ll, bl) {
            var Fv = [bl];
            if (!!this.Dr) {
                this.fT.xlist = Fv;
                this.fT.beg = 0;
                this.fT.end = 0;
                this.fT.act = "add";
                this.Um(bb.dg(this.Dr, this.fT), ll)
            } else {
                this.fT.limit = 1;
                this.fT.offset = 0;
                this.fT.parent = bHc.bi(this, ll);
                var iR = bb.yb(Fv, this.GW, this.fT);
                this.fT.parent = this.jK;
                this.Up(iR)
            }
        }
    }();
    bc.Mu = cC;
    bc.Ul = function (bX) {
        var be = {parent: this.jK};
        this.bK(bX || "onafterlistload", be);
        if (!be.stopped) {
            bb.mB(this.dA)
        }
    };
    bc.bfG = cC;
    bc.bfX = function (cZ, ll) {
        if (bm.gH(cZ)) {
            if (!this.dA)this.dA = bb.ef("div");
            this.dA.innerHTML = cZ
        } else {
            this.dA = cZ
        }
        this.jK.insertAdjacentElement(ll || "beforeEnd", this.dA)
    };
    bc.vR = function (bX, oI, ll) {
        var be = {parent: this.jK};
        this.bK(bX, be);
        if (!be.stopped) {
            this.bfX(be.value || oI, ll)
        }
    };
    bc.bfE = cC;
    bc.Um = cC;
    bc.Up = cC;
    bc.bHz = function () {
        var gK = /^(?:delete|update)$/;
        return function (be) {
            var bh = bj.bY(be, "d:action");
            if (!bh)return;
            var cl = bb.bz(bh, "action");
            if (!gK.test(cl))return;
            var bB = bb.bz(bh, "id");
            if (!bB)return;
            var bw = this.bS.fw(bB);
            if (!bw)return;
            bj.cu(be);
            this.bK("on" + cl, {data: bw, id: bw[this.fT.pkey], body: bb.bG(this.byZ(bB))})
        }
    }();
    bc.Ue = cC;
    bc.OI = function (be) {
        var bl = be.data || {}, bf = {data: bl, key: this.jz.key, id: bl[this.fT.pkey]};
        this.bK("onbeforedelete", bf);
        this.bS.Mb(bf)
    };
    bc.Ug = cC;
    bc.OJ = function (be) {
        var bl = be.data || {}, bf = {data: bl, key: this.jz.key};
        this.bK("onbeforeupdate", bf);
        this.bS.OH(bf)
    };
    bc.bzo = function (be) {
        this.LM(be, "onafterupdate");
        if (be.stopped)return;
        var bB = be.data[this.fT.pkey];
        if (!!this.gG) {
            var bw = bb.bqa(bB);
            if (!!bw)bw.hP(be.data)
        } else {
            var bh = bb.bG(bB + "" + bb.Fq());
            if (!bh)return;
            var bk = this.bS.hT(be.key), bv = bm.eg(bk, be.data);
            if (bv < 0)return;
            this.fT.list = bk;
            this.fT.beg = bv;
            this.fT.end = bv;
            this.fT.act = "update";
            var eN = bb.dg(this.Dr, this.fT);
            bh.insertAdjacentHTML("afterEnd", eN);
            bb.dW(bh)
        }
    };
    bc.LM = function (be, bX) {
        var bw = be.data;
        if (!bw || bw[this.fT.pkey] == null) {
            this.bK("onerror", be);
            be.stopped = !0
        }
        if (!be.stopped) {
            this.bK(bX, be)
        }
    };
    bc.bga = cC;
    bc.bgb = cC;
    bc.bfb = function (be) {
        if (be.key != this.jz.key)return;
        switch (be.action) {
            case"add":
                this.Ue(be);
                break;
            case"delete":
                this.Ug(be);
                break;
            case"update":
                this.bzo(be);
                break;
            case"refresh":
                this.hP();
                break;
            case"unshift":
                this.bgb(be.offset, be.limit);
                break;
            case"append":
                this.bga(be.offset, be.limit);
                break
        }
    };
    bc.os = function (bw) {
        this.OJ({data: bw})
    };
    bc.mw = function (bw) {
        this.OI({data: bw})
    };
    bc.LK = function (bw) {
        this.bS.kV({data: bw, key: this.jz.key})
    };
    bc.te = function () {
        return this.bS
    };
    bc.bzJ = function (bl) {
        this.bzI("afterBegin", this.bzx(bl));
        return this.bzB(bl)
    };
    bc.bHa = function (bl) {
        this.bzI("beforeEnd", this.bzx(bl));
        return this.bzB(bl)
    };
    bc.hP = function () {
        this.Hu();
        this.bfu()
    };
    bc.bff = function () {
        if (!!this.TY)return;
        this.TY = !0;
        this.vR("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.bS.bff({key: this.jz.key, data: this.jz.data})
    };
    bc.kW = function () {
        return this.bS.kW(this.jz.key)
    };
    bc.bGY = function () {
        return this.kw
    };
    bc.OB = function () {
        return this.bS.OB(this.jz.key)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gm = NEJ.R, bm = bd("nej.u"), bb = bd("nej.e"), bM = bd("nej.ut"), bc, bO;
    if (!!bM.ju)return;
    bM.ju = NEJ.C();
    bc = bM.ju.bU(bM.TV);
    bO = bM.ju.dr;
    bc.xU = function (cq, cF) {
        return bO.xU.call(this, this.wr, cq, this.qF, cF)
    };
    bc.bgy = function (bv) {
        var cq = 0;
        if (bv > 1)cq = this.wr + (bv - 2) * this.qF;
        return cq
    };
    bc.yc = function (be) {
        bO.yc.apply(this, arguments);
        if (!be.stopped) {
            this.bzp(this.bgy(be.index))
        }
    };
    bc.Mu = function () {
        this.Hu();
        this.vR("onbeforelistload", "列表加载中...")
    };
    bc.Ul = function () {
        bO.Ul.apply(this, arguments);
        this.Hu()
    };
    bc.bfG = function (bk, cq, gM) {
        var cP = this.xU(cq, bk.length);
        if (this.bzv(cP.index, cP.total))return!0;
        this.bfp(cP.total > 1 ? "" : "none")
    };
    bc.bfE = function () {
        this.vR("onemptylist", "没有列表数据！")
    };
    bc.bfX = function (cZ, ll) {
        if (!ll && bm.gH(cZ)) {
            this.jK.innerHTML = cZ;
            return
        }
        bO.bfX.apply(this, arguments)
    };
    bc.Um = function (eN) {
        this.jK.innerHTML = eN
    };
    bc.Up = function (iR) {
        this.gG = iR
    };
    bc.Ue = function (be) {
        this.LM(be, "onafteradd");
        if (!be.stopped)this.hP()
    };
    bc.Ug = function (be) {
        this.LM(be, "onafterdelete");
        if (!be.stopped)this.hP()
    };
    bc.bga = function (cq, gM) {
        var bv = 1;
        if (!!this.kw) {
            bv = this.kw.sp()
        }
        var kr = this.bgy(bv), kp = kr + (bv > 1 ? this.qF : this.wr);
        if (cq >= kp && !!this.kw) {
            var cP = this.xU(0, this.kW());
            this.kw.bdl(cP.total);
            this.bfp(cP.total > 1 ? "" : "none")
        } else {
            this.hP()
        }
    };
    bc.bgb = function (cq, gM) {
        var bv = 1;
        if (!!this.kw) {
            bv = this.kw.sp()
        }
        var kr = this.bgy(bv), cP = this.xU(kr, this.kW());
        this.yc({last: bv, index: cP.index})
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bI = bd("nej.ut"), bm = bd("nej.u"), bn = bd("nm.x"), bq = bd("nm.d"), bT = bd("nm.w"), hM = 40, bc, bO;
    bT.Ut = NEJ.C();
    bc = bT.Ut.bU(bI.dZ);
    bO = bT.Ut.dr;
    bc.dv = function () {
        this.dC()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.Lk = bf.inputer;
        this.bgC = bf.tipper;
        this.dq([
            [this.Lk, "input", this.iy.bi(this)]
        ])
    };
    bc.cR = function () {
        this.cV();
        this.Dj(null, null)
    };
    bc.iy = function (be) {
        if (be && be.type == "keyup" && (be.keyCode != 8 || be.keyCode != 68))return;
        var bX = this.Lk.value, cgi;
        if (bn.Fp(bX) > hM) {
            this.Lk.value = bn.AW(bX, hM);
            this.Dj("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.bi(this))
        } else if (bX.indexOf("#") >= 0 || bX.indexOf("@") >= 0) {
            this.Dj("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Dj(null, null);
            this.bK("onchange", {value: bX})
        }
    };
    bc.bGS = function () {
        this.iy()
    };
    bc.Dj = function () {
        var bB = 0;
        return function (hO, bzQ) {
            if (!!bB)window.clearTimeout(bB);
            if (!hO) {
                bb.bJ(this.bgC, "f-vhide");
                this.bzW = !1;
                return
            }
            this.bgC.innerHTML = '<i class="u-icn u-icn-25"></i>' + hO;
            bb.bH(this.bgC, "f-vhide");
            this.bzW = !0;
            if (bm.hC(bzQ))bB = window.setTimeout(function () {
                this.Dj(null, null);
                bzQ()
            }.bi(this), 1e3)
        }
    }();
    bc.bzZ = function () {
        if (this.bzW)return!1;
        if (bn.jG(this.Lk.value)) {
            this.Dj("歌单名不能为空");
            return!1
        }
        return!0
    };
    bc.gn = function () {
        return this.Lk.value
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bA = bd("nej.j"), bo = bd("nm.l"), bT = bd("nm.w"), di = bd("nej.ui"), bq = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    bo.Uv = NEJ.C();
    bc = bo.Uv.bU(bo.fz);
    bO = bo.Uv.dr;
    bc.dv = function () {
        this.dC()
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.Ux = {inputer: bk[0], tipper: bk[1]};
        this.hD = {onerror: this.bAd.bi(this), onitemadd: this.bAd.bi(this)};
        this.pC = bk[2];
        bj.bt(bk[2], "click", this.Bx.bi(this));
        bj.bt(bk[3], "click", this.BR.bi(this));
        bj.bt(this.bs, "keypress", this.bAi.bi(this))
    };
    bc.dx = function () {
        this.dy = "m-wgt-create"
    };
    bc.cz = function (bf) {
        bf.clazz = " m-layer-w2";
        bf.parent = bf.parent || document.body;
        bf.title = "新建歌单";
        bf.draggable = !0;
        bf.destroyalbe = !0;
        bf.mask = true;
        this.cB(bf);
        this.Ux.inputer.value = bf.name || "";
        this.sH = bT.Ut.bF(this.Ux);
        this.sH.bGS();
        this.bS = bq.hW.bF(this.hD);
        setTimeout(function () {
            this.Ux.inputer.focus()
        }.bi(this), 0)
    };
    bc.cR = function () {
        this.cV();
        if (this.sH) {
            this.sH.bW();
            delete this.sH
        }
        this.rm(!1);
        this.Ux.inputer.value = ""
    };
    bc.rm = function (Ke) {
        this.qm = Ke;
        if (Ke) {
            this.pC.innerHTML = "<i>新建中...</i>";
            bb.bJ(this.pC, "u-btn2-dis")
        } else {
            this.pC.innerHTML = "<i>新 建</i>";
            bb.bH(this.pC, "u-btn2-dis")
        }
    };
    bc.Bx = function () {
        if (this.qm || !this.sH.bzZ())return;
        var dG = {key: "playlist_new-" + GUser.userId, data: {name: this.sH.gn()}, offset: 1};
        this.bS.kV(dG);
        this.rm(!0)
    };
    bc.bAd = function (be) {
        var dX = (be.result || cg).code;
        if (!dX) {
            this.bK("onsuccess", be.data)
        } else {
            this.bK("onerror", be)
        }
        this.cw()
    };
    bc.BR = function () {
        this.cw()
    };
    bc.bAi = function (be) {
        if (be.keyCode == 13)this.Bx()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bA = bd("nej.j"), bn = bd("nm.x"), bq = bd("nm.d"), bo = bd("nm.l"), bc, bO;
    bo.bho = NEJ.C();
    bc = bo.bho.bU(bo.fz);
    bO = bo.bho.dr;
    bc.dv = function () {
        this.dC()
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.iG = {limit: 301, parent: bk[1], cache: {klass: bq.hW, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bhs.bi(this)}, item: {klass: "m-wgt-subscribe-item", cutStr: bn.AX, escape: bm.fd}};
        this.hD = {onsuccess: this.Uy.bi(this), onerror: this.hi.bi(this)};
        bj.bt(bk[0], "click", this.Bx.bi(this));
        bj.bt(bk[1], "click", this.mc.bi(this))
    };
    bc.dx = function () {
        this.dy = "m-wgt-subscribe"
    };
    bc.cz = function (bf) {
        bf.parent = bf.parent || document.body;
        bf.clazz = " m-layer-w2";
        bf.title = "添加到歌单";
        bf.draggable = !0;
        bf.mask = !0;
        this.cB(bf);
        this.Uz = (bf.tracks || []).reverse();
        this.iG.item.size = this.Uz.length;
        this.hD.name = bf.name || "";
        this.bAj = bq.uH.bF({onaddsuccess: this.bhA.bi(this)});
        this.ra = bq.hW.bF({onlistload: this.bGB.bi(this)});
        this.ra.btu();
        bm.cv(this.Uz, function (bw, bv, bk) {
            if (!bm.qj(bw)) {
                bk[bv] = this.bAj.fw(bw) || bw
            }
        }, this)
    };
    bc.bGB = function () {
        if (this.eI)this.eI.bW();
        this.eI = bI.ju.bF(this.iG)
    };
    bc.Bx = function () {
        this.cw();
        if (this.BI)this.BI.bW();
        this.BI = bo.Uv.bF(this.hD);
        this.BI.bR()
    };
    bc.mc = function () {
        var bGA = function (bh) {
            while (bh && bh != document) {
                if (bh.tagName.toLowerCase() == "li") {
                    return bh
                }
                bh = bh.parentNode
            }
        };
        return function (be) {
            bj.dp(be);
            var bC = bj.bY(be), bhK = bGA(bC);
            if (!!bhK && !bb.cU(bhK, "dis")) {
                this.Uy({id: bb.bz(bhK, "id")})
            }
        }
    }();
    bc.Uy = function (be) {
        var bB = be.id;
        if (!bB || !this.Uz.length)return;
        this.bAj.kV({key: "track_playlist-" + bB, data: {tracks: this.Uz, pid: bB}});
        this.cw()
    };
    bc.bhA = function () {
        this.bK("onsuccess");
        bo.ci.bR({tip: "收藏成功"})
    };
    bc.hi = function (be) {
        this.cw();
        this.bK("onerror", be);
        var dS = "收藏失败";
        switch (be.code) {
            case 405:
                dS = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                dS = "歌单数量超过限制";
                break;
            case 502:
                dS = "歌曲已经存在"
        }
        bo.ci.bR({tip: dS, type: 2})
    };
    bc.bhs = function () {
        this.cw();
        bo.ci.bR({tip: "列表下载失败，请稍后再试", type: 2})
    };
    bn.lP = function (bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        bo.bho.bR(bf)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, ej = bd("nej.p"), bb = bd("nej.e"), bj = bd("nej.v"), bA = bd("nej.j"), bm = bd("nej.u"), bn = bd("nm.x");
    var bhL, qV, bZ = decodeURIComponent(location.href), jH = /.+(http:\/\/.+\/proxy.html)/.test(bZ) ? RegExp.$1 : "";
    if (!!jH) {
        bA.wl("mail_proxy_url", jH)
    } else {
        jH = bA.sj("mail_proxy_url") || "about:blank"
    }
    bhL = bb.Tp({src: jH, onload: function () {
        qV = true
    }});
    var bAo = function () {
        bA.hI("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var bGq = function () {
        if (ej.ek.browser == "ie" && parseInt(ej.ek.version) < 9) {
            bn.gz({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    bn.bhR = function (bu, bB, cl) {
        if (!bGq())return;
        bAo();
        if (cl == "stop") {
            if (!qV)throw"proxy not loaded";
            bAo();
            bhL.contentWindow.location.replace(jH + "#" + bm.eX({to: "ifrmMusic", message: JSON.stringify({s: +(new Date), action: "stop"})}))
        } else {
            bhL.contentWindow.location.replace(jH + "#" + bm.eX({to: "ifrmMusic", message: JSON.stringify({type: bu, id: bB, s: +(new Date), action: cl})}))
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bA = bd("nej.j"), bm = bd("nej.u"), bn = bd("nm.x"), bo = bd("nm.l"), bq = bd("nm.d");
    var kt = bq.kQ.bF();
    var nZ = bq.uH.bF({onlistload: bGp, onitemload: bGh, onerror: hi});
    var BO = bq.pL.bF({onlistload: bGg, onitemload: bGf, onerror: hi});
    var bAF = {};

    function ud(be) {
        var bh = bj.bY(be, "d:resAction"), cl = bb.bz(bh, "resAction");
        if (bh && (cl == "play" || cl == "addto")) {
            bAG({action: cl, type: parseInt(bb.bz(bh, "resType")), id: bb.bz(bh, "resId"), from: bb.bz(bh, "resFrom"), data: bb.bz(bh, "resData"), order: bb.bz(bh, "resOrder")});
            bFZ(bh)
        }
    }

    function bAG(cX) {
        var cl = cX.action, bu = cX.type, bB = cX.id, eO = cX.from, bl = cX.data, tk = cX.order, bf = {limit: 1e3, offset: 0, data: {id: bB}, ext: {id: bB, action: cl, type: bu, from: eO, data: bl}};
        if (cl != "play" && cl != "addto" || !bu)return;
        if (window.GRef && GRef == "mail") {
            bn.bhR(bu, bB, cl);
            return
        }
        switch (bu) {
            case 13:
                bf.key = "track_playlist-" + bB;
                nZ.qb(bf);
                if (cl == "play") {
                    bA.cG("/api/playlist/update/playcount", {query: {id: bB}})
                }
                break;
            case 17:
                bf.key = "program";
                bf.id = bB;
                BO.bfZ(bf);
                if (cl == "play") {
                    bA.cG("/api/dj/program/listen", {query: {id: bB}})
                }
                break;
            case 18:
                bf.key = "track";
                bf.id = bB;
                nZ.bfZ(bf);
                break;
            case 19:
                bf.key = "track_album-" + bB;
                nZ.qb(bf);
                break;
            case 24:
                bf.key = "track_day";
                nZ.qb(bf);
                break;
            case 2:
                bf.key = "track_artist_top-" + bB;
                nZ.qb(bf);
                break;
            case 70:
                bf.key = "program_djradio-" + bB + "-" + tk;
                bf.data.radioId = bB;
                bf.data.asc = tk == 2;
                BO.qb(bf);
                break
        }
    }

    function bAX(bk) {
        var bp = [];
        bm.cv(bk, function (bw) {
            if (bw.mainSong) {
                bw.mainSong.program = bw;
                bp.push(bw.mainSong);
                bw.localupdatetime = +(new Date);
                nZ.bRg(bw.mainSong);
                bw.mainTrackId = bw.mainSong.id;
                delete bw.mainSong
            } else {
                var bAY = nZ.fw(bw.mainTrackId);
                bAY && bp.push(bAY)
            }
        });
        return bp
    }

    function UF(bk, bf) {
        var qO = bf.action == "play" && bf.type != 17 && bf.type != 18, fQ = bf.action == "play";
        if (!bk.length)return;
        if (bf.type == 19) {
            bk = bn.FW(bk, true, {play: true}, {source: "album", sourceid: bf.id})
        } else {
            bk = bn.FW(bk, true, {play: true})
        }
        bm.cv(bk, function (bw) {
            bw.source = bn.bcp({fid: bf.from, fdata: bf.data, type: bf.type, rid: bf.id}, bw.id)
        });
        top.player.addTo(bk, qO, fQ);
        kt.Lx({rid: bf.id, type: bf.type, hash: bn.Ft(), play: fQ, source: bf.from, sourceid: bf.data})
    }

    function bGp(be) {
        var bk = nZ.hT(be.key);
        UF(bk, be.ext)
    }

    function bGh(be) {
        var bk = [nZ.fw(be.id)], co = bk[0], ps = bn.oP(co), wR = co.privilege || {};
        if (ps == 10) {
            bn.sK(wR.fee || co.fee, co.id, "song", null, wR)
        } else if (ps == 100) {
            bn.kK(null, null, null, true, co)
        } else if (ps == 11) {
            bn.bsT(co.id, 18)
        } else {
            UF(bk, be.ext)
        }
    }

    function bGg(be) {
        var bk = bAX(BO.hT(be.key));
        UF(bk, be.ext)
    }

    function bGf(be) {
        var bk = bAX([BO.fw(be.id)]);
        UF(bk, be.ext)
    }

    function hi() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bFZ(bh) {
        var bu = bb.bz(bh, "resType"), bB = bb.bz(bh, "resId"), bN = bu + "-" + bB;
        if (bAF[bN])return;
        var bAZ = bb.bG("play-count"), bis = bb.bP(bh.parentNode, "nb"), If = null;
        if (bAZ) {
            If = bAZ
        } else {
            If = !!bis && !!bis[0] ? bis[0] : null
        }
        if (If) {
            var dE = If.innerHTML;
            if (/^\d+$/.test(dE)) {
                If.innerText = +dE + 1
            }
            bAF[bN] = true
        }
    }

    bn.bFR = function (bh) {
        bj.bt(bh || document.body, "click", ud.bi(this))
    };
    bn.bFQ = function (cl, bu, bB) {
        bAG({action: cl, type: bu, id: bB})
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bq = bd("nm.d"), bc, bO;
    bq.fX({"share-all": {url: "/api/share/friends/resource/", format: function (bp, bf) {
        this.bFP(bp, bf)
    }, onerror: "onshareerror"}, "share-sns": {url: "/api/share/resource/sns", format: function (bp, bf) {
        this.bK("onshareall", bf.result)
    }, onerror: function (bp, bf) {
        this.bK("onshareall", bf.result)
    }}, "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"}, share_img_compound: {url: "/upload/event/img/compound", type: "POST", format: function (bp, bf) {
        bf.options.picUrl = bp.picUrl;
        this.bBb(bf.options, bf.result)
    }, onerror: function (bp, bf) {
        this.bK("onshareall", bf.result)
    }}});
    bq.bBe = NEJ.C();
    bc = bq.bBe.bU(bq.ik);
    bc.bFP = function (bp, ne) {
        if (bp.event && ne.snsTypes) {
            if (ne.pics) {
                var bBi = [];
                for (var i = 0, len = ne.pics.length; i < len; i++) {
                    bBi[i] = ne.pics[i].originId
                }
                this.dJ("share_img_compound", {data: {picIds: bBi.join(",")}, options: ne, result: bp})
            } else {
                ne.picUrl = ne.picUrl;
                this.bBb(ne, bp)
            }
        } else {
            this.bK("onshareall", bp)
        }
        var Ll = bq.kQ.bF();
        Ll.mW(ne.isPub ? "pubevent" : "shareevent", {id: bp.id})
    };
    bc.bBb = function (ne, bp) {
        var dG = {};
        dG.eventid = bp.event.id;
        dG.eventtype = bp.event.type;
        ne.picUrl && (dG.picUrl = ne.picUrl);
        dG.snsTypes = ne.snsTypes;
        dG.msg = ne.data.msg || "";
        dG.type = ne.data.type;
        ne.data.id && (dG.id = ne.data.id);
        this.dJ("share-sns", {data: dG, result: bp})
    };
    bc.bFG = function (bf) {
        var bl = {type: "", id: 0, threadId: "", msg: "", actId: 0, pics: "", uuid: "publish-" + +(new Date) + bm.nY(5)};
        bl = NEJ.EX(bl, bf);
        if (!(bl.id > 0)) {
            delete bl.id;
            bl.type = "noresource"
        }
        if (!bl.threadId) {
            delete bl.threadId
        }
        if (!bl.actId) {
            delete bl.actId
        }
        if (!bl.pics) {
            delete bl.pics
        } else {
            bl.pics = JSON.stringify(bl.pics)
        }
        this.dJ("share-all", {data: bl, snsTypes: bf.snsTypes, picUrl: bf.picUrl, pics: bf.pics, isPub: bf.isPub})
    };
    bc.bFE = function (bf) {
        this.dJ("share-private", bf)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bq = bd("nm.d"), bc, bO;
    bq.fX({"event-list": {url: "/api/v1/event/get", filter: function (bf) {
        bf.data.getcounts = true;
        bf.data.pagesize = bf.data.limit;
        if (bf.data.offset == 0) {
            bf.data.lasttime = -1
        }
        delete bf.data.offset
    }, format: function (bV, bf) {
        this.bFD(bV.event);
        bf.data.lasttime = bV.lasttime;
        if (bV.event.length) {
            bV.event.length = bf.limit
        }
        return{list: bV.event, total: bV.size}
    }}, "event-pull": {url: "/api/event/getnews", filter: function (bf) {
        bf.data.pagesize = 20
    }, format: function (bV, bf) {
        return bV.event
    }}, "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"}, "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"}, "ievent_user-list": {type: "GET", url: "/api/event/get/{userId}", filter: function (bf) {
        bf.data.time = -1;
        bf.data.getcounts = true
    }, format: function (bV, bf) {
        bV.events.length = bf.limit;
        return{list: bV.events, total: bV.size}
    }}, "ievent-res-get": {url: "/api/res/status/", format: function (bp, bf) {
        bp.conf = bf.conf;
        return bp
    }}, "ievent-like": {url: "/api/resource/like", onload: "oneventlike", filter: function (bf, cj) {
        if (bf.like) {
            if (bf.comment) {
                cj.url = "/api/v1/comment/like"
            } else cj.url = "/api/resource/like";
            cj.onload = "oneventlike"
        } else {
            if (bf.comment) {
                cj.url = "/api/v1/comment/unlike"
            } else cj.url = "/api/resource/unlike";
            cj.onload = "oneventunlike"
        }
    }, format: function (bp, bf) {
        bp.eid = bf.eid;
        bp.origin = bf.origin;
        return bp
    }}, "ievent_user-del": {url: "/api/event/delete", format: function (bp, bf) {
        bp.id = bf.data.id;
        return bp
    }}, "event-del": {url: "/api/event/delete", filter: function (bf, cj) {
        if (bf.data.type == "nointer") {
            cj.url = "/api/event/rcmd/reject"
        } else {
            cj.url = "/api/event/delete"
        }
    }, format: function (bp, bf) {
        bp.id = bf.data.id;
        return bp
    }}, "event_activity-del": {url: "/api/event/delete", format: function (bp, bf) {
        bp.id = bf.data.id;
        return bp
    }}, "event_activity-list": {url: "/api/act/event", filter: function (bf) {
        bf.data.lasttime = bf.data.lasttime || -1;
        bf.data.pagesize = bf.data.limit;
        bf.data.getcounts = true;
        delete bf.data.offset
    }, format: function (bV, bf) {
        bf.data.lasttime = bV.lasttime;
        var bk = bV.events;
        if (bV.more || bf.offset + bf.limit < bV.size) {
            bk = this.bFA(bk, bf.data.pagesize)
        }
        return{list: bk, total: bV.size}
    }, onerror: "onlisterror"}});
    bq.Nl = NEJ.C();
    bc = bq.Nl.bU(bq.ik);
    bc.dv = function () {
        this.dC();
        this.kt = bq.kQ.bF()
    };
    bc.biS = function (bu, dO) {
        return bu + "-" + dO
    };
    bc.cgn = function (bf) {
        this.dJ("ievent-get", bf)
    };
    bc.cgo = function (bf) {
        this.dJ("ievent-new-get", bf)
    };
    bc.cgp = function (bf) {
        this.dJ("ievent-user-get", bf)
    };
    bc.cgq = function (bu, dO) {
        return this.qA(this.biS(bu, dO))
    };
    bc.cgs = function (Da, bf) {
        if (!Da || !Da.length)return;
        bf = bf || {};
        var cE = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, Cn = [], bBn = [], bl; i < Da.length; ++i) {
            bl = Da[i];
            bl = this.qA(this.biS(bl.type, bl.id));
            if (!bl) {
                Cn.push(Da[i].id);
                bBn.push(cE[Da[i].type] || 0)
            }
        }
        if (!Cn.length) {
            this.bK("oneventresload", bf.conf);
            return
        }
        bf.data = {ids: JSON.stringify(Cn), types: JSON.stringify(bBn)};
        bf.onload = this.bFq.bi(this);
        this.dJ("ievent-res-get", bf)
    };
    bc.bFq = function (bp) {
        if (bp.code != 200) {
            this.bK("oneventreserror", bp.code);
            return
        }
        var cE = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, bk = bp.results; i < bk.length; ++i) {
            this.pn(this.biS(cE[bk[i].type], bk[i].id), bk[i])
        }
        this.bK("oneventresload", bp.conf)
    };
    bc.bBo = function (bl) {
        var bN = "event-list";
        this.beo(bN, bl);
        this.bK("onitemadd", {key: bN, action: "add", data: bl, flag: -1})
    };
    bc.xq = function (bf) {
        this.dJ("ievent-like", bf)
    };
    bc.mw = function (bf) {
        this.dJ("ievent-delete", bf)
    };
    bc.bFA = function (bk, gM) {
        for (var i = bk.length; i < gM; i++)bk.push(null);
        return bk
    };
    bc.bFD = function (bk) {
        var bp = [];
        if (!bk || !bk.length)return;
        bm.cv(bk, function (be) {
            bp.push({action: "eventimpress", json: this.bBq(be)})
        }, this);
        this.kt.OX(bp)
    };
    bc.bBq = function () {
        var Xs = {32: "comment", 33: "activity", 34: "recomment_artist"}, bFm = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (be) {
            var bV = {id: be.id, sourceid: be.user.userId, alg: be.rcmdInfo ? be.rcmdInfo.alg : "null", contentType: Xs[be.type] || (bm.eg(bFm, be.type) != -1 ? "user_event" : "other")};
            return bV
        }
    }();
    bc.Cl = function (bFk, be) {
        var bV = this.bBq(be);
        bV.actionType = bFk;
        if (window.log)log("eventclick", bV)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), di = bd("nej.ui"), bn = bd("nm.x"), bL = bd("nm.w"), bc, bO;
    bL.UR = NEJ.C();
    bc = bL.UR.bU(di.gh);
    bO = bL.UR.dr;
    bc.cz = function (bf) {
        this.cB(bf);
        var hA = bf.box || cg;
        bb.la(this.bs, {position: "absolute", width: hA.width + "px", height: hA.height + "px", top: hA.top + "px", left: hA.left + "px"});
        window.uploader = this
    };
    bc.cR = function () {
        this.cV()
    };
    bc.mc = function (be) {
        this.bK("onselect", be);
        console.log("select", be)
    };
    bc.tU = function (be) {
        this.bK("onprogress", be);
        console.log("progress", be)
    };
    bc.sB = function (be) {
        if (be.code == 200) {
            this.bK("oncomplete", be)
        } else {
            this.hi(be)
        }
        console.log("complete", be)
    };
    bc.hi = function (be) {
        this.bK("onerror", be);
        console.log("error", be)
    };
    bc.jT = cC;
    bc.bFh = cC
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), di = bd("nej.ui"), bn = bd("nm.x"), bL = bd("nm.w"), lI = bd("cb"), bc, bO;
    bL.bjw = NEJ.C();
    bc = bL.bjw.bU(bL.UR);
    bO = bL.bjw.dr;
    bc.dv = function () {
        this.dC()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        var bN = bm.nY(8), ke = "onselect" + bN, bBs = "onprogress" + bN, bBt = "oncomplete" + bN, dc = "onerror" + bN;
        lI[ke] = this.mc.bi(this);
        lI[bBs] = this.tU.bi(this);
        lI[bBt] = this.sB.bi(this);
        lI[dc] = this.hi.bi(this);
        var bFe = "/style/swf/MusicUpload.swf?v=20150202", cE = {music: "音频(*.mp3,*.m4a,*.x-m4a)", image: "*.jpg;*.jpeg;*.png;*.gif;"}, qI = {url: bf.api, token: bf.token, filter: cE[bf.accept] || bf.accept || bf.flashAccept || "", multiple: bf.multiple, error: "cb." + dc, select: "cb." + ke, progress: "cb." + bBs, complete: "cb." + bBt};
        this.or = bb.rW({src: bFe, hidden: false, parent: this.bs, onready: this.Cs.bi(this), width: bf.box.width, height: bf.box.height, params: {flashvars: bm.BW(qI, "&", false), allowscriptaccess: "always", wmode: "transparent"}})
    };
    bc.cR = function () {
        this.cV();
        this.bs.innerHTML = ""
    };
    bc.Cs = function (hQ) {
        this.or = hQ
    };
    bc.jT = function (jg) {
        this.or.upload(jg)
    };
    bc.bFh = function () {
        this.or.cancle()
    };
    bc.qM = function (JB) {
        this.or.disable(JB)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, fm = bd("nej.g"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), di = bd("nej.ui"), bn = bd("nm.x"), bL = bd("nm.w"), bc, bO;
    var iP = bb.rA(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var iq = bb.kg('<div class="' + iP + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    bL.Vl = NEJ.C();
    bc = bL.Vl.bU(bL.UR);
    bO = bL.Vl.dr;
    bc.dx = function () {
        this.lz = iP;
        this.dy = iq
    };
    bc.dm = function () {
        this.dw();
        var cs = bb.eu(this.bs);
        this.cL = cs[0];
        bj.bt(this.cL.uploadfile, "change", this.Vp.bi(this))
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.bFd = bf.api || "";
        this.UU = bf.multiple;
        this.cL.multiple = this.UU ? "coverImgUrl" : "";
        this.cL.reset();
        this.UW = [];
        this.UY = {};
        var cE = {music: "audio/mp3,audio/x-m4a,audio/m4a", image: "image/*"};
        if (bf.accept || bf.htmlAccept) {
            this.cL.uploadfile.accept = cE[bf.accept] || bf.accept || bf.htmlAccept
        }
        if (bf.tipTitle) {
            this.cL.uploadfile.title = bf.tipTitle
        }
    };
    bc.cR = function () {
        this.cV();
        this.Vw();
        this.cL.reset();
        delete this.UW;
        delete this.UY;
        this.cL.uploadfile.accept = "*"
    };
    bc.Vp = function (be) {
        var bBw = this.cL.uploadfile.files, bBA = [];
        if (!this.UU) {
            this.UW = [];
            this.UY = {}
        }
        for (var i = 0, ii = bBw.length; i < ii; i++) {
            var Vb = this.bEX(bBw[i]);
            this.UW.push(Vb);
            this.UY[Vb.uuid] = Vb;
            bBA.push(Vb);
            if (!this.UU)break
        }
        this.mc(bBA);
        this.cL.reset()
    };
    bc.Vw = function () {
        if (this.bBF) {
            this.bBM = true;
            bA.rV(this.CV);
            this.bBM = false;
            delete this.bBF;
            delete this.CV
        }
    };
    bc.bEX = function (ff) {
        return{uuid: "file-" + +(new Date) + bm.nY(5), name: ff.name, size: ff.size, refernce: ff}
    };
    bc.jT = function (jg) {
        this.Vw();
        var ff = this.UU ? this.UY[jg] : this.UW[0], bl = new FormData, vf = {};
        if (ff) {
            vf[fm.yY] = fm.Ca;
            bl.append("fileupload", ff.refernce);
            this.bBF = ff;
            this.CV = bA.cG(this.bFd, {type: "json", method: "post", headers: vf, data: bl, timeout: 0, onload: this.zD.bi(this, jg), onerror: this.zD.bi(this, jg), onuploading: this.bEP.bi(this, jg)})
        }
    };
    bc.zD = function (jg, be) {
        be.uuid = jg;
        if (be.code == 200) {
            this.sB(be)
        } else {
            if (!this.bBM) {
                this.hi(be)
            }
        }
    };
    bc.bEP = function (jg, be) {
        be.uuid = jg;
        this.tU(be)
    };
    bc.bEO = function () {
        this.Vw()
    };
    bc.qM = function (JB) {
        if (JB) {
            this.cw()
        } else {
            this.bR()
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bL = bd("nm.w"), bEN = typeof FormData != "undefined";
    bL.CN = NEJ.C();
    bL.CN.bU(bEN ? bL.Vl : bL.bjw)
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), fm = bd("nej.g"), bj = bd("nej.v"), bm = bd("nej.u"), iW = bd("nej.n"), bI = bd("nej.ut"), cA = bd("nej.ui"), bT = bd("nm.w"), bo = bd("nm.l"), bq = bd("nm.d"), bn = bd("nm.x"), bL = bd("nm.x.f"), bc, bO, VL = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加4张", "-3": "请选择不超过5M的图片"}, VM = 5 * 1024 * 1024, bEM = /\.(bmp|jpg|jpeg|png|gif)$/i;
    bT.VO = NEJ.C();
    bc = bT.VO.bU(cA.gh);
    bc.dx = function () {
        this.dy = "m-xwgt-share-upload"
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.VP = bk.shift();
        this.Gk = bk.shift();
        this.MF = bk.shift();
        this.bEJ = {onselect: this.bBO.gY(this, 0), onerror: this.hi.bi(this), oncomplete: this.sB.bi(this), multiple: true, parent: this.Gk, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: {width: 60, height: 60, top: 0, left: 0}, tipTitle: "上传图片"};
        this.bBP = {onselect: this.bBO.gY(this, 1), onerror: this.hi.bi(this), oncomplete: this.sB.bi(this), multiple: true, parent: this.Gk, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: {width: 20, height: 20, top: 0, left: 0}, tipTitle: "上传图片"};
        this.bEF = bT.CN.bF(this.bEJ)
    };
    bc.cR = function () {
        bj.ky(this.rE, "click");
        if (!!this.fV) {
            for (var i = this.fV.length - 1; i >= 0; i--) {
                bb.dW(this.fV[i].element, false);
                if (this.fV[i].dragger)this.fV[i].dragger.bW()
            }
        }
        this.fV = [];
        this.Vd = {};
        if (this.zE) {
            clearTimeout(this.zE)
        }
        this.zE = 0;
        this.CU && this.CU.bW();
        delete this.CU;
        this.cV()
    };
    bc.bBO = function (bk, bv) {
        if (!bk)return;
        for (var i = 0, len = bk.length; i < len; i++) {
            if (!bEM.test(bk[i].name)) {
                this.Wh({path: bk[i].name, index: bv, uuid: bk[i].uuid, status: -4, fail: "这不是<br>图片"})
            } else if (bk[i].size > VM) {
                this.Wj(-3);
                this.Wh({path: bk[i].name, index: bv, uuid: bk[i].uuid, status: -3, fail: "上传<br>失败"})
            } else {
                this.Wh({path: bk[i].name, index: bv, uuid: bk[i].uuid, status: 0})
            }
        }
    };
    bc.hi = function (be) {
        var ff = this.Vd[be.uuid];
        ff.status = -4;
        ff.fail = "上传<br>失败";
        this.bBQ(ff);
        this.zz()
    };
    bc.sB = function (be) {
        var ff = this.Vd[be.uuid];
        ff.status = 2;
        ff.picInfo = NEJ.X({}, be.picInfo);
        ff.picUrl = be.picInfo.pcSquareUrl;
        this.bBQ(ff);
        this.zz()
    };
    bc.Wh = function (ff) {
        if (this.fV.length >= 4) {
            this.Wj(-10, 3e3, this.bBR.bi(this));
            return
        }
        this.bEw(ff);
        this.fV.push(ff);
        this.Vd[ff.uuid] = ff;
        if (!!this.fV.length) {
            this.bs.style.display = ""
        }
        if (this.fV.length >= 4) {
            this.Gk.style.display = "none"
        } else {
            this.Gk.style.display = ""
        }
        this.zz()
    };
    bc.zz = function () {
        var Wp = -1, bBT = 0;
        for (var i = 0, l = this.fV.length; i < l; i++) {
            if (this.fV[i].status == 1) {
                return
            }
            if (this.fV[i].status == 0 && Wp < 0) {
                Wp = i
            }
            if (this.fV[i].status == 2 || this.fV[i].status < 0) {
                bBT++
            }
        }
        var bw = this.fV[Wp];
        if (bw) {
            (bw.index == 0 ? this.bEF : this.CU).jT(bw.uuid);
            bw.status = 1;
            this.bK("onstartupload", {})
        } else if (bBT == this.fV.length) {
            this.bK("onfinishupload", {})
        }
    };
    bc.Wj = function (bv, rR, lI) {
        if (this.HT < bv) {
            return
        }
        if (this.zE) {
            clearTimeout(this.zE);
            this.zE = 0
        }
        if (rR) {
            this.MF.innerText = VL[bv * 1];
            this.HT = bv;
            this.zE = setTimeout(this.US.bi(this, bv, lI), rR)
        } else {
            this.MF.innerText = VL[bv];
            this.HT = bv
        }
        this.MF.style.display = ""
    };
    bc.US = function (bv, lI) {
        if (bv && this.HT !== bv) {
            return
        }
        this.HT = 0;
        this.MF.innerText = VL[0];
        this.MF.style.display = "none";
        lI && lI()
    };
    bc.bEw = function (ff) {
        var bl = {};
        if (ff.fail) {
            bl.fail = ff.fail
        }
        var eN = bb.dg("m-xwgt-share-upload-preview", bl);
        ff.element = bb.oZ(eN);
        bj.bt(bb.bP(ff.element, "del")[0], "mousedown", this.bEt.bi(this, ff), false);
        this.VP.appendChild(ff.element);
        ff.dragger = bI.zm.bF({view: this.VP, body: ff.element, overflow: false, direction: 1, isRelative: 1, ondragstart: this.Mn.bi(this, ff), onchange: this.bEs.bi(this, ff), ondragend: this.bcv.bi(this, ff)})
    };
    bc.bBQ = function (ff) {
        if (!ff || !ff.element) {
            return false
        }
        var bl = {};
        if (ff.fail) {
            bl.fail = ff.fail
        } else {
            bl.url = ff.picUrl
        }
        bb.bJ(ff.element, "z-fail");
        ff.element.firstChild.outerHTML = bb.dg("m-xwgt-share-upload-preview-img", bl)
    };
    bc.Mn = function (bw, ll) {
        bb.bJ(bw.element, "z-sel")
    };
    bc.bEs = function (bw, ll) {
        var zt, ij = this.fV.length - 1, rd;
        for (var i = ij; i >= 0; i--) {
            bb.bH(this.fV[i].element, "z-jump");
            if (this.fV[i] == bw) {
                rd = i
            } else {
                this.fV[i].element.style.left = ""
            }
        }
        if (ll.left > 0) {
            zt = (ll.left + 40) / 70 >> 0;
            for (var i = 1; i <= zt && i + rd <= ij; i++) {
                this.fV[rd + i].element.style.left = -70 + "px";
                bb.bJ(this.fV[rd + i].element, "z-jump")
            }
        } else {
            zt = (ll.left - 40) / 70 >> 0;
            for (var i = -1; i >= zt && i + rd >= 0; i--) {
                this.fV[rd + i].element.style.left = 70 + "px";
                bb.bJ(this.fV[rd + i].element, "z-jump")
            }
        }
    };
    bc.bcv = function (bw, ll) {
        var cgx, ij = this.fV.length - 1, rd;
        for (var i = ij; i >= 0; i--) {
            this.fV[i].element.style.left = "";
            bb.bH(this.fV[i].element, "z-jump");
            if (this.fV[i] == bw) {
                rd = i
            }
        }
        bb.bH(bw.element, "z-sel");
        if (ll.left > 0) {
            zt = (ll.left + 40) / 70 >> 0;
            var dU = Math.min(rd + zt, ij)
        } else {
            zt = (ll.left - 40) / 70 >> 0;
            var dU = Math.max(rd + zt, 0)
        }
        this.fV.splice(rd, 1);
        this.fV.splice(dU, 0, bw);
        for (var i = 0, len = this.fV.length; i < len; i++) {
            this.VP.appendChild(this.fV[i].element)
        }
    };
    bc.bEt = function (bw, be) {
        bb.dW(bw.element, false);
        if (bw.dragger)bw.dragger.bW();
        delete bw.dragger;
        var bv = -1;
        for (var i = this.fV.length - 1; i >= 0; i--) {
            if (this.fV[i] == bw) {
                bv = i;
                break
            }
        }
        this.fV.splice(bv, bv >= 0 ? 1 : 0);
        delete bw;
        if (this.fV.length >= 4) {
            this.Gk.style.display = "none"
        } else {
            this.Gk.style.display = ""
        }
        if (!this.fV.length) {
            this.bs.style.display = "none";
            this.US(0)
        } else {
            this.bBR()
        }
        this.zz()
    };
    bc.bBR = function () {
        var bBU = false;
        for (var i = 0, len = this.fV.length; i < len; i++) {
            if (this.fV[i].status == -3) {
                bBU = true
            }
        }
        if (bBU) {
            this.Wj(-3)
        } else {
            this.US(-3)
        }
    };
    bc.Mf = function () {
        var kb = [];
        for (var i = this.fV.length - 1; i >= 0; i--) {
            if (this.fV[i].status == 2) {
                kb.unshift(this.fV[i].picInfo)
            }
        }
        return kb
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.bBP.parent = bf.button;
        this.CU && this.CU.bW();
        this.CU = bT.CN.bF(this.bBP);
        this.bs.style.display = "none";
        if (!!this.fV) {
            for (var i = this.fV.length - 1; i >= 0; i--) {
                bb.dW(this.fV[i].element, false);
                if (this.fV[i].dragger)this.fV[i].dragger.bW()
            }
        }
        this.fV = [];
        this.Vd = {};
        if (this.zE) {
            clearTimeout(this.zE)
        }
        this.US(0);
        this.HT = 0
    };
    bI.gN.bF({element: bT.VO, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gm = NEJ.R, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), cA = bd("nej.ui"), bM = bd("nej.ut"), bc, bO;
    if (!!bM.oS)return;
    bM.oS = NEJ.C();
    bc = bM.oS.bU(bM.TV);
    bO = bM.oS.dr;
    bc.cz = function (bf) {
        this.bEp(bf.more);
        this.UN = bb.bG(bf.sbody);
        this.dq([
            [this.UN, "scroll", this.bEo.bi(this)]
        ]);
        var el = bf.delta;
        if (el == null)el = 30;
        this.WI = Math.max(0, el);
        var dE = parseInt(bf.count) || 0;
        this.jC = Math.max(0, dE);
        var gk = parseInt(bf.number) || 0;
        if (gk > 1 && gk <= dE) {
            this.xk = gk
        }
        this.cB(bf)
    };
    bc.cR = function () {
        this.cV();
        delete this.zc;
        delete this.UN;
        delete this.tB;
        delete this.UK
    };
    bc.xU = function (cq, cF) {
        var cK = this.wr + (this.jC - 1) * this.qF, gM = this.jC * this.qF;
        return bO.xU.call(this, cK, cq, gM, cF)
    };
    bc.bEp = function (UH) {
        this.zc = bb.bG(UH);
        this.dq([
            [this.zc, "click", this.qC.bi(this)]
        ])
    };
    bc.bBW = function (bC) {
        bC = bC || {};
        if (this.tB || !bC)return;
        if (!bC.scrollHeight)bC = bb.qr();
        var cq = bb.jX(this.jK), el = cq.y + this.jK.offsetHeight - bC.scrollTop - bC.clientHeight, bEm = bC.scrollHeight <= bC.clientHeight;
        if (el <= this.WI || bEm && !this.tB) {
            this.qC()
        }
    };
    bc.bEo = function (be) {
        if (this.tB)return;
        this.bBW(bj.bY(be))
    };
    bc.yc = function (be) {
        bO.yc.apply(this, arguments);
        if (!be.stopped) {
            this.Hu();
            var cq = 0;
            if (be.index > 1) {
                cq = this.wr + ((be.index - 1) * this.jC - 1) * this.qF
            }
            this.iL = cq;
            this.qC()
        }
    };
    bc.bzt = function (bf) {
        if (!!this.xk) {
            var el = bf.offset > 0 ? this.qF : this.wr, gM = el + this.qF * (this.xk - 1);
            this.iL = bf.offset + gM;
            bf.data.limit = gM;
            bf.limit = gM;
            delete this.xk
        }
        return bf
    };
    bc.beY = function (bf) {
        delete this.UK;
        bO.beY.apply(this, arguments);
        this.bBX()
    };
    bc.bfb = function (be) {
        if (be.key != this.jz.key)return;
        switch (be.action) {
            case"refresh":
            case"append":
                delete this.UK;
                break
        }
        bO.bfb.apply(this, arguments)
    };
    bc.Mu = function () {
        this.vR("onbeforelistload", "列表加载中...");
        bb.ch(this.zc, "display", "none")
    };
    bc.bfG = function (bk, cq, gM) {
        var cF = bk.length, WW = bk.loaded ? cq + gM >= cF : cq + gM > cF;
        this.iL = Math.min(this.iL, cF);
        bb.ch(this.zc, "display", WW ? "none" : "");
        if (WW)this.tB = !0;
        if (this.jC > 0) {
            var cP = this.xU(cq, bk.length);
            if (this.bzv(cP.index, cP.total))return!0;
            var el = this.wr - this.qF, gk = this.jC * this.qF;
            this.tB = (cq + gM - el) % gk == 0 || WW;
            bb.ch(this.zc, "display", this.tB ? "none" : "");
            this.bfp(this.tB && cP.total > 1 ? "" : "none")
        }
    };
    bc.bfE = function () {
        this.iL = 0;
        this.tB = !0;
        this.vR("onemptylist", "没有列表数据！")
    };
    bc.Um = function (eN, ll) {
        this.jK.insertAdjacentHTML(ll || "beforeEnd", eN)
    };
    bc.Up = function (iR) {
        this.gG = this.gG || [];
        if (bm.hh(iR)) {
            gm.push.apply(this.gG, iR)
        } else {
            this.gG.push(iR)
        }
    };
    bc.Ue = function (be) {
        bb.mB(this.dA);
        this.LM(be, "onafteradd");
        var fI = be.flag;
        if (be.stopped || !fI)return;
        if (this.jC > 0) {
            this.bfu();
            return
        }
        this.iL += 1;
        fI == -1 ? this.bzJ(be.data) : this.bHa(be.data)
    };
    bc.Ug = function (be) {
        this.LM(be, "onafterdelete");
        if (be.stopped)return;
        if (this.jC > 0) {
            this.bfu();
            return
        }
        var bB = be.data[this.fT.pkey];
        if (!!this.gG) {
            var bw = bb.bqa(bB), bv = bm.eg(this.gG, bw);
            if (bv >= 0) {
                this.gG.splice(bv, 1);
                this.iL -= 1
            }
            if (!!bw)bw.bW()
        } else {
            var bh = bb.bG(this.byZ(bB));
            if (!!bh)this.iL -= 1;
            bb.dW(bh)
        }
        if (this.iL <= 0)this.qC()
    };
    bc.bga = function (cq, gM) {
        if (cq != this.iL)return;
        if (this.OB()) {
            this.tB = !1;
            this.bBX()
        }
    };
    bc.bgb = function (cq, gM) {
        if (cq != 0)return;
        var Fv = this.bS.hT(this.jz.key);
        for (var i = gM - 1; i >= 0; i--) {
            this.bzJ(Fv[i])
        }
    };
    bc.bBX = function () {
        var bC = this.UN;
        if (!bC || this.tB)return;
        this.bBW(this.UN)
    };
    bc.hP = function () {
        delete this.tB;
        bO.hP.apply(this, arguments)
    };
    bc.qC = function () {
        if (!!this.UK)return;
        this.UK = !0;
        var cq = this.iL;
        this.iL += cq == 0 ? this.wr : this.qF;
        this.bzp(cq)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), dY = bd("nej.x"), bM = bd("nej.ut"), bc;
    if (!!bM.BS)return;
    bM.BS = NEJ.C();
    bc = bM.BS.bU(bM.dZ);
    bc.cz = function (bf) {
        this.cB(bf);
        this.oJ = bf.event || "click";
        this.kj = bf.selected || "js-selected";
        this.nx = bf.disabled || "js-disabled";
        this.bBY = !!bf.inverse;
        this.bEj(bf.list);
        this.Xb(bf.index || 0)
    };
    bc.cR = function () {
        var bEe = function (bh) {
            this.Xf(bh, !1)
        };
        return function () {
            this.cV();
            bm.cv(this.dK, bEe, this);
            delete this.dK;
            delete this.oJ;
            delete this.dR;
            delete this.nx;
            delete this.kj;
            delete this.bBY
        }
    }();
    bc.bEj = function () {
        var bdz = function (bw) {
            if (!bw)return;
            this.dK.push(bw);
            var bv = this.dK.length - 1, fr = this.Xh[bv];
            if (!fr) {
                fr = this.Xb.bi(this, bv);
                this.Xh[bv] = fr
            }
            this.dq([
                [bw, this.oJ, fr]
            ])
        };
        return function (bk) {
            this.dK = [];
            if (!this.Xh)this.Xh = [];
            bm.cv(bk, bdz, this)
        }
    }();
    bc.Xf = function (bC, bDY) {
        !!bDY && !this.bBY ? bb.bJ(bC, this.kj) : bb.bH(bC, this.kj)
    };
    bc.Xb = function (bv, Ju) {
        var bC = this.dK[bv];
        if (Ju != !0 && (bv == this.dR || !bC || bb.cU(bC, this.nx))) {
            bj.dp(arguments[1]);
            return this
        }
        var be = {index: bv, last: this.dR, list: this.qb(), data: bb.bz(bC, "value")};
        this.dR = bv;
        bC = this.dK[be.last];
        if (!!bC)this.Xf(bC, !1);
        bC = this.dK[this.dR];
        this.Xf(bC, !0);
        this.bK("onchange", be);
        if (!be.nostop)bj.dp(arguments[1]);
        return this
    };
    bc.sp = function () {
        return this.dR
    };
    bc.qb = function () {
        return this.dK
    };
    bb.bDW = dY.bDW = function (cQ, bf) {
        var bB = bb.lr(cQ);
        if (!bB)return null;
        if (!bM.Rd(bB, bM.BS)) {
            bf = bf || {};
            bf.list = !bf.clazz ? bb.eu(bB) : bb.bP(bB, bf.clazz);
            delete bf.clazz
        }
        return bM.Rd(bB, bM.BS, bf || cg)
    };
    dY.isChange = !0
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bm = bd("nej.u"), bA = bd("nej.j"), bn = bd("nm.x");
    var SETTING_KEY = "player-setting";
    var mn = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    mn = bA.sj(SETTING_KEY) || mn;
    bn.Xo = function () {
        return mn
    };
    bn.Dh = function (BG) {
        if (BG) {
            mn = BG;
            bA.wl(SETTING_KEY, BG)
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bn = bd("nm.x"), bq = bd("nm.d"), hZ = bd("nm.w.player.log");
    var kt = bq.kQ.bF();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var sy = function (bu, cZ, ps) {
        var ew = bn.fX("{0} {1} {2}", bm.nc(new Date, "yyyy-MM-dd HH:mm:ss"), bu, cZ);
        if (ps == LogLevel.ERROR) {
            kt.mW("playerror", {message: cZ})
        }
        if (ps >= LogLevel.INFO) {
            kt.bQH(ew)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(ew)
        }
    };
    hZ.dh = function () {
        sy("PLAY_ERROR", bn.fX.apply(null, arguments), LogLevel.ERROR)
    };
    hZ.ou = function () {
        sy("PLAY_INFO", bn.fX.apply(null, arguments), LogLevel.INFO)
    };
    hZ.cgz = function () {
        sy("PLAY_DEBUG", bn.fX.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bI = bd("nej.ut"), bm = bd("nej.u"), bT = bd("nm.w"), lI = bd("flash.cb");
    var fs = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Bt, Uw, sP;
    bT.bDD = function (bu, gP) {
        if (bu != "flash") {
            if (!Bt) {
                Bt = bb.ef("audio");
                bm.cv(fs, function (bu) {
                    bj.bt(Bt, bu, onMediaCallBack)
                })
            }
            if (Bt && Bt.canPlayType && Bt.canPlayType("audio/mpeg")) {
                gP(new MediaWrap("audio"));
                return
            }
        }
        if (!Uw) {
            bb.rW({src: "/style/swf/music/music.swf?v=20151204", hidden: true, params: {allowscriptaccess: "always"}, onready: function (hQ) {
                Uw = hQ;
                bm.cv(fs, function (bu) {
                    lI[bu] = onMediaCallBack;
                    Uw.addCallback(bu, "flash.cb." + bu)
                });
                gP(new MediaWrap("flash"))
            }.bi(this)})
        } else {
            gP(new MediaWrap("flash"))
        }
    };
    function MediaWrap(Bq) {
        var lj;
        bI.gN.bF({element: this, event: fs.concat(["interrupt", "recover"])});
        lj = Bq == "audio" ? Bt : Uw;
        this.type = Bq;
        this.destroy = function () {
        };
        this.setSrc = function (bZ) {
            if (sP != this) {
                var ij = sP;
                if (ij) {
                    ij.interrupt()
                }
                sP = this
            }
            if (Bq == "flash") {
                lj.setSrc(bZ)
            } else {
                lj.src = bZ
            }
        };
        this.play = function () {
            if (sP != this) {
                var ij = sP;
                if (ij) {
                    ij.interrupt();
                    sP = this;
                    this.recover()
                } else {
                    sP = this
                }
            }
            if (Bq == "flash") {
                lj.as_play()
            } else {
                lj.play()
            }
        };
        this.pause = function () {
            if (sP != this)return;
            if (Bq == "flash") {
                lj.as_pause()
            } else {
                lj.pause()
            }
        };
        this.load = function () {
            if (sP != this)return;
            if (Bq == "flash") {
                lj.as_load()
            } else {
                lj.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return lj
        };
        var ol = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        bm.cv(ol, function (bX) {
            var Lo = "get" + bX, Ls = "set" + bX;
            if (Bq == "flash") {
                if (!this[Lo]) {
                    this[Lo] = function () {
                        return lj[Lo]()
                    }
                }
                if (!this[Ls]) {
                    this[Ls] = function (value) {
                        lj[Ls](value)
                    }
                }
            } else {
                var bCl = bX.slice(0, 1).toLowerCase() + bX.slice(1);
                if (!this[Lo]) {
                    this[Lo] = function () {
                        return lj[bCl]
                    }
                }
                if (!this[Ls]) {
                    this[Ls] = function (value) {
                        lj[bCl] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(be) {
        if (sP) {
            bj.bK(sP, be.type, be)
        }
    }
})();
(function () {
    var bd = NEJ.P, bj = bd("nej.v"), bA = bd("nej.j"), bI = bd("nej.ut"), ej = bd("nej.p"), bT = bd("nm.w"), bn = bd("nm.x"), hZ = bd("nm.w.player.log"), bc;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {LOAD_START: 1, LOADED_META: 2, IN_RELOAD: 3, IN_RE_GET_URL: 4, IN_SWITCH_CDN: 5, IN_SWITCH_MEDIA: 6};
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var bCm = false;
    bT.hB = NEJ.C();
    bc = bT.hB.bU(bI.dZ);
    bc.cz = function (bf) {
        this.cB(bf);
        this.dz = {};
        this.Uq(bf.media);
        bA.cG("/api/cdns", {type: "json", onload: function (be) {
            if (be.code) {
                this.px = be.data
            }
        }.bi(this)})
    };
    bc.cR = function () {
        this.cV();
        delete this.dz
    };
    bc.Un = function (co) {
        if (!co)return;
        var yf = this.dz.volume;
        if (this.ep) {
            this.ep.pause()
        }
        this.dz = {time: 0, id: co.id, duration: co.duration / 1e3, play: this.dz.play, stalledRetryCount: 0};
        if (yf != null) {
            this.dz.volume = yf
        }
        this.dz.loadState = LoadState.LOAD_START;
        this.bCo(co.id);
        hZ.ou("play song id: {0}", co.id)
    };
    bc.hj = function () {
        if (this.dz.error) {
            this.dz.error = null;
            if (this.dz.error == ErrorType.INFO_GET_ERR || this.bCA()) {
                this.bCE()
            } else {
                this.MG()
            }
        } else {
            if (this.ep) {
                this.ep.play()
            }
        }
        this.dz.play = true;
        this.oC("play")
    };
    bc.iC = function () {
        if (this.ep) {
            this.ep.pause()
        }
        this.dz.play = false;
        this.oC("pause")
    };
    bc.qH = function (cT) {
        if (this.ep) {
            this.ep.setCurrentTime(cT)
        }
        this.dz.time = cT;
        hZ.ou("seek to: {0}", cT)
    };
    bc.Yd = function () {
        return this.dz.duration || 0
    };
    bc.uv = function () {
        return!!this.dz.play
    };
    bc.oF = function (NA) {
        this.dz.volume = NA;
        if (this.ep) {
            this.ep.setVolume(NA)
        }
    };
    bc.Yk = function () {
        return this.dz.time
    };
    bc.Uq = function (bu) {
        bT.bDD(bu, function (lj) {
            this.ep = lj;
            hZ.ou("media loaded: {0}", lj.type);
            this.dq([
                [this.ep, "loadedmetadata", this.bDo.bi(this)],
                [this.ep, "ended", this.bDn.bi(this)],
                [this.ep, "waiting", this.AL.bi(this)],
                [this.ep, "play", this.GX.bi(this)],
                [this.ep, "pause", this.bDh.bi(this)],
                [this.ep, "playing", this.Yv.bi(this)],
                [this.ep, "timeupdate", this.bDg.bi(this)],
                [this.ep, "progress", this.tU.bi(this)],
                [this.ep, "stalled", this.bDf.bi(this)],
                [this.ep, "interrupt", this.iC.bi(this)],
                [this.ep, "recover", this.bDb.bi(this)],
                [this.ep, "error", this.hi.bi(this)]
            ]);
            if (this.dz) {
                if (this.dz.loadState == LoadState.LOAD_START || this.dz.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.YA();
                    if (this.dz.volume != null) {
                        this.ep.setVolume(this.dz.volume)
                    }
                }
            }
        }.bi(this))
    };
    bc.bDa = function (bu) {
        this.XI();
        this.ep.destroy();
        this.dz.loadState = LoadState.IN_SWITCH_MEDIA;
        this.AL();
        this.Uq(bu);
        hZ.ou("switch media")
    };
    bc.cgK = function () {
        return this.ep
    };
    bc.bCo = function () {
        this.AL();
        bA.cG("/api/song/enhance/player/url", {type: "json", query: {ids: JSON.stringify([this.dz.id]), br: DEFAULT_BR}, onload: this.bCI.bi(this), onerror: this.bCI.bi(this)})
    };
    bc.bCI = function (be) {
        if (be.code == 200 && be.data && be.data.length) {
            var cP = be.data[0];
            if (!cP.url) {
                this.dz.error = ErrorType.INFO_GET_ERR;
                this.oC("error", {code: this.dz.error});
                return
            }
            this.dz.mp3url = cP.url;
            this.dz.expireTime = (new Date).getTime() + cP.expi * 1e3;
            this.YA()
        } else {
            this.ep.setSrc("");
            this.dz.error = ErrorType.INFO_GET_ERR;
            this.oC("error", {code: this.dz.error});
            hZ.dh("info load error")
        }
    };
    bc.YA = function () {
        if (this.ep) {
            var bZ = this.dz.mp3url;
            if (this.dz.time > 0 && (this.dz.loadState == LoadState.IN_RE_GET_URL || this.dz.loadState == LoadState.IN_RE_GET_URL)) {
                bZ += "#t=" + this.dz.time
            }
            this.ep.setSrc(bZ);
            hZ.ou("load mp3: {0},loadState: {1}.", bZ, this.dz.loadState)
        }
    };
    bc.bCJ = function () {
        if (/#t=(\d+)$/.test(this.ep.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    bc.MG = function () {
        var cT = parseInt(this.dz.time) || 0, bCT = this.bCJ();
        if (cT === bCT) {
            this.ep.load()
        } else {
            this.ep.setSrc(this.dz.mp3url + "#t=" + cT)
        }
        this.dz.loadState = LoadState.IN_RELOAD;
        this.AL();
        hZ.ou("reload from: {0}", cT)
    };
    bc.bCE = function () {
        this.dz.loadState = LoadState.IN_RE_GET_URL;
        this.bCo()
    };
    bc.bCM = function () {
        var tW = getHost(this.dz.mp3url);
        if (tW) {
            for (var i = 0; i < this.px.length; i++) {
                var ku = this.px[i] || [], bv = ku.indexOf(tW);
                if (bv >= 0 && ku.length > 1) {
                    return ku[(bv + 1) % ku.length]
                }
            }
        }
        function getHost(bZ) {
            if (CDN_HOST_REG.test(bZ))return RegExp.$1
        }
    };
    bc.bCO = function () {
        this.dz.mp3url = this.dz.mp3url.replace(CDN_HOST_REG, this.bCM());
        this.dz.loadState = LoadState.IN_SWITCH_CDN;
        this.YA();
        this.AL()
    };
    bc.bDo = function () {
        if (this.dz.loadState == LoadState.LOAD_START) {
            this.dz.loadState = LoadState.LOADED_META;
            if (this.ep.type == "audio") {
                this.dz.duration = this.ep.getDuration()
            }
            this.oC("loadedmeta", {duration: this.dz.duration})
        } else {
            this.dz.loadState = LoadState.LOADED_META
        }
        if (this.dz.play) {
            this.ep.play()
        } else {
            this.ep.pause()
        }
        if (this.dz.time && parseInt(this.dz.time) != this.bCJ()) {
            this.ep.setCurrentTime(this.dz.time)
        }
        this.YL();
        this.Yv();
        bCm = true;
        hZ.ou("loaded meta")
    };
    bc.bDn = function () {
        this.dz.ended = true;
        this.oC("ended")
    };
    bc.AL = function () {
        if (!this.dz.waiting) {
            this.dz.waiting = true;
            this.dz.waitTimestamp = +(new Date);
            this.oC("waiting")
        }
    };
    bc.Yv = function () {
        this.dz.waiting = false;
        this.dz.waitTimestamp = 0;
        this.oC("playing")
    };
    bc.GX = function () {
        this.oC("play")
    };
    bc.bDh = function () {
        this.oC("pause")
    };
    bc.bDg = function () {
        if (this.dz.loadState != LoadState.LOADED_META)return;
        var cT = this.ep.getCurrentTime();
        if (this.dz.waiting && cT > this.dz.time) {
            this.Yv()
        }
        this.dz.time = cT;
        this.oC("timeupdate", {time: this.dz.time, duration: this.dz.duration})
    };
    bc.tU = function (be) {
        if (this.dz.loadState != LoadState.LOADED_META)return;
        var bp = {};
        if (be.data) {
            bp.total = be.data.total;
            bp.loaded = be.data.loaded
        } else {
            var TX = this.ep.getBuffered(), cT = this.ep.getCurrentTime(), qV = 0;
            for (var i = 0; i < TX.length; i++) {
                if (cT > TX.start(i) && cT < TX.end(i)) {
                    qV = TX.end(i);
                    break
                }
            }
            bp.total = this.dz.duration;
            bp.loaded = Math.min(qV, bp.total)
        }
        this.oC("progress", bp)
    };
    bc.YL = function () {
        if (this.dz.retry) {
            clearTimeout(this.dz.retry.tid);
            this.dz.retry = null
        }
    };
    bc.hi = function () {
        var dc = this.ep.getError();
        hZ.dh("media error code: {0}, netState: {1}", dc.code, this.ep.getNetworkState());
        if (dc.code == MediaError.MEDIA_ERR_NETWORK || dc.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var BG = bn.Xo();
            if (!this.dz.retry) {
                this.dz.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.dz.retry.tid)
            }
            if (this.dz.retry.level == RetryLevel.NONE) {
                if (this.bCA()) {
                    this.dz.retry.level = RetryLevel.GET_URL;
                    this.bCE();
                    hZ.ou("Url expired, get url.")
                } else {
                    this.dz.retry.level = RetryLevel.RELOAD;
                    this.dz.retry.tid = setTimeout(this.MG.bi(this), 3e3);
                    hZ.ou("Reload mp3 3s later.")
                }
            } else if (this.dz.retry.level == RetryLevel.GET_URL) {
                this.dz.retry.level = RetryLevel.RELOAD;
                this.dz.retry.tid = setTimeout(this.MG.bi(this), 3e3);
                hZ.ou("Reload mp3 3s later.")
            } else if (this.dz.retry.level == RetryLevel.RELOAD) {
                this.dz.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bCM()) {
                    this.dz.retry.tid = setTimeout(this.bCO.bi(this), 5e3);
                    hZ.ou("Switch CDN 5s later.")
                } else {
                    this.dz.retry.tid = setTimeout(this.MG.bi(this), 5e3);
                    hZ.ou("Reload mp3 5s later.")
                }
            } else if (!bCm && this.ep.type == "audio" && !BG.useFlash && !ej.Hj.mac && bn.bcX().supported) {
                BG.useFlash = true;
                bn.Dh(BG);
                this.bDa("flash")
            } else {
                this.YL();
                this.iC();
                this.dz.error = ErrorType.NET_ERR;
                this.oC("error", {code: this.dz.error});
                hZ.dh("error can not retry.")
            }
        } else {
            this.YL();
            this.iC();
            this.dz.error = ErrorType.UNKNOWN_ERR;
            this.oC("error", {code: this.dz.error});
            hZ.dh("error can not retry.")
        }
    };
    bc.bDf = function () {
        var kZ = 0, bCK = 5e3;
        return function () {
            this.AL();
            clearTimeout(kZ);
            setTimeout(function () {
                var jm = +(new Date);
                if (this.dz.waiting && jm - this.dz.waitTimestamp >= bCK && this.dz.stalledRetryCount < MAX_STALLED_RETRY) {
                    hZ.ou("stalled too long retry.");
                    this.dz.stalledRetryCount++;
                    this.MG()
                }
            }.bi(this), bCK);
            hZ.ou("stalled")
        }
    }();
    bc.bCA = function () {
        var jm = +(new Date);
        return jm > this.dz.expireTime
    };
    bc.bDb = function () {
        var cT = parseInt(this.dz.time) || 0;
        this.ep.setSrc(this.dz.mp3url + "#t=" + cT);
        this.dz.loadState = LoadState.IN_RELOAD;
        this.AL();
        hZ.ou("recover from: {0}", cT)
    };
    bc.oC = function (cl, bl) {
        bj.bK(bT.hB, "playaction", {action: cl, data: bl || {}})
    };
    bI.gN.bF({element: bT.hB, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var bd = NEJ.P, bj = bd("nej.v"), bI = bd("nej.ut"), bT = bd("nm.w"), bc;
    bT.Ax = NEJ.C();
    bc = bT.Ax.bU(bT.hB);
    bO = bT.Ax.dr;
    bc.dv = function () {
        this.dC()
    };
    bc.bCV = function (cJ) {
        this.Un(cJ);
        this.hj()
    };
    bc.YQ = function () {
        this.iC()
    };
    bc.ud = function (be) {
        if (be.action == "play") {
            this.iC()
        }
    };
    bc.oC = function (cl, bl) {
        bj.bK(bT.Ax, "tmpplayaction", {action: cl, data: bl || {}, tmp: true})
    };
    bc.ry = function () {
        return this.dz
    };
    bI.gN.bF({element: bT.Ax, event: ["tmpplayaction"]})
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), iW = bd("nej.n"), bA = bd("nej.j"), bI = bd("nej.ut"), cA = bd("nej.ui"), bT = bd("nm.w"), bo = bd("nm.l"), lM = bd("nm.c"), bq = bd("nm.d"), bn = bd("nm.x"), bc, bO, TS = [
        {item: "m-publish-search-single", type: 1},
        {item: "m-publish-search-artist", type: 100},
        {item: "m-publish-search-album", type: 10},
        {item: "m-publish-search-mv", type: 1004},
        {item: "m-publish-search-playlist", type: 1e3},
        {item: "m-publish-search-djRadio", type: 1009}
    ];
    var YV = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    bT.YW = NEJ.C();
    bc = bT.YW.bU(cA.gh);
    bc.dv = function (bf) {
        this.dC(bf);
        var bk = bb.bP(this.bs, "j-flag");
        this.cgL = bk.shift();
        this.bDe = bk.shift();
        this.Dw = bk.shift();
        this.bCG = bk.shift();
        this.Zc = [bk.shift(), bk.shift(), bk.shift(), bk.shift(), bk.shift(), bk.shift()];
        this.Ze = bk.shift();
        this.bCy = bk.shift();
        this.qp = {list: this.Zc, selected: "z-curr", onchange: this.bCx.bi(this)};
        bj.bt(this.Dw, "input", this.TQ.bi(this));
        bj.bt(this.Dw, "propertychange", this.TQ.bi(this));
        bj.bt(this.Dw, "keyup", this.TQ.bi(this));
        bj.bt(this.bDe, "click", this.TQ.bi(this));
        bj.bt(this.Ze, "click", this.dM.bi(this));
        bj.bt(this.bCy, "click", function () {
            this.bK("oncancel", {})
        }.bi(this));
        this.bS = bq.Af.iE();
        this.Ib = top.nm.w.Ax.iE();
        bI.gN.bF({element: top.nm.w.Ax, event: ["tmpplayaction"]});
        this.tK = {limit: 100, offset: 0, parent: this.Ze, onbeforelistload: this.pF.bi(this)};
        bj.bt(top.nm.w.Ax, "tmpplayaction", this.ud.bi(this))
    };
    bc.dx = function () {
        this.dy = "m-xwgt-publish-search"
    };
    bc.cz = function (bf) {
        this.cB(bf);
        if (!!this.xA) {
            this.xA.bW();
            delete this.xA
        }
        this.qp.index = YV[bf.type || "song"];
        this.xA = bI.BS.bF(this.qp);
        this.Dw.value = "";
        this.Dw.focus();
        this.si = "";
        this.cgD = 0;
        if (bf.showMV == true) {
            this.Zc[YV["mv"]].parentNode.style.display = "";
            bb.bJ(this.bCG, "srchtab-1")
        } else {
            this.Zc[YV["mv"]].parentNode.style.display = "none";
            bb.bH(this.bCG, "srchtab-1")
        }
        if (!!this.eI) {
            this.eI = this.eI.bW()
        }
        if (bf.hideBack) {
            bb.bJ(this.bCy.parentNode, "f-hide")
        }
    };
    bc.cR = function () {
        this.Ib.YQ();
        this.cV()
    };
    bc.TQ = function () {
        var value = this.Dw.value.trim();
        if (value && value.length) {
            if (value != this.si) {
                this.si = value;
                this.bCx({index: this.xA.sp()})
            }
        } else {
            if (this.eI) {
                this.eI = this.eI.bW()
            }
        }
        this.si = value
    };
    bc.dM = function () {
        var bDC = function (bC) {
            return bb.cU(bC, "sitm") || bb.cU(bC, "itm") || bb.cU(bC, "mv-item")
        }, bDE = function (bC) {
            return bb.cU(bC, "ply")
        }, bCj = function () {
            bo.ci.bR({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, bDF = function () {
            bo.ci.bR({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, Zv = function (co) {
            if (co && co.privilege && co.privilege.toast) {
                bA.cG("/api/song/toast", {query: {id: co.id}, type: "json", onload: vd.bi(this), onerror: vd.bi(this)})
            } else {
                uL()
            }
        }, vd = function (bV) {
            uL((bV || cg).toast)
        }, uL = function (cZ) {
            bo.ci.bR({type: 2, tip: cZ || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (be) {
            var Al = bj.bY(be, bDE), bk = bj.bY(be, bDC), gf = this.Ib.ry();
            if (!!bk) {
                bj.cu(be);
                this.Is = bb.bz(bk, "id");
                this.It = bb.bz(bk, "type");
                if (this.It == 18) {
                    var cJ = this.bS.fw(this.Is), ps = bn.oP(cJ);
                    if (!Al) {
                        if (ps == 10) {
                            bCj();
                            return
                        } else if (ps == 100) {
                            Zv(cJ);
                            return
                        }
                    } else {
                        if (ps == 10) {
                            bCj();
                            return
                        } else if (ps == 100) {
                            Zv(cJ);
                            return
                        } else if (ps == 11) {
                            bDF();
                            return
                        } else {
                            bb.bH(this.xv, "z-pause z-loading");
                            if (Al == this.xv && gf.play && !gf.ended) {
                                this.Ib.YQ()
                            } else {
                                this.xv = Al;
                                this.Ib.bCV(cJ)
                            }
                            return
                        }
                    }
                } else if (this.It == 70) {
                    if (bb.cU(bk, "z-noprogram")) {
                        bo.ci.bR({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.bDL()
            }
        }
    }();
    bc.bDL = function () {
        var hU = this.bS.fw(this.Is), rC = bn.bvi(this.It, hU);
        rC.title = rC.title || "";
        rC.author = rC.author || "";
        rC.picUrl = rC.picUrl || "";
        rC.authors = rC.authors || "";
        if (this.It == 70) {
            this.Is = this.Is.slice(0, -4)
        }
        this.bK("onfinish", {id: this.Is, type: this.It, data: rC})
    };
    bc.ud = function (be) {
        var bl = be.data;
        if (!this.xv) {
            return
        }
        switch (be.action) {
            case"play":
                bb.gL(this.xv, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                bb.bH(this.xv, "z-pause z-loading");
                break;
            case"error":
                bo.ci.bR({type: 2, tip: "试听遇到问题，播放失败"});
                bb.bH(this.xv, "z-pause z-loading");
                break;
            case"playing":
                bb.gL(this.xv, "z-loading", "z-pause");
                break;
            case"waiting":
                bb.gL(this.xv, "z-pause", "z-loading");
                break
        }
    };
    bc.bEb = function (be) {
        this.Ze.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    bc.bCx = function (be) {
        if (!this.si || be.index < 0 || be.index > 5) {
            return
        }
        this.Ib.YQ();
        var cj = TS[be.index], bf = NEJ.X({}, this.tK);
        bf.cache = {klass: bq.Af, clear: true, onerror: this.bEb.bi(this)};
        bf.cache.lkey = "search-publish-" + cj.type + "-" + this.si;
        bf.item = {klass: cj.item, getRestrictLevel: bn.oP, dur2time: bn.nJ};
        if (!bf.cache.data) {
            bf.cache.data = {}
        }
        bf.cache.data.s = this.si;
        bf.cache.data.type = cj.type;
        bf.cache.data.isPub = true;
        if (cj.type == 1) {
            bf.cache.data.hlpretag = '<span class="s-fc7">';
            bf.cache.data.hlposttag = "</span>"
        }
        bf.onemptylist = this.bEc.bi(this, this.si);
        if (!!this.Ae)this.bS.wy(this.Ae);
        if (!!this.eI) {
            this.eI = this.eI.bW()
        }
        this.eI = bI.oS.bF(bf);
        this.Ae = bf.cache.lkey
    };
    bc.pF = function (be) {
        be.value = bb.jZ("m-publish-search-loading")
    };
    bc.bEc = function (bN, be) {
        bb.fR(be.parent, "m-publish-emtpy-message", {key: bN});
        be.stopped = true
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), ej = bd("nej.p"), bA = bd("nej.j"), fc = bd("nej.ut"), di = bd("nej.ui"), bT = bd("nm.w"), bc, bO;
    var bEf = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    bT.zY = NEJ.C();
    bc = bT.zY.bU(di.gh);
    var iq = bb.gs("m-wgt-receiverInput");
    var bEk = bb.gs("m-wgt-receiverList");
    var iP = bb.rA(bEf);
    var bEq = bb.gs('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    bc.dv = function (bf) {
        this.ck = [];
        this.uG = bf.receiver || null;
        this.bEu = bf.unique || false;
        this.uI = bf.err;
        this.bBS(this.bBG, bf.uid);
        this.dC(bf)
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.Ja();
        this.Jb();
        this.Tj();
        if (bf.receiver)this.bab(bf.receiver.nickname, bf.receiver.userId);
        bb.ch(this.xR, "display", "block");
        bb.ch(this.bad, "cursor", "text");
        bb.ch(this.xR, "cursor", "text")
    };
    bc.dx = function () {
        var bl = this.bBE();
        this.dy = bb.kg(bb.dg(iq, {receiver: this.uG, users: bl}));
        this.lz = iP
    };
    bc.dm = function () {
        this.dw();
        var cI = bb.bP(this.bs, "j-flag");
        var iR = bb.bP(this.bs, "j-item");
        this.bad = cI[0];
        this.bBD = cI[1];
        this.eP = cI[2];
        this.xR = cI[3];
        this.Td = cI[4];
        this.ban = cI[5];
        this.gG = iR;
        bb.bJ(this.gG[0], "j-selected");
        bj.bt(this.eP, "keyup", this.bao.bi(this));
        bj.bt(this.eP, "keydown", this.Jp.bi(this));
        bj.bt(this.eP, "focus", this.kU.bi(this));
        bj.bt(this.Td, "click", this.bEY.bi(this));
        bj.bt(this.bad, "click", this.bEZ.bi(this));
        bj.bt(document.body, "click", this.og.bi(this));
        bj.bt(this.eP, "input", this.iy.bi(this));
        bj.bt(this.eP, "blur", this.ot.bi(this))
    };
    bc.cR = function (bf) {
        bj.oz(document.body, "click", this.og.bi(this));
        this.cV();
        this.Tj();
        this.bFb();
        this.og()
    };
    bc.bao = function (be) {
        bj.cu(be);
        var jE = be.keyCode || be.which;
        var cm = this.eP.value;
        var cF = this.gG.length;
        var qN = bb.bP(this.bs, "j-selected")[0];
        switch (jE) {
            case 13:
                var lX = bb.ix(qN, "data-username");
                var je = bb.ix(qN, "data-userId");
                this.bab(lX, je);
                this.og();
                this.eP.value = "";
                break;
            case 38:
                var bv = bb.ix(qN, "data-index") - 1 < 0 ? cF - 1 : bb.ix(qN, "data-index") - 1;
                bb.bH(qN, "j-selected");
                bb.bJ(this.gG[bv], "j-selected");
                break;
            case 40:
                var bv = parseInt(bb.ix(qN, "data-index")) + 1 >= cF ? 0 : parseInt(bb.ix(qN, "data-index")) + 1;
                bb.bH(qN, "j-selected");
                bb.bJ(this.gG[bv], "j-selected");
                break;
            default:
                this.tQ()
        }
    };
    bc.Jp = function (be) {
        var jE = be.keyCode || be.which;
        var cm = this.eP.value;
        var bv = bb.bP(this.bs, "j-receiver").length - 1;
        if (jE === 8 && cm === "")this.bFf(bv)
    };
    bc.iy = function (be) {
        var cm = this.eP.value;
        if (cm.length > 10) {
            this.eP.value = cm.substring(0, 10);
            return
        }
        ej.ek.browser == "ie" && ej.ek.version < "7.0" ? setTimeout(this.baI.bi(this), 0) : this.baI();
        this.Jb()
    };
    bc.kU = function () {
        if (this.ck[0])this.tQ(); else this.bBS(this.bFg);
        bb.ch(this.xR, "display", "none")
    };
    bc.ot = function () {
        var cF = bb.bP(this.bs, "j-receiver").length;
        if (this.eP.value.trim() == "" && cF <= 0)bb.ch(this.xR, "display", "block")
    };
    bc.bab = function (lX, je) {
        var DM = this.Kg();
        if (DM.length >= 10) {
            this.eH();
            return
        }
        var cA;
        for (cA = 0; cA < DM.length; cA++) {
            if (DM[cA] == je) {
                this.og();
                return
            }
        }
        if (!lX || !je)return;
        var bh = bb.fg(bb.kg(bb.dg(bEq, {username: lX, userId: je})));
        var cQ = this.bBD.parentNode;
        if (this.bEu) {
            this.Tj()
        }
        cQ.insertBefore(bh, this.bBD);
        this.eP.value = "";
        var cF = bb.bP(this.bs, "j-receiver").length;
        if (cF > 1)bb.ch(this.xR, "display", "none");
        this.baI();
        this.Jb()
    };
    bc.Tj = function () {
        var Kh = bb.bP(this.bs, "j-receiver");
        var cA;
        if (Kh.length > 0) {
            for (cA = 0; cA < Kh.length; cA++) {
                bb.dW(Kh[cA], false)
            }
        }
    };
    bc.bFb = function () {
        this.eP.value = ""
    };
    bc.bFf = function (bv) {
        this.eH(!0);
        var Kh = bb.bP(this.bs, "j-receiver");
        bb.dW(Kh[bv], false);
        this.Jb()
    };
    bc.tQ = function () {
        var cm = this.eP.value;
        var cN = cm.trim().toLowerCase();
        var bl;
        cN = cN.replace(/\[/g, "\\[");
        cN = cN.replace(/\]/g, "\\]");
        bl = this.bBE(cN);
        this.bFj(bl)
    };
    bc.og = function (be) {
        bb.ch(this.Td, "display", "none")
    };
    bc.eH = function (hl) {
        if (hl && this.uI) {
            bb.ch(this.uI, "display", "none");
            return
        }
        if (this.uI)bb.ch(this.uI, "display", "block")
    };
    bc.bEY = function (be) {
        bj.dp(be);
        var eB = be.target || be.srcElement;
        if (bb.cU(eB, "j-flag"))return;
        var cQ = eB.nodeName.toLowerCase() == "a" ? eB.parentNode : eB.parentNode.parentNode;
        var lX = bb.ix(cQ, "data-username");
        var je = bb.ix(cQ, "data-userId");
        this.bab(lX, je);
        this.og();
        bb.ch(this.xR, "display", "none")
    };
    bc.bEZ = function (be) {
        bj.cu(be);
        var eB = be.target || be.srcElement;
        if (bb.cU(eB.parentNode, "j-receiver")) {
            bb.dW(eB.parentNode, false);
            this.eH(!0);
            this.Jb()
        } else this.eP.focus()
    };
    bc.baI = function () {
        this.ban.innerHTML = this.eP.value;
        var eZ = this.ban.offsetWidth + 2;
        bb.ch(this.eP, "width", eZ + "px")
    };
    bc.Jb = function () {
        var SU = bb.jX(this.eP, this.bs).y;
        var bBl = Math.floor((SU - 8) / 27);
        if (bBl < 0)return;
        bb.ch(this.bad, "height", 19 + bBl * 29 + "px")
    };
    bc.Ja = function () {
        var po = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < po.length; i++) {
            bb.ch(this.ban, po[i], bb.ey(this.eP, po[i]))
        }
    };
    bc.bBS = function (gP, bB) {
        var fh = bB ? bB : window.GUser.userId;
        var bZ = "/api/user/getfollows/" + fh;
        var gy = bA.cG(bZ, {sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: gP.bi(this), onerror: function (bl) {
            this.ck = []
        }, onbeforerequest: function (bl) {
        }})
    };
    bc.bBG = function (bl) {
        this.ck = JSON.parse(bl).follow || [];
        var bB = GUser.userId;
        for (var i = 0; i < this.ck.length; i++) {
            if (this.ck[i].userId == bB) {
                this.ck.splice(i, 1);
                continue
            }
            this.ck[i].avatarUrl = this.ck[i].avatarUrl + "?param=30y30"
        }
    };
    bc.bFg = function (bl) {
        if (this.ck[0])return;
        this.bBG(bl);
        this.tQ()
    };
    bc.bBE = function (cN) {
        var cN = cN ? cN : "";
        this.ck = this.ck[0] ? this.ck : [];
        var cF = this.ck.length;
        var KD = this.Kg();
        var rL = [];
        var KI, KJ, bbb;
        if (!this.ck[0])return rL;
        for (var cA = 0; cA < cF; cA++) {
            bbb = false;
            for (var bA = 0; bA < KD.length; bA++) {
                if (this.ck[cA].userId == KD[bA]) {
                    bbb = true;
                    break
                }
            }
            if (bbb)continue;
            KI = this.ck[cA].nickname.toLowerCase().search(cN);
            KJ = this.ck[cA].py ? this.ck[cA].py.toLowerCase().search(cN) : -1;
            if (KI !== -1 || KJ != -1)rL.push(this.ck[cA])
        }
        return rL
    };
    bc.bFj = function (bl) {
        bb.fR(this.Td, bEk, {users: bl});
        bb.bJ(bb.bP(this.bs, "j-item")[0], "j-selected");
        this.gG = bb.bP(this.bs, "j-item");
        bb.ch(this.Td, "display", "block")
    };
    bc.Kg = function () {
        var rL = bb.bP(this.bs, "j-receiver") || [];
        var je = [];
        for (var i = 0; i < rL.length; i++) {
            je.push(bb.ix(rL[i], "data-id"))
        }
        return je
    };
    bc.cgm = function () {
        var je = this.Kg();
        var rL = [];
        for (var i = 0; i < je.length; i++) {
            for (var j = 0; j < this.ck.length; j++) {
                if (je[i] == this.ck[j].userId)rL.push(this.ck[j])
            }
        }
        return rL
    };
    bc.bFK = function () {
        this.Tj()
    };
    bT.zY.bR = function (bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            bo.oj.bR({title: "登录"});
            return
        }
        bf = bf || {};
        if (bf.parent === undefined)bf.parent = document.body;
        !!this.fJ && this.fJ.bW();
        this.fJ = this.bF(bf)
    };
    bT.zY.cw = function () {
        !!this.fJ && this.fJ.bW()
    };
    bT.zY.DP = function () {
        return this.og()
    };
    bT.zY.cgl = function () {
        return this.tQ()
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), bn = bd("nm.x"), bo = bd("nm.l"), bc, bO;
    bo.DQ = NEJ.C();
    bc = bo.DQ.bU(bo.YI);
    bO = bo.DQ.dr;
    bc.cz = function () {
        var Cd;
        var bFO = function (bD, bN) {
            Cd = Cd || [];
            if (bN != "18")Cd.push({key: bN, value: bD})
        };
        return function (bf) {
            this.cB(bf);
            if (!Cd) {
                var cE = bn.bOD();
                bm.fo(cE, bFO)
            }
            var cF = Cd.length;
            Cd.splice(cF - 2, 0, {key: "18", value: "186"});
            this.ST = Cd
        }
    }();
    bc.dx = function () {
        this.dy = "ntp-portrait"
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        this.cW = bk[0];
        this.bFT = bk[1];
        this.bFU = bk[2];
        this.bFX = bk[3];
        bj.bt(this.cW, "click", this.vG.bi(this));
        bj.bt(this.bFT, "click", this.BZ.bi(this, 1));
        bj.bt(this.bFX, "click", this.BZ.bi(this, 2))
    };
    bc.bbt = function (bv) {
        this.SF = bv;
        var cq = (bv - 1) * 50;
        var bk = this.ST.slice(cq, Math.min(cq + 50, this.ST.length));
        this.cW.innerHTML = bb.dg("jst-portrait", {plist: bk}, {purl: bn.bum});
        this.bFU.innerText = bv + "/" + Math.ceil(this.ST.length / 50)
    };
    bc.BZ = function (bv) {
        var bFY = Math.ceil(this.ST.length / 50);
        if (bv == 1 && this.SF == 1 || bv == 2 && this.SF == bFY)return;
        bv == 1 ? this.bbt(this.SF - 1) : this.bbt(this.SF + 1)
    };
    bc.vG = function (be) {
        var bC = bj.bY(be, "d:text");
        if (!bC)return;
        var be = {url: bb.bz(bC, "url"), text: bb.bz(bC, "text")};
        this.bK("onselect", be);
        if (!be.stopped)this.cw()
    };
    bc.bR = function () {
        bO.bR.call(this);
        this.bbt(1)
    }
})();
(function () {
    var bd = NEJ.P, bj = bd("nej.v"), bm = bd("nej.u"), ej = bd("nej.p"), cf = bd("nej.h"), bI = bd("nej.ut"), jY = /^[#?]+/, HF = /#(.*?)$/, vF = window, bbz = !history.pushState || ej.Hj.android || !history.auto;
    var SC = function (bZ, bbE) {
        vF.history[!bbE ? "pushState" : "replaceState"](null, document.title, bZ)
    };
    var SB = function () {
        return location.parse(vF.location.href)
    };
    SC = SC.fj(function (be) {
        if (!bbz)return;
        var cn = be.args;
        be.stopped = !0;
        bZ = cn[0].replace(jY, "");
        !cn[1] ? vF.location.hash = bZ : vF.location.replace("#" + bZ)
    });
    SB = SB.fj(function (be) {
        if (!bbz)return;
        be.stopped = !0;
        var fA = HF.test(vF.location.href) ? RegExp.$1 : "";
        be.value = location.parse(fA.replace(jY, ""))
    });
    location.redirect = function (bZ, bbE) {
        SC(bZ, bbE);
        return this
    };
    location.active = function () {
        var hd, bZ, jq, dI, IX;
        var bbJ = function (jJ) {
            if (!!dI) {
                dI = !1;
                return
            }
            var be = {oldValue: jq, newValue: SB()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                bj.bK(location, "beforeurlchange", be);
                if (be.stopped) {
                    if (!!jq) {
                        dI = !0;
                        SC(jq.href, !0)
                    }
                    return
                }
            }
            bZ = vF.location.href;
            jq = be.newValue;
            bj.bK(location, "urlchange", jq);
            cf.Wt(jq.href)
        };
        var bAR = function () {
            if (bZ != vF.location.href)bbJ();
            hd = requestAnimationFrame(bAR)
        };
        return function (dB) {
            if (!!IX)return this;
            IX = !0;
            vF = dB || window;
            if (bbz && "onhashchange"in window && ej.ns.trident2) {
                bj.bt(vF, "hashchange", bbJ);
                bbJ()
            } else if (!hd) {
                hd = requestAnimationFrame(bAR)
            }
            return this
        }
    }();
    location.parse = function () {
        var gK = /^https?:\/\/.*?\//i, jY = /[?#]/;
        return function (bZ) {
            var bp = {href: bZ};
            bZ = (bZ || "").replace(gK, "/").split(jY);
            var dE = 1;
            if (bZ[0] == "/" && (bZ[1] || "").indexOf("/") == 0)dE = 2;
            bp.path = bZ.splice(0, dE).join("?");
            bp.query = bm.iO(bZ.join("&"));
            return bp
        }
    }();
    location.same = function (bZ) {
        return SB().href == bZ
    };
    bI.gN.bF({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), gA = bd("nm.ut");
    gA.sT = function (fx) {
        var hg = {text: "", start: 0, end: 0};
        if (fx.setSelectionRange) {
            hg.start = fx.selectionStart;
            hg.end = fx.selectionEnd;
            hg.text = hg.start != hg.end ? fx.value.substring(hg.start, hg.end) : ""
        } else if (document.selection) {
            var i, Sy = document.selection.createRange(), vC = document.body.createTextRange();
            vC.moveToElementText(fx);
            hg.text = Sy.text;
            hg.bookmark = Sy.getBookmark();
            for (i = 0; vC.compareEndPoints("StartToStart", Sy) < 0 && Sy.moveStart("character", -1) !== 0; i++) {
                if (fx.value.charAt(i) == "\n") {
                    i++
                }
            }
            hg.start = i;
            hg.end = hg.text.length + hg.start
        }
        return hg
    };
    gA.Sx = function (fx, hg) {
        var vC;
        if (!hg) {
            hg = {text: "", start: 0, end: 0}
        }
        fx.focus();
        if (fx.setSelectionRange) {
            fx.setSelectionRange(hg.start, hg.end)
        } else if (fx.createTextRange) {
            vC = fx.createTextRange();
            if (fx.value.length === hg.start) {
                vC.collapse(false);
                vC.select()
            } else {
                vC.moveToBookmark(hg.bookmark);
                vC.select()
            }
        }
    };
    gA.Ea = function (fx, hg, ew) {
        var hg = hg || {text: "", start: 0, end: 0};
        var bbX, bAP, vC, Mg, bAO, bAM, BH;
        this.Sx(fx, hg);
        if (fx.setSelectionRange) {
            bbX = fx.value;
            bAP = bbX.substring(0, hg.start) + ew + bbX.substring(hg.end);
            bAO = bAM = hg.start + ew.length;
            BH = fx.scrollTop;
            fx.value = bAP;
            if (fx.scrollTop != BH) {
                fx.scrollTop = BH
            }
            fx.setSelectionRange(bAO, bAM)
        } else if (fx.createTextRange) {
            Mg = document.selection.createRange();
            Mg.text = ew;
            Mg.setEndPoint("StartToEnd", Mg);
            Mg.select()
        }
        bj.bK(fx, "keyup")
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), ej = bd("nej.p"), bm = bd("nej.u"), fc = bd("nej.ut"), bT = bd("nm.w"), gA = bd("nm.ut"), bc;
    bT.bAJ = NEJ.C();
    bc = bT.bAJ.bU(fc.dZ);
    bc.dv = function (bf) {
        this.dC(bf)
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.gE = bf.txt;
        this.BD = bf.sgtsContainer;
        this.bAE = bf.sgtsList[0];
        this.Ss = bf.sgtsItem;
        this.oh = bf.rangeData;
        this.Ef = bf.atIndex;
        bb.bJ(this.Ss[0], "selected-item");
        this.ME()
    };
    bc.cR = function () {
        this.cV();
        bj.oz(document.body, "keyup", this.bAC.bi(this));
        bj.oz(document.body, "click", this.bAA.bi(this))
    };
    bc.ME = function () {
        this.dq([
            [document.body, "keyup", this.bAC.bi(this)],
            [document.body, "click", this.bAA.bi(this)],
            [this.gE, "keydown", this.bAz.bi(this)],
            [this.gE, "keypress", this.bAz.bi(this)],
            [this.bAE, "click", this.bAv.bi(this)],
            [this.bAE, "mouseover", this.Bz.bi(this)]
        ])
    };
    bc.Bz = function (be) {
        var eB = bj.bY(be);
        var bw = bb.bP(this.BD, "selected-item");
        if (bb.cU(eB, "j-sgt")) {
            bb.bH(bw[0], "selected-item");
            bb.bJ(eB, "selected-item")
        }
    };
    bc.bAC = function (be) {
        var bw = bb.bP(this.BD, "selected-item");
        var cF = this.Ss.length;
        var jE = be.keyCode || be.which;
        var bv, bl;
        switch (jE) {
            case 38:
                bv = bb.ix(bw[0], "data-index") - 1 < 0 ? cF - 1 : bb.ix(bw[0], "data-index") - 1;
                bb.bH(bw[0], "selected-item");
                bb.bJ(this.Ss[bv], "selected-item");
                break;
            case 40:
                bv = parseInt(bb.ix(bw[0], "data-index")) + 1 >= cF ? 0 : parseInt(bb.ix(bw[0], "data-index")) + 1;
                bb.bH(bw[0], "selected-item");
                bb.bJ(this.Ss[bv], "selected-item");
                break;
            case 13:
                this.bAv(be);
                break;
            case 27:
                this.og();
                break;
            case 32:
                var cm = this.gE.value;
                var bv = gA.sT(this.gE);
                if (cm.charAt(bv.start - 1) !== " ")return;
                this.og();
                break
        }
    };
    bc.bAz = function (be) {
        var jE = be.keyCode || be.which;
        if (jE === 13 || jE === 38 || jE === 40) {
            bj.dp(be);
            be.keyCode = 0;
            be.which = 0;
            be.returnvalue = false
        }
    };
    bc.bAA = function (be) {
        var eB = be.target || be.srcElement;
        if (eB === this.gE)return;
        this.og()
    };
    bc.bAv = function (be) {
        bj.cu(be);
        var bw = bb.bP(this.BD, "selected-item")[0];
        var qN = be.target || be.srcElement;
        var bu = be.type;
        if (bb.cU(qN, "lst"))return;
        if (bu == "click") {
            bb.bH(bw, "selected-item");
            bb.bJ(qN, "selected-item")
        } else qN = bw;
        var bl = qN.innerHTML + " ";
        this.og();
        var hg = this.oh;
        hg.start = this.Ef + 1;
        if (ej.ek.browser == "ie" && ej.ek.version < "9.0") {
            this.gE.value = this.gE.value.substring(0, hg.start) + this.gE.value.substring(hg.end, this.gE.value.length);
            hg.end = hg.start
        }
        gA.Ea(this.gE, hg, bl);
        bj.bK(this.gE, "keyup")
    };
    bc.og = function (be) {
        if (!!this.BD)bb.ch(this.BD, "display", "none");
        this.bW()
    };
    bc.tQ = function (be) {
        if (!!this.BD)bb.ch(this.BD, "display", "block")
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bT = bd("nm.w"), fc = bd("nej.ut"), di = bd("nej.ui"), bc;
    var bGr = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bGv = bb.gs("m-wgt-atlist");
    var iP = bb.rA(bGr);
    bT.bAp = NEJ.C();
    bc = bT.bAp.bU(di.gh);
    bc.dv = function (bf) {
        this.hc = {};
        this.dC()
    };
    bc.cz = function (bf) {
        this.hc.txt = bb.bG(bf.target);
        this.hc.data = bf.data;
        this.hc.offset = bf.offset;
        this.hc.rangeData = bf.rangeData;
        this.hc.atIndex = bf.atIndex;
        this.bGz(bf);
        this.cB(bf);
        this.hc.sgtsContainer = this.bs;
        this.hc.sgtsList = bb.bP(this.bs, "lst");
        this.hc.sgtsItem = bb.bP(this.bs, "f-thide");
        this.NE(bf);
        this.bGF = bT.bAJ.bF(this.hc)
    };
    bc.cR = function (bf) {
        this.cV();
        this.bGF.bW()
    };
    bc.dx = function () {
        this.lz = iP
    };
    bc.dm = function () {
        this.dw()
    };
    bc.bGz = function (bf) {
        this.bs = bb.fg(bb.kg(bb.dg(bGv, bf.data)))
    };
    bc.NE = function (bf) {
        var bAh = bb.bP(this.bs, "selected-item")[0];
        if (bAh)bb.bH(bAh, "selected-item");
        var dY = bf.offset.x + "px";
        var hv = bf.offset.y + "px";
        bb.ch(this.bs, "left", dY);
        bb.ch(this.bs, "top", hv)
    }
})();
(function () {
    var bd = NEJ.P, bA = bd("nej.j"), gA = bd("nm.ut");
    gA.bAg = function (cm) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)return;
        var eh = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Ek = cm.match(eh) || [];
        for (var cA = 0; cA < Ek.length; cA++) {
            Ek[cA] = Ek[cA].split("@")[1]
        }
        Ek = Ek.reverse();
        var je = GUser.userId;
        var bGG = bA.sj("mentioners" + je) || [];
        var kl = Ek.concat(bGG);
        if (kl.length > 10)kl = kl.slice(0, 10);
        bA.wl("mentioners" + je, kl)
    };
    gA.bGM = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0)return;
        var je = GUser.userId;
        return bA.sj("mentioners" + je) || []
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), ej = bd("nej.p"), bA = bd("nej.j"), bm = bd("nej.u"), fc = bd("nej.ut"), bT = bd("nm.w"), gA = bd("nm.ut"), bc;
    bT.bzU = NEJ.C();
    bc = bT.bzU.bU(fc.dZ);
    bc.dv = function (bf) {
        this.dC(bf);
        this.bzT()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.gE = bf.txt;
        this.bs = bf.body;
        this.bzP = bf.before;
        this.ID = bf.flag;
        this.bGR = bf.after;
        this.pf = [];
        if (ej.ek.browser != "ie") {
            setTimeout(function () {
                this.lF()
            }.bi(this), 0)
        }
        this.ME()
    };
    bc.cR = function () {
        this.cV();
        if (this.tj)this.tj.bW();
        delete this.tj
    };
    bc.ME = function () {
        this.dq([
            [this.gE, "keyup", this.bzM.bi(this, this.gE)],
            [this.gE, "click", this.bzM.bi(this, this.gE)],
            [this.gE, "focus", this.lF.bi(this)]
        ])
    };
    bc.lF = function (be) {
        this.oh = gA.sT(this.gE)
    };
    bc.bzT = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var fh = window.GUser.userId;
        var bZ = "/api/user/getfollows/" + fh;
        var gy = bA.cG(bZ, {sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: function (bl) {
            window.GFollowers = JSON.parse(bl).follow
        }.bi(this), onerror: function (bl) {
        }, onbeforerequest: function (bl) {
        }})
    };
    bc.bzL = function (index) {
        var bD = this.gE.value, cq, bcU, bcV, GQ;
        this.bzP.innerHTML = bm.fd(bD.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var pM = bb.bP(this.bzP, "j-test");
        for (var cA = 0; cA < pM.length; cA++) {
            pM[cA].innerText = " "
        }
        this.ID.innerHTML = bD.charAt(index);
        this.bGR.innerHTML = bm.fd(bD.substr(index + 1, bD.length));
        GQ = parseInt(bb.ey(this.gE, "lineHeight"));
        bb.ch(this.bs, "display", "block");
        bcU = bb.jX(this.ID, this.bs);
        bcV = bb.jX(this.gE);
        bb.ch(this.bs, "display", "none");
        var dY = bcU.x + bcV.x;
        var hv = bcU.y + bcV.y + GQ;
        cq = {x: dY, y: hv};
        this.bHb(cq)
    };
    bc.bzM = function (fx, be) {
        bj.dp(be);
        var fx = fx;
        var bD = fx.value;
        var cF = bD.length;
        var bv = gA.sT(fx).start;
        var bzF = 0;
        var jE = be.keyCode || be.which;
        var kl;
        this.oh = gA.sT(fx);
        var bzD = false;
        for (var i = 1; i < 20; i++) {
            kl = bv - i;
            if (bD.charAt(kl) === " ")break;
            if (bD.charAt(kl) === "@") {
                bzD = true;
                this.Ef = bzF = kl;
                break
            }
        }
        if (bzD && be.shiftKey === false && jE !== 38 && jE !== 40) {
            if (jE !== 27 && jE !== 13) {
                this.tj ? this.tj.bW() : null;
                this.bzL(bzF)
            }
        } else if (jE !== 38 && jE !== 40 && be.keyCode !== 32) {
            this.tj ? this.tj.bW() : null
        }
    };
    bc.bHb = function (cq) {
        var cq = cq;
        var bl = this.bHh();
        var bf = {parent: document.body, offset: cq, data: bl, target: this.gE, rangeData: this.oh, atIndex: this.Ef};
        this.tj ? this.tj.bW() : null;
        this.tj = bT.bAp.bF(bf)
    };
    bc.bHh = function () {
        var bHi = gA.sT(this.gE).start;
        var bHj = this.Ef + 1;
        var bzu = gA.bGM() || [];
        var bzr = [];
        var cN = this.gE.value.substring(bHj, bHi).toLowerCase();
        cN = cN.replace(/\[/g, "\\[");
        cN = cN.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pf = window.GFollowers[0] ? window.GFollowers : []
        } else this.pf = [];
        if (!this.pf[0])this.bzT();
        for (var cA = 0; cA < bzu.length; cA++) {
            for (var bA = 0; bA < this.pf.length; bA++) {
                if (this.pf[bA].nickname == bzu[cA])bzr.push(this.pf[bA])
            }
        }
        this.pf = bm.cbL(this.pf, bzr, {union: true, begin: true});
        var bHw = this.pf.length;
        var Sb = [];
        var KI, KJ;
        if (!this.pf[0])return{suggests: Sb};
        for (var i = 0; i < bHw; i++) {
            KI = this.pf[i].nickname.toLowerCase().search(cN);
            KJ = this.pf[i].py ? this.pf[i].py.toLowerCase().search(cN) : -1;
            if (KI !== -1 || KJ != -1)Sb.push(this.pf[i]);
            if (Sb.length === 10)break
        }
        return{suggests: Sb}
    };
    bc.GY = function () {
        var hg = this.oh || {text: "", start: 0, end: 0};
        bj.bK(this.gE, "focus");
        gA.Ea(this.gE, hg, "@");
        this.oh = gA.sT(this.gE);
        this.Ef = hg.start;
        this.bzL(this.Ef)
    };
    bc.DP = function () {
        if (this.tj)this.tj.bW()
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bT = bd("nm.w"), fc = bd("nej.ut"), di = bd("nej.ui"), bc;
    var bHx = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bHA = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var iq = bb.kg(bHA);
    var iP = bb.rA(bHx);
    bT.Ha = NEJ.C();
    bc = bT.Ha.bU(di.gh);
    bc.dv = function (bf) {
        this.hc = {};
        this.dC()
    };
    bc.cz = function (bf) {
        this.cB(bf);
        this.hc.txt = bb.bG(bf.target);
        this.Ja();
        this.Hb = bT.bzU.bF(this.hc)
    };
    bc.cR = function (bf) {
        this.cV();
        this.Hb.bW()
    };
    bc.dx = function () {
        this.dy = iq;
        this.lz = iP
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.eu(bb.bG(this.bs));
        this.hc.body = this.bs;
        this.hc.before = bk[0];
        this.hc.flag = bk[1];
        this.hc.after = bk[2]
    };
    bc.Ja = function () {
        var po = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < po.length; i++) {
            if (po[i] === "width" && bb.ey(this.hc.txt, po[i]) == "100%") {
                bb.ch(this.bs, po[i], this.hc.txt.offsetWidth + "px");
                continue
            }
            bb.ch(this.bs, po[i], bb.ey(this.hc.txt, po[i]))
        }
    };
    bc.GY = function () {
        this.Hb.GY()
    };
    bc.DP = function () {
        this.Hb.DP()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, gm = NEJ.R, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), lM = bd("nm.c"), ce = {}, bc;
    if (!!lM.bdp)return;
    lM.bdp = NEJ.C();
    bc = lM.bdp.bU(bI.dZ);
    bc.dv = function () {
        this.dC()
    };
    bc.cz = function (bf) {
        this.cB(bf)
    };
    bc.cR = function () {
        this.cV()
    };
    bc.RZ = function (fB, gP) {
        if (ce[fB]) {
            this.Et("register commonJST[" + fB + "] duplicate");
            return
        }
        if (!bm.hC(gP)) {
            gP = ctl.comJST.bHB(fB, gP)
        }
        ce[fB] = gP
    };
    bc.bHB = function (fB, tr, bzl) {
        tr = tr || {};
        NEJ.X(tr, {comJST: this.vi});
        if (tr.resetDataName && !bm.hh(tr.resetDataName)) {
            tr.resetDataName = [tr.resetDataName]
        }
        return function () {
            var bl = arguments[0], lE = arguments[1];
            if (tr.resetDataName) {
                var kl = {};
                for (var i = 0, ii = tr.resetDataName.length; i < ii; i++) {
                    kl[tr.resetDataName[i]] = arguments[i]
                }
                bl = kl;
                lE = arguments[ii]
            }
            NEJ.X(bl, tr, eV);
            if (bzl) {
                lE = lE || {};
                NEJ.X(lE, bzl)
            }
            return bb.dg(fB, bl, lE)
        }
    };
    bc.vi = function (fB) {
        if (!ce[fB]) {
            this.Et("commonJST[" + fB + "] is unregister");
            return""
        } else {
            return ce[fB].apply(null, gm.slice.call(arguments, 1))
        }
    };
    bc.dump = function () {
        return ce
    };
    bc.Et = function (bHF) {
        if (console && console.log) {
            console.log(bHF)
        }
    };
    var eV = function (gu, bN) {
        return bN == "resetDataName"
    };
    bd("ctl").comJST = lM.bdp.iE()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cC = NEJ.F, gm = NEJ.R, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), lM = bd("nm.c"), ce = {}, bc;
    if (!!lM.bdA)return;
    lM.bdA = NEJ.C();
    bc = lM.bdA.bU(bI.dZ);
    bc.dv = function () {
        this.dC();
        var bf = {"com-mv-artists": function (gD, eL, AN, bdB) {
            return bb.dg("com-mv-artists", {artists: gD, clazz: eL, boxClazz: bdB, mark: AN || function (dT) {
                return dT
            }, escape: bm.fd, comJST: ctl.comJST.vi})
        }, "com-album-artists": function (gD, eL, AN, bdB) {
            return bb.dg("com-album-artists", {artists: gD, clazz: eL, boxClazz: bdB, mark: AN || function (dT) {
                return dT
            }, escape: bm.fd, comJST: ctl.comJST.vi})
        }, "com-artists-title": {resetDataName: ["artists"], escape: bm.fd}};
        for (var bB in bf) {
            ctl.comJST.RZ(bB, bf[bB])
        }
    };
    bc.cz = function (bf) {
        this.cB(bf)
    };
    bc.cR = function () {
        this.cV()
    };
    bd("ctl").comJSTUtil = lM.bdA.iE()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), ej = bd("nej.p"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bA = bd("nej.j"), bT = bd("nm.w"), gA = bd("nm.ut"), bq = bd("nm.d"), bn = bd("nm.x"), bo = bd("nm.l"), bdC = [2, 3], eG = ["sn", "db"], bc, bO, bHG = {13: "playlist", 17: "djprogram", 18: "song", 19: "album", 20: "artist", 21: "mv", 24: "topic", 25: "activity", 70: "djradio"}, RT = {djprogram: "节目", album: "专辑", playlist: "歌单", song: "单曲", yunsong: "单曲", artist: "歌手", mv: "MV", topic: "音乐专栏", djradio: "电台"}, bzf = {djprogram: " - ", album: " - ", playlist: " by ", song: " - ", yunsong: " - ", artist: "", mv: " - ", djradio: " by "}, bHJ = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, Aq = {pubEventWithPics: false, pubEventWithoutResource: false, pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"};
    bo.ve = NEJ.C();
    bc = bo.ve.bU(bo.fz);
    bO = bo.ve.dr;
    bc.cz = function (bf) {
        if (bf.onclose === undefined) {
            bf.onclose = this.bzb.bi(this)
        }
        this.cB(bf);
        this.xt = bf.isPub;
        this.kc = bf.rid || -1;
        this.fL = bf.type || -1;
        this.byT = bf.purl;
        this.RO = bf.name || "";
        this.Hq = bf.author || "";
        this.bdT = bf.authors || "";
        this.byN = bf.actId;
        this.byK = bf.title;
        this.RK = {};
        this.bHS = bf.mesg || "";
        this.bHT = bf.placeholder || "说点什么吧";
        this.bHZ = bf.hideTip;
        var bk, jm = +(new Date);
        try {
            bk = top.localCache.bG("user") || {}
        } catch (e) {
            bk = {}
        }
        for (var i = 0, bk = bk.bindings || [], ki; i < bk.length; ++i) {
            ki = !bk[i].tokenJsonStr ? null : JSON.parse(bk[i].tokenJsonStr);
            if (!ki || ki.expires_in === undefined)continue;
            var RH = parseInt(ki.expires_in), RG = parseInt(bk[i].refreshTime), bIe = (RH + RG) * 1e3 - 5 * 60 * 1e3;
            if (bIe > jm)this.RK[bk[i].type] = !0
        }
        this.uG = bT.zY.bF({parent: this.RD, err: this.byz});
        this.iI = bT.Ha.bF({parent: document.body, target: this.hK});
        if (this.fL == 24 || this.fL == 21) {
            this.yj.style.display = "none"
        } else {
            this.oo = bT.VO.bF({parent: this.bIn, button: this.yj, onstartupload: this.byw.bi(this, true), onfinishupload: this.byw.bi(this, false)})
        }
    };
    bc.cR = function () {
        this.cV();
        if (this.uG) {
            this.uG.bW();
            delete this.uG
        }
        if (this.iI) {
            this.iI.bW();
            delete this.iI
        }
        if (this.oo) {
            this.oo.bW();
            delete this.oo
        }
        if (this.lK) {
            this.lK.bW();
            delete this.lK
        }
    };
    bc.dx = function () {
        this.dy = "m-wgt-sharewin"
    };
    bc.dm = function () {
        this.dw();
        this.bys = bb.eu(this.bs)[0];
        var cs = bb.bP(this.bs, "j-flag");
        this.pU = cs.shift();
        this.byz = cs.shift();
        this.RD = cs.shift();
        this.hK = cs.shift();
        this.vO = cs.shift();
        this.beJ = cs.shift();
        this.bIB = cs.shift();
        this.yj = cs.shift();
        this.dA = cs.shift();
        this.bIn = cs.shift();
        this.zh = cs.shift();
        this.cgb = cs.shift();
        this.bIF = cs.shift();
        this.fO = cs.shift();
        this.Rp = bb.bP(this.bIF, "j-t");
        this.xA = bI.BS.bF({list: bb.eu(this.pU), selected: "z-slt", onchange: this.beS.bi(this)});
        if (ej.ek.browser == "ie" && ej.ek.version < "8.0") {
            bb.ch(this.RD, "position", "relative");
            bb.ch(this.RD, "zIndex", "10")
        }
        bj.bt(window, "snsbind", this.HR.bi(this));
        bj.bt(this.hK, "input", this.iy.bi(this));
        bj.bt(this.hK, "keyup", this.sE.bi(this));
        bj.bt(this.bs, "click", this.dM.bi(this));
        this.bS = bq.bBe.bF();
        this.bS.bt("onshareall", this.Rl.bi(this, 0));
        this.bS.bt("onshareerror", this.jv.bi(this));
        this.bS.bt("onshareprivate", this.Rl.bi(this, 1));
        this.cfY = bq.Nl.bF();
        try {
            this.zK = top.api.sharePermission
        } catch (e) {
        }
        if (!this.zK) {
            this.zK = Aq;
            bA.cG("/api/event/user/permission", {type: "json", onload: function (be) {
                if (be.code == 200) {
                    this.zK = NEJ.EX(Aq, be)
                }
            }.bi(this)})
        }
    };
    bc.beS = function (be) {
        be.index == 0 ? bb.bH(this.bys, "m-plshare") : bb.bJ(this.bys, "m-plshare");
        this.RD.style.display = be.index == 0 ? "none" : "";
        this.bIB.style.display = be.index == 0 ? "" : "none";
        this.yj.style.display = be.index == 0 ? "" : "none";
        if (this.fL == 24 || this.fL == 21) {
            this.yj.style.display = "none"
        }
        this.byz.style.display = "none";
        this.hK.value = "";
        this.dh();
        this.CP();
        if (be.index == 0) {
            var eZ = bb.ey(this.hK, "width");
            if (eZ == "auto" || !eZ)return; else this.iI = bT.Ha.bF({parent: document.body, target: this.hK})
        } else {
            if (this.iI) {
                this.iI.bW();
                delete this.iI
            }
        }
    };
    bc.dM = function (be) {
        var bh = bj.bY(be, "d:action");
        if (!bh)return;
        if (bb.bz(bh, "default") === undefined) {
            bj.dp(be)
        }
        switch (bb.bz(bh, "action")) {
            case"txt":
                this.lF();
                break;
            case"search":
                if (this.xt && this.fL != 24) {
                    if (this.lK) {
                        this.lK.bW()
                    }
                    this.lK = bT.YW.bF({parent: this.bs.parentNode, onfinish: this.bfa.bi(this), oncancel: this.bIK.bi(this)});
                    this.bfd = true;
                    this.bs.style.display = "none";
                    this.CO(this.kc > 0 ? "更换音乐" : "添加音乐")
                }
                break;
            case"at":
                bj.ru(be);
                !!this.hG && this.hG.cw();
                this.iI.GY();
                this.gv();
                break;
            case"emot":
                bj.ru(be);
                !!this.iI && this.iI.DP();
                if (!this.hG) {
                    this.hG = bo.DQ.bF({parent: this.beJ});
                    this.hG.bt("onselect", this.vG.bi(this))
                }
                this.hG.bR();
                break;
            case"upload":
                if (!this.zK.pubEventWithPics) {
                    bj.cu(be);
                    bo.ci.bR({type: 2, tip: this.zK.pubEventWithPictureForbiddenNotice || ""})
                }
                break;
            case"sns":
                bj.cu(be);
                var bfg, cN, bu = bb.bz(bh, "type");
                if (!this.RK[bu]) {
                    bfg = bh.href.split("?");
                    cN = bm.iO(bfg[1]);
                    cN["csrf_token"] = bA.hI("__csrf");
                    top.open(bfg[0] + "?" + bm.eX(cN));
                    return
                }
                var cE = {2: "sn", 3: "db", 4: "rr"};
                bn.xE(bh, "u-slg-" + cE[bu] + "-gray");
                break;
            case"close":
                !!this.hG && this.hG.cw();
                this.bzb();
                break;
            case"share":
                bj.cu(be);
                if (bb.cU(bh, "u-btn2-2-dis")) {
                    if (!this.zK.pubEventWithoutResource && !(this.kc > 0)) {
                        this.bIU()
                    } else {
                    }
                } else if (!(this.kc > 0) && !this.hK.value && this.oo && this.oo.Mf().length == 0) {
                    bo.ci.bR({type: 2, tip: "请输入内容"})
                } else {
                    this.bJb()
                }
                break
        }
    };
    bc.bIU = function () {
        var tG = 0, bfo = function () {
            if (tG % 2) {
                bb.bH(this.vO, "z-show")
            } else {
                bb.bJ(this.vO, "z-show")
            }
            tG++;
            if (tG > 5) {
                clearInterval(hd)
            }
        }, hd;
        return function () {
            tG = 0;
            clearInterval(hd);
            hd = setInterval(bfo.bi(this), 200)
        }
    }();
    bc.HR = function (bp) {
        bp = bp.result;
        this.RK[bp.type] = !0;
        var bv = bm.eg(bdC, bp.type), ds = "u-slg-" + eG[bv] + "-gray";
        bb.bH(this.Rp[bv], ds)
    };
    bc.bfa = function (cP) {
        var bl = cP.data;
        this.kc = cP.id;
        this.fL = cP.type;
        this.bs.style.display = "";
        this.CO(this.byK);
        this.lK && this.lK.bW();
        this.bfd = false;
        this.byT = bl.picUrl;
        this.RO = bl.title || "";
        this.Hq = bl.author || "";
        this.bdT = bl.authors || "";
        this.bJc();
        this.Ra()
    };
    bc.bIK = function () {
        this.lK && this.lK.bW();
        this.bs.style.display = "";
        this.CO(this.byK);
        this.bfd = false;
        this.Ra()
    };
    bc.vG = function (be) {
        var cm = "[" + be.text + "]";
        gA.Ea(this.hK, this.oh, cm);
        this.gv()
    };
    bc.iy = function (be) {
        ej.ek.browser == "ie" && ej.ek.version < "7.0" ? setTimeout(this.gv.bi(this), 0) : this.gv()
    };
    bc.sE = function (be) {
        this.lF();
        if (be.keyCode == 8)this.gv()
    };
    bc.gv = function () {
        this.lF();
        this.CP()
    };
    bc.CP = function () {
        var cF = Math.ceil(bm.hk(this.hK.value.trim()) / 2);
        this.dA.innerText = 140 - cF;
        cF > 140 ? bb.gL(this.dA, "s-fc4", "s-fc6") : bb.gL(this.dA, "s-fc6", "s-fc4")
    };
    bc.bJb = function () {
        if (this.dF())return;
        if (bm.hk(this.hK.value.trim()) > 280) {
            this.dh("字数超过140个字符");
            return
        }
        var bu = this.xA.sp(), bl;
        if (bu == 0) {
            for (var i = 0, EM = []; i < this.Rp.length; ++i) {
                if (!bb.cU(this.Rp[i], "u-slg-" + eG[i] + "-gray"))EM.push(bdC[i])
            }
            this.dF(!0);
            bl = {id: this.kc, msg: this.hK.value.trim(), type: this.QZ(this.fL), picUrl: this.byT, snsTypes: EM.join(","), isPub: this.xt};
            if (this.byN > 0) {
                bl.actId = this.byN
            }
            var bfx = this.oo && this.oo.Mf();
            if (bfx && bfx.length) {
                bl.pics = bfx
            }
            this.bS.bFG(bl)
        } else {
            var rL = this.uG.Kg();
            if (rL.length <= 0) {
                this.dh("请至少选择一位好友");
                return
            }
            this.bS.bFE({data: {id: this.kc, msg: this.hK.value.trim(), type: this.QZ(this.fL), userIds: "[" + rL.join(",") + "]"}})
        }
    };
    bc.Rl = function (bu, bp) {
        this.dF(!1);
        this.cw();
        if (!this.bHZ) {
            bo.ci.bR({tip: "分享成功" + (bp.point > 0 ? ' 获得<em class="s-fc6">' + bp.point + "积分</em>" : ""), autoclose: true})
        }
        bj.bK(bo.ve, "sharesuccess", {isPrivate: bu, rid: this.kc, rtype: this.fL, data: bp.event});
        this.bK("onshare")
    };
    bc.jv = function (bp) {
        this.dF(!1);
        var cZ = "分享失败";
        if (bp.code) {
            switch (bp.code) {
                case 404:
                    cZ = "分享的资源不存在";
                    break;
                case 407:
                    cZ = "输入内容包含有关键字";
                    break;
                case 408:
                    cZ = "分享太快了，过会再分享吧";
                    break
            }
        }
        this.dh(cZ)
    };
    bc.lF = function () {
        this.oh = gA.sT(this.hK)
    };
    bc.dh = function (cZ) {
        this.eH(this.fO, cZ)
    };
    bc.dF = function (dI) {
        return this.eU(this.zh, dI, "分享", "分享中...")
    };
    bc.QZ = function (jR) {
        return bHG[jR] || ""
    };
    bc.bJl = function () {
        var fx, tH = this.QZ(this.fL);
        this.vO.style.display = "";
        if (this.kc <= 0) {
            this.vO.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.RO) {
                this.vO.style.display = "none";
                return
            }
            var QW = this.xt && this.fL != 24;
            fx = (RT[tH] ? RT[tH] + "：" : "") + this.RO + (bzf[tH] || " ") + (tH == "mv" || tH == "album" ? this.bdT || this.Hq : this.Hq);
            bb.fR(this.vO, "m-xwgt-share-infobar", {canChange: QW, info: fx});
            if (QW) {
                bb.bH(this.vO, "z-dis")
            } else {
                bb.bJ(this.vO, "z-dis")
            }
        }
    };
    bc.bJc = function () {
        var tH = this.QZ(this.fL), fx = (RT[tH] ? RT[tH] + "：" : "") + this.RO + (bzf[tH] || " ") + (tH == "mv" || tH == "album" ? this.bdT || this.Hq : this.Hq);
        QW = this.xt && this.fL != 24;
        bb.fR(this.vO, "m-xwgt-share-infobar", {canChange: QW, isPub: this.xt, info: fx})
    };
    bc.bJp = function () {
        var EQ = this.hK.value;
        if (this.xt) {
            if (!!this.bfd) {
                return!!EQ && !!EQ.length || !!this.oo && this.oo.Mf().length > 0
            } else {
                return this.kc > 0 || !!EQ && !!EQ.length || !!this.oo && this.oo.Mf().length > 0
            }
        } else {
            return!!EQ && !!EQ.length || !!this.oo && this.oo.Mf().length > 0
        }
    };
    bc.Ra = function () {
        if (!this.xt || this.zK.pubEventWithoutResource || this.kc > 0) {
            bb.bH(this.zh, "u-btn2-2-dis")
        } else {
            bb.bJ(this.zh, "u-btn2-2-dis")
        }
    };
    bc.byw = function (bfF) {
        if (bfF) {
            bb.bJ(this.zh, "u-btn2-2-dis")
        } else {
            this.Ra()
        }
    };
    bc.bzb = function (be) {
        be = be || {};
        be.stopped = true;
        if (this.bJp()) {
            bn.iu({title: "提示", message: "是否退出本次编辑？", btnok: "退出", action: function (cl) {
                if (cl == "ok") {
                    this.cw()
                }
            }.bi(this)})
        } else {
            this.cw()
        }
    };
    bc.CO = function (hJ, eN) {
        this.nX.xl(hJ, eN)
    };
    bc.bR = function () {
        var bJw = function (bw, bv) {
            var ds = "u-slg-" + eG[bv] + "-gray";
            !this.RK[bdC[bv]] ? bb.bJ(bw, ds) : bb.bH(bw, ds)
        };
        return function () {
            bO.bR.call(this);
            this.dh();
            this.dF(!1);
            this.xA.Xb(0);
            this.bs.style.display = "";
            this.hK.focus();
            this.hK.value = this.bHS || "";
            this.hK.placeholder = this.bHT || "";
            this.bJl();
            this.gv();
            this.uG.bFK();
            bm.cv(this.Rp, bJw, this);
            this.lF();
            if (this.xt) {
                this.pU.style.display = "none"
            } else {
                this.pU.style.display = ""
            }
            this.Ra()
        }
    }();
    bc.cw = function (be) {
        bO.cw.call(this);
        !!this.hG && this.hG.cw();
        if (this.uG) {
            this.uG.bW();
            delete this.uG
        }
        if (this.iI) {
            this.iI.bW();
            delete this.iI
        }
        if (this.oo) {
            this.oo.bW();
            delete this.oo
        }
        if (this.lK) {
            this.lK.bW();
            delete this.lK
        }
    };
    bn.sd = function (bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (bf.title === undefined) {
            bf.title = "分享"
        }
        if (bf.actId) {
            var bu = bHJ[bf.resourceType], eK = bf.resourceJson, hU;
            if (bm.gH(eK)) {
                try {
                    eK = JSON.parse(eK)
                } catch (e) {
                }
            }
            if (bu) {
                hU = bn.bvi(bu, eK);
                bf.name = hU.title;
                bf.author = hU.author;
                bf.picUrl = hU.picUrl;
                bf.type = bu;
                bf.rid = (eK || []).id
            }
        }
        bo.ve.bR(bf)
    };
    bI.gN.bF({element: bo.ve, event: ["sharesuccess"]})
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bA = bd("nej.j"), bo = bd("nm.l"), bT = bd("nm.w"), di = bd("nej.ui"), bq = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    bo.QU = NEJ.C();
    bc = bo.QU.bU(bo.fz);
    bO = bo.QU.dr;
    bc.dv = function () {
        this.dC()
    };
    bc.dm = function () {
        this.dw();
        var bk = bb.bP(this.bs, "j-flag");
        bj.bt(bk[0], "click", this.GG.bi(this))
    };
    bc.dx = function () {
        this.dy = "m-import-ok"
    };
    bc.cz = function (bf) {
        bf.parent = bf.parent || document.body;
        bf.title = "歌曲同步完成";
        this.cB(bf)
    };
    bc.cR = function () {
        this.cV()
    };
    bc.GG = function (be) {
        this.cw();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    bc.BR = function () {
        this.cw()
    };
    bc.bAi = function (be) {
        if (be.keyCode == 13)this.Bx()
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), ej = bd("nej.p"), bj = bd("nej.v"), bm = bd("nej.u"), bI = bd("nej.ut"), bA = bd("nej.j"), bq = bd("nm.d"), bn = bd("nm.x"), bQ = bd("nm.m"), bo = bd("nm.l"), bL = bd("nm.m.f"), bc, bO;
    bQ.ei = NEJ.C();
    bc = bQ.ei.bU(bI.fb);
    bc.cY = function () {
        var pT = !1;
        return function () {
            if (pT)return;
            pT = !0;
            this.df();
            if (top == self) {
                return
            }
            this.xz = bb.bG("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bxR()
            }
            bI.gN.bF({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.dq([
                [window, "scroll", this.ER.bi(this)],
                [document, "keyup", this.bJz.bi(this)],
                [document.body, "click", this.rf.bi(this)],
                [document, "mouseup", this.bJC.bi(this)],
                [this.xz, "click", this.bfT.bi(this)],
                [bq.xM, "message", this.sW.bi(this)]
            ]);
            bn.bFR(document.body);
            this.ER();
            if (this.ET !== false && typeof GUser !== "undefined" && GUser.userId > 0)bq.xM.iE().xP();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (ej.ek.browser == "ie" && parseInt(ej.ek.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐 听见好时光"
                } else {
                    var hb = top.player.getPlaying();
                    if (hb && hb.track && hb.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hb.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.wu.bi(this);
            this.kF = bq.kQ.bF();
            window.log = this.sy.bi(this);
            var rS = location.search;
            if (rS) {
                var cN = rS.substr(rS.indexOf("?") + 1), gR = bm.iO(cN);
                if (gR && gR["_hash"])location.hash = gR["_hash"]
            }
        }
    }();
    bc.bJz = function (be) {
        var bh = bj.bY(be);
        try {
            if (be.keyCode == 80 && bn.buB() || ["textarea", "input"].indexOf(bh.tagName.toLowerCase()) >= 0)return;
            bj.bK(top.document, "keyup", {ctrlKey: be.ctrlKey, keyCode: be.keyCode})
        } catch (e) {
        }
    };
    bc.rf = function (be) {
        var bh = bj.bY(be);
        if (bh && bh.tagName == "INPUT")return;
        var bh = bj.bY(be, "d:pid");
        if (bh) {
            bj.dp(be);
            var oy = bb.bz(bh, "pid"), xX = bb.bz(bh, "ptype"), cl = bb.bz(bh, "action") || "play";
            switch (cl) {
                case"subscribe":
                    bn.lP({tracks: [oy]});
                    break
            }
        }
        bh = bj.bY(be, "d:resAction");
        if (bh && bh.className.indexOf("-dis") == -1) {
            var dO = bb.bz(bh, "resId"), bu = bb.bz(bh, "resType"), eO = bb.bz(bh, "resFrom"), bl = bb.bz(bh, "resData"), cl = bb.bz(bh, "resAction"), Zv = bb.bz(bh, "resCopyright");
            if (cl != "log" && cl != "bilog")bj.dp(be);
            switch (cl) {
                case"log":
                    bl = (bl || "").split("|");
                    if (!!bl[0]) {
                        var cj = {id: dO, alg: bl[2] || "itembased", scene: bl[3], position: bl[1] || 0};
                        if (!!bl[4])cj.srcid = bl[4];
                        window.log(bl[0], cj)
                    }
                    break;
                case"bilog":
                    var bJG = bb.bz(bh, "logAction"), bJH = bb.bz(bh, "logJson");
                    window.log(bJG, bJH);
                    break;
                case"share":
                    share(dO, bu, bb.bz(bh, "resPic"), bb.bz(bh, "resName"), bb.bz(bh, "resAuthor"), bb.bz(bh, "resAuthors"));
                    break;
                case"fav":
                case"subscribe":
                    if (bu == 18) {
                        var ps = bb.bz(bh, "resLevel"), qX = bb.bz(bh, "resFee");
                        if (ps == 10) {
                            bn.sK(qX, dO, "song");
                            break
                        }
                        bn.lP({tracks: [dO]})
                    }
                    break;
                case"download":
                    bn.NW({id: dO, type: bu});
                    break
            }
        }
        if (top == self)return;
        try {
            top.onIframeClick(be)
        } catch (e) {
        }
    };
    bc.bJC = function (be) {
        try {
            bj.bK(top.document, "mouseup")
        } catch (e) {
        }
    };
    bc.ER = function () {
        var bJK = function () {
            var en = window.innerHeight;
            if (!bm.uu(en))en = (document.documentElement || document.body).clientHeight;
            return en
        };
        return function (be) {
            if (!this.xz)return;
            var QK = bJK(), jB = document.documentElement.scrollTop || document.body.scrollTop;
            bb.ch(this.xz, "display", jB > 0 ? "" : "none");
            if (ej.ek.browser == "ie" && ej.ek.version < "7.0") {
                var hs = Math.min(document.body.clientHeight, QK + jB) - 204;
                bb.ch(this.xz, "top", hs + "px")
            }
        }
    }();
    bc.bfT = function (be) {
        bj.dp(be);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    bc.wu = function () {
        var bJL = function (be) {
            bj.bK(window, "share", be)
        };
        return function (dO, bu, IC, bX, bgm, bgn) {
            bn.sd({rid: dO, type: bu, purl: IC, name: bX, author: bgm, authors: bgn, onshare: bJL.bi(this)})
        }
    }();
    bc.sy = function (cl, cj) {
        try {
            top.log(cl, cj)
        } catch (e) {
            switch (cl) {
                case"play":
                    this.kF.hj(cj);
                    break;
                case"search":
                    this.kF.bsH(cj);
                    break;
                default:
                    this.kF.mW(cl, cj)
            }
        }
    };
    bc.bxR = function () {
        var QJ, bgq = false, cH = [45, 60];
        var bJR = function (cZ) {
            if (cZ.title != "MailBoxImport")return;
            var bV = JSON.parse(cZ.content || "null") || cg;
            if (bV.status == 10) {
                bo.QU.bF().bR();
                window.clearTimeout(QJ)
            }
        };
        var su = function (be) {
            if (be.code == 200) {
                if (be.status == 1) {
                    bj.bt(bq.yH, "message", bJR.bi(this));
                    bq.yH.bF().bbL();
                    bgq = true
                } else {
                    if (bgq) {
                        if (be.status == 10) {
                            bo.QU.bF().bR();
                            bj.ky(bq.yH, "message");
                            window.clearTimeout(QJ);
                            bgq = false
                        }
                    } else {
                        window.clearTimeout(QJ)
                    }
                }
            }
        };
        return function () {
            var wz = cH.shift() * 1e3;
            bA.cG("/api/musicbox/mail/status", {type: "json", method: "get", onload: su.bi(this)});
            if (wz) {
                QJ = window.setTimeout(arguments.callee, wz)
            }
        }
    }();
    bc.sW = function (be) {
        try {
            top.polling(be)
        } catch (e) {
        }
    }
})()