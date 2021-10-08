# stats
Simple, privacy-preserving analytics.

## Usage
### Tag
Put the folowing code in your `<head>` tag.
```html
<script data-stats-config="">
!((e,a,s,r,n,g)=>{e.head.append(a=Object.assign(e.createElement('script'),{src:'https://easrng.github.io/stats/stats.js',async:!0}));a.onerror=o=>g.map(z=>z.e(o),g.push=x=>r.reject(o));s[n]=new Proxy({},{get:(o,f)=>f=='_q'?g:(...a)=>new r((c,e)=>g.push({f,a,c,e}))})})(document,0,window,Promise,"stats",[]);
</script>
```
### Config
`data-stats-config` is a `application/x-www-form-urlencoded` object with the following keys:

 - `beacon` (required)
   URL to send events to
 - `site`
   Site ID
 - `loadEvent`
   If `1`, send a `page-load` event on page load. Otherwise, don't send any events at all
### Sending Beacons
Use the following JavaScript to send a beacon:
```js
stats.beacon("beacon-id")
```
`stats.beacon` returns a `Promise`, but `await`ing it is strongly discouraged.
