import React, { useState, useEffect, useCallback } from 'react';

// ============================================
// GLASS SKIN VAULT V3.0 - FINAL ITERATION
// 100% Visual & Functional Fidelity
// ============================================

// ============================================
// IMAGE ASSETS - High-Fidelity Placeholders
// ============================================

const IMAGES = {
  // Hero Duo Model (LP1) - K/J Beauty Models
  heroDuo: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=900&h=600&fit=crop&q=80',
  
  // Ingredients Hero Banner - Macro Science Shot
  ingredientsBanner: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=400&fit=crop&q=80',
  
  // Individual Ingredient Macro Photography
  niacinamide: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&q=80',
  ginseng: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop&q=80',
  hyaluronic: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop&q=80',
  salicylic: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&q=80',
  rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop&q=80',
  centella: 'https://images.unsplash.com/photo-1628689469838-524a4a973b8e?w=400&h=400&fit=crop&q=80',
  retinol: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop&q=80',
  greenTea: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop&q=80',
  
  // Product/Kit Images
  amGlowKit: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=400&fit=crop&q=80',
  pmRestoreKit: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop&q=80',
  cleanser: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&q=80',
  toner: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop&q=80',
  serum: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=400&h=400&fit=crop&q=80',
  moisturizer: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop&q=80',
  sunscreen: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=400&h=400&fit=crop&q=80',
  mask: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop&q=80',
  tool: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=400&h=400&fit=crop&q=80',
};

// ============================================
// CORE JSON DATA STRUCTURES
// ============================================

// ROUTINE DATA (Used for Routines Page and LP2)
const ROUTINES_DATA = [
  {
    id: "AM01",
    name: "Ritual 1: AM Glow",
    category: "am",
    budgetTag: "Mid-Range",
    kitPrice: 95,
    skinType: ["Oily", "Combo"],
    goal: ["Glow"],
    description: "The essential morning ritual for radiant, protected skin. 4 steps to glass skin glow.",
    duration: "10-12 minutes",
    imageURL: IMAGES.amGlowKit,
    steps: [
      {
        stepNum: 1,
        title: "Cleanse",
        detail: "Gentle foam or gel cleanser. Massage 30 seconds in circular motions, focusing on T-zone. Rinse with lukewarm water and pat dry.",
        products: [
          { name: "CosRX Low pH Good Morning Gel", budget: "Affordable", price: 12, imageURL: IMAGES.cleanser },
          { name: "Sulwhasoo Gentle Cleansing Foam", budget: "Mid-Range", price: 36, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 2,
        title: "Toner",
        detail: "Hydrating toner to prep skin. Pat into skin with hands or cotton pad. The 7-skin method: apply up to 7 thin layers for intense hydration.",
        products: [
          { name: "Klairs Supple Preparation Toner", budget: "Mid-Range", price: 22, imageURL: IMAGES.toner },
          { name: "Pyunkang Yul Essence Toner", budget: "Affordable", price: 18, imageURL: IMAGES.toner }
        ]
      },
      {
        stepNum: 3,
        title: "Serum",
        detail: "Apply 2-3 drops of Vitamin C or Niacinamide serum. Wait 1-2 minutes for full absorption before next step. Target dark spots directly.",
        products: [
          { name: "Beauty of Joseon Glow Serum", budget: "Affordable", price: 17, imageURL: IMAGES.serum },
          { name: "Missha Vita C Plus Serum", budget: "Mid-Range", price: 28, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 4,
        title: "Moisturizer/SPF",
        detail: "Lock in hydration and protect. Apply SPF 30+ generously - two finger lengths for face. Reapply every 2 hours if outdoors.",
        products: [
          { name: "Beauty of Joseon Sun Relief SPF50", budget: "Affordable", price: 16, imageURL: IMAGES.sunscreen },
          { name: "Isntree Hyaluronic Watery Sun Gel", budget: "Mid-Range", price: 22, imageURL: IMAGES.sunscreen }
        ]
      }
    ]
  },
  {
    id: "AM02",
    name: "Ritual 2: AM Renew",
    category: "am",
    budgetTag: "Mid-Range",
    kitPrice: 110,
    skinType: ["Oily", "Dry"],
    goal: ["Anti-Aging", "Glow"],
    description: "Advanced morning protocol with double cleanse for overnight product removal and maximum absorption.",
    duration: "15-18 minutes",
    imageURL: IMAGES.amGlowKit,
    steps: [
      {
        stepNum: 1,
        title: "Oil Cleanser",
        detail: "On dry skin, massage oil cleanser for 60 seconds. Emulsify with water until milky. This removes overnight product residue.",
        products: [
          { name: "Kose Softymo Speedy Oil", budget: "Affordable", price: 10, imageURL: IMAGES.cleanser },
          { name: "Banila Co Clean It Zero", budget: "Mid-Range", price: 24, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 2,
        title: "Water Cleanser",
        detail: "Follow with gentle foam cleanser. This ensures a perfectly clean canvas for your active ingredients.",
        products: [
          { name: "Hada Labo Foaming Cleanser", budget: "Affordable", price: 14, imageURL: IMAGES.cleanser },
          { name: "Neogen Green Tea Real Fresh Foam", budget: "Mid-Range", price: 18, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 3,
        title: "Essence",
        detail: "Apply first essence/treatment essence. These lightweight layers prep skin to absorb subsequent products better.",
        products: [
          { name: "Missha First Treatment Essence", budget: "Mid-Range", price: 32, imageURL: IMAGES.toner },
          { name: "COSRX Galactomyces Essence", budget: "Affordable", price: 22, imageURL: IMAGES.toner }
        ]
      },
      {
        stepNum: 4,
        title: "SPF",
        detail: "Finish with broad-spectrum SPF 50. Korean/Japanese sunscreens are lightweight and won't pill under makeup.",
        products: [
          { name: "Biore UV Aqua Rich Watery Essence", budget: "Affordable", price: 15, imageURL: IMAGES.sunscreen },
          { name: "Anessa Perfect UV Sunscreen Milk", budget: "Mid-Range", price: 38, imageURL: IMAGES.sunscreen }
        ]
      }
    ]
  },
  {
    id: "AM03",
    name: "Ritual 3: AM Balance",
    category: "am",
    budgetTag: "Affordable",
    kitPrice: 70,
    skinType: ["Combo"],
    goal: ["Glow", "Anti-Acne"],
    description: "Minimal yet effective routine for combination skin. Balances oily and dry zones without overcomplicating.",
    duration: "8-10 minutes",
    imageURL: IMAGES.amGlowKit,
    steps: [
      {
        stepNum: 1,
        title: "Micellar Water",
        detail: "No-rinse cleansing for sensitive skin. Swipe until cotton pad comes away clean. Perfect for balanced morning skin.",
        products: [
          { name: "Bioderma Sensibio H2O", budget: "Affordable", price: 15, imageURL: IMAGES.toner },
          { name: "Son & Park Beauty Water", budget: "Mid-Range", price: 30, imageURL: IMAGES.toner }
        ]
      },
      {
        stepNum: 2,
        title: "Balancing Toner",
        detail: "Focus toner application on T-zone if oily. For dry cheeks, apply extra layers using the 3-skin method.",
        products: [
          { name: "Isntree Green Tea Fresh Toner", budget: "Affordable", price: 18, imageURL: IMAGES.toner },
          { name: "Benton Aloe BHA Skin Toner", budget: "Affordable", price: 20, imageURL: IMAGES.toner }
        ]
      },
      {
        stepNum: 3,
        title: "Lightweight Serum",
        detail: "Water-based serum that won't clog pores. Niacinamide or Centella for combination skin.",
        products: [
          { name: "The Ordinary Niacinamide 10%", budget: "Affordable", price: 8, imageURL: IMAGES.serum },
          { name: "Purito Centella Unscented Serum", budget: "Affordable", price: 17, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 4,
        title: "Gel Moisturizer + SPF",
        detail: "Oil-free gel cream for hydration without heaviness. Top with SPF or use an SPF-infused moisturizer.",
        products: [
          { name: "Belif The True Cream Aqua Bomb", budget: "Mid-Range", price: 42, imageURL: IMAGES.moisturizer },
          { name: "COSRX Oil-Free Ultra Moisturizing Lotion", budget: "Affordable", price: 16, imageURL: IMAGES.moisturizer }
        ]
      }
    ]
  },
  {
    id: "PM01",
    name: "Ritual 1: PM Restore",
    category: "pm",
    budgetTag: "Mid-Range",
    kitPrice: 95,
    skinType: ["Oily", "Combo", "Dry"],
    goal: ["Glow", "Anti-Aging"],
    description: "Night repair ritual focusing on deep cleansing and overnight restoration. This is where the magic happens.",
    duration: "15-20 minutes",
    imageURL: IMAGES.pmRestoreKit,
    steps: [
      {
        stepNum: 1,
        title: "Oil Cleanser",
        detail: "First cleanse melts away makeup, SPF, and pollution. Massage for 2 minutes minimum on dry face for deep pore cleansing.",
        products: [
          { name: "DHC Deep Cleansing Oil", budget: "Mid-Range", price: 28, imageURL: IMAGES.cleanser },
          { name: "Heimish All Clean Balm", budget: "Affordable", price: 18, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 2,
        title: "Foam Cleanser",
        detail: "Second cleanse removes any remaining residue. Use lukewarm water - hot water strips natural oils.",
        products: [
          { name: "CeraVe Foaming Facial Cleanser", budget: "Affordable", price: 15, imageURL: IMAGES.cleanser },
          { name: "Tatcha The Rice Wash", budget: "Mid-Range", price: 38, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 3,
        title: "Exfoliant (2-3x/week)",
        detail: "Chemical exfoliation only at night. AHA for dry skin, BHA for oily. Skip on nights using retinol.",
        products: [
          { name: "COSRX AHA/BHA Clarifying Toner", budget: "Affordable", price: 15, imageURL: IMAGES.toner },
          { name: "Glow Recipe Watermelon Glow Toner", budget: "Mid-Range", price: 34, imageURL: IMAGES.toner }
        ]
      },
      {
        stepNum: 4,
        title: "Treatment Serum",
        detail: "Apply active treatments - retinol, peptides, or centella. These work best overnight when skin is in repair mode.",
        products: [
          { name: "The Ordinary Retinol 0.5% in Squalane", budget: "Affordable", price: 8, imageURL: IMAGES.serum },
          { name: "Drunk Elephant TLC Framboos Serum", budget: "Luxury", price: 90, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 5,
        title: "Night Cream",
        detail: "Seal everything in with rich night cream. Look for ceramides and peptides for overnight barrier repair.",
        products: [
          { name: "CeraVe PM Facial Moisturizing Lotion", budget: "Affordable", price: 14, imageURL: IMAGES.moisturizer },
          { name: "Laneige Water Sleeping Mask", budget: "Mid-Range", price: 28, imageURL: IMAGES.moisturizer }
        ]
      }
    ]
  },
  {
    id: "PM02",
    name: "Ritual 2: PM Anti-Aging",
    category: "pm",
    budgetTag: "Luxury",
    kitPrice: 150,
    skinType: ["Dry", "Combo"],
    goal: ["Anti-Aging"],
    description: "Premium anti-aging protocol with retinoids and peptide technology. Investment skincare for visible results.",
    duration: "20-25 minutes",
    imageURL: IMAGES.pmRestoreKit,
    steps: [
      {
        stepNum: 1,
        title: "Luxury Oil Cleanser",
        detail: "Premium oil cleanser with antioxidants. The massage action also provides lymphatic drainage benefits.",
        products: [
          { name: "Sulwhasoo Gentle Cleansing Oil", budget: "Mid-Range", price: 48, imageURL: IMAGES.cleanser },
          { name: "Tatcha Pure One Step Camellia Oil", budget: "Luxury", price: 52, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 2,
        title: "Peptide Cleanser",
        detail: "Anti-aging second cleanser with peptides. Gentle enough not to strip skin of essential moisture.",
        products: [
          { name: "Drunk Elephant Beste No. 9 Jelly", budget: "Mid-Range", price: 34, imageURL: IMAGES.cleanser },
          { name: "Fresh Soy Face Cleanser", budget: "Mid-Range", price: 42, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 3,
        title: "Enzyme Exfoliant",
        detail: "Gentle enzyme or low-acid peel. Promotes cell turnover without irritation from harsh scrubs.",
        products: [
          { name: "Tatcha The Rice Polish Deep", budget: "Luxury", price: 68, imageURL: IMAGES.mask },
          { name: "Amorepacific Treatment Enzyme Peel", budget: "Luxury", price: 95, imageURL: IMAGES.mask }
        ]
      },
      {
        stepNum: 4,
        title: "Retinoid Treatment",
        detail: "Apply prescription-strength or encapsulated retinoid. Build tolerance slowly - start 2x weekly.",
        products: [
          { name: "Shiseido Benefiance Wrinkle Serum", budget: "Luxury", price: 95, imageURL: IMAGES.serum },
          { name: "Drunk Elephant A-Passioni Retinol", budget: "Mid-Range", price: 74, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 5,
        title: "Luxury Night Cream",
        detail: "Rich, occlusive night cream with peptides and ceramides. This is where real transformation happens.",
        products: [
          { name: "Sulwhasoo Overnight Vitalizing Mask", budget: "Luxury", price: 68, imageURL: IMAGES.moisturizer },
          { name: "La Mer Crème de la Mer", budget: "Luxury", price: 195, imageURL: IMAGES.moisturizer }
        ]
      }
    ]
  },
  {
    id: "PM03",
    name: "Ritual 3: PM Hydrate",
    category: "pm",
    budgetTag: "Affordable",
    kitPrice: 70,
    skinType: ["Dry", "Combo"],
    goal: ["Glow"],
    description: "Budget-friendly night routine focusing on deep hydration and barrier repair. Drugstore heroes only.",
    duration: "12-15 minutes",
    imageURL: IMAGES.pmRestoreKit,
    steps: [
      {
        stepNum: 1,
        title: "Cleansing Balm",
        detail: "Affordable cleansing balm to remove the day. Drugstore options work just as well as luxury.",
        products: [
          { name: "Pond's Cold Cream Cleanser", budget: "Affordable", price: 8, imageURL: IMAGES.cleanser },
          { name: "Heimish All Clean Balm", budget: "Affordable", price: 18, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 2,
        title: "Gentle Foam",
        detail: "Simple, effective second cleanse. CeraVe and Vanicream are dermatologist favorites.",
        products: [
          { name: "CeraVe Hydrating Cleanser", budget: "Affordable", price: 12, imageURL: IMAGES.cleanser },
          { name: "Vanicream Gentle Facial Cleanser", budget: "Affordable", price: 10, imageURL: IMAGES.cleanser }
        ]
      },
      {
        stepNum: 3,
        title: "Mild Exfoliant",
        detail: "Budget-friendly AHA/BHA. The Ordinary has excellent options at drugstore prices.",
        products: [
          { name: "The Ordinary Glycolic Acid 7%", budget: "Affordable", price: 9, imageURL: IMAGES.serum },
          { name: "Stridex Maximum Strength Pads", budget: "Affordable", price: 5, imageURL: IMAGES.toner }
        ]
      },
      {
        stepNum: 4,
        title: "Hydrating Serum",
        detail: "Hyaluronic acid or snail mucin for deep hydration. Apply to damp skin for best results.",
        products: [
          { name: "The Ordinary Hyaluronic Acid 2%", budget: "Affordable", price: 8, imageURL: IMAGES.serum },
          { name: "COSRX Snail Mucin 96% Essence", budget: "Affordable", price: 22, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 5,
        title: "Barrier Cream",
        detail: "Rich moisturizer to seal hydration. CeraVe in the tub is the gold standard.",
        products: [
          { name: "CeraVe Moisturizing Cream", budget: "Affordable", price: 16, imageURL: IMAGES.moisturizer },
          { name: "Vanicream Moisturizing Cream", budget: "Affordable", price: 14, imageURL: IMAGES.moisturizer }
        ]
      }
    ]
  },
  {
    id: "W01",
    name: "Ritual 1: Weekly Reset",
    category: "weekly",
    budgetTag: "Mid-Range",
    kitPrice: 70,
    skinType: ["Oily", "Combo", "Dry"],
    goal: ["Glow"],
    description: "Once-weekly deep treatment for total skin renewal. Best done on Sunday evenings for Monday glow.",
    duration: "45-60 minutes",
    imageURL: IMAGES.mask,
    steps: [
      {
        stepNum: 1,
        title: "Deep Exfoliation",
        detail: "Physical or chemical exfoliation. Use rice bran powder or enzyme mask for gentle but thorough resurfacing.",
        products: [
          { name: "Tatcha The Rice Polish", budget: "Luxury", price: 68, imageURL: IMAGES.mask },
          { name: "Skinfood Black Sugar Mask Wash Off", budget: "Affordable", price: 12, imageURL: IMAGES.mask }
        ]
      },
      {
        stepNum: 2,
        title: "Treatment Mask",
        detail: "Clay for oily skin, hydrating sheet mask for dry. Leave on 10-15 minutes. Don't let clay masks fully dry.",
        products: [
          { name: "Innisfree Super Volcanic Clay Mask", budget: "Affordable", price: 15, imageURL: IMAGES.mask },
          { name: "Dr. Jart+ Dermask Water Jet Mask", budget: "Mid-Range", price: 12, imageURL: IMAGES.mask }
        ]
      },
      {
        stepNum: 3,
        title: "Serum Layering",
        detail: "Layer 2-3 serums while skin is most receptive post-mask. Go thinnest to thickest consistency.",
        products: [
          { name: "Missha Time Revolution Ampoule", budget: "Mid-Range", price: 35, imageURL: IMAGES.serum },
          { name: "The Ordinary Buffet Multi-Peptide", budget: "Affordable", price: 18, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 4,
        title: "Sleeping Pack",
        detail: "Finish with overnight sleeping mask. This occlusive layer locks in all your treatments.",
        products: [
          { name: "Laneige Water Sleeping Mask", budget: "Mid-Range", price: 28, imageURL: IMAGES.moisturizer },
          { name: "COSRX Ultimate Rice Sleeping Mask", budget: "Affordable", price: 16, imageURL: IMAGES.moisturizer }
        ]
      }
    ]
  },
  {
    id: "W02",
    name: "Ritual 2: Deep Cleanse",
    category: "weekly",
    budgetTag: "Affordable",
    kitPrice: 50,
    skinType: ["Oily", "Combo"],
    goal: ["Anti-Acne"],
    description: "Pore-clearing treatment for congested skin. Perfect mid-week refresh for acne-prone types.",
    duration: "30-40 minutes",
    imageURL: IMAGES.mask,
    steps: [
      {
        stepNum: 1,
        title: "Steam & Prep",
        detail: "Steam face with warm towel or over bowl of hot water for 5 minutes. Opens pores for deeper cleansing.",
        products: [
          { name: "Natural Konjac Sponge", budget: "Affordable", price: 8, imageURL: IMAGES.tool },
          { name: "Foreo Luna Mini 3", budget: "Luxury", price: 119, imageURL: IMAGES.tool }
        ]
      },
      {
        stepNum: 2,
        title: "Pore Mask",
        detail: "Charcoal or clay mask focused on T-zone. Can 'multi-mask' with hydrating mask on cheeks.",
        products: [
          { name: "Innisfree Super Volcanic Pore Clay", budget: "Affordable", price: 18, imageURL: IMAGES.mask },
          { name: "Origins Clear Improvement Mask", budget: "Mid-Range", price: 28, imageURL: IMAGES.mask }
        ]
      },
      {
        stepNum: 3,
        title: "Pore Serum",
        detail: "Niacinamide to minimize pores post-cleanse. The tightening effect is immediate and visible.",
        products: [
          { name: "The Ordinary Niacinamide 10%", budget: "Affordable", price: 8, imageURL: IMAGES.serum },
          { name: "Paula's Choice Pore Reducing Toner", budget: "Mid-Range", price: 32, imageURL: IMAGES.toner }
        ]
      },
      {
        stepNum: 4,
        title: "Light Moisturizer",
        detail: "Non-comedogenic moisturizer. Don't skip even if oily - dehydration causes more oil production.",
        products: [
          { name: "Neutrogena Hydro Boost Gel Cream", budget: "Affordable", price: 18, imageURL: IMAGES.moisturizer },
          { name: "Tatcha The Water Cream", budget: "Luxury", price: 68, imageURL: IMAGES.moisturizer }
        ]
      }
    ]
  },
  {
    id: "W03",
    name: "Ritual 3: Glow Treatment",
    category: "weekly",
    budgetTag: "Luxury",
    kitPrice: 120,
    skinType: ["Dry", "Combo"],
    goal: ["Glow", "Anti-Aging"],
    description: "At-home facial experience with professional-level products and spa techniques.",
    duration: "60-90 minutes",
    imageURL: IMAGES.mask,
    steps: [
      {
        stepNum: 1,
        title: "Professional Peel",
        detail: "At-home peel treatment with lactic or glycolic acid. Follow timing instructions exactly - more is not better.",
        products: [
          { name: "Drunk Elephant T.L.C. Sukari Babyfacial", budget: "Luxury", price: 80, imageURL: IMAGES.mask },
          { name: "The Ordinary AHA 30% + BHA 2%", budget: "Affordable", price: 8, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 2,
        title: "Hydrogel Mask",
        detail: "Luxury hydrogel or bio-cellulose mask. 20+ minutes of indulgent treatment time.",
        products: [
          { name: "SK-II Facial Treatment Mask", budget: "Luxury", price: 95, imageURL: IMAGES.mask },
          { name: "111Skin Rose Gold Brightening Mask", budget: "Luxury", price: 32, imageURL: IMAGES.mask }
        ]
      },
      {
        stepNum: 3,
        title: "Ampoule Cocktail",
        detail: "Layer high-concentration ampoules. Vitamin C + Peptides + Hyaluronic for maximum glow.",
        products: [
          { name: "Sulwhasoo First Care Activating Serum", budget: "Luxury", price: 89, imageURL: IMAGES.serum },
          { name: "Estée Lauder Advanced Night Repair", budget: "Luxury", price: 105, imageURL: IMAGES.serum }
        ]
      },
      {
        stepNum: 4,
        title: "Prestige Night Cream",
        detail: "The finale - luxurious night cream that makes you feel like you just left a five-star spa.",
        products: [
          { name: "Sulwhasoo Timetreasure Cream", budget: "Luxury", price: 280, imageURL: IMAGES.moisturizer },
          { name: "Tatcha Dewy Skin Cream", budget: "Luxury", price: 68, imageURL: IMAGES.moisturizer }
        ]
      }
    ]
  }
];

// INGREDIENT DATA (Used for Ingredients Page and LP2)
const INGREDIENTS_DATA = [
  {
    id: "ING01",
    name: "Niacinamide",
    scientificRole: "Reduces sebum production by up to 40% in clinical studies. Improves barrier function by increasing ceramide synthesis. Inhibits melanosome transfer to reduce hyperpigmentation.",
    mythBusted: "Does NOT cause purging – if you break out, it's likely sensitivity to the concentration. Start with 5% and work up to 10%.",
    description: "A form of Vitamin B3. Brightens, improves skin barrier, regulates oil production and minimizes pores.",
    type: "Humectant",
    source: "Korean",
    concerns: ["Acne", "Pores", "Hydration"],
    goals: ["Glow", "Anti-Acne"],
    howToUse: "Apply after cleansing and toning. Can be layered with most actives except Vitamin C (use at different times of day).",
    imageURL: IMAGES.niacinamide,
    linkedProducts: [
      { id: "LP01", name: "The Oily/Glow Mid-Range Starter Kit", budget: "Mid-Range", price: 95 },
      { id: "LP02", name: "Budget Glow Essentials", budget: "Affordable", price: 45 },
      { id: "LP03", name: "The Ordinary Niacinamide 10%", budget: "Affordable", price: 8 }
    ]
  },
  {
    id: "ING02",
    name: "Ginseng Root",
    scientificRole: "Contains ginsenosides (Rb1, Rg1) that stimulate fibroblast proliferation and collagen Type I synthesis. Powerful anti-inflammatory properties reduce redness and irritation.",
    mythBusted: "Works best as fermented extract, NOT raw application. Fermentation increases bioavailability by 300% and creates beneficial post-biotics.",
    description: "Traditional Korean botanical powerhouse. Energizes, revitalizes tired skin, and boosts collagen synthesis.",
    type: "Antioxidant",
    source: "Korean",
    concerns: ["Aging", "Dullness", "Fatigue"],
    goals: ["Glow", "Anti-Aging"],
    howToUse: "Best used in serums or essences. Morning or night application. Pairs excellently with fermented rice for enhanced efficacy.",
    imageURL: IMAGES.ginseng,
    linkedProducts: [
      { id: "LP04", name: "Sulwhasoo First Care Serum", budget: "Luxury", price: 89 },
      { id: "LP05", name: "The Complete Oily/Glow Routine", budget: "Mid-Range", price: 150 },
      { id: "LP06", name: "Beauty of Joseon Ginseng Serum", budget: "Affordable", price: 17 }
    ]
  },
  {
    id: "ING03",
    name: "Hyaluronic Acid",
    scientificRole: "Low molecular weight HA (<50 kDa) penetrates epidermis for deep hydration. High molecular weight (>1000 kDa) forms protective film on surface. Both are needed for optimal hydration.",
    mythBusted: "Different molecular weights penetrate different skin layers. Look for multi-weight HA formulas for surface AND deep hydration simultaneously.",
    description: "The ultimate humectant - holds 1000x its weight in water for deep, lasting hydration at every skin level.",
    type: "Humectant",
    source: "Universal",
    concerns: ["Hydration", "Aging", "Dryness"],
    goals: ["Glow", "Anti-Aging"],
    howToUse: "Apply to damp skin for best results - HA needs water to work. Layer under moisturizer to lock in hydration. Use AM and PM.",
    imageURL: IMAGES.hyaluronic,
    linkedProducts: [
      { id: "LP07", name: "Hada Labo Premium Lotion", budget: "Affordable", price: 14 },
      { id: "LP08", name: "Dr. Jart+ Ceramidin Serum", budget: "Mid-Range", price: 48 },
      { id: "LP09", name: "Dry Skin Hydration Kit", budget: "Mid-Range", price: 85 }
    ]
  },
  {
    id: "ING04",
    name: "Salicylic Acid",
    scientificRole: "Beta hydroxy acid with lipophilic properties allows penetration into sebaceous follicles. Keratolytic action promotes desquamation of comedones and unclogs pores from within.",
    mythBusted: "Start at 0.5-1% concentration - higher isn't always better and can seriously damage your moisture barrier. More ≠ more effective.",
    description: "Oil-soluble BHA that penetrates pores to dissolve sebum plugs and clear congestion from within.",
    type: "Exfoliant",
    source: "Universal",
    concerns: ["Acne", "Pores", "Blackheads"],
    goals: ["Anti-Acne"],
    howToUse: "Use 2-3x weekly at night only. Wait 20 minutes before applying other products. Always use SPF the next day.",
    imageURL: IMAGES.salicylic,
    linkedProducts: [
      { id: "LP10", name: "CosRX BHA Blackhead Power Liquid", budget: "Affordable", price: 15 },
      { id: "LP11", name: "Paula's Choice 2% BHA Exfoliant", budget: "Mid-Range", price: 34 },
      { id: "LP12", name: "Budget Glow Essentials", budget: "Affordable", price: 45 }
    ]
  },
  {
    id: "ING05",
    name: "Fermented Rice",
    scientificRole: "Contains natural AHAs for gentle resurfacing without irritation. Kojic acid inhibits tyrosinase, reducing melanin production. Amino acids support and strengthen barrier function.",
    mythBusted: "Fermentation process increases nutrient bioavailability by up to 10x compared to raw rice extract. The 'magic' is in the fermentation.",
    description: "Sake by-product (Sake Kasu) rich in amino acids, kojic acid, and ferulic acid for luminous, glass-like skin.",
    type: "Brightening",
    source: "Japanese",
    concerns: ["Dullness", "Texture", "Uneven Tone"],
    goals: ["Glow", "Anti-Aging"],
    howToUse: "Excellent in cleansers, toners, and essences. Safe for daily use due to gentle nature. Layer before heavier products.",
    imageURL: IMAGES.rice,
    linkedProducts: [
      { id: "LP13", name: "SK-II Facial Treatment Essence", budget: "Luxury", price: 185 },
      { id: "LP14", name: "Tatcha The Rice Wash", budget: "Mid-Range", price: 38 },
      { id: "LP15", name: "COSRX Rice Sleeping Mask", budget: "Affordable", price: 16 }
    ]
  },
  {
    id: "ING06",
    name: "Centella Asiatica",
    scientificRole: "Active compounds madecassoside and asiaticoside stimulate collagen synthesis and promote wound healing. Anti-inflammatory action calms irritation and redness within hours.",
    mythBusted: "Also called Gotu Kola, Tiger Grass, or Cica - all the same powerful plant with different marketing names. Don't pay extra for branding.",
    description: "Cica/Tiger Grass - legendary wound healer that soothes inflammation and repairs barrier damage overnight.",
    type: "Soothing",
    source: "Korean",
    concerns: ["Sensitivity", "Redness", "Barrier Damage"],
    goals: ["Anti-Acne", "Glow"],
    howToUse: "Perfect for sensitive skin - unlikely to cause reactions. Can be used AM and PM. Layer after actives to soothe potential irritation.",
    imageURL: IMAGES.centella,
    linkedProducts: [
      { id: "LP16", name: "Dr. Jart+ Cicapair Cream", budget: "Mid-Range", price: 52 },
      { id: "LP17", name: "COSRX Centella Blemish Cream", budget: "Affordable", price: 16 },
      { id: "LP18", name: "Purito Centella Unscented Serum", budget: "Affordable", price: 17 }
    ]
  },
  {
    id: "ING07",
    name: "Retinol",
    scientificRole: "Binds to retinoic acid receptors (RAR), increasing epidermal turnover and stimulating dermal collagen production. Reduces MMP enzymes that break down existing collagen.",
    mythBusted: "You CAN use it with Vitamin C - just alternate AM/PM or use on different days if you're sensitive. The 'conflict' is overstated.",
    description: "Vitamin A derivative - the gold standard for anti-aging. Accelerates cell turnover and boosts collagen for visible results.",
    type: "Treatment",
    source: "Universal",
    concerns: ["Aging", "Texture", "Fine Lines"],
    goals: ["Anti-Aging"],
    howToUse: "Start with 0.25% just 2x weekly. Slowly increase frequency as tolerance builds. Always use at night with SPF the next day.",
    imageURL: IMAGES.retinol,
    linkedProducts: [
      { id: "LP19", name: "The Ordinary Retinol 0.5%", budget: "Affordable", price: 8 },
      { id: "LP20", name: "Drunk Elephant A-Passioni", budget: "Mid-Range", price: 74 },
      { id: "LP21", name: "Luxury Anti-Aging Collection", budget: "Luxury", price: 280 }
    ]
  },
  {
    id: "ING08",
    name: "Green Tea",
    scientificRole: "EGCG (epigallocatechin gallate) neutralizes free radicals 100x more effectively than Vitamin C. Reduces UV-induced erythema and prevents DNA damage from environmental stressors.",
    mythBusted: "Topical application is MORE effective than drinking it for skin benefits - direct delivery to skin cells bypasses digestion.",
    description: "Potent antioxidant powerhouse - EGCG protects against environmental damage and reduces inflammation visibly.",
    type: "Antioxidant",
    source: "Japanese",
    concerns: ["Aging", "Protection", "Inflammation"],
    goals: ["Glow", "Anti-Aging"],
    howToUse: "Best used in AM under SPF for maximum antioxidant protection. Can also be used PM for anti-inflammatory benefits.",
    imageURL: IMAGES.greenTea,
    linkedProducts: [
      { id: "LP22", name: "Innisfree Green Tea Seed Serum", budget: "Mid-Range", price: 27 },
      { id: "LP23", name: "Neogen Green Tea Real Fresh Foam", budget: "Mid-Range", price: 18 },
      { id: "LP24", name: "Benton Deep Green Tea Toner", budget: "Affordable", price: 18 }
    ]
  }
];

// PRODUCTS/KITS DATA
const KITS_DATA = [
  {
    id: "KIT01",
    name: "The Oily/Glow Mid-Range Starter Kit",
    price: 95,
    budget: "Mid-Range",
    skinTypes: ["Oily", "Combo"],
    goals: ["Glow", "Anti-Acne"],
    description: "Complete 4-step routine for oil control and radiant skin. Includes cleanser, toner, serum, and SPF - everything you need to start.",
    ingredients: ["Niacinamide", "Salicylic Acid", "Green Tea"],
    imageURL: IMAGES.amGlowKit
  },
  {
    id: "KIT02",
    name: "The Complete Oily/Glow Routine",
    price: 150,
    budget: "Mid-Range",
    skinTypes: ["Oily", "Combo"],
    goals: ["Glow"],
    description: "Full 7-step K-beauty routine with premium fermented actives, double cleanse, and treatment mask for weekly use.",
    ingredients: ["Fermented Rice", "Ginseng", "Hyaluronic Acid"],
    imageURL: IMAGES.pmRestoreKit
  },
  {
    id: "KIT03",
    name: "Dry Skin Hydration Kit",
    price: 85,
    budget: "Mid-Range",
    skinTypes: ["Dry"],
    goals: ["Glow", "Anti-Aging"],
    description: "Intensive moisture for parched, dehydrated skin. Ceramide-rich formulas that rebuild your barrier overnight.",
    ingredients: ["Hyaluronic Acid", "Centella Asiatica", "Ceramides"],
    imageURL: IMAGES.moisturizer
  },
  {
    id: "KIT04",
    name: "Budget Glow Essentials",
    price: 45,
    budget: "Affordable",
    skinTypes: ["Oily", "Dry", "Combo"],
    goals: ["Glow"],
    description: "Affordable basics for everyday radiance. The Ordinary and CosRX bestsellers that deliver professional results.",
    ingredients: ["Niacinamide", "Green Tea", "Centella Asiatica"],
    imageURL: IMAGES.serum
  },
  {
    id: "KIT05",
    name: "Luxury Anti-Aging Collection",
    price: 280,
    budget: "Luxury",
    skinTypes: ["Dry", "Combo"],
    goals: ["Anti-Aging"],
    description: "Premium anti-aging with retinol, peptides, and Sulwhasoo's signature ginseng technology. Investment skincare.",
    ingredients: ["Retinol", "Ginseng", "Peptides"],
    imageURL: IMAGES.pmRestoreKit
  }
];

// ============================================
// AUTH SERVICE
// ============================================

const AuthService = {
  currentUser: null,
  userDatabase: {},
  
  login: async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userId = email.toLowerCase();
        if (!AuthService.userDatabase[userId]) {
          AuthService.userDatabase[userId] = {
            id: userId,
            email,
            profile: null,
            collection: [],
            createdAt: new Date().toISOString()
          };
        }
        AuthService.currentUser = AuthService.userDatabase[userId];
        localStorage.setItem('gsvAuth', JSON.stringify(AuthService.currentUser));
        resolve({ success: true, user: AuthService.currentUser });
      }, 400);
    });
  },
  
  logout: () => {
    AuthService.currentUser = null;
    localStorage.removeItem('gsvAuth');
  },
  
  saveProfileToUser: (profileData) => {
    if (AuthService.currentUser) {
      AuthService.currentUser.profile = profileData;
      localStorage.setItem('gsvAuth', JSON.stringify(AuthService.currentUser));
      return { success: true };
    }
    return { success: false };
  },
  
  addToCollection: (item) => {
    if (AuthService.currentUser) {
      if (!AuthService.currentUser.collection.find(i => i.id === item.id)) {
        AuthService.currentUser.collection.push({ ...item, savedAt: new Date().toISOString() });
        localStorage.setItem('gsvAuth', JSON.stringify(AuthService.currentUser));
      }
      return { success: true };
    }
    return { success: false };
  },
  
  restoreSession: () => {
    const stored = localStorage.getItem('gsvAuth');
    if (stored) {
      AuthService.currentUser = JSON.parse(stored);
      return AuthService.currentUser;
    }
    return null;
  }
};

// ============================================
// BUDGET TAG COMPONENT
// ============================================

function BudgetTag({ budget, price, size = 'default' }) {
  const config = {
    'Affordable': { bg: '#E8F5E9', color: '#2E7D32', icon: '$' },
    'Mid-Range': { bg: '#FFF3E0', color: '#E65100', icon: '$$' },
    'Luxury': { bg: '#F3E5F5', color: '#7B1FA2', icon: '$$$' }
  };
  const c = config[budget] || config['Mid-Range'];
  const sm = size === 'small';
  
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: c.bg,
      color: c.color,
      fontSize: sm ? '10px' : '11px',
      fontWeight: 700,
      padding: sm ? '4px 10px' : '6px 12px',
      borderRadius: '5px',
      letterSpacing: '0.3px'
    }}>
      <span style={{ opacity: 0.75 }}>{c.icon}</span>
      {budget}
      {price && <span style={{ opacity: 0.85 }}>• ${price}</span>}
    </span>
  );
}

// ============================================
// MAIN APP
// ============================================

export default function GlassSkinVault() {
  const [page, setPage] = useState('gateway');
  const [profile, setProfile] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filterMode, setFilterMode] = useState('forYou');
  const [activeRoutine, setActiveRoutine] = useState(null);
  const [activeIngredient, setActiveIngredient] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [notification, setNotification] = useState(null);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ type: '', source: '' });

  useEffect(() => {
    const user = AuthService.restoreSession();
    if (user) {
      setIsLoggedIn(true);
      if (user.profile) {
        setProfile(user.profile);
        setPage('vault');
      }
    } else {
      const saved = localStorage.getItem('gsvProfile');
      if (saved) {
        setProfile(JSON.parse(saved));
        setPage('vault');
      }
    }
  }, []);

  const notify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const saveProfile = (data) => {
    localStorage.setItem('gsvProfile', JSON.stringify(data));
    setProfile(data);
    setShowQuiz(false);
    setPage('vault');
    if (isLoggedIn) AuthService.saveProfileToUser(data);
  };

  const handleLogin = async (email, pwd) => {
    const res = await AuthService.login(email, pwd);
    if (res.success) {
      setIsLoggedIn(true);
      setShowAuth(false);
      if (profile) AuthService.saveProfileToUser(profile);
      notify('Welcome! Your vault is ready.');
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
    notify('Logged out');
  };

  const saveToCollection = (item) => {
    if (!isLoggedIn) { setShowAuth(true); return; }
    AuthService.addToCollection(item);
    notify('Added to collection!');
  };

  const retakeQuiz = () => {
    localStorage.removeItem('gsvProfile');
    setProfile(null);
    setPage('gateway');
    setShowQuiz(true);
  };

  // Show routine detail modal
  const showRoutineDetail = useCallback((routineId) => {
    const routine = ROUTINES_DATA.find(r => r.id === routineId);
    if (routine) setActiveRoutine(routine);
  }, []);

  // Show ingredient detail modal
  const showIngredientDetail = useCallback((ingredientId) => {
    const ingredient = INGREDIENTS_DATA.find(i => i.id === ingredientId);
    if (ingredient) setActiveIngredient(ingredient);
  }, []);

  // Filter routines by profile
  const filterRoutines = (routines) => {
    if (filterMode === 'all' || !profile) return routines;
    return routines.filter(r => 
      r.budgetTag === profile.budget || 
      r.skinType.includes(profile.skinType) || 
      r.goal.includes(profile.goal)
    );
  };

  // Filter ingredients by profile
  const filterIngredients = (ingredients) => {
    let filtered = ingredients;
    if (filterMode === 'forYou' && profile) {
      filtered = filtered.filter(i => i.goals.includes(profile.goal));
    }
    if (search) {
      filtered = filtered.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (filters.type) {
      filtered = filtered.filter(i => i.type === filters.type);
    }
    if (filters.source) {
      filtered = filtered.filter(i => i.source === filters.source);
    }
    return filtered;
  };

  // Filter kits by profile
  const filterKits = (kits) => {
    if (filterMode === 'all' || !profile) return kits;
    return kits.filter(k => 
      k.budget === profile.budget || 
      k.skinTypes.includes(profile.skinType) || 
      k.goals.includes(profile.goal)
    );
  };

  const styles = {
    colors: {
      white: '#FFFFFF',
      light: '#F9F9F9',
      pastel: '#E8F5E9',
      accent: '#2E7D32',
      dark: '#1B5E20',
      text: '#1A1A1A',
      muted: '#666666',
      border: '#E8E8E8',
    }
  };

  return (
    <div style={{ 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: styles.colors.text,
      minHeight: '100vh',
      background: styles.colors.white
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        /* AGGRESSIVE SWISS HEADLINE STYLING */
        .hero-headline {
          font-family: 'Playfair Display', serif !important;
          font-size: 6rem !important;
          font-weight: 800 !important;
          line-height: 0.9 !important;
          letter-spacing: -2px !important;
        }
        
        @media (max-width: 1200px) {
          .hero-headline {
            font-size: 4.5rem !important;
          }
        }
        
        /* FROSTED GLASS EFFECT */
        .frosted-glass {
          background: rgba(255, 255, 255, 0.88) !important;
          backdrop-filter: blur(24px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08) !important;
        }
        
        .hover-lift {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
        }
        
        .fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .slide-up { animation: slideUp 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .notif-enter { animation: notifEnter 0.35s ease-out; }
        @keyframes notifEnter {
          from { opacity: 0; transform: translateY(-24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        button { cursor: pointer; font-family: inherit; }
        input, select { font-family: inherit; }
        img { object-fit: cover; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 3px; }
      `}</style>

      {/* Notification */}
      {notification && (
        <div className="notif-enter" style={{
          position: 'fixed',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: styles.colors.accent,
          color: '#fff',
          padding: '16px 32px',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: 600,
          zIndex: 2000,
          boxShadow: '0 12px 40px rgba(0,0,0,0.25)'
        }}>
          {notification}
        </div>
      )}

      {/* Header */}
      <Header 
        profile={profile}
        isLoggedIn={isLoggedIn}
        page={page}
        setPage={setPage}
        setShowQuiz={setShowQuiz}
        setShowAuth={setShowAuth}
        retakeQuiz={retakeQuiz}
        handleLogout={handleLogout}
        styles={styles}
      />

      {/* Main Content */}
      <main>
        {page === 'gateway' && <GatewayPage setShowQuiz={setShowQuiz} styles={styles} />}
        {page === 'vault' && (
          <VaultPage 
            profile={profile}
            filterMode={filterMode}
            setFilterMode={setFilterMode}
            filterRoutines={filterRoutines}
            filterIngredients={filterIngredients}
            filterKits={filterKits}
            showRoutineDetail={showRoutineDetail}
            showIngredientDetail={showIngredientDetail}
            setPage={setPage}
            isLoggedIn={isLoggedIn}
            setShowAuth={setShowAuth}
            saveToCollection={saveToCollection}
            styles={styles}
          />
        )}
        {page === 'routines' && (
          <RoutinesPage 
            profile={profile}
            filterMode={filterMode}
            setFilterMode={setFilterMode}
            filterRoutines={filterRoutines}
            showRoutineDetail={showRoutineDetail}
            isLoggedIn={isLoggedIn}
            setShowAuth={setShowAuth}
            styles={styles}
          />
        )}
        {page === 'ingredients' && (
          <IngredientsPage 
            profile={profile}
            filterMode={filterMode}
            setFilterMode={setFilterMode}
            filterIngredients={filterIngredients}
            search={search}
            setSearch={setSearch}
            filters={filters}
            setFilters={setFilters}
            showIngredientDetail={showIngredientDetail}
            styles={styles}
          />
        )}
        {page === 'shop' && (
          <ShopPage 
            profile={profile}
            filterMode={filterMode}
            setFilterMode={setFilterMode}
            filterKits={filterKits}
            setActiveProduct={setActiveProduct}
            isLoggedIn={isLoggedIn}
            setShowAuth={setShowAuth}
            saveToCollection={saveToCollection}
            styles={styles}
          />
        )}
      </main>

      {/* Modals */}
      {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} onComplete={saveProfile} styles={styles} />}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={handleLogin} styles={styles} />}
      {activeRoutine && <RoutineDetailModal routine={activeRoutine} profile={profile} onClose={() => setActiveRoutine(null)} styles={styles} />}
      {activeIngredient && <IngredientDetailModal ingredient={activeIngredient} profile={profile} onClose={() => setActiveIngredient(null)} styles={styles} />}
      {activeProduct && <ProductDetailModal product={activeProduct} isLoggedIn={isLoggedIn} setShowAuth={setShowAuth} saveToCollection={saveToCollection} onClose={() => setActiveProduct(null)} styles={styles} />}
    </div>
  );
}

// ============================================
// HEADER
// ============================================

function Header({ profile, isLoggedIn, page, setPage, setShowQuiz, setShowAuth, retakeQuiz, handleLogout, styles }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${styles.colors.border}`,
      padding: '0 64px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <nav style={{ display: 'flex', gap: '48px' }}>
        {['Routines', 'Ingredients', 'Shop'].map(item => (
          <button
            key={item}
            onClick={() => setPage(item.toLowerCase())}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '14px',
              fontWeight: 600,
              color: page === item.toLowerCase() ? styles.colors.text : styles.colors.muted,
              borderBottom: page === item.toLowerCase() ? `2px solid ${styles.colors.accent}` : '2px solid transparent',
              paddingBottom: '8px'
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {profile && (
        <button onClick={() => setPage('vault')} style={{
          background: 'none',
          border: 'none',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '1.5px',
          color: styles.colors.text
        }}>
          Glass Skin Vault
        </button>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {profile && (
          <>
            <button onClick={() => setPage('vault')} style={{
              background: styles.colors.pastel,
              border: `1px solid ${styles.colors.accent}`,
              borderRadius: '28px',
              padding: '12px 20px',
              fontSize: '12px',
              fontWeight: 700,
              color: styles.colors.accent,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ width: '8px', height: '8px', background: styles.colors.accent, borderRadius: '50%' }}/>
              Vault: {profile.skinType}/{profile.goal}
            </button>
            <button onClick={retakeQuiz} style={{
              background: 'none',
              border: 'none',
              fontSize: '12px',
              color: styles.colors.muted
            }}>
              Re-take Quiz
            </button>
          </>
        )}

        {!profile && (
          <button onClick={() => setShowQuiz(true)} style={{
            background: styles.colors.accent,
            border: 'none',
            borderRadius: '32px',
            padding: '14px 28px',
            fontSize: '12px',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '1.5px'
          }}>
            TAKE THE QUIZ
          </button>
        )}

        <button onClick={() => isLoggedIn ? handleLogout() : setShowAuth(true)} style={{
          background: 'none',
          border: 'none',
          fontSize: '13px',
          fontWeight: 600,
          color: styles.colors.text,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
          </svg>
          {isLoggedIn ? 'Logout' : 'Login/Auth'}
        </button>
      </div>
    </header>
  );
}

// ============================================
// PROFILE SIDEBAR (Frosted Glass)
// ============================================

function ProfileSidebar({ profile, isLoggedIn, setShowAuth, styles }) {
  if (!profile) return null;
  
  return (
    <div className="frosted-glass" style={{
      position: 'fixed',
      right: '48px',
      top: '140px',
      width: '240px',
      borderRadius: '24px',
      padding: '32px',
      zIndex: 50
    }}>
      <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px' }}>Your Profile</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div>
          <span style={{ fontSize: '11px', color: styles.colors.muted, textTransform: 'uppercase', letterSpacing: '1px' }}>Skin Type</span>
          <p style={{ fontSize: '16px', fontWeight: 600, marginTop: '4px' }}>{profile.skinType}</p>
        </div>
        <div>
          <span style={{ fontSize: '11px', color: styles.colors.muted, textTransform: 'uppercase', letterSpacing: '1px' }}>Goal</span>
          <p style={{ fontSize: '16px', fontWeight: 700, marginTop: '4px', color: styles.colors.accent }}>{profile.goal}</p>
        </div>
        <div>
          <span style={{ fontSize: '11px', color: styles.colors.muted, textTransform: 'uppercase', letterSpacing: '1px' }}>Budget</span>
          <div style={{ marginTop: '6px' }}>
            <BudgetTag budget={profile.budget} />
          </div>
        </div>
      </div>

      <button
        onClick={() => !isLoggedIn && setShowAuth(true)}
        style={{
          width: '100%',
          marginTop: '28px',
          background: styles.colors.accent,
          border: 'none',
          borderRadius: '12px',
          padding: '16px',
          fontSize: '11px',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '1px'
        }}
      >
        {isLoggedIn ? '✓ SAVED TO ACCOUNT' : 'SAVE TO MY COLLECTION'}
      </button>
    </div>
  );
}

// ============================================
// FILTER TOGGLE
// ============================================

function FilterToggle({ mode, setMode, label1 = 'FOR YOU', label2 = 'ALL', styles }) {
  return (
    <div style={{ display: 'inline-flex', borderBottom: `1px solid ${styles.colors.border}`, marginBottom: '56px' }}>
      {[{ key: 'forYou', label: label1 }, { key: 'all', label: label2 }].map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setMode(key)}
          style={{
            background: 'none',
            border: 'none',
            padding: '16px 36px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            color: mode === key ? styles.colors.accent : styles.colors.muted,
            borderBottom: mode === key ? `3px solid ${styles.colors.accent}` : '3px solid transparent',
            marginBottom: '-1px'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// ============================================
// GATEWAY PAGE (LP1)
// ============================================

function GatewayPage({ setShowQuiz, styles }) {
  return (
    <div className="fade-in" style={{ padding: '120px 64px 160px' }}>
      {/* Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center', marginBottom: '200px' }}>
        <div>
          <h1 className="hero-headline" style={{ marginBottom: '48px' }}>
            RITUALS FOR<br/>RADIANT<br/>SKIN
          </h1>
          
          <p style={{ fontSize: '19px', lineHeight: 1.8, color: styles.colors.muted, marginBottom: '56px', maxWidth: '460px' }}>
            Discover your personalized K-Beauty routine. Science-backed ingredients, curated for your unique skin.
          </p>
          
          <button onClick={() => setShowQuiz(true)} className="hover-lift" style={{
            background: styles.colors.accent,
            border: 'none',
            borderRadius: '48px',
            padding: '24px 52px',
            fontSize: '13px',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '2px'
          }}>
            DISCOVER YOUR ROUTINE
          </button>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Hero Duo Model Image */}
          <div style={{
            background: `linear-gradient(180deg, ${styles.colors.pastel} 0%, #c8e6c9 100%)`,
            borderRadius: '400px 400px 60px 60px',
            height: '680px',
            overflow: 'hidden'
          }}>
            <img src={IMAGES.heroDuo} alt="K-Beauty Models" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          
          {/* Quiz Steps Preview - Frosted Glass */}
          <div className="frosted-glass" style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '24px',
            padding: '32px',
            width: '260px'
          }}>
            {[
              { step: 1, label: 'Skin Type', opts: 'Oily, Dry, Combo' },
              { step: 2, label: 'Goal', opts: 'Glow, Anti-Acne, Anti-Aging' },
              { step: 3, label: 'Budget', opts: 'Affordable, Mid-Range, Luxury' }
            ].map(({ step, label, opts }) => (
              <div key={step} style={{ marginBottom: step < 3 ? '24px' : 0 }}>
                <div style={{ fontSize: '11px', color: styles.colors.muted, letterSpacing: '0.5px' }}>Step {step}</div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px' }}>{label}</div>
                <div style={{ fontSize: '12px', color: styles.colors.muted, marginTop: '4px' }}>({opts})</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locked Preview Cards */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px' }}>
          {INGREDIENTS_DATA.slice(0, 3).map(ing => (
            <div key={ing.id} className="hover-lift" onClick={() => setShowQuiz(true)} style={{
              background: '#fff',
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: `1px solid ${styles.colors.border}`
            }}>
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: '#1A1A1A',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '8px 16px',
                  borderRadius: '6px',
                  letterSpacing: '1.5px',
                  zIndex: 2
                }}>
                  LOCKED
                </span>
                <div style={{ height: '220px', overflow: 'hidden', filter: 'blur(4px) grayscale(25%)', opacity: 0.75 }}>
                  <img src={ing.imageURL} alt={ing.name} style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{ing.name}</h3>
                <p style={{ fontSize: '14px', color: styles.colors.muted, lineHeight: 1.7, marginBottom: '20px' }}>
                  {ing.description.slice(0, 90)}...
                </p>
                <span style={{ color: styles.colors.accent, fontSize: '14px', fontWeight: 600 }}>Learn more →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// VAULT PAGE (LP2)
// ============================================

function VaultPage({ profile, filterMode, setFilterMode, filterRoutines, filterIngredients, filterKits, showRoutineDetail, showIngredientDetail, setPage, isLoggedIn, setShowAuth, saveToCollection, styles }) {
  const routines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'am' || r.category === 'pm')).slice(0, 3);
  const ingredients = filterIngredients(INGREDIENTS_DATA).slice(0, 6);
  const kits = filterKits(KITS_DATA).slice(0, 2);

  return (
    <div className="fade-in" style={{ padding: '100px 64px 160px', paddingRight: '340px' }}>
      <ProfileSidebar profile={profile} isLoggedIn={isLoggedIn} setShowAuth={setShowAuth} styles={styles} />
      
      {/* Hero */}
      <section style={{ marginBottom: '80px' }}>
        <h1 className="hero-headline" style={{ marginBottom: '24px' }}>
          YOUR VAULT.<br/>YOUR GLOW.
        </h1>
        <p style={{ fontSize: '21px', color: styles.colors.muted, maxWidth: '600px', lineHeight: 1.7 }}>
          Tailored routines, ingredients, and products within your <strong style={{ color: styles.colors.accent }}>{profile?.budget}</strong> budget.
        </p>
      </section>

      <FilterToggle mode={filterMode} setMode={setFilterMode} label2="ALL ROUTINES" styles={styles} />

      {/* A. Personalized Rituals */}
      <section style={{ marginBottom: '120px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '36px' }}>A. Your 3 Personalized Rituals</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {routines.map((r, i) => (
            <div key={r.id} className="hover-lift" onClick={() => showRoutineDetail(r.id)} style={{
              background: styles.colors.pastel,
              borderRadius: '24px',
              padding: '32px',
              cursor: 'pointer',
              border: '1px solid rgba(46,125,50,0.12)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{
                  background: styles.colors.accent,
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 800
                }}>
                  {i + 1}
                </span>
                <div>
                  <p style={{ fontSize: '13px', color: styles.colors.muted }}>Ritual {i + 1}</p>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: styles.colors.accent }}>{r.name.replace('Ritual ' + (i + 1) + ': ', '')}</h3>
                </div>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <BudgetTag budget={r.budgetTag} price={r.kitPrice} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {r.steps.slice(0, 4).map(s => (
                  <div key={s.stepNum} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ width: '6px', height: '24px', background: styles.colors.accent, borderRadius: '3px', opacity: 0.2 + (s.stepNum * 0.15) }}/>
                    Step {s.stepNum}: {s.title}
                  </div>
                ))}
              </div>
              
              <button style={{
                marginTop: '24px',
                background: 'none',
                border: 'none',
                color: styles.colors.accent,
                fontSize: '13px',
                fontWeight: 700,
                padding: 0
              }}>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* B. Core Actives */}
      <section style={{ marginBottom: '120px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>B. Core Actives For Your Goal</h2>
        <p style={{ fontSize: '15px', color: styles.colors.muted, marginBottom: '36px' }}>
          Ingredients matched to your <strong>{profile?.goal}</strong> goal
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px' }}>
          {ingredients.map(ing => (
            <div key={ing.id} className="hover-lift" onClick={() => showIngredientDetail(ing.id)} style={{ cursor: 'pointer', textAlign: 'center' }}>
              <div style={{ borderRadius: '20px', height: '120px', overflow: 'hidden', marginBottom: '16px' }}>
                <img src={ing.imageURL} alt={ing.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>{ing.name}</h4>
              <p style={{ fontSize: '11px', color: styles.colors.muted, lineHeight: 1.6 }}>
                {ing.description.slice(0, 50)}...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* C. Shop Bundle */}
      <section>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '36px' }}>C. Shop Your Personalized Bundle</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {kits.map(kit => (
            <div key={kit.id} className="hover-lift" style={{
              background: styles.colors.light,
              borderRadius: '24px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src={kit.imageURL} alt={kit.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ padding: '36px' }}>
                <BudgetTag budget={kit.budget} />
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '16px 0 12px' }}>{kit.name}, ${kit.price}</h3>
                <p style={{ fontSize: '14px', color: styles.colors.muted, marginBottom: '28px', lineHeight: 1.7 }}>{kit.description}</p>
                <button onClick={() => saveToCollection(kit)} style={{
                  width: '100%',
                  background: styles.colors.accent,
                  border: 'none',
                  borderRadius: '14px',
                  padding: '18px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  Amazon affiliate links
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// ROUTINES PAGE
// ============================================

function RoutinesPage({ profile, filterMode, setFilterMode, filterRoutines, showRoutineDetail, isLoggedIn, setShowAuth, styles }) {
  const amRoutines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'am'));
  const pmRoutines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'pm'));
  const weeklyRoutines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'weekly'));

  return (
    <div className="fade-in" style={{ padding: '100px 64px 160px', paddingRight: '340px' }}>
      <ProfileSidebar profile={profile} isLoggedIn={isLoggedIn} setShowAuth={setShowAuth} styles={styles} />
      
      <section style={{ marginBottom: '80px' }}>
        <h1 className="hero-headline" style={{ marginBottom: '24px' }}>
          THE COMPLETE<br/>RITUAL ARCHIVE
        </h1>
        <p style={{ fontSize: '21px', color: styles.colors.muted }}>
          Step-by-step protocols for every skin goal and frequency.
        </p>
      </section>

      <FilterToggle mode={filterMode} setMode={setFilterMode} label2="ALL ROUTINES" styles={styles} />

      {/* AM */}
      <section style={{ marginBottom: '100px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>A. Daily Routines</h2>
        <h3 style={{ fontSize: '13px', fontWeight: 700, color: styles.colors.muted, marginBottom: '32px', letterSpacing: '1.5px' }}>AM ROUTINES</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {amRoutines.map((r, i) => (
            <RoutineCard key={r.id} routine={r} index={i + 1} onClick={() => showRoutineDetail(r.id)} styles={styles} />
          ))}
        </div>
      </section>

      {/* PM */}
      <section style={{ marginBottom: '100px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 700, color: styles.colors.muted, marginBottom: '32px', letterSpacing: '1.5px' }}>PM ROUTINES</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {pmRoutines.map((r, i) => (
            <RoutineCard key={r.id} routine={r} index={i + 1} onClick={() => showRoutineDetail(r.id)} styles={styles} />
          ))}
        </div>
      </section>

      {/* Weekly */}
      <section>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px' }}>B. Weekly Routines</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {weeklyRoutines.map((r, i) => (
            <RoutineCard key={r.id} routine={r} index={i + 1} onClick={() => showRoutineDetail(r.id)} styles={styles} />
          ))}
        </div>
      </section>
    </div>
  );
}

function RoutineCard({ routine, index, onClick, styles }) {
  return (
    <div className="hover-lift" onClick={onClick} style={{
      background: styles.colors.pastel,
      borderRadius: '24px',
      padding: '32px',
      cursor: 'pointer',
      border: '1px solid rgba(46,125,50,0.1)'
    }}>
      <h3 style={{ fontSize: '20px', fontWeight: 700, color: styles.colors.accent, marginBottom: '12px' }}>
        Ritual {index}: {routine.name.replace(/Ritual \d+: /, '')}
      </h3>
      <div style={{ marginBottom: '24px' }}>
        <BudgetTag budget={routine.budgetTag} price={routine.kitPrice} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {routine.steps.map(s => (
          <div key={s.stepNum} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '14px' }}>
            <span style={{ width: '8px', height: '28px', background: styles.colors.accent, borderRadius: '4px', opacity: 0.2 + (s.stepNum * 0.12) }}/>
            Step {s.stepNum}: {s.title}
          </div>
        ))}
      </div>
      
      <button style={{
        marginTop: '28px',
        background: 'none',
        border: 'none',
        color: styles.colors.accent,
        fontSize: '13px',
        fontWeight: 700,
        padding: 0
      }}>
        Learn More →
      </button>
    </div>
  );
}

// ============================================
// INGREDIENTS PAGE
// ============================================

function IngredientsPage({ profile, filterMode, setFilterMode, filterIngredients, search, setSearch, filters, setFilters, showIngredientDetail, styles }) {
  const ingredients = filterIngredients(INGREDIENTS_DATA);

  return (
    <div className="fade-in" style={{ padding: '100px 64px 160px' }}>
      <section style={{ marginBottom: '56px' }}>
        <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
          K-Beauty Wisdom.<br/>Backed by Biochemistry.
        </h1>
      </section>

      {/* Banner */}
      <div style={{ height: '320px', borderRadius: '32px', marginBottom: '56px', overflow: 'hidden' }}>
        <img src={IMAGES.ingredientsBanner} alt="K-Beauty Ingredients" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '48px', flexWrap: 'wrap' }}>
        <FilterToggle mode={filterMode} setMode={setFilterMode} label2="ALL ACTIVES" styles={styles} />
        
        {profile && (
          <div className="frosted-glass" style={{ padding: '16px 24px', borderRadius: '14px', fontSize: '13px', marginLeft: 'auto' }}>
            <strong>Your Profile:</strong> {profile.skinType} • <span style={{ color: styles.colors.accent, fontWeight: 700 }}>{profile.goal}</span> • {profile.budget}
          </div>
        )}
      </div>

      {/* Search & Filters */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '340px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px' }}>🔍</span>
          <input
            type="text"
            placeholder="Search ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '18px 18px 18px 56px',
              border: `1px solid ${styles.colors.border}`,
              borderRadius: '14px',
              fontSize: '15px',
              outline: 'none'
            }}
          />
        </div>
        
        <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })} style={{
          padding: '18px 28px',
          border: `1px solid ${styles.colors.border}`,
          borderRadius: '14px',
          fontSize: '14px',
          background: '#fff',
          cursor: 'pointer',
          minWidth: '200px'
        }}>
          <option value="">Active Type (All)</option>
          {['Humectant', 'Exfoliant', 'Antioxidant', 'Soothing', 'Treatment', 'Brightening'].map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        
        <select value={filters.source} onChange={(e) => setFilters({ ...filters, source: e.target.value })} style={{
          padding: '18px 28px',
          border: `1px solid ${styles.colors.border}`,
          borderRadius: '14px',
          fontSize: '14px',
          background: '#fff',
          cursor: 'pointer',
          minWidth: '180px'
        }}>
          <option value="">Source (All)</option>
          {['Korean', 'Japanese', 'Universal'].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
        {ingredients.map(ing => (
          <div key={ing.id} className="hover-lift" onClick={() => showIngredientDetail(ing.id)} style={{
            background: '#fff',
            borderRadius: '24px',
            overflow: 'hidden',
            cursor: 'pointer',
            border: `1px solid ${styles.colors.border}`
          }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={ing.imageURL} alt={ing.name} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ padding: '26px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{ing.name}</h3>
              <p style={{ fontSize: '13px', color: styles.colors.muted, lineHeight: 1.7, marginBottom: '16px' }}>
                {ing.description.slice(0, 75)}...
              </p>
              <span style={{
                display: 'inline-block',
                background: '#C62828',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '5px',
                letterSpacing: '0.5px'
              }}>
                MYTH BUSTED
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// SHOP PAGE
// ============================================

function ShopPage({ profile, filterMode, setFilterMode, filterKits, setActiveProduct, isLoggedIn, setShowAuth, saveToCollection, styles }) {
  const kits = filterKits(KITS_DATA);

  return (
    <div className="fade-in" style={{ padding: '100px 64px 160px', paddingRight: '340px' }}>
      <ProfileSidebar profile={profile} isLoggedIn={isLoggedIn} setShowAuth={setShowAuth} styles={styles} />
      
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #faf8f5 0%, #f0ebe3 100%)',
        borderRadius: '32px',
        padding: '100px',
        marginBottom: '80px'
      }}>
        <h1 className="hero-headline" style={{ marginBottom: '24px' }}>
          CURATED KITS &<br/>SINGLE ACTIVES
        </h1>
        <p style={{ fontSize: '21px', color: styles.colors.muted }}>
          The essential K/J-Beauty tools and bundles, approved by the Vault.
        </p>
      </section>

      <FilterToggle mode={filterMode} setMode={setFilterMode} label2="ALL PRODUCTS" styles={styles} />

      {/* A. Recommended Kits */}
      <section style={{ marginBottom: '100px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '36px' }}>A. Your Recommended Kits</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {kits.slice(0, 2).map(kit => (
            <div key={kit.id} className="hover-lift" style={{
              background: styles.colors.light,
              borderRadius: '28px',
              overflow: 'hidden'
            }}>
              {/* AM Glow Kit Bundle Image */}
              <div style={{ height: '280px', overflow: 'hidden' }}>
                <img src={kit.imageURL} alt={kit.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <BudgetTag budget={kit.budget} />
                <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '18px 0 14px' }}>{kit.name}, ${kit.price}</h3>
                <p style={{ fontSize: '15px', color: styles.colors.muted, marginBottom: '32px', lineHeight: 1.8 }}>{kit.description}</p>
                <button onClick={() => saveToCollection(kit)} style={{
                  width: '100%',
                  background: styles.colors.accent,
                  border: 'none',
                  borderRadius: '16px',
                  padding: '20px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  Amazon affiliate
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B. All Kits */}
      <section>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '36px' }}>B. All Curated Kits</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {kits.slice(2).map(kit => (
            <div key={kit.id} className="hover-lift" onClick={() => setActiveProduct(kit)} style={{
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: `1px solid ${styles.colors.border}`
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src={kit.imageURL} alt={kit.name} style={{ width: '100%', height: '100%' }} />
                <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                  <BudgetTag budget={kit.budget} size="small" />
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{kit.name}</h4>
                <p style={{ fontSize: '20px', fontWeight: 700, color: styles.colors.accent }}>${kit.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// QUIZ MODAL
// ============================================

function QuizModal({ onClose, onComplete, styles }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ skinType: '', goal: '', budget: '' });

  const handleSelect = (field, value) => setAnswers({ ...answers, [field]: value });
  const handleNext = () => step < 3 ? setStep(step + 1) : onComplete(answers);
  const canProceed = () => step === 1 ? answers.skinType : step === 2 ? answers.goal : answers.budget;

  const config = {
    1: { field: 'skinType', title: "What's your skin type?", options: [
      { value: 'Oily', desc: 'Shiny T-zone, enlarged pores, prone to breakouts' },
      { value: 'Dry', desc: 'Tight feeling, flaky patches, fine lines more visible' },
      { value: 'Combo', desc: 'Oily T-zone but dry cheeks, unpredictable' }
    ]},
    2: { field: 'goal', title: "What's your primary goal?", options: [
      { value: 'Glow', desc: 'Achieve that dewy, glass skin radiance' },
      { value: 'Anti-Acne', desc: 'Clear breakouts and prevent future ones' },
      { value: 'Anti-Aging', desc: 'Reduce fine lines and boost firmness' }
    ]},
    3: { field: 'budget', title: "What's your budget range?", options: [
      { value: 'Affordable', desc: 'Under $50/routine • The Ordinary, CosRX' },
      { value: 'Mid-Range', desc: '$50-150/routine • Dr. Jart+, Laneige' },
      { value: 'Luxury', desc: '$150+/routine • Sulwhasoo, SK-II' }
    ]}
  };

  const { field, title, options } = config[step];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.65)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div className="slide-up frosted-glass" style={{
        width: '560px',
        borderRadius: '32px',
        padding: '64px',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '28px',
          right: '28px',
          background: 'none',
          border: 'none',
          fontSize: '32px',
          color: styles.colors.muted
        }}>×</button>

        {/* Progress */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '48px' }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{
              flex: 1,
              height: '5px',
              borderRadius: '3px',
              background: s <= step ? styles.colors.accent : styles.colors.border
            }}/>
          ))}
        </div>

        <p style={{ fontSize: '13px', color: styles.colors.muted, marginBottom: '10px', letterSpacing: '0.5px' }}>
          Step {step} of 3
        </p>
        
        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '40px' }}>{title}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => handleSelect(field, opt.value)}
              style={{
                padding: '24px 30px',
                border: `2px solid ${answers[field] === opt.value ? styles.colors.accent : styles.colors.border}`,
                borderRadius: '16px',
                background: answers[field] === opt.value ? styles.colors.pastel : '#fff',
                fontSize: '18px',
                fontWeight: 600,
                textAlign: 'left'
              }}
            >
              {opt.value}
              <span style={{ display: 'block', fontSize: '13px', color: styles.colors.muted, marginTop: '6px' }}>
                {opt.desc}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!canProceed()}
          style={{
            width: '100%',
            marginTop: '40px',
            padding: '20px',
            background: canProceed() ? styles.colors.accent : styles.colors.border,
            border: 'none',
            borderRadius: '16px',
            fontSize: '16px',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.5px'
          }}
        >
          {step === 3 ? 'Unlock My Vault' : 'Continue'}
        </button>
      </div>
    </div>
  );
}

// ============================================
// AUTH MODAL
// ============================================

function AuthModal({ onClose, onLogin, styles }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await onLogin(email, password);
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.65)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div className="slide-up frosted-glass" style={{
        width: '500px',
        borderRadius: '32px',
        padding: '64px',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '28px',
          right: '28px',
          background: 'none',
          border: 'none',
          fontSize: '32px',
          color: styles.colors.muted
        }}>×</button>

        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px' }}>
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p style={{ fontSize: '15px', color: styles.colors.muted, marginBottom: '40px' }}>
          {isSignup ? 'Save your personalized vault and build your collection.' : 'Sign in to access your saved collection.'}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '18px 22px',
              border: `1px solid ${styles.colors.border}`,
              borderRadius: '14px',
              fontSize: '15px',
              outline: 'none'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '18px 22px',
              border: `1px solid ${styles.colors.border}`,
              borderRadius: '14px',
              fontSize: '15px',
              outline: 'none'
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: '100%',
            marginTop: '32px',
            padding: '20px',
            background: styles.colors.accent,
            border: 'none',
            borderRadius: '16px',
            fontSize: '16px',
            fontWeight: 700,
            color: '#fff',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Loading...' : (isSignup ? 'Create Account' : 'Sign In')}
        </button>

        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: styles.colors.muted }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => setIsSignup(!isSignup)} style={{
            background: 'none',
            border: 'none',
            color: styles.colors.accent,
            fontWeight: 700
          }}>
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

// ============================================
// ROUTINE DETAIL MODAL (Full-Screen with 2 Products/Step)
// ============================================

function RoutineDetailModal({ routine, profile, onClose, styles }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '48px'
    }}>
      <div className="slide-up" style={{
        background: '#fff',
        borderRadius: '32px',
        width: '100%',
        maxWidth: '960px',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${styles.colors.pastel} 0%, #c8e6c9 100%)`,
          padding: '64px',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <button onClick={onClose} style={{
            position: 'absolute',
            top: '28px',
            right: '28px',
            background: '#fff',
            border: 'none',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            fontSize: '24px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}>×</button>
          
          <BudgetTag budget={routine.budgetTag} price={routine.kitPrice} />
          
          <h2 style={{ fontSize: '48px', fontWeight: 800, marginTop: '20px', marginBottom: '12px' }}>
            {routine.name.replace(/Ritual \d+: /, '')}
          </h2>
          <p style={{ fontSize: '18px', color: styles.colors.muted, marginBottom: '10px' }}>{routine.description}</p>
          <p style={{ fontSize: '14px', color: styles.colors.muted }}>⏱ Duration: {routine.duration}</p>
        </div>

        {/* Steps */}
        <div style={{ padding: '64px' }}>
          {routine.steps.map((step, idx) => (
            <div key={step.stepNum} style={{
              marginBottom: idx < routine.steps.length - 1 ? '56px' : 0,
              paddingBottom: idx < routine.steps.length - 1 ? '56px' : 0,
              borderBottom: idx < routine.steps.length - 1 ? `1px solid ${styles.colors.border}` : 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '28px' }}>
                <span style={{
                  background: styles.colors.accent,
                  color: '#fff',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 800,
                  flexShrink: 0
                }}>
                  {step.stepNum}
                </span>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ fontSize: '16px', color: styles.colors.muted, lineHeight: 1.8, marginBottom: '32px' }}>{step.detail}</p>
                  
                  {/* 2 Product Recommendations */}
                  <div>
                    <h4 style={{ fontSize: '12px', fontWeight: 800, color: styles.colors.muted, marginBottom: '20px', letterSpacing: '1.5px' }}>
                      RECOMMENDED PRODUCTS
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      {step.products.map((product, pIdx) => (
                        <div key={pIdx} style={{
                          background: styles.colors.light,
                          borderRadius: '18px',
                          padding: '22px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '18px'
                        }}>
                          <div style={{
                            width: '68px',
                            height: '68px',
                            borderRadius: '14px',
                            overflow: 'hidden',
                            flexShrink: 0
                          }}>
                            <img src={product.imageURL} alt={product.name} style={{ width: '100%', height: '100%' }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{product.name}</p>
                            <p style={{ fontSize: '14px', color: styles.colors.muted, marginBottom: '8px' }}>${product.price}</p>
                            {/* Budget Match Checkmark */}
                            {(!profile || product.budget === profile.budget || profile.budget === 'Luxury') && (
                              <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                fontSize: '11px',
                                color: styles.colors.accent,
                                fontWeight: 700
                              }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                                Budget Match
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// INGREDIENT DETAIL MODAL (Myth Busted + Top 3 Products)
// ============================================

function IngredientDetailModal({ ingredient, profile, onClose, styles }) {
  // Filter linked products by budget
  const linkedProducts = ingredient.linkedProducts.filter(p => 
    !profile || p.budget === profile.budget || profile.budget === 'Luxury' || p.budget === 'Affordable'
  ).slice(0, 3);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '48px'
    }}>
      <div className="slide-up" style={{
        background: '#fff',
        borderRadius: '32px',
        width: '100%',
        maxWidth: '720px',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '28px',
          right: '28px',
          background: styles.colors.light,
          border: 'none',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          fontSize: '24px',
          zIndex: 10
        }}>×</button>

        {/* Image */}
        <div style={{ height: '300px', overflow: 'hidden' }}>
          <img src={ingredient.imageURL} alt={ingredient.name} style={{ width: '100%', height: '100%' }} />
        </div>

        <div style={{ padding: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800 }}>{ingredient.name}</h2>
            <span style={{
              background: '#C62828',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 800,
              padding: '7px 14px',
              borderRadius: '5px',
              letterSpacing: '0.5px'
            }}>
              MYTH BUSTED
            </span>
          </div>

          <p style={{ fontSize: '18px', color: styles.colors.muted, lineHeight: 1.8, marginBottom: '32px' }}>
            {ingredient.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <span style={{
              background: styles.colors.pastel,
              color: styles.colors.accent,
              fontSize: '13px',
              fontWeight: 700,
              padding: '10px 16px',
              borderRadius: '24px'
            }}>
              {ingredient.type}
            </span>
            <span style={{
              background: styles.colors.light,
              fontSize: '13px',
              fontWeight: 600,
              padding: '10px 16px',
              borderRadius: '24px'
            }}>
              {ingredient.source}
            </span>
            {ingredient.concerns.slice(0, 3).map(c => (
              <span key={c} style={{
                background: styles.colors.light,
                fontSize: '13px',
                fontWeight: 600,
                padding: '10px 16px',
                borderRadius: '24px'
              }}>
                {c}
              </span>
            ))}
          </div>

          {/* Myth Busted Component */}
          <div style={{
            background: '#FFF8E1',
            borderRadius: '20px',
            padding: '28px',
            marginBottom: '28px',
            borderLeft: '5px solid #FFA000'
          }}>
            <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '12px', color: '#E65100' }}>
              💡 Myth Busted
            </h4>
            <p style={{ fontSize: '16px', lineHeight: 1.8 }}>{ingredient.mythBusted}</p>
          </div>

          {/* Scientific Role */}
          <div style={{
            background: styles.colors.light,
            borderRadius: '20px',
            padding: '28px',
            marginBottom: '28px'
          }}>
            <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '12px' }}>🔬 Scientific Role</h4>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: styles.colors.muted }}>{ingredient.scientificRole}</p>
          </div>

          {/* How to Use */}
          <div style={{
            background: styles.colors.pastel,
            borderRadius: '20px',
            padding: '28px',
            marginBottom: '32px'
          }}>
            <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '12px', color: styles.colors.accent }}>✨ How to Use</h4>
            <p style={{ fontSize: '16px', lineHeight: 1.8 }}>{ingredient.howToUse}</p>
          </div>

          {/* Top 3 Products (Budget Filtered) */}
          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: 800,
              marginBottom: '20px',
              color: styles.colors.muted,
              letterSpacing: '1.5px'
            }}>
              TOP 3 PRODUCTS WITH {ingredient.name.toUpperCase()} {profile && `(${profile.budget})`}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {linkedProducts.map(product => (
                <div key={product.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  padding: '18px',
                  background: styles.colors.light,
                  borderRadius: '16px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: styles.colors.pastel,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    flexShrink: 0
                  }}>
                    🧴
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '16px', fontWeight: 700 }}>{product.name}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                      <span style={{ fontSize: '15px', color: styles.colors.accent, fontWeight: 700 }}>${product.price}</span>
                      <BudgetTag budget={product.budget} size="small" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// PRODUCT DETAIL MODAL (Login to Save)
// ============================================

function ProductDetailModal({ product, isLoggedIn, setShowAuth, saveToCollection, onClose, styles }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '48px'
    }}>
      <div className="slide-up" style={{
        background: '#fff',
        borderRadius: '32px',
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '28px',
          right: '28px',
          background: styles.colors.light,
          border: 'none',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          fontSize: '24px',
          zIndex: 10
        }}>×</button>

        {/* Image */}
        <div style={{
          height: '340px',
          background: 'linear-gradient(135deg, #f8f8f8 0%, #ebebeb 100%)',
          overflow: 'hidden'
        }}>
          <img src={product.imageURL} alt={product.name} style={{ width: '100%', height: '100%' }} />
        </div>

        <div style={{ padding: '40px' }}>
          <BudgetTag budget={product.budget} />

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '18px 0 12px' }}>{product.name}</h2>
          <p style={{ fontSize: '36px', fontWeight: 800, color: styles.colors.accent, marginBottom: '28px' }}>${product.price}</p>

          {product.description && (
            <p style={{ fontSize: '16px', color: styles.colors.muted, lineHeight: 1.8, marginBottom: '32px' }}>
              {product.description}
            </p>
          )}

          {/* Ingredients */}
          {product.ingredients && (
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 800, color: styles.colors.muted, marginBottom: '16px', letterSpacing: '1.5px' }}>
                KEY INGREDIENTS
              </h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {product.ingredients.map(ing => (
                  <span key={ing} style={{
                    background: styles.colors.light,
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: '10px 18px',
                    borderRadius: '24px'
                  }}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              onClick={() => {
                if (!isLoggedIn) {
                  onClose();
                  setShowAuth(true);
                } else {
                  saveToCollection(product);
                  onClose();
                }
              }}
              style={{
                flex: 1,
                padding: '18px',
                background: '#fff',
                border: `2px solid ${styles.colors.accent}`,
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: 700,
                color: styles.colors.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {isLoggedIn ? (
                <>♡ Add to Collection</>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Login to Save
                </>
              )}
            </button>
            <button
              onClick={() => window.open('#', '_blank')}
              style={{
                flex: 1,
                padding: '18px',
                background: styles.colors.accent,
                border: 'none',
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#fff'
              }}
            >
              Buy on Amazon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
