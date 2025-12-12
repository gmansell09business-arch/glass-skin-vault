/* ============================================
   GLASS SKIN VAULT - APP.JS
   Complete Application Logic
   ============================================ */

// ============================================
// IMAGE ASSETS
// ============================================

const IMAGES = {
    heroDuo: './assets/hero-duo.jpg',
    ingredientsBanner: './assets/ingredients-banner.jpg',
    niacinamide: './assets/niacinamide.jpg',
    ginseng: './assets/ginseng.jpg',
    hyaluronic: './assets/hyaluronic.jpg',
    salicylic: './assets/salicylic.jpg',
    rice: './assets/rice.jpg',
    centella: './assets/centella.jpg',
    retinol: './assets/retinol.jpg',
    greenTea: './assets/green-tea.jpg',
    amGlowKit: './assets/am-glow-kit.jpg',
    pmRestoreKit: './assets/pm-restore-kit.jpg',
    cleanser: './assets/cleanser.jpg',
    toner: './assets/toner.jpg',
    serum: './assets/serum.jpg',
    moisturizer: './assets/moisturizer.jpg',
    sunscreen: './assets/sunscreen.jpg',
    mask: './assets/mask.jpg',
    tool: './assets/tool.jpg',
};

// Fallback to Unsplash if local images not available
const FALLBACK_IMAGES = {
    heroDuo: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=900&h=600&fit=crop&q=80',
    ingredientsBanner: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=400&fit=crop&q=80',
    niacinamide: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&q=80',
    ginseng: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop&q=80',
    hyaluronic: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop&q=80',
    salicylic: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&q=80',
    rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop&q=80',
    centella: 'https://images.unsplash.com/photo-1628689469838-524a4a973b8e?w=400&h=400&fit=crop&q=80',
    retinol: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop&q=80',
    greenTea: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop&q=80',
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

// Get image with fallback
function getImage(key) {
    return FALLBACK_IMAGES[key] || IMAGES[key] || '';
}

// ============================================
// DATA
// ============================================

const ROUTINES_DATA = [
    {
        id: "AM01",
        name: "AM Glow",
        category: "am",
        budgetTag: "Mid-Range",
        kitPrice: 95,
        skinType: ["Oily", "Combo"],
        goal: ["Glow"],
        description: "The essential morning ritual for radiant, protected skin. 4 steps to glass skin glow.",
        duration: "10-12 minutes",
        imageKey: "amGlowKit",
        steps: [
            {
                stepNum: 1,
                title: "Cleanse",
                detail: "Gentle foam or gel cleanser. Massage 30 seconds in circular motions, focusing on T-zone. Rinse with lukewarm water and pat dry.",
                products: [
                    { name: "CosRX Low pH Good Morning Gel", budget: "Affordable", price: 12, imageKey: "cleanser" },
                    { name: "Sulwhasoo Gentle Cleansing Foam", budget: "Mid-Range", price: 36, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 2,
                title: "Toner",
                detail: "Hydrating toner to prep skin. Pat into skin with hands or cotton pad. Apply up to 7 thin layers for intense hydration.",
                products: [
                    { name: "Klairs Supple Preparation Toner", budget: "Mid-Range", price: 22, imageKey: "toner" },
                    { name: "Pyunkang Yul Essence Toner", budget: "Affordable", price: 18, imageKey: "toner" }
                ]
            },
            {
                stepNum: 3,
                title: "Serum",
                detail: "Apply 2-3 drops of Vitamin C or Niacinamide serum. Wait 1-2 minutes for absorption. Target dark spots directly.",
                products: [
                    { name: "Beauty of Joseon Glow Serum", budget: "Affordable", price: 17, imageKey: "serum" },
                    { name: "Missha Vita C Plus Serum", budget: "Mid-Range", price: 28, imageKey: "serum" }
                ]
            },
            {
                stepNum: 4,
                title: "Moisturizer/SPF",
                detail: "Lock in hydration and protect. Apply SPF 30+ generously. Reapply every 2 hours if outdoors.",
                products: [
                    { name: "Beauty of Joseon Sun Relief SPF50", budget: "Affordable", price: 16, imageKey: "sunscreen" },
                    { name: "Isntree Hyaluronic Watery Sun Gel", budget: "Mid-Range", price: 22, imageKey: "sunscreen" }
                ]
            }
        ]
    },
    {
        id: "AM02",
        name: "AM Renew",
        category: "am",
        budgetTag: "Mid-Range",
        kitPrice: 110,
        skinType: ["Oily", "Dry"],
        goal: ["Anti-Aging", "Glow"],
        description: "Advanced morning protocol with double cleanse for overnight product removal.",
        duration: "15-18 minutes",
        imageKey: "amGlowKit",
        steps: [
            {
                stepNum: 1,
                title: "Oil Cleanser",
                detail: "On dry skin, massage oil cleanser for 60 seconds. Emulsify with water until milky.",
                products: [
                    { name: "Kose Softymo Speedy Oil", budget: "Affordable", price: 10, imageKey: "cleanser" },
                    { name: "Banila Co Clean It Zero", budget: "Mid-Range", price: 24, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 2,
                title: "Water Cleanser",
                detail: "Follow with gentle foam cleanser for a perfectly clean canvas.",
                products: [
                    { name: "Hada Labo Foaming Cleanser", budget: "Affordable", price: 14, imageKey: "cleanser" },
                    { name: "Neogen Green Tea Fresh Foam", budget: "Mid-Range", price: 18, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 3,
                title: "Essence",
                detail: "Apply first essence. Lightweight layers prep skin to absorb products better.",
                products: [
                    { name: "Missha First Treatment Essence", budget: "Mid-Range", price: 32, imageKey: "toner" },
                    { name: "COSRX Galactomyces Essence", budget: "Affordable", price: 22, imageKey: "toner" }
                ]
            },
            {
                stepNum: 4,
                title: "SPF",
                detail: "Finish with broad-spectrum SPF 50. Korean sunscreens won't pill under makeup.",
                products: [
                    { name: "Biore UV Aqua Rich Watery", budget: "Affordable", price: 15, imageKey: "sunscreen" },
                    { name: "Anessa Perfect UV Milk", budget: "Mid-Range", price: 38, imageKey: "sunscreen" }
                ]
            }
        ]
    },
    {
        id: "AM03",
        name: "AM Balance",
        category: "am",
        budgetTag: "Affordable",
        kitPrice: 70,
        skinType: ["Combo"],
        goal: ["Glow", "Anti-Acne"],
        description: "Minimal yet effective routine for combination skin. Balances oily and dry zones.",
        duration: "8-10 minutes",
        imageKey: "amGlowKit",
        steps: [
            {
                stepNum: 1,
                title: "Micellar Water",
                detail: "No-rinse cleansing for sensitive skin. Swipe until cotton pad is clean.",
                products: [
                    { name: "Bioderma Sensibio H2O", budget: "Affordable", price: 15, imageKey: "toner" },
                    { name: "Son & Park Beauty Water", budget: "Mid-Range", price: 30, imageKey: "toner" }
                ]
            },
            {
                stepNum: 2,
                title: "Balancing Toner",
                detail: "Focus on T-zone if oily. For dry cheeks, apply extra layers.",
                products: [
                    { name: "Isntree Green Tea Toner", budget: "Affordable", price: 18, imageKey: "toner" },
                    { name: "Benton Aloe BHA Toner", budget: "Affordable", price: 20, imageKey: "toner" }
                ]
            },
            {
                stepNum: 3,
                title: "Lightweight Serum",
                detail: "Water-based serum that won't clog pores. Niacinamide or Centella.",
                products: [
                    { name: "The Ordinary Niacinamide 10%", budget: "Affordable", price: 8, imageKey: "serum" },
                    { name: "Purito Centella Serum", budget: "Affordable", price: 17, imageKey: "serum" }
                ]
            },
            {
                stepNum: 4,
                title: "Gel Moisturizer + SPF",
                detail: "Oil-free gel cream for hydration without heaviness.",
                products: [
                    { name: "Belif Aqua Bomb", budget: "Mid-Range", price: 42, imageKey: "moisturizer" },
                    { name: "COSRX Oil-Free Lotion", budget: "Affordable", price: 16, imageKey: "moisturizer" }
                ]
            }
        ]
    },
    {
        id: "PM01",
        name: "PM Restore",
        category: "pm",
        budgetTag: "Mid-Range",
        kitPrice: 95,
        skinType: ["Oily", "Combo", "Dry"],
        goal: ["Glow", "Anti-Aging"],
        description: "Night repair ritual focusing on deep cleansing and overnight restoration.",
        duration: "15-20 minutes",
        imageKey: "pmRestoreKit",
        steps: [
            {
                stepNum: 1,
                title: "Oil Cleanser",
                detail: "First cleanse melts away makeup and SPF. Massage 2 minutes minimum.",
                products: [
                    { name: "DHC Deep Cleansing Oil", budget: "Mid-Range", price: 28, imageKey: "cleanser" },
                    { name: "Heimish All Clean Balm", budget: "Affordable", price: 18, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 2,
                title: "Foam Cleanser",
                detail: "Second cleanse removes residue. Use lukewarm water.",
                products: [
                    { name: "CeraVe Foaming Cleanser", budget: "Affordable", price: 15, imageKey: "cleanser" },
                    { name: "Tatcha The Rice Wash", budget: "Mid-Range", price: 38, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 3,
                title: "Exfoliant (2-3x/week)",
                detail: "Chemical exfoliation at night. AHA for dry, BHA for oily.",
                products: [
                    { name: "COSRX AHA/BHA Toner", budget: "Affordable", price: 15, imageKey: "toner" },
                    { name: "Glow Recipe Watermelon Toner", budget: "Mid-Range", price: 34, imageKey: "toner" }
                ]
            },
            {
                stepNum: 4,
                title: "Treatment Serum",
                detail: "Apply retinol, peptides, or centella. Works best overnight.",
                products: [
                    { name: "The Ordinary Retinol 0.5%", budget: "Affordable", price: 8, imageKey: "serum" },
                    { name: "Drunk Elephant TLC Framboos", budget: "Luxury", price: 90, imageKey: "serum" }
                ]
            },
            {
                stepNum: 5,
                title: "Night Cream",
                detail: "Seal with rich night cream. Look for ceramides and peptides.",
                products: [
                    { name: "CeraVe PM Moisturizer", budget: "Affordable", price: 14, imageKey: "moisturizer" },
                    { name: "Laneige Water Sleeping Mask", budget: "Mid-Range", price: 28, imageKey: "moisturizer" }
                ]
            }
        ]
    },
    {
        id: "PM02",
        name: "PM Anti-Aging",
        category: "pm",
        budgetTag: "Luxury",
        kitPrice: 150,
        skinType: ["Dry", "Combo"],
        goal: ["Anti-Aging"],
        description: "Premium anti-aging protocol with retinoids and peptide technology.",
        duration: "20-25 minutes",
        imageKey: "pmRestoreKit",
        steps: [
            {
                stepNum: 1,
                title: "Luxury Oil Cleanser",
                detail: "Premium cleanser with antioxidants. Provides lymphatic drainage.",
                products: [
                    { name: "Sulwhasoo Gentle Cleansing Oil", budget: "Mid-Range", price: 48, imageKey: "cleanser" },
                    { name: "Tatcha Camellia Cleansing Oil", budget: "Luxury", price: 52, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 2,
                title: "Peptide Cleanser",
                detail: "Anti-aging cleanser gentle enough not to strip moisture.",
                products: [
                    { name: "Drunk Elephant Beste Jelly", budget: "Mid-Range", price: 34, imageKey: "cleanser" },
                    { name: "Fresh Soy Face Cleanser", budget: "Mid-Range", price: 42, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 3,
                title: "Enzyme Exfoliant",
                detail: "Gentle enzyme or low-acid peel. Promotes cell turnover.",
                products: [
                    { name: "Tatcha Rice Polish", budget: "Luxury", price: 68, imageKey: "mask" },
                    { name: "Amorepacific Treatment Enzyme", budget: "Luxury", price: 95, imageKey: "mask" }
                ]
            },
            {
                stepNum: 4,
                title: "Retinoid Treatment",
                detail: "Encapsulated retinoid. Build tolerance slowly.",
                products: [
                    { name: "Shiseido Benefiance Serum", budget: "Luxury", price: 95, imageKey: "serum" },
                    { name: "Drunk Elephant A-Passioni", budget: "Mid-Range", price: 74, imageKey: "serum" }
                ]
            },
            {
                stepNum: 5,
                title: "Luxury Night Cream",
                detail: "Rich occlusive cream with peptides and ceramides.",
                products: [
                    { name: "Sulwhasoo Overnight Mask", budget: "Luxury", price: 68, imageKey: "moisturizer" },
                    { name: "La Mer Crème de la Mer", budget: "Luxury", price: 195, imageKey: "moisturizer" }
                ]
            }
        ]
    },
    {
        id: "PM03",
        name: "PM Hydrate",
        category: "pm",
        budgetTag: "Affordable",
        kitPrice: 70,
        skinType: ["Dry", "Combo"],
        goal: ["Glow"],
        description: "Budget-friendly night routine for deep hydration and barrier repair.",
        duration: "12-15 minutes",
        imageKey: "pmRestoreKit",
        steps: [
            {
                stepNum: 1,
                title: "Cleansing Balm",
                detail: "Affordable cleansing balm to remove the day.",
                products: [
                    { name: "Pond's Cold Cream", budget: "Affordable", price: 8, imageKey: "cleanser" },
                    { name: "Heimish All Clean Balm", budget: "Affordable", price: 18, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 2,
                title: "Gentle Foam",
                detail: "Simple second cleanse. CeraVe and Vanicream are favorites.",
                products: [
                    { name: "CeraVe Hydrating Cleanser", budget: "Affordable", price: 12, imageKey: "cleanser" },
                    { name: "Vanicream Gentle Cleanser", budget: "Affordable", price: 10, imageKey: "cleanser" }
                ]
            },
            {
                stepNum: 3,
                title: "Mild Exfoliant",
                detail: "Budget-friendly AHA/BHA from The Ordinary.",
                products: [
                    { name: "The Ordinary Glycolic 7%", budget: "Affordable", price: 9, imageKey: "serum" },
                    { name: "Stridex Red Box Pads", budget: "Affordable", price: 5, imageKey: "toner" }
                ]
            },
            {
                stepNum: 4,
                title: "Hydrating Serum",
                detail: "Hyaluronic acid or snail mucin. Apply to damp skin.",
                products: [
                    { name: "The Ordinary HA 2%", budget: "Affordable", price: 8, imageKey: "serum" },
                    { name: "COSRX Snail Mucin 96%", budget: "Affordable", price: 22, imageKey: "serum" }
                ]
            },
            {
                stepNum: 5,
                title: "Barrier Cream",
                detail: "Rich moisturizer. CeraVe in the tub is gold standard.",
                products: [
                    { name: "CeraVe Moisturizing Cream", budget: "Affordable", price: 16, imageKey: "moisturizer" },
                    { name: "Vanicream Moisturizing Cream", budget: "Affordable", price: 14, imageKey: "moisturizer" }
                ]
            }
        ]
    },
    {
        id: "W01",
        name: "Weekly Reset",
        category: "weekly",
        budgetTag: "Mid-Range",
        kitPrice: 70,
        skinType: ["Oily", "Combo", "Dry"],
        goal: ["Glow"],
        description: "Once-weekly deep treatment for total skin renewal. Best on Sunday evenings.",
        duration: "45-60 minutes",
        imageKey: "mask",
        steps: [
            {
                stepNum: 1,
                title: "Deep Exfoliation",
                detail: "Physical or chemical exfoliation with rice bran or enzyme mask.",
                products: [
                    { name: "Tatcha The Rice Polish", budget: "Luxury", price: 68, imageKey: "mask" },
                    { name: "Skinfood Black Sugar Mask", budget: "Affordable", price: 12, imageKey: "mask" }
                ]
            },
            {
                stepNum: 2,
                title: "Treatment Mask",
                detail: "Clay for oily, hydrating sheet for dry. Leave 10-15 minutes.",
                products: [
                    { name: "Innisfree Volcanic Clay Mask", budget: "Affordable", price: 15, imageKey: "mask" },
                    { name: "Dr. Jart+ Dermask", budget: "Mid-Range", price: 12, imageKey: "mask" }
                ]
            },
            {
                stepNum: 3,
                title: "Serum Layering",
                detail: "Layer 2-3 serums while skin is receptive. Thinnest to thickest.",
                products: [
                    { name: "Missha Ampoule Set", budget: "Mid-Range", price: 35, imageKey: "serum" },
                    { name: "The Ordinary Buffet", budget: "Affordable", price: 18, imageKey: "serum" }
                ]
            },
            {
                stepNum: 4,
                title: "Sleeping Pack",
                detail: "Finish with overnight mask to lock in treatments.",
                products: [
                    { name: "Laneige Water Sleeping Mask", budget: "Mid-Range", price: 28, imageKey: "moisturizer" },
                    { name: "COSRX Rice Sleeping Mask", budget: "Affordable", price: 16, imageKey: "moisturizer" }
                ]
            }
        ]
    },
    {
        id: "W02",
        name: "Deep Cleanse",
        category: "weekly",
        budgetTag: "Affordable",
        kitPrice: 50,
        skinType: ["Oily", "Combo"],
        goal: ["Anti-Acne"],
        description: "Pore-clearing treatment for congested skin. Perfect mid-week refresh.",
        duration: "30-40 minutes",
        imageKey: "mask",
        steps: [
            {
                stepNum: 1,
                title: "Steam & Prep",
                detail: "Steam face with warm towel for 5 minutes to open pores.",
                products: [
                    { name: "Natural Konjac Sponge", budget: "Affordable", price: 8, imageKey: "tool" },
                    { name: "Foreo Luna Mini 3", budget: "Luxury", price: 119, imageKey: "tool" }
                ]
            },
            {
                stepNum: 2,
                title: "Pore Mask",
                detail: "Charcoal or clay mask on T-zone. Multi-mask with hydrating on cheeks.",
                products: [
                    { name: "Innisfree Volcanic Pore Clay", budget: "Affordable", price: 18, imageKey: "mask" },
                    { name: "Origins Clear Improvement", budget: "Mid-Range", price: 28, imageKey: "mask" }
                ]
            },
            {
                stepNum: 3,
                title: "Pore Serum",
                detail: "Niacinamide to minimize pores post-cleanse.",
                products: [
                    { name: "The Ordinary Niacinamide", budget: "Affordable", price: 8, imageKey: "serum" },
                    { name: "Paula's Choice Pore Reducing", budget: "Mid-Range", price: 32, imageKey: "toner" }
                ]
            },
            {
                stepNum: 4,
                title: "Light Moisturizer",
                detail: "Non-comedogenic moisturizer. Don't skip even if oily.",
                products: [
                    { name: "Neutrogena Hydro Boost Gel", budget: "Affordable", price: 18, imageKey: "moisturizer" },
                    { name: "Tatcha Water Cream", budget: "Luxury", price: 68, imageKey: "moisturizer" }
                ]
            }
        ]
    },
    {
        id: "W03",
        name: "Glow Treatment",
        category: "weekly",
        budgetTag: "Luxury",
        kitPrice: 120,
        skinType: ["Dry", "Combo"],
        goal: ["Glow", "Anti-Aging"],
        description: "At-home facial experience with professional-level products.",
        duration: "60-90 minutes",
        imageKey: "mask",
        steps: [
            {
                stepNum: 1,
                title: "Professional Peel",
                detail: "At-home peel with lactic or glycolic acid. Follow timing exactly.",
                products: [
                    { name: "Drunk Elephant Babyfacial", budget: "Luxury", price: 80, imageKey: "mask" },
                    { name: "The Ordinary AHA 30%", budget: "Affordable", price: 8, imageKey: "serum" }
                ]
            },
            {
                stepNum: 2,
                title: "Hydrogel Mask",
                detail: "Luxury hydrogel or bio-cellulose mask. 20+ minutes.",
                products: [
                    { name: "SK-II Facial Treatment Mask", budget: "Luxury", price: 95, imageKey: "mask" },
                    { name: "111Skin Rose Gold Mask", budget: "Luxury", price: 32, imageKey: "mask" }
                ]
            },
            {
                stepNum: 3,
                title: "Ampoule Cocktail",
                detail: "Layer high-concentration ampoules. Vitamin C + Peptides + HA.",
                products: [
                    { name: "Sulwhasoo First Care Serum", budget: "Luxury", price: 89, imageKey: "serum" },
                    { name: "Estée Lauder ANR", budget: "Luxury", price: 105, imageKey: "serum" }
                ]
            },
            {
                stepNum: 4,
                title: "Prestige Night Cream",
                detail: "Luxurious night cream for spa-level finish.",
                products: [
                    { name: "Sulwhasoo Timetreasure", budget: "Luxury", price: 280, imageKey: "moisturizer" },
                    { name: "Tatcha Dewy Skin Cream", budget: "Luxury", price: 68, imageKey: "moisturizer" }
                ]
            }
        ]
    }
];

const INGREDIENTS_DATA = [
    {
        id: "ING01",
        name: "Niacinamide",
        scientificRole: "Reduces sebum production by up to 40% in clinical studies. Improves barrier function by increasing ceramide synthesis. Inhibits melanosome transfer.",
        mythBusted: "Does NOT cause purging – if you break out, it's likely sensitivity to the concentration. Start with 5% and work up to 10%.",
        description: "A form of Vitamin B3. Brightens, improves skin barrier, regulates oil production and minimizes pores.",
        type: "Humectant",
        source: "Korean",
        concerns: ["Acne", "Pores", "Hydration"],
        goals: ["Glow", "Anti-Acne"],
        howToUse: "Apply after cleansing and toning. Can be layered with most actives except Vitamin C.",
        imageKey: "niacinamide",
        linkedProducts: [
            { name: "The Oily/Glow Starter Kit", budget: "Mid-Range", price: 95 },
            { name: "Budget Glow Essentials", budget: "Affordable", price: 45 },
            { name: "The Ordinary Niacinamide 10%", budget: "Affordable", price: 8 }
        ]
    },
    {
        id: "ING02",
        name: "Ginseng Root",
        scientificRole: "Contains ginsenosides (Rb1, Rg1) that stimulate fibroblast proliferation and collagen Type I synthesis. Anti-inflammatory properties reduce redness.",
        mythBusted: "Works best as fermented extract, NOT raw application. Fermentation increases bioavailability by 300%.",
        description: "Traditional Korean botanical powerhouse. Energizes, revitalizes tired skin, and boosts collagen synthesis.",
        type: "Antioxidant",
        source: "Korean",
        concerns: ["Aging", "Dullness", "Fatigue"],
        goals: ["Glow", "Anti-Aging"],
        howToUse: "Best in serums or essences. AM or PM. Pairs excellently with fermented rice.",
        imageKey: "ginseng",
        linkedProducts: [
            { name: "Sulwhasoo First Care Serum", budget: "Luxury", price: 89 },
            { name: "Complete Oily/Glow Routine", budget: "Mid-Range", price: 150 },
            { name: "Beauty of Joseon Ginseng Serum", budget: "Affordable", price: 17 }
        ]
    },
    {
        id: "ING03",
        name: "Hyaluronic Acid",
        scientificRole: "Low MW HA (<50 kDa) penetrates epidermis. High MW (>1000 kDa) forms protective film. Both needed for optimal hydration.",
        mythBusted: "Different molecular weights penetrate different layers. Look for multi-weight HA for surface AND deep hydration.",
        description: "The ultimate humectant - holds 1000x its weight in water for deep, lasting hydration.",
        type: "Humectant",
        source: "Universal",
        concerns: ["Hydration", "Aging", "Dryness"],
        goals: ["Glow", "Anti-Aging"],
        howToUse: "Apply to damp skin. Layer under moisturizer to lock in hydration. Use AM and PM.",
        imageKey: "hyaluronic",
        linkedProducts: [
            { name: "Hada Labo Premium Lotion", budget: "Affordable", price: 14 },
            { name: "Dr. Jart+ Ceramidin Serum", budget: "Mid-Range", price: 48 },
            { name: "Dry Skin Hydration Kit", budget: "Mid-Range", price: 85 }
        ]
    },
    {
        id: "ING04",
        name: "Salicylic Acid",
        scientificRole: "BHA with lipophilic properties penetrates sebaceous follicles. Keratolytic action promotes desquamation of comedones.",
        mythBusted: "Start at 0.5-1% – higher isn't always better and can damage your moisture barrier.",
        description: "Oil-soluble BHA that penetrates pores to dissolve sebum plugs and clear congestion.",
        type: "Exfoliant",
        source: "Universal",
        concerns: ["Acne", "Pores", "Blackheads"],
        goals: ["Anti-Acne"],
        howToUse: "Use 2-3x weekly at night. Wait 20 minutes before other products. Always use SPF next day.",
        imageKey: "salicylic",
        linkedProducts: [
            { name: "CosRX BHA Blackhead Power", budget: "Affordable", price: 15 },
            { name: "Paula's Choice 2% BHA", budget: "Mid-Range", price: 34 },
            { name: "Budget Glow Essentials", budget: "Affordable", price: 45 }
        ]
    },
    {
        id: "ING05",
        name: "Fermented Rice",
        scientificRole: "Contains natural AHAs for gentle resurfacing. Kojic acid inhibits tyrosinase, reducing melanin. Amino acids support barrier.",
        mythBusted: "Fermentation increases nutrient bioavailability by up to 10x compared to raw rice extract.",
        description: "Sake by-product rich in amino acids, kojic acid, and ferulic acid for luminous skin.",
        type: "Brightening",
        source: "Japanese",
        concerns: ["Dullness", "Texture", "Uneven Tone"],
        goals: ["Glow", "Anti-Aging"],
        howToUse: "Excellent in cleansers, toners, and essences. Safe for daily use. Layer before heavier products.",
        imageKey: "rice",
        linkedProducts: [
            { name: "SK-II Facial Treatment Essence", budget: "Luxury", price: 185 },
            { name: "Tatcha The Rice Wash", budget: "Mid-Range", price: 38 },
            { name: "COSRX Rice Sleeping Mask", budget: "Affordable", price: 16 }
        ]
    },
    {
        id: "ING06",
        name: "Centella Asiatica",
        scientificRole: "Madecassoside and asiaticoside stimulate collagen synthesis and wound healing. Anti-inflammatory action calms irritation.",
        mythBusted: "Also called Gotu Kola, Tiger Grass, or Cica – same plant, different marketing names.",
        description: "Cica/Tiger Grass – legendary wound healer that soothes inflammation and repairs barrier.",
        type: "Soothing",
        source: "Korean",
        concerns: ["Sensitivity", "Redness", "Barrier Damage"],
        goals: ["Anti-Acne", "Glow"],
        howToUse: "Perfect for sensitive skin. Use AM and PM. Layer after actives to soothe potential irritation.",
        imageKey: "centella",
        linkedProducts: [
            { name: "Dr. Jart+ Cicapair Cream", budget: "Mid-Range", price: 52 },
            { name: "COSRX Centella Blemish Cream", budget: "Affordable", price: 16 },
            { name: "Purito Centella Serum", budget: "Affordable", price: 17 }
        ]
    },
    {
        id: "ING07",
        name: "Retinol",
        scientificRole: "Binds to RAR receptors, increasing epidermal turnover and stimulating collagen. Reduces MMP enzymes that break down collagen.",
        mythBusted: "You CAN use with Vitamin C – just alternate AM/PM or different days if sensitive.",
        description: "Vitamin A derivative – gold standard for anti-aging. Accelerates turnover and boosts collagen.",
        type: "Treatment",
        source: "Universal",
        concerns: ["Aging", "Texture", "Fine Lines"],
        goals: ["Anti-Aging"],
        howToUse: "Start with 0.25% 2x weekly. Increase slowly. Always use at night with SPF next day.",
        imageKey: "retinol",
        linkedProducts: [
            { name: "The Ordinary Retinol 0.5%", budget: "Affordable", price: 8 },
            { name: "Drunk Elephant A-Passioni", budget: "Mid-Range", price: 74 },
            { name: "Luxury Anti-Aging Collection", budget: "Luxury", price: 280 }
        ]
    },
    {
        id: "ING08",
        name: "Green Tea",
        scientificRole: "EGCG neutralizes free radicals 100x more effectively than Vitamin C. Reduces UV-induced erythema and DNA damage.",
        mythBusted: "Topical application is MORE effective than drinking for skin – direct delivery bypasses digestion.",
        description: "Potent antioxidant – EGCG protects against environmental damage and reduces inflammation.",
        type: "Antioxidant",
        source: "Japanese",
        concerns: ["Aging", "Protection", "Inflammation"],
        goals: ["Glow", "Anti-Aging"],
        howToUse: "Best in AM under SPF for antioxidant protection. Also use PM for anti-inflammatory benefits.",
        imageKey: "greenTea",
        linkedProducts: [
            { name: "Innisfree Green Tea Seed Serum", budget: "Mid-Range", price: 27 },
            { name: "Neogen Green Tea Fresh Foam", budget: "Mid-Range", price: 18 },
            { name: "Benton Deep Green Tea Toner", budget: "Affordable", price: 18 }
        ]
    }
];

const KITS_DATA = [
    {
        id: "KIT01",
        name: "The Oily/Glow Mid-Range Starter Kit",
        price: 95,
        budget: "Mid-Range",
        skinTypes: ["Oily", "Combo"],
        goals: ["Glow", "Anti-Acne"],
        description: "Complete 4-step routine for oil control and radiant skin. Includes cleanser, toner, serum, and SPF.",
        ingredients: ["Niacinamide", "Salicylic Acid", "Green Tea"],
        imageKey: "amGlowKit"
    },
    {
        id: "KIT02",
        name: "The Complete Oily/Glow Routine",
        price: 150,
        budget: "Mid-Range",
        skinTypes: ["Oily", "Combo"],
        goals: ["Glow"],
        description: "Full 7-step K-beauty routine with premium fermented actives and double cleanse.",
        ingredients: ["Fermented Rice", "Ginseng", "Hyaluronic Acid"],
        imageKey: "pmRestoreKit"
    },
    {
        id: "KIT03",
        name: "Dry Skin Hydration Kit",
        price: 85,
        budget: "Mid-Range",
        skinTypes: ["Dry"],
        goals: ["Glow", "Anti-Aging"],
        description: "Intensive moisture for parched skin. Ceramide-rich formulas rebuild your barrier.",
        ingredients: ["Hyaluronic Acid", "Centella", "Ceramides"],
        imageKey: "moisturizer"
    },
    {
        id: "KIT04",
        name: "Budget Glow Essentials",
        price: 45,
        budget: "Affordable",
        skinTypes: ["Oily", "Dry", "Combo"],
        goals: ["Glow"],
        description: "Affordable basics for everyday radiance. The Ordinary and CosRX bestsellers.",
        ingredients: ["Niacinamide", "Green Tea", "Centella"],
        imageKey: "serum"
    },
    {
        id: "KIT05",
        name: "Luxury Anti-Aging Collection",
        price: 280,
        budget: "Luxury",
        skinTypes: ["Dry", "Combo"],
        goals: ["Anti-Aging"],
        description: "Premium anti-aging with retinol, peptides, and Sulwhasoo's signature ginseng.",
        ingredients: ["Retinol", "Ginseng", "Peptides"],
        imageKey: "pmRestoreKit"
    }
];

// ============================================
// STATE
// ============================================

let state = {
    currentPage: 'gateway',
    profile: null,
    isLoggedIn: false,
    filterMode: 'forYou',
    quizStep: 1,
    quizAnswers: { skinType: '', goal: '', budget: '' },
    searchTerm: '',
    filters: { type: '', source: '' }
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    mainContent: document.getElementById('mainContent'),
    headerQuizBtn: document.getElementById('headerQuizBtn'),
    vaultTag: document.getElementById('vaultTag'),
    vaultTagText: document.getElementById('vaultTagText'),
    retakeBtn: document.getElementById('retakeBtn'),
    headerLogo: document.getElementById('headerLogo'),
    authBtn: document.getElementById('authBtn'),
    authBtnText: document.getElementById('authBtnText'),
    profileSidebar: document.getElementById('profileSidebar'),
    profileSkinType: document.getElementById('profileSkinType'),
    profileGoal: document.getElementById('profileGoal'),
    profileBudgetTag: document.getElementById('profileBudgetTag'),
    saveCollectionBtn: document.getElementById('saveCollectionBtn'),
    quizModal: document.getElementById('quizModal'),
    quizClose: document.getElementById('quizClose'),
    quizProgress: document.getElementById('quizProgress'),
    quizStepLabel: document.getElementById('quizStepLabel'),
    quizTitle: document.getElementById('quizTitle'),
    quizOptions: document.getElementById('quizOptions'),
    quizNextBtn: document.getElementById('quizNextBtn'),
    authModal: document.getElementById('authModal'),
    authClose: document.getElementById('authClose'),
    authTitle: document.getElementById('authTitle'),
    authSubtitle: document.getElementById('authSubtitle'),
    authEmail: document.getElementById('authEmail'),
    authPassword: document.getElementById('authPassword'),
    authSubmitBtn: document.getElementById('authSubmitBtn'),
    authToggleText: document.getElementById('authToggleText'),
    authToggleBtn: document.getElementById('authToggleBtn'),
    routineModal: document.getElementById('routineModal'),
    routineClose: document.getElementById('routineClose'),
    routineModalHeader: document.getElementById('routineModalHeader'),
    routineModalBudgetTag: document.getElementById('routineModalBudgetTag'),
    routineModalTitle: document.getElementById('routineModalTitle'),
    routineModalDesc: document.getElementById('routineModalDesc'),
    routineModalDuration: document.getElementById('routineModalDuration'),
    routineModalBody: document.getElementById('routineModalBody'),
    ingredientModal: document.getElementById('ingredientModal'),
    ingredientClose: document.getElementById('ingredientClose'),
    ingredientModalImage: document.getElementById('ingredientModalImage'),
    ingredientModalBody: document.getElementById('ingredientModalBody'),
    productModal: document.getElementById('productModal'),
    productClose: document.getElementById('productClose'),
    productModalImage: document.getElementById('productModalImage'),
    productModalBody: document.getElementById('productModalBody'),
    notification: document.getElementById('notification'),
    notificationText: document.getElementById('notificationText')
};

// ============================================
// UTILITIES
// ============================================

function createBudgetTag(budget, price = null, small = false) {
    const icons = { 'Affordable': '$', 'Mid-Range': '$$', 'Luxury': '$$$' };
    const classes = {
        'Affordable': 'affordable',
        'Mid-Range': 'mid-range',
        'Luxury': 'luxury'
    };
    
    return `
        <span class="budget-tag ${classes[budget] || 'mid-range'} ${small ? 'small' : ''}">
            <span class="budget-tag-icon">${icons[budget] || '$$'}</span>
            ${budget}
            ${price ? `<span>• $${price}</span>` : ''}
        </span>
    `;
}

function showNotification(message) {
    elements.notificationText.textContent = message;
    elements.notification.style.display = 'block';
    setTimeout(() => {
        elements.notification.style.display = 'none';
    }, 3000);
}

function filterRoutines(routines) {
    if (state.filterMode === 'all' || !state.profile) return routines;
    return routines.filter(r => 
        r.budgetTag === state.profile.budget ||
        r.skinType.includes(state.profile.skinType) ||
        r.goal.includes(state.profile.goal)
    );
}

function filterIngredients(ingredients) {
    let filtered = ingredients;
    if (state.filterMode === 'forYou' && state.profile) {
        filtered = filtered.filter(i => i.goals.includes(state.profile.goal));
    }
    if (state.searchTerm) {
        filtered = filtered.filter(i => i.name.toLowerCase().includes(state.searchTerm.toLowerCase()));
    }
    if (state.filters.type) {
        filtered = filtered.filter(i => i.type === state.filters.type);
    }
    if (state.filters.source) {
        filtered = filtered.filter(i => i.source === state.filters.source);
    }
    return filtered;
}

function filterKits(kits) {
    if (state.filterMode === 'all' || !state.profile) return kits;
    return kits.filter(k =>
        k.budget === state.profile.budget ||
        k.skinTypes.includes(state.profile.skinType) ||
        k.goals.includes(state.profile.goal)
    );
}

// ============================================
// STORAGE
// ============================================

function saveToStorage() {
    if (state.profile) {
        localStorage.setItem('gsvProfile', JSON.stringify(state.profile));
    }
    if (state.isLoggedIn) {
        localStorage.setItem('gsvAuth', 'true');
    }
}

function loadFromStorage() {
    const profile = localStorage.getItem('gsvProfile');
    if (profile) {
        state.profile = JSON.parse(profile);
        state.currentPage = 'vault';
    }
    state.isLoggedIn = localStorage.getItem('gsvAuth') === 'true';
}

// ============================================
// HEADER UPDATE
// ============================================

function updateHeader() {
    if (state.profile) {
        elements.headerQuizBtn.style.display = 'none';
        elements.vaultTag.style.display = 'flex';
        elements.vaultTagText.textContent = `Vault: ${state.profile.skinType}/${state.profile.goal}`;
        elements.retakeBtn.style.display = 'block';
        elements.headerLogo.style.display = 'block';
    } else {
        elements.headerQuizBtn.style.display = 'block';
        elements.vaultTag.style.display = 'none';
        elements.retakeBtn.style.display = 'none';
        elements.headerLogo.style.display = 'none';
    }
    
    elements.authBtnText.textContent = state.isLoggedIn ? 'Logout' : 'Login/Auth';
    
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === state.currentPage);
    });
}

// ============================================
// SIDEBAR UPDATE
// ============================================

function updateSidebar() {
    const showSidebar = state.profile && ['vault', 'routines', 'shop'].includes(state.currentPage);
    elements.profileSidebar.style.display = showSidebar ? 'block' : 'none';
    
    if (state.profile) {
        elements.profileSkinType.textContent = state.profile.skinType;
        elements.profileGoal.textContent = state.profile.goal;
        elements.profileBudgetTag.innerHTML = createBudgetTag(state.profile.budget);
        elements.saveCollectionBtn.textContent = state.isLoggedIn ? '✓ SAVED TO ACCOUNT' : 'SAVE TO MY COLLECTION';
    }
}

// ============================================
// PAGE RENDERERS
// ============================================

function renderGatewayPage() {
    return `
        <div class="page fade-in">
            <section class="gateway-hero">
                <div class="gateway-hero-text">
                    <h1 class="hero-headline">RITUALS FOR<br>RADIANT<br>SKIN</h1>
                    <p>Discover your personalized K-Beauty routine. Science-backed ingredients, curated for your unique skin.</p>
                    <button class="discover-btn hover-lift" onclick="openQuizModal()">DISCOVER YOUR ROUTINE</button>
                </div>
                <div class="gateway-hero-visual">
                    <div class="hero-image-container">
                        <img src="${getImage('heroDuo')}" alt="K-Beauty Models">
                    </div>
                    <div class="quiz-preview frosted-glass">
                        <div class="quiz-preview-step">
                            <span>Step 1</span>
                            <strong>Skin Type</strong>
                            <small>(Oily, Dry, Combo)</small>
                        </div>
                        <div class="quiz-preview-step">
                            <span>Step 2</span>
                            <strong>Goal</strong>
                            <small>(Glow, Anti-Acne, Anti-Aging)</small>
                        </div>
                        <div class="quiz-preview-step">
                            <span>Step 3</span>
                            <strong>Budget</strong>
                            <small>(Affordable, Mid-Range, Luxury)</small>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="locked-cards">
                ${INGREDIENTS_DATA.slice(0, 3).map(ing => `
                    <div class="locked-card hover-lift" onclick="openQuizModal()">
                        <div class="locked-card-image">
                            <span class="locked-badge">LOCKED</span>
                            <img src="${getImage(ing.imageKey)}" alt="${ing.name}">
                        </div>
                        <div class="locked-card-content">
                            <h3>${ing.name}</h3>
                            <p>${ing.description.slice(0, 90)}...</p>
                            <span class="learn-more">Learn more →</span>
                        </div>
                    </div>
                `).join('')}
            </section>
        </div>
    `;
}

function renderVaultPage() {
    const routines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'am' || r.category === 'pm')).slice(0, 3);
    const ingredients = filterIngredients(INGREDIENTS_DATA).slice(0, 6);
    const kits = filterKits(KITS_DATA).slice(0, 2);
    
    return `
        <div class="page page-with-sidebar fade-in">
            <section class="vault-hero-text">
                <h1 class="hero-headline">YOUR VAULT.<br>YOUR GLOW.</h1>
                <p>Tailored routines, ingredients, and products within your <strong>${state.profile?.budget || 'Mid-Range'}</strong> budget.</p>
            </section>
            
            <div class="filter-toggle">
                <button class="filter-btn ${state.filterMode === 'forYou' ? 'active' : ''}" onclick="setFilterMode('forYou')">FOR YOU</button>
                <button class="filter-btn ${state.filterMode === 'all' ? 'active' : ''}" onclick="setFilterMode('all')">ALL ROUTINES</button>
            </div>
            
            <section>
                <h2 class="section-header">A. Your 3 Personalized Rituals</h2>
                <div class="rituals-grid">
                    ${routines.map((r, i) => `
                        <div class="ritual-card hover-lift" onclick="showRoutineDetail('${r.id}')">
                            <div class="ritual-card-header">
                                <span class="ritual-number">${i + 1}</span>
                                <div>
                                    <span>Ritual ${i + 1}</span>
                                    <h3>${r.name}</h3>
                                </div>
                            </div>
                            ${createBudgetTag(r.budgetTag, r.kitPrice)}
                            <div class="ritual-steps">
                                ${r.steps.slice(0, 4).map(s => `
                                    <div class="ritual-step">
                                        <span class="step-bar" style="opacity: ${0.2 + s.stepNum * 0.15}"></span>
                                        Step ${s.stepNum}: ${s.title}
                                    </div>
                                `).join('')}
                            </div>
                            <button class="learn-more-btn">Learn More →</button>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <section class="actives-section">
                <h2 class="section-header">B. Core Actives For Your Goal</h2>
                <p class="section-subheader">Ingredients matched to your <strong>${state.profile?.goal || 'Glow'}</strong> goal</p>
                <div class="actives-grid">
                    ${ingredients.map(ing => `
                        <div class="active-card hover-lift" onclick="showIngredientDetail('${ing.id}')">
                            <div class="active-card-image">
                                <img src="${getImage(ing.imageKey)}" alt="${ing.name}">
                            </div>
                            <h4>${ing.name}</h4>
                            <p>${ing.description.slice(0, 50)}...</p>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <section>
                <h2 class="section-header">C. Shop Your Personalized Bundle</h2>
                <div class="kits-grid">
                    ${kits.map(kit => `
                        <div class="kit-card hover-lift">
                            <div class="kit-card-image">
                                <img src="${getImage(kit.imageKey)}" alt="${kit.name}">
                            </div>
                            <div class="kit-card-content">
                                ${createBudgetTag(kit.budget)}
                                <h3>${kit.name}, $${kit.price}</h3>
                                <p>${kit.description}</p>
                                <button class="kit-card-btn" onclick="saveToCollection('${kit.id}')">Amazon affiliate links</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderRoutinesPage() {
    const amRoutines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'am'));
    const pmRoutines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'pm'));
    const weeklyRoutines = filterRoutines(ROUTINES_DATA.filter(r => r.category === 'weekly'));
    
    return `
        <div class="page page-with-sidebar fade-in">
            <section class="vault-hero-text">
                <h1 class="hero-headline">THE COMPLETE<br>RITUAL ARCHIVE</h1>
                <p>Step-by-step protocols for every skin goal and frequency.</p>
            </section>
            
            <div class="filter-toggle">
                <button class="filter-btn ${state.filterMode === 'forYou' ? 'active' : ''}" onclick="setFilterMode('forYou')">FOR YOU</button>
                <button class="filter-btn ${state.filterMode === 'all' ? 'active' : ''}" onclick="setFilterMode('all')">ALL ROUTINES</button>
            </div>
            
            <section class="routines-section">
                <h2>A. Daily Routines</h2>
                <h3>AM ROUTINES</h3>
                <div class="rituals-grid">
                    ${amRoutines.map((r, i) => renderRoutineCard(r, i + 1)).join('')}
                </div>
            </section>
            
            <section class="routines-section">
                <h3>PM ROUTINES</h3>
                <div class="rituals-grid">
                    ${pmRoutines.map((r, i) => renderRoutineCard(r, i + 1)).join('')}
                </div>
            </section>
            
            <section class="routines-section">
                <h2>B. Weekly Routines</h2>
                <div class="rituals-grid">
                    ${weeklyRoutines.map((r, i) => renderRoutineCard(r, i + 1)).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderRoutineCard(routine, index) {
    return `
        <div class="ritual-card hover-lift" onclick="showRoutineDetail('${routine.id}')">
            <h3 style="color: var(--accent-green); font-size: 20px; margin-bottom: 12px;">
                Ritual ${index}: ${routine.name}
            </h3>
            ${createBudgetTag(routine.budgetTag, routine.kitPrice)}
            <div class="ritual-steps" style="margin-top: 24px;">
                ${routine.steps.map(s => `
                    <div class="ritual-step">
                        <span class="step-bar" style="opacity: ${0.2 + s.stepNum * 0.12}"></span>
                        Step ${s.stepNum}: ${s.title}
                    </div>
                `).join('')}
            </div>
            <button class="learn-more-btn">Learn More →</button>
        </div>
    `;
}

function renderIngredientsPage() {
    const ingredients = filterIngredients(INGREDIENTS_DATA);
    
    return `
        <div class="page fade-in">
            <section class="vault-hero-text">
                <h1 class="hero-headline">K-Beauty Wisdom.<br>Backed by Biochemistry.</h1>
            </section>
            
            <div class="ingredients-banner">
                <img src="${getImage('ingredientsBanner')}" alt="K-Beauty Ingredients">
            </div>
            
            <div class="ingredients-filters">
                <div class="filter-toggle" style="margin-bottom: 0;">
                    <button class="filter-btn ${state.filterMode === 'forYou' ? 'active' : ''}" onclick="setFilterMode('forYou')">FOR YOU</button>
                    <button class="filter-btn ${state.filterMode === 'all' ? 'active' : ''}" onclick="setFilterMode('all')">ALL ACTIVES</button>
                </div>
                ${state.profile ? `
                    <div class="profile-badge frosted-glass">
                        <strong>Your Profile:</strong> ${state.profile.skinType} • <span style="color: var(--accent-green); font-weight: 700;">${state.profile.goal}</span> • ${state.profile.budget}
                    </div>
                ` : ''}
            </div>
            
            <div class="search-filters">
                <div class="search-input-wrapper">
                    <span class="search-icon">🔍</span>
                    <input type="text" class="search-input" placeholder="Search ingredients..." value="${state.searchTerm}" oninput="updateSearch(this.value)">
                </div>
                <select class="filter-select" onchange="updateFilter('type', this.value)">
                    <option value="">Active Type (All)</option>
                    <option value="Humectant" ${state.filters.type === 'Humectant' ? 'selected' : ''}>Humectant</option>
                    <option value="Exfoliant" ${state.filters.type === 'Exfoliant' ? 'selected' : ''}>Exfoliant</option>
                    <option value="Antioxidant" ${state.filters.type === 'Antioxidant' ? 'selected' : ''}>Antioxidant</option>
                    <option value="Soothing" ${state.filters.type === 'Soothing' ? 'selected' : ''}>Soothing</option>
                    <option value="Treatment" ${state.filters.type === 'Treatment' ? 'selected' : ''}>Treatment</option>
                    <option value="Brightening" ${state.filters.type === 'Brightening' ? 'selected' : ''}>Brightening</option>
                </select>
                <select class="filter-select" onchange="updateFilter('source', this.value)">
                    <option value="">Source (All)</option>
                    <option value="Korean" ${state.filters.source === 'Korean' ? 'selected' : ''}>Korean</option>
                    <option value="Japanese" ${state.filters.source === 'Japanese' ? 'selected' : ''}>Japanese</option>
                    <option value="Universal" ${state.filters.source === 'Universal' ? 'selected' : ''}>Universal</option>
                </select>
            </div>
            
            <div class="ingredients-grid">
                ${ingredients.map(ing => `
                    <div class="ingredient-card hover-lift" onclick="showIngredientDetail('${ing.id}')">
                        <div class="ingredient-card-image">
                            <img src="${getImage(ing.imageKey)}" alt="${ing.name}">
                        </div>
                        <div class="ingredient-card-content">
                            <h3>${ing.name}</h3>
                            <p>${ing.description.slice(0, 75)}...</p>
                            <span class="myth-badge">MYTH BUSTED</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderShopPage() {
    const kits = filterKits(KITS_DATA);
    
    return `
        <div class="page page-with-sidebar fade-in">
            <section class="shop-hero">
                <h1 class="hero-headline">CURATED KITS &<br>SINGLE ACTIVES</h1>
                <p>The essential K/J-Beauty tools and bundles, approved by the Vault.</p>
            </section>
            
            <div class="filter-toggle">
                <button class="filter-btn ${state.filterMode === 'forYou' ? 'active' : ''}" onclick="setFilterMode('forYou')">FOR YOU</button>
                <button class="filter-btn ${state.filterMode === 'all' ? 'active' : ''}" onclick="setFilterMode('all')">ALL PRODUCTS</button>
            </div>
            
            <section class="shop-section">
                <h2 class="section-header">A. Your Recommended Kits</h2>
                <div class="kits-grid">
                    ${kits.slice(0, 2).map(kit => `
                        <div class="kit-card hover-lift">
                            <div class="kit-card-image">
                                <img src="${getImage(kit.imageKey)}" alt="${kit.name}">
                            </div>
                            <div class="kit-card-content">
                                ${createBudgetTag(kit.budget)}
                                <h3>${kit.name}, $${kit.price}</h3>
                                <p>${kit.description}</p>
                                <button class="kit-card-btn" onclick="saveToCollection('${kit.id}')">Amazon affiliate</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <section class="shop-section">
                <h2 class="section-header">B. All Curated Kits</h2>
                <div class="all-kits-grid">
                    ${kits.slice(2).map(kit => `
                        <div class="product-card hover-lift" onclick="showProductDetail('${kit.id}')">
                            <div class="product-card-image">
                                <img src="${getImage(kit.imageKey)}" alt="${kit.name}">
                                <div class="product-card-badge">
                                    ${createBudgetTag(kit.budget, null, true)}
                                </div>
                            </div>
                            <div class="product-card-content">
                                <h4>${kit.name}</h4>
                                <span class="price">$${kit.price}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

// ============================================
// RENDER PAGE
// ============================================

function renderPage() {
    let html = '';
    
    switch (state.currentPage) {
        case 'gateway':
            html = renderGatewayPage();
            break;
        case 'vault':
            html = renderVaultPage();
            break;
        case 'routines':
            html = renderRoutinesPage();
            break;
        case 'ingredients':
            html = renderIngredientsPage();
            break;
        case 'shop':
            html = renderShopPage();
            break;
    }
    
    elements.mainContent.innerHTML = html;
    updateHeader();
    updateSidebar();
}

// ============================================
// NAVIGATION
// ============================================

function navigateTo(page) {
    state.currentPage = page;
    renderPage();
    window.scrollTo(0, 0);
}

// ============================================
// QUIZ MODAL
// ============================================

function openQuizModal() {
    state.quizStep = 1;
    state.quizAnswers = { skinType: '', goal: '', budget: '' };
    elements.quizModal.style.display = 'flex';
    renderQuizStep();
}

function closeQuizModal() {
    elements.quizModal.style.display = 'none';
}

function renderQuizStep() {
    const steps = {
        1: {
            title: "What's your skin type?",
            field: 'skinType',
            options: [
                { value: 'Oily', desc: 'Shiny T-zone, enlarged pores, prone to breakouts' },
                { value: 'Dry', desc: 'Tight feeling, flaky patches, fine lines visible' },
                { value: 'Combo', desc: 'Oily T-zone but dry cheeks, unpredictable' }
            ]
        },
        2: {
            title: "What's your primary goal?",
            field: 'goal',
            options: [
                { value: 'Glow', desc: 'Achieve that dewy, glass skin radiance' },
                { value: 'Anti-Acne', desc: 'Clear breakouts and prevent future ones' },
                { value: 'Anti-Aging', desc: 'Reduce fine lines and boost firmness' }
            ]
        },
        3: {
            title: "What's your budget range?",
            field: 'budget',
            options: [
                { value: 'Affordable', desc: 'Under $50/routine • The Ordinary, CosRX' },
                { value: 'Mid-Range', desc: '$50-150/routine • Dr. Jart+, Laneige' },
                { value: 'Luxury', desc: '$150+/routine • Sulwhasoo, SK-II' }
            ]
        }
    };
    
    const current = steps[state.quizStep];
    
    // Update progress
    document.querySelectorAll('.progress-bar').forEach((bar, i) => {
        bar.classList.toggle('active', i < state.quizStep);
    });
    
    elements.quizStepLabel.textContent = `Step ${state.quizStep} of 3`;
    elements.quizTitle.textContent = current.title;
    
    elements.quizOptions.innerHTML = current.options.map(opt => `
        <button class="quiz-option ${state.quizAnswers[current.field] === opt.value ? 'selected' : ''}" 
                onclick="selectQuizOption('${current.field}', '${opt.value}')">
            ${opt.value}
            <span>${opt.desc}</span>
        </button>
    `).join('');
    
    elements.quizNextBtn.disabled = !state.quizAnswers[current.field];
    elements.quizNextBtn.textContent = state.quizStep === 3 ? 'Unlock My Vault' : 'Continue';
}

function selectQuizOption(field, value) {
    state.quizAnswers[field] = value;
    renderQuizStep();
}

function nextQuizStep() {
    if (state.quizStep < 3) {
        state.quizStep++;
        renderQuizStep();
    } else {
        // Complete quiz
        state.profile = { ...state.quizAnswers };
        state.currentPage = 'vault';
        saveToStorage();
        closeQuizModal();
        renderPage();
        showNotification('Welcome to your personalized vault!');
    }
}

// ============================================
// AUTH MODAL
// ============================================

let isSignup = false;

function openAuthModal() {
    isSignup = false;
    updateAuthModal();
    elements.authModal.style.display = 'flex';
}

function closeAuthModal() {
    elements.authModal.style.display = 'none';
}

function updateAuthModal() {
    elements.authTitle.textContent = isSignup ? 'Create Account' : 'Welcome Back';
    elements.authSubtitle.textContent = isSignup 
        ? 'Save your personalized vault and build your collection.' 
        : 'Sign in to access your saved collection.';
    elements.authSubmitBtn.textContent = isSignup ? 'Create Account' : 'Sign In';
    elements.authToggleText.textContent = isSignup ? 'Already have an account?' : "Don't have an account?";
    elements.authToggleBtn.textContent = isSignup ? 'Sign In' : 'Sign Up';
}

function toggleAuthMode() {
    isSignup = !isSignup;
    updateAuthModal();
}

function submitAuth() {
    state.isLoggedIn = true;
    saveToStorage();
    closeAuthModal();
    updateHeader();
    updateSidebar();
    showNotification('Welcome! Your vault is ready.');
}

// ============================================
// ROUTINE DETAIL MODAL
// ============================================

function showRoutineDetail(routineId) {
    const routine = ROUTINES_DATA.find(r => r.id === routineId);
    if (!routine) return;
    
    elements.routineModalBudgetTag.innerHTML = createBudgetTag(routine.budgetTag, routine.kitPrice);
    elements.routineModalTitle.textContent = routine.name;
    elements.routineModalDesc.textContent = routine.description;
    elements.routineModalDuration.textContent = `⏱ Duration: ${routine.duration}`;
    
    elements.routineModalBody.innerHTML = routine.steps.map(step => `
        <div class="routine-step">
            <span class="step-number">${step.stepNum}</span>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.detail}</p>
                <div class="step-products-label">RECOMMENDED PRODUCTS</div>
                <div class="step-products-grid">
                    ${step.products.map(p => `
                        <div class="step-product">
                            <div class="step-product-image">
                                <img src="${getImage(p.imageKey)}" alt="${p.name}">
                            </div>
                            <div class="step-product-info">
                                <h4>${p.name}</h4>
                                <span class="price">$${p.price}</span>
                                ${(!state.profile || p.budget === state.profile.budget || state.profile.budget === 'Luxury') ? `
                                    <span class="budget-match">
                                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                        Budget Match
                                    </span>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    elements.routineModal.style.display = 'flex';
}

function closeRoutineModal() {
    elements.routineModal.style.display = 'none';
}

// ============================================
// INGREDIENT DETAIL MODAL
// ============================================

function showIngredientDetail(ingredientId) {
    const ingredient = INGREDIENTS_DATA.find(i => i.id === ingredientId);
    if (!ingredient) return;
    
    elements.ingredientModalImage.innerHTML = `<img src="${getImage(ingredient.imageKey)}" alt="${ingredient.name}">`;
    
    const linkedProducts = ingredient.linkedProducts.filter(p =>
        !state.profile || p.budget === state.profile.budget || state.profile.budget === 'Luxury' || p.budget === 'Affordable'
    ).slice(0, 3);
    
    elements.ingredientModalBody.innerHTML = `
        <div class="ingredient-modal-header">
            <h2>${ingredient.name}</h2>
            <span class="myth-badge">MYTH BUSTED</span>
        </div>
        <p>${ingredient.description}</p>
        
        <div class="ingredient-tags">
            <span class="ingredient-tag primary">${ingredient.type}</span>
            <span class="ingredient-tag secondary">${ingredient.source}</span>
            ${ingredient.concerns.slice(0, 3).map(c => `<span class="ingredient-tag secondary">${c}</span>`).join('')}
        </div>
        
        <div class="myth-busted-box">
            <h4>💡 Myth Busted</h4>
            <p>${ingredient.mythBusted}</p>
        </div>
        
        <div class="scientific-box">
            <h4>🔬 Scientific Role</h4>
            <p>${ingredient.scientificRole}</p>
        </div>
        
        <div class="how-to-use-box">
            <h4>✨ How to Use</h4>
            <p>${ingredient.howToUse}</p>
        </div>
        
        <div class="linked-products-label">TOP 3 PRODUCTS WITH ${ingredient.name.toUpperCase()} ${state.profile ? `(${state.profile.budget})` : ''}</div>
        <div class="linked-products-list">
            ${linkedProducts.map(p => `
                <div class="linked-product">
                    <div class="linked-product-icon">🧴</div>
                    <div class="linked-product-info">
                        <h4>${p.name}</h4>
                        <div class="price-row">
                            <span class="price">$${p.price}</span>
                            ${createBudgetTag(p.budget, null, true)}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    elements.ingredientModal.style.display = 'flex';
}

function closeIngredientModal() {
    elements.ingredientModal.style.display = 'none';
}

// ============================================
// PRODUCT DETAIL MODAL
// ============================================

function showProductDetail(productId) {
    const product = KITS_DATA.find(k => k.id === productId);
    if (!product) return;
    
    elements.productModalImage.innerHTML = `<img src="${getImage(product.imageKey)}" alt="${product.name}">`;
    
    elements.productModalBody.innerHTML = `
        ${createBudgetTag(product.budget)}
        <h2>${product.name}</h2>
        <span class="price">$${product.price}</span>
        <p>${product.description}</p>
        
        ${product.ingredients ? `
            <div class="product-ingredients-label">KEY INGREDIENTS</div>
            <div class="product-ingredients">
                ${product.ingredients.map(ing => `<span class="product-ingredient-tag">${ing}</span>`).join('')}
            </div>
        ` : ''}
        
        <div class="product-actions">
            <button class="product-save-btn" onclick="${state.isLoggedIn ? `saveToCollection('${product.id}')` : 'openAuthModal()'}">
                ${state.isLoggedIn ? '♡ Add to Collection' : `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    Login to Save
                `}
            </button>
            <button class="product-buy-btn" onclick="window.open('#', '_blank')">Buy on Amazon</button>
        </div>
    `;
    
    elements.productModal.style.display = 'flex';
}

function closeProductModal() {
    elements.productModal.style.display = 'none';
}

// ============================================
// ACTIONS
// ============================================

function setFilterMode(mode) {
    state.filterMode = mode;
    renderPage();
}

function updateSearch(value) {
    state.searchTerm = value;
    renderPage();
}

function updateFilter(key, value) {
    state.filters[key] = value;
    renderPage();
}

function saveToCollection(itemId) {
    if (!state.isLoggedIn) {
        openAuthModal();
        return;
    }
    showNotification('Added to your collection!');
    closeProductModal();
}

function retakeQuiz() {
    localStorage.removeItem('gsvProfile');
    state.profile = null;
    state.currentPage = 'gateway';
    openQuizModal();
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    renderPage();
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (link.dataset.page && state.profile) {
                navigateTo(link.dataset.page);
            } else if (!state.profile) {
                openQuizModal();
            }
        });
    });
    
    // Header buttons
    elements.headerQuizBtn.addEventListener('click', openQuizModal);
    elements.vaultTag.addEventListener('click', () => navigateTo('vault'));
    elements.retakeBtn.addEventListener('click', retakeQuiz);
    elements.headerLogo.addEventListener('click', () => navigateTo('vault'));
    
    // Auth
    elements.authBtn.addEventListener('click', () => {
        if (state.isLoggedIn) {
            state.isLoggedIn = false;
            localStorage.removeItem('gsvAuth');
            updateHeader();
            updateSidebar();
            showNotification('Logged out');
        } else {
            openAuthModal();
        }
    });
    
    elements.saveCollectionBtn.addEventListener('click', () => {
        if (!state.isLoggedIn) {
            openAuthModal();
        }
    });
    
    // Modal closes
    elements.quizClose.addEventListener('click', closeQuizModal);
    elements.authClose.addEventListener('click', closeAuthModal);
    elements.routineClose.addEventListener('click', closeRoutineModal);
    elements.ingredientClose.addEventListener('click', closeIngredientModal);
    elements.productClose.addEventListener('click', closeProductModal);
    
    // Quiz
    elements.quizNextBtn.addEventListener('click', nextQuizStep);
    
    // Auth
    elements.authSubmitBtn.addEventListener('click', submitAuth);
    elements.authToggleBtn.addEventListener('click', toggleAuthMode);
    
    // Close modals on overlay click
    [elements.quizModal, elements.authModal, elements.routineModal, elements.ingredientModal, elements.productModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

// Make functions globally available
window.openQuizModal = openQuizModal;
window.showRoutineDetail = showRoutineDetail;
window.showIngredientDetail = showIngredientDetail;
window.showProductDetail = showProductDetail;
window.setFilterMode = setFilterMode;
window.updateSearch = updateSearch;
window.updateFilter = updateFilter;
window.saveToCollection = saveToCollection;
window.openAuthModal = openAuthModal;
