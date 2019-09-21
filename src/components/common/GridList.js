import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import ProductCard from "components/common/ProductCard";

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default class TitlebarGridList extends Component{
    constructor(props) {
        super(props);
        this.useStyles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start'
            },
            gridList: {
                width: 500,
                height: 450,
            },
            icon: {
                color: 'rgba(255, 255, 255, 0.54)',
            }
        }
    }

    render() {
        const classes = this.useStyles;
        return (
            <div>
                <GridList cellHeight={250} cols={8} style={classes.root} >
                    {this.props.tileData.map((tile, index) => {
                        let gap = (((index + 1) % 4) === 0) ? "0px" : "74px";
                        return (<div key={tile.img + index}
                             style={{"marginBottom": "30px", "marginRight": `${gap}`, "width": "250px"}}>
                            <ProductCard card={tile}/>
                        </div>)
                    })}
                </GridList>
            </div>
        );
    }
}
