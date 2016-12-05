import React, { Component, PropTypes } from 'react';

import MobileTearSheet from '../../mobileTearSheet/MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import style from './SearchResults.css';

const styles = {
    listItem: {
        position: 'relative',
        fontFamily: "Arial,sans-serif",
        marginLeft: '17px',
        height: 70,
        width: '90%'
    },
    primaryText: {
        marginTop: -3,
        fontSize: '14px',
        color: '#565656',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    secondaryText: {
        color: '#999',
        lineHeight: '20px',
        fontFamily: 'inherit',
        fontSize: '10px',
        marginTop: '10px'
    }
}

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    over(index) {
        console.log(index);
    }
    render() {
        const {data} = this.props;
        if (data) {
            const pois = data.queryResults.pois;
            return (
                <div ref='root' className={style.root}>
                    <MobileTearSheet>
                        <List>
                            {pois.map((poi, index) => (
                                <div key={poi.id} onMouseOver={() => this.over(index + 1)}>
                                    <ListItem
                                        style={styles.listItem}
                                        primaryText={<p style={styles.primaryText} title={poi.name}>{(index + 1) + '.' + poi.name}</p>}
                                        secondaryText={<p style={styles.secondaryText}>{poi.adname + '    ' + poi.address}</p>}
                                        secondaryTextLines={1}
                                        />
                                    <Divider className={style.divider} />
                                </div>
                            ))}
                        </List>
                    </MobileTearSheet>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

SearchResults.propTypes = {

};

export default SearchResults;