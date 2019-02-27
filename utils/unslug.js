const overrides = {
  'what-is-dinerojs': 'What is Dinero.js?',
  api: 'API Reference',
  'transformation-and-formatting': 'Transformation & Formatting',
  'global-and-default-configuration': 'Global & Default Configuration',
  'to-json': 'To JSON',
  'global-exchange-rates-api-endpoint': 'Global Endpoint',
  'global-exchange-rates-api-property-path': 'Global Property Path',
  'global-exchange-rates-api-headers': 'Global Headers'
}

export default slug => {
  return (
    overrides[slug] ||
    slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}
