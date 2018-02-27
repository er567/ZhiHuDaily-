(function(window){var svgSprite='<svg><symbol id="icon-tixingtianchong" viewBox="0 0 1024 1024"><path d="M672.956416 871.064576l176.67584 0c48.72704 0 88.231936-39.5008 88.231936-88.231936 0-17.8944-5.327872-34.540544-14.478336-48.44544l-20.570112-35.204096c-32.789504-47.8208-80.41984-134.765568-85.219328-271.644672-6.877184-195.913728-89.36448-295.589888-202.789888-312.774656l-0.789504-2.02752c0-51.443712-41.704448-93.142016-93.147136-93.142016l-12.250112 0c-51.443712 0-93.147136 41.699328-93.147136 93.142016l-0.789504 2.02752c-113.421312 17.184768-195.908608 116.861952-202.784768 312.774656-4.804608 136.879104-52.429824 223.822848-85.224448 271.644672l-20.564992 35.204096c-9.155584 13.904896-14.483456 30.55104-14.483456 48.44544 0 48.73216 39.50592 88.231936 88.237056 88.231936l178.67776 0c51.091456 0 67.400704 47.473664 67.400704 47.473664 17.57184 35.15904 53.89312 59.305984 95.879168 59.305984 23.3472 0 44.9536-7.465984 62.55616-20.143104 14.749696-10.625024 26.677248-24.911872 34.464768-41.5232C618.841088 916.179968 628.942848 871.975936 672.956416 871.064576z"  ></path></symbol><symbol id="icon-gengduoda" viewBox="0 0 1024 1024"><path d="M384 896C384 825.307552 440.814697 768 512 768 582.692448 768 640 824.814694 640 896 640 966.692448 583.185303 1024 512 1024 441.307552 1024 384 967.185306 384 896ZM384 512C384 441.307552 440.814697 384 512 384 582.692448 384 640 440.814697 640 512 640 582.692448 583.185303 640 512 640 441.307552 640 384 583.185303 384 512ZM384 128C384 57.307552 440.814697 0 512 0 582.692448 0 640 56.814697 640 128 640 198.692448 583.185303 256 512 256 441.307552 256 384 199.185303 384 128Z"  ></path></symbol><symbol id="icon-wujiaoxing" viewBox="0 0 1024 1024"><path d="M511.082606 89.707115 640.347668 381.582695 957.756785 415.585113 720.110293 628.727515 785.8526 941.099918 509.716492 780.939195 232.943888 940.007027 299.926442 627.883287 63.132364 413.8107 380.657114 381.064902 511.082606 89.707115Z"  ></path></symbol><symbol id="icon-liebiao2" viewBox="0 0 1024 1024"><path d="M0 139.6368l0 93.0912 1024 0L1024 139.6368 0 139.6368zM0 558.5456l1024 0 0-93.0912L0 465.4544 0 558.5456zM0 884.3632l1024 0 0-93.0912L0 791.272 0 884.3632z"  ></path></symbol><symbol id="icon-xiazai" viewBox="0 0 1024 1024"><path d="M877.49 381.468H668.638V68.191H355.36v313.277H146.51l365.489 365.49 365.49-365.49zM146.51 851.383v104.425h730.98V851.383H146.51z" fill="" ></path></symbol><symbol id="icon-shouye" viewBox="0 0 1024 1024"><path d="M422.63 891.821V623.712h178.74v268.109h223.424V534.342h134.054L512 132.179 65.152 534.342h134.054V891.82H422.63z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)