/**
 * HAYY STUDIO (حَيّ ستوديو) - Modern Egyptian Streetwear E-Commerce Engine
 * Complete State Management, Egyptian Phone Validation, Addresses, Payment Flows & Merchant Orders Portal
 */

// Initial Seed Products
const PRODUCTS_DATA = [
  {
    id: 'prod-01',
    title: 'هودي كروكودايل أوفرسايز (Heavyweight Nile Hoodie)',
    category: 'hoodies',
    categoryName: 'هوديز وسويت شيرت',
    price: 950,
    originalPrice: 1200,
    fabric: 'قطن ميلتون مصري مغزول 450 جرام',
    description: 'قطعة الستريت وير الأيقونية للموسم. قماش قطن ميلتون مصري فائق النعومة والوزن، مبطن داخلياً بصوف ناعم، مع أكتاف منسدلة وقبعة مزدوجة متماسكة لا تفقد شكلها.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    tag: 'الأكثر طلباً 🔥',
    tagType: 'accent',
    colors: [
      { name: 'بيج رملي', hex: '#D8C6B0' },
      { name: 'أسود فحمي', hex: '#1C1917' },
      { name: 'أخضر زيتي', hex: '#3E493A' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 4
  },
  {
    id: 'prod-02',
    title: 'تيشيرت «شوارع المعادي» بوكسي فيت (Boxy Cut Tee)',
    category: 'tees',
    categoryName: 'تيشيرتات أوفرسايز',
    price: 480,
    originalPrice: 600,
    fabric: 'قطن سنغل جيرسي 240 جرام صباغة طبيعية',
    description: 'قصة بوكسي عصرية وياقة سميكة محبوكة بإحكام. خامة قطنية ثقيلة ومريحة تم غسلها بأنزيمات خاصة لتمنحك ملمساً عتيقاً وألواناً ثابتة لا تتأثر بالغسيل المتكرر.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    tag: 'قطن مصري 100%',
    tagType: 'dark',
    colors: [
      { name: 'أبيض عاجي', hex: '#FAF7F2' },
      { name: 'رمادي حجري', hex: '#78716C' },
      { name: 'أسود معتق', hex: '#262320' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 8
  },
  {
    id: 'prod-03',
    title: 'بنطلون كارجو باراشوت تكتيكي (Tactical Cargo Pants)',
    category: 'pants',
    categoryName: 'بنطلونات وكارجو',
    price: 890,
    originalPrice: 1100,
    fabric: 'قطن تويل متين 100% مع أربطة مطاطية',
    description: 'تصميم ستريت وير تكتيكي بـ 6 جيوب عملية عميقة، وأربطة تحكم عند الكاحل والخصر لضبط الاتساع حسب رغبتك. قماش متين يتحمل الحركة اليومية والأنشطة الخارجية.',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    tag: 'إصدار حصري ⚡',
    tagType: 'accent',
    colors: [
      { name: 'أسود تكتيكي', hex: '#1C1917' },
      { name: 'زيتي عسكري', hex: '#4B5320' },
      { name: 'رمادي خرساني', hex: '#57534E' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 5
  },
  {
    id: 'prod-04',
    title: 'سويت شيرت زيب-أب «القلعة» (Quarter-Zip Sweatshirt)',
    category: 'hoodies',
    categoryName: 'هوديز وسويت شيرت',
    price: 790,
    originalPrice: 950,
    fabric: 'ميلتون مصري مضلع 380 جرام',
    description: 'سويت شيرت نصف سحاب معدني بلمسة كلاسيكية معاصرة. تطريز شعار حَيّ الصغير على الصدر، ونهايات مضلعة عند المعصم والخصر تمنحك حضوراً واثقاً في كل الأوقات.',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80',
    tag: 'راحة استثنائية',
    tagType: 'dark',
    colors: [
      { name: 'أزرق نيلي', hex: '#1E293B' },
      { name: 'كريمي دافئ', hex: '#E7DEC8' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 6
  },
  {
    id: 'prod-05',
    title: 'تيشيرت أوفرسايز «مصر 2026» (Graphic Acid-Wash)',
    category: 'tees',
    categoryName: 'تيشيرتات أوفرسايز',
    price: 520,
    originalPrice: 650,
    fabric: 'قطن مصري 250 جرام غسيل حمضي',
    description: 'طباعة حريرية ثلاثية الأبعاد مستوحاة من عمارة شوارع وسط البلد بالقاهرة مع معالجة غسيل أسيد فاخرة تميز كل قطعة عن غيرها.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    tag: 'محدود الكمية',
    tagType: 'accent',
    colors: [
      { name: 'فحم أسيد', hex: '#33312E' },
      { name: 'بيج رترو', hex: '#D6C7B2' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 3
  },
  {
    id: 'prod-06',
    title: 'شورت ريلاكسد قطن مصري (Relaxed Sweat Shorts)',
    category: 'pants',
    categoryName: 'بنطلونات وكارجو',
    price: 450,
    originalPrice: 550,
    fabric: 'قطن ميلتون خفيف 320 جرام',
    description: 'شورت قطني مريح للنزهات اليومية والرياضة، بجيوب جانبية عميقة بسحاب مخفي وحبل خصر قطني عريض.',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    tag: 'أساسي لكل يوم',
    tagType: 'dark',
    colors: [
      { name: 'أسود نقي', hex: '#1C1917' },
      { name: 'رمادي ميلانج', hex: '#9CA3AF' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 7
  }
];

// Seed Egyptian Orders for Store Owner Portal
const INITIAL_SEED_ORDERS = [
  {
    id: 'HY-24891',
    createdAt: '2026-11-24 13:45',
    customer: {
      name: 'أحمد محمود عز الدين',
      phone: '01019876543',
      altPhone: '01223344556',
      governorate: 'Cairo',
      governorateName: 'القاهرة',
      city: 'التجمع الخامس - القاهرة الجديدة',
      street: 'شارع التسعين الجنوبي - خلف مول ميتنج بوينت',
      building: 'عمارة 14 ب - الدور الثالث - شقة 6',
      notes: 'يرجى الاتصال قبل الوصول بـ 30 دقيقة، الحارس متواجد أيضاً'
    },
    items: [
      { id: 'prod-01', title: 'هودي كروكودايل أوفرسايز', size: 'XL', color: 'بيج رملي', qty: 1, price: 950 }
    ],
    subtotal: 950,
    shippingFee: 50,
    discount: 0,
    total: 1000,
    payment: {
      method: 'vodafone',
      methodName: 'فودافون كاش',
      senderPhone: '01019876543',
      reference: 'TXN-90231',
      receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80'
    },
    status: 'pending', // pending, confirmed, shipped, delivered, cancelled
    statusName: 'بانتظار التأكيد'
  },
  {
    id: 'HY-24890',
    createdAt: '2026-11-24 11:20',
    customer: {
      name: 'سارة طارق الشربيني',
      phone: '01155443322',
      altPhone: '',
      governorate: 'Alexandria',
      governorateName: 'الإسكندرية',
      city: 'سموحة',
      street: 'شارع ألبرت الأول - أمام نادي سموحة',
      building: 'برج الزهور 2 - الدور السابع - شقة 28',
      notes: 'التسليم بعد الساعة 4 عصراً لو سمحت'
    },
    items: [
      { id: 'prod-02', title: 'تيشيرت «شوارع المعادي» بوكسي فيت', size: 'M', color: 'أبيض عاجي', qty: 2, price: 480 }
    ],
    subtotal: 960,
    shippingFee: 60,
    discount: 96, // used coupon
    total: 924,
    payment: {
      method: 'instapay',
      methodName: 'إنستاباي (InstaPay)',
      senderPhone: 'sara.shirbini@instapay',
      reference: 'IPA-847291',
      receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80'
    },
    status: 'confirmed',
    statusName: 'تم التأكيد ومراجعة الدفع'
  },
  {
    id: 'HY-24889',
    createdAt: '2026-11-23 18:10',
    customer: {
      name: 'عمر خالد الصاوي',
      phone: '01288997766',
      altPhone: '01000112233',
      governorate: 'Giza',
      governorateName: 'الجيزة',
      city: 'الشيخ زايد',
      street: 'كمبوند بيفرلي هيلز - المجاورة الثالثة',
      building: 'فيلا 45',
      notes: 'الدفع كاش عند الباب بعد المعاينة'
    },
    items: [
      { id: 'prod-03', title: 'بنطلون كارجو باراشوت تكتيكي', size: 'L', color: 'أسود تكتيكي', qty: 1, price: 890 },
      { id: 'prod-02', title: 'تيشيرت «شوارع المعادي» بوكسي فيت', size: 'L', color: 'أسود معتق', qty: 1, price: 480 }
    ],
    subtotal: 1370,
    shippingFee: 0, // free shipping over 1200
    discount: 0,
    total: 1370,
    payment: {
      method: 'cod',
      methodName: 'الدفع عند الاستلام (COD)',
      senderPhone: '',
      reference: 'COD-CASH',
      receiptUrl: ''
    },
    status: 'shipped',
    statusName: 'قيد الشحن مع المندوب'
  }
];

// App State Management
class HayyApp {
  constructor() {
    this.products = PRODUCTS_DATA;
    this.cart = this.loadCart();
    this.orders = this.loadOrders();
    this.activeCategory = 'all';
    this.appliedDiscount = 0; // percentage or fixed
    this.appliedCouponCode = '';
    this.freeShippingThreshold = 1200;
    
    // Modal states
    this.activeModalProduct = null;
    this.modalSelectedColor = null;
    this.modalSelectedSize = null;
    this.modalQty = 1;

    // Checkout form state
    this.selectedGovFee = 50;
    this.selectedGovName = 'القاهرة';
    this.selectedPaymentMethod = 'cod';
    this.uploadedReceiptBase64 = '';

    // Initialize UI
    this.init();
  }

  init() {
    this.renderProducts();
    this.updateCartUI();
    this.updateOrdersCountBadge();
    this.setupEventListeners();
    this.setupFirebaseSync();
  }

  // Firebase Real-time Synchronization Setup
  setupFirebaseSync() {
    const checkAndInit = () => {
      if (window.hayyFirebase && typeof window.hayyFirebase.listenToOrders === 'function') {
        const badgeText = document.getElementById('firebaseSyncText');
        const badge = document.getElementById('firebaseSyncBadge');

        window.hayyFirebase.listenToOrders(
          (remoteOrders) => {
            if (remoteOrders && remoteOrders.length > 0) {
              // Merge remote orders with seed/local
              this.orders = remoteOrders;
              this.saveOrders();
              this.refreshOwnerOrders();
            }
            if (badgeText && badge) {
              badge.className = 'firebase-sync-badge';
              badgeText.innerHTML = `قاعدة بيانات فايربيس السحابية: <strong>متصل لحظياً (Firestore: llllllllllllllllllllllll-b545b)</strong>`;
            }
          },
          (err) => {
            console.warn("Firestore listener info:", err);
            if (badgeText && badge) {
              badge.className = 'firebase-sync-badge fallback';
              badgeText.innerHTML = `فايربيس: متصل بالتطبيق (يرجى تفعيل صلاحية Read/Write في قواعد Firestore للتحميل الفوري)`;
            }
          }
        );
        return true;
      }
      return false;
    };

    if (!checkAndInit()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (checkAndInit() || attempts > 25) {
          clearInterval(interval);
        }
      }, 150);
    }
  }

  // LocalStorage Helpers
  loadCart() {
    try {
      const stored = localStorage.getItem('hayy_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('hayy_cart', JSON.stringify(this.cart));
    } catch (e) {}
    this.updateCartUI();
  }

  loadOrders() {
    try {
      const stored = localStorage.getItem('hayy_orders');
      if (stored) {
        return JSON.parse(stored);
      }
      localStorage.setItem('hayy_orders', JSON.stringify(INITIAL_SEED_ORDERS));
      return INITIAL_SEED_ORDERS;
    } catch (e) {
      return INITIAL_SEED_ORDERS;
    }
  }

  saveOrders() {
    try {
      localStorage.setItem('hayy_orders', JSON.stringify(this.orders));
    } catch (e) {}
    this.updateOrdersCountBadge();
  }

  setupEventListeners() {
    // Header shadow on scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('siteHeader');
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Close modals on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    // Mobile menu button
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.toggleMobileMenu(true));
    }
  }

  // -------------------------------------------------------------
  // Storefront & Products
  // -------------------------------------------------------------
  renderProducts(list = this.products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 0;">
          <i class="fa-solid fa-box-open" style="font-size: 2.5rem; color: #A8A29E; margin-bottom: 12px;"></i>
          <h3 style="font-size: 1.2rem;">لم نجد منتجات مطابقة</h3>
          <p class="text-muted">جرّب البحث باسم آخر أو اختيار تصنيف مختلف</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(prod => {
      const swatchDots = prod.colors.map((c, idx) => `
        <span class="color-dot ${idx === 0 ? 'active' : ''}" style="background-color: ${c.hex};" title="${c.name}"></span>
      `).join('');

      return `
        <article class="product-card" data-id="${prod.id}">
          <div class="product-thumb-wrap" onclick="app.openProductModal('${prod.id}')">
            <img src="${prod.image}" alt="${prod.title}" class="product-thumb" loading="lazy">
            <span class="badge-tag ${prod.tagType}">${prod.tag}</span>
            <div class="quick-view-overlay">
              <button type="button" class="btn btn-secondary w-full btn-sm">
                <i class="fa-solid fa-eye ml-2"></i> معاينة سريعة وتحديد المقاس
              </button>
            </div>
          </div>

          <div class="product-details">
            <span class="product-category-meta">${prod.categoryName}</span>
            <h3 class="product-title" onclick="app.openProductModal('${prod.id}')">${prod.title}</h3>
            
            <div class="product-fabric-line">
              <i class="fa-solid fa-circle-check"></i>
              <span>${prod.fabric}</span>
            </div>

            <div class="product-swatches-row">
              ${swatchDots}
              <span class="text-xs text-muted">(${prod.colors.length} ألوان متوفرة)</span>
            </div>

            <div class="product-footer">
              <div class="product-price-box">
                <span class="price-current">${prod.price} ج.م</span>
                <span class="price-original">${prod.originalPrice} ج.م</span>
              </div>
              <button type="button" class="btn-add-quick" onclick="app.quickAdd('${prod.id}')">
                <i class="fa-solid fa-bag-shopping"></i>
                <span>طلب فوري</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  filterCategory(category, buttonEl = null) {
    this.activeCategory = category;

    // Update active tab visual
    document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
    if (buttonEl) {
      buttonEl.classList.add('active');
    } else {
      const defaultTab = document.querySelector(`.filter-tab[data-category="${category}"]`);
      if (defaultTab) defaultTab.classList.add('active');
    }

    if (category === 'all') {
      this.renderProducts(this.products);
    } else {
      const filtered = this.products.filter(p => p.category === category);
      this.renderProducts(filtered);
    }
  }

  handleSearch(query) {
    const term = query.trim().toLowerCase();
    if (!term) {
      this.filterCategory(this.activeCategory);
      return;
    }
    const filtered = this.products.filter(p => 
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.fabric.toLowerCase().includes(term) ||
      p.categoryName.toLowerCase().includes(term)
    );
    this.renderProducts(filtered);
  }

  clearSearch() {
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    this.filterCategory(this.activeCategory);
  }

  toggleSearch() {
    const drawer = document.getElementById('searchDrawer');
    if (drawer) {
      drawer.classList.toggle('open');
      if (drawer.classList.contains('open')) {
        document.getElementById('searchInput')?.focus();
      }
    }
  }

  toggleMobileMenu(show) {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');
    if (drawer && overlay) {
      if (show) {
        drawer.classList.add('active');
        overlay.classList.add('active');
      } else {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
  }

  scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // -------------------------------------------------------------
  // Product Detail / Quick View Modal
  // -------------------------------------------------------------
  openProductModal(prodId) {
    const prod = this.products.find(p => p.id === prodId);
    if (!prod) return;

    this.activeModalProduct = prod;
    this.modalSelectedColor = prod.colors[0];
    this.modalSelectedSize = prod.sizes[1] || prod.sizes[0]; // default M or L
    this.modalQty = 1;

    document.getElementById('modalProductImg').src = prod.image;
    document.getElementById('modalProductTag').innerText = prod.tag;
    document.getElementById('modalProductTitle').innerText = prod.title;
    document.getElementById('modalProductPrice').innerText = `${prod.price} ج.م`;
    document.getElementById('modalProductOldPrice').innerText = `${prod.originalPrice} ج.م`;
    document.getElementById('modalProductDiscount').innerText = `وفر ${prod.originalPrice - prod.price} ج.م`;
    document.getElementById('modalProductDesc').innerText = `${prod.description} (${prod.fabric})`;
    document.getElementById('modalQtyVal').innerText = '1';

    // Render Color Swatches
    const colorWrap = document.getElementById('modalColorSwatches');
    document.getElementById('modalSelectedColorName').innerText = this.modalSelectedColor.name;
    colorWrap.innerHTML = prod.colors.map((c, i) => `
      <div class="color-swatch-pill ${i === 0 ? 'active' : ''}" onclick="app.setModalColor('${c.name}', this)">
        <span class="color-dot" style="background-color: ${c.hex};"></span>
        <span>${c.name}</span>
      </div>
    `).join('');

    // Render Size Pills
    const sizeWrap = document.getElementById('modalSizePills');
    document.getElementById('modalSelectedSizeName').innerText = this.modalSelectedSize;
    sizeWrap.innerHTML = prod.sizes.map(s => `
      <button type="button" class="size-pill-btn ${s === this.modalSelectedSize ? 'active' : ''}" onclick="app.setModalSize('${s}', this)">
        ${s}
      </button>
    `).join('');

    const backdrop = document.getElementById('productModalBackdrop');
    backdrop.classList.add('active');
  }

  closeProductModal() {
    document.getElementById('productModalBackdrop').classList.remove('active');
    this.activeModalProduct = null;
  }

  setModalColor(colorName, el) {
    if (!this.activeModalProduct) return;
    this.modalSelectedColor = this.activeModalProduct.colors.find(c => c.name === colorName) || { name: colorName };
    document.getElementById('modalSelectedColorName').innerText = colorName;
    document.querySelectorAll('.color-swatch-pill').forEach(pill => pill.classList.remove('active'));
    el.classList.add('active');
  }

  setModalSize(size, el) {
    this.modalSelectedSize = size;
    document.getElementById('modalSelectedSizeName').innerText = size;
    document.querySelectorAll('.size-pill-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
  }

  adjustModalQty(delta) {
    this.modalQty = Math.max(1, Math.min(10, this.modalQty + delta));
    document.getElementById('modalQtyVal').innerText = this.modalQty;
  }

  addProductFromModal() {
    if (!this.activeModalProduct) return;
    this.addToCart(
      this.activeModalProduct.id,
      this.modalSelectedSize,
      this.modalSelectedColor.name,
      this.modalQty
    );
    this.closeProductModal();
    this.toggleCart(true);
    this.showToast(`تمت إضافة ${this.activeModalProduct.title} إلى السلة 🛍️`, 'success');
  }

  quickAdd(prodId) {
    const prod = this.products.find(p => p.id === prodId);
    if (!prod) return;
    // defaults
    const size = prod.sizes[1] || prod.sizes[0];
    const color = prod.colors[0].name;
    this.addToCart(prodId, size, color, 1);
    this.toggleCart(true);
    this.showToast(`تمت إضافة ${prod.title} (مقاس ${size}) إلى السلة 🛍️`, 'success');
  }

  // -------------------------------------------------------------
  // Cart Logic & Drawer
  // -------------------------------------------------------------
  addToCart(prodId, size, color, qty = 1) {
    const existingIndex = this.cart.findIndex(
      item => item.id === prodId && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += qty;
    } else {
      const prod = this.products.find(p => p.id === prodId);
      this.cart.push({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        image: prod.image,
        size: size,
        color: color,
        qty: qty
      });
    }

    this.saveCart();
  }

  updateItemQty(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].qty += delta;
    if (this.cart[index].qty <= 0) {
      this.cart.splice(index, 1);
    }
    this.saveCart();
  }

  removeItem(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.showToast('تم حذف المنتج من السلة', 'info');
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getCartTotalCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  updateCartUI() {
    const count = this.getCartTotalCount();
    const subtotal = this.getCartSubtotal();

    // Badges in header
    const cartCountEl = document.getElementById('cartCount');
    const headerTotalEl = document.getElementById('cartHeaderTotal');
    const drawerItemsCount = document.getElementById('drawerItemsCount');

    if (cartCountEl) cartCountEl.innerText = count;
    if (headerTotalEl) headerTotalEl.innerText = `${subtotal} ج.م`;
    if (drawerItemsCount) drawerItemsCount.innerText = `${count} قطع`;

    // Free shipping tracker
    const progressText = document.getElementById('shippingProgressText');
    const progressBar = document.getElementById('shippingProgressBar');
    if (progressText && progressBar) {
      if (subtotal >= this.freeShippingThreshold) {
        progressText.innerHTML = `🎉 مبروك! حصلت على <strong>شحن مجاني</strong> لطلبك!`;
        progressBar.style.width = '100%';
        progressBar.style.backgroundColor = '#16A34A';
      } else {
        const remaining = this.freeShippingThreshold - subtotal;
        const percent = Math.min(100, Math.round((subtotal / this.freeShippingThreshold) * 100));
        progressText.innerHTML = `أضف منتجات بقيمة <strong>${remaining} ج.م</strong> للحصول على <strong>شحن مجاني</strong>! 🚚`;
        progressBar.style.width = `${percent}%`;
        progressBar.style.backgroundColor = 'var(--accent-terracotta)';
      }
    }

    // List rendering
    const listEl = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const footer = document.getElementById('cartFooter');

    if (this.cart.length === 0) {
      if (listEl) listEl.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      if (footer) footer.style.opacity = '0.4';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      if (footer) footer.style.opacity = '1';

      if (listEl) {
        listEl.innerHTML = this.cart.map((item, idx) => `
          <div class="cart-item-card">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
              <div class="cart-item-top">
                <h4 class="cart-item-title">${item.title}</h4>
                <button type="button" class="cart-item-remove-btn" onclick="app.removeItem(${idx})" title="حذف">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
              <div class="cart-item-specs">
                <span>المقاس: <strong>${item.size}</strong></span> • 
                <span>اللون: <strong>${item.color}</strong></span>
              </div>
              <div class="cart-item-bottom">
                <div class="cart-item-qty">
                  <button type="button" onclick="app.updateItemQty(${idx}, -1)"><i class="fa-solid fa-minus"></i></button>
                  <span>${item.qty}</span>
                  <button type="button" onclick="app.updateItemQty(${idx}, 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="cart-item-price">${item.price * item.qty} ج.م</div>
              </div>
            </div>
          </div>
        `).join('');
      }
    }

    // Totals Breakdown
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountRow = document.getElementById('cartDiscountRow');
    const discountValEl = document.getElementById('cartDiscountVal');
    const totalSumEl = document.getElementById('cartTotalSum');

    if (subtotalEl) subtotalEl.innerText = `${subtotal} ج.م`;

    let discountAmount = 0;
    if (this.appliedDiscount > 0) {
      discountAmount = Math.round((subtotal * this.appliedDiscount) / 100);
      if (discountRow) discountRow.style.display = 'flex';
      if (discountValEl) discountValEl.innerText = `-${discountAmount} ج.م (${this.appliedDiscount}%)`;
    } else {
      if (discountRow) discountRow.style.display = 'none';
    }

    const finalSum = Math.max(0, subtotal - discountAmount);
    if (totalSumEl) totalSumEl.innerText = `${finalSum} ج.م`;
  }

  toggleCart(open) {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer && overlay) {
      if (open) {
        drawer.classList.add('active');
        overlay.classList.add('active');
      } else {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
  }

  applyPromoCode() {
    const input = document.getElementById('promoInput');
    const feedback = document.getElementById('promoFeedback');
    if (!input || !feedback) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
      feedback.className = 'promo-feedback error';
      feedback.innerText = 'يرجى إدخال كود الخصم أولاً';
      return;
    }

    if (code === 'HAYY10' || code === 'CAIRO10') {
      this.appliedDiscount = 10;
      this.appliedCouponCode = code;
      feedback.className = 'promo-feedback success';
      feedback.innerText = 'تم تطبيق كود خصم 10% بنجاح! 🎉';
      this.updateCartUI();
      this.updateCheckoutSummary();
    } else if (code === 'WELCOME') {
      this.appliedDiscount = 5;
      this.appliedCouponCode = code;
      feedback.className = 'promo-feedback success';
      feedback.innerText = 'تم تطبيق كود ترحيبي بخصم 5%! 🌟';
      this.updateCartUI();
      this.updateCheckoutSummary();
    } else {
      feedback.className = 'promo-feedback error';
      feedback.innerText = 'كود الخصم غير صحيح أو منتهي الصلاحية';
    }
  }

  // -------------------------------------------------------------
  // Smart Size Calculator & Guide
  // -------------------------------------------------------------
  openSizeGuideModal() {
    document.getElementById('sizeGuideModalBackdrop').classList.add('active');
    this.calculateRecommendedSize();
  }

  closeSizeGuideModal() {
    document.getElementById('sizeGuideModalBackdrop').classList.remove('active');
  }

  calculateRecommendedSize() {
    const weight = parseFloat(document.getElementById('calcWeight')?.value) || 75;
    const height = parseFloat(document.getElementById('calcHeight')?.value) || 175;
    const badge = document.getElementById('recSizeBadge');
    if (!badge) return;

    let size = 'L';
    let label = 'أوفرسايز مريح';

    if (weight < 65) {
      size = 'S';
      label = 'أوفرسايز خفيف ومريح';
    } else if (weight >= 65 && weight < 78) {
      size = 'M';
      label = 'قصة بوكسي مضبوطة جداً';
    } else if (weight >= 78 && weight < 92) {
      size = 'L';
      label = 'أوفرسايز عصري مريح';
    } else if (weight >= 92 && weight < 105) {
      size = 'XL';
      label = 'أوفرسايز وافر ومريح';
    } else {
      size = 'XXL';
      label = 'أوفرسايز فسيح وواسع';
    }

    badge.innerText = `${size} (${label})`;
  }

  // -------------------------------------------------------------
  // Checkout Modal & Egyptian Validation
  // -------------------------------------------------------------
  openCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast('حقيبة التسوق فارغة! أضف منتجات أولاً', 'info');
      return;
    }
    this.toggleCart(false);
    this.updateCheckoutSummary();
    document.getElementById('checkoutModalBackdrop').classList.add('active');
  }

  closeCheckoutModal() {
    document.getElementById('checkoutModalBackdrop').classList.remove('active');
  }

  handlePhoneInput(input) {
    // Only digits
    let val = input.value.replace(/\D/g, '');
    input.value = val;

    const badge = document.getElementById('carrierBadge');
    const phoneError = document.getElementById('phoneError');

    // Carrier detection for Egypt
    if (val.length >= 3) {
      const prefix = val.substring(0, 3);
      badge.style.display = 'inline-flex';
      
      if (prefix === '010') {
        badge.className = 'carrier-badge vodafone';
        badge.innerHTML = '<i class="fa-solid fa-tower-broadcast"></i> فودافون';
      } else if (prefix === '011') {
        badge.className = 'carrier-badge etisalat';
        badge.innerHTML = '<i class="fa-solid fa-tower-broadcast"></i> اتصالات e&';
      } else if (prefix === '012') {
        badge.className = 'carrier-badge orange';
        badge.innerHTML = '<i class="fa-solid fa-tower-broadcast"></i> أورنج';
      } else if (prefix === '015') {
        badge.className = 'carrier-badge we';
        badge.innerHTML = '<i class="fa-solid fa-tower-broadcast"></i> وي WE';
      } else {
        badge.style.display = 'none';
      }
    } else {
      badge.style.display = 'none';
    }

    // Validation hint
    if (val.length === 11) {
      const validPrefixes = ['010', '011', '012', '015'];
      if (validPrefixes.includes(val.substring(0, 3))) {
        phoneError.classList.remove('active');
      } else {
        phoneError.innerText = 'يجب أن يبدأ الرقم بـ 010 أو 011 أو 012 أو 015';
        phoneError.classList.add('active');
      }
    } else if (val.length > 0 && val.length < 11) {
      phoneError.innerText = `الرقم ينقصه ${11 - val.length} أرقام ليكتمل (11 رقماً)`;
      phoneError.classList.add('active');
    } else {
      phoneError.classList.remove('active');
    }
  }

  validateName() {
    const input = document.getElementById('custName');
    const error = document.getElementById('nameError');
    if (!input || !error) return false;

    const val = input.value.trim();
    const parts = val.split(/\s+/).filter(Boolean);
    if (parts.length < 2) {
      error.classList.add('active');
      return false;
    } else {
      error.classList.remove('active');
      return true;
    }
  }

  handleGovernorateChange(govValue) {
    const select = document.getElementById('custGovernorate');
    const selectedOption = select.options[select.selectedIndex];
    const fee = parseInt(selectedOption.getAttribute('data-fee') || '50', 10);
    this.selectedGovFee = fee;
    this.selectedGovName = selectedOption.text.split('(')[0].trim();

    document.getElementById('govError')?.classList.remove('active');
    this.updateCheckoutSummary();
  }

  selectPaymentMethod(method) {
    this.selectedPaymentMethod = method;

    // Card styling
    document.querySelectorAll('.payment-method-card').forEach(card => card.classList.remove('selected'));
    const targetCard = document.getElementById(`method${method.charAt(0).toUpperCase() + method.slice(1)}Card`);
    if (targetCard) targetCard.classList.add('selected');

    // Toggle detail containers
    document.getElementById('codDetailsBox').style.display = (method === 'cod') ? 'block' : 'none';
    document.getElementById('vodafoneDetailsBox').style.display = (method === 'vodafone') ? 'block' : 'none';
    document.getElementById('instapayDetailsBox').style.display = (method === 'instapay') ? 'block' : 'none';

    this.updatePaymentAmounts();
  }

  updatePaymentAmounts() {
    const subtotal = this.getCartSubtotal();
    const discountAmount = Math.round((subtotal * this.appliedDiscount) / 100);
    const netItems = Math.max(0, subtotal - discountAmount);
    
    // Check free shipping threshold
    const effectiveShipping = (subtotal >= this.freeShippingThreshold) ? 0 : this.selectedGovFee;
    const finalTotal = netItems + effectiveShipping;

    const formatted = `${finalTotal} ج.م`;

    const codDue = document.getElementById('codDueAmount');
    const vodaDue = document.getElementById('vodaDueAmount');
    const vodaSteps = document.getElementById('vodaStepsAmount');
    const instaDue = document.getElementById('instaDueAmount');

    if (codDue) codDue.innerText = formatted;
    if (vodaDue) vodaDue.innerText = formatted;
    if (vodaSteps) vodaSteps.innerText = formatted;
    if (instaDue) instaDue.innerText = formatted;
  }

  updateCheckoutSummary() {
    const subtotal = this.getCartSubtotal();
    const discountAmount = Math.round((subtotal * this.appliedDiscount) / 100);
    const netItems = Math.max(0, subtotal - discountAmount);
    
    const isFreeShipping = subtotal >= this.freeShippingThreshold;
    const effectiveShipping = isFreeShipping ? 0 : this.selectedGovFee;
    const finalTotal = netItems + effectiveShipping;

    // Items list
    const itemsContainer = document.getElementById('checkoutSummaryItems');
    if (itemsContainer) {
      itemsContainer.innerHTML = this.cart.map(item => `
        <div class="summary-item-row">
          <img src="${item.image}" alt="${item.title}" class="summary-item-img">
          <div class="summary-item-text">
            <h5 class="summary-item-title">${item.title}</h5>
            <span class="summary-item-meta">${item.size} • ${item.color} • الكمية: ${item.qty}</span>
          </div>
          <div class="summary-item-total">${item.price * item.qty} ج.م</div>
        </div>
      `).join('');
    }

    // Calculations
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const discountRow = document.getElementById('checkoutDiscountRow');
    const discountValEl = document.getElementById('checkoutDiscountVal');
    const shippingEl = document.getElementById('checkoutShippingFee');
    const finalTotalEl = document.getElementById('checkoutFinalTotal');

    if (subtotalEl) subtotalEl.innerText = `${subtotal} ج.م`;

    if (this.appliedDiscount > 0) {
      if (discountRow) discountRow.style.display = 'flex';
      if (discountValEl) discountValEl.innerText = `-${discountAmount} ج.م (${this.appliedCouponCode})`;
    } else {
      if (discountRow) discountRow.style.display = 'none';
    }

    if (shippingEl) {
      if (isFreeShipping) {
        shippingEl.innerHTML = `<span style="color:#16A34A; font-weight:700;">مجاناً 🚚 (خصم الشحن)</span>`;
      } else {
        shippingEl.innerText = `${this.selectedGovFee} ج.م (${this.selectedGovName})`;
      }
    }

    if (finalTotalEl) finalTotalEl.innerText = `${finalTotal} ج.م`;

    this.updatePaymentAmounts();
  }

  copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
      const originalHtml = btnElement.innerHTML;
      btnElement.classList.add('copied');
      btnElement.innerHTML = `<i class="fa-solid fa-check"></i> <span>تم النسخ! ✓</span>`;
      setTimeout(() => {
        btnElement.classList.remove('copied');
        btnElement.innerHTML = originalHtml;
      }, 2000);
      this.showToast(`تم نسخ ${text} بنجاح`, 'success');
    }).catch(() => {
      // Fallback
      prompt('قم بنسخ النص يدوياً:', text);
    });
  }

  handleReceiptUpload(fileInput, previewId) {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.uploadedReceiptBase64 = e.target.result;
      const preview = document.getElementById(previewId);
      if (preview) {
        preview.style.display = 'flex';
        preview.innerHTML = `
          <img src="${e.target.result}" alt="إيصال التحويل" class="receipt-thumb">
          <span class="text-xs text-muted">تم إرفاق الإيصال بنجاح ✓</span>
        `;
      }
      this.showToast('تم إرفاق إيصال التحويل بنجاح', 'success');
    };
    reader.readAsDataURL(file);
  }

  // -------------------------------------------------------------
  // Order Submission & WhatsApp Generator
  // -------------------------------------------------------------
  handleOrderSubmit(e) {
    e.preventDefault();

    // Validate fields
    const nameValid = this.validateName();
    const phoneInput = document.getElementById('custPhone');
    const phoneVal = phoneInput.value.trim();
    const validPrefixes = ['010', '011', '012', '015'];
    const phoneValid = phoneVal.length === 11 && validPrefixes.includes(phoneVal.substring(0, 3));
    
    if (!phoneValid) {
      document.getElementById('phoneError').classList.add('active');
    }

    const govSelect = document.getElementById('custGovernorate');
    const govValid = govSelect.value !== '';
    if (!govValid) {
      document.getElementById('govError').classList.add('active');
    }

    const cityInput = document.getElementById('custCity');
    const streetInput = document.getElementById('custStreet');
    const bldgInput = document.getElementById('custBuilding');

    let addressValid = true;
    if (!cityInput.value.trim()) {
      document.getElementById('cityError').classList.add('active');
      addressValid = false;
    }
    if (!streetInput.value.trim()) {
      document.getElementById('streetError').classList.add('active');
      addressValid = false;
    }
    if (!bldgInput.value.trim()) {
      document.getElementById('buildingError').classList.add('active');
      addressValid = false;
    }

    if (!nameValid || !phoneValid || !govValid || !addressValid) {
      this.showToast('يرجى تصحيح الأخطاء الموضحة وتكملة بيانات العنوان', 'info');
      return;
    }

    // Button loading state
    const submitBtn = document.getElementById('submitOrderBtn');
    const btnText = document.getElementById('btnSubmitText');
    submitBtn.disabled = true;
    btnText.innerHTML = `<i class="fa-solid fa-spinner fa-spin ml-2"></i> جاري تأكيد الطلب...`;

    setTimeout(() => {
      // Calculate final figures
      const subtotal = this.getCartSubtotal();
      const discountAmount = Math.round((subtotal * this.appliedDiscount) / 100);
      const netItems = Math.max(0, subtotal - discountAmount);
      const isFreeShipping = subtotal >= this.freeShippingThreshold;
      const effectiveShipping = isFreeShipping ? 0 : this.selectedGovFee;
      const finalTotal = netItems + effectiveShipping;

      const orderId = `HY-${Math.floor(10000 + Math.random() * 90000)}`;
      const now = new Date();
      const dateFormatted = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

      // Payment meta
      let payName = 'الدفع عند الاستلام (COD)';
      let payRef = 'COD-CASH';
      let paySender = '';

      if (this.selectedPaymentMethod === 'vodafone') {
        payName = 'فودافون كاش';
        paySender = document.getElementById('vodaSenderPhone')?.value || phoneVal;
        payRef = `VF-${Math.floor(100000 + Math.random() * 900000)}`;
      } else if (this.selectedPaymentMethod === 'instapay') {
        payName = 'إنستاباي (InstaPay)';
        paySender = document.getElementById('instaAccountRef')?.value || 'حساب العميل';
        payRef = `IPA-${Math.floor(100000 + Math.random() * 900000)}`;
      }

      // New Order Object
      const newOrder = {
        id: orderId,
        createdAt: dateFormatted,
        customer: {
          name: document.getElementById('custName').value.trim(),
          phone: phoneVal,
          altPhone: document.getElementById('custAltPhone').value.trim(),
          governorate: govSelect.value,
          governorateName: this.selectedGovName,
          city: cityInput.value.trim(),
          street: streetInput.value.trim(),
          building: bldgInput.value.trim(),
          notes: document.getElementById('custNotes').value.trim()
        },
        items: JSON.parse(JSON.stringify(this.cart)),
        subtotal: subtotal,
        shippingFee: effectiveShipping,
        discount: discountAmount,
        total: finalTotal,
        payment: {
          method: this.selectedPaymentMethod,
          methodName: payName,
          senderPhone: paySender,
          reference: payRef,
          receiptUrl: this.uploadedReceiptBase64
        },
        status: (this.selectedPaymentMethod === 'cod') ? 'confirmed' : 'pending',
        statusName: (this.selectedPaymentMethod === 'cod') ? 'تم التأكيد (شحن فوري)' : 'بانتظار مراجعة التحويل'
      };

      // Push order to top of list and persist
      this.orders.unshift(newOrder);
      this.saveOrders();

      // Synchronize with Firebase Cloud Firestore in background
      if (window.hayyFirebase && typeof window.hayyFirebase.saveOrder === 'function') {
        window.hayyFirebase.saveOrder(newOrder).then(res => {
          if (res && res.success) {
            console.log(`☁️ Order #${newOrder.id} successfully synced to Cloud Firestore database!`);
            this.showToast('تمت المزامنة السحابية مع قاعدة بيانات فايربيس ☁️', 'success');
          }
        }).catch(err => {
          console.warn("Firebase sync error:", err);
        });
      }

      // Reset cart
      this.cart = [];
      this.saveCart();

      // Reset button
      submitBtn.disabled = false;
      btnText.innerHTML = `تأكيد وتسجيل الطلب الآن ⚡`;

      // Close checkout modal
      this.closeCheckoutModal();

      // Show Success Modal
      this.showOrderSuccess(newOrder);

    }, 600);
  }

  showOrderSuccess(order) {
    document.getElementById('successOrderId').innerText = `#${order.id}`;
    document.getElementById('successCustomerName').innerText = order.customer.name;
    document.getElementById('successCustomerPhone').innerText = order.customer.phone;
    document.getElementById('successCustomerAddress').innerText = `${order.customer.governorateName} - ${order.customer.city} - ${order.customer.street} (${order.customer.building})`;
    document.getElementById('successPaymentMethod').innerText = order.payment.methodName;
    document.getElementById('successOrderTotal').innerText = `${order.total} ج.م`;

    // WhatsApp Direct Confirmation Link
    const merchantPhone = '201023456789'; // Egyptian Store Owner WhatsApp Number
    const waText = encodeURIComponent(
      `مرحباً HAYY Studio! قمت بطلب جديد:\n` +
      `📦 رقم الطلب: #${order.id}\n` +
      `👤 الاسم: ${order.customer.name}\n` +
      `📱 الهاتف: ${order.customer.phone}\n` +
      `📍 العنوان: ${order.customer.governorateName} - ${order.customer.city} - ${order.customer.street}\n` +
      `💳 طريقة الدفع: ${order.payment.methodName}\n` +
      `💰 الإجمالي المطلوب: ${order.total} ج.م\n` +
      `يرجى تأكيد تجهيز الشحنة.`
    );
    const waBtn = document.getElementById('successWhatsappBtn');
    if (waBtn) {
      waBtn.href = `https://wa.me/${merchantPhone}?text=${waText}`;
    }

    document.getElementById('orderSuccessModalBackdrop').classList.add('active');
  }

  closeSuccessModal() {
    document.getElementById('orderSuccessModalBackdrop').classList.remove('active');
  }

  // -------------------------------------------------------------
  // STORE OWNER ORDER MANAGEMENT PORTAL (لوحة إدارة طلبات المتجر)
  // -------------------------------------------------------------
  toggleOwnerMode() {
    const ownerView = document.getElementById('ownerPortalView');
    const storeView = document.getElementById('storefrontView');
    const switchBtn = document.getElementById('ownerSwitchBtn');

    if (ownerView.style.display === 'none') {
      this.showOwnerPortal();
    } else {
      this.showStorefront();
    }
  }

  showOwnerPortal() {
    document.getElementById('storefrontView').style.display = 'none';
    document.getElementById('ownerPortalView').style.display = 'block';
    
    const switchBtn = document.getElementById('ownerSwitchBtn');
    if (switchBtn) {
      switchBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> <span>صفحة المتجر</span>`;
      switchBtn.style.backgroundColor = 'var(--accent-terracotta)';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.refreshOwnerOrders();
  }

  showStorefront() {
    document.getElementById('ownerPortalView').style.display = 'none';
    document.getElementById('storefrontView').style.display = 'block';
    
    const switchBtn = document.getElementById('ownerSwitchBtn');
    if (switchBtn) {
      switchBtn.innerHTML = `
        <i class="fa-solid fa-store"></i>
        <span class="switch-label">لوحة التاجر</span>
        <span class="orders-count-badge" id="pendingOrdersCount">${this.getPendingOrdersCount()}</span>
      `;
      switchBtn.style.backgroundColor = '#2D2723';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPendingOrdersCount() {
    return this.orders.filter(o => o.status === 'pending' || o.status === 'confirmed').length;
  }

  updateOrdersCountBadge() {
    const badge = document.getElementById('pendingOrdersCount');
    if (badge) {
      badge.innerText = this.getPendingOrdersCount();
    }
  }

  refreshOwnerOrders() {
    this.renderOwnerMetrics();
    this.filterOwnerOrders();
  }

  renderOwnerMetrics() {
    const totalOrders = this.orders.length;
    const totalRevenue = this.orders
      .filter(o => o.status !== 'cancelled')
      .reduce((sum, o) => sum + o.total, 0);
    
    const pendingCount = this.orders.filter(o => o.status === 'pending').length;
    const shippingCount = this.orders.filter(o => o.status === 'shipped').length;

    document.getElementById('metricTotalOrders').innerText = totalOrders;
    document.getElementById('metricTotalRevenue').innerText = `${totalRevenue.toLocaleString('ar-EG')} ج.م`;
    document.getElementById('metricPendingCount').innerText = pendingCount;
    document.getElementById('metricShippingCount').innerText = shippingCount;
  }

  filterOwnerOrders() {
    const searchVal = (document.getElementById('ownerSearchInput')?.value || '').trim().toLowerCase();
    const statusVal = document.getElementById('ownerStatusFilter')?.value || 'all';
    const payVal = document.getElementById('ownerPaymentFilter')?.value || 'all';

    let filtered = this.orders.filter(o => {
      // Search match
      const matchSearch = !searchVal || 
        o.id.toLowerCase().includes(searchVal) ||
        o.customer.name.toLowerCase().includes(searchVal) ||
        o.customer.phone.includes(searchVal) ||
        o.customer.city.toLowerCase().includes(searchVal);

      // Status match
      const matchStatus = (statusVal === 'all') || (o.status === statusVal);

      // Payment match
      const matchPay = (payVal === 'all') || (o.payment.method === payVal);

      return matchSearch && matchStatus && matchPay;
    });

    this.renderOwnerTable(filtered);
  }

  renderOwnerTable(orderList) {
    const tbody = document.getElementById('ownerOrdersTableBody');
    const emptyState = document.getElementById('noOrdersState');

    if (!tbody) return;

    if (orderList.length === 0) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    tbody.innerHTML = orderList.map(order => {
      // Payment badge class
      let payClass = 'cod';
      if (order.payment.method === 'vodafone') payClass = 'vodafone';
      if (order.payment.method === 'instapay') payClass = 'instapay';

      // Status badge class
      const statusMap = {
        pending: { label: 'بانتظار التأكيد', cls: 'pending', icon: 'fa-clock' },
        confirmed: { label: 'تم التأكيد', cls: 'confirmed', icon: 'fa-check' },
        shipped: { label: 'قيد الشحن', cls: 'shipped', icon: 'fa-truck' },
        delivered: { label: 'تم التسليم', cls: 'delivered', icon: 'fa-circle-check' },
        cancelled: { label: 'ملغي', cls: 'cancelled', icon: 'fa-xmark' }
      };
      const st = statusMap[order.status] || { label: order.status, cls: 'pending', icon: 'fa-circle' };

      // Pre-filled WhatsApp message for merchant to customer
      const waCustomerText = encodeURIComponent(
        `أهلاً بك يا ${order.customer.name} من براند HAYY Studio ❤️\n` +
        `بخصوص طلبك رقم #${order.id} بمبلغ ${order.total} ج.م.\n` +
        `نحن حالياً نجهز شحنتك للتسليم في ${order.customer.governorateName}.`
      );

      return `
        <tr>
          <td>
            <span class="order-id-badge">#${order.id}</span>
            <span class="order-date-sub">${order.createdAt}</span>
          </td>
          <td class="cust-name-cell">
            <strong>${order.customer.name}</strong>
            <span class="text-xs text-muted">${order.items.length} قطع</span>
          </td>
          <td class="phone-cell">
            <a href="tel:${order.customer.phone}" class="phone-number-link">
              <i class="fa-solid fa-phone ml-1 text-xs"></i>${order.customer.phone}
            </a>
          </td>
          <td class="address-cell">
            <span class="address-gov">${order.customer.governorateName} - ${order.customer.city}</span>
            <span class="address-street">${order.customer.street} (${order.customer.building})</span>
          </td>
          <td>
            <span class="badge-pay ${payClass}">
              <i class="fa-solid ${payClass === 'vodafone' ? 'fa-mobile-screen' : (payClass === 'instapay' ? 'fa-bolt' : 'fa-hand-holding-dollar')}"></i>
              ${order.payment.methodName}
            </span>
          </td>
          <td>
            <strong class="font-bold">${order.total} ج.م</strong>
          </td>
          <td>
            <span class="badge-status ${st.cls}">
              <i class="fa-solid ${st.icon}"></i>
              ${st.label}
            </span>
          </td>
          <td>
            <div class="table-actions">
              <button class="action-btn" title="عرض تفاصيل العميل والطلب" onclick="app.openOwnerOrderDetail('${order.id}')">
                <i class="fa-solid fa-eye"></i>
              </button>
              <a href="https://wa.me/2${order.customer.phone}?text=${waCustomerText}" target="_blank" class="action-btn wa-btn" title="محادثة واتساب سريعة">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="tel:${order.customer.phone}" class="action-btn" title="اتصال هاتفي">
                <i class="fa-solid fa-phone"></i>
              </a>
              <button class="action-btn" title="طباعة بوليصة شحن للمندوب" onclick="app.printWaybill('${order.id}')">
                <i class="fa-solid fa-print"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  openOwnerOrderDetail(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('ownerModalOrderTitle').innerText = `تفاصيل طلب #${order.id} (${order.createdAt})`;

    const itemsHtml = order.items.map(item => `
      <div style="display: flex; gap: 10px; align-items: center; padding: 6px 0; border-bottom: 1px dashed #E5DFD5;">
        <img src="${item.image}" style="width: 42px; height: 50px; object-fit: cover; border-radius: 4px;">
        <div style="flex: 1;">
          <strong style="font-size: 0.85rem; display: block;">${item.title}</strong>
          <span style="font-size: 0.75rem; color: #78716C;">المقاس: ${item.size} • اللون: ${item.color} • الكمية: ${item.qty}</span>
        </div>
        <strong>${item.price * item.qty} ج.م</strong>
      </div>
    `).join('');

    let receiptDisplay = '';
    if (order.payment.receiptUrl) {
      receiptDisplay = `
        <div style="margin-top: 10px;">
          <span class="owner-detail-label">صورة إيصال التحويل المرفقة من العميل:</span>
          <img src="${order.payment.receiptUrl}" alt="إيصال الدفع" class="receipt-img-modal" onclick="window.open('${order.payment.receiptUrl}')">
          <small class="text-xs text-muted">انقر على الصورة لفتحها بالحجم الكامل</small>
        </div>
      `;
    }

    const modalBody = document.getElementById('ownerModalBody');
    modalBody.innerHTML = `
      <div class="owner-detail-grid">
        
        <!-- Customer & Delivery info -->
        <div class="owner-info-card">
          <h4><i class="fa-solid fa-user-tag text-accent"></i> بيانات العميل والشحن التفصيلية</h4>
          
          <div class="owner-detail-row">
            <span class="owner-detail-label">الاسم بالكامل:</span>
            <span class="owner-detail-value" style="font-size: 1.05rem;">${order.customer.name}</span>
          </div>

          <div class="owner-detail-row">
            <span class="owner-detail-label">رقم الهاتف الأساسي:</span>
            <a href="tel:${order.customer.phone}" class="owner-detail-value phone-number-link" style="color: var(--accent-terracotta);">
              <i class="fa-solid fa-phone ml-1"></i> ${order.customer.phone}
            </a>
            ${order.customer.altPhone ? `<span class="text-xs text-muted mr-2">(بديل: ${order.customer.altPhone})</span>` : ''}
          </div>

          <div class="owner-detail-row">
            <span class="owner-detail-label">المحافظة والمنطقة:</span>
            <span class="owner-detail-value">${order.customer.governorateName} - ${order.customer.city}</span>
          </div>

          <div class="owner-detail-row">
            <span class="owner-detail-label">الشارع والعمارة والشقة:</span>
            <span class="owner-detail-value">${order.customer.street}</span>
            <div style="font-size: 0.85rem; color: #44403C; margin-top: 2px;">
              ${order.customer.building}
            </div>
          </div>

          ${order.customer.notes ? `
            <div class="owner-detail-row" style="background: #FFF7ED; padding: 8px 12px; border-radius: 6px; border: 1px solid #FED7AA;">
              <span class="owner-detail-label" style="color: #C2410C;">ملاحظات خاصة لمندوب الشحن:</span>
              <strong style="color: #9A3412;">${order.customer.notes}</strong>
            </div>
          ` : ''}

          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <a href="https://wa.me/2${order.customer.phone}" target="_blank" class="btn btn-whatsapp btn-sm flex-1">
              <i class="fa-brands fa-whatsapp"></i> محادثة واتساب
            </a>
            <a href="tel:${order.customer.phone}" class="btn btn-secondary btn-sm flex-1">
              <i class="fa-solid fa-phone"></i> اتصال بالعميل
            </a>
          </div>
        </div>

        <!-- Order Items & Payment Verification -->
        <div class="owner-info-card">
          <h4><i class="fa-solid fa-credit-card text-accent"></i> المنتجات والدفع</h4>
          
          <div style="margin-bottom: 14px;">
            ${itemsHtml}
          </div>

          <div class="owner-detail-row" style="display: flex; justify-content: space-between; border-top: 1px solid #E5DFD5; padding-top: 8px;">
            <span>المجموع الفرعي:</span>
            <strong>${order.subtotal} ج.م</strong>
          </div>
          <div class="owner-detail-row" style="display: flex; justify-content: space-between;">
            <span>مصاريف الشحن (${order.customer.governorateName}):</span>
            <strong>${order.shippingFee} ج.م</strong>
          </div>
          <div class="owner-detail-row" style="display: flex; justify-content: space-between; font-size: 1.1rem; color: var(--accent-terracotta);">
            <span>الإجمالي المطلوب:</span>
            <strong>${order.total} ج.م</strong>
          </div>

          <hr class="modal-divider">

          <div class="owner-detail-row">
            <span class="owner-detail-label">طريقة الدفع:</span>
            <strong>${order.payment.methodName}</strong>
            ${order.payment.senderPhone ? `<div class="text-xs text-muted">المحول منه: ${order.payment.senderPhone}</div>` : ''}
            ${order.payment.reference ? `<div class="text-xs text-muted">الرقم المرجعي: ${order.payment.reference}</div>` : ''}
          </div>

          ${receiptDisplay}

          <!-- Change Status Control -->
          <div style="margin-top: 18px; padding-top: 12px; border-top: 1px solid #E5DFD5;">
            <label class="form-label">تغيير وتحديث حالة الطلب:</label>
            <div style="display: flex; gap: 8px;">
              <select id="modalStatusSelect" class="form-control" style="font-weight: 700;">
                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>بانتظار التأكيد (Pending)</option>
                <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>تم التأكيد ومراجعة الدفع (Confirmed)</option>
                <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>قيد الشحن مع المندوب (Shipped)</option>
                <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>تم التسليم بنجاح (Delivered)</option>
                <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>ملغي (Cancelled)</option>
              </select>
              <button class="btn btn-primary btn-sm" onclick="app.updateOrderStatusFromModal('${order.id}')">
                حفظ الحالة
              </button>
            </div>
          </div>

        </div>

      </div>

      <div style="margin-top: 20px; display: flex; justify-content: flex-end; gap: 10px;">
        <button class="btn btn-secondary" onclick="app.printWaybill('${order.id}')">
          <i class="fa-solid fa-print ml-2"></i> طباعة بوليصة الشحن (Waybill) لمندوب شركة الشحن
        </button>
        <button class="btn btn-primary" onclick="app.closeOwnerOrderModal()">
          إغلاق
        </button>
      </div>
    `;

    document.getElementById('ownerOrderModalBackdrop').classList.add('active');
  }

  updateOrderStatusFromModal(orderId) {
    const select = document.getElementById('modalStatusSelect');
    if (!select) return;

    const newStatus = select.value;
    const newStatusName = select.options[select.selectedIndex].text;
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = newStatus;
    order.statusName = newStatusName;
    this.saveOrders();
    this.refreshOwnerOrders();

    // Sync status change to Firebase Cloud Firestore
    if (window.hayyFirebase && typeof window.hayyFirebase.updateOrderStatus === 'function') {
      window.hayyFirebase.updateOrderStatus(orderId, newStatus, newStatusName).then(res => {
        if (res && res.success) {
          console.log(`☁️ Order #${orderId} status successfully synced to Firestore!`);
        }
      }).catch(err => {
        console.warn("Firebase status sync error:", err);
      });
    }

    this.showToast(`تم تحديث حالة طلب #${orderId} إلى: ${newStatusName} وحفظها سحابياً ☁️`, 'success');
    this.closeOwnerOrderModal();
  }

  closeOwnerOrderModal() {
    document.getElementById('ownerOrderModalBackdrop').classList.remove('active');
  }

  // -------------------------------------------------------------
  // Printable Shipping Waybill (بوليصة شحن للمندوب)
  // -------------------------------------------------------------
  printWaybill(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return;

    const printContainer = document.getElementById('printableWaybill');
    if (!printContainer) return;

    const isCod = order.payment.method === 'cod';

    printContainer.innerHTML = `
      <div style="border: 3px solid #000; padding: 24px; font-family: 'Cairo', sans-serif; max-width: 750px; margin: 0 auto; direction: rtl;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 16px; margin-bottom: 16px;">
          <div>
            <h1 style="font-size: 24pt; margin: 0; font-weight: 900;">حَيّ | HAYY STUDIO</h1>
            <p style="margin: 0; font-size: 10pt; color: #555;">بوليصة شحن وتسليم سريعة • E-COMMERCE WAYBILL</p>
          </div>
          <div style="text-align: left;">
            <div style="font-size: 18pt; font-weight: 900;">#${order.id}</div>
            <div style="font-size: 10pt;">${order.createdAt}</div>
          </div>
        </div>

        <!-- Barcode Simulation -->
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="font-family: monospace; font-size: 28pt; letter-spacing: 5px; font-weight: bold; background: #eee; padding: 8px;">
            ||||| | |||| ||| ||||| || ||||
          </div>
          <span style="font-size: 10pt;">TRACKING NO: ${order.id}-EG</span>
        </div>

        <!-- 2 Columns: Shipper & Consignee -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; border-bottom: 2px solid #000; padding-bottom: 16px; margin-bottom: 16px;">
          
          <!-- Shipper / Store Info -->
          <div style="border: 1px solid #ccc; padding: 12px; border-radius: 4px;">
            <h3 style="font-size: 11pt; border-bottom: 1px solid #ccc; margin-bottom: 6px; padding-bottom: 4px;">الراسل (Shipper):</h3>
            <p style="margin: 2px 0;"><strong>HAYY Studio Egypt</strong></p>
            <p style="margin: 2px 0;">هاتف الإدارة: 01023456789</p>
            <p style="margin: 2px 0;">القاهرة الكبرى، جمهورية مصر العربية</p>
          </div>

          <!-- Consignee / Buyer Info -->
          <div style="border: 2px solid #000; padding: 12px; border-radius: 4px; background: #fafafa;">
            <h3 style="font-size: 12pt; border-bottom: 1px solid #000; margin-bottom: 6px; padding-bottom: 4px; font-weight: 800;">المرسل إليه (المشتري):</h3>
            <p style="margin: 4px 0; font-size: 13pt;"><strong>${order.customer.name}</strong></p>
            <p style="margin: 4px 0; font-size: 13pt; direction: ltr; text-align: right;"><strong>هاتف: ${order.customer.phone}</strong></p>
            ${order.customer.altPhone ? `<p style="margin: 2px 0;">هاتف بديل: ${order.customer.altPhone}</p>` : ''}
            <p style="margin: 4px 0; font-size: 12pt;"><strong>المحافظة: ${order.customer.governorateName} - ${order.customer.city}</strong></p>
            <p style="margin: 2px 0;">الشارع: ${order.customer.street}</p>
            <p style="margin: 2px 0;">العمارة / الدور / الشقة: <strong>${order.customer.building}</strong></p>
          </div>

        </div>

        <!-- Special Courier Instructions -->
        ${order.customer.notes ? `
          <div style="background: #fff3cd; border: 2px dashed #856404; padding: 10px; margin-bottom: 16px; font-size: 11pt;">
            <strong>⚠️ تعليمات وملاحظات العميل لمندوب الشحن:</strong> ${order.customer.notes}
          </div>
        ` : ''}

        <!-- Items Table -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 11pt;">
          <thead>
            <tr style="background: #eee;">
              <th style="border: 1px solid #000; padding: 6px; text-align: right;">المنتج</th>
              <th style="border: 1px solid #000; padding: 6px; text-align: center;">المقاس</th>
              <th style="border: 1px solid #000; padding: 6px; text-align: center;">اللون</th>
              <th style="border: 1px solid #000; padding: 6px; text-align: center;">العدد</th>
            </tr>
          </thead>
          <tbody>
            ${order.items.map(it => `
              <tr>
                <td style="border: 1px solid #000; padding: 6px;">${it.title}</td>
                <td style="border: 1px solid #000; padding: 6px; text-align: center;"><strong>${it.size}</strong></td>
                <td style="border: 1px solid #000; padding: 6px; text-align: center;">${it.color}</td>
                <td style="border: 1px solid #000; padding: 6px; text-align: center;"><strong>${it.qty}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- COD Collection Box -->
        <div style="border: 3px solid ${isCod ? '#c00' : '#080'}; padding: 14px; text-align: center; border-radius: 6px; margin-bottom: 16px;">
          ${isCod ? `
            <div style="font-size: 14pt; color: #c00; font-weight: bold; margin-bottom: 4px;">المبلغ المطلوب تحصيله نقداً من العميل (COD):</div>
            <div style="font-size: 26pt; font-weight: 900; color: #000;">${order.total} ج.م</div>
            <div style="font-size: 10pt; color: #555;">(ممنوع تسليم الشحنة دون تحصيل المبلغ الموضح أعلاه)</div>
          ` : `
            <div style="font-size: 14pt; color: #080; font-weight: bold; margin-bottom: 4px;">مدفوع مسبقاً بالكامل (${order.payment.methodName})</div>
            <div style="font-size: 24pt; font-weight: 900; color: #080;">المبلغ للتحصيل: 0 ج.م</div>
            <div style="font-size: 10pt; color: #555;">(تم التحويل مسبقاً عبر ${order.payment.methodName} - تسليم مباشر للعميل)</div>
          `}
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 10pt; color: #777; border-top: 1px solid #ccc; padding-top: 10px;">
          <span>توقيع مندوب الشحن: ______________</span>
          <span>توقيع العميل بالاستلام: ______________</span>
        </div>

      </div>
    `;

    window.print();
  }

  // -------------------------------------------------------------
  // Notification Toast & Modal Closers
  // -------------------------------------------------------------
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    this.toggleCart(false);
    this.toggleMobileMenu(false);
  }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new HayyApp();
  window.app = app;
});
