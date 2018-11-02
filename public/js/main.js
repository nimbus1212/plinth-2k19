$(document).ready(function () {
    setTimeout(function () {
        $('.divDelay').fadeIn(500);
    }, 3000);
});
;; /*main.js*/
var isMob, controls;

function mediaQueries(e, t, i) {
    var n = function (e) {
        e.matches ? t() : i()
    };
    mql = window.matchMedia("all and (max-width: " + e + "px)"), n(mql), mql.addListener(n)
}
$(function () {
    document.body.classList.add("page-main"), (isMob = function () {
        var e, t = (e = navigator.userAgent || navigator.vendor || window.opera, !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))));
        return t && $("body").addClass("mob"), t
    })();
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && $("body").addClass("ios");
    var n, o;
    !!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) && $("body").addClass("osx"), !1 === function () {
        var e = window.navigator.userAgent,
            t = e.indexOf("MSIE ");
        if (0 < t) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
        if (0 < e.indexOf("Trident/")) {
            var i = e.indexOf("rv:");
            return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10)
        }
        var n = e.indexOf("Edge/");
        if (0 < n) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
        return !1
    }() ? $("body").removeClass("ie") : $("body").addClass("ie"), $(".hamburger, .menu-list-item").click(function () {
        if ($(this).hasClass("menu-list-item")) {
            var e = $(this).find("a").attr("href");
            if ("" === e[0] && (e = e.slice(1)), 0 !== $(e).length) {
                event.preventDefault();
                var t = $(e).offset().top + parseInt($(e).css("padding-top"));
                $("html, body").animate({
                    scrollTop: t - 5
                }, 1e3)
            } else event.preventDefault(), $("#sections, .footer").toggleClass("is-hidden"), TweenMax.to(controls, .4, {
                tube: 40,
                ease: Power2.easeInOut,
                onUpdate: function () {
                    controls.redraw()
                },
                onComplete: function () {
                    setTimeout(function () {
                        $(".page-main").addClass("leave")
                    }, 400), TweenMax.to(controls, 1, {
                        tube: .1,
                        radius: .1,
                        ease: Power4.easeInOut,
                        onUpdate: function () {
                            controls.redraw()
                        }
                    })
                }
            }), setTimeout(function () {
                window.location = e
            }, 1800)
        }
        $(".menu, .hamburger, #webgl-output").toggleClass("is-active"), $("#sections, .footer").toggleClass("is-hidden"), isMob() || ($(".hamburger").hasClass("is-active") ? (controls.prestart(), (new TimelineMax).to(".fixed-nav", .2, {
            opacity: 0,
            "pointer-events": "none"
        })) : (controls.prestartReverse(), (new TimelineMax).to(".fixed-nav", .2, {
            opacity: 1,
            "pointer-events": "auto"
        })), (new TimelineMax).staggerTo(".menu-list-item .letter", .4, {
            x: "0%",
            opacity: 1
        }, .025))
    }), $("a[href]").on("click", function (e) {
        if (1 === $(this).parents("#panel").length) return !1;
        var t = $(this).attr("href");
        if ("" === t[0] && (t = t.slice(1)), 0 !== $(t).length) {
            e.preventDefault();
            var i = $(t).offset().top + parseInt($(t).css("padding-top"));
            $("html, body").animate({
                scrollTop: i - 5
            }, 1e3)
        } else e.preventDefault(), $("#sections, .footer").toggleClass("is-hidden"), TweenMax.to(controls, .4, {
            tube: 40,
            ease: Power2.easeInOut,
            onUpdate: function () {
                controls.redraw()
            },
            onComplete: function () {
                setTimeout(function () {
                    $(".page-main").addClass("leave")
                }, 400), TweenMax.to(controls, 1, {
                    tube: .1,
                    radius: .1,
                    ease: Power4.easeInOut,
                    onUpdate: function () {
                        controls.redraw()
                    }
                })
            }
        }), setTimeout(function () {
            window.location = t
        }, 1800)
    }), $(window).on("scroll", function () {
        window.pageYOffset > $(".section-main").height() ? $(".fixed-logo").addClass("is-visible") : $(".fixed-logo").removeClass("is-visible")
    }), $(window).on("scroll", function () {
        window.pageYOffset > $(".section-main").height() / 2 ? $(".bg-mask").addClass("is-visible") : $(".bg-mask").removeClass("is-visible")
    }), n = !0, o = 100, $(".news-btn-prev").on("click", function () {
        var e = new TimelineMax,
            t = Power2.easeInOut;
        n = !0, o = 100, e.staggerTo(".news__img", .4, {
            ease: t,
            x: "0%"
        }, .05).to(".news__header", .4, {
            ease: t,
            y: "0%"
        }, "-=0.4").to(".news__content", .4, {
            ease: t,
            y: "0%"
        }, "-=0.4")
    }), $(".news-btn-next").on("click", function () {
        var e = new TimelineMax,
            t = Power2.easeInOut,
            i = $(".news__img:last");
        if (0 < $(window).width() - (i.offset().left + i.outerWidth())) return !1;
        n ? e.to(".news__header", .4, {
            ease: t,
            y: "-200%"
        }, "sync").to(".news__content", .4, {
            ease: t,
            y: "140%"
        }, "sync").staggerTo(".news__img", .4, {
            ease: t,
            x: "-126%",
            onComplete: function () {
                n = !1
            }
        }, .05, "-=0.4") : (e.staggerTo(".news__img", .4, {
            ease: t,
            x: "-" + (126 + o) + "%"
        }, .05), o += 80)
    }), $(".main__btn").on("click", function () {
        var e = "#request",
            t = $(e).offset().top + parseInt($(e).css("padding-top"));
        $("html, body").animate({
            scrollTop: t
        }, 1e3)
    }), $(".prize-header").height($(".prize-header").height() - $(".prize-header__text").height()), $(".versus__header .section-header--up").hide();
    var e = function () {
        var e = $(".main__header").outerWidth();
        $(".main__year").width(e);
        var t = $(".cover--stages .cover__inner").offset().top,
            i = $(".prize:first").offset().left;
        $(".cover--stages .cover__inner").offset({
            top: t,
            left: i
        });
        var n = $(".news").offset().top,
            o = +$(".example-wrap").css("padding-left").split("px")[0],
            s = $(".example").offset().left - o;
        $(".news").offset({
            top: n,
            left: s
        });
        var a = $(".header__logo").offset().left;
        $(".fixed-nav").offset({
            top: "50%",
            left: a
        });
        var r = $("#chat .fluid--px").offset().top;
        $(".int-canvas-wrap--chat").offset({
            top: r,
            left: 0
        });
        var A = $(".news-buttons").offset().top,
            g = $(".news__images").offset().left;
        g > window.innerWidth && (g -= $(".news__images").outerWidth()), $(".news-buttons").offset({
            top: A,
            left: g
        }), $(".hud-timer__inner").width($(".hud__deadline-date").width())
    };
    e(), $(window).on("resize", e), $(function () {
        $(".request__input, .request__textarea").on("focus", function () {
            $(".request__input, .request__textarea").each(function (e, t) {
                0 === $(t).val().length && $(t).parent().removeClass("clicked")
            }), $(this).parent().addClass("clicked")
        })
    })
}), $(function () {
    (function e() {
        var t = new Date,
            i = $("#hidden_date_final").val(),
            n = new Date(i.replace(" ", "T")),
            o = new Date(n);

        function s(e, t) {
            this.days = null, this.hours = null, this.minutes = null, this.seconds = null, this.date1 = e, this.date2 = t, this.init()
        }
        s.prototype.init = function () {
            var e = new function (e) {
                var t, i, n, o;
                o = Math.floor(e / 1e3), n = Math.floor(o / 60), o %= 60, i = Math.floor(n / 60), n %= 60, t = Math.floor(i / 24), i %= 24, this.days = t, this.hours = i, this.minutes = n, this.seconds = o
            }(this.date1 - this.date2);
            this.days = e.days, this.hours = e.hours, this.minutes = e.minutes, this.seconds = e.seconds
        }, Date.diff = function (e, t) {
            return new s(e, t)
        }, Date.prototype.diff = function (e) {
            return new s(this, e)
        };
        var a = Date.diff(o, t);
        $(".hud-timer__cell--days span").text(a.days), $(".hud-timer__cell--hours span").text(a.hours), $(".hud-timer__cell--mins span").text(a.minutes), window.setTimeout(function () {
            e()
        }, 6e4)
    })()
}), 
// $(function () {
//     if (!isMob()) {
//         var o, e = "!<>-_\\/[]{}вЂ”=+*^?#________",
//             t = $(".text-code-hover-feel");

//         function s(e, t) {
//             for (var i = "", n = "!<>-_\\/[]{}вЂ”=+*^?#________" + e, o = 0; o < t; o++) i += n.charAt(Math.floor(Math.random() * n.length));
//             return i
//         }
//         t.each(function (e, t) {
//             $(t).attr("data-text-scramble-original", $(t).text())
//         }), $(".header__nav li").each(function (e, t) {
//             0 !== $(t).width() && ($(t).width($(t).width()), $(t).height($(t).height()), $(t).find("span").width($(t).width()))
//         }), $(".example__link").each(function (e, t) {
//             0 !== $(t).width() && ($(t).width($(t).width()), $(t).height($(t).height()))
//         }), extrachars = t.text(), $(".header__nav li").mouseenter(function () {
//             var e = $(this).find("a"),
//                 t = e.text().length,
//                 i = 1;

//             function n() {
//                 e.text(s(extrachars, t))
//             }
//             n(), o = setInterval(function () {
//                 if (2 < i) return e.text(e.attr("data-text-scramble-original")), clearInterval(o), !1;
//                 n(), i++
//             }, 150)
//         }).mouseleave(function () {
//             var e = $(this).find("a");
//             $(e).text($(e).attr("data-text-scramble-original")), clearInterval(o)
//         }), $(".example__link").mouseenter(function () {
//             var e = $(this),
//                 t = e.text().length,
//                 i = 1;

//             function n() {
//                 e.text(s(extrachars, t))
//             }
//             n(), o = setInterval(function () {
//                 if (2 < i) return e.text(e.attr("data-text-scramble-original")), clearInterval(o), !1;
//                 n(), i++
//             }, 150)
//         }).mouseleave(function () {
//             var e = $(this);
//             $(e).text($(e).attr("data-text-scramble-original")), clearInterval(o)
//         });
//         var n = A(t.text()),
//             a = A(e);
//         for (i = 0; i < n; i++) g(n), r(e, g(a));

//         function r(e, t) {
//             return e.charAt(t + 1)
//         }

//         function A(e) {
//             return e.length
//         }

//         function g(e) {
//             return Math.floor(Math.random() * e) + 1
//         }
//         r(e, g(a))
//     }
// }), 
$(function () {
    var a = new THREE.Scene;
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1e3);
    var t = new THREE.WebGLRenderer({
        alpha: !0
    });
    t.setClearColor(0, 0), t.setSize(window.innerWidth, window.innerHeight), t.shadowMapEnabled = !0, $(window).on("resize", function () {
        t.setSize(window.innerWidth, window.innerHeight), camera.aspect = window.innerWidth / window.innerHeight, camera.updateProjectionMatrix()
    }), camera.position.x = -60, camera.position.y = 60, camera.position.z = 60, camera.lookAt(new THREE.Vector3(0, 0, 0)), $("#webgl-output").append(t.domElement);
    var r, e, i = 0;
    (controls = new function () {
        this.radius = 1, this.tube = 1, this.radialSegments = 350, isMob() ? this.radialSegments = 300 : this.radialSegments = 350, this.tubularSegments = 12, this.p = 5, this.q = 4, this.heightScale = 4, this.asParticles = !0, this.rotate = !0;
        Power3.easeInOut;
        this.redraw = function () {
            r && a.remove(r);
            var e, t, i, n, o, s = new THREE.TorusKnotGeometry(controls.radius, controls.tube, Math.round(controls.radialSegments), Math.round(controls.tubularSegments), Math.round(controls.p), Math.round(controls.q), controls.heightScale);
            controls.asParticles ? (i = s, n = new THREE.ParticleBasicMaterial({
                color: 16777215,
                size: .5,
                transparent: !0,
                blending: THREE.AdditiveBlending,
                map: function () {
                    var e = document.createElement("canvas");
                    e.width = 16, e.height = 16;
                    var t = e.getContext("2d"),
                        i = t.createRadialGradient(e.width / 2, e.height / 2, 0, e.width / 2, e.height / 2, e.width / 2);
                    i.addColorStop(1, "rgba(58,54,197,1)"), i.addColorStop(1, "rgba(0,0,0,0)"), t.fillStyle = i, t.fillRect(0, 0, e.width, e.height);
                    var n = new THREE.Texture(e);
                    return n.needsUpdate = !0, n
                }()
            }), (o = new THREE.ParticleSystem(i, n)).sortParticles = !0, r = o) : (e = s, (t = new THREE.MeshNormalMaterial({})).side = THREE.DoubleSide, r = THREE.SceneUtils.createMultiMaterialObject(e, [t])), a.add(r)
        }, this.start = function () {
            controls.tube;
            if (controls.radius = 1, isMob())(new TimelineMax).to(controls, 3, {
                tube: 30,
                ease: Power4.easeOut,
                onUpdate: function () {
                    controls.redraw()
                }
            });
            else {
                $(".menu-list-item a, .section-header--up, .main__year span, .main__header, .section-header, .news__header").css("opacity", 1), $(".menu-list-item a, .section-header--up, .main__year span, .main__header, .section-header, .cover__header, .news__header").addClass("js-splitme"), document.querySelectorAll(".js-splitme").forEach(function (e) {
                        e.outerHTML = Splitter(e.outerHTML, '<span class="letter">$</span>')
                    }),
                    function () {
                        var n = new ScrollMagic.Controller({
                            globalSceneOptions: {
                                triggerHook: "onLeave"
                            }
                        });
                        $(".section").each(function(t, e) {
                            var i = $(e);
                            new ScrollMagic.Scene({
                                offset: i.offset().top - $(".section-padding").height() - 400,
                                triggerHook: "onEnter",
                                duration: i.height()
                            }).on("enter", function() {
                                Power3.easeInOut;
                                var e = function() {
                                    $(".hamburger").addClass("is-visible")
                                };
                                switch ($(".fixed-nav__list-item").removeClass("active"), $(".fixed-nav__list-item:eq(" + t + ")").addClass("active"), 0 !== t && (e(), $(".section").addClass("darken")), 6 !== t && ($(".fixed-logo .header__logo").html('<img class="rimg" src="../media/logo.svg" alt="Plinth">'), $(".fixed-nav, .hamburger").removeClass("dark")), t) {
                                    case 0:
                                        controls.prestart(), mediaQueries(1059, e, function() {
                                            $(".hamburger").removeClass("is-visible")
                                        }), $(".section").removeClass("darken")
                                }
                            }).addTo(n)
                        }), $(".section-main"), new ScrollMagic.Scene({
                            triggerElement: ".section-about",
                            triggerHook: "onEnter",
                            offset: -($(".section-about").outerHeight() - 200)
                        }).on("enter leave", function (e) {
                            "enter" === e.type ? TweenMax.to(controls, 1.5, {
                                radius: 14,
                                onUpdate: function () {
                                    controls.redraw()
                                },
                                ease: Power3.easeInOut
                            }) : controls.prestart()
                        }).addTo(n);
                        var e = document.querySelectorAll(".section-header");
                        $(e).each(function (e, t) {
                            var i = $(t).closest(".section");
                            new ScrollMagic.Scene({
                                offset: i.offset().top - window.innerHeight / 1.55,
                                triggerHook: "onEnter"
                            }).on("enter", function () {
                                (new TimelineMax).staggerTo(i.find(".section-header .letter"), .5, {
                                    x: "0%",
                                    opacity: 1,
                                    onComplete: function () {
                                        $(i).hasClass("section-prize") || i.find(".section-header").addClass("header-glitch")
                                    }
                                }, .025).staggerTo(i.find(".section-header--up .letter"), .8, {
                                    x: "0%",
                                    opacity: 1
                                }, .05, "-=0.8").to(i.find(".section-description"), .6, {
                                    ease: Power1.easeInOut,
                                    y: "0%",
                                    opacity: 1
                                }, "-=1")
                            }).addTo(n)
                        }), isMob() || $(".example-wrap").each(function (e, t) {
                            new ScrollMagic.Scene({
                                triggerElement: t,
                                triggerHook: "onEnter",
                                offset: -window.innerHeight / 1.5
                            }).setTween((new TimelineMax).fromTo($(t).find(".example"), 1, {
                                y: "15%"
                            }, {
                                y: "0%"
                            }, "sync").to(t, 1, {
                                y: "-10%"
                            }, "sync")).addTo(n)
                        });
                        isMob() || (new ScrollMagic.Scene({
                            triggerElement: ".cover-wrap--stages",
                            triggerHook: "onEnter",
                            offset: -window.innerHeight / 1.5
                        }).setTween((new TimelineMax).fromTo(".cover--stages", 1, {
                            y: "15%"
                        }, {
                            y: "0%"
                        }, "sync").to(".cover-wrap--stages", 1, {
                            y: "-10%"
                        }, "sync")).addTo(n), new ScrollMagic.Scene({
                            triggerElement: ".cover-wrap--voting",
                            triggerHook: "onEnter",
                            offset: -window.innerHeight / 1.5
                        }).setTween((new TimelineMax).fromTo(".cover--voting", 1, {
                            y: "15%"
                        }, {
                            y: "0%"
                        }, "sync").to(".cover-wrap--voting", 1, {
                            y: "-10%"
                        }, "sync")).addTo(n));
                        setTimeout(function () {
                            $(".cover__header").each(function (e, t) {
                                new ScrollMagic.Scene({
                                    triggerElement: t.parentNode,
                                    triggerHook: "onEnter",
                                    offset: -window.innerHeight
                                }).on("enter", function () {
                                    (new TimelineMax).staggerTo($(t).find(".letter"), .5, {
                                        x: "0%",
                                        opacity: 1
                                    }, .025).staggerFromTo($(t).parent().find(".list__item"), .5, {
                                        ease: Power1.easeInOut,
                                        y: "60%",
                                        opacity: 0
                                    }, {
                                        ease: Power1.easeInOut,
                                        y: "0%",
                                        opacity: 1
                                    }, .1, "-=0.7")
                                }).addTo(n)
                            })
                        }, 200);
                        var t = (new TimelineMax).staggerTo(".prize__ring", 2, {
                            opacity: 1,
                            onStart: function () {
                                this.target.classList.add("anim");
                                var e = $(this.target.parentNode);
                                (new TimelineMax).to(e.find(".prize__eth"), .4, {
                                    y: "0%",
                                    opacity: 1
                                }).to(e.find(".prize__rub"), .4, {
                                    y: "0%",
                                    opacity: 1
                                })
                            }
                        }, .1);
                        new ScrollMagic.Scene({
                            triggerElement: ".prizes",
                            triggerHook: "onEnter",
                            offset: -(window.innerHeight - 100)
                        }).setTween(t).addTo(n);
                        var i = $(".news").closest(".section");
                        new ScrollMagic.Scene({
                            offset: -window.innerHeight / 1.2,
                            triggerElement: ".news",
                            triggerHook: "onEnter"
                        }).on("enter", function () {
                            (new TimelineMax).staggerTo(i.find(".news__header .letter"), .5, {
                                x: "0%",
                                opacity: 1,
                                onComplete: function () {
                                    $(".news__header").addClass("header-glitch")
                                }
                            }, .025).to(i.find(".news__desc"), .9, {
                                ease: Power1.easeInOut,
                                y: "0%",
                                opacity: 1
                            }, "-=1").to(".news__images", 1.4, {
                                ease: Power1.easeInOut,
                                x: "0%"
                            }, "-=1.5").to(".news-buttons", 1, {
                                ease: Power1.easeInOut,
                                opacity: 1
                            }, "-=0.8")
                        }).addTo(n)
                    }();
                (new TimelineMax).to(controls, 3, {
                    tube: 35,
                    ease: Power4.easeOut,
                    onUpdate: function () {
                        controls.redraw()
                    }
                }).staggerTo(".main__header .letter", 1, {
                    x: "0%",
                    opacity: 1
                }, .05, "-=2.4").staggerTo(".main__year .letter", 1, {
                    x: "0%",
                    opacity: 1,
                    onComplete: function () {
                        $(".main__year, .prize-header").addClass("header-glitch")
                    }
                }, .05, "-=2").to(".main__desc", .8, {
                    ease: Power1.easeInOut,
                    y: "0%",
                    opacity: 1
                }, "-=1.8").to(".main__btn", .8, {
                    ease: Power1.easeInOut,
                    y: "0%",
                    opacity: 1
                }, "-=1.4").fromTo(".header", 1.4, {
                    y: "-100%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    ease: Power2.easeInOut
                }, "-=1.8").to(".fixed-nav", 1.4, {
                    x: "0%",
                    opacity: 1,
                    ease: Power2.easeInOut
                }, "-=1.6").fromTo(".section-main .hud-bottom", .6, {
                    y: "100%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1
                }, "-=0.9").fromTo(".section-main .hud-timer", .6, {
                    y: "200%",
                    opacity: 0
                }, {
                    y: "120%",
                    opacity: 1
                }, "-=0.8")
            }
        }, this.prestart = function () {
            TweenMax.to(controls, 1.8, {
                radius: 1,
                ease: Power2.easeOut,
                onUpdate: function () {
                    controls.redraw()
                }
            })
        }, this.prestartReverse = function () {
            TweenMax.to(controls, 1.8, {
                radius: 20,
                ease: Power2.easeOut,
                onUpdate: function () {
                    controls.redraw()
                }
            })
        }
    }).rend = function e() {
        controls.rotate && (r.rotation.y = i += .001);
        TweenMax.ticker.addEventListener("tick", e);
        t.render(a, camera)
    }, isMob() && (e = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    }), $(".section-main"), new ScrollMagic.Scene({
        triggerElement: ".section-about",
        triggerHook: "onEnter",
        offset: -($(".section-about").outerHeight() - 300)
    }).on("enter leave", function (e) {
        "enter" === e.type ? TweenMax.to(controls, 1.5, {
            radius: 14,
            onUpdate: function () {
                controls.redraw()
            },
            ease: Power3.easeInOut
        }) : controls.prestart()
    }).addTo(e))
}), $(function () {
    var i = function () {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function (e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
    }();

    function s(e) {
        return function () {
            var r = e.apply(this, arguments);
            return new Promise(function (s, a) {
                return function t(e, i) {
                    try {
                        var n = r[e](i),
                            o = n.value
                    } catch (e) {
                        return void a(e)
                    }
                    if (!n.done) return Promise.resolve(o).then(function (e) {
                        t("next", e)
                    }, function (e) {
                        t("throw", e)
                    });
                    s(o)
                }("next")
            })
        }
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var e = function (e) {
        function o(e) {
            var t, i = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, o);
            var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, {
                autoStart: !1,
                autoResize: !0,
                transparent: !0
            }));
            return n.resize = o.debounce(s(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            n.setSize() && (n.container.removeChildren(0, n.container.children.length - 1), n.addGraphics(), n.createTimeLine(), n.render());
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }, e, i)
            })), n, 100), n.options = Object.assign({}, {
                backgroundColor: 4748748,
                backgroundAlpha: 1,
                polygon: "0, 0, 0, 0",
                borderColor: 4748748,
                borderWidth: 0,
                wavesAlpha: 1,
                displacementScale: {
                    x: 30,
                    y: 50
                },
                displacementMap: "../media/displace-map.jpg"
            }, e), n.polygon = n.options.polygon.replace(/\s/g, "").split(",").map(function (e) {
                var t = 0 | e;
                return t > n.options.borderWidth ? t - n.options.borderWidth / 2 : t
            }), n.offset = 20, n.animate = !1, t = n.createCanvas(), a(n, t)
        }
        var t;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(o, PIXI.Application), i(o, [{
            key: "createCanvas",
            value: (t = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            this.options.element.classList.add("noise-container"), this.view.classList.add("noise-canvas"), this.options.element.appendChild(this.view), this.container = new PIXI.Container, this.stage.addChild(this.container), e.next = 7;
                        case 7:
                            t = e.sent, this.waves = new PIXI.Sprite(t), this.noiseSprite = PIXI.Sprite.fromImage(this.options.displacementMap), this.setSize(), this.addGraphics(), this.bindEvents(), this.render(), $(this.options.element).hasClass("main__btn") || this.options.element.classList.add("canvas-ready");
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            })), function () {
                return t.apply(this, arguments)
            })
        }, {
            key: "addGraphics",
            value: function () {
                this.container.addChild(this.getPolygon(!0)), this.options.waves && this.drawWaves();
                var e = new PIXI.Graphics;
                e.beginFill(0, 0), e.drawRect(0, 0, this.width, this.width), this.container.addChild(e), this.container.addChild(this.getPolygon()), this.setMask(), this.addFilter()
            }
        }, {
            key: "setMask",
            value: function () {
                var e = this.getPolygon();
                this.stage.addChild(e), this.container.mask = e
            }
        }, {
            key: "drawWaves",
            value: function () {
                this.waves.alpha = 1 - this.options.wavesAlpha, this.waves.y = this.height * this.options.wavesPos.y, this.container.addChild(this.waves), this.waves.width = this.waves.height = this.width
            }
        }, {
            key: "setSize",
            value: function () {
                var e = this.options.element.offsetWidth,
                    t = this.options.element.offsetHeight;
                return this.width = e + 2 * this.offset, this.height = t + 2 * this.offset, this.oldWidth !== this.width && (this.renderer.resize(this.width, this.height), this.oldWidth = this.width, !0)
            }
        }, {
            key: "loadTexture",
            value: function (t) {
                return new Promise(function (i) {
                    var e = new PIXI.loaders.Loader;
                    e.add("waves", t), e.load(function (e, t) {
                        return i(t.waves.texture)
                    })
                })
            }
        }, {
            key: "addFilter",
            value: function () {
                this.container.addChild(this.noiseSprite), this.noiseFilter = new PIXI.filters.DisplacementFilter(this.noiseSprite), this.container.filters = [this.noiseFilter], this.noiseSprite.position.x = -this.width, this.noiseSprite.width = 3 * this.width, this.noiseFilter.scale.x = 0, this.noiseFilter.scale.y = 0
            }
        }, {
            key: "createTimeLine",
            value: function () {
                var e = this;
                this.timeline = new TimelineMax({
                    onUpdate: this.render.bind(this),
                    paused: !0,
                    onStart: function () {
                        return e.animate = !0
                    },
                    onComplete: function () {
                        return e.animate = !1
                    }
                }).to(this.noiseFilter.scale, .2, {
                    x: this.options.displacementScale.x,
                    y: this.options.displacementScale.y
                }).fromTo(this.noiseSprite, .5, {
                    x: -.66 * this.noiseSprite.width
                }, {
                    x: 0
                }, "-=.2").to(this.noiseFilter.scale, .2, {
                    x: 0,
                    y: 0
                }, "-=.2")
            }
        }, {
            key: "play",
            value: function () {
                this.animate || this.timeline.play(0)
            }
        }, {
            key: "bindEvents",
            value: function () {
                this.createTimeLine(), this.options.element.addEventListener("mouseenter", this.play.bind(this))
            }
        }, {
            key: "getPolygon",
            value: function (e) {
                var t = this.polygon,
                    i = new PIXI.Graphics,
                    n = this.width - 2 * this.offset - this.options.borderWidth,
                    o = this.height - 2 * this.offset - this.options.borderWidth;
                i.position.x = this.offset + this.options.borderWidth / 2, i.position.y = this.offset + this.options.borderWidth / 2;
                var s = [
                    [0, t[0]],
                    [t[0], 0],
                    [n - t[1], 0],
                    [n, t[1]],
                    [n, o - t[2]],
                    [n - t[2], o],
                    [t[3], o],
                    [0, o - t[3]],
                    [0, t[0]]
                ];
                i.lineStyle(this.options.borderWidth, this.options.borderColor), i.beginFill(this.options.backgroundColor, e ? 1 - this.options.backgroundAlpha : 0);
                for (var a = 0, r = []; a < s.length; a++) r.length && r[0] === s[a][0] && r[1] === s[a][1] || (0 !== a ? (r = s[a], i.lineTo(s[a][0], s[a][1])) : (i.moveTo(s[a][0], s[a][1]), r = s[a]));
                return i.endFill(), i
            }
        }], [{
            key: "debounce",
            value: function (i, n, o, s) {
                var a = arguments,
                    r = void 0;
                return function () {
                    var e = a,
                        t = s && !r;
                    clearTimeout(r), r = setTimeout(function () {
                        r = null, s || i.apply(n, e)
                    }, o), t && i.apply(n, e)
                }
            }
        }]), o
    }();
    new e({
        element: document.querySelector(".main__btn"),
        polygon: "23, 0, 23, 0",
        wavesPos: {
            y: 0,
            x: 0
        },
        borderWidth: 2,
        borderColor: "0xb836c6",
        backgroundAlpha: 1,
        wavesAlpha: .8,
        waves: "../img/ex/ex1.jpg",
        displacementMap: "../media/displace-map.jpg"
    }), new e({
        element: document.querySelector(".chat__btn--tg"),
        polygon: "20, 0, 20, 0",
        wavesPos: {
            y: 0,
            x: 0
        },
        borderWidth: 2,
        borderColor: "0xb836c6",
        backgroundAlpha: 1,
        wavesAlpha: .8,
        displacementMap: "../media/displace-map.jpg"
    }), new e({
        element: document.querySelector(".chat__btn--slack"),
        polygon: "20, 0, 20, 0",
        wavesPos: {
            y: 0,
            x: 0
        },
        borderWidth: 2,
        borderColor: "0xb836c6",
        backgroundAlpha: 1,
        wavesAlpha: .8,
        displacementMap: "../media/displace-map.jpg"
    }), new e({
        element: document.querySelector(".request__btn"),
        polygon: "20, 0, 20, 0",
        wavesPos: {
            y: 0,
            x: 0
        },
        borderWidth: 2,
        borderColor: "0xc5c5c5",
        backgroundAlpha: 1,
        wavesAlpha: .8,
        displacementMap: "../media/displace-map.jpg"
    }), new e({
        element: document.querySelector(".request__form-btn"),
        polygon: "20, 0, 20, 0",
        wavesPos: {
            y: 0,
            x: 0
        },
        borderWidth: 2,
        borderColor: "0xb836c6",
        backgroundAlpha: 1,
        wavesAlpha: .8,
        displacementMap: "../media/displace-map.jpg"
    })
}), $(function () {
    if (!isMob()) {
        var e = $(".example-wrap");
        TweenMax.set([e], {
            transformStyle: "preserve-3d"
        }), e.mousemove(function (e) {
            var t = $(this),
                i = e.pageX / t.width() * 100 - 100,
                n = (e.pageY - $(this).offset().top) / t.height() * 100 - 100;
            TweenMax.to(t, 2, {
                rotationY: .03 * i,
                rotationX: -.03 * n,
                transformPerspective: 500,
                transformOrigin: "center center -400",
                ease: Expo.easeOut
            })
        })
    }
}), $(function () {
    function e(e) {
        this.density = e.density, this.drawDistance = 28, this.baseRadius = 2, this.maxLineThickness = 1, this.reactionSensitivity = 2, this.lineThickness = 1, this.points = [], this.mouse = {
            x: -1e3,
            y: -1e3,
            down: !1
        }, this.animation = null, this.canvas = e.canvas, this.context = null, this.imageInput = null, this.bgImage = null, this.bgCanvas = null, this.bgContext = null, this.bgContextPixelData = null, this.imgData = e.data
    }
    e.prototype.init = function () {
        this.context = this.canvas.getContext("2d"), this.context.globalCompositeOperation = "lighter", this.canvas.width = 768, this.canvas.height = 768, this.canvas.style.display = "block";
        var t = this;
        this.canvas.addEventListener("mousemove", function (e) {
            TweenMax.ticker.addEventListener("tick", t.draw, t), t.mouse.x = e.offsetX || e.layerX - t.canvas.offsetLeft, t.mouse.y = e.offsetY || e.layerY - t.canvas.offsetTop
        }), this.canvas.addEventListener("mouseout", function (e) {
            t.mouse.x = -1e3, t.mouse.y = -1e3, t.mouse.down = !1, setTimeout(function () {
                TweenMax.ticker.removeEventListener("tick", t.draw)
            }, 1200)
        }), this.loadData(this.imgData)
    }, e.prototype.preparePoints = function () {
        var e, t;
        this.points = [];
        var i = this.bgContextPixelData.data;
        for (e = 0; e < this.canvas.height; e += this.density)
            for (t = 0; t < this.canvas.width; t += this.density) {
                var n = 4 * (t + e * this.bgContextPixelData.width);
                if (!(200 < i[n] && 200 < i[n + 1] && 200 < i[n + 2] || 0 === i[n + 3])) {
                    var o = "rgba(" + i[n] + "," + i[n + 1] + "," + i[n + 2] + ",1)";
                    this.points.push({
                        x: t,
                        y: e,
                        originalX: t,
                        originalY: e,
                        color: o
                    })
                }
            }
    }, e.prototype.updatePoints = function () {
        var e, t, i, n;
        for (e = 0; e < this.points.length; e++) t = this.points[e], i = Math.atan2(t.y - this.mouse.y, t.x - this.mouse.x), n = this.mouse.down ? 200 * this.reactionSensitivity / Math.sqrt((this.mouse.x - t.x) * (this.mouse.x - t.x) + (this.mouse.y - t.y) * (this.mouse.y - t.y)) : 100 * this.reactionSensitivity / Math.sqrt((this.mouse.x - t.x) * (this.mouse.x - t.x) + (this.mouse.y - t.y) * (this.mouse.y - t.y)), t.x += Math.cos(i) * n + .05 * (t.originalX - t.x), t.y += Math.sin(i) * n + .05 * (t.originalY - t.y)
    }, e.prototype.drawLines = function () {
        var e, t, i, n, o;
        for (e = 0; e < this.points.length; e++)
            for (i = this.points[e], this.context.fillStyle = i.color, this.context.strokeStyle = i.color, t = 0; t < this.points.length; t++)(n = this.points[t]) != i && (o = Math.sqrt((n.x - i.x) * (n.x - i.x) + (n.y - i.y) * (n.y - i.y))) <= this.drawDistance && (this.context.lineWidth = (1 - o / this.drawDistance) * this.maxLineThickness * this.lineThickness, this.context.beginPath(), this.context.moveTo(i.x, i.y), this.context.lineTo(n.x, n.y), this.context.stroke())
    }, e.prototype.drawPoints = function () {
        var e, t;
        for (e = 0; e < this.points.length; e++) t = this.points[e], this.context.fillStyle = t.color, this.context.strokeStyle = t.color, this.context.beginPath(), this.context.arc(t.x, t.y, this.baseRadius, 0, 2 * Math.PI, !0), this.context.closePath(), this.context.fill()
    }, e.prototype.clear = function () {
        this.canvas.width = this.canvas.width
    }, e.prototype.draw = function () {
        this.clear(), this.updatePoints(), this.drawLines(), this.drawPoints()
    }, e.prototype.drawImageToBackground = function () {
        var e, t;
        if (this.bgCanvas = document.createElement("canvas"), this.bgCanvas.width = this.canvas.width, this.bgCanvas.height = this.canvas.height, this.bgImage.width > this.bgCanvas.width - 100 || this.bgImage.height > this.bgCanvas.height - 100) {
            var i = Math.max(this.bgImage.width / (this.bgCanvas.width - 100), this.bgImage.height / (this.bgCanvas.height - 100));
            e = this.bgImage.width / i, t = this.bgImage.height / i
        } else e = this.bgImage.width, t = this.bgImage.height;
        this.bgContext = this.bgCanvas.getContext("2d"), this.bgContext.drawImage(this.bgImage, Math.floor((this.canvas.width - e) / 2), Math.floor((this.canvas.height - t) / 2), e, t), this.bgContextPixelData = this.bgContext.getImageData(0, 0, this.bgCanvas.width, this.bgCanvas.height), this.preparePoints(), this.draw()
    }, e.prototype.loadData = function (e) {
        this.bgImage = new Image, this.bgImage.src = e;
        var t = this;
        this.bgImage.onload = function () {
            t.drawImageToBackground()
        }
    }, e.prototype.mouseDown = function (e) {
        this.mouse.down = !0
    }, e.prototype.mouseUp = function (e) {
        this.mouse.down = !1
    }, e.prototype.mouseMove = function (e) {
        this.mouse.x = e.offsetX || e.layerX - this.canvas.offsetLeft, this.mouse.y = e.offsetY || e.layerY - this.canvas.offsetTop
    }, e.prototype.mouseOut = function (e) {
        this.mouse.x = -1e3, this.mouse.y = -1e3, this.mouse.down = !1
    }, e.prototype.onWindowResize = function () {
        cancelAnimationFrame(this.animation), this.drawImageToBackground()
    }, new e({
        density: 13,
        canvas: document.querySelector(".int-canvas--brain"),
        data: "data:image/png;base64,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"
    }).init(), new e({
        density: 13,
        canvas: document.querySelector(".int-canvas--pt"),
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYEAAAJzCAYAAABZMtwpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAALM3SURBVHja7N13nFxXff//c9v0vr2qV1vu2GBcUVl5ZBYIJBA6BOMqh00lCcmPdEqSTSwMJoTyTUi+JED4ZrHWkmxTHIoNNrZlWV3aXmZ3dnq99feHZDBGtiVbWu3OvJ6Pxz5cVHbnvWfufs7nnnuO5DiOAACcHf/3//v6bcd/NvzXI/tGY7Zp193rl2RJrLxixfSKy5e95W1//OZHGREAAJzw358cWDt1ZPpfj/zk6OWFdFGuxwy8AY/zmt7LP/PIf/zwbkYEhBDiX8bupR4/h/X4rs89SD0O4OdkIgCAs3hRlSVTVmVTlurz8qooipAVyZBkyWI0AADwS2xZkQxZqd8pmOpWHUmWqgwFUI9TjwM4D9dHIgCAs6qqKLIpyVJ9Fp2aLFRNrQohTIYCAADPm3jJkiUrckVW5Lp9FFPzuCxJogkM6nHqcQDnpRYhAgA4eyRJdiRJqvd9dthnCAAAnKJOok4A9Tj1OIDzhSYwAJzNasuxJcdxpDqPQWIkAACAX62TqBNAPU49DuB8oQkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAAAEANowkMAAAAAAAAADWMJjAAAAAAAAAA1DCawAAAAAAAAABQw2gCAwAAAAAA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"
    }).init()
}), $(function () {
    function t(e) {
        this.DOM = {
            el: e
        }, this.DOM.slideImg = this.DOM.el.querySelector(".example__img"), this.bgImage = this.DOM.slideImg.style.backgroundImage, this.layout()
    }
    t.prototype.layout = function () {
        for (var e = 0; e < 5; e++) this.DOM.slideImg.innerHTML += "<div class='glitch__img' style='background-image:" + this.DOM.slideImg.style.backgroundImage + "'></div>";
        this.DOM.glitchImgs = Array.from(this.DOM.slideImg.querySelectorAll(".glitch__img"))
    };
    new function (e) {
        this.DOM = {
            el: e
        }, this.DOM.slides = Array.from(this.DOM.el.querySelectorAll(".example")), this.slides = [];
        var i = this;
        this.DOM.slides.forEach(function (e) {
            i.slides.push(new t(e))
        }), this.DOM.slides.forEach(function (e, t) {
            i.slides[t].DOM.slideImg.addEventListener("mouseover", function () {
                i.slides[t].DOM.slideImg.classList.add("glitch--animate")
            }), i.slides[t].DOM.slideImg.addEventListener("mouseout", function () {
                i.slides[t].DOM.slideImg.classList.remove("glitch--animate")
            })
        })
    }(document.querySelector(".examples"))
}), $(function () {
    var e = 2,
        t = function () {
            $(".request__input, .request__textarea").each(function (e, t) {
                0 === $(t).val().length && $(t).parent().removeClass("clicked")
            }), $(this).parent().addClass("clicked")
        },
        i = document.querySelector("#member-template").content.querySelector(".request__member");
    $(".request__form-member").on("click", function () {
        i.querySelector(".member-num").textContent = e < 10 ? "0" + e : e, $(".request__form-member").before(i.outerHTML), $(".request__form-member").prev().find('input[name="member-name"], input[name="member-role"]').on("focus", t), $(".request__form-member").prev().find(".member-delete").on("click", function () {
            $(this).parent().parent().remove(), e--, $(".member-num").each(function (e, t) {
                ++e < 10 ? $(t).text("0" + e) : $(t).text(e)
            })
        }), e++
    })
}), $(function () {
    var t, o, s, a, r, e, i, n, A;
    r = [], e = 0, i = function () {
        for (var e = o.createImageData(s, a), t = new Uint32Array(e.data.buffer), i = t.length, n = 0; n < i; n++) Math.random() < .5 && (t[n] = 4278190080);
        r.push(e)
    }, n = function () {
        9 === e ? e = 0 : e++, o.putImageData(r[e], 0, 0), window.setTimeout(function () {
            window.requestAnimationFrame(n)
        }, 40)
    }, A = function () {
        s = window.innerWidth, a = window.innerHeight, t.width = s, t.height = a;
        for (var e = 0; e < 10; e++) i();
        n()
    }, t = document.getElementById("noise"), o = t.getContext("2d"), A()
});
/* End */
;; 
function userLoginInitiate(url){
    localStorage.setItem("tempURL", location.href);
    window.location = location.origin + url;
  }