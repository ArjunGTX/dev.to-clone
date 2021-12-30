import React from 'react';
import './Right.css'

function Right() {
    return (
        <div className='right-container'>
            <div className="card-right default">
                <h4>Did you know you can follow popular developer podcasts right here on DEV?</h4>
                <p>Visit <a href="#">dev.to/pod</a> to discover new audio!</p>
            </div>
            <div className="long-card default">
                <img src="/assets/images/mongodb.png" alt="" />
                <h3>Stories (11)</h3>
                <p>[MongoDB Submission Post Placeholder Title]</p>
                <p>[MongoDB Submission Post Placeholder Title]</p>
                <p>E-commerce website with a powerful search engine equipped with autocomplete</p>
                <p>Pegasus - A web based REST Client built with MongoDB Atlas</p>
                <p>Notion to Dev integration Using Mongodb Realm</p>
                <button className="btn-blue btn">Submit Your Project!</button>
                <button className="grey-btn btn">See all posts</button>
            </div>
        </div>
    )
}

export default Right
