import{a as e,c as t,l as n,n as r,r as i,t as a}from"./file-zeSVHvvv.js";var o=new URLSearchParams(location.search).get(`lang`)===`en`?`en`:`fr`;document.documentElement.lang=o;var s=e=>e?e[o]||e.fr:``,c={fr:{title:`CV`,profile:`Profil`,looking:`Recherche`,experience:`Expériences`,education:`Diplômes et certifications`,strengths:`Atouts`,fields:`Domaines`,contact:`Contact`,portfolio:`Portfolio`,missing:`Coordonnées à compléter`,pdf:`Télécharger le PDF`,back:`Retour au portfolio`,other:`English version`},en:{title:`Résumé`,profile:`Profile`,looking:`Looking for`,experience:`Experience`,education:`Education and certifications`,strengths:`Strengths`,fields:`Fields`,contact:`Contact`,portfolio:`Portfolio`,missing:`Contact details to be completed`,pdf:`Download PDF`,back:`Back to portfolio`,other:`Version française`}}[o];document.title=`${t.ownerName} — ${c.title}`;var l=`/portfolio-iles/`;function u(t){return t.map(t=>`<article class="entry${t.highlight?` is-key`:``}">
        <header><h3>${e(s(t.title))}</h3><span class="when">${e(s(t.period))}</span></header>
        <p class="org">${e(typeof t.org==`string`?t.org:s(t.org))}${t.place?` · ${e(s(t.place))}`:``}</p>
        ${t.points?.length?`<ul>${t.points.map(t=>`<li>${e(s(t))}</li>`).join(``)}</ul>`:``}
      </article>`).join(``)}var d=[];t.contact.email&&d.push(`<li>${e(t.contact.email)}</li>`);for(let n of t.contact.links??[])d.push(`<li>${e(s(n.label))} · ${e(n.url.replace(/^https?:\/\//,``))}</li>`);t.url&&d.push(`<li>${c.portfolio} · ${e(t.url.replace(/^https?:\/\//,``))}</li>`);var f=n.filter(e=>e.role===`content`&&!e.hidden);document.getElementById(`cv`).innerHTML=`
  <nav class="toolbar" aria-label="CV">
    <a href="${l}">← ${c.back}</a>
    <span class="sp"></span>
    <a href="?lang=${o===`fr`?`en`:`fr`}">${c.other}</a>
    <a class="primary" href="${l}cv/${a(t.ownerName,o)}" download>${c.pdf}</a>
  </nav>
  <main class="page">
    <header class="head">
      <div class="id">
        ${i(`mark`)}
        <div>
        <h1>${e(t.ownerName)}</h1>
        <p class="tag">${e(s(t.tagline))}</p>
        </div>
      </div>
      <ul class="contact">${d.length?d.join(``):`<li class="missing">${c.missing}</li>`}</ul>
    </header>
    <section class="intro">
      <p>${e(s(r.pitch))}</p>
      <p class="looking"><strong>${c.looking}${o===`fr`?` :`:`:`}</strong> ${e(s(r.lookingFor))}</p>
    </section>
    <div class="cols">
      <div class="main">
        <section><h2>${c.experience}</h2>${u(r.experience)}</section>
        <section><h2>${c.education}</h2>${u(r.education)}</section>
      </div>
      <aside class="side">
        <section><h2>${c.strengths}</h2>
          ${r.strengths.map(t=>`<div class="strength"><h3>${e(s(t.title))}</h3><p>${e(s(t.text))}</p></div>`).join(``)}
        </section>
        <section><h2>${c.fields}</h2>
          <ul class="fields">${f.map(t=>`<li><strong>${e(s(t.name))}</strong><span>${e(s(t.summary))}</span></li>`).join(``)}</ul>
        </section>
        <section><h2>${o===`fr`?`Repères`:`Highlights`}</h2>
          <ul class="hl">${r.highlights.map(t=>`<li>${e(s(t))}</li>`).join(``)}</ul>
        </section>
      </aside>
    </div>
  </main>`;