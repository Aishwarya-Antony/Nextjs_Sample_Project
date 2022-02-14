import React, { Component } from "react";
import { withRouter } from 'next/router';

class review extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        const { userId, reviewId } = this.props.router.query
        return (
            <div>
                Review {reviewId} from user {userId}
            </div>
        )
    }
}

export default withRouter(review);