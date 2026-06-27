// 低开宿主页 onMount — @1fa3abd createMemoryHistory
(function() {
  function decodeBase64Utf8(base64) {
    var binary = atob(base64);
    var bytes = Uint8Array.from(binary, function(c) { return c.charCodeAt(0); });
    if (typeof TextDecoder !== 'undefined') return new TextDecoder('utf-8').decode(bytes);
    var escaped = '';
    for (var i = 0; i < bytes.length; i++) escaped += '%' + ('00' + bytes[i].toString(16)).slice(-2);
    return decodeURIComponent(escaped);
  }
  var runtimeWindow = env.getCurrentWindow ? env.getCurrentWindow() : window;
  var doc = runtimeWindow.document;
  var container = doc.getElementsByClassName('xcode-pc-page')[0] || doc.body;
  container.style.width = '100%'; container.style.height = '100%'; container.style.minHeight = '100vh';
  container.style.padding = '0'; container.style.margin = '0'; container.style.overflow = 'hidden';
  var wb = doc.getElementsByClassName('xcode-layout-content procode-render-workbench-content')[0];
  if (wb) wb.style.padding = '0';
  var old = doc.getElementById('dashboard-app'); if (old) old.remove();
  var iframe = doc.createElement('iframe');
  iframe.id = 'dashboard-app';
  iframe.style.width = '100%'; iframe.style.height = '100%'; iframe.style.border = 'none'; iframe.style.display = 'block';
  iframe.srcdoc = decodeBase64Utf8('PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9InpoLUNOIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9MTkyMCIgLz4KPHRpdGxlPuaVsOaNruWkp+WxjzwvdGl0bGU+CjxzdHlsZT4qe21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbCxib2R5LCNhcHB7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlAMWZhM2FiZC9kaXN0L2Nzcy9hcHAuY3NzIj4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlAMWZhM2FiZC9kaXN0L2Nzcy8yODguZDc3ZGU2MTMuY3NzIj4KPC9oZWFkPgo8Ym9keT4KPGRpdiBpZD0iYXBwIj48L2Rpdj4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9hMTgzNjEyNzIzMjMvZGFzaGJvYXJkX2twaUAxZmEzYWJkL2Rpc3QvanMvMjg4LmNmZjgzMGUyLmpzIj48L3NjcmlwdD4KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9hMTgzNjEyNzIzMjMvZGFzaGJvYXJkX2twaUAxZmEzYWJkL2Rpc3QvanMvYXBwLmpzIj48L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+Cg==');
  container.innerHTML = ''; container.appendChild(iframe);
})();
