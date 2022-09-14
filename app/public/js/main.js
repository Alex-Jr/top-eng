console.log('main')




$(document ).ready(function() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  if(params.proposito) {
    form = $('#edit-create-form');
    action = form.attr('action');
    form.attr('action', `${action}?proposito=${params.proposito}`)
  } else {
    console.log('nao tem proposito')
  }
});