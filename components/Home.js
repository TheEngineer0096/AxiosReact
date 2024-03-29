
import React from 'react'
import { Component } from 'react'
import axios from 'axios'

class Home extends Component  {
    
    state = {
        posts: [ ]
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data.slice(0,10)
            })
        }
        )
    
    
    }
    render(){
        const {posts}= this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts</div>
        )
    return(
        <div className="container">
            <h4 className="center">Home</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus illum omnis, voluptatibus non cupiditate laudantium eligendi distinctio quibusdam ullam possimus dolorum quam dolor expedita ea quasi molestiae atque assumenda.</p>
        {postList}
        </div>
    )

}
}

export default Home