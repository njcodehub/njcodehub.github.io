import type { CallToAction } from '~/types';

interface NavLink {
  text: string;
  href: string;
  enabled?: boolean; // Pour activer/désactiver des items sans les supprimer
}

// Configuration centralisée de la navigation
// Pour ajouter "Articles", décommentez simplement la ligne correspondante
const navLinks: NavLink[] = [
  { text: 'Industries', href: '/#sectors', enabled: true },
  { text: 'Services', href: '/#services', enabled: true },
  { text: 'Process', href: '/#timeline', enabled: true },
  { text: 'About', href: '/#about-preview', enabled: true },
  // { text: 'Articles', href: '/articles/', enabled: true }, // Décommenter pour activer
];

const navActions: CallToAction[] = [{ text: 'Contact', href: '/contact/', variant: 'primary' }];

// Export filtré : seuls les items enabled:true (ou sans enabled défini) sont inclus
export const headerData = {
  links: navLinks.filter((link) => link.enabled !== false).map(({ text, href }) => ({ text, href })),
  actions: navActions,
};
