'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    // In production, this would submit to a backend/CRM
    setTimeout(() => {
      window.location.href = '#survey'
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="py-6 px-6 md:px-12 bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-black text-center">
            <span className="text-crumbl-pink">Crumbl</span>
          </h1>
        </div>
      </header>

      {/* Hero Section - Above the Fold */}
      <section className="section bg-gradient-to-b from-crumbl-light to-white">
        <div className="container-custom text-center fade-in">
          <div className="cookie-icon text-8xl mb-6">🍪</div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Get Your <span className="text-crumbl-pink">$100 Crumbl</span> Gift Card Today!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-body">
            Complete a quick survey + a few simple offers and enjoy <span className="font-bold">FREE cookies</span> on us!
          </p>

          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-full text-lg border-2 border-crumbl-pink focus:outline-none focus:border-crumbl-dark mb-4"
              />
              <button type="submit" className="btn-primary w-full">
                CLAIM MY $100 GIFT CARD →
              </button>
            </form>
          ) : (
            <div className="bg-green-100 border-2 border-green-500 rounded-2xl p-6 max-w-md mx-auto mb-8">
              <p className="text-green-800 font-bold text-lg">✓ Success! Redirecting to survey...</p>
            </div>
          )}

          <p className="text-sm text-gray-500">
            🔒 Your information is secure • No credit card required
          </p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Join <span className="text-crumbl-pink">10,000+</span> Cookie Lovers
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-crumbl-light p-8 rounded-3xl text-center transform hover:scale-105 transition-all">
              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="font-body italic text-gray-800 mb-4">
                "I got my gift card in 2 days! Best cookies ever!"
              </p>
              <p className="font-bold">- Sarah M., TikTok</p>
            </div>

            <div className="bg-crumbl-light p-8 rounded-3xl text-center transform hover:scale-105 transition-all">
              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="font-body italic text-gray-800 mb-4">
                "Super easy! Already ordered my first box 😍"
              </p>
              <p className="font-bold">- Jessica L., Instagram</p>
            </div>

            <div className="bg-crumbl-light p-8 rounded-3xl text-center transform hover:scale-105 transition-all">
              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="font-body italic text-gray-800 mb-4">
                "Actually legit! Took 10 minutes and worth it!"
              </p>
              <p className="font-bold">- Mike R., Twitter</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-2xl font-bold">As Seen On:</div>
            <div className="text-xl">📱 TikTok</div>
            <div className="text-xl">📸 Instagram</div>
            <div className="text-xl">🐦 Twitter</div>
            <div className="text-xl">📘 Facebook</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gradient-to-b from-crumbl-light via-white to-crumbl-light">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works (Super Simple!)
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-black mx-auto mb-6">1</div>
              <h4 className="text-2xl font-bold mb-4">Complete Survey</h4>
              <p className="font-body text-gray-700 text-lg">
                Answer a few quick questions about your cookie preferences (takes 2-3 minutes)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-black mx-auto mb-6">2</div>
              <h4 className="text-2xl font-bold mb-4">Complete Offers</h4>
              <p className="font-body text-gray-700 text-lg">
                Sign up for a few partner offers (like streaming trials, shopping deals, etc.)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-black mx-auto mb-6">3</div>
              <h4 className="text-2xl font-bold mb-4">Get Gift Card</h4>
              <p className="font-body text-gray-700 text-lg">
                Receive your $100 Crumbl gift card via email within 48 hours!
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#hero" className="btn-secondary inline-block">
              YES! I WANT FREE COOKIES 🍪
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Get Your <span className="text-crumbl-pink">$100 Gift Card?</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="text-4xl">🍪</div>
              <div>
                <h4 className="text-xl font-bold mb-2">16-20 FREE Cookies</h4>
                <p className="font-body text-gray-700">$100 gets you multiple boxes of Crumbl's famous rotating flavors</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-4xl">⚡</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Quick & Easy</h4>
                <p className="font-body text-gray-700">Total time: 10-15 minutes. That's it!</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-4xl">🎁</div>
              <div>
                <h4 className="text-xl font-bold mb-2">100% Legitimate</h4>
                <p className="font-body text-gray-700">Real gift cards from real partner offers</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-4xl">📱</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Mobile Friendly</h4>
                <p className="font-body text-gray-700">Complete everything right from your phone</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-4xl">💳</div>
              <div>
                <h4 className="text-xl font-bold mb-2">No Hidden Fees</h4>
                <p className="font-body text-gray-700">Never pay anything. Offers are free trials or sign-ups.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-4xl">✅</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Verified Process</h4>
                <p className="font-body text-gray-700">Trusted by thousands of cookie fans nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency/Scarcity Section */}
      <section className="section bg-crumbl-pink text-black">
        <div className="container-custom text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-6">
            ⏰ Limited Time Offer!
          </h3>
          <p className="text-xl md:text-2xl mb-8 font-body">
            We can only give away <span className="font-bold">500 gift cards</span> this month.
            <br />
            <span className="font-bold">327 already claimed!</span> Don't miss out!
          </p>
          <div className="bg-white rounded-2xl p-8 max-w-xl mx-auto shadow-2xl">
            <div className="text-6xl mb-4">🔥</div>
            <p className="text-2xl font-bold mb-6">Spots Filling Up Fast!</p>
            <a href="#hero" className="btn-primary inline-block">
              CLAIM MY GIFT CARD NOW
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-crumbl-light p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Is this really free?</h4>
              <p className="font-body text-gray-800">
                Yes! You'll complete partner offers (many are free trials you can cancel) and we get a small commission. That's how we afford to give you the gift card.
              </p>
            </div>

            <div className="bg-crumbl-light p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">How long does it take?</h4>
              <p className="font-body text-gray-800">
                Survey: 2-3 minutes. Offers: 5-10 minutes. Total: 10-15 minutes max. Gift card arrives within 48 hours via email.
              </p>
            </div>

            <div className="bg-crumbl-light p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">What kind of offers?</h4>
              <p className="font-body text-gray-800">
                Mostly free trials for streaming services, shopping sites, or mobile apps. You can choose which ones to complete!
              </p>
            </div>

            <div className="bg-crumbl-light p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Do I need a credit card?</h4>
              <p className="font-body text-gray-800">
                Some offers may require a credit card for free trials, but you won't be charged if you cancel before the trial ends. Many offers don't require cards at all.
              </p>
            </div>

            <div className="bg-crumbl-light p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Is my information safe?</h4>
              <p className="font-body text-gray-800">
                Absolutely. We use industry-standard encryption and never sell your personal data. We only work with trusted partners.
              </p>
            </div>

            <div className="bg-crumbl-light p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Can I really use this at Crumbl?</h4>
              <p className="font-body text-gray-800">
                Yes! It's a legitimate Crumbl Cookies gift card that works at any location or online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="survey" className="section bg-gradient-to-b from-crumbl-light to-crumbl-pink">
        <div className="container-custom text-center">
          <div className="text-8xl mb-6 cookie-icon">🍪</div>
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Ready for FREE Crumbl Cookies?
          </h3>
          <p className="text-xl md:text-2xl mb-8 font-body">
            Click below to start your survey and claim your $100 gift card!
          </p>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                placeholder="Enter your email to get started"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-full text-lg border-2 border-crumbl-pink focus:outline-none focus:border-crumbl-dark"
              />
              <button type="submit" className="btn-primary w-full text-xl py-5">
                START SURVEY & GET MY $100 GIFT CARD →
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>No Credit Card</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-700 mt-8 max-w-2xl mx-auto">
            By submitting your email, you agree to receive communications about your gift card status and partner offers. You can unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="container-custom text-center">
          <p className="text-sm mb-4">
            © 2025 Crumbl Gift Card Promotion. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-crumbl-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-crumbl-pink transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-crumbl-pink transition-colors">Contact</a>
          </div>
          <p className="text-xs mt-6 text-gray-400 max-w-2xl mx-auto">
            This promotion is operated independently and is not affiliated with, endorsed by, or sponsored by Crumbl Cookies.
            Gift cards are provided through completion of partner offers.
          </p>
        </div>
      </footer>
    </main>
  )
}
