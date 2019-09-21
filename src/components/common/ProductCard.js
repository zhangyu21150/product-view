import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getImgHost } from "util/service";

export default class MediaCard extends Component{
    render() {
        return (
            <Card style={{maxWidth: "345px", backgroundSize: "100% 100%", backgroundImage: `url(${getImgHost() + this.props.card.template})`}}>
                <CardActionArea>
                    <CardContent style={{height: "140px"}}>
                    </CardContent>
                    <CardContent style={{height: "20px", backgroundColor: "#fff", opacity: "0.7"}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.card.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{backgroundColor: "#fff", opacity: "0.7"}}>
                    <Button size="small" color="primary">
                        详情
                    </Button>
                    <Button size="small" color="primary">
                        安装
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
