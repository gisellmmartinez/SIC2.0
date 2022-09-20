function showAlert(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado exitosamente',
        showConfirmButton: false,
        timer: 1000
    })
}


    function showAlert2(){
    Swal.fire({
  title: 'Esta seguro que quiere eliminar?',
  text: "¡No podrás revertir esto!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, vaciar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Eliminado!',
      'Su registro ha sido borrado.',
      'success'
    )
  }
})
    }

function pago_form(){
    window.location="formulario_de_Pago/index.html"
}

