import * as React from 'react';
import WrapperLinkContainer from './../containers/MyLinkContainer';
// import * as ActionConstants from './../actions/ActionConstants';

function MyLinkFooter() {
    return (
        <div>
            <span>Show: </span>
            <WrapperLinkContainer />
        </div>
    );
}

export default MyLinkFooter;
