// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const { amount, currency } = await req.json();

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       payment_method_types: ["card"],
//     });

//     return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }
// app/api/create-payment-intent/route.js


//************************* */

// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const { amount, currency } = await req.json();

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency, // ✅ USD
//       payment_method_types: ["card"],
//     });

//     return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }


/************************ */
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const { amount } = await req.json();

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, // USD → cents
//       currency: "usd",
//       payment_method_types: ["card"],
//     });

//     return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }


// app/api/create-payment-intent/route.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });

    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
