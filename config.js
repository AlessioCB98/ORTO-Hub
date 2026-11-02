/* ORTO Hub — DEMO v0.2
 * Configurazione pubblicabile: NON inserire password, token, PIN o IP privati.
 * L'ordine delle voci determina l'ordine delle schede sulla Home.
 */
window.ORTO_HUB_APPS = [
  { id:'monitor', name:'ORTO Monitor', description:'Controllo impianto e avvisi', icon:'📡', enabled:false, url:'', note:'Richiede Tailscale da remoto', disabledLabel:'Collegamento da definire' },
  { id:'checklist', name:'Checklist', description:'Controlli giornalieri', icon:'✅', enabled:true, url:'https://script.google.com/macros/s/AKfycbyhyfrpX966z3a19D44ho6wJCsVEArrEaJQnCeLSW7qxafbEGn5v2HsTAQ5uuPoqY_mfA/exec', note:'' },
  { id:'todo', name:'To-do list', description:'Organizzazione lavori', icon:'📋', enabled:true, url:'https://script.google.com/macros/s/AKfycbxsQ887glxOAW904KkRXK1B5hyEA6Fz0sURA0VJVH8oJjbH784PesiUne1-m_7EgNwh/exec', note:'' },
  { id:'economico', name:'Registro Economico', description:'Entrate, uscite e spese', icon:'💰', enabled:true, url:'https://script.google.com/macros/s/AKfycbxipL4ep75eVZAOBbpYi10qDwK-6LTNs9FHGkWhAR1E_22zgHGfwxbor-NKdvO7WcDY/exec', note:'' },
  { id:'animali', name:'Gestione Animali', description:'Nascite, movimenti e registri', icon:'🐇', enabled:false, url:'', note:'' }
];
