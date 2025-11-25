function ContentRow({ title, contents }) {
  return (
    <div className="content-row">
      <h3>{title}</h3>
      <div className="row-scroll">
        {contents.map(content => (
          <div className="card" key={content.id}>
            <img src={content.poster} alt={content.title} className="card-img"/>
            <h4>{content.title}</h4>
            <span className="card-year">{content.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ContentRow;
