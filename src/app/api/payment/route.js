import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { paymentMethodId, amount } = await req.json();

    // Create a PaymentIntent and confirm immediately
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // USD cents
      currency: "usd",
      payment_method: paymentMethodId,
      confirm: true,
    });

    return new Response(JSON.stringify({ success: true, paymentIntent }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
