import React from 'react';
import './Form.css';
export default class AdPosting extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			body: '',
			newPosts: [],
			loading: false
		}

	};

	handleOnInputChange = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } );
	};

	setLoading = ( status ) => {
		this.setState( { loading: status } );
	};

	onFormSubmit = ( event ) => {
		event.preventDefault();

		this.setLoading( true );

		const formData = {
			title: this.state.title,
			body: this.state.body
		};

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData), // body data type must match "Content-Type" header
		})
			.then(response => response.json()
				.then( newPostData =>
					this.setState( {
						newPosts: [ ...this.state.newPosts, newPostData ],
						title: '',
						body: ''
					}, this.setLoading( false ) ) )
			);
	};

	renderNewPosts = () => {
		const {newPosts} = this.state;
		if ( newPosts.length ) {
			return newPosts.map( post => (
				<div className="card border-primary mb-3">
					<div className="card-header">{post.id}</div>
					<div className="card-body">
						<h5 className="card-title">{post.title}</h5>
						<p className="card-text">{post.body}</p>
					</div>
				</div>
			) );
		}
	};

	render() {

		const { title, body, loading } = this.state;

		return(
			<React.Fragment>
			<div className="page-wrap add-post-wrap">
				<form onSubmit={this.onFormSubmit}>
					<h4 className="mb-3">Add New Post</h4>
					<form className="my-form">
						<div className="my-title">
							<label className="my-label" htmlFor="title">Title</label>
							<input
								onChange={this.handleOnInputChange}
								type="text"
								name="title"
								className="form-control"
								id="title"
								value={title}
							/>
						</div>
						<p><br/></p>
						<div className="my-body">
							<label className="my-label" htmlFor="body">Body</label>
							<textarea
								onChange={this.handleOnInputChange}
								name="body"
								className="form-control"
								id="body" rows="3"
								value={body}
							/>
						</div>

						<button type="submit" className="my-button">Submit</button>
					</form>
					<p className="text-muted mt-3">{ loading && 'Added Successfully...' }</p>
				</form>
				{ this.renderNewPosts() }
				</div>
			</React.Fragment>
		);
	}
}


