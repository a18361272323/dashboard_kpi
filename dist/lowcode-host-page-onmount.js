// 低开宿主页 onMount — @7682c6d stable
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
  iframe.srcdoc = decodeBase64Utf8('PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9InpoLUNOIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9MTkyMCIgLz4KPHRpdGxlPuaVsOaNruWkp+WxjzwvdGl0bGU+CjxzdHlsZT4qe21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbCxib2R5LCNhcHB7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlANzY4MmM2ZC9kaXN0L2Nzcy9hcHAuY3NzIj4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlANzY4MmM2ZC9kaXN0L2Nzcy83Ni5jc3MiPgo8L2hlYWQ+Cjxib2R5Pgo8ZGl2IGlkPSJhcHAiPjwvZGl2Pgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2ExODM2MTI3MjMyMy9kYXNoYm9hcmRfa3BpQDc2ODJjNmQvZGlzdC9qcy83Ni5qcyI+PC9zY3JpcHQ+CjxzY3JpcHQgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlANzY4MmM2ZC9kaXN0L2pzL2FwcC5qcyI+PC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPgo=');
  container.innerHTML = ''; container.appendChild(iframe);
})();
