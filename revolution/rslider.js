/* Slider 1*/
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
  once:
    RS_MODULES.modules["revslider11"] !== undefined
      ? RS_MODULES.modules["revslider11"].once
      : undefined,
  init: function () {
    window.revapi1 =
      window.revapi1 === undefined ||
      window.revapi1 === null ||
      window.revapi1.length === 0
        ? document.getElementById("rev_slider_1_1")
        : window.revapi1;
    if (
      window.revapi1 === null ||
      window.revapi1 === undefined ||
      window.revapi1.length == 0
    ) {
      window.revapi1initTry =
        window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
      if (window.revapi1initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules["revslider11"].init();
        });
      return;
    }
    window.revapi1 = jQuery(window.revapi1);
    if (window.revapi1.revolution == undefined) {
      revslider_showDoubleJqueryError("rev_slider_7_1");
      return;
    }
    revapi1.revolutionInit({
      revapi: "revapi1",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1240,768,480",
      gridwidth: "1230,1230,778,480",
      gridheight: "870,870,578,357",
      lazyType: "smart",
      spinner: "spinner0",
      perspectiveType: "local",
      editorheight: "870,768,578,357",
      responsiveLevels: "1240,1240,768,480",
      progressBar: { disableProgressBar: true },
      navigation: {
        mouseScrollNavigation: false,
        onHoverStop: false,
        arrows: {
          enable: true,
          style: "metis",
          hide_onmobile: true,
          hide_under: "1200px",
          hide_onleave: true,
          left: {},
          right: {},
        },
      },
      viewPort: {
        global: true,
        globalDist: "-200px",
        enable: false,
        visible_area: "20%",
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  },
}; // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal();
}
/* Slider 2*/

/* Slider 3*/
