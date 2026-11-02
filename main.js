'use strict';
const container=document.getElementById('apps');
const apps=window.ORTO_HUB_APPS || [];
for (const app of apps) {
  const active=Boolean(app.enabled && typeof app.url==='string' && /^https?:\/\/[^\s]+$/i.test(app.url));
  const tile=document.createElement(active?'a':'div');
  tile.className='app'+(active?'':' disabled');
  if (active) {tile.href=app.url;tile.rel='noopener noreferrer';} else {tile.setAttribute('aria-disabled','true');}
  const icon=document.createElement('span');icon.className='app-icon';icon.setAttribute('aria-hidden','true');icon.textContent=app.icon||'📱';
  const info=document.createElement('span');info.className='app-body';
  const name=document.createElement('span');name.className='app-name';name.textContent=app.name;
  const desc=document.createElement('span');desc.className='app-desc';desc.textContent=app.description||'';
  const note=document.createElement('span');note.className='app-note';note.textContent=active?(app.note||''):(app.disabledLabel||'In progettazione');
  const tail=document.createElement('span');tail.className='app-tail';tail.setAttribute('aria-hidden','true');tail.textContent=active?'›':'🔒';
  info.append(name,desc,note);tile.append(icon,info,tail);container.append(tile);
}
