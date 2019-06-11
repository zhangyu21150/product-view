import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import img from "../../assets/camera.jpg";



const titleData = [
    {
        img: "image" ,
        title: "title1",
        author: "author"
    },
    {
        img: "image" ,
        title: "title1",
        author: "author"
    },
    {
        img: "image" ,
        title: "title1",
        author: "author"
    },{
        img: "image" ,
        title: "title1",
        author: "author"
    },{
        img: "image" ,
        title: "title1",
        author: "author"
    },{
        img: "image" ,
        title: "title1",
        author: "author"
    }
];

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
        this.tileData = [
            {
                img: "../../assets/camera.jpg" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "../../assets/camera.jpg" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "../../assets/camera.jpg" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "../../assets/camera.jpg" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },
            {
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            },{
                img: "image" ,
                title: "title1",
                author: "author"
            }
        ];
        this.useStyles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
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
                <GridList cellHeight={250} cols={8} style={classes.root}>
                    {this.tileData.map((tile, index) => (
                        <GridListTile key={tile.img + index} style={{"marginBottom": "30px", "width": "250px"}}>
                            <img src={img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} style={classes.icon}>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}
