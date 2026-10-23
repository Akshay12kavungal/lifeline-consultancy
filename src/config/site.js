// Business details and integrations — change contact info here and it updates everywhere.

export const SITE = {
  phone: "7559095008",
  whatsapp: "917559095008",
  email: "lifelineconsultancy.edu@gmail.com",
  instagram: "lifeline.consultancy",
  street: "GGHSS Road, opp. PWD Office",
  locality: "Nedumangad, Trivandrum – 695541",
};

export const LINKS = {
  tel: `tel:${SITE.phone}`,
  whatsapp: `https://wa.me/${SITE.whatsapp}`,
  email: `mailto:${SITE.email}`,
  instagram: `https://instagram.com/${SITE.instagram}`,
};

// Google Analytics 4 measurement ID
export const GA_MEASUREMENT_ID = "G-XPWLXQS052";

// Contact form posts to this Google Form; field IDs come from the form's prefill link.
export const GOOGLE_FORM = {
  action: "https://docs.google.com/forms/d/e/1FAIpQLSezxUtfmPzWTRbh3TMOTks_3riKKAsrlwm4-00pSbqOElF3OA/formResponse",
  fields: {
    name: "entry.2005620554",
    email: "entry.1045781291",
    course: "entry.1065046570",
    phone: "entry.1166974658",
    service: "entry.839337160",
    message: "entry.678910034",
  },
};
