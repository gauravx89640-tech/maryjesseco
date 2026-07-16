export const BOOK_URL = 'https://maryjesse.glossgenius.com/booking-flow';

export const REVIEWS = [
  { text: 'Mary does such a fabulous job taking care of my skin! I recently started going to her and can already notice an improvement!', author: 'Annie Shanahan' },
  { text: "I so look forward to my appointments with Mary Jesse! It's all about relaxation and hair and skin health!", author: 'Aubree' },
  { text: 'I absolutely love my Japanese Hair Treatment! Mary Jesse is great and has so much knowledge to share. 5 plus stars. Everyone should treat themselves to this wonderful experience.', author: 'Gabrielle' },
  { text: "I feel so good after my session with Mary. She's such a wonderful lady.", author: 'Irma Thrashed' },
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

export const SIGNATURE_PRICE = '$85';

export const HEADSPA = [
  { name: 'The Crown', duration: '60 min', price: '$150' },
  { name: 'The Royal Crown', duration: '90 min', price: '$200', note: 'Everything in The Crown, plus extended massage, eye treatment, and lip treatment.' },
];

export const HEADSPA_INCLUDES = [
  'Personalized scalp analysis',
  'Essential oil welcome ritual',
  'Deep scalp cleanse + exfoliation',
  'Detoxifying scalp treatment',
  'Nourishing shampoo + conditioning mask',
  'Steam therapy for deep hydration',
  'Hair growth serum + scalp elixir',
  'Signature facial',
  'Heated eye mask',
  'Relaxation massage with specialty scalp tools',
];

export const HEADSPA_90MIN_EXTRAS = [
  'Extended massage',
  'Hydrating lip treatment',
  'Brightening eye treatment',
];

export const TIERS = [
  { num: '01', name: 'The Smooth Operator', add: 'Signature + Dermaplane', price: '$95', desc: 'For that silky-smooth, glass-skin glow. Dermaplaning gently removes peach fuzz and dull surface skin, leaving your skin soft, bright, and makeup-ready.' },
  { num: '02', name: 'The Glow Booster', add: 'Signature + Micro Infusion', price: '$95', desc: 'Your skin’s favorite pick-me-up. Micro Infusion delivers targeted serums deeper into the skin to improve hydration and radiance — without downtime.' },
  { num: '03', name: 'The Fresh Start', add: 'Signature + Chemical Peel', price: '$110', packagePrice: '$330 for a series of 3', desc: 'When your skin is ready for a reset. A customized peel improves texture, pigmentation, acne concerns, and signs of aging.' },
  { num: '04', name: 'The Next Level', add: 'Signature + Microneedling', price: '$110', packagePrice: '$330 for a series of 3', desc: 'For skin goals that mean business. Microneedling stimulates collagen for smoother texture, firmer skin, and softened lines.' },
];

export const TEEN_FACIAL_PRICE = '$75';

export const BROWS = [
  { name: 'Brow Wax', price: '$25' },
  { name: 'Brow Stain', price: '$25' },
  { name: 'Brow Wax + Stain', price: '$45' },
  { name: 'Brow Lamination', price: '$60' },
  { name: 'Brow Lamination + Stain', price: '$80' },
  { name: 'Nose Wax', price: '$15' },
];

export const LED_THERAPY = [
  { name: 'LED Therapy', duration: '30 min', price: '[CONFIRM: pricing]' },
  { name: 'LED Therapy', duration: 'Series of 3', price: '[CONFIRM: pricing]' },
];

export const REFLEXOLOGY = [
  { name: 'Foot Reflexology', duration: '30 min', price: '$45' },
  { name: 'Foot Reflexology', duration: '45 min', price: '$60' },
  { name: 'Foot Reflexology', duration: '60 min', price: '$90' },
];

export const GALLERY_CLIPS = [
  { src: '/studio-lobby.mp4', type: 'video' as const, label: 'The Arrival' },
  { src: '/studio-bed.mp4', type: 'video' as const, label: 'Your Treatment Room' },
  { src: '/prod-wall.png', type: 'image' as const, label: 'The Product Wall' },
  { src: '/studio-suite.mp4', type: 'video' as const, label: 'Inside the Suite' },
];
