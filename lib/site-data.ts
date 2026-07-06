export const BOOK_URL = 'https://maryjesse.glossgenius.com/booking-flow';

export const REVIEWS = [
  { text: 'Mary does such a fabulous job taking care of my skin! I recently started going to her and can already notice an improvement!', author: 'Annie Shanahan' },
  { text: "I so look forward to my appointments with Mary Jesse! It's all about relaxation and hair and skin health!", author: 'Aubree' },
  { text: 'I absolutely love my Japanese Hair Treatment! Mary Jesse is great and has so much knowledge to share. 5 plus stars. Everyone should treat themselves to this wonderful experience.', author: 'Gabrielle' },
  { text: "I feel so good after my session with Mary. She's such a wonderful lady.", author: 'Irma Thrasher' },
  { text: 'Mary is attentive and great at what she does! Always an amazing facial.', author: 'Rachelle' },
];

export const SIGNATURE_INCLUDES = [
  'Double cleanse',
  'Customized enzyme treatment',
  'Extractions (if needed)',
  'Décolleté + upper back massage',
  'Facial massage',
  'Customized hydrating mask',
];

export const TIERS = [
  { num: '01', name: 'The Smooth Operator', add: 'Signature + Dermaplane', desc: 'For that silky-smooth, glass-skin glow. Dermaplaning gently removes peach fuzz and dull surface skin, leaving your skin soft, bright, and makeup-ready.' },
  { num: '02', name: 'The Glow Booster', add: 'Signature + Micro Infusion', desc: 'Your skin’s favorite pick-me-up. Micro Infusion delivers targeted serums deeper into the skin to improve hydration and radiance — without downtime.' },
  { num: '03', name: 'The Fresh Start', add: 'Signature + Chemical Peel', desc: 'When your skin is ready for a reset. A customized peel improves texture, pigmentation, acne concerns, and signs of aging.' },
  { num: '04', name: 'The Next Level', add: 'Signature + Microneedling', desc: 'For skin goals that mean business. Microneedling stimulates collagen for smoother texture, firmer skin, and softened lines.' },
];

export const GALLERY_CLIPS = [
  { src: '/studio-lobby.mp4', type: 'video' as const, label: 'The Arrival' },
  { src: '/studio-bed.mp4', type: 'video' as const, label: 'Your Treatment Room' },
  { src: '/prod-wall.png', type: 'image' as const, label: 'The Product Wall' },
  { src: '/studio-suite.mp4', type: 'video' as const, label: 'Inside the Suite' },
];
