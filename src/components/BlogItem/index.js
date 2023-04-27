// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-details">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-description">{description}</p>
      </div>
      <p className="blog-date">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
