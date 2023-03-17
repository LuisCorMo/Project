import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import getProducts from './components/helpers/getProducts.js'
import cart from './components/cart.js'

/* UI Element */
/* Ocultar loader */
loader()

/* Mostrar menu */
showMenu()

/* Mostrar carrito */
showCart()

/* End UI Elements */

/* Products */
const {db, printProducts} = products(await getProducts())

/* Carrito */
cart (db, printProducts)