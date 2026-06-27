// 低开宿主页 onMount
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
  iframe.srcdoc = decodeBase64Utf8('PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9InpoLUNOIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9MTkyMCIgLz4KPHRpdGxlPuaVsOaNruWkp+WxjzwvdGl0bGU+CjxzdHlsZT4qe21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbCxib2R5LCNhcHB7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KPGRpdiBpZD0iYXBwIj48L2Rpdj4KPHNjcmlwdD4KKGZ1bmN0aW9uKCl7CiAgdmFyIE09J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9hMTgzNjEyNzIzMjMvZGFzaGJvYXJkX2twaUBiMzgxZGI3L2Rpc3QvbWljcm9mcm9udGVuZC1hc3NldHMuZGlyZWN0Lmpzb24nOwogIHZhciBCPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlAYjM4MWRiNy9kaXN0Lyc7CiAgdmFyIG1hbmlmZXN0PW51bGw7CiAgZnVuY3Rpb24gTCh1LHQpewogICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsail7CiAgICAgIGlmKHQpewogICAgICAgIHZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO3Muc3JjPXU7cy5vbmxvYWQ9cjtzLm9uZXJyb3I9ZnVuY3Rpb24oKXtqKG5ldyBFcnJvcignanMgJyt1KSl9O2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7CiAgICAgIH1lbHNlewogICAgICAgIHZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtsLnJlbD0nc3R5bGVzaGVldCc7bC5ocmVmPXU7bC5vbmxvYWQ9cjtsLm9uZXJyb3I9ZnVuY3Rpb24oKXtqKG5ldyBFcnJvcignY3NzICcrdSkpfTtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGwpOwogICAgICB9CiAgICB9KTsKICB9CiAgZmV0Y2goTSx7Y2FjaGU6J25vLWNhY2hlJ30pLnRoZW4oZnVuY3Rpb24ocil7cmV0dXJuIHIuanNvbigpfSkudGhlbihmdW5jdGlvbihtKXsKICAgIG1hbmlmZXN0PW07CiAgICByZXR1cm4gUHJvbWlzZS5hbGwoKG0uY3NzfHxbXSkubWFwKGZ1bmN0aW9uKHUpe3JldHVybiBMKEIrdSwwKX0pKTsKICB9KS50aGVuKGZ1bmN0aW9uKCl7CiAgICByZXR1cm4gUHJvbWlzZS5hbGwoKG1hbmlmZXN0LmpzfHxbXSkubWFwKGZ1bmN0aW9uKHUpe3JldHVybiBMKEIrdSwxKX0pKTsKICB9KS5jYXRjaChmdW5jdGlvbihlKXsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS50ZXh0Q29udGVudD0nTG9hZCBmYWlsZWQ6ICcrZS5tZXNzYWdlOwogIH0pOwp9KSgpOwo8L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+Cg==');
  container.innerHTML = ''; container.appendChild(iframe);
})();
