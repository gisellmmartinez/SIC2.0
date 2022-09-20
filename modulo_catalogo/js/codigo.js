function enviar(){
	swal({
  title: "Esta seguro de enviar?",
  text: "Asegure que los datos sean los correctos",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Se ha enviado correctamente!", {
      icon: "success",
    });
  } else {
    swal("Se cancelado el envio de informacion!",{
      icon: "error",
    });
  }
});
}