# 🚀 EVENTLY: Full-Stack Event and Booking Management Platform

## **STRATEGIC ARCHITECTURE & BUSINESS VALUE**

### 🎯 Identified Market Problem & Value Proposition

> **Core Problem:** The fragmentation and inefficiency in managing event sign-ups, ticket sales, and organizing event data across disparate platforms.
>
> **T-Shape Solution:** Developed a comprehensive **event management SaaS** focused on transaction security, data integrity, and streamlined booking flow. This validates expertise in building transactional applications where data consistency (who bought what) is mission-critical.

### 📈 Key Metrics, Anti-AI Strategy, and Business Alignment

*   **Performance Priority:** **Data integrity and transaction security** (crucial for payments and attendee lists). Low latency for ticket confirmation.
*   **Strategy Anti-AI:** The value is in the **architectural logic governing event state** (e.g., tickets sold vs. available, past vs. future events) and integrating payments securely—decisions requiring human **risk assessment** and business flow mapping.
*   **Monetization/Value Stream:** Designed to handle **payment processing (implied Stripe/PayPal)** and manage event inventory, demonstrating direct revenue stream competency.

---

## **DEEP SOFTWARE ARCHITECTURE**

### 🛠️ Core Technology Stack

| Technology | Role and Strategic Justification |
| :--- | :--- |
| **Framework** | Next.js 14 (TypeScript) |
| **Backend/DB** | MongoDB/Mongoose (Implied transactional data management) |
| **Styling** | Tailwind CSS / Shadcn UI |
| **Auth** | Clerk / Custom Auth |
| **AI/Services** | Payments SDK (Stripe implied), Geolocation/Mapping |

### ⚙️ Key Architectural Decisions

1.  **Next.js (API Security):** Crucial for securing the payment flow and server-side validation of booking requests, protecting against double-booking and fraud.
2.  **Mongoose/MongoDB:** Chosen for flexible but robust data modeling, essential for linking users, events, and transactions accurately.
3.  **Transactional Integrity:** Architectural emphasis on ensuring **ACID properties (Atomicity, Consistency)** where possible, particularly during the booking/payment sequence.

---

## **T-SHAPE SUPERPOWERS & EXECUTION CHALLENGES**

### 🧠 Strategic Challenges Overcome

*   **Challenge 1:** Securely integrating the **payment gateway** and ensuring accurate reflection of ticket availability in real-time.
*   **Solution 1:** Implemented strict server-side logic and webhooks to reconcile payment status with database inventory updates.
*   **Challenge 2:** Managing complex **event search and filtering** based on location, date, and category.
*   **Solution 2:** Optimized database queries and Front-End filtering mechanisms for rapid search results.

### 💻 Local Setup (Quick Start)

```bash
# 1. Clone the repository
git clone https://github.com/saulkurosaki/EVENTLY-PROJECT

# 2. Change directory
cd EVENTLY-PROJECT

# 3. Install dependencies
npm install

# 4. Configure variables de entorno
# Create a .env.local file and add the necessary keys for Auth (Clerk), Database access, and Payment Gateway (Stripe).

# 5. Start Development Server
npm run dev
```
----

![Alt text](<1-Evently - Google Chrome 07_01_2024 07_39_45 p. m..png>)

![Alt text](<2-Evently - Google Chrome 07_01_2024 07_39_54 p. m..png>)
![Alt text](<3-Evently - Google Chrome 07_01_2024 07_48_15 p. m..png>)
![Alt text](<4-Evently - Google Chrome 07_01_2024 07_41_38 p. m..png>)
![Alt text](<5-Evently - Google Chrome 07_01_2024 07_47_45 p. m..png>)
![Alt text](<6-Evently - Google Chrome 07_01_2024 07_48_01 p. m..png>)
![Alt text](<7-Evently - Google Chrome 07_01_2024 07_49_54 p. m..png>)
![Alt text](<8-Evently - Google Chrome 07_01_2024 07_50_31 p. m..png>)
![Alt text](<9-Evently - Google Chrome 07_01_2024 07_50_57 p. m..png>)
![Alt text](<10-Evently - Google Chrome 07_01_2024 07_51_11 p. m..png>)
![Alt text](<11-Evently - Google Chrome 07_01_2024 07_51_46 p. m..png>)
![Alt text](<12-Evently - Google Chrome 07_01_2024 07_51_55 p. m..png>)
![Alt text](<13-Evently - Google Chrome 07_01_2024 07_52_04 p. m..png>)
![Alt text](<14-Evently - Google Chrome 07_01_2024 07_52_11 p. m..png>)
![Alt text](<16-Evently - Google Chrome 07_01_2024 07_52_17 p. m..png>)
