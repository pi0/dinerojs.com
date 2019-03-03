export default ({ route, redirect }) => {
  if (route.name === 'index') {
    redirect('/getting-started/what-is-dinerojs')
  }
}
