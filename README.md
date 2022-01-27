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
   If `1`, automatically send a `page-load` beacon on page load.
### Sending Beacons
Use the following JavaScript to send a beacon:
```js
stats.beacon("beacon-id")
```
`stats.beacon` returns a `Promise`, but `await`ing it is strongly discouraged.


## Tag License
[![CC0](https://img.shields.io/badge/-public%20domain-grey?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTMyIDEzLjU4Yy0xMC41NiAwLTEzLjIyIDkuOTctMTMuMjIgMTguNDIgMCA4LjQ1IDIuNjUgMTguNDIgMTMuMjIgMTguNDIgMTAuNTYgMCAxMy4yMi05Ljk3IDEzLjIyLTE4LjQyIDAtOC40NS0yLjY2LTE4LjQyLTEzLjIyLTE4LjQyek0yNi4zIDMyYzAtMy43Mi4yNy0xMS40NyA1LjctMTEuNDcuNDMgMCAuODIuMDYgMS4xOS4xNS43Ni42NiAxLjEzIDEuNTYuNCAyLjgzbC03LjA0IDEyLjkzYTM0LjI1IDM0LjI1IDAgMCAxLS4yNC00LjQ0ek0zMiA0My40OGE0LjkgNC45IDAgMCAxLTEuNzItLjMyYy0xLjIxLS41MS0xLjk4LTEuNDQtLjg4LTMuMWw3Ljg3LTEzLjU3Yy4zNyAxLjk4LjQyIDQuMDUuNDIgNS41MSAwIDMuNzItLjI2IDExLjQ4LTUuNjkgMTEuNDh6Ii8+PHBhdGggZD0iTTYxLjY3IDE5LjdhMzAuNjUgMzAuNjUgMCAwIDAtNi44Ni0xMC4zM0M0OC41MiAzLjEyIDQwLjg4IDAgMzEuOTMgMCAyMy4wNiAwIDE1LjU3IDMuMDkgOS40OCA5LjNBMzEuNjUgMzEuNjUgMCAwIDAgMCAzMmMwIDQuMjcuOCA4LjMyIDIuNCAxMi4xN2EzMi4zNSAzMi4zNSAwIDAgMCA2Ljk3IDEwLjQgMzMuMjMgMzMuMjMgMCAwIDAgMTAuNCA3LjAzIDMxLjk0IDMxLjk0IDAgMCAwIDI0LjQ3LS4wN2MzLjk2LTEuNjMgNy41LTMuOTkgMTAuNjItNy4wOGEyOS4wNSAyOS4wNSAwIDAgMCA2LjgtMTAuMUEzMi41MyAzMi41MyAwIDAgMCA2NCAzMmMwLTQuMzQtLjc3LTguNDUtMi4zMy0xMi4zek01MC43MyA1MC4zM0EyNy41MiAyNy41MiAwIDAgMSA0MiA1Ni4xMWEyNiAyNiAwIDAgMS0xOS44OC4wNUEyNy4zIDI3LjMgMCAwIDEgNy43OCA0MS45M2EyNS41MyAyNS41MyAwIDAgMSAwLTE5Ljg4IDI3LjgzIDI3LjgzIDAgMCAxIDUuODMtOC42M2M1LTUuMSAxMS4xNS03LjY2IDE4LjQ3LTcuNjYgNy4yNCAwIDEzLjQgMi41NiAxOC41NSA3LjdBMjUuNjcgMjUuNjcgMCAwIDEgNTguMjQgMzJjMCA3LjM1LTIuNTIgMTMuNDUtNy41IDE4LjMzeiIvPjwvZz48L3N2Zz4=)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, easrng has waived all copyright and related or neighboring rights to the stats **tag** (Not `stats.js`!)
