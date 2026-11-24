/**
 * Firebase Integration Service for HAYY Studio
 * Real-time Cloud Firestore Database Connection for Orders & Status Updates
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  onSnapshot, 
  updateDoc, 
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

// User's Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCmbjumwjvX5jSurEUraKpp--vv3xC3_E",
  authDomain: "llllllllllllllllllllllll-b545b.firebaseapp.com",
  projectId: "llllllllllllllllllllllll-b545b",
  storageBucket: "llllllllllllllllllllllll-b545b.firebasestorage.app",
  messagingSenderId: "165368335526",
  appId: "1:165368335526:web:0e461a45f1403404027867",
  measurementId: "G-SJNDH609RJ"
};

// Initialize Firebase App
let app = null;
let analytics = null;
let db = null;
let isFirebaseConnected = false;

try {
  app = initializeApp(firebaseConfig);
  try {
    analytics = getAnalytics(app);
  } catch (analyticsErr) {
    console.warn("Firebase Analytics could not be initialized in this environment:", analyticsErr);
  }
  db = getFirestore(app);
  isFirebaseConnected = true;
  console.log("🔥 Firebase initialized successfully. Project:", firebaseConfig.projectId);
} catch (err) {
  console.error("❌ Firebase initialization error:", err);
  isFirebaseConnected = false;
}

/**
 * Save new order to Firebase Cloud Firestore
 */
export async function saveOrderToFirestore(orderData) {
  if (!db) {
    console.warn("Firestore not initialized, falling back to LocalStorage.");
    return { success: false, fallback: true, error: "Database not initialized" };
  }

  try {
    const ordersCol = collection(db, "orders");
    const orderDocRef = doc(ordersCol, orderData.id);

    // Prepare data with server timestamp
    const payload = {
      ...orderData,
      createdAtServer: serverTimestamp(),
      updatedAtServer: serverTimestamp(),
      syncedAt: new Date().toISOString()
    };

    await setDoc(orderDocRef, payload);
    console.log(`✅ Order #${orderData.id} saved to Cloud Firestore.`);
    return { success: true };
  } catch (error) {
    console.error("❌ Failed to save order to Firestore:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Update order status in Firebase Cloud Firestore
 */
export async function updateOrderStatusInFirestore(orderId, newStatus, newStatusName) {
  if (!db) return { success: false, error: "Database not initialized" };

  try {
    const orderDocRef = doc(db, "orders", orderId);
    await updateDoc(orderDocRef, {
      status: newStatus,
      statusName: newStatusName,
      updatedAtServer: serverTimestamp()
    });
    console.log(`✅ Order #${orderId} status updated to ${newStatus} in Firestore.`);
    return { success: true };
  } catch (error) {
    console.error(`❌ Failed to update status for order #${orderId}:`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Real-time listener for orders in Firestore
 * Invokes callback whenever any order is added, changed, or deleted
 */
export function listenToFirestoreOrders(onOrdersUpdated, onError) {
  if (!db) {
    if (onError) onError(new Error("Firestore is not initialized"));
    return () => {};
  }

  try {
    const ordersCol = collection(db, "orders");
    const q = query(ordersCol);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const orders = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        orders.push({
          ...data,
          id: data.id || docSnap.id
        });
      });

      // Sort by creation time descending (newest first)
      orders.sort((a, b) => {
        const timeA = new Date(a.createdAt || 0).getTime();
        const timeB = new Date(b.createdAt || 0).getTime();
        return timeB - timeA;
      });

      console.log(`📡 Real-time Firestore Sync: Received ${orders.length} orders.`);
      if (onOrdersUpdated) {
        onOrdersUpdated(orders);
      }
    }, (err) => {
      console.warn("⚠️ Firestore listener permission/network warning:", err);
      if (onError) onError(err);
    });

    return unsubscribe;
  } catch (err) {
    console.error("❌ Error setting up Firestore listener:", err);
    if (onError) onError(err);
    return () => {};
  }
}

/**
 * Check Firebase Connection Status
 */
export function getFirebaseStatus() {
  return {
    isConnected: isFirebaseConnected,
    projectId: firebaseConfig.projectId,
    authDomain: firebaseConfig.authDomain
  };
}

// Attach to window for global access if needed
window.hayyFirebase = {
  saveOrder: saveOrderToFirestore,
  updateOrderStatus: updateOrderStatusInFirestore,
  listenToOrders: listenToFirestoreOrders,
  getStatus: getFirebaseStatus,
  db: db
};
