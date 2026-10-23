import { GOOGLE_FORM } from "../config/site";

// Sends a contact-form enquiry to the linked Google Form.
// Google Forms doesn't allow CORS, so the response is opaque: success means "no network error".
export async function submitEnquiry(data) {
  const body = new URLSearchParams();
  for (const key of ["name", "phone", "email", "course", "service", "message"]) {
    body.append(GOOGLE_FORM.fields[key], data[key]);
  }
  await fetch(GOOGLE_FORM.action, { method: "POST", mode: "no-cors", body });
}
