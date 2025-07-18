function pagar(producto, monto) {
  const urlPago = `https://www.webpay.cl/iniciar-pago?producto=${encodeURIComponent(producto)}&monto=${monto}`;
  alert(`Serás redirigido a Webpay para pagar ${producto} por $${monto}`);
  window.open(urlPago, '_blank');
}