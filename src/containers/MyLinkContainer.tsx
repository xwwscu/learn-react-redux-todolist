import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as LinkComponent from './../components/MyLink';
import actionGetter from './../actions/ActionsGetter';
import * as ActionConstants from './../actions/ActionConstants';
import { IMyState } from './../interfaces/StateInterface';

interface ILinkItem {
    active: boolean,
    content: string
}

interface ILinkProps {
    data: ILinkItem[],
    toggleClick: (filter:string) => void
}

const linkDataArr: string[] = [];
/* linkDataArr.concat(ActionConstants.ACTION_TYPE_FILTER.SHOW_ALL, 
    ActionConstants.ACTION_TYPE_FILTER.SHOW_FINISHED, 
    ActionConstants.ACTION_TYPE_FILTER.SHOW_UNFINISHED); */
linkDataArr.push(ActionConstants.ACTION_TYPE_FILTER.SHOW_ALL);
linkDataArr.push(ActionConstants.ACTION_TYPE_FILTER.SHOW_FINISHED);
linkDataArr.push(ActionConstants.ACTION_TYPE_FILTER.SHOW_UNFINISHED);

const getStateLinkData = (state: IMyState) => {
    const propData: ILinkItem[] = [];
    const linkProps = {
        data: propData
    };
    linkDataArr.forEach(item => {
        const linkItem: ILinkItem = {
            active: state.visibilityFilter === item,
            content: item
        };
        linkProps.data.push(linkItem);
    });
    return linkProps.data;
}

const mapStateToProps = (state: IMyState) => {
    return {
        data: getStateLinkData(state)
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toggleClick: (filterStr:string) => {
            dispatch(actionGetter.getSetFilterAction(filterStr))
        }
    }
}

class MyLinkContainer extends React.Component<ILinkProps> {
    /* static defaultProps = {
        data:[]
    } */
    render() {
        const MyLink = LinkComponent.default;
        const data = this.props.data;
        const toggleClick = this.props.toggleClick;
        return (
            <ul>
                {
                    data.map((dataItem, index) =>
                            // tslint:disable-next-line:jsx-key
                            <MyLink 
                                key={index}
                                active={dataItem.active}
                                content={dataItem.content}
                            // tslint:disable-next-line:jsx-no-lambda
                                toggleClick={() => toggleClick(dataItem.content)} />)
                }
            </ul>
        );
    }
}

const WrapperLinkContainer = connect(mapStateToProps, mapDispatchToProps)(MyLinkContainer);

export default WrapperLinkContainer;