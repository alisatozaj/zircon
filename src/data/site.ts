/**
 * Contact form settings.
 *
 * 1. Go to https://web3forms.com, enter your email, and they send you an "access key".
 * 2. Paste that key below. (It is meant to sit in the page code; it only lets people send YOU a message.)
 * 3. Messages from the form will then arrive in your inbox.
 */
export const siteForm = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "YOUR_ACCESS_KEY_HERE",
  /** Shown if sending fails, so nobody is stuck. */
  fallbackEmail: "zircn.dev@gmail.com",
};
