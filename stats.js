(() => {
  if (!window.stats) {
    !((e, a, s, r, n, g) => {
      e.head.append(
        (a = Object.assign(e.createElement("script"), {
          src: "https://easrng-stats.glitch.me/stats.js",
          async: !0
        }))
      );
      a.onerror = o => g.map(z => z.e(o), (g.push = x => r.reject(o)));
      s[n] = new Proxy(
        {},
        {
          get: (o, f) =>
            f == "_q" ? g : (...a) => new r((c, e) => g.push({ f, a, c, e }))
        }
      );
    })(document, 0, window, Promise, "stats", []);
  }
  const attatch = (proxy, functions) => {
    console.log("attatched");
    function run(i) {
      let e;
      e = functions[i.f](...i.a);
      if (e instanceof Promise) {
        e.then(i.c).catch(i.e);
      } else i.c(e);
    }
    let a = proxy._q,
      i;
    for (let l = a.length; l != 0; )
      try {
        i = a.shift();
        if (!i) break;
        run(i);
      } catch (e) {
        i.e(e);
      }
    a.push = run;
  };
  let overrideDNT = localStorage.getItem("overrideDNT"),
    iframe = document.createElement("iframe"),
    beaconURL,
    site,
    loadEvent = false;
  try {
    let usp = new URLSearchParams(
      document.querySelector("[data-stats-config]").dataset.statsConfig
    );
    loadEvent = usp.get("loadEvent") == "1";
    beaconURL = usp.get("beacon");
    site = usp.get("site");
  } catch (e) {}
  if (loadEvent) {
    window.stats.beacon("page-load");
  }
  const fns = {
    beacon: async event => {
      if (!beaconURL) throw new Error("No beacon set");
      if (beaconURL && (overrideDNT || navigator.doNotTrack) != "1")
        navigator.sendBeacon(
          beaconURL,
          JSON.stringify({ event, site: site || "" })
        );
    }
  };
  if (overrideDNT == null && navigator.doNotTrack == "1") {
    iframe.onload = () => {
      let e = iframe.contentDocument.querySelector(`.box`);
      e.querySelector(`.nothanks`).addEventListener("click", () => {
        localStorage.setItem("overrideDNT", (overrideDNT = "1"));
        iframe.remove();
      });
      e.querySelector(`.allow`).addEventListener("click", () => {
        localStorage.setItem("overrideDNT", (overrideDNT = "0"));
        iframe.remove();
        attatch(window.stats, fns);
      });
    };
    iframe.setAttribute(
      "style",
      "all:initial!important;position:fixed!important;bottom:0!important;left:0!important;margin:1rem!important;max-width:25rem!important;border:none!important;width:calc(100% - 2rem)!important;overflow:hidden!important;height:11rem!important;"
    );
    iframe.srcdoc = `<style>
body,html{margin:0;padding:0;width:100%;height:100%;overflow: hidden;}
.box{all:initial;line-height:1.45;font-family:system-ui,sans-serif;background:white ;padding:0.5rem ;border:1px solid #333;border-radius:4px ;min-height:8rem ;display:flex ;flex-direction:column ; margin: 0;width: 100%;height: 100%;overflow: hidden;box-sizing: border-box;}
*:not(:root),:after:not(:root),:before:not(:root){-webkit-box-sizing:border-box ;box-sizing:border-box }:after:not(:root),:before:not(:root){text-decoration:inherit ;vertical-align:inherit }b:not(:root){font-weight:bolder }button:not(:root){margin:0 }button:not(:root){overflow:visible ;text-transform:none }button:not(:root){-webkit-appearance:button }::-webkit-input-placeholder:not(:root){color:inherit ;opacity:0.54 }::-moz-focus-inner:not(:root){border-style:none ;padding:0 }:-moz-focusring:not(:root){outline:1px dotted ButtonText }button:not(:root){-ms-touch-action:manipulation ;touch-action:manipulation }p:not(:root){margin:0 0 16px }button:not(:root){background-color:#007bff ;border:#007bff ;border-radius:4px ;color:#fff ;padding:8px 16px ;display:inline-block ;font-weight:400 ;text-align:center ;white-space:nowrap ;vertical-align:middle ;-webkit-user-select:none ;-moz-user-select:none ;-ms-user-select:none ;user-select:none ;border:1px solid rgba(0,0,0,0) ;font-size:1rem ;line-height:1.5 ;-webkit-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out ;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out ;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out ;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out }button::-moz-focus-inner:not(:root){padding:0 }button:hover:not(:root){background-color:#0069d9 ;border-color:#0062cc ;color:#fff }button:focus:not(:root){outline:0 ;-webkit-box-shadow:0 0 0 0.2rem rgba(0,123,255,.5) ;box-shadow:0 0 0 0.2rem rgba(0,123,255,.5) }button:disabled:not(:root){opacity:0.65 ;cursor:not-allowed ;background-color:#007bff ;border-color:#007bff ;color:#fff }
</style><div class="box cleanslate" part="box"><p><b>Hello!</b> I like to see how much traffic my site is getting, so I collect some statistics. I don't track you, or collect any identifying information, but since you use Do Not Track, I figured I should ask before I collect anything.</p><div style="display: flex;justify-content: space-evenly;"><button class="nothanks" part="no-button">No Thanks</button> <button class="allow" part="yes-button">Allow</button></div></div>`;
    document.body.append(iframe);
  }
  if (
    !navigator.doNotTrack ||
    navigator.doNotTrack == "0" ||
    navigator.doNotTrack == "unspecified" ||
    overrideDNT == "0"
  ) {
    attatch(window.stats, fns);
  }
})();
