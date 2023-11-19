const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  //Solicitacao de criacao de usuario
  const customer = await stripe.customers.create({
    name: 'olavo',
    email: 'olavo@gmail.com',
    description: 'sdasdasdas'
  })

  //Solicitacao de intencao de pagamento
  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    amount: 1000,
    currency: 'brl',
    payment_method: 'pm_card_visa',
    return_url: 'http://localhost:3000',
    automatic_payment_methods: {
      enabled: true
    },
    confirm: true
  })

  //Confirmacao de pagamento
  await stripe.paymentIntents.confirm(paymentIntent.id, () => {
    res.redirect('/')
  })
}
