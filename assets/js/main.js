document.querySelectorAll('a[data-scroll]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

document.getElementById('year')?.textContent = new Date().getFullYear();
