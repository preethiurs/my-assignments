import React from "react";
export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
        this.state = {articleid: '', articleTitle: '', articleBody: '', contentarea: false, editarea: false};
    }

    loadArtcile()
    {
        console.log("load article function");
    }

    render()
    {
   return <div>
         <h1>hai</h1>
   </div>

    }
}
