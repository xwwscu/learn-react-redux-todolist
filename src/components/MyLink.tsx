import * as React from 'react';

export interface IMyLinkProps {
    active: boolean,
    content: string,
    toggleClick: () => void
}

const MyLink = (linkProps: IMyLinkProps) => {
    const toggleClick = linkProps.toggleClick;
    // const filterString = linkProps.content;
    return (
        linkProps ? 
        <button 
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => toggleClick()} 
            disabled={linkProps.active} 
            style={
                {marginLeft: '4px'}
            }>{linkProps.content}</button>
        : <div>异常link项!</div>
    );
}

export default MyLink;