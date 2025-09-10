import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// This function is used to create a Stripe Checkout Session
// It's called by the <ButtonCheckout /> component
export default async function handler(req, res) {
  const { method, body } = req;
  
  switch (method) {
    case "POST": {
      try {
        const { amount, successUrl, cancelUrl, customerEmail, planName } = body;
        
        const stripeSession = await stripe.checkout.sessions.create({
          mode: "payment",
          customer_creation: "always",
          customer_email: customerEmail,
          allow_promotion_codes: true,
          invoice_creation: { enabled: true },
          tax_id_collection: { enabled: true },
          payment_intent_data: { setup_future_usage: "on_session" },
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: planName || "SEO Service",
                  description: "Professional SEO service package",
                },
                unit_amount: amount * 100, // Stripe expects amount in cents
              },
              quantity: 1,
            },
          ],
          success_url: successUrl,
          cancel_url: cancelUrl,
          metadata: {
            planName: planName || "SEO Service",
            amount: amount.toString(),
          },
        });
        
        return res.status(200).json({ url: stripeSession.url });
      } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e?.message });
      }
    }
    case "GET": {
      try {
        await connectMongo();

        const { coupon, successUrl, cancelUrl } = body;

        const stripeSessionURL = await createCheckout({
          successUrl,
          cancelUrl,
          clientReferenceID: user._id.toString(),
          priceId: body.priceId,
          coupon,
        });

        return res.status(200).json({ url: stripeSessionURL });
      } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e?.message });
      }
    }
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
