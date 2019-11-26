// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export default class StrikeIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    width='12'
                    height='11'
                    viewBox='0 0 12 11'
                    role='img'
                    aria-label='Strike icon'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g
                        stroke='none'
                        strokeWidth='1'
                        fill='currentColor'
                        fillRule='evenodd'
                    >
                        <path d='M11.7373 5.3125V6.3623H9.44238C9.58887 6.67155 9.67025 7.0459 9.68652 7.48535C9.7028 7.97363 9.61328 8.42936 9.41797 8.85254C9.1901 9.3571 8.83203 9.74772 8.34375 10.0244C7.79036 10.3499 7.07422 10.5127 6.19531 10.5127C4.90951 10.529 3.90853 10.2441 3.19238 9.6582C2.67155 9.23503 2.32161 8.68978 2.14258 8.02246C2.04492 7.68066 2.00423 7.3877 2.02051 7.14355L4.0957 7.16797C4.0957 7.91667 4.38867 8.42936 4.97461 8.70605C5.30013 8.85254 5.66634 8.91764 6.07324 8.90137H6.14648C6.52083 8.86882 6.82194 8.79557 7.0498 8.68164C7.47298 8.48633 7.70085 8.15267 7.7334 7.68066C7.76595 7.19238 7.38346 6.75293 6.58594 6.3623H0.262695V5.3125H11.7373ZM9.85742 3.16406H7.78223V2.91992C7.74967 2.74089 7.69271 2.57812 7.61133 2.43164C7.4974 2.22005 7.3265 2.05729 7.09863 1.94336C6.83822 1.7806 6.49642 1.69922 6.07324 1.69922C5.3571 1.69922 4.86882 1.87826 4.6084 2.23633C4.47819 2.43164 4.42122 2.67578 4.4375 2.96875V2.99316C4.47005 3.1722 4.55957 3.35124 4.70605 3.53027C4.98275 3.83952 5.41406 4.06738 6 4.21387H2.72852L2.58203 3.84766C2.4681 3.53841 2.39486 3.2373 2.3623 2.94434C2.32975 2.52116 2.37858 2.13867 2.50879 1.79688C2.67155 1.38997 2.95638 1.04818 3.36328 0.771484C3.85156 0.445964 4.51074 0.226237 5.34082 0.112305C5.89421 0.0309245 6.39062 0.0146484 6.83008 0.0634766C7.25326 0.0960286 7.6276 0.185547 7.95312 0.332031C8.26237 0.445964 8.53092 0.600586 8.75879 0.795898C8.97038 0.974935 9.14941 1.17839 9.2959 1.40625C9.42611 1.60156 9.54004 1.81315 9.6377 2.04102C9.7028 2.22005 9.75163 2.40723 9.78418 2.60254C9.81673 2.74902 9.83301 2.88737 9.83301 3.01758C9.84928 3.13151 9.85742 3.18034 9.85742 3.16406Z'/>
                    </g>
                </svg>
            </span>
        );
    }
}