# Payment Pages Setup Guide

## 📄 Payment Pages Created

Two payment pages have been created for your Chamakz website:

1. **Payment Success Page** - `/payment/success`
2. **Payment Cancel Page** - `/payment/cancel`

## 🔗 URLs to Use in Payment Integration

When setting up payment gateways (Razorpay, Stripe, PayPal, etc.), use these URLs:

### For Success URL:
```
https://yourwebsite.com/payment/success
```
or
```
https://chamakz.app/payment/success
```

### For Cancel URL:
```
https://yourwebsite.com/payment/cancel
```
or
```
https://chamakz.app/payment/cancel
```

## 📝 Example Integration

### Razorpay Example:
```javascript
const options = {
  key: 'YOUR_RAZORPAY_KEY',
  amount: 50000, // amount in paise
  currency: 'INR',
  name: 'Chamakz',
  description: 'Payment for Premium Subscription',
  handler: function (response) {
    // Redirect to success page
    window.location.href = 'https://chamakz.app/payment/success?transaction_id=' + response.razorpay_payment_id + '&amount=₹500&payment_method=Razorpay';
  },
  prefill: {
    name: 'User Name',
    email: 'user@example.com',
    contact: '9999999999'
  },
  theme: {
    color: '#FF1B7C'
  },
  modal: {
    ondismiss: function() {
      // Redirect to cancel page if user closes modal
      window.location.href = 'https://chamakz.app/payment/cancel';
    }
  }
};
const rzp = new Razorpay(options);
rzp.open();
```

### Stripe Example:
```javascript
stripe.redirectToCheckout({
  sessionId: session.id
}).then(function (result) {
  if (result.error) {
    // Redirect to cancel page on error
    window.location.href = 'https://chamakz.app/payment/cancel';
  }
});

// On success, redirect to:
// https://chamakz.app/payment/success?transaction_id=xxx&amount=xxx&payment_method=Stripe
```

### PayPal Example:
```javascript
paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '50.00'
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      // Redirect to success page
      window.location.href = 'https://chamakz.app/payment/success?transaction_id=' + details.id + '&amount=$50&payment_method=PayPal';
    });
  },
  onCancel: function(data) {
    // Redirect to cancel page
    window.location.href = 'https://chamakz.app/payment/cancel';
  }
}).render('#paypal-button-container');
```

## 📊 URL Parameters

### Success Page Parameters:
The success page can accept these URL parameters:
- `transaction_id` - Payment transaction ID
- `amount` - Amount paid
- `payment_method` - Payment method used (e.g., Razorpay, Stripe, PayPal)

**Example:**
```
/payment/success?transaction_id=pay_123456&amount=₹500&payment_method=Razorpay
```

### Cancel Page:
The cancel page doesn't require any parameters, but you can add them if needed:
```
/payment/cancel?reason=user_cancelled
```

## 🎨 Page Features

### Payment Success Page:
- ✅ Animated success icon
- ✅ Payment details display
- ✅ Transaction information
- ✅ Links to Home and Download pages
- ✅ Support contact link

### Payment Cancel Page:
- ❌ Animated cancel icon
- ℹ️ Information about what happened
- 🔄 "Try Again" button
- 🏠 Link to Home page
- 📞 Support contact link

## 🔧 Customization

Both pages are fully customizable. You can modify:
- Colors and styling in the component files
- Additional information displayed
- Button actions and links
- URL parameters accepted

## 📱 Responsive Design

Both pages are fully responsive and work on:
- Desktop
- Tablet
- Mobile devices

## ✅ Testing

To test the pages:

1. **Success Page:**
   ```
   http://localhost:3000/payment/success?transaction_id=test123&amount=₹500&payment_method=Test
   ```

2. **Cancel Page:**
   ```
   http://localhost:3000/payment/cancel
   ```

## 🚀 Deployment

After deployment, update your payment gateway settings with:
- **Success URL:** `https://chamakz.app/payment/success`
- **Cancel URL:** `https://chamakz.app/payment/cancel`

Replace `chamakz.app` with your actual domain name.

---

**Files Created:**
- `src/pages/PaymentSuccess.jsx`
- `src/pages/PaymentCancel.jsx`
- Routes added to `src/App.jsx`
