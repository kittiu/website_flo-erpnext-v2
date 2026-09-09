/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA — Flo Works Limited (ERPNext implementation, Thailand)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Flo Works Limited',
  email: 'sales@flo-works.co',
  phoneForTel: '+66818417480',
  phoneFormatted: '+66 81 841 7480',
  /** Leave empty to hide (no license number for an ERP consultancy). */
  license: '',
  address: {
    lineOne: '2 Silom Edge Building, 10th Floor',
    lineTwo: 'Room S10063',
    city: 'Bangkok',
    state: '',
    zip: '10500',
    country: 'TH',
    mapLink: 'https://maps.google.com/?q=Silom+Edge+Bangrak+Bangkok+10500',
  },
  socials: {
    facebook: '',
    instagram: '',
    google: 'https://maps.google.com/?q=Silom+Edge+Bangrak+Bangkok+10500',
  },
  domain: 'https://flo-erpnext.example.com', // TODO: replace with the real domain before go-live
} as const;

export type Client = typeof client;
