import React from 'react';
import { SideNavigation } from '@cloudscape-design/components';

function Navigation() {
  return (
    <SideNavigation
      header={{ href: '#', text: 'Naman Ahuja' }}
      items={[
        { type: 'link', text: 'Home', href: '#section-home' },
        { type: 'link', text: 'Experience', href: '#section-resume' },
        { type: 'link', text: 'Projects', href: '#section-blog' },
        { type: 'link', text: 'About', href: '#section-about' },
        { type: 'link', text: 'Contact', href: '#section-contact' },
      ]}
    />
  );
}

export default Navigation;
