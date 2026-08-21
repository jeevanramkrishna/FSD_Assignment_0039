import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, Shield, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'What is included in an FB Plus Membership?',
      a: 'FB Plus unlocks ad-free videos, exclusive workout programs, custom routines, calendar scheduling, strength tracking, health metrics, and early access to new releases.'
    },
    {
      q: 'What is the difference between an FB Plus Pass and a Subscription?',
      a: 'An FB Plus Pass is a one-off non-recurring pass (e.g. 7-Day or 30-Day pass) that expires automatically with no auto-renewal. Subscriptions auto-renew monthly or annually at discounted rates.'
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes! You can cancel your auto-renewal at any time with a single click inside your account settings. You will retain full access until the end of your billing period.'
    },
    {
      q: 'Is there still free content on Fitness Blender?',
      a: 'Absolutely! Fitness Blender remains committed to offering hundreds of free, full-length workout videos, free challenges, and community support.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-fb-dusk text-white text-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-fb-teal/20 text-fb-teal-light px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-current text-fb-teal" /> FB PLUS MEMBERSHIP
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Elevate Your Fitness Journey
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Get complete access to ad-free workouts, progressive 4-week programs, custom routine builders, and advanced fitness stats.
          </p>

          {/* Billing Switcher */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
              className="w-14 h-7 bg-fb-teal rounded-full p-1 transition-colors relative"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1 ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">SAVE 25%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Tier */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-fb-dark">Free Member</h3>
              <p className="text-xs text-gray-500 mt-1">Access to fundamental at-home workout videos</p>
              <div className="mt-4 text-3xl font-black text-fb-dark">$0 <span className="text-xs text-gray-400 font-normal">/ forever</span></div>
              <ul className="mt-6 space-y-3 text-xs text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> 500+ Free workout videos</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> Community forum access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> Free 2-Week Challenges</li>
              </ul>
            </div>
            <Link to="/" className="btn-outline w-full text-xs font-bold">
              Current Tier
            </Link>
          </div>

          {/* FB Plus Pass (Pass Mode) */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <span className="bg-gray-100 text-gray-700 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded">NO AUTO-RENEW</span>
              <h3 className="text-xl font-bold text-fb-dark mt-2">FB Plus Pass</h3>
              <p className="text-xs text-gray-500 mt-1">One-time pass for 7, 14, or 30 days of Plus access</p>
              <div className="mt-4 text-3xl font-black text-fb-dark">$5.99 <span className="text-xs text-gray-400 font-normal">/ pass starting</span></div>
              <ul className="mt-6 space-y-3 text-xs text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> Full FB Plus content access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> No credit card commitment</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> Automatic expiration</li>
              </ul>
            </div>
            <button className="btn-main w-full text-xs font-bold">
              Buy a Pass
            </button>
          </div>

          {/* FB Plus Subscription (Featured) */}
          <div className="bg-white border-2 border-fb-teal rounded-xl p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-fb-teal text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl">
              MOST POPULAR
            </div>
            <div>
              <h3 className="text-xl font-bold text-fb-dark flex items-center gap-1.5">
                FB Plus Auto-Renew <Sparkles className="w-4 h-4 text-fb-teal fill-current" />
              </h3>
              <p className="text-xs text-gray-500 mt-1">Full ad-free access with ongoing savings</p>
              <div className="mt-4 text-4xl font-black text-fb-teal">
                {billingCycle === 'annual' ? '$6.66' : '$8.99'} 
                <span className="text-xs text-gray-400 font-normal"> / month</span>
              </div>
              <ul className="mt-6 space-y-3 text-xs text-gray-700 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> 100% Ad-Free Video Streaming</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> Exclusive Workout Programs</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> Custom Routine & Workout Builder</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-fb-teal" /> FB Plus Community Groups</li>
              </ul>
            </div>
            <button className="btn-main bg-fb-teal w-full text-xs font-bold py-3 shadow-lg">
              Start Free Trial
            </button>
          </div>

        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-fb-dark text-center mb-8">
          Feature Comparison: Free vs FB Plus
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-fb-dark">Feature</th>
                <th className="py-4 px-6 font-bold text-center text-gray-500 w-32">Free</th>
                <th className="py-4 px-6 font-bold text-center text-fb-teal w-36">FB Plus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="py-3.5 px-6 font-medium text-gray-800">Ad-Free Experience</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center"><Check className="w-4 h-4 text-fb-teal mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-gray-800">Workout Videos Library</td>
                <td className="text-center font-semibold text-gray-600">Free Videos</td>
                <td className="text-center font-bold text-fb-teal">All + Exclusive</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-gray-800">Custom Routine Builder</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center"><Check className="w-4 h-4 text-fb-teal mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-gray-800">Interactive Calendar & Scheduling</td>
                <td className="text-center text-gray-400">Basic</td>
                <td className="text-center font-bold text-fb-teal">Advanced</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-gray-800">Detailed Fitness Statistics</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center"><Check className="w-4 h-4 text-fb-teal mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-fb-dark text-center mb-8 flex items-center justify-center gap-2">
          <HelpCircle className="w-6 h-6 text-fb-teal" /> Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-fb-dark text-sm flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-fb-teal font-extrabold">{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div className="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
