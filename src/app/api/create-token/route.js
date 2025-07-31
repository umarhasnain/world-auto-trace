import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { number, exp_month, exp_year, cvc, amount, name } = await req.json();

    // Step 1: Create token from raw card details
    const token = await stripe.tokens.create({
      card: { number, exp_month, exp_year, cvc, name }
    });

    console.log("✅ Token Created:", token.id);

    // Step 2: Create a charge (Test mode)
    const charge = await stripe.charges.create({
      amount: Math.round(amount * 100), // convert to cents
      currency: "usd",
      source: token.id,
      description: `Payment for ${name}`
    });

    return new Response(JSON.stringify({ success: true, charge }), { status: 200 });
  } catch (err) {
    console.error("❌ Stripe Error:", err.message);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 400 });
  }
}
