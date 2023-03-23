
import Swal from 'sweetalert2'

  export const alertSuccess = (message?: string) => {
    Swal.fire('Success!', `${message}`, 'success')
  }
  export const alertError = (message: string) => {
    Swal.fire({
      // position: "top-end",
      icon             : 'error',
      showConfirmButton: false,
      timer            : 3000,
      title: `${message}`
    })
  }
  export const alertDelete = (
    deleteItem = () => { },
    element: string,
    getItems: () => Promise<void> = async () => {}
  ) => {
    Swal.fire({
      cancelButtonColor : '#d33',
      confirmButtonColor: '#3085d6',
      confirmButtonText : 'Sí, eliminar!',
      icon              : 'warning',
      showCancelButton  : true,
      text              : 'No podrá revertirlo!',
      title             : `Eliminar este ${element}?`
    }).then((result) => {
      if(result.isConfirmed) {
        deleteItem()
        getItems()
        // Swal.fire("Deleted!", `${element} has been deleted.`, "success");
      }
    })
  }

  export const alertQuoteTosale = (quote_id?:number, quoteTosale = () => {}) => {
    Swal.fire({
      cancelButtonColor : '#d33',
      confirmButtonColor: '#3085d6',
      confirmButtonText : 'Sí, convertir!',
      icon              : 'warning',
      showCancelButton  : true,
      text              : '',
      title             : `Convertir la cotización ${quote_id} a venta?`
    }).then((result) => {
      if(result.isConfirmed)
        quoteTosale()
    })
  }
  export const shortAlert = (type: 'success'|'error', message: string) => {
    const Toast = Swal.mixin({
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
      position         : 'bottom-start',
      showConfirmButton: false,
      timer            : 3000,
      timerProgressBar : true,
      toast            : true
    })

    Toast.fire({
      icon : type,
      title: message
    })
  }

 

