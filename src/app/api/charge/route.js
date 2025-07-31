// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const { tokenId, amount } = await req.json();

//     const charge = await stripe.charges.create({
//       amount: amount * 100,
//       currency: "usd",
//       source: tokenId,
//       description: "Custom Card Payment",
//     });

//     return new Response(JSON.stringify({ success: true, charge }), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }



import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { tokenId, amount } = await req.json();

    const charge = await stripe.charges.create({
      amount: amount * 100, // USD → cents
      currency: "usd",
      source: tokenId,
      description: "Custom Card Payment",
    });

    return new Response(JSON.stringify({ success: true, charge }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
