export const formatearCantidad = cantidad =>{
    return Number(cantidad).toLocaleString('es-US',{
        style: 'currency',
        currency: 'USD'
    })
}

export const generarId = () => {
    const fecha = new Date().toString(36)
    const random = Math.random().toString(36).substring(2)

    return random + fecha
}