// 低开宿主页 onMount — 粘贴到 页面渲染完成 → 执行 JS
// 生成时间: 2026-06-27
// 资源: jsDelivr CDN, commit 2ee14f1c

(function() {
  var runtimeWindow = env.getCurrentWindow ? env.getCurrentWindow() : window;
  var doc = runtimeWindow.document;
  
  var container = doc.getElementsByClassName('xcode-pc-page')[0] || doc.body;
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.minHeight = '100vh';
  container.style.padding = '0';
  container.style.margin = '0';
  container.style.overflow = 'hidden';
  
  var workbench = doc.getElementsByClassName('xcode-layout-content procode-render-workbench-content')[0];
  if (workbench) workbench.style.padding = '0';

  var existing = doc.getElementById('dashboard-app');
  if (existing) existing.remove();

  var srcdocBase64 = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9InpoLUNOIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPTE5MjAsIGluaXRpYWwtc2NhbGU9MS4wIj4KPHRpdGxlPuaVsOaNruWkp+WxjzwvdGl0bGU+CjxzdHlsZT4KICAqIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9CiAgaHRtbCwgYm9keSwgI2FwcCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IH0KPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KPGRpdiBpZD0iYXBwIj48L2Rpdj4KPHNjcmlwdD4KKGZ1bmN0aW9uKCkgewogIHZhciBNQU5JRkVTVF9VUkwgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2ExODM2MTI3MjMyMy9kYXNoYm9hcmRfa3BpQDJlZTE0ZjEvZGlzdC9taWNyb2Zyb250ZW5kLWFzc2V0cy5qc29uJzsKICB2YXIgQkFTRSA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlAMmVlMTRmMS9kaXN0Lyc7CiAgCiAgZnVuY3Rpb24gbG9hZENTUyh1cmwsIGNiKSB7IHZhciBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOyBsLnJlbCA9ICdzdHlsZXNoZWV0JzsgbC5ocmVmID0gdXJsOyBsLm9ubG9hZCA9IGNiOyBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGwpOyB9CiAgZnVuY3Rpb24gbG9hZEpTKHVybCwgY2IpIHsgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsgcy5zcmMgPSB1cmw7IHMub25sb2FkID0gY2I7IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7IH0KICBmdW5jdGlvbiBsb2FkQWxsKGxpc3QsIGxvYWRlcikgewogICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsKICAgICAgdmFyIGkgPSAwOwogICAgICBmdW5jdGlvbiBuZXh0KCkgeyBpZiAoaSA8IGxpc3QubGVuZ3RoKSB7IGxvYWRlcihCQVNFICsgbGlzdFtpXSwgbmV4dCk7IGkrKzsgfSBlbHNlIHJlc29sdmUoKTsgfQogICAgICBuZXh0KCk7CiAgICB9KTsKICB9CgogIGZldGNoKE1BTklGRVNUX1VSTCkudGhlbihmdW5jdGlvbihyKSB7IHJldHVybiByLmpzb24oKTsgfSkudGhlbihmdW5jdGlvbihtKSB7CiAgICBsb2FkQWxsKG0uY3NzLCBsb2FkQ1NTKS50aGVuKGZ1bmN0aW9uKCkgewogICAgICBsb2FkQWxsKG0uanMsIGxvYWRKUyk7CiAgICB9KTsKICB9KTsKfSkoKTsKPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPgo=";
  var decoded = new TextDecoder('utf-8').decode(
    Uint8Array.from(atob(srcdocBase64), function(c) { return c.charCodeAt(0); })
  );

  var iframe = doc.createElement('iframe');
  iframe.id = 'dashboard-app';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.display = 'block';
  iframe.srcdoc = decoded;
  
  container.innerHTML = '';
  container.appendChild(iframe);
})();
