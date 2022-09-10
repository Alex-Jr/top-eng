async function apagar(id) {
  await $.ajax({ url: `http://localhost:3000/propositos/${id}`, method: 'DELETE'})
  location.reload()
}

async function buscar(el) {
  const value = $("#busca" ).val();

  if(value) {
    window.location.replace(`http://localhost:3000/propositos?nome=${value}`);
  } else {
    window.location.replace(`http://localhost:3000/propositos`);
  }

}