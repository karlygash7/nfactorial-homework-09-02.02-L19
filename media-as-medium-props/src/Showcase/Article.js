import React from "react";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, summary, img} = this.props.article;

        return (<div>
            <p style={{fontSize: "28px", alignItems: "center"}}>{title}</p>
            <p style={{fontSize: "16px", alignItems: "center"}}>{summary}</p>
            <img src={img} style={{ width: '265px', height: '265px' }} />
        </div>
        );
    }
}