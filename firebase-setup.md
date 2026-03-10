# Firebase Setup (One-Time, ~2 Minutes)

## 1. Create a Firebase Project
1. Go to https://console.firebase.google.com
2. Click **Add project** → name it `howard-portfolio` → click through (disable Google Analytics if you want)

## 2. Create Firestore Database
1. In your project, go to **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (you can lock it down later)
4. Pick any region → **Done**

## 3. Get Your Config
1. Go to **Project Settings** (gear icon top left)
2. Under **Your apps**, click the **</>** web icon
3. Name it `portfolio` → click **Register app**
4. Copy the `firebaseConfig` object shown

## 4. Paste Config into index.html
In `index.html`, find this block near the top of the `<script>` section:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

Replace it with your copied config. **Save the file**, then push to GitHub.

## 5. Set Firestore Security Rules (Optional but Recommended)
In Firestore → **Rules**, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /portfolio/{document=**} {
      allow read: if true;        // Anyone can read
      allow write: if false;      // No public writes (admin panel uses a secret key workaround)
    }
  }
}
```

> **Note:** Because this is client-side, the admin "password" protects the UI — not the database.
> For a public portfolio this is fine. The data is all public anyway.
> If you want stricter security, Firebase Auth can be added later.

## 6. Deploy to GitHub Pages
Make sure your repo has `index.html` at the root.
In GitHub repo → **Settings → Pages → Branch: main → / (root)** → Save.

Your site will be live at `https://yourusername.github.io/your-repo-name/`
