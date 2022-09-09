async function apagar(id) {
  await $.ajax({ url: `http://localhost:3000/propositos/${id}`, method: 'DELETE'})
  location.reload()
}