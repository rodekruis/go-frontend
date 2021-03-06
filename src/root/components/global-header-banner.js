import React from 'react';
import Translate from '#components/Translate';

class GlobalHeaderBanner extends React.PureComponent {
  render () {
    return (
      <div className='global__banner global__banner--danger text-center'>
        <Translate
          stringId='globalHeaderBannerTitle'
          params={{
            link: (
              <a href='https://go.ifrc.org/emergencies/3972'>
                <Translate stringId='globalHeaderBannerHere'/>
              </a>
            )
          }}
        />
      </div>
    );
  }
}

export default GlobalHeaderBanner;
