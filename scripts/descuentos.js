
// CUPONES

const coupons = [
    {
        name: 'MICUPON',
        discount:15
    },

    { 
        name :'123CUPON',
        discount:30
    },
]


const discounts = (price, discount) => {
    const porcentPriceWithDiscount = 100 - discount
    const priceWithDiscount = (price * porcentPriceWithDiscount) / 100
    return priceWithDiscount
}

const discountButton = () => {
    const inputPrice = document.getElementById('inputPrice')
    const priceResult = document.getElementById('priceResult')
    const inputCoupon = document.getElementById('inputCoupon')
    const couponValue = inputCoupon.value.toUpperCase()
    const price = inputPrice.value

    const isCouponValid = (coupon) => {
        return coupon.name === couponValue
    }    

    if (couponValue == 0) return
    if (price == 0) return

    const userCoupon = coupons.find(isCouponValid)

    if (!userCoupon) { 
        priceResult.innerHTML = 'El cupon no es válido'
    } else {
        const discount = userCoupon.discount
        const priceToBuy = discounts(price,discount)
        priceResult.innerHTML = 'El precio con descuento son: $' + priceToBuy
    }
}
