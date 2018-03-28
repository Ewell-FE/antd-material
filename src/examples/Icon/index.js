/**
 * Created by lilei on 2018/3/21.
 */
import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Icon from '@/components/Icon'

export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="title" gutterBottom>
                    最新的4.7版，新增了41个图标
                </Typography>
                <ul>
                    {["address-book",
                        "address-book-o",
                        "address-card",
                        "address-card-o",
                        "bandcamp",
                        "bath",
                        "bathtub (alias)",
                        "drivers-license (alias)",
                        "drivers-license-o (alias)",
                        "eercast",
                        "envelope-open",
                        "envelope-open-o",
                        "etsy",
                        "free-code-camp",
                        "grav",
                        "handshake-o",
                        "id-badge",
                        "id-card",
                        "id-card-o",
                        "imdb",
                        "linode",
                        "meetup",
                        "microchip",
                        "podcast",
                        "quora",
                        "ravelry",
                        "s15 (alias)",
                        "shower",
                        "snowflake-o",
                        "superpowers",
                        "telegram",
                        "thermometer (alias)",
                        "thermometer-0 (alias)",
                        "thermometer-1 (alias)",
                        "thermometer-2 (alias)",
                        "thermometer-3 (alias)",
                        "thermometer-4 (alias)",
                        "thermometer-empty",
                        "thermometer-full",
                        "thermometer-half",
                        "thermometer-quarter",
                        "thermometer-three-quarters",
                        "times-rectangle (alias)",
                        "times-rectangle-o (alias)",
                        "user-circle",
                        "user-circle-o",
                        "user-o",
                        "vcard (alias)",
                        "vcard-o (alias)",
                        "window-close",
                        "window-close-o",
                        "window-maximize",
                        "window-minimize",
                        "window-restore",
                        "wpexplorer"].map((item, i)=> {
                        return (
                            <li key={i}><Icon type={item}/><span style={{marginLeft:5}}>{item}</span></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}