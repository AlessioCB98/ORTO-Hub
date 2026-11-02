# ORTO Hub — DEMO v0.2 (2 novembre 2026)

DEMO statica del portale **THE DREAM p.g.a. / ORTO Hub**, progettata per iPhone e per GitHub Pages. **Non è stata pubblicata** e non comporta interventi su Brain-01 o sulle WebApp esistenti.

## Stato dei collegamenti
1. **ORTO Monitor**: visibile ma disabilitato, perché manca un collegamento definitivo condivisibile pubblicamente. Indicazione Tailscale mantenuta nella progettazione; nessun IP privato è nel pacchetto.
2. **Checklist**: attiva, URL Apps Script comunicato dall'utente.
3. **To-do list**: attiva, URL Apps Script comunicato dall'utente.
4. **Registro Economico**: attivo, URL Apps Script comunicato dall'utente.
5. **Gestione Animali**: visibile, grigia e disabilitata.

**Importante:** gli indirizzi forniti sono configurati come link, ma non abbiamo collaudato login, autorizzazioni, disponibilità, navigazione o aperture iPhone. Anche gli URL delle WebApp Google risulteranno leggibili nel codice sorgente pubblico della pagina: verificare che ciascuna applicazione controlli realmente gli accessi.

## Come provare
Su computer, aprire `index.html` con un browser. Per la prova completa su iPhone (schermata Home, collegamenti fra WebApp) pubblicare su GitHub Pages e aprire con Safari. La pubblicazione deve essere un'azione esplicita dell'amministratore.

## Amministrazione
Il solo file da modificare per aggiungere, riordinare, abilitare o aggiornare le applicazioni è `config.js`: l'ordine dell'array è l'ordine della Home; `enabled:true` più un URL HTTPS/HTTP valido abilita la scheda. Non inserire password, PIN, token o indirizzi Tailscale privati se non si intende renderli visibili pubblicamente. L'amministratore pubblica le modifiche attraverso GitHub.

## Limiti
Il sito non possiede login, backend, service worker o monitoraggio della connessione VPN. La colorazione indica una configurazione di link attiva, non la raggiungibilità dell'app. I link esterni possono essere aperti da Safari fuori dalla modalità WebApp di iOS; da testare sul dispositivo.
