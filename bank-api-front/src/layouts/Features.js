const Features = (feature) => {
  return (
    <div className="feature-item">
      <img src={feature.src} alt={feature.alt} className="feature-icon" />
      <h3 className="feature-item-title">{feature.title}</h3>
      <p>
        {feature.paragraph}
      </p>
    </div>
  )
}

export default Features